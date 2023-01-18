import{createNanoEvents as t}from"nanoevents";function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},e.apply(this,arguments)}var i=0;function n(t){return"__private_"+i+++"_"+t}function o(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}function r(t,e,i){return Math.max(t,Math.min(e,i))}var s=/*#__PURE__*/function(){function t(){}var e=t.prototype;return e.advance=function(t){var e;if(this.isRunning){var i;this.value===this.from&&(null==(i=this.onStart)||i.call(this,this.from));var n,o,s=!1;if(this.lerp)this.value=(1-(n=this.lerp))*this.value+n*this.to,Math.round(this.value)===this.to&&(this.value=this.to,s=!0);else{this.currentTime+=t;var l=r(0,this.currentTime/this.duration,1),h=(s=l>=1)?1:this.easing(l);this.value=this.from+(this.to-this.from)*h}null==(e=this.onUpdate)||e.call(this,this.value),s&&(null==(o=this.onComplete)||o.call(this,this.to),this.stop())}},e.stop=function(){this.isRunning=!1},e.fromTo=function(t,e,i){var n=i.lerp,o=void 0===n?.1:n,r=i.duration,s=void 0===r?1:r,l=i.easing,h=void 0===l?function(t){return t}:l,a=i.onStart,u=i.onUpdate,c=i.onComplete;this.from=this.value=t,this.to=e,this.lerp=o,this.duration=s,this.easing=h,this.currentTime=0,this.isRunning=!0,this.onStart=a,this.onUpdate=u,this.onComplete=c},t}(),l=/*#__PURE__*/n("resizeObserver"),h=/*#__PURE__*/n("onResize"),a=/*#__PURE__*/n("onWindowResize"),u=/*#__PURE__*/function(){function t(t){var e=this;Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,h,{writable:!0,value:function(t){var i=t[0];if(i){var n=i.contentRect,o=n.height;e.width=n.width,e.height=o}}}),Object.defineProperty(this,a,{writable:!0,value:function(){e.width=window.innerWidth,e.height=window.innerHeight}}),this.element=t,t===window?(window.addEventListener("resize",o(this,a)[a]),o(this,a)[a]()):(this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,o(this,l)[l]=new ResizeObserver(o(this,h)[h]),o(this,l)[l].observe(this.element))}return t.prototype.destroy=function(){window.removeEventListener("resize",this.onWindowResize),o(this,l)[l].disconnect()},t}(),c=/*#__PURE__*/n("wheelMultiplier"),d=/*#__PURE__*/n("touchMultiplier"),v=/*#__PURE__*/n("normalizeWheel"),p=/*#__PURE__*/n("touchStart"),f=/*#__PURE__*/n("emitter"),m=/*#__PURE__*/n("onTouchStart"),b=/*#__PURE__*/n("onTouchMove"),w=/*#__PURE__*/n("onWheel"),y=/*#__PURE__*/function(){function e(e,i){var n=this,s=i.wheelMultiplier,l=void 0===s?1:s,h=i.touchMultiplier,a=void 0===h?2:h,u=i.normalizeWheel,y=void 0!==u&&u;Object.defineProperty(this,c,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,v,{writable:!0,value:void 0}),Object.defineProperty(this,p,{writable:!0,value:void 0}),Object.defineProperty(this,f,{writable:!0,value:void 0}),Object.defineProperty(this,m,{writable:!0,value:function(t){var e=t.targetTouches?t.targetTouches[0]:t,i=e.pageX,r=e.pageY;o(n,p)[p].x=i,o(n,p)[p].y=r}}),Object.defineProperty(this,b,{writable:!0,value:function(t){var e=t.targetTouches?t.targetTouches[0]:t,i=e.pageX,r=e.pageY,s=-(i-o(n,p)[p].x)*o(n,d)[d],l=-(r-o(n,p)[p].y)*o(n,d)[d];o(n,p)[p].x=i,o(n,p)[p].y=r,o(n,f)[f].emit("scroll",{type:"touch",deltaX:s,deltaY:l,event:t})}}),Object.defineProperty(this,w,{writable:!0,value:function(t){var e=t.deltaX,i=t.deltaY;o(n,v)[v]&&(e=r(-100,e,100),i=r(-100,i,100)),e*=o(n,c)[c],i*=o(n,c)[c],o(n,f)[f].emit("scroll",{type:"wheel",deltaX:e,deltaY:i,event:t})}}),this.element=e,o(this,c)[c]=l,o(this,d)[d]=a,o(this,v)[v]=y,o(this,p)[p]={x:null,y:null},o(this,f)[f]=t(),this.element.addEventListener("wheel",o(this,w)[w],{passive:!1}),this.element.addEventListener("touchstart",o(this,m)[m],{passive:!1}),this.element.addEventListener("touchmove",o(this,b)[b],{passive:!1})}var i=e.prototype;return i.on=function(t,e){return o(this,f)[f].on(t,e)},i.destroy=function(){o(this,f)[f].events={},this.element.removeEventListener("wheel",o(this,w)[w],{passive:!1}),this.element.removeEventListener("touchstart",o(this,m)[m],{passive:!1}),this.element.removeEventListener("touchmove",o(this,b)[b],{passive:!1})},e}(),g=/*#__PURE__*/n("options"),O=/*#__PURE__*/n("wrapper"),j=/*#__PURE__*/n("content"),P=/*#__PURE__*/n("animate"),S=/*#__PURE__*/n("emitter"),M=/*#__PURE__*/n("virtualScroll"),T=/*#__PURE__*/n("time"),z=/*#__PURE__*/n("velocity"),L=/*#__PURE__*/n("direction"),E=/*#__PURE__*/n("animatedScroll"),W=/*#__PURE__*/n("targetScroll"),k=/*#__PURE__*/n("_isScrolling"),R=/*#__PURE__*/n("_isStopped"),C=/*#__PURE__*/n("_isSmooth"),H=/*#__PURE__*/n("isLocked"),_=/*#__PURE__*/n("setScroll"),x=/*#__PURE__*/n("onVirtualScroll"),X=/*#__PURE__*/n("onScroll"),Y=/*#__PURE__*/n("classElement"),D=/*#__PURE__*/n("actualScroll"),U=/*#__PURE__*/n("isSmooth"),A=/*#__PURE__*/n("isScrolling"),q=/*#__PURE__*/n("isStopped"),B=/*#__PURE__*/function(){function i(e){var i=this,n=void 0===e?{}:e,r=n.direction,l=n.gestureDirection,h=n.mouseMultiplier,a=n.smooth,c=n.wrapper,d=void 0===c?window:c,v=n.content,p=void 0===v?document.documentElement:v,f=n.smoothWheel,m=void 0===f?null==a||a:f,b=n.smoothTouch,w=void 0!==b&&b,B=n.duration,N=n.easing,Q=void 0===N?function(t){return Math.min(1,1.001-Math.pow(2,-10*t))}:N,Z=n.lerp,$=void 0===Z?B?null:.1:Z,tt=n.infinite,et=void 0!==tt&&tt,it=n.orientation,nt=void 0===it?null!=r?r:"vertical":it,ot=n.gestureOrientation,rt=void 0===ot?null!=l?l:"vertical":ot,st=n.touchMultiplier,lt=void 0===st?2:st,ht=n.wheelMultiplier,at=void 0===ht?null!=h?h:1:ht,ut=n.normalizeWheel,ct=void 0===ut||ut;Object.defineProperty(this,q,{get:void 0,set:J}),Object.defineProperty(this,A,{get:void 0,set:I}),Object.defineProperty(this,U,{get:void 0,set:G}),Object.defineProperty(this,D,{get:K,set:void 0}),Object.defineProperty(this,Y,{get:F,set:void 0}),Object.defineProperty(this,_,{value:V}),Object.defineProperty(this,g,{writable:!0,value:void 0}),Object.defineProperty(this,O,{writable:!0,value:void 0}),Object.defineProperty(this,j,{writable:!0,value:void 0}),Object.defineProperty(this,P,{writable:!0,value:void 0}),Object.defineProperty(this,S,{writable:!0,value:void 0}),Object.defineProperty(this,M,{writable:!0,value:void 0}),Object.defineProperty(this,T,{writable:!0,value:void 0}),Object.defineProperty(this,z,{writable:!0,value:void 0}),Object.defineProperty(this,L,{writable:!0,value:void 0}),Object.defineProperty(this,E,{writable:!0,value:void 0}),Object.defineProperty(this,W,{writable:!0,value:void 0}),Object.defineProperty(this,k,{writable:!0,value:void 0}),Object.defineProperty(this,R,{writable:!0,value:void 0}),Object.defineProperty(this,C,{writable:!0,value:void 0}),Object.defineProperty(this,H,{writable:!0,value:void 0}),Object.defineProperty(this,x,{writable:!0,value:function(t){var e=t.type,n=t.deltaX,r=t.deltaY,s=t.event;if(!s.ctrlKey&&!("vertical"===o(i,g)[g].gestureOrientation&&0===r||"horizontal"===o(i,g)[g].gestureOrientation&&0===n||s.composedPath().find(function(t){return null==t||null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent")})))if(i.isStopped||o(i,H)[H])s.preventDefault();else if(o(i,U)[U]=o(i,g)[g].smoothTouch&&"touch"===e||o(i,g)[g].smoothWheel&&"wheel"===e,i.isSmooth){s.preventDefault();var l=r;"both"===o(i,g)[g].gestureOrientation?l=n+r:"horizontal"===o(i,g)[g].gestureOrientation&&(l=n),i.scrollTo(o(i,W)[W]+l,{},!1)}}}),Object.defineProperty(this,X,{writable:!0,value:function(){if(!i.isScrolling){var t=o(i,E)[E];o(i,E)[E]=o(i,W)[W]=o(i,D)[D],o(i,z)[z]=0,o(i,L)[L]=Math.sign(o(i,E)[E]-t),i.emit()}}}),r&&console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),l&&console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),h&&console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),a&&console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),window.lenisVersion="1.0.0-dev.4",d!==document.documentElement&&d!==document.body||(d=window),o(this,g)[g]={wrapper:d,content:p,smoothWheel:m,smoothTouch:w,duration:B,easing:Q,lerp:$,infinite:et,gestureOrientation:rt,orientation:nt,touchMultiplier:lt,wheelMultiplier:at,normalizeWheel:ct},o(this,O)[O]=new u(d),o(this,j)[j]=new u(p),o(this,Y)[Y].classList.add("lenis"),o(this,z)[z]=0,o(this,q)[q]=!1,o(this,U)[U]=m||w,o(this,A)[A]=!1,o(this,W)[W]=o(this,E)[E]=o(this,D)[D],o(this,P)[P]=new s,o(this,S)[S]=t(),o(this,O)[O].element.addEventListener("scroll",o(this,X)[X],{passive:!1}),o(this,M)[M]=new y(d,{touchMultiplier:lt,wheelMultiplier:at,normalizeWheel:ct}),o(this,M)[M].on("scroll",o(this,x)[x])}var n,l,h=i.prototype;return h.destroy=function(){o(this,S)[S].events={},o(this,O)[O].element.removeEventListener("scroll",o(this,X)[X],{passive:!1}),o(this,M)[M].destroy()},h.on=function(t,e){return o(this,S)[S].on(t,e)},h.emit=function(){o(this,S)[S].emit("scroll",this)},h.start=function(){o(this,q)[q]=!1},h.stop=function(){o(this,q)[q]=!0},h.raf=function(t){var e=t-(o(this,T)[T]||t);o(this,T)[T]=t,o(this,P)[P].advance(.001*e)},h.scrollTo=function(t,e,i){var n=this,s=void 0===e?{}:e,l=s.offset,h=void 0===l?0:l,a=s.immediate,u=void 0!==a&&a,c=s.lock,d=void 0!==c&&c,v=s.duration,p=void 0===v?o(this,g)[g].duration:v,f=s.easing,m=void 0===f?o(this,g)[g].easing:f,b=s.lerp,w=void 0===b?o(this,g)[g].lerp:b,y=s.onComplete;if(void 0===i&&(i=!0),["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var j,S;if("string"==typeof t?S=document.querySelector(t):null!=(j=t)&&j.nodeType&&(S=t),S){if(o(this,O)[O].element!==window){var M=o(this,O)[O].element.getBoundingClientRect();h-=this.isHorizontal?M.left:M.top}var T=S.getBoundingClientRect();t=(this.isHorizontal?T.left:T.top)+o(this,E)[E]}}if("number"==typeof t)if(t+=h,o(this,g)[g].infinite?i&&(o(this,W)[W]=o(this,E)[E]=this.scroll):t=r(0,t,this.limit),o(this,E)[E]!==t){if(u)return o(this,E)[E]=o(this,W)[W]=t,o(this,_)[_](t),this.emit(),void(null==y||y());i||(o(this,W)[W]=t),o(this,P)[P].fromTo(o(this,E)[E],t,{duration:p,easing:m,lerp:w,onStart:function(){d&&(o(n,H)[H]=!0),o(n,A)[A]=!0},onUpdate:function(t){o(n,z)[z]=t-o(n,E)[E],o(n,L)[L]=Math.sign(o(n,z)[z]),o(n,E)[E]=t,o(n,_)[_](t),i&&(o(n,W)[W]=t),n.emit()},onComplete:function(t){d&&(o(n,H)[H]=!1),requestAnimationFrame(function(){o(n,A)[A]=!1}),o(n,z)[z]=0,n.emit(),null==y||y()}})}else null==y||y()},n=i,(l=[{key:"options",get:function(){return e({},o(this,g)[g])}},{key:"limit",get:function(){return this.isHorizontal?o(this,j)[j].width-o(this,O)[O].width:o(this,j)[j].height-o(this,O)[O].height}},{key:"isHorizontal",get:function(){return"horizontal"===o(this,g)[g].orientation}},{key:"scroll",get:function(){return e=o(this,E)[E]%(t=this.limit),(t>0&&e<0||t<0&&e>0)&&(e+=t),e;var t,e}},{key:"progress",get:function(){return this.scroll/this.limit}},{key:"velocity",get:function(){return o(this,z)[z]}},{key:"direction",get:function(){return o(this,L)[L]}},{key:"isSmooth",get:function(){return o(this,C)[C]}},{key:"isScrolling",get:function(){return o(this,k)[k]}},{key:"isStopped",get:function(){return o(this,R)[R]}}])&&function(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,"symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key))?o:String(o),n)}var o}(n.prototype,l),Object.defineProperty(n,"prototype",{writable:!1}),i}();function V(t){o(this,g)[g].infinite&&(t=this.scroll),this.isHorizontal?o(this,Y)[Y].scrollLeft=t:o(this,Y)[Y].scrollTop=t}function F(){return o(this,O)[O].element===window?o(this,j)[j].element:o(this,O)[O].element}function K(){return o(this,Y)[Y].scrollTop}function G(t){o(this,C)[C]!==t&&o(this,Y)[Y].classList.toggle("lenis-smooth",t),o(this,C)[C]=t}function I(t){o(this,k)[k]!==t&&o(this,Y)[Y].classList.toggle("lenis-scrolling",t),o(this,k)[k]=t}function J(t){o(this,R)[R]!==t&&o(this,Y)[Y].classList.toggle("lenis-stopped",t),o(this,R)[R]=t}export{B as default};
//# sourceMappingURL=lenis.mjs.map
