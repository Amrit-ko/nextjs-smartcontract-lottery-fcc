import { useWeb3Contract, useMoralis } from "react-moralis"
import { abi, contractAddresses } from "../constants/index"
import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { useNotification } from "web3uikit"
import { createPublicClient, http } from "viem"
import { hardhat, sepolia } from "viem/chains"

export default function LotteryEntrance() {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
    const [entranceFee, setEntranceFee] = useState("0")
    const [numberOfPlayers, setNumberOfPlayers] = useState("0")
    const [recentWinner, setRecentWinner] = useState("0")
    const viemNet = chainId == 31337 ? hardhat : sepolia

    const publicClient = createPublicClient({
        chain: viemNet,
        transport: http(),
    })

    const dispatch = useNotification()

    const unwatch = publicClient.watchContractEvent({
        address: raffleAddress,
        abi: abi,
        eventName: "WinnerPicked",
        onLogs: (logs) => {
            setRecentWinner(logs[0].args.winner)
            setNumberOfPlayers("0")
            unwatch()
        },
    })

    const {
        runContractFunction: enterRaffle,
        isFetching,
        isLoading,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "enterRaffle",
        params: {},
        msgValue: entranceFee,
    })

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getEntranceFee",
        params: {},
    })
    const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getNumberOfPlayers",
        params: {},
    })
    const { runContractFunction: getRecentWinner } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getRecentWinner",
        params: {},
    })

    async function updateUI() {
        const entranceFeeFromCall = (await getEntranceFee()).toString()
        const numberOfPlayersFromCall = (await getNumberOfPlayers()).toString()
        const recentWinnerFromCall = await getRecentWinner()
        setEntranceFee(entranceFeeFromCall)
        setNumberOfPlayers(numberOfPlayersFromCall)
        setRecentWinner(recentWinnerFromCall)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])

    const handleSuccess = async (tx) => {
        const txReceipt = await tx.wait(1)
        handleNewNotification(tx)
        updateUI()
    }
    const handleNewNotification = () => {
        dispatch({
            type: "info",
            message: "Transaction Complete",
            title: "Transaction Notification",
            position: "topR",
            icon: "bell",
        })
    }

    return (
        <div>
            {raffleAddress ? (
                <div className="p-5">
                    <h1 className="py-4 px-4 font-bold text-3xl">Lottery</h1>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto"
                        onClick={async () => {
                            await enterRaffle({
                                onSuccess: handleSuccess,
                                onError: (err) => console.log(err),
                            })
                        }}
                        disabled={isLoading || isFetching}
                    >
                        {isLoading || isFetching ? (
                            <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"></div>
                        ) : (
                            "Enter Raffle"
                        )}
                    </button>

                    <p>EntranceFee:{ethers.utils.formatUnits(entranceFee, "ether")} ETH</p>
                    <p>NumberOfPlayers: {numberOfPlayers}</p>
                    <p>RecentWinner: {recentWinner}</p>
                </div>
            ) : (
                <div> No Raffle Address detected</div>
            )}
        </div>
    )
}
