(this["webpackJsonptask-2"]=this["webpackJsonptask-2"]||[]).push([[0],[,,,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),i=t(5),j=t.n(i),a=(t(10),t(11),t(12),t(0));var r=function(){return Object(a.jsx)("div",{className:"TextField",children:Object(a.jsx)("input",{type:"text",placeholder:"Email"})})},l=t(3),b=t(2);t(14);var A=function(){var e=Object(n.useState)(!1),c=Object(b.a)(e,2),t=c[0],s=c[1],i=Object(n.useState)([{name:"\u0412\u0437\u0440\u043e\u0441\u043b\u044b\u0435",count:0},{name:"\u0414\u0435\u0442\u0438",count:0},{name:"\u041c\u043b\u0430\u0434\u0435\u043d\u0446\u044b",count:0}]),j=Object(b.a)(i,2),r=j[0],A=j[1];return Object(a.jsxs)("div",{className:"DropDown",children:[Object(a.jsxs)("div",{className:"Visitors",onClick:function(){return s(t=!t)},children:["\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0433\u043e\u0441\u0442\u0435\u0439"," ",t?Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACgSURBVHgBhY/BDcIwDEW/U+6Ue4sslQEYgEMFSLBF2QJO3GEK2IQRGIBDrty6QAg2UMlAEF+yYsXP/yeAqCjqEf6oLKeVntmQZ41z2A5yvratvyRhni+cu+37eQVhA+llBK2Z62USRthor2wmrmdxlyUaS01skoUJ8ej96UCdk7ivJKV5DXcBvfgJP3sju9TJwo9P2+H7877hn9IkrdTsDgIyPg9VLI9OAAAAAElFTkSuQmCC",alt:"\u2228"}):Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAICAYAAAAiJnXPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACiSURBVHgBhZAtDgJBDIW7OyFZgSgOsaISieAAI5EIDsDROArHWDly5cgR/L1HssmkmbBNmjZNv762IjCzOMBVVgw9e8ZA4CVyQ37aqU05p9ICRosR4bpVy31KjxJEZhT0DbilSKAXIVQ26A0sYvoEFf1gA/ihVqwBxDtE5s7tfIHakXPY8ETuAfZ1jWMXkEqDB36P8FC16tgC/hpuOS8v9vYFwvxCihzhgdcAAAAASUVORK5CYII=",alt:"\u2228"})]}),t?Object(a.jsx)("div",{className:"guest-list",children:r.map((function(e,c){return Object(a.jsxs)("div",{className:"guest-list-adults",children:[e.name,Object(a.jsxs)("div",{children:[0===e.count?Object(a.jsx)("div",{className:"minus",children:"-"}):Object(a.jsx)("div",{className:"minus clicked",onClick:function(){return function(e){var c=r.map((function(c,t){return e===t?Object(l.a)(Object(l.a)({},c),{},{count:c.count-1}):c}));A(c)}(c)},children:"-"}),Object(a.jsx)("div",{className:"count ",children:e.count}),Object(a.jsx)("div",{className:"plus clicked",onClick:function(){return function(e){var c=r.map((function(c,t){return e===t?Object(l.a)(Object(l.a)({},c),{},{count:c.count+1}):c}));A(c)}(c)},children:"+"})]})]},e.name)}))}):Object(a.jsx)("div",{})]})};t(15);var d=function(){var e=Object(n.useState)([{name:"\u041c\u043e\u0436\u043d\u043e \u043a\u0443\u0440\u0438\u0442\u044c",checked:!1},{name:"\u041c\u043e\u0436\u043d\u043e \u0441 \u043f\u0438\u0442\u043e\u043c\u0446\u0430\u043c\u0438",checked:!1},{name:"\u041c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c \u0433\u043e\u0441\u0442\u0435\u0439 (\u0434\u043e 10 \u0447\u0435\u043b\u043e\u0432\u0435\u043a)",checked:!1}]),c=Object(b.a)(e,2),t=c[0],s=c[1];function i(e){var c=t.map((function(c,n){return e===n?Object(l.a)(Object(l.a)({},c),{},{checked:!t[n].checked}):c}));s(c)}return Object(a.jsx)("div",{action:"none",className:"check-list",children:t.map((function(e,c){return Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",className:"checkbox"}),e.checked?Object(a.jsx)("span",{className:"checked",onClick:function(){i(c)},children:e.name}):Object(a.jsx)("span",{onClick:function(){i(c)},children:e.name})]},e.name)}))})};t(16);var u=function(){return Object(a.jsxs)("div",{className:"RadioButtons",children:[Object(a.jsx)("input",{type:"radio",name:"gender",id:"men"}),Object(a.jsx)("label",{for:"men",children:Object(a.jsx)("span",{children:"\u041c\u0443\u0436\u0447\u0438\u043d\u0430"})}),Object(a.jsx)("input",{type:"radio",name:"gender",id:"women"}),Object(a.jsx)("label",{for:"women",children:Object(a.jsx)("span",{children:"\u0416\u0435\u043d\u0449\u0438\u043d\u0430"})})]})};t(17);var o=function(){return Object(a.jsxs)("div",{className:"Subscription",children:[Object(a.jsx)("input",{type:"text",placeholder:"Email"}),Object(a.jsx)("button",{className:"arrow-button"})]})};t(18);var O=function(){return Object(a.jsxs)("label",{className:"checkbox",children:[Object(a.jsx)("input",{type:"checkbox"}),Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{className:"checkbox-circle"}),"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0441\u043f\u0435\u0446\u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f"]})]})};t(19);var x=function(e){var c=e.likeCount,t=Object(n.useState)(c),s=Object(b.a)(t,2),i=s[0],j=s[1],r=Object(n.useState)(!1),l=Object(b.a)(r,2),A=l[0],d=l[1];return Object(a.jsx)("div",{className:"LikeButton",children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox"}),Object(a.jsx)("div",{className:"container",onClick:function(){return d(A=!A),void j(!0===A?c+1:c)},children:Object(a.jsx)("span",{children:i})})]})})};t(20);var h=function(){var e=Object(n.useState)(["","","","",""]),c=Object(b.a)(e,2),t=c[0],s=c[1],i=Object(n.useRef)(-1);function j(e){var c=["","","","",""],n=0;i.current!==e?(c=t.map((function(c,t){return t+1<=e?(n++,"active"):""})),i.current=e):0===n&&(i.current=-1),s(c)}return Object(a.jsxs)("div",{className:"RateButton",children:[Object(a.jsx)("div",{className:"star-5 "+t[4],onClick:function(){return j(5)}}),Object(a.jsx)("div",{className:"star-4 "+t[3],onClick:function(){return j(4)}}),Object(a.jsx)("div",{className:"star-3 "+t[2],onClick:function(){return j(3)}}),Object(a.jsx)("div",{className:"star-2 "+t[1],onClick:function(){return j(2)}}),Object(a.jsx)("div",{className:"star-1 "+t[0],onClick:function(){return j(1)}})]})};t(21);var m=function(e){return e.Type,Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"full",children:"click me"}),Object(a.jsx)("button",{className:"border",children:"click me"}),Object(a.jsx)("button",{className:"none",children:"click me"}),Object(a.jsx)("button",{className:"go-to-pay",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u043f\u043b\u0430\u0442\u0435"})]})};t(22);var v=function(){return Object(a.jsx)("div",{className:"MaskedTextField",children:Object(a.jsx)("input",{type:"date"})})};t(23);var f=function(){return Object(a.jsxs)("div",{className:"RangeSlider",children:[Object(a.jsx)("input",{min:"500",max:"50000",step:"500",type:"range"}),Object(a.jsx)("input",{min:"500",max:"50000",step:"500",type:"range"})]})};var g=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:"logo"}),Object(a.jsxs)("div",{className:"Page",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Range Slider"}),Object(a.jsx)(f,{})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Masked Text Field"}),Object(a.jsx)(v,{})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Buttons"}),Object(a.jsx)(m,{Type:"full"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Rate Button"}),Object(a.jsx)(h,{})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Like Button"}),Object(a.jsx)(x,{likeCount:12})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Toggle"}),Object(a.jsx)(O,{})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Subscription Text Field"}),Object(a.jsx)(o,{})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Radio buttons"}),Object(a.jsx)(u,{})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Checkbox buttons"}),Object(a.jsx)(d,{})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Dropdown "}),Object(a.jsx)(A,{})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"text-field",children:[Object(a.jsx)("h3",{children:"Text Field"}),Object(a.jsx)("p",{children:"Default"})]}),Object(a.jsx)(r,{})]})]})]})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,i=c.getLCP,j=c.getTTFB;t(e),n(e),s(e),i(e),j(e)}))};j.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),k()}],[[24,1,2]]]);
//# sourceMappingURL=main.2b2c92ab.chunk.js.map