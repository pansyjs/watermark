(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"81Wo":function(e,t,a){"use strict";var n=a("1QO0"),r=a.n(n),l=a("bIC1"),c=a.n(l);a("VfxR");function s(e,t){return d(e)||u(e,t)||o(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function u(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],c=!0,s=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(l.push(n.value),t&&l.length===t)break}catch(m){s=!0,r=m}finally{try{c||null==a["return"]||a["return"]()}finally{if(s)throw r}}return l}}function d(e){if(Array.isArray(e))return e}var p=function(e){var t=e.children,a=Object(n["useRef"])(),l=Object(n["useState"])(!1),m=s(l,2),o=m[0],i=m[1],u=Object(n["useState"])(!1),d=s(u,2),p=d[0],w=d[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){i(e.scrollLeft>0),w(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":o||void 0,"data-right-folded":p||void 0},r.a.createElement("table",null,t)))};t["a"]=p},"F+kV":function(e,t,a){"use strict";a.r(t);var n=a("1QO0"),r=a.n(n),l=a("8Yim"),c=a("81Wo"),s=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u5305\u770b\u677f"},r.a.createElement(l["AnchorLink"],{to:"#\u5305\u770b\u677f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5305\u770b\u677f"),r.a.createElement(c["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u7ec4\u4ef6"),r.a.createElement("th",null,"\u4e0b\u8f7d\u91cf"),r.a.createElement("th",null,"\u7248\u672c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"@pansy/watermark"),r.a.createElement("td",null,r.a.createElement(l["Link"],{to:"https://www.npmjs.com/package/@pansy/watermark"},r.a.createElement("img",{src:"https://img.shields.io/npm/dw/@pansy/watermark.svg",alt:"watermark"}))),r.a.createElement("td",null,r.a.createElement(l["Link"],{to:"https://www.npmjs.com/package/@pansy/watermark"},r.a.createElement("img",{src:"https://img.shields.io/npm/v/@pansy/watermark.svg?style=flat-square?style=flat-square",alt:"npm package"})))),r.a.createElement("tr",null,r.a.createElement("td",null,"@pansy/react-watermark"),r.a.createElement("td",null,r.a.createElement(l["Link"],{to:"https://www.npmjs.com/package/@pansy/react-watermark"},r.a.createElement("img",{src:"https://img.shields.io/npm/dw/@pansy/react-watermark.svg",alt:"react-watermark"}))),r.a.createElement("td",null,r.a.createElement(l["Link"],{to:"https://www.npmjs.com/package/@pansy/react-watermark"},r.a.createElement("img",{src:"https://img.shields.io/npm/v/@pansy/react-watermark.svg?style=flat-square?style=flat-square",alt:"npm package"})))),r.a.createElement("tr",null,r.a.createElement("td",null,"@pansy/vue-watermark"),r.a.createElement("td",null,r.a.createElement(l["Link"],{to:"https://www.npmjs.com/package/@pansy/vue-watermark"},r.a.createElement("img",{src:"https://img.shields.io/npm/dw/@pansy/vue-watermark.svg",alt:"vue-watermark"}))),r.a.createElement("td",null,r.a.createElement(l["Link"],{to:"https://www.npmjs.com/package/@pansy/vue-watermark"},r.a.createElement("img",{src:"https://img.shields.io/npm/v/@pansy/vue-watermark.svg?style=flat-square?style=flat-square",alt:"npm package"}))))))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),a=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(s,{demos:a})}},VfxR:function(e,t,a){}}]);