"use strict";(self.webpackChunkeducation_app=self.webpackChunkeducation_app||[]).push([[932],{83:function(e,a,n){n(791);var t=n(757),s=n(184);a.Z=function(e){var a=e.title;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("section",{className:"back",children:[(0,s.jsx)("h1",{children:a}),(0,s.jsx)(t.Z,{})]}),(0,s.jsx)("div",{className:"margin"})]})}},757:function(e,a,n){n.d(a,{Z:function(){return s}});n(791);var t=n(184),s=function(){return(0,t.jsxs)("div",{className:"clouds",children:[(0,t.jsx)("img",{src:"/images/clouds_animate/cloud1.png",alt:"",style:{"--i":1}}),(0,t.jsx)("img",{src:"/images/clouds_animate/cloud2.png",alt:"",style:{"--i":2}}),(0,t.jsx)("img",{src:"/images/clouds_animate/cloud3.png",alt:"",style:{"--i":3}}),(0,t.jsx)("img",{src:"/images/clouds_animate/cloud4.png",alt:"",style:{"--i":4}}),(0,t.jsx)("img",{src:"/images/clouds_animate/cloud5.png",alt:"",style:{"--i":5}})]})}},557:function(e,a,n){n.d(a,{Z:function(){return c}});var t=n(439),s=n(791),l=n(184),c=function(e){var a=e.options,n=e.onChange,c=e.title,r=(0,s.useState)(""),i=(0,t.Z)(r,2),u=i[0],d=i[1];return(0,l.jsxs)("select",{value:u,onChange:function(e){var a=e.target.value;d(a),n(a)},className:"dropdown",children:[(0,l.jsx)("option",{value:"",children:c}),a.map((function(e){return(0,l.jsx)("option",{value:e.value,children:e.label},e.value)}))]})}},932:function(e,a,n){n.r(a),n.d(a,{default:function(){return m}});var t=n(165),s=n(861),l=n(439),c=n(791),r=n(243),i=n(83),u=n(557),d=n(433),o=n(184),h=function(e){var a=e.scheduleData,n=e.selectedClass,t=e.selectedDay,s=e.tableRef,r=(0,c.useState)(!1),i=(0,l.Z)(r,2),u=i[0],h=i[1],f=a[n];if(!f)return null;for(var m=Object.keys(f),j=0,x=0,p=m;x<p.length;x++){var v=p[x],g=f[v].length;g>j&&(j=g)}var b=(0,d.Z)(new Array(j)).map((function(e,a){return a+1})),y=u?"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0440\u043e\u0437\u043a\u043b\u0430\u0434 \u043d\u0430 \u043e\u0434\u0438\u043d \u0434\u0435\u043d\u044c \u0442\u0438\u0436\u043d\u044f":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0440\u043e\u0437\u043a\u043b\u0430\u0434 \u043d\u0430 \u0432\u0435\u0441\u044c \u0442\u0438\u0436\u0434\u0435\u043d\u044c";return(0,o.jsxs)("div",{className:"tableschedule-container",children:[(0,o.jsxs)("button",{className:"primary-btn schedule",onClick:function(){return h(!u)},children:[y,(0,o.jsx)("i",{class:"fa fa-fw fa-calendar"})]}),(0,o.jsxs)("table",{className:"tableSchedule",ref:s,children:[(0,o.jsxs)("thead",{className:"tableSchedule_head",children:[(0,o.jsx)("tr",{children:(0,o.jsx)("th",{className:"tableSchedule_head",colSpan:u?m.length+1:2,children:n})}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{className:"tableSchedule_head",children:"\u041d\u043e\u043c\u0435\u0440 \u0443\u0440\u043e\u043a\u0430"}),m.map((function(e,a){return(u||e===t)&&(0,o.jsx)("th",{className:"tableSchedule_head",children:e},a)}))]})]}),(0,o.jsx)("tbody",{children:b.map((function(e){return(0,o.jsxs)("tr",{className:"tableSchedule_tr",children:[(0,o.jsx)("td",{className:"tableSchedule_td",children:e}),m.map((function(a,n){return(u||a===t)&&(0,o.jsx)("td",{className:"tableSchedule_td",children:e<=f[a].length?f[a][e-1]:null},n)}))]},e)}))})]})]})},f=function(e){var a=e.selectedDay,n=e.weekdays,t=e.onDayChange;return(0,o.jsxs)("div",{className:"dayfilter",children:[(0,o.jsx)("p",{className:"filter-title",children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0434\u0435\u043d\u044c \u0442\u0438\u0436\u043d\u044f:"}),(0,o.jsx)("div",{className:"label-wrapper",children:n.map((function(e,n){return(0,o.jsxs)("label",{className:"filter-label",children:[(0,o.jsx)("input",{className:"filter-input",type:"radio",value:e,checked:a===e,onChange:function(){return t(e)}}),e]},e)}))})]})},m=function(){var e=(0,c.useState)(null),a=(0,l.Z)(e,2),n=a[0],d=a[1],m=(0,c.useState)(null),j=(0,l.Z)(m,2),x=j[0],p=j[1],v=(0,c.useState)(null),g=(0,l.Z)(v,2),b=g[0],y=g[1],N=(0,c.useRef)(null);(0,c.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.Z.get("/data/scheduleData.json");case 3:a=e.sent,d(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching data:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,c.useEffect)((function(){N.current&&b&&N.current.scrollIntoView({behavior:"smooth"})}),[b]);return n?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{title:"\u0420\u043e\u0437\u043a\u043b\u0430\u0434 \u0443\u0440\u043e\u043a\u0456\u0432"}),(0,o.jsx)("section",{className:"schedule",children:(0,o.jsxs)("div",{className:"container scheduleFlex",children:[(0,o.jsx)(u.Z,{options:Object.keys(n).map((function(e){return{value:e,label:e}})),onChange:function(e){p(e),y(Object.keys(n[e])[0])},title:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u043b\u0430\u0441"}),x&&n[x]&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f,{selectedDay:b,weekdays:Object.keys(n[x]),onDayChange:function(e){y(e)}}),(0,o.jsx)(h,{scheduleData:n,selectedClass:x,selectedDay:b,tableRef:N})]})]})})]}):(0,o.jsx)("div",{})}}}]);
//# sourceMappingURL=932.714b02db.chunk.js.map