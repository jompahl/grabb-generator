(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(28),i=a.n(l),s=(a(77),a(5)),m=a(6),o=a(7),u=a(8),c=a(9),d=(a(78),a(32)),h=a(30),v=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.name,t=this.props.attributes,a=this.props.total,n=t.map(function(e){return r.a.createElement("div",{className:"attribute"},r.a.createElement("div",{className:"value"},e.value),r.a.createElement("div",{className:"shortName",title:e.name},e.shortName))});return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"total"},a),r.a.createElement("div",{className:"TotalText"},"TOT"),r.a.createElement("div",{className:"Name"},e),r.a.createElement("div",{className:"score"},n),r.a.createElement("div",{className:"DownText"},"GK19"))}}]),t}(n.Component),b=function e(t,a,n,r){var l=this;Object(s.a)(this,e),this.getTotal=function(){var e=l.attributes.reduce(function(e,t){return e+t.value},0);return Math.round(e/l.attributes.length)},this.name=t,this.attributes=a,this.points=n,this.wins=r},g=[new b("Jompahl",[{id:"l&d",name:"Life & Death",shortName:"L&D",value:97},{id:"agg",name:"Aggression",shortName:"AGG",value:94},{id:"phf",name:"P\xe5h\xe5llsf\xf6rm\xe5ga",shortName:"PHF",value:92},{id:"phr",name:"P\xe5h\xe5llsresistens",shortName:"PHR",value:97},{id:"kyl",name:"Kyla",shortName:"KYL",value:94},{id:"alm",name:"Allm\xe4nbildning",shortName:"ALM",value:90}],11,2),new b("Tobias",[{id:"l&d",name:"Life & Death",shortName:"L&D",value:97},{id:"agg",name:"Aggression",shortName:"AGG",value:94},{id:"phf",name:"P\xe5h\xe5llsf\xf6rm\xe5ga",shortName:"PHF",value:87},{id:"phr",name:"P\xe5h\xe5llsresistens",shortName:"PHR",value:70},{id:"kyl",name:"Kyla",shortName:"KYL",value:22},{id:"alm",name:"Allm\xe4nbildning",shortName:"ALM",value:99}],2,0),new b("Jojje",[{id:"l&d",name:"Life & Death",shortName:"L&D",value:82},{id:"agg",name:"Aggression",shortName:"AGG",value:97},{id:"phf",name:"P\xe5h\xe5llsf\xf6rm\xe5ga",shortName:"PHF",value:92},{id:"phr",name:"P\xe5h\xe5llsresistens",shortName:"PHR",value:71},{id:"kyl",name:"Kyla",shortName:"KYL",value:12},{id:"alm",name:"Allm\xe4nbildning",shortName:"ALM",value:80}],9,1),new b("Love",[{id:"l&d",name:"Life & Death",shortName:"L&D",value:95},{id:"agg",name:"Aggression",shortName:"AGG",value:94},{id:"phf",name:"P\xe5h\xe5llsf\xf6rm\xe5ga",shortName:"PHF",value:92},{id:"phr",name:"P\xe5h\xe5llsresistens",shortName:"PHR",value:97},{id:"kyl",name:"Kyla",shortName:"KYL",value:90},{id:"alm",name:"Allm\xe4nbildning",shortName:"ALM",value:87}],5,1),new b("Gurra",[{id:"l&d",name:"Life & Death",shortName:"L&D",value:32},{id:"agg",name:"Aggression",shortName:"AGG",value:94},{id:"phf",name:"P\xe5h\xe5llsf\xf6rm\xe5ga",shortName:"PHF",value:92},{id:"phr",name:"P\xe5h\xe5llsresistens",shortName:"PHR",value:99},{id:"kyl",name:"Kyla",shortName:"KYL",value:22},{id:"alm",name:"Allm\xe4nbildning",shortName:"ALM",value:72}],0,0),new b("Olle",[{id:"l&d",name:"Life & Death",shortName:"L&D",value:53},{id:"agg",name:"Aggression",shortName:"AGG",value:45},{id:"phf",name:"P\xe5h\xe5llsf\xf6rm\xe5ga",shortName:"PHF",value:67},{id:"phr",name:"P\xe5h\xe5llsresistens",shortName:"PHR",value:86},{id:"kyl",name:"Kyla",shortName:"KYL",value:12},{id:"alm",name:"Allm\xe4nbildning",shortName:"ALM",value:80}],0,0),new b("Arvid",[{id:"l&d",name:"Life & Death",shortName:"L&D",value:67},{id:"agg",name:"Aggression",shortName:"AGG",value:94},{id:"phf",name:"P\xe5h\xe5llsf\xf6rm\xe5ga",shortName:"PHF",value:92},{id:"phr",name:"P\xe5h\xe5llsresistens",shortName:"PHR",value:97},{id:"kyl",name:"Kyla",shortName:"KYL",value:45},{id:"alm",name:"Allm\xe4nbildning",shortName:"ALM",value:90}],9,1),new b("David",[{id:"l&d",name:"Life & Death",shortName:"L&D",value:97},{id:"agg",name:"Aggression",shortName:"AGG",value:94},{id:"phf",name:"P\xe5h\xe5llsf\xf6rm\xe5ga",shortName:"PHF",value:89},{id:"phr",name:"P\xe5h\xe5llsresistens",shortName:"PHR",value:46},{id:"kyl",name:"Kyla",shortName:"KYL",value:43},{id:"alm",name:"Allm\xe4nbildning",shortName:"ALM",value:82}],0,0),new b("Ogge",[{id:"l&d",name:"Life & Death",shortName:"L&D",value:92},{id:"agg",name:"Aggression",shortName:"AGG",value:97},{id:"phf",name:"P\xe5h\xe5llsf\xf6rm\xe5ga",shortName:"PHF",value:62},{id:"phr",name:"P\xe5h\xe5llsresistens",shortName:"PHR",value:89},{id:"kyl",name:"Kyla",shortName:"KYL",value:12},{id:"alm",name:"Allm\xe4nbildning",shortName:"ALM",value:80}],6,1),new b("Gunnar",[{id:"l&d",name:"Life & Death",shortName:"L&D",value:83},{id:"agg",name:"Aggression",shortName:"AGG",value:81},{id:"phf",name:"P\xe5h\xe5llsf\xf6rm\xe5ga",shortName:"PHF",value:67},{id:"phr",name:"P\xe5h\xe5llsresistens",shortName:"PHR",value:89},{id:"kyl",name:"Kyla",shortName:"KYL",value:45},{id:"alm",name:"Allm\xe4nbildning",shortName:"ALM",value:99}],2,6)],f=g[0],p=g[1],N=g[2],E=g[3],y=g[4],O=g[5],j=g[6],A=g[7],L=g[8],P=g[9],w=function(){return r.a.createElement("div",null,r.a.createElement(v,{name:f.name,attributes:f.attributes,total:f.getTotal()},r.a.createElement("button",null,"Hej")),r.a.createElement(v,{name:p.name,attributes:p.attributes,total:p.getTotal()}),r.a.createElement(v,{name:N.name,attributes:N.attributes,total:N.getTotal()}),r.a.createElement(v,{name:E.name,attributes:E.attributes,total:E.getTotal()}),r.a.createElement(v,{name:y.name,attributes:y.attributes,total:y.getTotal()}),r.a.createElement(v,{name:O.name,attributes:O.attributes,total:O.getTotal()}),r.a.createElement(v,{name:j.name,attributes:j.attributes,total:j.getTotal()}),r.a.createElement(v,{name:A.name,attributes:A.attributes,total:A.getTotal()}),r.a.createElement(v,{name:L.name,attributes:L.attributes,total:L.getTotal()}),r.a.createElement(v,{name:P.name,attributes:P.attributes,total:P.getTotal()}))},T=a(4),k=a(3),C=a(31),S=a(19),G=a.n(S);var R=function(e){var t=e.totalMoves;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"head"},"Jompahls Tic Tac Toe"),r.a.createElement("div",{className:"totalMoves"},"Moves: ",t," "))},D=a(59);var H=function(e){var t=e.hasWinner,a=e.handleRestart;return r.a.createElement("div",{id:"footer"},t?r.a.createElement("button",{className:"againButton",onClick:a},"Play Again?"):r.a.createElement("button",{className:"resetButton",onClick:a},r.a.createElement(D.a,null),r.a.createElement("span",null,"Reset")))},M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).decrementCount=function(){a.setState(function(e){return{count:e.count-1}})},a.reset=function(){a.setState({count:a.props.seconds})},a.start=function(){a.myInterval=setInterval(a.decrementCount,1e3)},a.stop=function(){clearInterval(a.myInterval),a.setState({count:a.state.count+parseInt(a.props.increment)})},a.state={count:parseInt(a.props.seconds)},a}return Object(c.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.props.isRunning&&!e.isRunning?this.start():!this.props.isRunning&&e.isRunning&&this.stop(),0===this.state.count&&0!==t.count&&this.props.onTimerEnded()}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval)}},{key:"render",value:function(){var e=this.state.count;return r.a.createElement("div",{className:"Timer"},e)}}]),t}(n.Component);var K={gameId:0,board:Array(9).fill(""),totalMoves:0,selected:null},x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getFirstRoundUpdates=function(e){if(""!==a.state.board[e])return null;var t=Object(C.a)(a.state.board);return t[e]=a.state.turn,{board:t}},a.getSecondRoundUpdates=function(e){var t=a.state,n=t.turn,r=t.selected,l=t.board,i=l[e];if(null==r)return i!==n?null:{selected:e};if(i===n)return{selected:e};if(""!==i)return null;var s=Object(C.a)(l);return s[e]=n,s[r]="",{board:s,selected:null}},a.handleClick=function(e){var t=a.state.totalMoves<6?a.getFirstRoundUpdates(e):a.getSecondRoundUpdates(e);if(!t)return null;var n=t.board,r=void 0===n?a.state.board:n,l=t.selected,i=void 0===l?a.state.selected:l,s=a.state.turn,m=a.state.totalMoves,o=Object(C.a)(a.state.games);r!==a.state.board&&(s="X"===s?"O":"X",m+=1,function(e){for(var t=[[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8]],a=0;a<t.length;a++){var n=t[a],r=e[n[0]],l=e[n[1]],i=e[n[2]];if(""!==r&&r===l&&l===i)return n}return null}(r)&&o.push({board:r,totalMoves:m,winner:a.state.turn,id:a.state.gameId}));a.setState({games:o,turn:s,totalMoves:m,selected:i,board:r},function(){console.log({selected:a.state.selected,turn:a.state.turn})})},a.onTimerEnded=function(e){var t=Object(C.a)(a.state.games);t.push({board:a.state.board,totalMoves:a.state.totalMoves,winner:"X"===e?"O":"X",id:a.state.gameId}),a.setState({games:t})},a.handleRestart=function(){var e=a.state,t=e.turn;e.totalMoves%2===0&&(t="X"===t?"O":"X"),a.setState(Object(k.a)({},K,{gameId:a.state.gameId+1,turn:t}))},a.state=Object(k.a)({},K,{games:[],timesXWon:0,turn:"X"}),a}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.board,n=t.totalMoves,l=t.turn,i=t.gameId,s=t.games,m=s[s.length-1],o=m&&m.id===i,u=s.filter(function(e){return"X"===e.winner}).length,c=s.filter(function(e){return"O"===e.winner}).length,d=n>0;return r.a.createElement("div",{id:"game"},r.a.createElement("div",{className:"timer-container"},this.props.player1Name," is playing X",r.a.createElement(M,{key:i,onTimerEnded:function(){e.onTimerEnded("X")},seconds:this.props.time,increment:this.props.increment,isRunning:!o&&d&&"X"===l}),"games won: ",u),r.a.createElement("div",{className:"board-container"},r.a.createElement(R,{totalMoves:n}),o&&r.a.createElement("div",null,"Won: ","X"===l?"O":"X"),r.a.createElement("div",{className:G()("board",{hasWinner:o})},a.map(function(t,a){return r.a.createElement("button",{key:a,className:G()("square",{isWinning:o&&m.winner===t,isSelected:e.state.selected===a,timesUp:o}),disabled:o,onClick:function(t){e.handleClick(a)}},t)})),r.a.createElement(H,{hasWinner:o,handleRestart:this.handleRestart})),r.a.createElement("div",{className:"timer-container"},this.props.player2Name," is playing O",r.a.createElement(M,{key:i,onTimerEnded:function(){e.onTimerEnded("O")},seconds:this.props.time,increment:this.props.increment,isRunning:!o&&d&&"O"===l}),"games won: ",c)," ")}}]),t}(n.Component),F=a(44),I=a(178),X=a(176),Y=a(60),W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={player1Name:"",player2Name:"",time:"3",increment:"2",didstart:!1},a.handleChange=a.handleChange.bind(Object(T.a)(Object(T.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(T.a)(Object(T.a)(a))),a}return Object(c.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){this.setState({didstart:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.player1Name,n=t.player2Name,l=t.time,i=t.increment;return t.didstart?r.a.createElement(x,this.state):r.a.createElement(F.a,{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",marginTop:50},r.a.createElement(F.a,{width:600,padding:20,borderRadius:3,border:"default",display:"flex",flexDirection:"column"},r.a.createElement(I.a,{label:" Player 1",placeholder:"Firstname Lastname",value:a,onChange:function(t){e.setState({player1Name:t.target.value})}}),r.a.createElement(I.a,{label:" Player 2",placeholder:"Firstname Lastname",value:n,onChange:function(t){e.setState({player2Name:t.target.value})}}),r.a.createElement(I.a,{type:"number",label:"Time",placeholder:"10",value:l,onChange:function(t){e.setState({time:t.target.value})}}),r.a.createElement(X.a,{label:"Time increment",value:i,onChange:function(t){e.setState({increment:t.target.value})}},Array.from({length:11},function(e,t){return r.a.createElement("option",{key:t,value:t},t)})),r.a.createElement(F.a,{display:"flex",justifyContent:"flex-end"},r.a.createElement(Y.a,{appearance:"primary",onClick:this.handleSubmit,iconBefore:"tick-circle"},"Start Game"))))}}]),t}(n.Component),B=a(174),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={winsSelected:!1},a}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return this.state.winsSelected?g.sort(function(e,t){return t.wins-e.wins}):g.sort(function(e,t){return t.points-e.points}),r.a.createElement(B.a,null,r.a.createElement(B.a.Head,null,r.a.createElement(B.a.TextHeaderCell,null,"Grabb"),r.a.createElement(B.a.TextHeaderCell,{isSelectable:!0,onSelect:function(){return e.setState({winsSelected:!0})}},"Vinster"),r.a.createElement(B.a.TextHeaderCell,null,"Po\xe4ng")),r.a.createElement(B.a.Body,{height:480},g.map(function(e){return r.a.createElement(B.a.Row,{key:e.name,isSelectable:!0,onSelect:function(){return alert("Du valde "+e.name+" han \xe4r en fin grabb")}},r.a.createElement(B.a.TextCell,null,e.name),r.a.createElement(B.a.TextCell,null,e.wins),r.a.createElement(B.a.TextCell,{isNumber:!0},e.points))})))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={table:Array(25).fill("")},a}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.table;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"RiddleBoard"},t.map(function(a){return r.a.createElement("input",{key:a,className:"Riddlesquare",type:"text",bsSize:"large",onChange:function(a){e.setState({table:t.push(a.target.value)})}})})),r.a.createElement("div",null,r.a.createElement("li",null,"1. ",t[5]," bor i det r\xf6da huset.")))}}]),t}(n.Component),q=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("nav",{className:"navigation"},r.a.createElement(d.b,{to:"/"},"Start"),r.a.createElement(d.b,{to:"/grabbar"},"Grabbar"),r.a.createElement(d.b,{to:"/grabbliga"},"GrabbLiga"),r.a.createElement(d.b,{to:"/settings"},"Tic Tac Toe"),r.a.createElement(d.b,{to:"/riddle"},"GrabbG\xe5ta")),r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",null,"jompahl bajs")}}),r.a.createElement(h.a,{path:"/grabbar",render:function(){return r.a.createElement(w,null)}}),r.a.createElement(h.a,{path:"/settings",render:function(){return r.a.createElement(W,null)}}),r.a.createElement(h.a,{path:"/grabbliga",render:function(){return r.a.createElement(U,null)}}),r.a.createElement(h.a,{path:"/riddle",render:function(){return r.a.createElement(J,null)}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,a){e.exports=a(162)},77:function(e,t,a){},78:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.7a2ea6c1.chunk.js.map