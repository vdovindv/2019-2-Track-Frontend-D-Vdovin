(this["webpackJsonptrack-mail-2019-dmitry"]=this["webpackJsonptrack-mail-2019-dmitry"]||[]).push([[0],{14:function(e,t,n){var r=n(48).default;e.exports=r()},32:function(e,t,n){e.exports=n.p+"static/media/logo.795fb555.svg"},36:function(e,t,n){e.exports=n(47)},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(17),o=n(20),i=n(14),u=n.n(i),l=n(11),s=n(28),d=n(29),m=n(34),E=n(30),f=n(35),p=n(12);function v(){var e=Object(l.a)(["\n  font-size: large;\n"]);return v=function(){return e},e}var h=p.a.p(v());var O=function(e){var t=e.increment,n=e.incrementIfOdd,r=e.decrement,c=e.counter;return a.a.createElement("section",null,a.a.createElement(h,null,"To get started, edit ",a.a.createElement("code",null,"src/routes/index.js "),"and save to reload."),a.a.createElement("p",null,"Clicked: ",c," times ",a.a.createElement("button",{onClick:t},"+")," ",a.a.createElement("button",{onClick:r},"-")," ",a.a.createElement("button",{onClick:n},"Increment if odd")))},g=n(9);var b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(a)))).increment=function(){n.props.dispatch({type:g.a.INCREMENT_COUNTER})},n.decrement=function(){n.props.dispatch({type:g.a.DECREMENT_COUNTER})},n.incrementIfOdd=function(){u.a.getState().counter%2!==0&&u.a.dispatch({type:g.a.INCREMENT_COUNTER})},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement(O,{counter:this.props.counter,increment:this.increment,decrement:this.decrement,incrementIfOdd:this.incrementIfOdd})}}]),t}(a.a.Component);var N=Object(o.b)((function(e){return{counter:e.counter}}))(b),C=n(32),T=n.n(C),R=n(16);function j(){var e=Object(l.a)(["\n  background-color: #222;\n  height: 150px;\n  padding: 20px;\n  color: #fff;\n\n  .redux-logo {\n    animation: "," infinite 20s linear;\n    height: 80px;\n  }\n"]);return j=function(){return e},e}function y(){var e=Object(l.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return y=function(){return e},e}var k=(new Date).getFullYear(),w=Object(R.b)(y()),I=p.a.div(j(),w);var x=function(){return a.a.createElement(I,null,a.a.createElement("img",{src:T.a,className:"redux-logo",alt:"logo"}),a.a.createElement("h2",null,"Track Mail.Ru, ",k))},M=n(50),U=n(5);function _(){var e=Object(l.a)(["\n  text-align: center;\n"]);return _=function(){return e},e}var D=p.a.div(_()),B=Object(U.a)();var J=function(){return a.a.createElement(M.b,{history:B},a.a.createElement(D,null,a.a.createElement(x,null),a.a.createElement(M.c,null,a.a.createElement(M.a,{path:"/",component:N}))))};n(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(c.render)(a.a.createElement(o.a,{store:u.a},a.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},48:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n(27),c=n(9),o=0;var i=Object(r.c)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;switch((arguments.length>1?arguments[1]:void 0).type){case c.a.INCREMENT_COUNTER:return e+1;case c.a.DECREMENT_COUNTER:return e-1;default:return e}}});n.d(t,"default",(function(){return s}));var u=[a.a],l=[r.a.apply(void 0,u)];function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.d.apply(void 0,[i,e].concat(l))}},9:function(e,t,n){"use strict";t.a={INCREMENT_COUNTER:"INCREMENT_COUNTER",DECREMENT_COUNTER:"DECREMENT_COUNTER"}}},[[36,1,2]]]);
//# sourceMappingURL=main.4ef24af2.chunk.js.map