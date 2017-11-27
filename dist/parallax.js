/*!
 * Copyright (c) 2017 NAVER Corp.
 * @egjs/infinitegrid project is licensed under the MIT license
 * 
 * @egjs/infinitegrid JavaScript library
 * https://github.com/naver/egjs-infinitegrid
 * 
 * @version 3.0.0-rc
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Parallax=t():(e.eg=e.eg||{},e.eg.Parallax=t())}(this,function(){return function(e){function __webpack_require__(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,__webpack_require__),o.l=!0,o.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(e,t,n){"use strict";t.__esModule=!0,t.ALIGN=t.isMobile=t.agent=t.DEFAULT_OPTIONS=t.GROUPKEY_ATT=t.DUMMY_POSITION=t.SINGLE=t.MULTI=t.NO_TRUSTED=t.TRUSTED=t.NO_CACHE=t.CACHE=t.HORIZONTAL=t.VERTICAL=t.PREPEND=t.APPEND=t.CONTAINER_CLASSNAME=t.RETRY=t.IS_ANDROID2=t.IS_IOS=t.IS_IE=t.SUPPORT_PASSIVE=t.SUPPORT_ADDEVENTLISTENER=t.SUPPORT_COMPUTEDSTYLE=undefined;var o=n(1),r=o.window.navigator.userAgent,i=(t.SUPPORT_COMPUTEDSTYLE=!!("getComputedStyle"in o.window),t.SUPPORT_ADDEVENTLISTENER=!!("addEventListener"in document)),a=(t.SUPPORT_PASSIVE=function(){var e=!1;try{i&&Object.defineProperty&&document.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){e=!0}}))}catch(t){}return e}(),t.IS_IE=/MSIE|Trident|Windows Phone|Edge/.test(r),t.IS_IOS=/iPhone|iPad/.test(r),t.IS_ANDROID2=/Android 2\./.test(r),t.RETRY=3,t.CONTAINER_CLASSNAME="_eg-infinitegrid-container_",t.APPEND=!0,t.PREPEND=!1,t.VERTICAL="vertical",t.HORIZONTAL="horizontal",t.CACHE=!0,t.NO_CACHE=!1,t.TRUSTED=!0,t.NO_TRUSTED=!1,t.MULTI=!0,t.SINGLE=!1,t.DUMMY_POSITION=-1e5,t.GROUPKEY_ATT="data-groupkey",t.DEFAULT_OPTIONS={horizontal:!1,margin:0},t.agent=navigator.userAgent);t.isMobile=-1!==a.indexOf("Mobi")||/ios|android/.test(a),t.ALIGN={START:"start",CENTER:"center",END:"end",JUSTIFY:"justify"}},function(e,t,n){"use strict";t.__esModule=!0;var o=window;t.window=window;t.document=o.document},function(e,t,n){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(0),i=n(3),a={vertical:{position:"top",size:"height",cammelSize:"Height",coordinate:"Y"},horizontal:{position:"left",size:"width",cammelSize:"Width",coordinate:"X"}},_=r.ALIGN.START,s=r.ALIGN.CENTER,c=function(){for(var e=(document.head||document.getElementsByTagName("head")[0]).style,t=["transform","webkitTransform","msTransform","mozTransform"],n=0,o=t.length;n<o;n++)if(t[n]in e)return t[n];return""}(),l=function(){function Parallax(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window,t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_classCallCheck(this,Parallax),this.options=o({container:null,selector:"img",strength:1,center:0,range:[-1,1],align:_,horizontal:!1},t),this._root=(0,i.$)(e),this._container=this.options.container&&(0,i.$)(this.options.container),this._rootSize=0,this._containerPosition=0,this._style=a[this.options.horizontal?"horizontal":"vertical"],this.resize()}return Parallax.prototype._checkParallaxItem=function(e){if(e){var t=this.options.selector;if(!e.__IMAGE__){var n=e.querySelector(t);if(e.__IMAGE__=n||-1,-1===e.__IMAGE__)return;e.__BOX__=n.parentNode}if(-1!==e.__IMAGE__){var o=this._style.cammelSize;e.__IMAGE__.__SIZE__=e.__IMAGE__["offset"+o],e.__BOX__.__SIZE__=e.__BOX__["offset"+o]}}},Parallax.prototype.resize=function(){var e=this,t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[],n=this._root,o=this._container,a=this._style.position,_=this._style.cammelSize;if(o&&n!==o){var s=((0,i.isWindow)(n)?document.body:n).getBoundingClientRect(),c=o.getBoundingClientRect();this._containerPosition=c[a]-s[a]}else this._containerPosition=0;if(this._rootSize=(0,i.isWindow)(n)?window["inner"+_]||document.documentElement["client"+_]:n["client"+_],r.isMobile&(0,i.isWindow)(n)){var l=document.body.offsetWidth||document.documentElement.offsetWidth,u=window.innerWidth;this._rootSize=this._rootSize/(l/u)}t.forEach(function(t){e._checkParallaxItem(t.el)})},Parallax.prototype.refresh=function(){var e=this,t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[],n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0,o=this._style,r=o.position,i=o.coordinate,a=o.size,_=this.options,l=_.strength,u=_.center,d=_.range,f=_.align,h=this._rootSize,E=n+h,p=this._containerPosition;t.forEach(function(t){if(t.rect&&t.size&&t.el){var o=p+t.rect[r],_=t.rect[a]||t.size[a];if(!(n>o+_||E<o)){var S=t.el;if(S.__IMAGE__||e._checkParallaxItem(S),-1!==S.__IMAGE__){var T=S.__IMAGE__,y=S.__BOX__.__SIZE__,m=T.__SIZE__;if(y>=m)T.style[c]="";else{var g=(n+h/2-(h+y)/2*u-(o+y/2))/(h+y)*2*l,P=(y-m)/2,v=P*(1-(g=Math.max(Math.min(g,d[1]),d[0])));f===s&&(v-=P),T.__TRANSLATE__=v,T.__RATIO__=g,T.style[c]="translate"+i+"("+v+"px)"}}}}})},Parallax}();e.exports=l},function(e,t,n){"use strict";function toArray(e){var t=[];if(e)for(var n=0,o=e.length;n<o;n++)t.push(e[n]);return t}function $(e){var t=arguments.length>1&&arguments[1]!==undefined&&arguments[1],n=void 0;if("string"==typeof e){if(e.match(/^<([A-z]+)\s*([^>]*)>/)){var o=i.document.createElement("div");o.innerHTML=e,n=o.childNodes}else n=i.document.querySelectorAll(e);n=t?toArray(n):n&&n.length>0&&n[0]||undefined}else e===i.window?n=e:!e.nodeName||1!==e.nodeType&&9!==e.nodeType?"jQuery"in i.window&&e instanceof i.window.jQuery||e.constructor.prototype.jquery?n=t?e.toArray():e.get(0):Array.isArray(e)&&(n=e.map(function(e){return $(e)}),t||(n=n.length>=1?n[0]:undefined)):n=e;return n}function getStyles(e){return a.SUPPORT_COMPUTEDSTYLE?i.window.getComputedStyle(e):e.currentStyle}function _getSize(e,t){if(e===i.window)return e.document.documentElement["client"+t];if(9===e.nodeType){var n=e.documentElement;return Math.max(e.body["scroll"+t],n["scroll"+t],e.body["offset"+t],n["offset"+t],n["client"+t])}var o=getStyles(e),r=o[t.toLowerCase()];return parseFloat(/auto|%/.test(r)?e["offset"+t]:o[t.toLowerCase()])}t.__esModule=!0,t.STYLE=undefined;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.toArray=toArray,t.fill=function(e,t){for(var n="object"===(void 0===e?"undefined":r(e))?e:new Array(e),o=n.length-1;o>=0;--o)n[o]=t;return n},t.$=$,t.addEvent=function(e,t,n,o){if(a.SUPPORT_ADDEVENTLISTENER){var i=o||!1;"object"===(void 0===o?"undefined":r(o))&&(i=!!a.SUPPORT_PASSIVE&&o),e.addEventListener(t,n,i)}else e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},t.removeEvent=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null},t.scroll=function(e,t){var n="scroll"+(t?"Top":"Left");return e===i.window?i.document.body[n]||i.document.documentElement[n]:e[n]},t.scrollTo=function(e,t,n){e===i.window?e.scroll(t,n):(e.scrollLeft=t,e.scrollTop=n)},t.scrollBy=function(e,t,n){e===i.window?e.scrollBy(t,n):(e.scrollLeft+=t,e.scrollTop+=n)},t.getStyles=getStyles,t.innerWidth=function(e){return _getSize(e,"Width")},t.innerHeight=function(e){return _getSize(e,"Height")},t.getStyleNames=function(e){return _[e?a.HORIZONTAL:a.VERTICAL]},t.assignOptions=function(e,t){return o({},a.DEFAULT_OPTIONS,e,t)},t.toZeroArray=function(e){return e&&e.length?e:[0]},t.isWindow=function(e){return e===i.window},t.indexOf=function(e,t){if(!(arguments.length>2&&arguments[2]!==undefined&&arguments[2]))return e.indexOf(t);for(var n=e.length-1;n>=0;--n)if(e[n]===t)return n;return-1};var i=n(1),a=n(0),_=t.STYLE={vertical:{pos1:"top",endPos1:"bottom",size1:"height",pos2:"left",endPos2:"right",size2:"width"},horizontal:{pos1:"left",endPos1:"right",size1:"width",pos2:"top",endPos2:"bottom",size2:"height"}}}])});
//# sourceMappingURL=parallax.js.map