(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3844)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(6495).Z,r=i(2648).Z,n=i(1598).Z,o=i(7273).Z,l=n(i(7294)),a=r(i(5443)),c=i(2730),d=i(9309),u=i(9977);i(5086);var h=r(i(1479));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function v(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function w(e,t,i,r,n,o,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current(s({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let p=l.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:r,widthInt:n,qualityInt:a,className:c,imgStyle:d,blurStyle:u,isLazy:h,fill:f,placeholder:v,loading:m,srcString:p,config:g,unoptimized:y,loader:b,onLoadRef:x,onLoadingCompleteRef:_,setBlurComplete:j,setShowAltText:A,onLoad:E,onError:S}=e,C=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=h?"lazy":m,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},C,{loading:m,width:n,height:r,decoding:"async","data-nimg":f?"fill":"1",className:c,style:s({},d,u)},i,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&w(e,p,v,x,_,j,y))},[p,v,x,_,j,S,y,t]),onLoad:e=>{let t=e.currentTarget;w(t,p,v,x,_,j,y)},onError:e=>{A(!0),"blur"===v&&j(!0),S&&S(e)}})))}),g=l.forwardRef((e,t)=>{let i,r;var n,{src:w,sizes:g,unoptimized:y=!1,priority:b=!1,loading:x,className:_,quality:j,width:A,height:E,fill:S,style:C,onLoad:Y,onLoadingComplete:L,placeholder:D="empty",blurDataURL:k,layout:H,objectFit:M,objectPosition:R,lazyBoundary:N,lazyRoot:P}=e,z=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let O=l.useContext(u.ImageConfigContext),F=l.useMemo(()=>{let e=f||O||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return s({},e,{allSizes:t,deviceSizes:i})},[O]),I=z,T=I.loader||h.default;delete I.loader;let q="__next_img_default"in T;if(q){if("custom"===F.loader)throw Error('Image with src "'.concat(w,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=T;T=t=>{let{config:i}=t,s=o(t,["config"]);return e(s)}}if(H){"fill"===H&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[H];e&&(C=s({},C,e));let t={responsive:"100vw",fill:"100vw"}[H];t&&!g&&(g=t)}let B="",G=m(A),W=m(E);if("object"==typeof(n=w)&&(v(n)||void 0!==n.src)){let e=v(w)?w.default:w;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,r=e.blurHeight,k=k||e.blurDataURL,B=e.src,!S){if(G||W){if(G&&!W){let t=G/e.width;W=Math.round(e.height*t)}else if(!G&&W){let t=W/e.height;G=Math.round(e.width*t)}}else G=e.width,W=e.height}}let Z=!b&&("lazy"===x||void 0===x);((w="string"==typeof w?w:B).startsWith("data:")||w.startsWith("blob:"))&&(y=!0,Z=!1),F.unoptimized&&(y=!0),q&&w.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(y=!0);let[X,J]=l.useState(!1),[U,V]=l.useState(!1),K=m(j),$=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:R}:{},U?{}:{color:"transparent"},C),Q="blur"===D&&k&&!X?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:G,heightInt:W,blurWidth:i,blurHeight:r,blurDataURL:k,objectFit:$.objectFit}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:s,width:r,quality:n,sizes:o,loader:l}=e;if(s)return{src:i,srcSet:void 0,sizes:void 0};let{widths:a,kind:c}=function(e,t,i){let{deviceSizes:s,allSizes:r}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let s;s=e.exec(i);s)t.push(parseInt(s[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=s[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:s,kind:"w"};let n=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:n,kind:"x"}}(t,r,o),d=a.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:a.map((e,s)=>"".concat(l({config:t,src:i,quality:n,width:e})," ").concat("w"===c?e:s+1).concat(c)).join(", "),src:l({config:t,src:i,quality:n,width:a[d]})}}({config:F,src:w,unoptimized:y,width:G,quality:K,sizes:g,loader:T}),et=w,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:I.crossOrigin},es=l.useRef(Y);l.useEffect(()=>{es.current=Y},[Y]);let er=l.useRef(L);l.useEffect(()=>{er.current=L},[L]);let en=s({isLazy:Z,imgAttributes:ee,heightInt:W,widthInt:G,qualityInt:K,className:_,imgStyle:$,blurStyle:Q,loading:x,config:F,fill:S,unoptimized:y,placeholder:D,loader:T,srcString:et,onLoadRef:es,onLoadingCompleteRef:er,setBlurComplete:J,setShowAltText:V},I);return l.default.createElement(l.default.Fragment,null,l.default.createElement(p,Object.assign({},en,{ref:t})),b?l.default.createElement(a.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2730:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:s,blurHeight:r,blurDataURL:n,objectFit:o}=e,l=s||t,a=r||i,c=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(s&&r?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E")}},1479:function(e,t){"use strict";function i(e){let{config:t,src:i,width:s,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(s,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},3844:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return S}});var s=i(5893);i(1425);var r=i(7164),n=i(7294),o=i(4445),l=i.n(o);let a=()=>{let[e,t]=(0,n.useState)({x:0,y:0}),[i,r]=(0,n.useState)("hidden"),[o,a]=(0,n.useState)(null),[c,d]=(0,n.useState)(null),u=(0,n.useRef)(c),h=e=>{u.current=e,d(e)};function f(){window.matchMedia("(any-hover: none)").matches?a(!1):a(!0)}function v(e){t({x:e.clientX,y:e.clientY})}function m(){r("scroll"),null!==u.current&&clearTimeout(u.current);let e=window.setTimeout(()=>{r("normal")},400);h(e)}function w(){r("hidden")}function p(){r("normal")}return(0,n.useEffect)(()=>{let e=window.matchMedia("(any-hover: none)");return e.addEventListener("change",f),f(),()=>{e.removeEventListener("change",f)}},[]),(0,n.useEffect)(()=>{function e(){window.removeEventListener("mousemove",v),window.removeEventListener("wheel",m),window.removeEventListener("mouseout",w),window.removeEventListener("mouseover",p)}return o?(window.addEventListener("mousemove",v,!1),window.addEventListener("wheel",m,!1),window.addEventListener("mouseout",w,!1),window.addEventListener("mouseover",p,!1),document.body.classList.add("custom-cursor")):(r("hidden"),e(),document.body.classList.remove("custom-cursor")),()=>{e()}},[o]),(0,s.jsxs)("div",{className:function(){for(var e,t,i=0,s="";i<arguments.length;)(e=arguments[i++])&&(t=function e(t){var i,s,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t))for(i=0;i<t.length;i++)t[i]&&(s=e(t[i]))&&(r&&(r+=" "),r+=s);else for(i in t)t[i]&&(r&&(r+=" "),r+=i)}return r}(e))&&(s&&(s+=" "),s+=t);return s}({[l().outer]:!0,[l().outer_scroll]:"scroll"===i,[l().outer_hidden]:"hidden"===i}),style:{transform:"translate(".concat(e.x,"px, ").concat(e.y,"px)")},children:[(0,s.jsx)("div",{className:l().innerGlow}),(0,s.jsx)("div",{className:l().inner})]})};var c=i(5675),d=i.n(c),u=i(1496),h=i.n(u);let f=e=>{let{text:t}=e;return(0,s.jsxs)("div",{className:h().center,"data-scroll":!0,children:[(0,s.jsxs)("div",{className:h().top,children:[(0,s.jsx)(d(),{className:h().logo,src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0}),(0,s.jsx)("div",{className:h().thirteen,children:(0,s.jsx)(d(),{src:"/thirteen.svg",alt:"13",width:40,height:31,priority:!0})})]}),(0,s.jsx)("span",{className:h().text,children:t})]})},v=e=>{let{text:t}=e;return(0,s.jsx)(f,{text:t})},m=e=>{let{text:t}=e;return(0,s.jsx)(f,{text:t})},w=e=>{let{text:t}=e;return(0,s.jsx)(f,{text:t})},p=e=>{let{text:t}=e;return(0,s.jsx)(f,{text:t})},g=e=>{let{text:t}=e;return(0,s.jsx)(f,{text:t})},y=e=>{let{text:t}=e;return(0,s.jsx)(f,{text:t})};function b(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var x=function(e){return e.reduce((e,t)=>e+t,0)/e.length},_=class{storeZeros(){this.storeDelataY(0),this.requestAnimationFrameId=requestAnimationFrame(this.storeZeros.bind(this))}storeDelataY(e){if(!this.canSwipe)return;this.deltaYHistory.push(e),this.deltaYHistory.splice(0,1),this.deltaYA1=x(this.deltaYHistory),this.deltaYA1History.push(this.deltaYA1),this.deltaYA1History.splice(0,1),this.deltaYA2=x(this.deltaYA1History),this.deltaYA2History.push(this.deltaYA2),this.deltaYA2History.splice(0,1),this.deltaYA3=x(this.deltaYA2History),this.deltaYA3History.push(this.deltaYA3),this.deltaYA3History.splice(0,1);let t=this.calcPositiveDifference();this.draw&&this.draw([e,this.deltaYA1,this.deltaYA2,this.deltaYA3,t]),0===this.previousPositiveDifference&&t>0&&this.upCallback(),0===this.previousPositiveDifference&&t<0&&this.downCallback(),this.previousPositiveDifference=t}calcPositiveDifference(){let e=this.deltaYA2-this.deltaYA3;return this.deltaYA2>0?e>0?e:0:this.deltaYA2<0&&e<0?e:0}wheelListener(e){this.storeDelataY(e.deltaY)}destroy(){this.element.removeEventListener("wheel",this.wheelListener),cancelAnimationFrame(this.requestAnimationFrameId)}constructor(e){b(this,"deltaYHistoryLegth",16),b(this,"deltaYA1HistoryLegth",16),b(this,"deltaYA2HistoryLegth",16),b(this,"deltaYA3HistoryLegth",16),b(this,"previousPositiveDifference",0),b(this,"element",void 0),b(this,"upCallback",void 0),b(this,"downCallback",void 0),b(this,"draw",void 0),b(this,"deltaYHistory",Array(this.deltaYHistoryLegth).fill(0)),b(this,"deltaYA1History",Array(this.deltaYA1HistoryLegth).fill(0)),b(this,"deltaYA2History",Array(this.deltaYA2HistoryLegth).fill(0)),b(this,"deltaYA3History",Array(this.deltaYA3HistoryLegth).fill(0)),b(this,"deltaYA1",0),b(this,"deltaYA2",0),b(this,"deltaYA3",0),b(this,"requestAnimationFrameId",void 0),b(this,"canSwipe",!0),this.element=e.element,this.upCallback=e.upCallback,this.downCallback=e.downCallback,this.draw=null==e?void 0:e.draw,this.wheelListener=this.wheelListener.bind(this),this.element.addEventListener("wheel",this.wheelListener,{passive:!1}),this.storeZeros()}},j=class{touchStart(e){this.xDown=e.touches[0].clientX,this.yDown=e.touches[0].clientY}touchMove(e){if(!this.canSwipe)return;let t=e.touches[0].clientX,i=e.touches[0].clientY,s=this.xDown-t,r=this.yDown-i;this.xDown&&this.yDown&&Math.abs(s)+Math.abs(r)>this.touchscreenTreshold&&(Math.abs(s)<Math.abs(r)&&(r>0?this.upCallback():this.downCallback()),this.xDown=null,this.yDown=null)}destroy(){this.element.removeEventListener("touchstart",this.touchStartHandler,!1),this.element.removeEventListener("touchmove",this.touchMoveHandler,!1)}constructor(e){b(this,"xDown",null),b(this,"yDown",null),b(this,"touchscreenTreshold",150),b(this,"downCallback",void 0),b(this,"upCallback",void 0),b(this,"touchStartHandler",void 0),b(this,"touchMoveHandler",void 0),b(this,"element",void 0),b(this,"canSwipe",void 0),this.element=e.element,this.downCallback=e.downCallback,this.upCallback=e.upCallback,this.touchStartHandler=this.touchStart.bind(this),this.touchMoveHandler=this.touchMove.bind(this),this.element.addEventListener("touchstart",this.touchStartHandler,!1),this.element.addEventListener("touchmove",this.touchMoveHandler,!1)}},A=class{setCanSwipe(e){this.swipeDetectorDesctop.canSwipe=e,this.swipeDetectorMobile.canSwipe=e}destroy(){this.swipeDetectorDesctop.destroy(),this.swipeDetectorMobile.destroy()}constructor(e){b(this,"swipeDetectorDesctop",void 0),b(this,"swipeDetectorMobile",void 0),this.swipeDetectorDesctop=new _(e),this.swipeDetectorMobile=new j(e)}};let E=e=>{let{text:t}=e;return(0,s.jsx)(f,{text:t})};function S(){let e=(0,n.useRef)(null),t=(0,n.useRef)(null),i=(0,n.useRef)(null),o=(0,n.useRef)(null),l=(0,n.useRef)(null),c=(0,n.useRef)(null),d=[t.current,i.current,l.current,o.current,c.current],u=(0,n.useContext)(r.J),[h,f]=(0,n.useState)(0),b=(0,n.useRef)(h),x=e=>{b.current=e,f(e)},[_,j]=(0,n.useState)(!1),S=(0,n.useRef)(_),C=e=>{S.current=e,j(e)};function Y(){if(console.log("scrollToNext"),b.current<d.length-1){var e;null===(e=u.scroll)||void 0===e||e.scrollTo(d[b.current+1]),x(b.current+1)}b.current>d.length-2&&C(!0)}function L(){if(console.log("scrollToPrev"),b.current>0){var e;null===(e=u.scroll)||void 0===e||e.scrollTo(d[b.current-1]),x(b.current-1)}}return(0,n.useEffect)(()=>{u.scroll&&u.scroll.on("scroll",t=>{let{limit:i,scroll:s}=t;if(!1===u.scroll.scroll.animatingScroll&&S.current){var r,n;console.log("enabled"),null===(r=u.scroll)||void 0===r||r.start(),null===(n=document.querySelector(".c-scrollbar"))||void 0===n||n.classList.remove("c-scrollbar_hidden"),e.current.setCanSwipe(!1),C(!1)}})},[u]),(0,n.useEffect)(()=>{if(u.scroll)return e.current=new A({element:window,upCallback:Y,downCallback:L}),()=>{e.current.destroy()}},[u]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{"data-scroll-container":!0,children:[(0,s.jsx)("div",{"data-scroll-section":!0,ref:t,children:(0,s.jsx)(v,{text:"#1 Slider"})}),(0,s.jsx)("div",{"data-scroll-section":!0,ref:i,children:(0,s.jsx)(m,{text:"#2 Cards"})}),(0,s.jsx)("div",{"data-scroll-section":!0,ref:l,children:(0,s.jsx)(w,{text:"#3 GalaxyOfStars"})}),(0,s.jsx)("div",{"data-scroll-section":!0,ref:o,children:(0,s.jsx)(E,{text:"#4 Constructor"})}),(0,s.jsx)("div",{"data-scroll-section":!0,ref:c,children:(0,s.jsx)(p,{text:"#5 NFTWithRealUtility"})}),(0,s.jsx)("div",{"data-scroll-section":!0,children:(0,s.jsx)(g,{text:"#6 Form"})}),(0,s.jsx)("div",{"data-scroll-section":!0,children:(0,s.jsx)(y,{text:"#7 Footer"})})]}),(0,s.jsx)(a,{})]})}},1425:function(){},4445:function(e){e.exports={outer:"styles_outer__ocF4E",inner:"styles_inner__NyYaw",innerGlow:"styles_innerGlow__ikc9o",outer_scroll:"styles_outer_scroll__lTemf",outer_hidden:"styles_outer_hidden__I4hxL"}},1496:function(e){e.exports={center:"styles_center__fod01",top:"styles_top__R9hPK",thirteen:"styles_thirteen__4_Mvf",rotate:"styles_rotate__bvvlJ",text:"styles_text__nXwWK",logo:"styles_logo__3aiB1"}},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);