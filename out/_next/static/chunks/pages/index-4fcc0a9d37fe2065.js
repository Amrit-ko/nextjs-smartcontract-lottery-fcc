(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{78581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(17440)}])},96301:function(e,t,n){"use strict";var a=n(37917),r=n(63021);e.exports={contractAddresses:a,abi:r}},17440:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var a=n(85893),r=n(7160),s=n.n(r),i=n(9008),u=n(34295);function o(){return(0,a.jsxs)("div",{className:"p-5 border-b-2 flex flex-row",children:[(0,a.jsx)("h1",{className:"py-4 px-4 font-blog text-3xl",children:"Decentralized Lottery "}),(0,a.jsx)("div",{className:"ml-auto py-2 px-4",children:(0,a.jsx)(u.NL,{})})]})}var c=n(34051),p=n.n(c),l=n(83078),f=n(96301),d=n(67294),m=n(35553),y=n(67605),b=n(26587),_=n(62),x=n(50615);function v(e,t,n,a,r,s,i){try{var u=e[s](i),o=u.value}catch(c){return void n(c)}u.done?t(o):Promise.resolve(o).then(a,r)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var s=e.apply(t,n);function i(e){v(s,a,r,i,u,"next",e)}function u(e){v(s,a,r,i,u,"throw",e)}i(void 0)}))}}function N(){var e=(0,l.Nr)(),t=e.chainId,n=e.isWeb3Enabled,r=parseInt(t),s=r in f.contractAddresses?f.contractAddresses[r][0]:null,i=(0,d.useState)("0"),o=i[0],c=i[1],v=(0,d.useState)("0"),N=v[0],w=v[1],g=(0,d.useState)("0"),E=g[0],j=g[1],R=31337==r?_.c:x.F,k=(0,y.v)({chain:R,transport:(0,b.d)()}),C=(0,u.lm)(),F=k.watchContractEvent({address:s,abi:f.abi,eventName:"WinnerPicked",onLogs:function(e){j(e[0].args.winner),w("0"),F()}}),L=(0,l.JX)({abi:f.abi,contractAddress:s,functionName:"enterRaffle",params:{},msgValue:o}),S=L.runContractFunction,A=L.isFetching,M=L.isLoading,O=(0,l.JX)({abi:f.abi,contractAddress:s,functionName:"getEntranceFee",params:{}}).runContractFunction,P=(0,l.JX)({abi:f.abi,contractAddress:s,functionName:"getNumberOfPlayers",params:{}}).runContractFunction,H=(0,l.JX)({abi:f.abi,contractAddress:s,functionName:"getRecentWinner",params:{}}).runContractFunction;function T(){return W.apply(this,arguments)}function W(){return(W=h(p().mark((function e(){var t,n,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:return t=e.sent.toString(),e.next=5,P();case 5:return n=e.sent.toString(),e.next=8,H();case 8:a=e.sent,c(t),w(n),j(a);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,d.useEffect)((function(){n&&T()}),[n]);var I=function(){var e=h(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.wait(1);case 2:e.sent,J(t),T();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){C({type:"info",message:"Transaction Complete",title:"Transaction Notification",position:"topR",icon:"bell"})};return(0,a.jsx)("div",{children:s?(0,a.jsxs)("div",{className:"p-5",children:[(0,a.jsx)("h1",{className:"py-4 px-4 font-bold text-3xl",children:"Lottery"}),(0,a.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto",onClick:h(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S({onSuccess:I,onError:function(e){return console.log(e)}});case 2:case"end":return e.stop()}}),e)}))),disabled:M||A,children:M||A?(0,a.jsx)("div",{className:"animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"}):"Enter Raffle"}),(0,a.jsxs)("p",{children:["EntranceFee:",m.bM(o,"ether")," ETH"]}),(0,a.jsxs)("p",{children:["NumberOfPlayers: ",N]}),(0,a.jsxs)("p",{children:["RecentWinner: ",E]})]}):(0,a.jsx)("div",{children:" No Raffle Address detected"})})}function w(){return(0,a.jsxs)("div",{className:s().container,children:[(0,a.jsxs)(i.default,{children:[(0,a.jsx)("title",{children:"Smart Contract Lottery"}),(0,a.jsx)("meta",{name:"description",content:"Our Smart Contract Lottery"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(o,{}),(0,a.jsx)(N,{})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},63021:function(e){"use strict";e.exports=JSON.parse('[{"type":"constructor","stateMutability":"undefined","payable":false,"inputs":[{"type":"address","name":"vrfCoordinatorV2"},{"type":"uint256","name":"entranceFee"},{"type":"bytes32","name":"gasLane"},{"type":"uint64","name":"subscriptionId"},{"type":"uint32","name":"callbackGasLimit"},{"type":"uint256","name":"interval"}]},{"type":"error","name":"OnlyCoordinatorCanFulfill","inputs":[{"type":"address","name":"have"},{"type":"address","name":"want"}]},{"type":"error","name":"Raffle__NotEnoughETHEntered","inputs":[]},{"type":"error","name":"Raffle__NotOpen","inputs":[]},{"type":"error","name":"Raffle__TransferFailed","inputs":[]},{"type":"error","name":"Raffle__UpkeepNotNeeded","inputs":[{"type":"uint256","name":"currentBalance"},{"type":"uint256","name":"numPlayers"},{"type":"uint256","name":"raffleState"}]},{"type":"event","anonymous":false,"name":"RaffleEnter","inputs":[{"type":"address","name":"player","indexed":true}]},{"type":"event","anonymous":false,"name":"RequestedRaffleWinner","inputs":[{"type":"uint256","name":"requestId","indexed":true}]},{"type":"event","anonymous":false,"name":"WinnerPicked","inputs":[{"type":"address","name":"winner","indexed":true}]},{"type":"function","name":"checkUpkeep","constant":false,"payable":false,"inputs":[{"type":"bytes","name":""}],"outputs":[{"type":"bool","name":"upkeepNeeded"},{"type":"bytes","name":""}]},{"type":"function","name":"enterRaffle","constant":false,"stateMutability":"payable","payable":true,"inputs":[],"outputs":[]},{"type":"function","name":"getEntranceFee","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256","name":""}]},{"type":"function","name":"getInterval","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256","name":""}]},{"type":"function","name":"getLatestTimeStamp","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256","name":""}]},{"type":"function","name":"getNumWords","constant":true,"stateMutability":"pure","payable":false,"inputs":[],"outputs":[{"type":"uint256","name":""}]},{"type":"function","name":"getNumberOfPlayers","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256","name":""}]},{"type":"function","name":"getPlayers","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"_id"}],"outputs":[{"type":"address","name":""}]},{"type":"function","name":"getRaffleState","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint8","name":""}]},{"type":"function","name":"getRecentWinner","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"address","name":""}]},{"type":"function","name":"getRequestConfirmations","constant":true,"stateMutability":"pure","payable":false,"inputs":[],"outputs":[{"type":"uint256","name":""}]},{"type":"function","name":"performUpkeep","constant":false,"payable":false,"inputs":[{"type":"bytes","name":""}],"outputs":[]},{"type":"function","name":"rawFulfillRandomWords","constant":false,"payable":false,"inputs":[{"type":"uint256","name":"requestId"},{"type":"uint256[]","name":"randomWords"}],"outputs":[]}]')},37917:function(e){"use strict";e.exports=JSON.parse('{"31337":["0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"],"11155111":["0x6dB76419B077A25038c4179E16032f6e48291Ac8"]}')}},function(e){e.O(0,[541,774,888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);