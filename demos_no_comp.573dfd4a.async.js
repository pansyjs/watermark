(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"+ljJ":function(e,t,a){"use strict";a.r(t);a("S8nE");var r=a("fjQU"),n=(a("ld8g"),a("SJBw")),i=a("Vhn3"),o=a("1QO0"),c=a.n(o),s=a("pBEt");t["default"]=()=>{var e=Object(o["useState"])(!1),t=Object(i["a"])(e,2),a=t[0],u=t[1],l=()=>{u(!0)},m=()=>{u(!1)};return c.a.createElement("div",null,c.a.createElement(r["b"],null,c.a.createElement(n["a"],{onClick:l},"\u663e\u793a"),c.a.createElement(n["a"],{onClick:m},"\u9690\u85cf")),c.a.createElement(s["a"],{isBody:!0,visible:a,text:"\u6d4b\u8bd5\u6c34\u5370"}))}},"30CX":function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return c}));var r=a("ULjY"),n=a("tGGB"),i=a("NUIj"),o=a.n(i),c={gapX:100,gapY:100,offsetLeft:0,offsetTop:0,width:120,height:64,opacity:.15,rotate:-22,fontSize:16,fontStyle:"normal",fontVariant:"normal",fontWeight:"300",fontColor:"#000",fontFamily:"sans-serif",textAlign:"center",textBaseline:"alphabetic",monitor:!0,zIndex:9999,mode:"interval"},s="data-watermark-tag",u={childList:!0,subtree:!0,attributeFilter:["style",s]};function l(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function m(e){return e.split("-").slice(1).reduce(((e,t,a)=>0===a?t:"".concat(e).concat(t[0].toUpperCase()+t.slice(1))))}var d=e=>{var t="";return Object.keys(e).forEach((a=>{var r=a.replace(/([A-Z])/g,"-$1").toLowerCase();t+="".concat(r,":").concat(e[a],";")})),t},h=e=>window.btoa(decodeURI(encodeURIComponent(e))),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(h(e),"-").concat((new Date).getTime(),"-").concat(Math.floor(Math.random()*Math.pow(10,8)))},v=function(e,t){var a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof e){if(a=document.getElementById(e),!a)throw new Error("\u6c34\u5370\u6302\u8f7d\u8282\u70b9\u672a\u627e\u5230\uff0c\u8bf7\u68c0\u67e5#".concat(e,"\u662f\u5426\u5b58\u5728"))}else a=null!==e&&void 0!==e?e:document.body;a.setAttribute(s,t);var i=Object(r["a"])({position:"relative"},n);return a.setAttribute("style",d(i)),a},f=e=>{var t=document.createElement("div");return t.setAttribute("style",d({pointerEvents:"none"})),t.setAttribute(s,e),t};function w(e){var t=e,a=t.text,r=t.gapX,n=t.gapY,i=t.offsetTop,o=t.offsetLeft,c=t.width,s=t.height,u=t.rotate,l=t.opacity,m=t.fontSize,d=t.fontStyle,h=t.fontVariant,p=t.fontWeight,v=t.fontFamily,f=t.fontColor,w=t.textAlign,b=t.image;return new Promise(((e,t)=>{var g=document.createElement("canvas"),E=g.getContext("2d"),k=1,y=(Number(r)+Number(c))*k,O=(Number(n)+Number(s))*k,j=Number(o)||Number(r)/2,x=Number(i)||Number(n)/2;if(g.setAttribute("width","".concat(y,"px")),g.setAttribute("height","".concat(O,"px")),E){var C=c*k,S=s*k;if(E.globalAlpha=l,E.translate(j*k,x*k),E.rotate(Math.PI/180*Number(u)),b){var A=new Image;return A.crossOrigin="anonymous",A.referrerPolicy="no-referrer",A.src=b,void(A.onload=()=>{E.drawImage(A,0,0,C,S),e({url:E.canvas.toDataURL(),width:y,height:O})})}var R=Array.isArray(a)?a:[a],N=R.map((e=>E.measureText(e).width)),T=Math.max(...N),D=Number(m)*k;E.textAlign=w,E.fillStyle=f,E.font=_("".concat(D,"px")),T>c&&(E.font=_("".concat(D/2,"px")));var B=D+5,I=(S-(m*R.length+5*(R.length-1)))/2;I=I<0?0:I;for(var Q=0;Q<R.length;Q++)E.fillText(R[Q]||"",C/2,I+B*Q);e({url:E.canvas.toDataURL(),width:y,height:O})}function _(e){return"".concat(d," ").concat(h," ").concat(p," ").concat(e," ").concat(v)}return t()}))}a("k6kg");var b=l();class g{constructor(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=void 0,this.container=void 0,this.watermarkContent=void 0,this.watermarkDom=void 0,this.style=void 0,this.watermarkTag=void 0,this.shadowRoot=void 0,this.mutationObserver=void 0,this._isAgainRender=e=>{if("attributes"===e.type){if(e.attributeName===s)return!0;if(this.watermarkTag===this._getNodeRandomId(e.target))return!0}return!(!e.removedNodes.length||this.watermarkTag!==this._getNodeRandomId(e.removedNodes[0]))},this._getNodeRandomId=e=>{var t;return null===e||void 0===e||null===(t=e["dataset"])||void 0===t?void 0:t[m(s)]},this._destroyMutationObserver=()=>{this.mutationObserver&&(this.mutationObserver.takeRecords(),this.mutationObserver.disconnect(),this.mutationObserver=null)},this._getWatermarkDom=function(){var t=Object(n["a"])(o.a.mark((function t(a){var r,n;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.watermarkDom||(e.watermarkDom=document.createElement("div")),"number"===typeof a&&a&&(e.style.height="".concat(a,"px")),t.next=4,w(e.options);case 4:return r=t.sent,null!==r&&void 0!==r&&r.url&&(n=r.url,"repeat"===e.options.mode?e.style.backgroundImage="url(".concat(n,")"):(e.style.backgroundImage="url(".concat(n,"), url(").concat(n,")"),e.style.backgroundRepeat="repeat, repeat",e.style.backgroundPosition="".concat(r.width/2,"px ").concat(r.height/2,"px, 0 0")),e.options.container||(e.style.position="fixed",e.style.height=void 0),e.watermarkDom.setAttribute("style",d(e.style))),e.watermarkDom.setAttribute(s,e.watermarkTag),t.abrupt("return",e.watermarkDom);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this._getWatermarkHeight=()=>{if(!this.container)return 0;var e=0,t=this.options.container?this.container.parentNode:this.container,a=t.scrollHeight,r=void 0===a?0:a,n=t.clientHeight,i=void 0===n?0:n;return r>i&&(e=Math.max(r,i)),e},this.options=Object.assign({},c,t),this.style={position:"absolute",left:0,top:0,right:0,bottom:0,pointerEvents:"none",overflow:"hidden",backgroundColor:"transparent",backgroundRepeat:"repeat"},this.style.zIndex=this.options.zIndex,this.watermarkTag=p("watermark"),this.mutationObserver=null,this._render()}update(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=Object(r["a"])(Object(r["a"])({},this.options),e),this.style.zIndex=this.options.zIndex,this._render()}show(){this.watermarkDom&&(this.style.display="block",this.watermarkDom.setAttribute("style",d(this.style)))}hide(){this.watermarkDom&&(this.style.display="none",this.watermarkDom.setAttribute("style",d(this.style)))}destroy(){this.shadowRoot=void 0,this.watermarkContent&&(this.watermarkContent.remove(),this.watermarkContent=void 0),this.watermarkDom&&(this.watermarkDom.remove(),this.watermarkDom=void 0),this._destroyMutationObserver()}_render(){var e=this;return Object(n["a"])(o.a.mark((function t(){var a,r,n;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e._destroyMutationObserver(),e.container=v(e.options.container,e.watermarkTag,e.options.containerStyle),e.watermarkContent||(e.watermarkContent=f(e.watermarkTag),e.container.append(e.watermarkContent)),a=e._getWatermarkHeight(),t.next=6,e._getWatermarkDom(a);case 6:if(e.watermarkDom=t.sent,e.watermarkContent)for(r=e.watermarkContent.childNodes||[],n=0;n<r.length;n++)e.watermarkContent.removeChild(r[n]);"function"===typeof e.watermarkContent.attachShadow?e.shadowRoot||(e.shadowRoot=e.watermarkContent.attachShadow({mode:"open"})):e.shadowRoot=e.watermarkContent,e.shadowRoot.append(e.watermarkDom),b&&e.options.monitor&&(e.mutationObserver=new b((t=>{t.forEach((t=>{if(e._isAgainRender(t))return e.destroy(),void e._render()}))})),e.mutationObserver.observe(e.container,u),e.shadowRoot&&e.mutationObserver.observe(e.shadowRoot,u));case 11:case"end":return t.stop()}}),t)})))()}}},"369t":function(e,t,a){"use strict";a.r(t);var r=a("1QO0"),n=a.n(r),i=a("pBEt"),o=a("VTSA");t["default"]=()=>{var e={gapX:200,gapY:200,width:120,height:32,opacity:1,image:"https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg"};return n.a.createElement(i["a"],e,n.a.createElement(o["a"],null))}},"4eml":function(e,t,a){"use strict";a.r(t);var r=a("1QO0"),n=a.n(r),i=a("VTSA"),o=a("30CX");t["default"]=()=>{var e=Object(r["useRef"])();return Object(r["useEffect"])((()=>(e.current=new o["a"]({gapX:200,gapY:200,width:120,height:32,opacity:1,image:"https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg",container:"watermark-04"}),()=>{e.current&&e.current.destroy()})),[]),n.a.createElement("div",{id:"watermark-04"},n.a.createElement(i["a"],null))}},CPRB:function(e,t,a){"use strict";a.r(t);var r=a("1QO0"),n=a.n(r),i=a("VTSA"),o=a("30CX");t["default"]=()=>{var e=Object(r["useRef"])();return Object(r["useEffect"])((()=>(e.current=new o["a"]({text:["\u793a\u4f8b\u6c34\u5370","17766666666"],width:120,height:64,gapX:150,gapY:150,container:"watermark-02"}),()=>{e.current&&e.current.destroy()})),[]),n.a.createElement("div",{id:"watermark-02"},n.a.createElement(i["a"],null))}},LRhS:function(e,t,a){"use strict";a.r(t);a("S8nE");var r=a("fjQU"),n=(a("ld8g"),a("SJBw")),i=a("1QO0"),o=a.n(i),c=a("VTSA"),s=a("30CX");t["default"]=()=>{var e=Object(i["useRef"])();Object(i["useEffect"])((()=>(e.current=new s["a"]({text:"\u6d4b\u8bd5\u6c34\u5370",container:"watermark-03"}),()=>{e.current&&e.current.destroy()})),[]);var t=()=>{e.current&&e.current.show()},a=()=>{e.current&&e.current.hide()};return o.a.createElement(o.a.Fragment,null,o.a.createElement(r["b"],null,o.a.createElement(n["a"],{onClick:t},"\u663e\u793a"),o.a.createElement(n["a"],{onClick:a},"\u9690\u85cf")),o.a.createElement("div",{id:"watermark-03"},o.a.createElement(c["a"],null)))}},SKtx:function(e,t,a){"use strict";a.r(t);a("S8nE");var r=a("fjQU"),n=(a("ld8g"),a("SJBw")),i=a("1QO0"),o=a.n(i),c=a("30CX");t["default"]=()=>{var e=Object(i["useRef"])();Object(i["useEffect"])((()=>(e.current=new c["a"]({text:"\u6d4b\u8bd5\u6d4b\u8bd5"}),e.current.hide(),()=>{e.current&&e.current.destroy()})),[]);var t=()=>{e.current&&e.current.show()},a=()=>{e.current&&e.current.hide()};return o.a.createElement(r["b"],null,o.a.createElement(n["a"],{onClick:t},"\u663e\u793a"),o.a.createElement(n["a"],{onClick:a},"\u9690\u85cf"))}},VTSA:function(e,t,a){"use strict";var r=a("1QO0"),n=a.n(r);t["a"]=()=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam aliquid perferendis, adipisci dolorum officia odio natus facere cumque iusto libero repellendus praesentium ipsa cupiditate iure autem eos repudiandae delectus totam?"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, aperiam numquam voluptatibus asperiores odio? Doloribus saepe, eligendi facere inventore culpa, exercitationem explicabo earum laborum deleniti reiciendis deserunt accusantium ullam."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptas numquam impedit architecto facilis aliquam at assumenda, nostrum explicabo accusantium ipsam error provident voluptate molestias magnam quisquam excepturi illum sit!"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusantium quo corporis fugit possimus quaerat ad consequatur veniam voluptatum ut cumque illo beatae. Magni assumenda eligendi itaque eum voluptate non!")),n.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/bmw-prod/d283f09a-64d6-4d59-bfc7-37b49ea0da2b.svg",alt:"\u793a\u4f8b\u56fe\u7247",width:600,style:{zIndex:10,maxWidth:"100%",position:"relative"}}))},Wdwi:function(e,t,a){"use strict";a.r(t);a("S8nE");var r=a("fjQU"),n=(a("ld8g"),a("SJBw")),i=a("Vhn3"),o=a("1QO0"),c=a.n(o),s=a("pBEt"),u=a("VTSA");t["default"]=()=>{var e=Object(o["useState"])(),t=Object(i["a"])(e,2),a=t[0],l=t[1],m=()=>{l(!0)},d=()=>{l(!1)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(r["b"],null,c.a.createElement(n["a"],{onClick:m},"\u663e\u793a"),c.a.createElement(n["a"],{onClick:d},"\u9690\u85cf")),c.a.createElement(s["a"],{visible:a,text:"\u6d4b\u8bd5\u6c34\u5370"},c.a.createElement(u["a"],null)))}},eOeh:function(e,t,a){"use strict";a.r(t);a("S8nE");var r=a("fjQU"),n=(a("ld8g"),a("SJBw")),i=a("Vhn3"),o=a("1QO0"),c=a.n(o),s=a("VTSA"),u=a("pBEt");t["default"]=()=>{var e=Object(o["useState"])(!1),t=Object(i["a"])(e,2),a=t[0],l=t[1],m=()=>{l(!0)},d=()=>{l(!1)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(u["a"],{text:"\u6d4b\u8bd5\u6c34\u5370"},c.a.createElement(c.a.Fragment,null,c.a.createElement(r["b"],null,c.a.createElement(n["a"],{onClick:m},"\u663e\u793a"),c.a.createElement(n["a"],{onClick:d},"\u9690\u85cf")),c.a.createElement(s["a"],null),a&&c.a.createElement("p",null,"\u52a8\u6001\u5185\u5bb9"))))}},gSEP:function(e,t,a){"use strict";a.r(t);var r=a("1QO0"),n=a.n(r),i=a("pBEt"),o=a("VTSA");t["default"]=()=>n.a.createElement(i["a"],{text:"\u6d4b\u8bd5\u6c34\u5370",style:{overflow:"hidden"}},n.a.createElement(o["a"],null))},k6kg:function(e,t){},pBEt:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a("ULjY"),n=a("vCPc"),i=a("1QO0"),o=a.n(i),c=a("30CX"),s=e=>{var t=e.className,a=e.style,s=e.isBody,u=e.visible,l=void 0===u||u,m=e.children,d=Object(n["a"])(e,["className","style","isBody","visible","children"]),h=Object(i["useRef"])(null),p=Object(i["useRef"])();return Object(i["useEffect"])((()=>{p.current?p.current.update(Object(r["a"])(Object(r["a"])({},d),{},{containerStyle:a})):(p.current=new c["a"](Object(r["a"])(Object(r["a"])({},d),{},{containerStyle:a,container:s?void 0:h.current})),l||p.current.hide())}),[d]),Object(i["useEffect"])((()=>{var e,t;l?null===(e=p.current)||void 0===e||e.show():null===(t=p.current)||void 0===t||t.hide()}),[l]),Object(i["useEffect"])((()=>()=>{var e;null===(e=p.current)||void 0===e||e.destroy()}),[]),s?null:o.a.createElement("div",{ref:h,className:t,style:a},m)};t["b"]=s},"u/3+":function(e,t,a){"use strict";a.r(t);var r=a("1QO0"),n=a.n(r),i=a("pBEt"),o=a("VTSA");t["default"]=()=>{var e={text:["\u793a\u4f8b\u6c34\u5370","17766666666"],width:120,height:64,gapX:150,gapY:150};return n.a.createElement(i["a"],e,n.a.createElement(o["a"],null))}},wR4U:function(e,t,a){"use strict";a.r(t);var r=a("1QO0"),n=a.n(r),i=a("VTSA"),o=a("30CX");t["default"]=()=>{var e=Object(r["useRef"])();return Object(r["useEffect"])((()=>(e.current=new o["a"]({text:"\u6d4b\u8bd5\u6c34\u5370",container:"watermark-01"}),()=>{e.current&&e.current.destroy()})),[]),n.a.createElement("div",{id:"watermark-01"},n.a.createElement(i["a"],null))}}}]);