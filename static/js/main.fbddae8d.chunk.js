(this["webpackJsonpreact-form"]=this["webpackJsonpreact-form"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(4),o=n.n(a),r=n(2),i=(n(9),n(10),n(0)),l=function(e){var t=e.activeColor,n=e.name,c=e.activeTextType,a=e.activeTextColor;return Object(i.jsx)("header",{style:{backgroundColor:t,textTransform:c},children:Object(i.jsxs)("h1",{style:{color:a},children:["Hello, ",n,"!"]})})};l.defaultProps={name:"Name",activeColor:"plum",activeTextType:"capitalize",activeTextColor:"black"};var u=l,s=(n(12),function(e){var t=e.type,n=e.name,c=e.onClick;return Object(i.jsx)("button",{type:t,className:"button",onClick:c,children:n})});s.defaultProps={type:"Button",name:"Submit"};var j=s,b=(n(13),function(e){var t=e.feature,n=e.type,c=e.onChange;return Object(i.jsxs)("div",{class:"inline-div",children:[Object(i.jsx)("label",{for:t,children:"Edit ".concat(t)}),Object(i.jsx)("input",{id:t,type:n,onChange:c})]})});b.defaultProps={feature:"colour",type:"text"};var p=b,x=(n(14),function(e){var t=e.setActiveColor,n=e.setActiveTextType,a=e.setActiveTextColor,o=Object(c.useState)(null),l=Object(r.a)(o,2),u=l[0],s=l[1],b=Object(c.useState)(null),x=Object(r.a)(b,2),v=x[0],f=x[1],O=Object(c.useState)("capitalize"),d=Object(r.a)(O,2),h=d[0],C=d[1];return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(u),n(h),a(v),alert("You changed the from to include ".concat(u,", ").concat(v," and ").concat(h,"!"))},children:[Object(i.jsx)(p,{type:"text",feature:"colour",onChange:function(e){return s(e.target.value)}}),Object(i.jsx)(j,{name:"Change",type:"button",onClick:function(e){e.preventDefault(),t(u)}}),Object(i.jsx)(p,{type:"text",feature:"text-colour",onChange:function(e){return f(e.target.value)}}),Object(i.jsx)(j,{name:"Change",type:"button",onClick:function(e){e.preventDefault(),a(v)}}),Object(i.jsx)("label",{for:"textType",children:"Edit text transform type"}),Object(i.jsxs)("select",{id:"textType",onChange:function(e){return C(e.target.value)},children:[Object(i.jsx)("option",{value:""}),Object(i.jsx)("option",{value:"lowercase",children:"lowercase"}),Object(i.jsx)("option",{value:"uppercase",children:"uppercase"}),Object(i.jsx)("option",{value:"capitalize",children:"capitalize"})]}),Object(i.jsx)(j,{name:"Change",type:"button",onClick:function(e){e.preventDefault(),n(h)}}),Object(i.jsx)(j,{name:"Submit",type:"submit"})]})});function v(){var e=Object(c.useState)("plum"),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)("capitalize"),l=Object(r.a)(o,2),s=l[0],j=l[1],b=Object(c.useState)("black"),p=Object(r.a)(b,2),v=p[0],f=p[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(u,{name:"Chrisi",activeColor:n,activeTextType:s,activeTextColor:v}),Object(i.jsx)(x,{setActiveColor:a,setActiveTextType:j,setActiveTextColor:f}),Object(i.jsx)("p",{children:"Please use the CSS properties when providing answers!"})]})}o.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.fbddae8d.chunk.js.map