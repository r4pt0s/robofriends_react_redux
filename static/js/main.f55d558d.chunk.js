(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,n,t){e.exports=t(42)},36:function(e,n,t){},38:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(11),i=t.n(a),c=t(3),s=t(2),l=t(14),u=t(15),d=(t(36),t(16)),h=t(17),f=t(19),g=t(18),p=t(21),b=function(e){var n=e.name,t=e.email,r=e.id;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?150x150")}),o.a.createElement("div",null,o.a.createElement("p",null,n),o.a.createElement("p",null,t)))},E=function(e){var n=e.robots;return o.a.createElement("div",null,n.map(function(e,n){return o.a.createElement(b,{key:e.id,name:e.name,email:e.email,id:e.id})}))},m=function(e){var n=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},v=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"3px solid black",height:"550px"}},e.children)},w=(t(38),function(e){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.isPending,t=e.error;return n?o.a.createElement("h1",null,"LOADING"):""!==t?o.a.createElement("h1",null,t):this.displayPage()}},{key:"displayPage",value:function(){var e=this.props,n=e.robots,t=e.onSearchChange,r=e.searchField,a=n.filter(function(e){return e.name.toLowerCase().includes(r.toLowerCase())});return o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"}," RoboFriends"),o.a.createElement(m,{searchChange:t}),o.a.createElement(v,null,o.a.createElement(E,{robots:a})))}}]),n}(r.Component)),O=Object(c.b)(function(e){return{searchField:e.searchRobots.searchField,isPending:e.requestRobots.isPending,robots:e.requestRobots.robots,error:e.requestRobots.error}},function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})}).catch(function(n){e({type:"REQUEST_ROBOTS_FAILED",payload:n})})})}}})(w),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var S=t(20),_={searchField:""},j={isPending:!1,robots:[],error:""},C=(t(40),Object(l.createLogger)()),k=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(S.a)({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),N=Object(s.d)(k,Object(s.a)(u.a,C));i.a.render(o.a.createElement(c.a,{store:N},o.a.createElement(O,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends_react_redux",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/robofriends_react_redux","/service-worker.js");y?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):R(e)})}}()}},[[22,2,1]]]);
//# sourceMappingURL=main.f55d558d.chunk.js.map