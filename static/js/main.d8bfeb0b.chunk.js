(this["webpackJsonprainly-react-app-2"]=this["webpackJsonprainly-react-app-2"]||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),s=n(5),i=n.n(s),a=(n(11),n(12),n(2)),u=n(4),o=n.n(u),j=n(6),l=(n(14),n(0));function p(){var t=Object(c.useState)("../../data/db.json"),e=Object(a.a)(t,2),n=e[0],r=e[1],s=function(t){var e=Object(c.useState)(null),n=Object(a.a)(e,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),{data:r}}(n),i=s.data;return Object(l.jsxs)("div",{className:"trip-list",children:[Object(l.jsx)("h2",{children:"Trip List"}),Object(l.jsx)("ul",{children:i&&i.map((function(t){return Object(l.jsxs)("li",{children:[Object(l.jsx)("h3",{children:t.title}),Object(l.jsx)("p",{children:t.price})]},t.id)}))}),Object(l.jsxs)("div",{className:"filters",children:[Object(l.jsx)("button",{onClick:function(){return r("http://localhost:3000/trips?loc=europe")},children:"European Trips"}),Object(l.jsx)("button",{onClick:function(){return r("http://localhost:3000/trips")},children:"All Trips"})]})]})}var b=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(p,{})})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d8bfeb0b.chunk.js.map