(this.webpackJsonpexam=this.webpackJsonpexam||[]).push([[0],{11:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);a(0),a(11);var n=a(4),c=a.n(n),r=a(3),l=(a(18),a(2)),s={titleValue:"0",minValue:0,maxValue:10},u=(a(6),a(1)),i=function(e){var t=e.name,a=e.callBack,n=e.disabled;return Object(u.jsx)("button",{type:"submit",disabled:n,className:"btn",onClick:function(){return a()},children:t})},o=function(e){var t=e.titleValue,a=e.maxValue;return Object(u.jsx)("h1",{style:+t>=a?{color:"red"}:{color:"black"},className:"counterTitle",children:t})},b=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.counter})),a=t.titleValue,n=t.maxValue,c=t.minValue,l=n<=+a,s=+a!==n,b=n<=c||n<0||c<0;return Object(u.jsxs)("div",{className:"counterWrapper",children:[Object(u.jsx)(o,{titleValue:a,maxValue:n}),Object(u.jsxs)("div",{className:"counterWrapperBtn",children:[Object(u.jsx)(i,{name:"inc",callBack:function(){e(function(e){return{type:"INCREMENT",payload:{titleValue:e}}}(+a))},disabled:l}),Object(u.jsx)(i,{name:"reset",callBack:function(){e({type:"RESET"})},disabled:s})]}),Object(u.jsxs)("div",{children:[b&&Object(u.jsx)("div",{className:"errorSpan",children:"data is incorrect"}),Object(u.jsx)("div",{className:b?"errorClass":"normalClass",children:Object(u.jsxs)("div",{className:"formWrapper",children:[Object(u.jsxs)("div",{className:"formWrapperBox",children:[Object(u.jsxs)("label",{className:"formWrapperLabel",children:[Object(u.jsx)("span",{className:"formWrapperSpan",children:"Max:"}),Object(u.jsx)("input",{className:"input",onChange:function(t){e({type:"MAX_VALUE_CHANGE",payload:{newNumber:+t.currentTarget.value}}),e({type:"ERROR"})},value:n,type:"number"})]}),Object(u.jsxs)("label",{className:"formWrapperLabel",children:[Object(u.jsx)("span",{className:"formWrapperSpan",children:"Min:"}),Object(u.jsx)("input",{className:"input",onChange:function(t){e({type:"START_VALUE_CHANGE",payload:{newNumber:+t.currentTarget.value}}),e({type:"ERROR"})},value:c,type:"number"})]})]}),Object(u.jsx)(i,{name:"set",callBack:function(){e({type:"MIN_TITLE",payload:{newNumber:c}})},disabled:b})]})})]})]})},j=function(){return Object(u.jsx)("div",{className:"appWrapper",children:Object(u.jsx)(b,{})})},p=a(8),d=Object(p.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":var a=1;return Object(l.a)(Object(l.a)({},e),{},{titleValue:"".concat(+t.payload.titleValue+a)});case"RESET":return Object(l.a)(Object(l.a)({},e),{},{titleValue:"".concat(e.minValue)});case"START_VALUE_CHANGE":return Object(l.a)(Object(l.a)({},e),{},{minValue:t.payload.newNumber});case"MAX_VALUE_CHANGE":return Object(l.a)(Object(l.a)({},e),{},{maxValue:t.payload.newNumber});case"MIN_TITLE":return Object(l.a)(Object(l.a)({},e),{},{titleValue:"".concat(t.payload.newNumber)});case"ERROR":return Object(l.a)(Object(l.a)({},e),{},{titleValue:"PRESS SET!!!"});default:return e}}}),m=Object(p.b)(d,function(){try{var e=localStorage.getItem("app-state");if(null===e)return;return JSON.parse(e)}catch(t){return}}());m.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("app-state",t)}catch(a){}}({counter:m.getState().counter})}));var O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))};c.a.render(Object(u.jsx)(r.a,{store:m,children:Object(u.jsx)(j,{})}),document.getElementById("root")),O()},6:function(e,t,a){}},[[20,1,2]]]);
//# sourceMappingURL=main.bf0f2df1.chunk.js.map