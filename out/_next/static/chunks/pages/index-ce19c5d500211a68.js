(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(1820)}])},8045:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(6495).Z,n=i(2648).Z,r=i(1598).Z,o=i(7273).Z,a=r(i(7294)),l=n(i(5443)),c=i(2730),d=i(9309),h=i(9977);i(5086);var u=n(i(1479));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function v(t){return void 0!==t.default}function m(t){return"number"==typeof t||void 0===t?t:"string"==typeof t&&/^[0-9]+$/.test(t)?parseInt(t,10):NaN}function p(t,e,i,n,r,o,a){if(!t||t["data-loaded-src"]===e)return;t["data-loaded-src"]=e;let l="decode"in t?t.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(t.parentElement&&t.isConnected){if("blur"===i&&o(!0),null==n?void 0:n.current){let e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:t});let i=!1,r=!1;n.current(s({},e,{nativeEvent:e,currentTarget:t,target:t,isDefaultPrevented:()=>i,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{i=!0,e.preventDefault()},stopPropagation:()=>{r=!0,e.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(t)}})}let w=a.forwardRef((t,e)=>{var{imgAttributes:i,heightInt:n,widthInt:r,qualityInt:l,className:c,imgStyle:d,blurStyle:h,isLazy:u,fill:f,placeholder:v,loading:m,srcString:w,config:g,unoptimized:y,loader:x,onLoadRef:b,onLoadingCompleteRef:_,setBlurComplete:S,setShowAltText:A,onLoad:C,onError:E}=t,j=o(t,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=u?"lazy":m,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},j,{loading:m,width:r,height:n,decoding:"async","data-nimg":f?"fill":"1",className:c,style:s({},d,h)},i,{ref:a.useCallback(t=>{e&&("function"==typeof e?e(t):"object"==typeof e&&(e.current=t)),t&&(E&&(t.src=t.src),t.complete&&p(t,w,v,b,_,S,y))},[w,v,b,_,S,E,y,e]),onLoad:t=>{let e=t.currentTarget;p(e,w,v,b,_,S,y)},onError:t=>{A(!0),"blur"===v&&S(!0),E&&E(t)}})))}),g=a.forwardRef((t,e)=>{let i,n;var r,{src:p,sizes:g,unoptimized:y=!1,priority:x=!1,loading:b,className:_,quality:S,width:A,height:C,fill:E,style:j,onLoad:Y,onLoadingComplete:H,placeholder:L="empty",blurDataURL:D,layout:k,objectFit:F,objectPosition:M,lazyBoundary:N,lazyRoot:P}=t,I=o(t,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let R=a.useContext(h.ImageConfigContext),z=a.useMemo(()=>{let t=f||R||d.imageConfigDefault,e=[...t.deviceSizes,...t.imageSizes].sort((t,e)=>t-e),i=t.deviceSizes.sort((t,e)=>t-e);return s({},t,{allSizes:e,deviceSizes:i})},[R]),O=I,T=O.loader||u.default;delete O.loader;let W="__next_img_default"in T;if(W){if("custom"===z.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let t=T;T=e=>{let{config:i}=e,s=o(e,["config"]);return t(s)}}if(k){"fill"===k&&(E=!0);let t={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];t&&(j=s({},j,t));let e={responsive:"100vw",fill:"100vw"}[k];e&&!g&&(g=e)}let B="",q=m(A),G=m(C);if("object"==typeof(r=p)&&(v(r)||void 0!==r.src)){let t=v(p)?p.default:p;if(!t.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(t)));if(!t.height||!t.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(t)));if(i=t.blurWidth,n=t.blurHeight,D=D||t.blurDataURL,B=t.src,!E){if(q||G){if(q&&!G){let e=q/t.width;G=Math.round(t.height*e)}else if(!q&&G){let e=G/t.height;q=Math.round(t.width*e)}}else q=t.width,G=t.height}}let Z=!x&&("lazy"===b||void 0===b);((p="string"==typeof p?p:B).startsWith("data:")||p.startsWith("blob:"))&&(y=!0,Z=!1),z.unoptimized&&(y=!0),W&&p.endsWith(".svg")&&!z.dangerouslyAllowSVG&&(y=!0);let[X,U]=a.useState(!1),[J,V]=a.useState(!1),K=m(S),$=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:F,objectPosition:M}:{},J?{}:{color:"transparent"},j),Q="blur"===L&&D&&!X?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:q,heightInt:G,blurWidth:i,blurHeight:n,blurDataURL:D,objectFit:$.objectFit}),'")')}:{},tt=function(t){let{config:e,src:i,unoptimized:s,width:n,quality:r,sizes:o,loader:a}=t;if(s)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(t,e,i){let{deviceSizes:s,allSizes:n}=t;if(i){let t=/(^|\s)(1?\d?\d)vw/g,e=[];for(let s;s=t.exec(i);s)e.push(parseInt(s[2]));if(e.length){let t=.01*Math.min(...e);return{widths:n.filter(e=>e>=s[0]*t),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof e)return{widths:s,kind:"w"};let r=[...new Set([e,2*e].map(t=>n.find(e=>e>=t)||n[n.length-1]))];return{widths:r,kind:"x"}}(e,n,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((t,s)=>"".concat(a({config:e,src:i,quality:r,width:t})," ").concat("w"===c?t:s+1).concat(c)).join(", "),src:a({config:e,src:i,quality:r,width:l[d]})}}({config:z,src:p,unoptimized:y,width:q,quality:K,sizes:g,loader:T}),te=p,ti={imageSrcSet:tt.srcSet,imageSizes:tt.sizes,crossOrigin:O.crossOrigin},ts=a.useRef(Y);a.useEffect(()=>{ts.current=Y},[Y]);let tn=a.useRef(H);a.useEffect(()=>{tn.current=H},[H]);let tr=s({isLazy:Z,imgAttributes:tt,heightInt:G,widthInt:q,qualityInt:K,className:_,imgStyle:$,blurStyle:Q,loading:b,config:z,fill:E,unoptimized:y,placeholder:L,loader:T,srcString:te,onLoadRef:ts,onLoadingCompleteRef:tn,setBlurComplete:U,setShowAltText:V},O);return a.default.createElement(a.default.Fragment,null,a.default.createElement(w,Object.assign({},tr,{ref:e})),x?a.default.createElement(l.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+tt.src+tt.srcSet+tt.sizes,rel:"preload",as:"image",href:tt.srcSet?void 0:tt.src},ti))):null)});e.default=g,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},2730:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageBlurSvg=function(t){let{widthInt:e,heightInt:i,blurWidth:s,blurHeight:n,blurDataURL:r,objectFit:o}=t,a=s||e,l=n||i,c=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(s&&n?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E")}},1479:function(t,e){"use strict";function i(t){let{config:e,src:i,width:s,quality:n}=t;return"".concat(e.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(s,"&q=").concat(n||75)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i.__next_img_default=!0,e.default=i},1820:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return H}});var s=i(5893);i(1425);var n=i(7294),r=i(4445),o=i.n(r);let a=()=>{let[t,e]=(0,n.useState)({x:0,y:0}),[i,r]=(0,n.useState)("hidden"),[a,l]=(0,n.useState)(null),[c,d]=(0,n.useState)(null),h=(0,n.useRef)(c),u=t=>{h.current=t,d(t)};function f(){window.matchMedia("(any-hover: none)").matches?l(!1):l(!0)}function v(t){e({x:t.clientX,y:t.clientY})}function m(){r("scroll"),null!==h.current&&clearTimeout(h.current);let t=window.setTimeout(()=>{r("normal")},400);u(t)}function p(){r("hidden")}function w(){r("normal")}return(0,n.useEffect)(()=>{let t=window.matchMedia("(any-hover: none)");return t.addEventListener("change",f),f(),()=>{t.removeEventListener("change",f)}},[]),(0,n.useEffect)(()=>{function t(){window.removeEventListener("mousemove",v),window.removeEventListener("wheel",m),window.removeEventListener("mouseout",p),window.removeEventListener("mouseover",w)}return a?(window.addEventListener("mousemove",v,!1),window.addEventListener("wheel",m,!1),window.addEventListener("mouseout",p,!1),window.addEventListener("mouseover",w,!1),document.body.classList.add("custom-cursor")):(r("hidden"),t(),document.body.classList.remove("custom-cursor")),()=>{t()}},[a]),(0,s.jsxs)("div",{className:function(){for(var t,e,i=0,s="";i<arguments.length;)(t=arguments[i++])&&(e=function t(e){var i,s,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e){if(Array.isArray(e))for(i=0;i<e.length;i++)e[i]&&(s=t(e[i]))&&(n&&(n+=" "),n+=s);else for(i in e)e[i]&&(n&&(n+=" "),n+=i)}return n}(t))&&(s&&(s+=" "),s+=e);return s}({[o().outer]:!0,[o().outer_scroll]:"scroll"===i,[o().outer_hidden]:"hidden"===i}),style:{transform:"translate(".concat(t.x,"px, ").concat(t.y,"px)")},children:[(0,s.jsx)("div",{className:o().innerGlow}),(0,s.jsx)("div",{className:o().inner})]})};var l=i(3759),c=i.n(l);function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var h=class{slideNext(){this.currentSlideIndex!==this.slideslength-1&&(this.currentSlideIndex++,this.positionY=-(this.currentSlideIndex*window.innerHeight),this.slidesContainer.style.transform="translate(0px, ".concat(this.positionY,"px)"))}slidePrev(){0!==this.currentSlideIndex&&(this.currentSlideIndex--,this.positionY=-(this.currentSlideIndex*window.innerHeight),this.slidesContainer.style.transform="translate(0px, ".concat(this.positionY,"px)"))}constructor(t){d(this,"currentSlideIndex",0),d(this,"slideslength",void 0),d(this,"positionY",void 0),this.slidesContainer=t.slidesContainer,this.slideslength=this.slidesContainer.children.length}},u=i(5675),f=i.n(u),v=i(1496),m=i.n(v);let p=t=>{let{text:e}=t;return(0,s.jsxs)("div",{className:m().center,"data-scroll":!0,children:[(0,s.jsxs)("div",{className:m().top,children:[(0,s.jsx)(f(),{className:m().logo,src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0}),(0,s.jsx)("div",{className:m().thirteen,children:(0,s.jsx)(f(),{src:"/thirteen.svg",alt:"13",width:40,height:31,priority:!0})})]}),(0,s.jsx)("span",{className:m().text,children:e})]})},w=t=>{let{text:e}=t;return(0,s.jsx)(p,{text:e})},g=t=>{let{text:e}=t;return(0,s.jsx)(p,{text:e})},y=t=>{let{text:e}=t;return(0,s.jsx)(p,{text:e})},x=t=>{let{text:e}=t;return(0,s.jsx)(p,{text:e})},b=t=>{let{text:e}=t;return(0,s.jsx)(p,{text:e})},_=t=>{let{text:e}=t;return(0,s.jsx)(p,{text:e})};var S=function(t){return t.reduce((t,e)=>t+e,0)/t.length},A=class{storeZeros(){this.storeDelataY(0),this.requestAnimationFrameId=requestAnimationFrame(this.storeZeros.bind(this))}storeDelataY(t){this.deltaYHistory.push(t),this.deltaYHistory.splice(0,1),this.deltaYA1=S(this.deltaYHistory),this.deltaYA1History.push(this.deltaYA1),this.deltaYA1History.splice(0,1),this.deltaYA2=S(this.deltaYA1History),this.deltaYA2History.push(this.deltaYA2),this.deltaYA2History.splice(0,1),this.deltaYA3=S(this.deltaYA2History),this.deltaYA3History.push(this.deltaYA3),this.deltaYA3History.splice(0,1);let e=this.calcPositiveDifference();this.draw&&this.draw([t,this.deltaYA1,this.deltaYA2,this.deltaYA3,e]),this.canSwipe&&(0===this.previousPositiveDifference&&e>0&&(console.log("up"),this.upCallback()),0===this.previousPositiveDifference&&e<0&&(console.log("down"),this.downCallback())),this.previousPositiveDifference=e}calcPositiveDifference(){let t=this.deltaYA2-this.deltaYA3;return this.deltaYA2>0?t>0?t:0:this.deltaYA2<0&&t<0?t:0}wheelListener(t){this.storeDelataY(t.deltaY)}destroy(){this.element.removeEventListener("wheel",this.wheelListener),cancelAnimationFrame(this.requestAnimationFrameId)}constructor(t){d(this,"deltaYHistoryLegth",16),d(this,"deltaYA1HistoryLegth",16),d(this,"deltaYA2HistoryLegth",16),d(this,"deltaYA3HistoryLegth",16),d(this,"previousPositiveDifference",0),d(this,"element",void 0),d(this,"upCallback",void 0),d(this,"downCallback",void 0),d(this,"draw",void 0),d(this,"deltaYHistory",Array(this.deltaYHistoryLegth).fill(0)),d(this,"deltaYA1History",Array(this.deltaYA1HistoryLegth).fill(0)),d(this,"deltaYA2History",Array(this.deltaYA2HistoryLegth).fill(0)),d(this,"deltaYA3History",Array(this.deltaYA3HistoryLegth).fill(0)),d(this,"deltaYA1",0),d(this,"deltaYA2",0),d(this,"deltaYA3",0),d(this,"requestAnimationFrameId",void 0),d(this,"canSwipe",!0),this.element=t.element,this.upCallback=t.upCallback,this.downCallback=t.downCallback,this.draw=null==t?void 0:t.draw,this.wheelListener=this.wheelListener.bind(this),this.element.addEventListener("wheel",this.wheelListener,{passive:!1}),this.storeZeros()}},C=class{touchStart(t){this.xDown=t.touches[0].clientX,this.yDown=t.touches[0].clientY}touchMove(t){if(!this.canSwipe)return;let e=t.touches[0].clientX,i=t.touches[0].clientY,s=this.xDown-e,n=this.yDown-i;this.xDown&&this.yDown&&Math.abs(s)+Math.abs(n)>this.touchscreenTreshold&&(Math.abs(s)<Math.abs(n)&&(n>0?this.upCallback():this.downCallback()),this.xDown=null,this.yDown=null)}destroy(){this.element.removeEventListener("touchstart",this.touchStartHandler,!1),this.element.removeEventListener("touchmove",this.touchMoveHandler,!1)}constructor(t){d(this,"xDown",null),d(this,"yDown",null),d(this,"touchscreenTreshold",150),d(this,"downCallback",void 0),d(this,"upCallback",void 0),d(this,"touchStartHandler",void 0),d(this,"touchMoveHandler",void 0),d(this,"element",void 0),d(this,"canSwipe",!0),this.element=t.element,this.downCallback=t.downCallback,this.upCallback=t.upCallback,this.touchStartHandler=this.touchStart.bind(this),this.touchMoveHandler=this.touchMove.bind(this),this.element.addEventListener("touchstart",this.touchStartHandler,!1),this.element.addEventListener("touchmove",this.touchMoveHandler,!1)}},E=class{setCanSwipe(t){this.swipeDetectorDesctop.canSwipe=t,this.swipeDetectorMobile.canSwipe=t}destroy(){this.swipeDetectorDesctop.destroy(),this.swipeDetectorMobile.destroy()}constructor(t){d(this,"swipeDetectorDesctop",void 0),d(this,"swipeDetectorMobile",void 0),this.swipeDetectorDesctop=new A(t),this.swipeDetectorMobile=new C(t)}};let j=t=>{let{text:e}=t;return(0,s.jsx)(p,{text:e})};var Y=class{draw(t){this.dataHistory.push(t),this.dataHistory.splice(0,1),this.context.clearRect(0,0,this.canvas.width,this.canvas.height);let e=canvas.width-this.dataHistory.length;for(let t=0;t<this.dataHistory.length;t++)for(let i=0;i<this.dataHistory[t].length;i++)this.context.beginPath(),t-1>=0?(this.context.moveTo(e+t-1,this.canvas.height/2-this.dataHistory[t-1][i]),this.context.strokeStyle=this.colors[i],this.context.lineTo(e+t,this.canvas.height/2-this.dataHistory[t][i]),this.context.stroke()):this.context.moveTo(e-t,this.canvas.height/2)}constructor(t){d(this,"canvas",void 0),d(this,"context",void 0),d(this,"colors",void 0),d(this,"dataHistoryLength",void 0),d(this,"dataHistory",void 0),this.canvas=t.canvas,this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight,this.context=this.canvas.getContext("2d"),this.colors=t.colors,this.dataHistoryLength=this.canvas.offsetWidth,this.dataHistory=Array(this.dataHistoryLength).fill(0)}};function H(){let t=(0,n.useRef)(null),e=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(!t.current)return;e.current=new h({slidesContainer:t.current});let s=document.getElementById("canvas"),n=new Y({canvas:s,colors:["#FF000019","#00FF0080","#0000FF","#FFFF00","#FF00FF"]});return i.current=new E({draw:n.draw.bind(n),element:window,upCallback:e.current.slideNext.bind(e.current),downCallback:e.current.slidePrev.bind(e.current)}),()=>{i.current.destroy()}},[t]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("canvas",{id:"canvas",style:{position:"fixed",top:0,left:0}}),(0,s.jsxs)("div",{ref:t,className:c().slider,children:[(0,s.jsx)(w,{text:"#1 Slider"}),(0,s.jsx)(g,{text:"#2 Cards"}),(0,s.jsx)(y,{text:"#3 GalaxyOfStars"}),(0,s.jsx)(j,{text:"#4 Constructor"}),(0,s.jsxs)("div",{className:c().scrollable,onScroll:function(t){t.target.scrollTop>0?i.current.setCanSwipe(!1):i.current.setCanSwipe(!0)},children:[(0,s.jsx)(x,{text:"#5 NFTWithRealUtility"}),(0,s.jsx)(b,{text:"#6 Form"}),(0,s.jsx)(_,{text:"#7 Footer"})]})]}),(0,s.jsx)(a,{})]})}},1425:function(){},4445:function(t){t.exports={outer:"styles_outer__ocF4E",inner:"styles_inner__NyYaw",innerGlow:"styles_innerGlow__ikc9o",outer_scroll:"styles_outer_scroll__lTemf",outer_hidden:"styles_outer_hidden__I4hxL"}},1496:function(t){t.exports={center:"styles_center__fod01",top:"styles_top__R9hPK",thirteen:"styles_thirteen__4_Mvf",rotate:"styles_rotate__bvvlJ",text:"styles_text__nXwWK",logo:"styles_logo__3aiB1"}},3759:function(t){t.exports={slider:"styles_slider__0u3Wx",scrollable:"styles_scrollable__ZESEF"}},5675:function(t,e,i){t.exports=i(8045)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);