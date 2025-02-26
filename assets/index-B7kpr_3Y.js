(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function H_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Uf={exports:{}},yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function TS(){if(wg)return yo;wg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return yo.Fragment=e,yo.jsx=i,yo.jsxs=i,yo}var Dg;function bS(){return Dg||(Dg=1,Uf.exports=TS()),Uf.exports}var Kt=bS(),Lf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function AS(){if(Ug)return oe;Ug=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function M(U,nt,Et){this.props=U,this.context=nt,this.refs=C,this.updater=Et||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,nt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,nt,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=M.prototype;function P(U,nt,Et){this.props=U,this.context=nt,this.refs=C,this.updater=Et||y}var O=P.prototype=new _;O.constructor=P,b(O,M.prototype),O.isPureReactComponent=!0;var L=Array.isArray,H={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function B(U,nt,Et,At,q,dt){return Et=dt.ref,{$$typeof:s,type:U,key:nt,ref:Et!==void 0?Et:null,props:dt}}function K(U,nt){return B(U.type,nt,void 0,void 0,void 0,U.props)}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function R(U){var nt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Et){return nt[Et]})}var F=/\/+/g;function ct(U,nt){return typeof U=="object"&&U!==null&&U.key!=null?R(""+U.key):nt.toString(36)}function it(){}function mt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(it,it):(U.status="pending",U.then(function(nt){U.status==="pending"&&(U.status="fulfilled",U.value=nt)},function(nt){U.status==="pending"&&(U.status="rejected",U.reason=nt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ht(U,nt,Et,At,q){var dt=typeof U;(dt==="undefined"||dt==="boolean")&&(U=null);var St=!1;if(U===null)St=!0;else switch(dt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(U.$$typeof){case s:case e:St=!0;break;case g:return St=U._init,ht(St(U._payload),nt,Et,At,q)}}if(St)return q=q(U),St=At===""?"."+ct(U,0):At,L(q)?(Et="",St!=null&&(Et=St.replace(F,"$&/")+"/"),ht(q,nt,Et,"",function(Qt){return Qt})):q!=null&&(w(q)&&(q=K(q,Et+(q.key==null||U&&U.key===q.key?"":(""+q.key).replace(F,"$&/")+"/")+St)),nt.push(q)),1;St=0;var Tt=At===""?".":At+":";if(L(U))for(var Rt=0;Rt<U.length;Rt++)At=U[Rt],dt=Tt+ct(At,Rt),St+=ht(At,nt,Et,dt,q);else if(Rt=v(U),typeof Rt=="function")for(U=Rt.call(U),Rt=0;!(At=U.next()).done;)At=At.value,dt=Tt+ct(At,Rt++),St+=ht(At,nt,Et,dt,q);else if(dt==="object"){if(typeof U.then=="function")return ht(mt(U),nt,Et,At,q);throw nt=String(U),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return St}function W(U,nt,Et){if(U==null)return U;var At=[],q=0;return ht(U,At,"","",function(dt){return nt.call(Et,dt,q++)}),At}function at(U){if(U._status===-1){var nt=U._result;nt=nt(),nt.then(function(Et){(U._status===0||U._status===-1)&&(U._status=1,U._result=Et)},function(Et){(U._status===0||U._status===-1)&&(U._status=2,U._result=Et)}),U._status===-1&&(U._status=0,U._result=nt)}if(U._status===1)return U._result.default;throw U._result}var j=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function xt(){}return oe.Children={map:W,forEach:function(U,nt,Et){W(U,function(){nt.apply(this,arguments)},Et)},count:function(U){var nt=0;return W(U,function(){nt++}),nt},toArray:function(U){return W(U,function(nt){return nt})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},oe.Component=M,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=P,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,oe.act=function(){throw Error("act(...) is not supported in production builds of React.")},oe.cache=function(U){return function(){return U.apply(null,arguments)}},oe.cloneElement=function(U,nt,Et){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var At=b({},U.props),q=U.key,dt=void 0;if(nt!=null)for(St in nt.ref!==void 0&&(dt=void 0),nt.key!==void 0&&(q=""+nt.key),nt)!G.call(nt,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&nt.ref===void 0||(At[St]=nt[St]);var St=arguments.length-2;if(St===1)At.children=Et;else if(1<St){for(var Tt=Array(St),Rt=0;Rt<St;Rt++)Tt[Rt]=arguments[Rt+2];At.children=Tt}return B(U.type,q,void 0,void 0,dt,At)},oe.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},oe.createElement=function(U,nt,Et){var At,q={},dt=null;if(nt!=null)for(At in nt.key!==void 0&&(dt=""+nt.key),nt)G.call(nt,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(q[At]=nt[At]);var St=arguments.length-2;if(St===1)q.children=Et;else if(1<St){for(var Tt=Array(St),Rt=0;Rt<St;Rt++)Tt[Rt]=arguments[Rt+2];q.children=Tt}if(U&&U.defaultProps)for(At in St=U.defaultProps,St)q[At]===void 0&&(q[At]=St[At]);return B(U,dt,void 0,void 0,null,q)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(U){return{$$typeof:d,render:U}},oe.isValidElement=w,oe.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:at}},oe.memo=function(U,nt){return{$$typeof:p,type:U,compare:nt===void 0?null:nt}},oe.startTransition=function(U){var nt=H.T,Et={};H.T=Et;try{var At=U(),q=H.S;q!==null&&q(Et,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(xt,j)}catch(dt){j(dt)}finally{H.T=nt}},oe.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},oe.use=function(U){return H.H.use(U)},oe.useActionState=function(U,nt,Et){return H.H.useActionState(U,nt,Et)},oe.useCallback=function(U,nt){return H.H.useCallback(U,nt)},oe.useContext=function(U){return H.H.useContext(U)},oe.useDebugValue=function(){},oe.useDeferredValue=function(U,nt){return H.H.useDeferredValue(U,nt)},oe.useEffect=function(U,nt){return H.H.useEffect(U,nt)},oe.useId=function(){return H.H.useId()},oe.useImperativeHandle=function(U,nt,Et){return H.H.useImperativeHandle(U,nt,Et)},oe.useInsertionEffect=function(U,nt){return H.H.useInsertionEffect(U,nt)},oe.useLayoutEffect=function(U,nt){return H.H.useLayoutEffect(U,nt)},oe.useMemo=function(U,nt){return H.H.useMemo(U,nt)},oe.useOptimistic=function(U,nt){return H.H.useOptimistic(U,nt)},oe.useReducer=function(U,nt,Et){return H.H.useReducer(U,nt,Et)},oe.useRef=function(U){return H.H.useRef(U)},oe.useState=function(U){return H.H.useState(U)},oe.useSyncExternalStore=function(U,nt,Et){return H.H.useSyncExternalStore(U,nt,Et)},oe.useTransition=function(){return H.H.useTransition()},oe.version="19.0.0",oe}var Lg;function nd(){return Lg||(Lg=1,Lf.exports=AS()),Lf.exports}var Yn=nd();const dh=H_(Yn);var Nf={exports:{}},Eo={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function RS(){return Ng||(Ng=1,function(s){function e(W,at){var j=W.length;W.push(at);t:for(;0<j;){var xt=j-1>>>1,U=W[xt];if(0<l(U,at))W[xt]=at,W[j]=U,j=xt;else break t}}function i(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var at=W[0],j=W.pop();if(j!==at){W[0]=j;t:for(var xt=0,U=W.length,nt=U>>>1;xt<nt;){var Et=2*(xt+1)-1,At=W[Et],q=Et+1,dt=W[q];if(0>l(At,j))q<U&&0>l(dt,At)?(W[xt]=dt,W[q]=j,xt=q):(W[xt]=At,W[Et]=j,xt=Et);else if(q<U&&0>l(dt,j))W[xt]=dt,W[q]=j,xt=q;else break t}}return at}function l(W,at){var j=W.sortIndex-at.sortIndex;return j!==0?j:W.id-at.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,v=3,y=!1,b=!1,C=!1,M=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(W){for(var at=i(p);at!==null;){if(at.callback===null)r(p);else if(at.startTime<=W)r(p),at.sortIndex=at.expirationTime,e(m,at);else break;at=i(p)}}function L(W){if(C=!1,O(W),!b)if(i(m)!==null)b=!0,mt();else{var at=i(p);at!==null&&ht(L,at.startTime-W)}}var H=!1,G=-1,B=5,K=-1;function w(){return!(s.unstable_now()-K<B)}function R(){if(H){var W=s.unstable_now();K=W;var at=!0;try{t:{b=!1,C&&(C=!1,_(G),G=-1),y=!0;var j=v;try{e:{for(O(W),x=i(m);x!==null&&!(x.expirationTime>W&&w());){var xt=x.callback;if(typeof xt=="function"){x.callback=null,v=x.priorityLevel;var U=xt(x.expirationTime<=W);if(W=s.unstable_now(),typeof U=="function"){x.callback=U,O(W),at=!0;break e}x===i(m)&&r(m),O(W)}else r(m);x=i(m)}if(x!==null)at=!0;else{var nt=i(p);nt!==null&&ht(L,nt.startTime-W),at=!1}}break t}finally{x=null,v=j,y=!1}at=void 0}}finally{at?F():H=!1}}}var F;if(typeof P=="function")F=function(){P(R)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,it=ct.port2;ct.port1.onmessage=R,F=function(){it.postMessage(null)}}else F=function(){M(R,0)};function mt(){H||(H=!0,F())}function ht(W,at){G=M(function(){W(s.unstable_now())},at)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_continueExecution=function(){b||y||(b=!0,mt())},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return i(m)},s.unstable_next=function(W){switch(v){case 1:case 2:case 3:var at=3;break;default:at=v}var j=v;v=at;try{return W()}finally{v=j}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(W,at){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var j=v;v=W;try{return at()}finally{v=j}},s.unstable_scheduleCallback=function(W,at,j){var xt=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?xt+j:xt):j=xt,W){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=j+U,W={id:g++,callback:at,priorityLevel:W,startTime:j,expirationTime:U,sortIndex:-1},j>xt?(W.sortIndex=j,e(p,W),i(m)===null&&W===i(p)&&(C?(_(G),G=-1):C=!0,ht(L,j-xt))):(W.sortIndex=U,e(m,W),b||y||(b=!0,mt())),W},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(W){var at=v;return function(){var j=v;v=at;try{return W.apply(this,arguments)}finally{v=j}}}}(Pf)),Pf}var Og;function CS(){return Og||(Og=1,Of.exports=RS()),Of.exports}var zf={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function wS(){if(Pg)return Mn;Pg=1;var s=nd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Mn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Mn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Mn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Mn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Mn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Mn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Mn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Mn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Mn.requestFormReset=function(m){r.d.r(m)},Mn.unstable_batchedUpdates=function(m,p){return m(p)},Mn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Mn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Mn.version="19.0.0",Mn}var zg;function DS(){if(zg)return zf.exports;zg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),zf.exports=wS(),zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function US(){if(Bg)return Eo;Bg=1;var s=CS(),e=nd(),i=DS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),v=Symbol.for("react.consumer"),y=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),L=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function G(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var B=Symbol.for("react.client.reference");function K(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===B?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case m:return"Fragment";case d:return"Portal";case g:return"Profiler";case p:return"StrictMode";case C:return"Suspense";case M:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y:return(t.displayName||"Context")+".Provider";case v:return(t._context.displayName||"Context")+".Consumer";case b:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _:return n=t.displayName||null,n!==null?n:K(t.type)||"Memo";case P:n=t._payload,t=t._init;try{return K(t(n))}catch{}}return null}var w=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=Object.assign,F,ct;function it(t){if(F===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);F=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+t+ct}var mt=!1;function ht(t,n){if(!t||mt)return"";mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ot){var et=ot}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(ot){et=ot}t.call(_t.prototype)}}else{try{throw Error()}catch(ot){et=ot}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ot){if(ot&&et&&typeof ot.stack=="string")return[ot.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var N=S.split(`
`),V=T.split(`
`);for(c=o=0;o<N.length&&!N[o].includes("DetermineComponentFrameRoot");)o++;for(;c<V.length&&!V[c].includes("DetermineComponentFrameRoot");)c++;if(o===N.length||c===V.length)for(o=N.length-1,c=V.length-1;1<=o&&0<=c&&N[o]!==V[c];)c--;for(;1<=o&&0<=c;o--,c--)if(N[o]!==V[c]){if(o!==1||c!==1)do if(o--,c--,0>c||N[o]!==V[c]){var lt=`
`+N[o].replace(" at new "," at ");return t.displayName&&lt.includes("<anonymous>")&&(lt=lt.replace("<anonymous>",t.displayName)),lt}while(1<=o&&0<=c);break}}}finally{mt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?it(a):""}function W(t){switch(t.tag){case 26:case 27:case 5:return it(t.type);case 16:return it("Lazy");case 13:return it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return t=ht(t.type,!1),t;case 11:return t=ht(t.type.render,!1),t;case 1:return t=ht(t.type,!0),t;default:return""}}function at(t){try{var n="";do n+=W(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function j(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function xt(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function U(t){if(j(t)!==t)throw Error(r(188))}function nt(t){var n=t.alternate;if(!n){if(n=j(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return U(c),t;if(f===o)return U(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,o=f;break}if(T===o){S=!0,o=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,o=c;break}if(T===o){S=!0,o=f,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function Et(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=Et(t),n!==null)return n;t=t.sibling}return null}var At=Array.isArray,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},St=[],Tt=-1;function Rt(t){return{current:t}}function Qt(t){0>Tt||(t.current=St[Tt],St[Tt]=null,Tt--)}function Pt(t,n){Tt++,St[Tt]=t.current,t.current=n}var Me=Rt(null),Re=Rt(null),ae=Rt(null),z=Rt(null);function pn(t,n){switch(Pt(ae,n),Pt(Re,t),Pt(Me,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?ag(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=ag(t),n=rg(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Qt(Me),Pt(Me,n)}function se(){Qt(Me),Qt(Re),Qt(ae)}function fe(t){t.memoizedState!==null&&Pt(z,t);var n=Me.current,a=rg(n,t.type);n!==a&&(Pt(Re,t),Pt(Me,a))}function kt(t){Re.current===t&&(Qt(Me),Qt(Re)),z.current===t&&(Qt(z),_o._currentValue=dt)}var Ce=Object.prototype.hasOwnProperty,Xt=s.unstable_scheduleCallback,D=s.unstable_cancelCallback,E=s.unstable_shouldYield,tt=s.unstable_requestPaint,ut=s.unstable_now,vt=s.unstable_getCurrentPriorityLevel,ft=s.unstable_ImmediatePriority,Ht=s.unstable_UserBlockingPriority,wt=s.unstable_NormalPriority,zt=s.unstable_LowPriority,pe=s.unstable_IdlePriority,yt=s.log,Bt=s.unstable_setDisableYieldValue,qt=null,Gt=null;function Ft(t){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(qt,t,void 0,(t.current.flags&128)===128)}catch{}}function re(t){if(typeof yt=="function"&&Bt(t),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(qt,t)}catch{}}var jt=Math.clz32?Math.clz32:Lt,De=Math.log,k=Math.LN2;function Lt(t){return t>>>=0,t===0?32:31-(De(t)/k|0)|0}var st=128,gt=4194304;function Ct(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Dt(t,n){var a=t.pendingLanes;if(a===0)return 0;var o=0,c=t.suspendedLanes,f=t.pingedLanes,S=t.warmLanes;t=t.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~c,a!==0?o=Ct(a):(f&=T,f!==0?o=Ct(f):t||(S=T&~S,S!==0&&(o=Ct(S))))):(T=a&~c,T!==0?o=Ct(T):f!==0?o=Ct(f):t||(S=a&~S,S!==0&&(o=Ct(S)))),o===0?0:n!==0&&n!==o&&(n&c)===0&&(c=o&-o,S=n&-n,c>=S||c===32&&(S&4194176)!==0)?n:o}function $t(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function He(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tn(){var t=st;return st<<=1,(st&4194176)===0&&(st=128),t}function ye(){var t=gt;return gt<<=1,(gt&62914560)===0&&(gt=4194304),t}function Tn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function bn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Fo(t,n,a,o,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,N=t.expirationTimes,V=t.hiddenUpdates;for(a=S&~a;0<a;){var lt=31-jt(a),_t=1<<lt;T[lt]=0,N[lt]=-1;var et=V[lt];if(et!==null)for(V[lt]=null,lt=0;lt<et.length;lt++){var ot=et[lt];ot!==null&&(ot.lane&=-536870913)}a&=~_t}o!==0&&Rs(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function Rs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-jt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194218}function vi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-jt(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function _r(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Cs(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:Eg(t.type))}function Io(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var In=Math.random().toString(36).slice(2),en="__reactFiber$"+In,nn="__reactProps$"+In,Ri="__reactContainer$"+In,vr="__reactEvents$"+In,Cc="__reactListeners$"+In,wc="__reactHandles$"+In,Ho="__reactResources$"+In,Ba="__reactMarker$"+In;function ws(t){delete t[en],delete t[nn],delete t[vr],delete t[Cc],delete t[wc]}function Ci(t){var n=t[en];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ri]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=lg(t);t!==null;){if(a=t[en])return a;t=lg(t)}return n}t=a,a=t.parentNode}return null}function A(t){if(t=t[en]||t[Ri]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function X(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function $(t){var n=t[Ho];return n||(n=t[Ho]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(t){t[Ba]=!0}var Y=new Set,Mt={};function bt(t,n){Ot(t,n),Ot(t+"Capture",n)}function Ot(t,n){for(Mt[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},Yt={};function ge(t){return Ce.call(Yt,t)?!0:Ce.call(ee,t)?!1:te.test(t)?Yt[t]=!0:(ee[t]=!0,!1)}function _e(t,n,a){if(ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ie(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ee(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function ne(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function an(t){var n=Zt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ve(t){t._valueTracker||(t._valueTracker=an(t))}function Ln(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Zt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function oi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var An=/[\n"\\]/g;function cn(t){return t.replace(An,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ue(t,n,a,o,c,f,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ne(n)):t.value!==""+ne(n)&&(t.value=""+ne(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,S,ne(n)):a!=null?Sn(t,S,ne(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ne(T):t.removeAttribute("name")}function Rn(t,n,a,o,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function Sn(t,n,a){n==="number"&&oi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ke(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function mn(t,n,a){if(n!=null&&(n=""+ne(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ne(a):""}function Sr(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(At(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ne(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Nn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Mv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hd(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Mv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function dd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&hd(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&hd(t,f,n[f])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ev=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(t){return Ev.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Uc=null;function Lc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xr=null,Mr=null;function pd(t){var n=A(t);if(n&&(t=n.stateNode)){var a=t[nn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ue(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+cn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[nn]||null;if(!c)throw Error(r(90));Ue(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Ln(o)}break t;case"textarea":mn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ke(t,!!a.multiple,n,!1)}}}var Nc=!1;function md(t,n,a){if(Nc)return t(n,a);Nc=!0;try{var o=t(n);return o}finally{if(Nc=!1,(xr!==null||Mr!==null)&&(Tl(),xr&&(n=xr,t=Mr,Mr=xr=null,pd(n),t)))for(n=0;n<t.length;n++)pd(t[n])}}function Ds(t,n){var a=t.stateNode;if(a===null)return null;var o=a[nn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oc=!1;if(Nt)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{Oc=!1}var aa=null,Pc=null,Vo=null;function gd(){if(Vo)return Vo;var t,n=Pc,a=n.length,o,c="value"in aa?aa.value:aa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===c[f-o];o++);return Vo=c.slice(t,1<o?1-o:void 0)}function ko(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Xo(){return!0}function _d(){return!1}function On(t){function n(a,o,c,f,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xo:_d,this.isPropagationStopped=_d,this}return R(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),n}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=On(Fa),Ls=R({},Fa,{view:0,detail:0}),Tv=On(Ls),zc,Bc,Ns,qo=R({},Ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ns&&(Ns&&t.type==="mousemove"?(zc=t.screenX-Ns.screenX,Bc=t.screenY-Ns.screenY):Bc=zc=0,Ns=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),vd=On(qo),bv=R({},qo,{dataTransfer:0}),Av=On(bv),Rv=R({},Ls,{relatedTarget:0}),Fc=On(Rv),Cv=R({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),wv=On(Cv),Dv=R({},Fa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Uv=On(Dv),Lv=R({},Fa,{data:0}),Sd=On(Lv),Nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Pv[t])?!!n[t]:!1}function Ic(){return zv}var Bv=R({},Ls,{key:function(t){if(t.key){var n=Nv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ov[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fv=On(Bv),Iv=R({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=On(Iv),Hv=R({},Ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),Gv=On(Hv),Vv=R({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),kv=On(Vv),Xv=R({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=On(Xv),qv=R({},Fa,{newState:0,oldState:0}),Yv=On(qv),jv=[9,13,27,32],Hc=Nt&&"CompositionEvent"in window,Os=null;Nt&&"documentMode"in document&&(Os=document.documentMode);var Zv=Nt&&"TextEvent"in window&&!Os,Md=Nt&&(!Hc||Os&&8<Os&&11>=Os),yd=" ",Ed=!1;function Td(t,n){switch(t){case"keyup":return jv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yr=!1;function Kv(t,n){switch(t){case"compositionend":return bd(n);case"keypress":return n.which!==32?null:(Ed=!0,yd);case"textInput":return t=n.data,t===yd&&Ed?null:t;default:return null}}function Qv(t,n){if(yr)return t==="compositionend"||!Hc&&Td(t,n)?(t=gd(),Vo=Pc=aa=null,yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Md&&n.locale!=="ko"?null:n.data;default:return null}}var Jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Jv[t.type]:n==="textarea"}function Rd(t,n,a,o){xr?Mr?Mr.push(o):Mr=[o]:xr=o,n=wl(n,"onChange"),0<n.length&&(a=new Wo("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Ps=null,zs=null;function $v(t){$m(t,0)}function Yo(t){var n=X(t);if(Ln(n))return t}function Cd(t,n){if(t==="change")return n}var wd=!1;if(Nt){var Gc;if(Nt){var Vc="oninput"in document;if(!Vc){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),Vc=typeof Dd.oninput=="function"}Gc=Vc}else Gc=!1;wd=Gc&&(!document.documentMode||9<document.documentMode)}function Ud(){Ps&&(Ps.detachEvent("onpropertychange",Ld),zs=Ps=null)}function Ld(t){if(t.propertyName==="value"&&Yo(zs)){var n=[];Rd(n,zs,t,Lc(t)),md($v,n)}}function t0(t,n,a){t==="focusin"?(Ud(),Ps=n,zs=a,Ps.attachEvent("onpropertychange",Ld)):t==="focusout"&&Ud()}function e0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(zs)}function n0(t,n){if(t==="click")return Yo(n)}function i0(t,n){if(t==="input"||t==="change")return Yo(n)}function a0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Hn=typeof Object.is=="function"?Object.is:a0;function Bs(t,n){if(Hn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ce.call(n,c)||!Hn(t[c],n[c]))return!1}return!0}function Nd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Od(t,n){var a=Nd(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Nd(a)}}function Pd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Pd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function zd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=oi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=oi(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function r0(t,n){var a=zd(n);n=t.focusedElem;var o=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&Pd(n.ownerDocument.documentElement,n)){if(o!==null&&kc(n)){if(t=o.start,a=o.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(o.start,c);o=o.end===void 0?f:Math.min(o.end,c),!a.extend&&f>o&&(c=o,o=f,f=c),c=Od(n,f);var S=Od(n,o);c&&S&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),a.removeAllRanges(),f>o?(a.addRange(t),a.extend(S.node,S.offset)):(t.setEnd(S.node,S.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var s0=Nt&&"documentMode"in document&&11>=document.documentMode,Er=null,Xc=null,Fs=null,Wc=!1;function Bd(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wc||Er==null||Er!==oi(o)||(o=Er,"selectionStart"in o&&kc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Fs&&Bs(Fs,o)||(Fs=o,o=wl(Xc,"onSelect"),0<o.length&&(n=new Wo("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Er)))}function Ia(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Tr={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},qc={},Fd={};Nt&&(Fd=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Ha(t){if(qc[t])return qc[t];if(!Tr[t])return t;var n=Tr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Fd)return qc[t]=n[a];return t}var Id=Ha("animationend"),Hd=Ha("animationiteration"),Gd=Ha("animationstart"),o0=Ha("transitionrun"),l0=Ha("transitionstart"),c0=Ha("transitioncancel"),Vd=Ha("transitionend"),kd=new Map,Xd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function li(t,n){kd.set(t,n),bt(n,[t])}var jn=[],br=0,Yc=0;function jo(){for(var t=br,n=Yc=br=0;n<t;){var a=jn[n];jn[n++]=null;var o=jn[n];jn[n++]=null;var c=jn[n];jn[n++]=null;var f=jn[n];if(jn[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}f!==0&&Wd(a,c,f)}}function Zo(t,n,a,o){jn[br++]=t,jn[br++]=n,jn[br++]=a,jn[br++]=o,Yc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function jc(t,n,a,o){return Zo(t,n,a,o),Ko(t)}function ra(t,n){return Zo(t,null,null,n),Ko(t)}function Wd(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;c&&n!==null&&t.tag===3&&(f=t.stateNode,c=31-jt(a),f=f.hiddenUpdates,t=f[c],t===null?f[c]=[n]:t.push(n),n.lane=a|536870912)}function Ko(t){if(50<co)throw co=0,tf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ar={},qd=new WeakMap;function Zn(t,n){if(typeof t=="object"&&t!==null){var a=qd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:at(n)},qd.set(t,n),n)}return{value:t,source:n,stack:at(n)}}var Rr=[],Cr=0,Qo=null,Jo=0,Kn=[],Qn=0,Ga=null,wi=1,Di="";function Va(t,n){Rr[Cr++]=Jo,Rr[Cr++]=Qo,Qo=t,Jo=n}function Yd(t,n,a){Kn[Qn++]=wi,Kn[Qn++]=Di,Kn[Qn++]=Ga,Ga=t;var o=wi;t=Di;var c=32-jt(o)-1;o&=~(1<<c),a+=1;var f=32-jt(n)+c;if(30<f){var S=c-c%5;f=(o&(1<<S)-1).toString(32),o>>=S,c-=S,wi=1<<32-jt(n)+c|a<<c|o,Di=f+t}else wi=1<<f|a<<c|o,Di=t}function Zc(t){t.return!==null&&(Va(t,1),Yd(t,1,0))}function Kc(t){for(;t===Qo;)Qo=Rr[--Cr],Rr[Cr]=null,Jo=Rr[--Cr],Rr[Cr]=null;for(;t===Ga;)Ga=Kn[--Qn],Kn[Qn]=null,Di=Kn[--Qn],Kn[Qn]=null,wi=Kn[--Qn],Kn[Qn]=null}var Cn=null,gn=null,Te=!1,ci=null,Si=!1,Qc=Error(r(519));function ka(t){var n=Error(r(418,""));throw Gs(Zn(n,t)),Qc}function jd(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[en]=t,n[nn]=o,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<fo.length;a++)Se(fo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Rn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ve(n);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),Sr(n,o.value,o.defaultValue,o.children),ve(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||ig(n.textContent,a)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=Dl),n=!0):n=!1,n||ka(t)}function Zd(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 3:case 27:Si=!0;return;case 5:case 13:Si=!1;return;default:Cn=Cn.return}}function Is(t){if(t!==Cn)return!1;if(!Te)return Zd(t),Te=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&gn&&ka(t),Zd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){gn=fi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}gn=null}}else gn=Cn?fi(t.stateNode.nextSibling):null;return!0}function Hs(){gn=Cn=null,Te=!1}function Gs(t){ci===null?ci=[t]:ci.push(t)}var Vs=Error(r(460)),Kd=Error(r(474)),Jc={then:function(){}};function Qd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $o(){}function Jd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($o,$o),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Vs?Error(r(483)):t;default:if(typeof n.status=="string")n.then($o,$o);else{if(t=Be,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Vs?Error(r(483)):t}throw ks=n,Vs}}var ks=null;function $d(){if(ks===null)throw Error(r(459));var t=ks;return ks=null,t}var wr=null,Xs=0;function tl(t){var n=Xs;return Xs+=1,wr===null&&(wr=[]),Jd(wr,t,n)}function Ws(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function el(t,n){throw n.$$typeof===u?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function tp(t){var n=t._init;return n(t._payload)}function ep(t){function n(Z,I){if(t){var J=Z.deletions;J===null?(Z.deletions=[I],Z.flags|=16):J.push(I)}}function a(Z,I){if(!t)return null;for(;I!==null;)n(Z,I),I=I.sibling;return null}function o(Z){for(var I=new Map;Z!==null;)Z.key!==null?I.set(Z.key,Z):I.set(Z.index,Z),Z=Z.sibling;return I}function c(Z,I){return Z=_a(Z,I),Z.index=0,Z.sibling=null,Z}function f(Z,I,J){return Z.index=J,t?(J=Z.alternate,J!==null?(J=J.index,J<I?(Z.flags|=33554434,I):J):(Z.flags|=33554434,I)):(Z.flags|=1048576,I)}function S(Z){return t&&Z.alternate===null&&(Z.flags|=33554434),Z}function T(Z,I,J,pt){return I===null||I.tag!==6?(I=qu(J,Z.mode,pt),I.return=Z,I):(I=c(I,J),I.return=Z,I)}function N(Z,I,J,pt){var It=J.type;return It===m?lt(Z,I,J.props.children,pt,J.key):I!==null&&(I.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&tp(It)===I.type)?(I=c(I,J.props),Ws(I,J),I.return=Z,I):(I=Sl(J.type,J.key,J.props,null,Z.mode,pt),Ws(I,J),I.return=Z,I)}function V(Z,I,J,pt){return I===null||I.tag!==4||I.stateNode.containerInfo!==J.containerInfo||I.stateNode.implementation!==J.implementation?(I=Yu(J,Z.mode,pt),I.return=Z,I):(I=c(I,J.children||[]),I.return=Z,I)}function lt(Z,I,J,pt,It){return I===null||I.tag!==7?(I=$a(J,Z.mode,pt,It),I.return=Z,I):(I=c(I,J),I.return=Z,I)}function _t(Z,I,J){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return I=qu(""+I,Z.mode,J),I.return=Z,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case h:return J=Sl(I.type,I.key,I.props,null,Z.mode,J),Ws(J,I),J.return=Z,J;case d:return I=Yu(I,Z.mode,J),I.return=Z,I;case P:var pt=I._init;return I=pt(I._payload),_t(Z,I,J)}if(At(I)||G(I))return I=$a(I,Z.mode,J,null),I.return=Z,I;if(typeof I.then=="function")return _t(Z,tl(I),J);if(I.$$typeof===y)return _t(Z,gl(Z,I),J);el(Z,I)}return null}function et(Z,I,J,pt){var It=I!==null?I.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return It!==null?null:T(Z,I,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case h:return J.key===It?N(Z,I,J,pt):null;case d:return J.key===It?V(Z,I,J,pt):null;case P:return It=J._init,J=It(J._payload),et(Z,I,J,pt)}if(At(J)||G(J))return It!==null?null:lt(Z,I,J,pt,null);if(typeof J.then=="function")return et(Z,I,tl(J),pt);if(J.$$typeof===y)return et(Z,I,gl(Z,J),pt);el(Z,J)}return null}function ot(Z,I,J,pt,It){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Z=Z.get(J)||null,T(I,Z,""+pt,It);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case h:return Z=Z.get(pt.key===null?J:pt.key)||null,N(I,Z,pt,It);case d:return Z=Z.get(pt.key===null?J:pt.key)||null,V(I,Z,pt,It);case P:var he=pt._init;return pt=he(pt._payload),ot(Z,I,J,pt,It)}if(At(pt)||G(pt))return Z=Z.get(J)||null,lt(I,Z,pt,It,null);if(typeof pt.then=="function")return ot(Z,I,J,tl(pt),It);if(pt.$$typeof===y)return ot(Z,I,J,gl(I,pt),It);el(I,pt)}return null}function Vt(Z,I,J,pt){for(var It=null,he=null,Wt=I,Jt=I=0,hn=null;Wt!==null&&Jt<J.length;Jt++){Wt.index>Jt?(hn=Wt,Wt=null):hn=Wt.sibling;var be=et(Z,Wt,J[Jt],pt);if(be===null){Wt===null&&(Wt=hn);break}t&&Wt&&be.alternate===null&&n(Z,Wt),I=f(be,I,Jt),he===null?It=be:he.sibling=be,he=be,Wt=hn}if(Jt===J.length)return a(Z,Wt),Te&&Va(Z,Jt),It;if(Wt===null){for(;Jt<J.length;Jt++)Wt=_t(Z,J[Jt],pt),Wt!==null&&(I=f(Wt,I,Jt),he===null?It=Wt:he.sibling=Wt,he=Wt);return Te&&Va(Z,Jt),It}for(Wt=o(Wt);Jt<J.length;Jt++)hn=ot(Wt,Z,Jt,J[Jt],pt),hn!==null&&(t&&hn.alternate!==null&&Wt.delete(hn.key===null?Jt:hn.key),I=f(hn,I,Jt),he===null?It=hn:he.sibling=hn,he=hn);return t&&Wt.forEach(function(Ta){return n(Z,Ta)}),Te&&Va(Z,Jt),It}function ie(Z,I,J,pt){if(J==null)throw Error(r(151));for(var It=null,he=null,Wt=I,Jt=I=0,hn=null,be=J.next();Wt!==null&&!be.done;Jt++,be=J.next()){Wt.index>Jt?(hn=Wt,Wt=null):hn=Wt.sibling;var Ta=et(Z,Wt,be.value,pt);if(Ta===null){Wt===null&&(Wt=hn);break}t&&Wt&&Ta.alternate===null&&n(Z,Wt),I=f(Ta,I,Jt),he===null?It=Ta:he.sibling=Ta,he=Ta,Wt=hn}if(be.done)return a(Z,Wt),Te&&Va(Z,Jt),It;if(Wt===null){for(;!be.done;Jt++,be=J.next())be=_t(Z,be.value,pt),be!==null&&(I=f(be,I,Jt),he===null?It=be:he.sibling=be,he=be);return Te&&Va(Z,Jt),It}for(Wt=o(Wt);!be.done;Jt++,be=J.next())be=ot(Wt,Z,Jt,be.value,pt),be!==null&&(t&&be.alternate!==null&&Wt.delete(be.key===null?Jt:be.key),I=f(be,I,Jt),he===null?It=be:he.sibling=be,he=be);return t&&Wt.forEach(function(ES){return n(Z,ES)}),Te&&Va(Z,Jt),It}function qe(Z,I,J,pt){if(typeof J=="object"&&J!==null&&J.type===m&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case h:t:{for(var It=J.key;I!==null;){if(I.key===It){if(It=J.type,It===m){if(I.tag===7){a(Z,I.sibling),pt=c(I,J.props.children),pt.return=Z,Z=pt;break t}}else if(I.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&tp(It)===I.type){a(Z,I.sibling),pt=c(I,J.props),Ws(pt,J),pt.return=Z,Z=pt;break t}a(Z,I);break}else n(Z,I);I=I.sibling}J.type===m?(pt=$a(J.props.children,Z.mode,pt,J.key),pt.return=Z,Z=pt):(pt=Sl(J.type,J.key,J.props,null,Z.mode,pt),Ws(pt,J),pt.return=Z,Z=pt)}return S(Z);case d:t:{for(It=J.key;I!==null;){if(I.key===It)if(I.tag===4&&I.stateNode.containerInfo===J.containerInfo&&I.stateNode.implementation===J.implementation){a(Z,I.sibling),pt=c(I,J.children||[]),pt.return=Z,Z=pt;break t}else{a(Z,I);break}else n(Z,I);I=I.sibling}pt=Yu(J,Z.mode,pt),pt.return=Z,Z=pt}return S(Z);case P:return It=J._init,J=It(J._payload),qe(Z,I,J,pt)}if(At(J))return Vt(Z,I,J,pt);if(G(J)){if(It=G(J),typeof It!="function")throw Error(r(150));return J=It.call(J),ie(Z,I,J,pt)}if(typeof J.then=="function")return qe(Z,I,tl(J),pt);if(J.$$typeof===y)return qe(Z,I,gl(Z,J),pt);el(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,I!==null&&I.tag===6?(a(Z,I.sibling),pt=c(I,J),pt.return=Z,Z=pt):(a(Z,I),pt=qu(J,Z.mode,pt),pt.return=Z,Z=pt),S(Z)):a(Z,I)}return function(Z,I,J,pt){try{Xs=0;var It=qe(Z,I,J,pt);return wr=null,It}catch(Wt){if(Wt===Vs)throw Wt;var he=ei(29,Wt,null,Z.mode);return he.lanes=pt,he.return=Z,he}finally{}}}var Xa=ep(!0),np=ep(!1),Dr=Rt(null),nl=Rt(0);function ip(t,n){t=Gi,Pt(nl,t),Pt(Dr,n),Gi=t|n.baseLanes}function $c(){Pt(nl,Gi),Pt(Dr,Dr.current)}function tu(){Gi=nl.current,Qt(Dr),Qt(nl)}var Jn=Rt(null),xi=null;function sa(t){var n=t.alternate;Pt(rn,rn.current&1),Pt(Jn,t),xi===null&&(n===null||Dr.current!==null||n.memoizedState!==null)&&(xi=t)}function ap(t){if(t.tag===22){if(Pt(rn,rn.current),Pt(Jn,t),xi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(xi=t)}}else oa()}function oa(){Pt(rn,rn.current),Pt(Jn,Jn.current)}function Ui(t){Qt(Jn),xi===t&&(xi=null),Qt(rn)}var rn=Rt(0);function il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var u0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},f0=s.unstable_scheduleCallback,h0=s.unstable_NormalPriority,sn={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new u0,data:new Map,refCount:0}}function qs(t){t.refCount--,t.refCount===0&&f0(h0,function(){t.controller.abort()})}var Ys=null,nu=0,Ur=0,Lr=null;function d0(t,n){if(Ys===null){var a=Ys=[];nu=0,Ur=cf(),Lr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return nu++,n.then(rp,rp),n}function rp(){if(--nu===0&&Ys!==null){Lr!==null&&(Lr.status="fulfilled");var t=Ys;Ys=null,Ur=0,Lr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function p0(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var sp=w.S;w.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&d0(t,n),sp!==null&&sp(t,n)};var Wa=Rt(null);function iu(){var t=Wa.current;return t!==null?t:Be.pooledCache}function al(t,n){n===null?Pt(Wa,Wa.current):Pt(Wa,n.pool)}function op(){var t=iu();return t===null?null:{parent:sn._currentValue,pool:t}}var la=0,ue=null,Le=null,Ke=null,rl=!1,Nr=!1,qa=!1,sl=0,js=0,Or=null,m0=0;function Ye(){throw Error(r(321))}function au(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Hn(t[a],n[a]))return!1;return!0}function ru(t,n,a,o,c,f){return la=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,w.H=t===null||t.memoizedState===null?Ya:ca,qa=!1,f=a(o,c),qa=!1,Nr&&(f=cp(n,a,o,c)),lp(t),f}function lp(t){w.H=Mi;var n=Le!==null&&Le.next!==null;if(la=0,Ke=Le=ue=null,rl=!1,js=0,Or=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&ml(t)&&(un=!0))}function cp(t,n,a,o){ue=t;var c=0;do{if(Nr&&(Or=null),js=0,Nr=!1,25<=c)throw Error(r(301));if(c+=1,Ke=Le=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}w.H=ja,f=n(a,o)}while(Nr);return f}function g0(){var t=w.H,n=t.useState()[0];return n=typeof n.then=="function"?Zs(n):n,t=t.useState()[0],(Le!==null?Le.memoizedState:null)!==t&&(ue.flags|=1024),n}function su(){var t=sl!==0;return sl=0,t}function ou(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function lu(t){if(rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}rl=!1}la=0,Ke=Le=ue=null,Nr=!1,js=sl=0,Or=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?ue.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Qe(){if(Le===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var n=Ke===null?ue.memoizedState:Ke.next;if(n!==null)Ke=n,Le=t;else{if(t===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ke===null?ue.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}var ol;ol=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Zs(t){var n=js;return js+=1,Or===null&&(Or=[]),t=Jd(Or,t,n),n=ue,(Ke===null?n.memoizedState:Ke.next)===null&&(n=n.alternate,w.H=n===null||n.memoizedState===null?Ya:ca),t}function ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Zs(t);if(t.$$typeof===y)return xn(t)}throw Error(r(438,String(t)))}function cu(t){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ol(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=L;return n.index++,a}function Li(t,n){return typeof n=="function"?n(t):n}function cl(t){var n=Qe();return uu(n,Le,t)}function uu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=S=null,N=null,V=n,lt=!1;do{var _t=V.lane&-536870913;if(_t!==V.lane?(xe&_t)===_t:(la&_t)===_t){var et=V.revertLane;if(et===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),_t===Ur&&(lt=!0);else if((la&et)===et){V=V.next,et===Ur&&(lt=!0);continue}else _t={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},N===null?(T=N=_t,S=f):N=N.next=_t,ue.lanes|=et,va|=et;_t=V.action,qa&&a(f,_t),f=V.hasEagerState?V.eagerState:a(f,_t)}else et={lane:_t,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},N===null?(T=N=et,S=f):N=N.next=et,ue.lanes|=_t,va|=_t;V=V.next}while(V!==null&&V!==n);if(N===null?S=f:N.next=T,!Hn(f,t.memoizedState)&&(un=!0,lt&&(a=Lr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=N,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function fu(t){var n=Qe(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Hn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function up(t,n,a){var o=ue,c=Qe(),f=Te;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Hn((Le||c).memoizedState,a);if(S&&(c.memoizedState=a,un=!0),c=c.queue,pu(dp.bind(null,o,c,t),[t]),c.getSnapshot!==n||S||Ke!==null&&Ke.memoizedState.tag&1){if(o.flags|=2048,Pr(9,hp.bind(null,o,c,a,n),{destroy:void 0},null),Be===null)throw Error(r(349));f||(la&60)!==0||fp(o,n,a)}return a}function fp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=ol(),ue.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function hp(t,n,a,o){n.value=a,n.getSnapshot=o,pp(n)&&mp(t)}function dp(t,n,a){return a(function(){pp(n)&&mp(t)})}function pp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Hn(t,a)}catch{return!0}}function mp(t){var n=ra(t,2);n!==null&&wn(n,t,2)}function hu(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),qa){re(!0);try{a()}finally{re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:t},n}function gp(t,n,a,o){return t.baseState=a,uu(t,Le,typeof o=="function"?o:Li)}function _0(t,n,a,o,c){if(hl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};w.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,_p(n,f)):(f.next=a.next,n.pending=a.next=f)}}function _p(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=w.T,S={};w.T=S;try{var T=a(c,o),N=w.S;N!==null&&N(S,T),vp(t,n,T)}catch(V){du(t,n,V)}finally{w.T=f}}else try{f=a(c,o),vp(t,n,f)}catch(V){du(t,n,V)}}function vp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Sp(t,n,o)},function(o){return du(t,n,o)}):Sp(t,n,a)}function Sp(t,n,a){n.status="fulfilled",n.value=a,xp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,_p(t,a)))}function du(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,xp(n),n=n.next;while(n!==o)}t.action=null}function xp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Mp(t,n){return n}function yp(t,n){if(Te){var a=Be.formState;if(a!==null){t:{var o=ue;if(Te){if(gn){e:{for(var c=gn,f=Si;c.nodeType!==8;){if(!f){c=null;break e}if(c=fi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){gn=fi(c.nextSibling),o=c.data==="F!";break t}}ka(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mp,lastRenderedState:n},a.queue=o,a=Hp.bind(null,ue,o),o.dispatch=a,o=hu(!1),f=Su.bind(null,ue,!1,o.queue),o=Pn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=_0.bind(null,ue,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function Ep(t){var n=Qe();return Tp(n,Le,t)}function Tp(t,n,a){n=uu(t,n,Mp)[0],t=cl(Li)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Zs(n):n;var o=Qe(),c=o.queue,f=c.dispatch;return a!==o.memoizedState&&(ue.flags|=2048,Pr(9,v0.bind(null,c,a),{destroy:void 0},null)),[n,f,t]}function v0(t,n){t.action=n}function bp(t){var n=Qe(),a=Le;if(a!==null)return Tp(n,a,t);Qe(),n=n.memoizedState,a=Qe();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Pr(t,n,a,o){return t={tag:t,create:n,inst:a,deps:o,next:null},n=ue.updateQueue,n===null&&(n=ol(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Ap(){return Qe().memoizedState}function ul(t,n,a,o){var c=Pn();ue.flags|=t,c.memoizedState=Pr(1|n,a,{destroy:void 0},o===void 0?null:o)}function fl(t,n,a,o){var c=Qe();o=o===void 0?null:o;var f=c.memoizedState.inst;Le!==null&&o!==null&&au(o,Le.memoizedState.deps)?c.memoizedState=Pr(n,a,f,o):(ue.flags|=t,c.memoizedState=Pr(1|n,a,f,o))}function Rp(t,n){ul(8390656,8,t,n)}function pu(t,n){fl(2048,8,t,n)}function Cp(t,n){return fl(4,2,t,n)}function wp(t,n){return fl(4,4,t,n)}function Dp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Up(t,n,a){a=a!=null?a.concat([t]):null,fl(4,4,Dp.bind(null,n,t),a)}function mu(){}function Lp(t,n){var a=Qe();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&au(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Np(t,n){var a=Qe();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&au(n,o[1]))return o[0];if(o=t(),qa){re(!0);try{t()}finally{re(!1)}}return a.memoizedState=[o,n],o}function gu(t,n,a){return a===void 0||(la&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Pm(),ue.lanes|=t,va|=t,a)}function Op(t,n,a,o){return Hn(a,n)?a:Dr.current!==null?(t=gu(t,a,o),Hn(t,n)||(un=!0),t):(la&42)===0?(un=!0,t.memoizedState=a):(t=Pm(),ue.lanes|=t,va|=t,n)}function Pp(t,n,a,o,c){var f=q.p;q.p=f!==0&&8>f?f:8;var S=w.T,T={};w.T=T,Su(t,!1,n,a);try{var N=c(),V=w.S;if(V!==null&&V(T,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var lt=p0(N,o);Ks(t,n,lt,Xn(t))}else Ks(t,n,o,Xn(t))}catch(_t){Ks(t,n,{then:function(){},status:"rejected",reason:_t},Xn())}finally{q.p=f,w.T=S}}function S0(){}function _u(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=zp(t).queue;Pp(t,c,n,dt,a===null?S0:function(){return Bp(t),a(o)})}function zp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:dt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Bp(t){var n=zp(t).next.queue;Ks(t,n,{},Xn())}function vu(){return xn(_o)}function Fp(){return Qe().memoizedState}function Ip(){return Qe().memoizedState}function x0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Xn();t=ha(a);var o=da(n,t,a);o!==null&&(wn(o,n,a),$s(o,n,a)),n={cache:eu()},t.payload=n;return}n=n.return}}function M0(t,n,a){var o=Xn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hl(t)?Gp(n,a):(a=jc(t,n,a,o),a!==null&&(wn(a,t,o),Vp(a,n,o)))}function Hp(t,n,a){var o=Xn();Ks(t,n,a,o)}function Ks(t,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(t))Gp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,Hn(T,S))return Zo(t,n,c,0),Be===null&&jo(),!1}catch{}finally{}if(a=jc(t,n,c,o),a!==null)return wn(a,t,o),Vp(a,n,o),!0}return!1}function Su(t,n,a,o){if(o={lane:2,revertLane:cf(),action:o,hasEagerState:!1,eagerState:null,next:null},hl(t)){if(n)throw Error(r(479))}else n=jc(t,a,o,2),n!==null&&wn(n,t,2)}function hl(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function Gp(t,n){Nr=rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Vp(t,n,a){if((a&4194176)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,vi(t,a)}}var Mi={readContext:xn,use:ll,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye};Mi.useCacheRefresh=Ye,Mi.useMemoCache=Ye,Mi.useHostTransitionStatus=Ye,Mi.useFormState=Ye,Mi.useActionState=Ye,Mi.useOptimistic=Ye;var Ya={readContext:xn,use:ll,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:xn,useEffect:Rp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ul(4194308,4,Dp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ul(4194308,4,t,n)},useInsertionEffect:function(t,n){ul(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(qa){re(!0);try{t()}finally{re(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var c=a(n);if(qa){re(!0);try{a(n)}finally{re(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=M0.bind(null,ue,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=hu(t);var n=t.queue,a=Hp.bind(null,ue,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:mu,useDeferredValue:function(t,n){var a=Pn();return gu(a,t,n)},useTransition:function(){var t=hu(!1);return t=Pp.bind(null,ue,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ue,c=Pn();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Be===null)throw Error(r(349));(xe&60)!==0||fp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Rp(dp.bind(null,o,f,t),[t]),o.flags|=2048,Pr(9,hp.bind(null,o,f,a,n),{destroy:void 0},null),a},useId:function(){var t=Pn(),n=Be.identifierPrefix;if(Te){var a=Di,o=wi;a=(o&~(1<<32-jt(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=m0++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return Pn().memoizedState=x0.bind(null,ue)}};Ya.useMemoCache=cu,Ya.useHostTransitionStatus=vu,Ya.useFormState=yp,Ya.useActionState=yp,Ya.useOptimistic=function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Su.bind(null,ue,!0,a),a.dispatch=n,[t,n]};var ca={readContext:xn,use:ll,useCallback:Lp,useContext:xn,useEffect:pu,useImperativeHandle:Up,useInsertionEffect:Cp,useLayoutEffect:wp,useMemo:Np,useReducer:cl,useRef:Ap,useState:function(){return cl(Li)},useDebugValue:mu,useDeferredValue:function(t,n){var a=Qe();return Op(a,Le.memoizedState,t,n)},useTransition:function(){var t=cl(Li)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:Zs(t),n]},useSyncExternalStore:up,useId:Fp};ca.useCacheRefresh=Ip,ca.useMemoCache=cu,ca.useHostTransitionStatus=vu,ca.useFormState=Ep,ca.useActionState=Ep,ca.useOptimistic=function(t,n){var a=Qe();return gp(a,Le,t,n)};var ja={readContext:xn,use:ll,useCallback:Lp,useContext:xn,useEffect:pu,useImperativeHandle:Up,useInsertionEffect:Cp,useLayoutEffect:wp,useMemo:Np,useReducer:fu,useRef:Ap,useState:function(){return fu(Li)},useDebugValue:mu,useDeferredValue:function(t,n){var a=Qe();return Le===null?gu(a,t,n):Op(a,Le.memoizedState,t,n)},useTransition:function(){var t=fu(Li)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:Zs(t),n]},useSyncExternalStore:up,useId:Fp};ja.useCacheRefresh=Ip,ja.useMemoCache=cu,ja.useHostTransitionStatus=vu,ja.useFormState=bp,ja.useActionState=bp,ja.useOptimistic=function(t,n){var a=Qe();return Le!==null?gp(a,Le,t,n):(a.baseState=t,[t,a.queue.dispatch])};function xu(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:R({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Mu={isMounted:function(t){return(t=t._reactInternals)?j(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Xn(),c=ha(o);c.payload=n,a!=null&&(c.callback=a),n=da(t,c,o),n!==null&&(wn(n,t,o),$s(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Xn(),c=ha(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=da(t,c,o),n!==null&&(wn(n,t,o),$s(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Xn(),o=ha(a);o.tag=2,n!=null&&(o.callback=n),n=da(t,o,a),n!==null&&(wn(n,t,a),$s(n,t,a))}};function kp(t,n,a,o,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Bs(a,o)||!Bs(c,f):!0}function Xp(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Mu.enqueueReplaceState(n,n.state,null)}function Za(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=R({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Wp(t){dl(t)}function qp(t){console.error(t)}function Yp(t){dl(t)}function pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function jp(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function yu(t,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(t,n)},a}function Zp(t){return t=ha(t),t.tag=3,t}function Kp(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){jp(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){jp(n,a,o),typeof c!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function y0(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Js(n,a,c,!0),a=Jn.current,a!==null){switch(a.tag){case 13:return xi===null?af():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Jc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),sf(t,o,c)),!1;case 22:return a.flags|=65536,o===Jc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),sf(t,o,c)),!1}throw Error(r(435,a.tag))}return sf(t,o,c),af(),!1}if(Te)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Qc&&(t=Error(r(422),{cause:o}),Gs(Zn(t,a)))):(o!==Qc&&(n=Error(r(423),{cause:o}),Gs(Zn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=Zn(o,a),c=yu(t.stateNode,o,c),Bu(t,c),We!==4&&(We=2)),!1;var f=Error(r(520),{cause:o});if(f=Zn(f,a),oo===null?oo=[f]:oo.push(f),We!==4&&(We=2),n===null)return!0;o=Zn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=yu(a.stateNode,o,t),Bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sa===null||!Sa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Zp(c),Kp(c,t,a,o),Bu(a,c),!1}a=a.return}while(a!==null);return!1}var Qp=Error(r(461)),un=!1;function _n(t,n,a,o){n.child=t===null?np(n,null,a,o):Xa(n,t.child,a,o)}function Jp(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return Qa(n),o=ru(t,n,a,S,f,c),T=su(),t!==null&&!un?(ou(t,n,c),Ni(t,n,c)):(Te&&T&&Zc(n),n.flags|=1,_n(t,n,o,c),n.child)}function $p(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!Wu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,tm(t,n,f,o,c)):(t=Sl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Uu(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Bs,a(S,o)&&t.ref===n.ref)return Ni(t,n,c)}return n.flags|=1,t=_a(f,o),t.ref=n.ref,t.return=n,n.child=t}function tm(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(Bs(f,o)&&t.ref===n.ref)if(un=!1,n.pendingProps=o=f,Uu(t,c))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,Ni(t,n,c)}return Eu(t,n,a,o,c)}function em(t,n,a){var o=n.pendingProps,c=o.children,f=(n.stateNode._pendingVisibility&2)!==0,S=t!==null?t.memoizedState:null;if(Qs(t,n),o.mode==="hidden"||f){if((n.flags&128)!==0){if(o=S!==null?S.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return nm(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,S!==null?S.cachePool:null),S!==null?ip(n,S):$c(),ap(n);else return n.lanes=n.childLanes=536870912,nm(t,n,S!==null?S.baseLanes|a:a,a)}else S!==null?(al(n,S.cachePool),ip(n,S),oa(),n.memoizedState=null):(t!==null&&al(n,null),$c(),oa());return _n(t,n,c,a),n.child}function nm(t,n,a,o){var c=iu();return c=c===null?null:{parent:sn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&al(n,null),$c(),ap(n),t!==null&&Js(t,n,o,!0),null}function Qs(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function Eu(t,n,a,o,c){return Qa(n),a=ru(t,n,a,o,void 0,c),o=su(),t!==null&&!un?(ou(t,n,c),Ni(t,n,c)):(Te&&o&&Zc(n),n.flags|=1,_n(t,n,a,c),n.child)}function im(t,n,a,o,c,f){return Qa(n),n.updateQueue=null,a=cp(n,o,a,c),lp(t),o=su(),t!==null&&!un?(ou(t,n,f),Ni(t,n,f)):(Te&&o&&Zc(n),n.flags|=1,_n(t,n,a,f),n.child)}function am(t,n,a,o,c){if(Qa(n),n.stateNode===null){var f=Ar,S=a.contextType;typeof S=="object"&&S!==null&&(f=xn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Mu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Pu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?xn(S):Ar,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(xu(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Mu.enqueueReplaceState(f,f.state,null),eo(n,o,f,c),to(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,N=Za(a,T);f.props=N;var V=f.context,lt=a.contextType;S=Ar,typeof lt=="object"&&lt!==null&&(S=xn(lt));var _t=a.getDerivedStateFromProps;lt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,lt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||V!==S)&&Xp(n,f,o,S),fa=!1;var et=n.memoizedState;f.state=et,eo(n,o,f,c),to(),V=n.memoizedState,T||et!==V||fa?(typeof _t=="function"&&(xu(n,a,_t,o),V=n.memoizedState),(N=fa||kp(n,a,N,o,et,V,S))?(lt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=V),f.props=o,f.state=V,f.context=S,o=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,zu(t,n),S=n.memoizedProps,lt=Za(a,S),f.props=lt,_t=n.pendingProps,et=f.context,V=a.contextType,N=Ar,typeof V=="object"&&V!==null&&(N=xn(V)),T=a.getDerivedStateFromProps,(V=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==_t||et!==N)&&Xp(n,f,o,N),fa=!1,et=n.memoizedState,f.state=et,eo(n,o,f,c),to();var ot=n.memoizedState;S!==_t||et!==ot||fa||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof T=="function"&&(xu(n,a,T,o),ot=n.memoizedState),(lt=fa||kp(n,a,lt,o,et,ot,N)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?(V||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ot,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ot,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=N,o=lt):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Qs(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Xa(n,t.child,null,c),n.child=Xa(n,null,a,c)):_n(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Ni(t,n,c),t}function rm(t,n,a,o){return Hs(),n.flags|=256,_n(t,n,a,o),n.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function bu(t){return{baseLanes:t,cachePool:op()}}function Au(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function sm(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Te){if(c?sa(n):oa(),Te){var T=gn,N;if(N=T){t:{for(N=T,T=Si;N.nodeType!==8;){if(!T){T=null;break t}if(N=fi(N.nextSibling),N===null){T=null;break t}}T=N}T!==null?(n.memoizedState={dehydrated:T,treeContext:Ga!==null?{id:wi,overflow:Di}:null,retryLane:536870912},N=ei(18,null,null,0),N.stateNode=T,N.return=n,n.child=N,Cn=n,gn=null,N=!0):N=!1}N||ka(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?n.lanes=16:n.lanes=536870912,null;Ui(n)}return T=o.children,o=o.fallback,c?(oa(),c=n.mode,T=Cu({mode:"hidden",children:T},c),o=$a(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,c=n.child,c.memoizedState=bu(a),c.childLanes=Au(t,S,a),n.memoizedState=Tu,o):(sa(n),Ru(n,T))}if(N=t.memoizedState,N!==null&&(T=N.dehydrated,T!==null)){if(f)n.flags&256?(sa(n),n.flags&=-257,n=wu(t,n,a)):n.memoizedState!==null?(oa(),n.child=t.child,n.flags|=128,n=null):(oa(),c=o.fallback,T=n.mode,o=Cu({mode:"visible",children:o.children},T),c=$a(c,T,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Xa(n,t.child,null,a),o=n.child,o.memoizedState=bu(a),o.childLanes=Au(t,S,a),n.memoizedState=Tu,n=c);else if(sa(n),T.data==="$!"){if(S=T.nextSibling&&T.nextSibling.dataset,S)var V=S.dgst;S=V,o=Error(r(419)),o.stack="",o.digest=S,Gs({value:o,source:null,stack:null}),n=wu(t,n,a)}else if(un||Js(t,n,a,!1),S=(a&t.childLanes)!==0,un||S){if(S=Be,S!==null){if(o=a&-a,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==N.retryLane)throw N.retryLane=o,ra(t,o),wn(S,t,o),Qp}T.data==="$?"||af(),n=wu(t,n,a)}else T.data==="$?"?(n.flags|=128,n.child=t.child,n=B0.bind(null,t),T._reactRetry=n,n=null):(t=N.treeContext,gn=fi(T.nextSibling),Cn=n,Te=!0,ci=null,Si=!1,t!==null&&(Kn[Qn++]=wi,Kn[Qn++]=Di,Kn[Qn++]=Ga,wi=t.id,Di=t.overflow,Ga=n),n=Ru(n,o.children),n.flags|=4096);return n}return c?(oa(),c=o.fallback,T=n.mode,N=t.child,V=N.sibling,o=_a(N,{mode:"hidden",children:o.children}),o.subtreeFlags=N.subtreeFlags&31457280,V!==null?c=_a(V,c):(c=$a(c,T,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,T=t.child.memoizedState,T===null?T=bu(a):(N=T.cachePool,N!==null?(V=sn._currentValue,N=N.parent!==V?{parent:V,pool:V}:N):N=op(),T={baseLanes:T.baseLanes|a,cachePool:N}),c.memoizedState=T,c.childLanes=Au(t,S,a),n.memoizedState=Tu,o):(sa(n),a=t.child,t=a.sibling,a=_a(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Ru(t,n){return n=Cu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Cu(t,n){return Lm(t,n,0,null)}function wu(t,n,a){return Xa(n,t.child,null,a),t=Ru(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function om(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Nu(t.return,n,a)}function Du(t,n,a,o,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function lm(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(_n(t,n,o.children,a),o=rn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&om(t,a,n);else if(t.tag===19)om(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Pt(rn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&il(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Du(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&il(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Du(n,!0,a,null,f);break;case"together":Du(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ni(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),va|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Js(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=_a(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=_a(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Uu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function E0(t,n,a){switch(n.tag){case 3:pn(n,n.stateNode.containerInfo),ua(n,sn,t.memoizedState.cache),Hs();break;case 27:case 5:fe(n);break;case 4:pn(n,n.stateNode.containerInfo);break;case 10:ua(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?sm(t,n,a):(sa(n),t=Ni(t,n,a),t!==null?t.sibling:null);sa(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Js(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return lm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Pt(rn,rn.current),o)break;return null;case 22:case 23:return n.lanes=0,em(t,n,a);case 24:ua(n,sn,t.memoizedState.cache)}return Ni(t,n,a)}function cm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Uu(t,a)&&(n.flags&128)===0)return un=!1,E0(t,n,a);un=(t.flags&131072)!==0}else un=!1,Te&&(n.flags&1048576)!==0&&Yd(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Wu(o)?(t=Za(o,t),n.tag=1,n=am(null,n,o,t,a)):(n.tag=0,n=Eu(null,n,o,t,a));else{if(o!=null){if(c=o.$$typeof,c===b){n.tag=11,n=Jp(null,n,o,t,a);break t}else if(c===_){n.tag=14,n=$p(null,n,o,t,a);break t}}throw n=K(o)||o,Error(r(306,n,""))}}return n;case 0:return Eu(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Za(o,n.pendingProps),am(t,n,o,c,a);case 3:t:{if(pn(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,o=c.element,zu(t,n),eo(n,f,null,a);var S=n.memoizedState;if(f=S.cache,ua(n,sn,f),f!==c.cache&&Ou(n,[sn],a,!0),to(),f=S.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=rm(t,n,f,a);break t}else if(f!==o){o=Zn(Error(r(424)),n),Gs(o),n=rm(t,n,f,a);break t}else for(gn=fi(n.stateNode.containerInfo.firstChild),Cn=n,Te=!0,ci=null,Si=!0,a=np(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),f===o){n=Ni(t,n,a);break t}_n(t,n,f,a)}n=n.child}return n;case 26:return Qs(t,n),t===null?(a=hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,t=n.pendingProps,o=Ul(ae.current).createElement(a),o[en]=n,o[nn]=t,vn(o,a,t),Q(o),n.stateNode=o):n.memoizedState=hg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return fe(n),t===null&&Te&&(o=n.stateNode=cg(n.type,n.pendingProps,ae.current),Cn=n,Si=!0,gn=fi(o.firstChild)),o=n.pendingProps.children,t!==null||Te?_n(t,n,o,a):n.child=Xa(n,null,o,a),Qs(t,n),n.child;case 5:return t===null&&Te&&((c=o=gn)&&(o=$0(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,Cn=n,gn=fi(o.firstChild),Si=!1,c=!0):c=!1),c||ka(n)),fe(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,o=f.children,vf(c,f)?o=null:S!==null&&vf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=ru(t,n,g0,null,null,a),_o._currentValue=c),Qs(t,n),_n(t,n,o,a),n.child;case 6:return t===null&&Te&&((t=a=gn)&&(a=tS(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Cn=n,gn=null,t=!0):t=!1),t||ka(n)),null;case 13:return sm(t,n,a);case 4:return pn(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Xa(n,null,o,a):_n(t,n,o,a),n.child;case 11:return Jp(t,n,n.type,n.pendingProps,a);case 7:return _n(t,n,n.pendingProps,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ua(n,n.type,o.value),_n(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,Qa(n),c=xn(c),o=o(c),n.flags|=1,_n(t,n,o,a),n.child;case 14:return $p(t,n,n.type,n.pendingProps,a);case 15:return tm(t,n,n.type,n.pendingProps,a);case 19:return lm(t,n,a);case 22:return em(t,n,a);case 24:return Qa(n),o=xn(sn),t===null?(c=iu(),c===null&&(c=Be,f=eu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Pu(n),ua(n,sn,c)):((t.lanes&a)!==0&&(zu(t,n),eo(n,null,null,a),to()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ua(n,sn,o)):(o=f.cache,ua(n,sn,o),o!==c.cache&&Ou(n,[sn],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Lu=Rt(null),Ka=null,Oi=null;function ua(t,n,a){Pt(Lu,n._currentValue),n._currentValue=a}function Pi(t){t._currentValue=Lu.current,Qt(Lu)}function Nu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var N=0;N<n.length;N++)if(T.context===n[N]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Nu(f.return,a,t),o||(S=null);break t}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Nu(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Js(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;Hn(c.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(c===z.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(_o):t=[_o])}c=c.return}t!==null&&Ou(n,t,a,o),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!Hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Qa(t){Ka=t,Oi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function xn(t){return um(Ka,t)}function gl(t,n){return Ka===null&&Qa(t),um(t,n)}function um(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Oi===null){if(t===null)throw Error(r(308));Oi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Oi=Oi.next=n;return a}var fa=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ve&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Ko(t),Wd(t,null,a),n}return Zo(t,o,n,a),Ko(t)}function $s(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,vi(t,a)}}function Bu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Fu=!1;function to(){if(Fu){var t=Lr;if(t!==null)throw t}}function eo(t,n,a,o){Fu=!1;var c=t.updateQueue;fa=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var N=T,V=N.next;N.next=null,S===null?f=V:S.next=V,S=N;var lt=t.alternate;lt!==null&&(lt=lt.updateQueue,T=lt.lastBaseUpdate,T!==S&&(T===null?lt.firstBaseUpdate=V:T.next=V,lt.lastBaseUpdate=N))}if(f!==null){var _t=c.baseState;S=0,lt=V=N=null,T=f;do{var et=T.lane&-536870913,ot=et!==T.lane;if(ot?(xe&et)===et:(o&et)===et){et!==0&&et===Ur&&(Fu=!0),lt!==null&&(lt=lt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Vt=t,ie=T;et=n;var qe=a;switch(ie.tag){case 1:if(Vt=ie.payload,typeof Vt=="function"){_t=Vt.call(qe,_t,et);break t}_t=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ie.payload,et=typeof Vt=="function"?Vt.call(qe,_t,et):Vt,et==null)break t;_t=R({},_t,et);break t;case 2:fa=!0}}et=T.callback,et!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[et]:ot.push(et))}else ot={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},lt===null?(V=lt=ot,N=_t):lt=lt.next=ot,S|=et;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);lt===null&&(N=_t),c.baseState=N,c.firstBaseUpdate=V,c.lastBaseUpdate=lt,f===null&&(c.shared.lanes=0),va|=S,t.lanes=S,t.memoizedState=_t}}function fm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function hm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)fm(a[t],n)}function no(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==c)}}catch(T){Pe(n,n.return,T)}}function pa(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var N=a;try{T()}catch(V){Pe(c,N,V)}}}o=o.next}while(o!==f)}}catch(V){Pe(n,n.return,V)}}function dm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{hm(n,a)}catch(o){Pe(t,t.return,o)}}}function pm(t,n,a){a.props=Za(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Pe(t,n,o)}}function Ja(t,n){try{var a=t.ref;if(a!==null){var o=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=o;break;default:c=o}typeof a=="function"?t.refCleanup=a(c):a.current=c}}catch(f){Pe(t,n,f)}}function Gn(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Pe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(t,n,c)}else a.current=null}function mm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Pe(t,t.return,c)}}function gm(t,n,a){try{var o=t.stateNode;j0(o,t.type,a,n),o[nn]=n}catch(c){Pe(t,t.return,c)}}function _m(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Iu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||_m(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hu(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Dl));else if(o!==4&&o!==27&&(t=t.child,t!==null))for(Hu(t,n,a),t=t.sibling;t!==null;)Hu(t,n,a),t=t.sibling}function _l(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&o!==27&&(t=t.child,t!==null))for(_l(t,n,a),t=t.sibling;t!==null;)_l(t,n,a),t=t.sibling}var zi=!1,Xe=!1,Gu=!1,vm=typeof WeakSet=="function"?WeakSet:Set,fn=null,Sm=!1;function T0(t,n){if(t=t.containerInfo,gf=Bl,t=zd(t),kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,N=-1,V=0,lt=0,_t=t,et=null;e:for(;;){for(var ot;_t!==a||c!==0&&_t.nodeType!==3||(T=S+c),_t!==f||o!==0&&_t.nodeType!==3||(N=S+o),_t.nodeType===3&&(S+=_t.nodeValue.length),(ot=_t.firstChild)!==null;)et=_t,_t=ot;for(;;){if(_t===t)break e;if(et===a&&++V===c&&(T=S),et===f&&++lt===o&&(N=S),(ot=_t.nextSibling)!==null)break;_t=et,et=_t.parentNode}_t=ot}a=T===-1||N===-1?null:{start:T,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},Bl=!1,fn=n;fn!==null;)if(n=fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,fn=t;else for(;fn!==null;){switch(n=fn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Vt=Za(a.type,c,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(Vt,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ie){Pe(a,a.return,ie)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Mf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Mf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,fn=t;break}fn=n.return}return Vt=Sm,Sm=!1,Vt}function xm(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Fi(t,a),o&4&&no(5,a);break;case 1:if(Fi(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(T){Pe(a,a.return,T)}else{var c=Za(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(T){Pe(a,a.return,T)}}o&64&&dm(a),o&512&&Ja(a,a.return);break;case 3:if(Fi(t,a),o&64&&(o=a.updateQueue,o!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{hm(o,t)}catch(T){Pe(a,a.return,T)}}break;case 26:Fi(t,a),o&512&&Ja(a,a.return);break;case 27:case 5:Fi(t,a),n===null&&o&4&&mm(a),o&512&&Ja(a,a.return);break;case 12:Fi(t,a);break;case 13:Fi(t,a),o&4&&Em(t,a);break;case 22:if(c=a.memoizedState!==null||zi,!c){n=n!==null&&n.memoizedState!==null||Xe;var f=zi,S=Xe;zi=c,(Xe=n)&&!S?ma(t,a,(a.subtreeFlags&8772)!==0):Fi(t,a),zi=f,Xe=S}o&512&&(a.memoizedProps.mode==="manual"?Ja(a,a.return):Gn(a,a.return));break;default:Fi(t,a)}}function Mm(t){var n=t.alternate;n!==null&&(t.alternate=null,Mm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ws(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Vn=!1;function Bi(t,n,a){for(a=a.child;a!==null;)ym(t,n,a),a=a.sibling}function ym(t,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(qt,a)}catch{}switch(a.tag){case 26:Xe||Gn(a,n),Bi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||Gn(a,n);var o=Je,c=Vn;for(Je=a.stateNode,Bi(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);ws(a),Je=o,Vn=c;break;case 5:Xe||Gn(a,n);case 6:c=Je;var f=Vn;if(Je=null,Bi(t,n,a),Je=c,Vn=f,Je!==null)if(Vn)try{t=Je,o=a.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)}catch(S){Pe(a,n,S)}else try{Je.removeChild(a.stateNode)}catch(S){Pe(a,n,S)}break;case 18:Je!==null&&(Vn?(n=Je,a=a.stateNode,n.nodeType===8?xf(n.parentNode,a):n.nodeType===1&&xf(n,a),Mo(n)):xf(Je,a.stateNode));break;case 4:o=Je,c=Vn,Je=a.stateNode.containerInfo,Vn=!0,Bi(t,n,a),Je=o,Vn=c;break;case 0:case 11:case 14:case 15:Xe||pa(2,a,n),Xe||pa(4,a,n),Bi(t,n,a);break;case 1:Xe||(Gn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&pm(a,n,o)),Bi(t,n,a);break;case 21:Bi(t,n,a);break;case 22:Xe||Gn(a,n),Xe=(o=Xe)||a.memoizedState!==null,Bi(t,n,a),Xe=o;break;default:Bi(t,n,a)}}function Em(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Mo(t)}catch(a){Pe(n,n.return,a)}}function b0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new vm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new vm),n;default:throw Error(r(435,t.tag))}}function Vu(t,n){var a=b0(t);n.forEach(function(o){var c=F0.bind(null,t,o);a.has(o)||(a.add(o),o.then(c,c))})}function $n(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:case 5:Je=T.stateNode,Vn=!1;break t;case 3:Je=T.stateNode.containerInfo,Vn=!0;break t;case 4:Je=T.stateNode.containerInfo,Vn=!0;break t}T=T.return}if(Je===null)throw Error(r(160));ym(f,S,c),Je=null,Vn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Tm(n,t),n=n.sibling}var ui=null;function Tm(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$n(n,t),ti(t),o&4&&(pa(3,t,t.return),no(3,t),pa(5,t,t.return));break;case 1:$n(n,t),ti(t),o&512&&(Xe||a===null||Gn(a,a.return)),o&64&&zi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=ui;if($n(n,t),ti(t),o&512&&(Xe||a===null||Gn(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){t:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ba]||f[en]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),vn(f,o,a),f[en]=t,Q(f),o=f;break t;case"link":var S=mg("link","href",c).get(o+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=c.createElement(o),vn(f,o,a),c.head.appendChild(f);break;case"meta":if(S=mg("meta","content",c).get(o+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=c.createElement(o),vn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[en]=t,Q(f),o=f}t.stateNode=o}else gg(c,t.type,t.stateNode);else t.stateNode=pg(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?gg(c,t.type,t.stateNode):pg(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&gm(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&t.alternate===null){c=t.stateNode,f=t.memoizedProps;try{for(var N=c.firstChild;N;){var V=N.nextSibling,lt=N.nodeName;N[Ba]||lt==="HEAD"||lt==="BODY"||lt==="SCRIPT"||lt==="STYLE"||lt==="LINK"&&N.rel.toLowerCase()==="stylesheet"||c.removeChild(N),N=V}for(var _t=t.type,et=c.attributes;et.length;)c.removeAttributeNode(et[0]);vn(c,_t,f),c[en]=t,c[nn]=f}catch(Vt){Pe(t,t.return,Vt)}}case 5:if($n(n,t),ti(t),o&512&&(Xe||a===null||Gn(a,a.return)),t.flags&32){c=t.stateNode;try{Nn(c,"")}catch(Vt){Pe(t,t.return,Vt)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,gm(t,c,a!==null?a.memoizedProps:c)),o&1024&&(Gu=!0);break;case 6:if($n(n,t),ti(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Vt){Pe(t,t.return,Vt)}}break;case 3:if(Ol=null,c=ui,ui=Ll(n.containerInfo),$n(n,t),ui=c,ti(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Mo(n.containerInfo)}catch(Vt){Pe(t,t.return,Vt)}Gu&&(Gu=!1,bm(t));break;case 4:o=ui,ui=Ll(t.stateNode.containerInfo),$n(n,t),ti(t),ui=o;break;case 12:$n(n,t),ti(t);break;case 13:$n(n,t),ti(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qu=ut()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vu(t,o)));break;case 22:if(o&512&&(Xe||a===null||Gn(a,a.return)),N=t.memoizedState!==null,V=a!==null&&a.memoizedState!==null,lt=zi,_t=Xe,zi=lt||N,Xe=_t||V,$n(n,t),Xe=_t,zi=lt,ti(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=N?n._visibility&-2:n._visibility|1,N&&(n=zi||Xe,a===null||V||n||zr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){V=a=n;try{if(c=V.stateNode,N)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{S=V.stateNode,T=V.memoizedProps.style;var ot=T!=null&&T.hasOwnProperty("display")?T.display:null;S.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Vt){Pe(V,V.return,Vt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=N?"":V.memoizedProps}catch(Vt){Pe(V,V.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Vu(t,a))));break;case 19:$n(n,t),ti(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vu(t,o)));break;case 21:break;default:$n(n,t),ti(t)}}function ti(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(_m(a)){var o=a;break t}a=a.return}throw Error(r(160))}switch(o.tag){case 27:var c=o.stateNode,f=Iu(t);_l(t,f,c);break;case 5:var S=o.stateNode;o.flags&32&&(Nn(S,""),o.flags&=-33);var T=Iu(t);_l(t,T,S);break;case 3:case 4:var N=o.stateNode.containerInfo,V=Iu(t);Hu(t,V,N);break;default:throw Error(r(161))}}}catch(lt){Pe(t,t.return,lt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function bm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;bm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Fi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)xm(t,n.alternate,n),n=n.sibling}function zr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:pa(4,n,n.return),zr(n);break;case 1:Gn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&pm(n,n.return,a),zr(n);break;case 26:case 27:case 5:Gn(n,n.return),zr(n);break;case 22:Gn(n,n.return),n.memoizedState===null&&zr(n);break;default:zr(n)}t=t.sibling}}function ma(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ma(c,f,a),no(4,f);break;case 1:if(ma(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(V){Pe(o,o.return,V)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)fm(N[c],T)}catch(V){Pe(o,o.return,V)}}a&&S&64&&dm(f),Ja(f,f.return);break;case 26:case 27:case 5:ma(c,f,a),a&&o===null&&S&4&&mm(f),Ja(f,f.return);break;case 12:ma(c,f,a);break;case 13:ma(c,f,a),a&&S&4&&Em(c,f);break;case 22:f.memoizedState===null&&ma(c,f,a),Ja(f,f.return);break;default:ma(c,f,a)}n=n.sibling}}function ku(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qs(a))}function Xu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t))}function ga(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Am(t,n,a,o),n=n.sibling}function Am(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:ga(t,n,a,o),c&2048&&no(9,n);break;case 3:ga(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t)));break;case 12:if(c&2048){ga(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(N){Pe(n,n.return,N)}}else ga(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?ga(t,n,a,o):io(t,n):f._visibility&4?ga(t,n,a,o):(f._visibility|=4,Br(t,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&ku(n.alternate,n);break;case 24:ga(t,n,a,o),c&2048&&Xu(n.alternate,n);break;default:ga(t,n,a,o)}}function Br(t,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,T=a,N=o,V=S.flags;switch(S.tag){case 0:case 11:case 15:Br(f,S,T,N,c),no(8,S);break;case 23:break;case 22:var lt=S.stateNode;S.memoizedState!==null?lt._visibility&4?Br(f,S,T,N,c):io(f,S):(lt._visibility|=4,Br(f,S,T,N,c)),c&&V&2048&&ku(S.alternate,S);break;case 24:Br(f,S,T,N,c),c&&V&2048&&Xu(S.alternate,S);break;default:Br(f,S,T,N,c)}n=n.sibling}}function io(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:io(a,o),c&2048&&ku(o.alternate,o);break;case 24:io(a,o),c&2048&&Xu(o.alternate,o);break;default:io(a,o)}n=n.sibling}}var ao=8192;function Fr(t){if(t.subtreeFlags&ao)for(t=t.child;t!==null;)Rm(t),t=t.sibling}function Rm(t){switch(t.tag){case 26:Fr(t),t.flags&ao&&t.memoizedState!==null&&dS(ui,t.memoizedState,t.memoizedProps);break;case 5:Fr(t);break;case 3:case 4:var n=ui;ui=Ll(t.stateNode.containerInfo),Fr(t),ui=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=ao,ao=16777216,Fr(t),ao=n):Fr(t));break;default:Fr(t)}}function Cm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ro(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];fn=o,Dm(o,t)}Cm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wm(t),t=t.sibling}function wm(t){switch(t.tag){case 0:case 11:case 15:ro(t),t.flags&2048&&pa(9,t,t.return);break;case 3:ro(t);break;case 12:ro(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,vl(t)):ro(t);break;default:ro(t)}}function vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];fn=o,Dm(o,t)}Cm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:pa(8,n,n.return),vl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,vl(n));break;default:vl(n)}t=t.sibling}}function Dm(t,n){for(;fn!==null;){var a=fn;switch(a.tag){case 0:case 11:case 15:pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:qs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,fn=o;else t:for(a=t;fn!==null;){o=fn;var c=o.sibling,f=o.return;if(Mm(o),o===a){fn=null;break t}if(c!==null){c.return=f,fn=c;break t}fn=f}}}function A0(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,n,a,o){return new A0(t,n,a,o)}function Wu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _a(t,n){var a=t.alternate;return a===null?(a=ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Um(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Sl(t,n,a,o,c,f){var S=0;if(o=t,typeof t=="function")Wu(t)&&(S=1);else if(typeof t=="string")S=fS(t,a,Me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case m:return $a(a.children,c,f,n);case p:S=8,c|=24;break;case g:return t=ei(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case C:return t=ei(13,a,n,c),t.elementType=C,t.lanes=f,t;case M:return t=ei(19,a,n,c),t.elementType=M,t.lanes=f,t;case O:return Lm(a,c,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case y:S=10;break t;case v:S=9;break t;case b:S=11;break t;case _:S=14;break t;case P:S=16,o=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ei(S,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function $a(t,n,a,o){return t=ei(7,t,o,n),t.lanes=a,t}function Lm(t,n,a,o){t=ei(22,t,o,n),t.elementType=O,t.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if((c._pendingVisibility&2)===0){var S=ra(f,2);S!==null&&(c._pendingVisibility|=2,wn(S,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if((c._pendingVisibility&2)!==0){var S=ra(f,2);S!==null&&(c._pendingVisibility&=-3,wn(S,f,2))}}};return t.stateNode=c,t}function qu(t,n,a){return t=ei(6,t,null,n),t.lanes=a,t}function Yu(t,n,a){return n=ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Ii(t){t.flags|=4}function Nm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!_g(n)){if(n=Jn.current,n!==null&&((xe&4194176)===xe?xi!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==xi))throw ks=Jc,Kd;t.flags|=8192}}function xl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ye():536870912,t.lanes|=n,Hr|=n)}function so(t,n){if(!Te)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Ge(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&31457280,o|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function R0(t,n,a){var o=n.pendingProps;switch(Kc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(n),null;case 1:return Ge(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Pi(sn),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Is(n)?Ii(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ci!==null&&(ef(ci),ci=null))),Ge(n),null;case 26:return a=n.memoizedState,t===null?(Ii(n),a!==null?(Ge(n),Nm(n,a)):(Ge(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Ii(n),Ge(n),Nm(n,a)):(Ge(n),n.flags&=-16777217):(t.memoizedProps!==o&&Ii(n),Ge(n),n.flags&=-16777217),null;case 27:kt(n),a=ae.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ii(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ge(n),null}t=Me.current,Is(n)?jd(n):(t=cg(c,o,a),n.stateNode=t,Ii(n))}return Ge(n),null;case 5:if(kt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ii(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ge(n),null}if(t=Me.current,Is(n))jd(n);else{switch(c=Ul(ae.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}t[en]=n,t[nn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(vn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ii(n)}}return Ge(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ii(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,Is(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Cn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[en]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||ig(t.nodeValue,a)),t||ka(n)}else t=Ul(t).createTextNode(o),t[en]=n,n.stateNode=t}return Ge(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Is(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[en]=n}else Hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ge(n),c=!1}else ci!==null&&(ef(ci),ci=null),c=!0;if(!c)return n.flags&256?(Ui(n),n):(Ui(n),null)}if(Ui(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),xl(n,n.updateQueue),Ge(n),null;case 4:return se(),t===null&&df(n.stateNode.containerInfo),Ge(n),null;case 10:return Pi(n.type),Ge(n),null;case 19:if(Qt(rn),c=n.memoizedState,c===null)return Ge(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)so(c,!1);else{if(We!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=il(t),f!==null){for(n.flags|=128,so(c,!1),t=f.updateQueue,n.updateQueue=t,xl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Um(a,t),a=a.sibling;return Pt(rn,rn.current&1|2),n.child}t=t.sibling}c.tail!==null&&ut()>Ml&&(n.flags|=128,o=!0,so(c,!1),n.lanes=4194304)}else{if(!o)if(t=il(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,xl(n,t),so(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Te)return Ge(n),null}else 2*ut()-c.renderingStartTime>Ml&&a!==536870912&&(n.flags|=128,o=!0,so(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ut(),n.sibling=null,t=rn.current,Pt(rn,o?t&1|2:t&1),n):(Ge(n),null);case 22:case 23:return Ui(n),tu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ge(n),n.subtreeFlags&6&&(n.flags|=8192)):Ge(n),a=n.updateQueue,a!==null&&xl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Qt(Wa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Pi(sn),Ge(n),null;case 25:return null}throw Error(r(156,n.tag))}function C0(t,n){switch(Kc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Pi(sn),se(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return kt(n),null;case 13:if(Ui(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Hs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Qt(rn),null;case 4:return se(),null;case 10:return Pi(n.type),null;case 22:case 23:return Ui(n),tu(),t!==null&&Qt(Wa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Pi(sn),null;case 25:return null;default:return null}}function Om(t,n){switch(Kc(n),n.tag){case 3:Pi(sn),se();break;case 26:case 27:case 5:kt(n);break;case 4:se();break;case 13:Ui(n);break;case 19:Qt(rn);break;case 10:Pi(n.type);break;case 22:case 23:Ui(n),tu(),t!==null&&Qt(Wa);break;case 24:Pi(sn)}}var w0={getCacheForType:function(t){var n=xn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},D0=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Be=null,de=null,xe=0,Fe=0,kn=null,Hi=!1,Ir=!1,ju=!1,Gi=0,We=0,va=0,tr=0,Zu=0,ni=0,Hr=0,oo=null,yi=null,Ku=!1,Qu=0,Ml=1/0,yl=null,Sa=null,El=!1,er=null,lo=0,Ju=0,$u=null,co=0,tf=null;function Xn(){if((Ve&2)!==0&&xe!==0)return xe&-xe;if(w.T!==null){var t=Ur;return t!==0?t:cf()}return Cs()}function Pm(){ni===0&&(ni=(xe&536870912)===0||Te?tn():536870912);var t=Jn.current;return t!==null&&(t.flags|=32),ni}function wn(t,n,a){(t===Be&&Fe===2||t.cancelPendingCommit!==null)&&(Gr(t,0),Vi(t,xe,ni,!1)),bn(t,a),((Ve&2)===0||t!==Be)&&(t===Be&&((Ve&2)===0&&(tr|=a),We===4&&Vi(t,xe,ni,!1)),Ei(t))}function zm(t,n,a){if((Ve&6)!==0)throw Error(r(327));var o=!a&&(n&60)===0&&(n&t.expiredLanes)===0||$t(t,n),c=o?N0(t,n):rf(t,n,!0),f=o;do{if(c===0){Ir&&!o&&Vi(t,n,0,!1);break}else if(c===6)Vi(t,n,0,!Hi);else{if(a=t.current.alternate,f&&!U0(a)){c=rf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=t;c=oo;var N=T.current.memoizedState.isDehydrated;if(N&&(Gr(T,S).flags|=256),S=rf(T,S,!1),S!==2){if(ju&&!N){T.errorRecoveryDisabledLanes|=f,tr|=f,c=4;break t}f=yi,yi=c,f!==null&&ef(f)}c=S}if(f=!1,c!==2)continue}}if(c===1){Gr(t,0),Vi(t,n,0,!0);break}t:{switch(o=t,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Vi(o,n,ni,!Hi);break t}break;case 2:yi=null;break;case 3:case 5:break;default:throw Error(r(329))}if(o.finishedWork=a,o.finishedLanes=n,(n&62914560)===n&&(f=Qu+300-ut(),10<f)){if(Vi(o,n,ni,!Hi),Dt(o,0)!==0)break t;o.timeoutHandle=sg(Bm.bind(null,o,a,yi,yl,Ku,n,ni,tr,Hr,Hi,2,-0,0),f);break t}Bm(o,a,yi,yl,Ku,n,ni,tr,Hr,Hi,0,-0,0)}}break}while(!0);Ei(t)}function ef(t){yi===null?yi=t:yi.push.apply(yi,t)}function Bm(t,n,a,o,c,f,S,T,N,V,lt,_t,et){var ot=n.subtreeFlags;if((ot&8192||(ot&16785408)===16785408)&&(go={stylesheets:null,count:0,unsuspend:hS},Rm(n),n=pS(),n!==null)){t.cancelPendingCommit=n(Xm.bind(null,t,a,o,c,S,T,N,1,_t,et)),Vi(t,f,S,!V);return}Xm(t,a,o,c,S,T,N,lt,_t,et)}function U0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Hn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Vi(t,n,a,o){n&=~Zu,n&=~tr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-jt(c),S=1<<f;o[f]=-1,c&=~S}a!==0&&Rs(t,a,n)}function Tl(){return(Ve&6)===0?(uo(0),!1):!0}function nf(){if(de!==null){if(Fe===0)var t=de.return;else t=de,Oi=Ka=null,lu(t),wr=null,Xs=0,t=de;for(;t!==null;)Om(t.alternate,t),t=t.return;de=null}}function Gr(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,K0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nf(),Be=t,de=a=_a(t.current,null),xe=n,Fe=0,kn=null,Hi=!1,Ir=$t(t,n),ju=!1,Hr=ni=Zu=tr=va=We=0,yi=oo=null,Ku=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-jt(o),f=1<<c;n|=t[c],o&=~f}return Gi=n,jo(),a}function Fm(t,n){ue=null,w.H=Mi,n===Vs?(n=$d(),Fe=3):n===Kd?(n=$d(),Fe=4):Fe=n===Qp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,de===null&&(We=1,pl(t,Zn(n,t.current)))}function Im(){var t=w.H;return w.H=Mi,t===null?Mi:t}function Hm(){var t=w.A;return w.A=w0,t}function af(){We=4,Hi||(xe&4194176)!==xe&&Jn.current!==null||(Ir=!0),(va&134217727)===0&&(tr&134217727)===0||Be===null||Vi(Be,xe,ni,!1)}function rf(t,n,a){var o=Ve;Ve|=2;var c=Im(),f=Hm();(Be!==t||xe!==n)&&(yl=null,Gr(t,n)),n=!1;var S=We;t:do try{if(Fe!==0&&de!==null){var T=de,N=kn;switch(Fe){case 8:nf(),S=6;break t;case 3:case 2:case 6:Jn.current===null&&(n=!0);var V=Fe;if(Fe=0,kn=null,Vr(t,T,N,V),a&&Ir){S=0;break t}break;default:V=Fe,Fe=0,kn=null,Vr(t,T,N,V)}}L0(),S=We;break}catch(lt){Fm(t,lt)}while(!0);return n&&t.shellSuspendCounter++,Oi=Ka=null,Ve=o,w.H=c,w.A=f,de===null&&(Be=null,xe=0,jo()),S}function L0(){for(;de!==null;)Gm(de)}function N0(t,n){var a=Ve;Ve|=2;var o=Im(),c=Hm();Be!==t||xe!==n?(yl=null,Ml=ut()+500,Gr(t,n)):Ir=$t(t,n);t:do try{if(Fe!==0&&de!==null){n=de;var f=kn;e:switch(Fe){case 1:Fe=0,kn=null,Vr(t,n,f,1);break;case 2:if(Qd(f)){Fe=0,kn=null,Vm(n);break}n=function(){Fe===2&&Be===t&&(Fe=7),Ei(t)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Qd(f)?(Fe=0,kn=null,Vm(n)):(Fe=0,kn=null,Vr(t,n,f,7));break;case 5:var S=null;switch(de.tag){case 26:S=de.memoizedState;case 5:case 27:var T=de;if(!S||_g(S)){Fe=0,kn=null;var N=T.sibling;if(N!==null)de=N;else{var V=T.return;V!==null?(de=V,bl(V)):de=null}break e}}Fe=0,kn=null,Vr(t,n,f,5);break;case 6:Fe=0,kn=null,Vr(t,n,f,6);break;case 8:nf(),We=6;break t;default:throw Error(r(462))}}O0();break}catch(lt){Fm(t,lt)}while(!0);return Oi=Ka=null,w.H=o,w.A=c,Ve=a,de!==null?0:(Be=null,xe=0,jo(),We)}function O0(){for(;de!==null&&!E();)Gm(de)}function Gm(t){var n=cm(t.alternate,t,Gi);t.memoizedProps=t.pendingProps,n===null?bl(t):de=n}function Vm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=im(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=im(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:lu(n);default:Om(a,n),n=de=Um(n,Gi),n=cm(a,n,Gi)}t.memoizedProps=t.pendingProps,n===null?bl(t):de=n}function Vr(t,n,a,o){Oi=Ka=null,lu(n),wr=null,Xs=0;var c=n.return;try{if(y0(t,c,n,a,xe)){We=1,pl(t,Zn(a,t.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;We=1,pl(t,Zn(a,t.current)),de=null;return}n.flags&32768?(Te||o===1?t=!0:Ir||(xe&536870912)!==0?t=!1:(Hi=t=!0,(o===2||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),km(n,t)):bl(n)}function bl(t){var n=t;do{if((n.flags&32768)!==0){km(n,Hi);return}t=n.return;var a=R0(n.alternate,n,Gi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);We===0&&(We=5)}function km(t,n){do{var a=C0(t.alternate,t);if(a!==null){a.flags&=32767,de=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=a}while(t!==null);We=6,de=null}function Xm(t,n,a,o,c,f,S,T,N,V){var lt=w.T,_t=q.p;try{q.p=2,w.T=null,P0(t,n,a,o,_t,c,f,S,T,N,V)}finally{w.T=lt,q.p=_t}}function P0(t,n,a,o,c,f,S,T){do kr();while(er!==null);if((Ve&6)!==0)throw Error(r(327));var N=t.finishedWork;if(o=t.finishedLanes,N===null)return null;if(t.finishedWork=null,t.finishedLanes=0,N===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var V=N.lanes|N.childLanes;if(V|=Yc,Fo(t,o,V,f,S,T),t===Be&&(de=Be=null,xe=0),(N.subtreeFlags&10256)===0&&(N.flags&10256)===0||El||(El=!0,Ju=V,$u=a,I0(wt,function(){return kr(),null})),a=(N.flags&15990)!==0,(N.subtreeFlags&15990)!==0||a?(a=w.T,w.T=null,f=q.p,q.p=2,S=Ve,Ve|=4,T0(t,N),Tm(N,t),r0(_f,t.containerInfo),Bl=!!gf,_f=gf=null,t.current=N,xm(t,N.alternate,N),tt(),Ve=S,q.p=f,w.T=a):t.current=N,El?(El=!1,er=t,lo=o):Wm(t,V),V=t.pendingLanes,V===0&&(Sa=null),Ft(N.stateNode),Ei(t),n!==null)for(c=t.onRecoverableError,N=0;N<n.length;N++)V=n[N],c(V.value,{componentStack:V.stack});return(lo&3)!==0&&kr(),V=t.pendingLanes,(o&4194218)!==0&&(V&42)!==0?t===tf?co++:(co=0,tf=t):co=0,uo(0),null}function Wm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qs(n)))}function kr(){if(er!==null){var t=er,n=Ju;Ju=0;var a=_r(lo),o=w.T,c=q.p;try{if(q.p=32>a?32:a,w.T=null,er===null)var f=!1;else{a=$u,$u=null;var S=er,T=lo;if(er=null,lo=0,(Ve&6)!==0)throw Error(r(331));var N=Ve;if(Ve|=4,wm(S.current),Am(S,S.current,T,a),Ve=N,uo(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(qt,S)}catch{}f=!0}return f}finally{q.p=c,w.T=o,Wm(t,n)}}return!1}function qm(t,n,a){n=Zn(a,n),n=yu(t.stateNode,n,2),t=da(t,n,2),t!==null&&(bn(t,2),Ei(t))}function Pe(t,n,a){if(t.tag===3)qm(t,t,a);else for(;n!==null;){if(n.tag===3){qm(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Sa===null||!Sa.has(o))){t=Zn(a,t),a=Zp(2),o=da(n,a,2),o!==null&&(Kp(a,o,n,t),bn(o,2),Ei(o));break}}n=n.return}}function sf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new D0;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(ju=!0,c.add(a),t=z0.bind(null,t,n,a),n.then(t,t))}function z0(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Be===t&&(xe&a)===a&&(We===4||We===3&&(xe&62914560)===xe&&300>ut()-Qu?(Ve&2)===0&&Gr(t,0):Zu|=a,Hr===xe&&(Hr=0)),Ei(t)}function Ym(t,n){n===0&&(n=ye()),t=ra(t,n),t!==null&&(bn(t,n),Ei(t))}function B0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Ym(t,a)}function F0(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Ym(t,a)}function I0(t,n){return Xt(t,n)}var Al=null,Xr=null,of=!1,Rl=!1,lf=!1,nr=0;function Ei(t){t!==Xr&&t.next===null&&(Xr===null?Al=Xr=t:Xr=Xr.next=t),Rl=!0,of||(of=!0,G0(H0))}function uo(t,n){if(!lf&&Rl){lf=!0;do for(var a=!1,o=Al;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var S=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-jt(42|t)+1)-1,f&=c&~(S&~T),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,Km(o,f))}else f=xe,f=Dt(o,o===Be?f:0),(f&3)===0||$t(o,f)||(a=!0,Km(o,f));o=o.next}while(a);lf=!1}}function H0(){Rl=of=!1;var t=0;nr!==0&&(Z0()&&(t=nr),nr=0);for(var n=ut(),a=null,o=Al;o!==null;){var c=o.next,f=jm(o,n);f===0?(o.next=null,a===null?Al=c:a.next=c,c===null&&(Xr=a)):(a=o,(t!==0||(f&3)!==0)&&(Rl=!0)),o=c}uo(t)}function jm(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-jt(f),T=1<<S,N=c[S];N===-1?((T&a)===0||(T&o)!==0)&&(c[S]=He(T,n)):N<=n&&(t.expiredLanes|=T),f&=~T}if(n=Be,a=xe,a=Dt(t,t===n?a:0),o=t.callbackNode,a===0||t===n&&Fe===2||t.cancelPendingCommit!==null)return o!==null&&o!==null&&D(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||$t(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&D(o),_r(a)){case 2:case 8:a=Ht;break;case 32:a=wt;break;case 268435456:a=pe;break;default:a=wt}return o=Zm.bind(null,t),a=Xt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&D(o),t.callbackPriority=2,t.callbackNode=null,2}function Zm(t,n){var a=t.callbackNode;if(kr()&&t.callbackNode!==a)return null;var o=xe;return o=Dt(t,t===Be?o:0),o===0?null:(zm(t,o,n),jm(t,ut()),t.callbackNode!=null&&t.callbackNode===a?Zm.bind(null,t):null)}function Km(t,n){if(kr())return null;zm(t,n,!0)}function G0(t){Q0(function(){(Ve&6)!==0?Xt(ft,t):t()})}function cf(){return nr===0&&(nr=tn()),nr}function Qm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Go(""+t)}function Jm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function V0(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Qm((c[nn]||null).action),S=o.submitter;S&&(n=(n=S[nn]||null)?Qm(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new Wo("action","action",null,o,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(nr!==0){var N=S?Jm(c,S):new FormData(c);_u(a,{pending:!0,data:N,method:c.method,action:f},null,N)}}else typeof f=="function"&&(T.preventDefault(),N=S?Jm(c,S):new FormData(c),_u(a,{pending:!0,data:N,method:c.method,action:f},f,N))},currentTarget:c}]})}}for(var uf=0;uf<Xd.length;uf++){var ff=Xd[uf],k0=ff.toLowerCase(),X0=ff[0].toUpperCase()+ff.slice(1);li(k0,"on"+X0)}li(Id,"onAnimationEnd"),li(Hd,"onAnimationIteration"),li(Gd,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(o0,"onTransitionRun"),li(l0,"onTransitionStart"),li(c0,"onTransitionCancel"),li(Vd,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function $m(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],N=T.instance,V=T.currentTarget;if(T=T.listener,N!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=V;try{f(c)}catch(lt){dl(lt)}c.currentTarget=null,f=N}else for(S=0;S<o.length;S++){if(T=o[S],N=T.instance,V=T.currentTarget,T=T.listener,N!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=V;try{f(c)}catch(lt){dl(lt)}c.currentTarget=null,f=N}}}}function Se(t,n){var a=n[vr];a===void 0&&(a=n[vr]=new Set);var o=t+"__bubble";a.has(o)||(tg(n,t,2,!1),a.add(o))}function hf(t,n,a){var o=0;n&&(o|=4),tg(a,t,o,n)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function df(t){if(!t[Cl]){t[Cl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(W0.has(a)||hf(a,!1,t),hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Cl]||(n[Cl]=!0,hf("selectionchange",!1,n))}}function tg(t,n,a,o){switch(Eg(n)){case 2:var c=_S;break;case 8:c=vS;break;default:c=Af}a=c.bind(null,n,a,t),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function pf(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===c||T.nodeType===8&&T.parentNode===c)break;if(S===4)for(S=o.return;S!==null;){var N=S.tag;if((N===3||N===4)&&(N=S.stateNode.containerInfo,N===c||N.nodeType===8&&N.parentNode===c))return;S=S.return}for(;T!==null;){if(S=Ci(T),S===null)return;if(N=S.tag,N===5||N===6||N===26||N===27){o=f=S;continue t}T=T.parentNode}}o=o.return}md(function(){var V=f,lt=Lc(a),_t=[];t:{var et=kd.get(t);if(et!==void 0){var ot=Wo,Vt=t;switch(t){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":ot=Fv;break;case"focusin":Vt="focus",ot=Fc;break;case"focusout":Vt="blur",ot=Fc;break;case"beforeblur":case"afterblur":ot=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Gv;break;case Id:case Hd:case Gd:ot=wv;break;case Vd:ot=kv;break;case"scroll":case"scrollend":ot=Tv;break;case"wheel":ot=Wv;break;case"copy":case"cut":case"paste":ot=Uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=xd;break;case"toggle":case"beforetoggle":ot=Yv}var ie=(n&4)!==0,qe=!ie&&(t==="scroll"||t==="scrollend"),Z=ie?et!==null?et+"Capture":null:et;ie=[];for(var I=V,J;I!==null;){var pt=I;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||Z===null||(pt=Ds(I,Z),pt!=null&&ie.push(ho(I,pt,J))),qe)break;I=I.return}0<ie.length&&(et=new ot(et,Vt,null,a,lt),_t.push({event:et,listeners:ie}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",et&&a!==Uc&&(Vt=a.relatedTarget||a.fromElement)&&(Ci(Vt)||Vt[Ri]))break t;if((ot||et)&&(et=lt.window===lt?lt:(et=lt.ownerDocument)?et.defaultView||et.parentWindow:window,ot?(Vt=a.relatedTarget||a.toElement,ot=V,Vt=Vt?Ci(Vt):null,Vt!==null&&(qe=j(Vt),ie=Vt.tag,Vt!==qe||ie!==5&&ie!==27&&ie!==6)&&(Vt=null)):(ot=null,Vt=V),ot!==Vt)){if(ie=vd,pt="onMouseLeave",Z="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(ie=xd,pt="onPointerLeave",Z="onPointerEnter",I="pointer"),qe=ot==null?et:X(ot),J=Vt==null?et:X(Vt),et=new ie(pt,I+"leave",ot,a,lt),et.target=qe,et.relatedTarget=J,pt=null,Ci(lt)===V&&(ie=new ie(Z,I+"enter",Vt,a,lt),ie.target=J,ie.relatedTarget=qe,pt=ie),qe=pt,ot&&Vt)e:{for(ie=ot,Z=Vt,I=0,J=ie;J;J=Wr(J))I++;for(J=0,pt=Z;pt;pt=Wr(pt))J++;for(;0<I-J;)ie=Wr(ie),I--;for(;0<J-I;)Z=Wr(Z),J--;for(;I--;){if(ie===Z||Z!==null&&ie===Z.alternate)break e;ie=Wr(ie),Z=Wr(Z)}ie=null}else ie=null;ot!==null&&eg(_t,et,ot,ie,!1),Vt!==null&&qe!==null&&eg(_t,qe,Vt,ie,!0)}}t:{if(et=V?X(V):window,ot=et.nodeName&&et.nodeName.toLowerCase(),ot==="select"||ot==="input"&&et.type==="file")var It=Cd;else if(Ad(et))if(wd)It=i0;else{It=e0;var he=t0}else ot=et.nodeName,!ot||ot.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?V&&Dc(V.elementType)&&(It=Cd):It=n0;if(It&&(It=It(t,V))){Rd(_t,It,a,lt);break t}he&&he(t,et,V),t==="focusout"&&V&&et.type==="number"&&V.memoizedProps.value!=null&&Sn(et,"number",et.value)}switch(he=V?X(V):window,t){case"focusin":(Ad(he)||he.contentEditable==="true")&&(Er=he,Xc=V,Fs=null);break;case"focusout":Fs=Xc=Er=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,Bd(_t,a,lt);break;case"selectionchange":if(s0)break;case"keydown":case"keyup":Bd(_t,a,lt)}var Wt;if(Hc)t:{switch(t){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else yr?Td(t,a)&&(Jt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(Md&&a.locale!=="ko"&&(yr||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&yr&&(Wt=gd()):(aa=lt,Pc="value"in aa?aa.value:aa.textContent,yr=!0)),he=wl(V,Jt),0<he.length&&(Jt=new Sd(Jt,t,null,a,lt),_t.push({event:Jt,listeners:he}),Wt?Jt.data=Wt:(Wt=bd(a),Wt!==null&&(Jt.data=Wt)))),(Wt=Zv?Kv(t,a):Qv(t,a))&&(Jt=wl(V,"onBeforeInput"),0<Jt.length&&(he=new Sd("onBeforeInput","beforeinput",null,a,lt),_t.push({event:he,listeners:Jt}),he.data=Wt)),V0(_t,t,V,a,lt)}$m(_t,n)})}function ho(t,n,a){return{instance:t,listener:n,currentTarget:a}}function wl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ds(t,a),c!=null&&o.unshift(ho(t,c,f)),c=Ds(t,n),c!=null&&o.push(ho(t,c,f))),t=t.return}return o}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function eg(t,n,a,o,c){for(var f=n._reactName,S=[];a!==null&&a!==o;){var T=a,N=T.alternate,V=T.stateNode;if(T=T.tag,N!==null&&N===o)break;T!==5&&T!==26&&T!==27||V===null||(N=V,c?(V=Ds(a,f),V!=null&&S.unshift(ho(a,V,N))):c||(V=Ds(a,f),V!=null&&S.push(ho(a,V,N)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var q0=/\r\n?/g,Y0=/\u0000|\uFFFD/g;function ng(t){return(typeof t=="string"?t:""+t).replace(q0,`
`).replace(Y0,"")}function ig(t,n){return n=ng(n),ng(t)===n}function Dl(){}function Ne(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Nn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Nn(t,""+o);break;case"className":Ie(t,"class",o);break;case"tabIndex":Ie(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(t,a,o);break;case"style":dd(t,o,f);break;case"data":if(n!=="object"){Ie(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Go(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ne(t,n,"name",c.name,c,null),Ne(t,n,"formEncType",c.formEncType,c,null),Ne(t,n,"formMethod",c.formMethod,c,null),Ne(t,n,"formTarget",c.formTarget,c,null)):(Ne(t,n,"encType",c.encType,c,null),Ne(t,n,"method",c.method,c,null),Ne(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Go(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Dl);break;case"onScroll":o!=null&&Se("scroll",t);break;case"onScrollEnd":o!=null&&Se("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Go(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Se("beforetoggle",t),Se("toggle",t),_e(t,"popover",o);break;case"xlinkActuate":Ee(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ee(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ee(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ee(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ee(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ee(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":_e(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=yv.get(a)||a,_e(t,a,o))}}function mf(t,n,a,o,c,f){switch(a){case"style":dd(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Nn(t,o):(typeof o=="number"||typeof o=="bigint")&&Nn(t,""+o);break;case"onScroll":o!=null&&Se("scroll",t);break;case"onScrollEnd":o!=null&&Se("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Dl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[nn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break t}a in t?t[a]=o:o===!0?t.setAttribute(a,""):_e(t,a,o)}}}function vn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",t),Se("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,f,S,a,null)}}c&&Ne(t,n,"srcSet",a.srcSet,a,null),o&&Ne(t,n,"src",a.src,a,null);return;case"input":Se("invalid",t);var T=f=S=c=null,N=null,V=null;for(o in a)if(a.hasOwnProperty(o)){var lt=a[o];if(lt!=null)switch(o){case"name":c=lt;break;case"type":S=lt;break;case"checked":N=lt;break;case"defaultChecked":V=lt;break;case"value":f=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:Ne(t,n,o,lt,a,null)}}Rn(t,f,T,N,V,S,c,!1),ve(t);return;case"select":Se("invalid",t),o=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:Ne(t,n,c,T,a,null)}n=f,a=S,t.multiple=!!o,n!=null?ke(t,!!o,n,!1):a!=null&&ke(t,!!o,a,!0);return;case"textarea":Se("invalid",t),f=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ne(t,n,S,T,a,null)}Sr(t,o,c,f),ve(t);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(o=a[N],o!=null))switch(N){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ne(t,n,N,o,a,null)}return;case"dialog":Se("cancel",t),Se("close",t);break;case"iframe":case"object":Se("load",t);break;case"video":case"audio":for(o=0;o<fo.length;o++)Se(fo[o],t);break;case"image":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"embed":case"source":case"link":Se("error",t),Se("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,V,o,a,null)}return;default:if(Dc(n)){for(lt in a)a.hasOwnProperty(lt)&&(o=a[lt],o!==void 0&&mf(t,n,lt,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ne(t,n,T,o,a,null))}function j0(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,N=null,V=null,lt=null;for(ot in a){var _t=a[ot];if(a.hasOwnProperty(ot)&&_t!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":N=_t;default:o.hasOwnProperty(ot)||Ne(t,n,ot,null,o,_t)}}for(var et in o){var ot=o[et];if(_t=a[et],o.hasOwnProperty(et)&&(ot!=null||_t!=null))switch(et){case"type":f=ot;break;case"name":c=ot;break;case"checked":V=ot;break;case"defaultChecked":lt=ot;break;case"value":S=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==_t&&Ne(t,n,et,ot,o,_t)}}Ue(t,S,T,N,V,lt,f,c);return;case"select":ot=S=T=et=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":ot=N;default:o.hasOwnProperty(f)||Ne(t,n,f,null,o,N)}for(c in o)if(f=o[c],N=a[c],o.hasOwnProperty(c)&&(f!=null||N!=null))switch(c){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==N&&Ne(t,n,c,f,o,N)}n=T,a=S,o=ot,et!=null?ke(t,!!a,et,!1):!!o!=!!a&&(n!=null?ke(t,!!a,n,!0):ke(t,!!a,a?[]:"",!1));return;case"textarea":ot=et=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ne(t,n,T,null,o,c)}for(S in o)if(c=o[S],f=a[S],o.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":et=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ne(t,n,S,c,o,f)}mn(t,et,ot);return;case"option":for(var Vt in a)if(et=a[Vt],a.hasOwnProperty(Vt)&&et!=null&&!o.hasOwnProperty(Vt))switch(Vt){case"selected":t.selected=!1;break;default:Ne(t,n,Vt,null,o,et)}for(N in o)if(et=o[N],ot=a[N],o.hasOwnProperty(N)&&et!==ot&&(et!=null||ot!=null))switch(N){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ne(t,n,N,et,o,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)et=a[ie],a.hasOwnProperty(ie)&&et!=null&&!o.hasOwnProperty(ie)&&Ne(t,n,ie,null,o,et);for(V in o)if(et=o[V],ot=a[V],o.hasOwnProperty(V)&&et!==ot&&(et!=null||ot!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ne(t,n,V,et,o,ot)}return;default:if(Dc(n)){for(var qe in a)et=a[qe],a.hasOwnProperty(qe)&&et!==void 0&&!o.hasOwnProperty(qe)&&mf(t,n,qe,void 0,o,et);for(lt in o)et=o[lt],ot=a[lt],!o.hasOwnProperty(lt)||et===ot||et===void 0&&ot===void 0||mf(t,n,lt,et,o,ot);return}}for(var Z in a)et=a[Z],a.hasOwnProperty(Z)&&et!=null&&!o.hasOwnProperty(Z)&&Ne(t,n,Z,null,o,et);for(_t in o)et=o[_t],ot=a[_t],!o.hasOwnProperty(_t)||et===ot||et==null&&ot==null||Ne(t,n,_t,et,o,ot)}var gf=null,_f=null;function Ul(t){return t.nodeType===9?t:t.ownerDocument}function ag(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sf=null;function Z0(){var t=window.event;return t&&t.type==="popstate"?t===Sf?!1:(Sf=t,!0):(Sf=null,!1)}var sg=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,og=typeof Promise=="function"?Promise:void 0,Q0=typeof queueMicrotask=="function"?queueMicrotask:typeof og<"u"?function(t){return og.resolve(null).then(t).catch(J0)}:sg;function J0(t){setTimeout(function(){throw t})}function xf(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(o===0){t.removeChild(c),Mo(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=c}while(a);Mo(n)}function Mf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mf(a),ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function $0(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function tS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function lg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function cg(t,n,a){switch(n=Ul(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var ii=new Map,ug=new Set;function Ll(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var ki=q.d;q.d={f:eS,r:nS,D:iS,C:aS,L:rS,m:sS,X:lS,S:oS,M:cS};function eS(){var t=ki.f(),n=Tl();return t||n}function nS(t){var n=A(t);n!==null&&n.tag===5&&n.type==="form"?Bp(n):ki.r(t)}var qr=typeof document>"u"?null:document;function fg(t,n,a){var o=qr;if(o&&typeof n=="string"&&n){var c=cn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),ug.has(c)||(ug.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),vn(n,"link",t),Q(n),o.head.appendChild(n)))}}function iS(t){ki.D(t),fg("dns-prefetch",t,null)}function aS(t,n){ki.C(t,n),fg("preconnect",t,n)}function rS(t,n,a){ki.L(t,n,a);var o=qr;if(o&&t&&n){var c='link[rel="preload"][as="'+cn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+cn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+cn(a.imageSizes)+'"]')):c+='[href="'+cn(t)+'"]';var f=c;switch(n){case"style":f=Yr(t);break;case"script":f=jr(t)}ii.has(f)||(t=R({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ii.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(po(f))||n==="script"&&o.querySelector(mo(f))||(n=o.createElement("link"),vn(n,"link",t),Q(n),o.head.appendChild(n)))}}function sS(t,n){ki.m(t,n);var a=qr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+cn(o)+'"][href="'+cn(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=jr(t)}if(!ii.has(f)&&(t=R({rel:"modulepreload",href:t},n),ii.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mo(f)))return}o=a.createElement("link"),vn(o,"link",t),Q(o),a.head.appendChild(o)}}}function oS(t,n,a){ki.S(t,n,a);var o=qr;if(o&&t){var c=$(o).hoistableStyles,f=Yr(t);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(po(f)))T.loading=5;else{t=R({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ii.get(f))&&yf(t,a);var N=S=o.createElement("link");Q(N),vn(N,"link",t),N._p=new Promise(function(V,lt){N.onload=V,N.onerror=lt}),N.addEventListener("load",function(){T.loading|=1}),N.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Nl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function lS(t,n){ki.X(t,n);var a=qr;if(a&&t){var o=$(a).hoistableScripts,c=jr(t),f=o.get(c);f||(f=a.querySelector(mo(c)),f||(t=R({src:t,async:!0},n),(n=ii.get(c))&&Ef(t,n),f=a.createElement("script"),Q(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function cS(t,n){ki.M(t,n);var a=qr;if(a&&t){var o=$(a).hoistableScripts,c=jr(t),f=o.get(c);f||(f=a.querySelector(mo(c)),f||(t=R({src:t,async:!0,type:"module"},n),(n=ii.get(c))&&Ef(t,n),f=a.createElement("script"),Q(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function hg(t,n,a,o){var c=(c=ae.current)?Ll(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Yr(a.href),a=$(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Yr(a.href);var f=$(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(po(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ii.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(t,a),f||uS(c,t,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=jr(a),a=$(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Yr(t){return'href="'+cn(t)+'"'}function po(t){return'link[rel="stylesheet"]['+t+"]"}function dg(t){return R({},t,{"data-precedence":t.precedence,precedence:null})}function uS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),vn(n,"link",a),Q(n),t.head.appendChild(n))}function jr(t){return'[src="'+cn(t)+'"]'}function mo(t){return"script[async]"+t}function pg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+cn(a.href)+'"]');if(o)return n.instance=o,Q(o),o;var c=R({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Q(o),vn(o,"style",c),Nl(o,a.precedence,t),n.instance=o;case"stylesheet":c=Yr(a.href);var f=t.querySelector(po(c));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;o=dg(a),(c=ii.get(c))&&yf(o,c),f=(t.ownerDocument||t).createElement("link"),Q(f);var S=f;return S._p=new Promise(function(T,N){S.onload=T,S.onerror=N}),vn(f,"link",o),n.state.loading|=4,Nl(f,a.precedence,t),n.instance=f;case"script":return f=jr(a.src),(c=t.querySelector(mo(f)))?(n.instance=c,Q(c),c):(o=a,(c=ii.get(f))&&(o=R({},a),Ef(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),Q(c),vn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Nl(o,a.precedence,t));return n.instance}function Nl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function yf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ef(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ol=null;function mg(t,n,a){if(Ol===null){var o=new Map,c=Ol=new Map;c.set(a,o)}else c=Ol,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ba]||f[en]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var T=o.get(S);T?T.push(f):o.set(S,[f])}}return o}function gg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function fS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function _g(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var go=null;function hS(){}function dS(t,n,a){if(go===null)throw Error(r(475));var o=go;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Yr(a.href),f=t.querySelector(po(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Pl.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,Q(f);return}f=t.ownerDocument||t,a=dg(a),(c=ii.get(c))&&yf(a,c),f=f.createElement("link"),Q(f);var S=f;S._p=new Promise(function(T,N){S.onload=T,S.onerror=N}),vn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Pl.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function pS(){if(go===null)throw Error(r(475));var t=go;return t.stylesheets&&t.count===0&&Tf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Tf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Pl(){if(this.count--,this.count===0){if(this.stylesheets)Tf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zl=null;function Tf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zl=new Map,n.forEach(mS,t),zl=null,Pl.call(t))}function mS(t,n){if(!(n.state.loading&4)){var a=zl.get(t);if(a)var o=a.get(null);else{a=new Map,zl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,c),a.set(S,c),this.count++,o=Pl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var _o={$$typeof:y,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function gS(t,n,a,o,c,f,S,T){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tn(0),this.hiddenUpdates=Tn(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function vg(t,n,a,o,c,f,S,T,N,V,lt,_t){return t=new gS(t,n,a,S,T,N,V,_t),n=1,f===!0&&(n|=24),f=ei(3,null,null,n),t.current=f,f.stateNode=t,n=eu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Pu(f),t}function Sg(t){return t?(t=Ar,t):Ar}function xg(t,n,a,o,c,f){c=Sg(c),o.context===null?o.context=c:o.pendingContext=c,o=ha(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=da(t,o,n),a!==null&&(wn(a,t,n),$s(a,t,n))}function Mg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function bf(t,n){Mg(t,n),(t=t.alternate)&&Mg(t,n)}function yg(t){if(t.tag===13){var n=ra(t,67108864);n!==null&&wn(n,t,67108864),bf(t,67108864)}}var Bl=!0;function _S(t,n,a,o){var c=w.T;w.T=null;var f=q.p;try{q.p=2,Af(t,n,a,o)}finally{q.p=f,w.T=c}}function vS(t,n,a,o){var c=w.T;w.T=null;var f=q.p;try{q.p=8,Af(t,n,a,o)}finally{q.p=f,w.T=c}}function Af(t,n,a,o){if(Bl){var c=Rf(o);if(c===null)pf(t,n,o,Fl,a),Tg(t,o);else if(xS(c,t,n,a,o))o.stopPropagation();else if(Tg(t,o),n&4&&-1<SS.indexOf(t)){for(;c!==null;){var f=A(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Ct(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var N=1<<31-jt(S);T.entanglements[1]|=N,S&=~N}Ei(f),(Ve&6)===0&&(Ml=ut()+500,uo(0))}}break;case 13:T=ra(f,2),T!==null&&wn(T,f,2),Tl(),bf(f,2)}if(f=Rf(o),f===null&&pf(t,n,o,Fl,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else pf(t,n,o,null,a)}}function Rf(t){return t=Lc(t),Cf(t)}var Fl=null;function Cf(t){if(Fl=null,t=Ci(t),t!==null){var n=j(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=xt(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fl=t,null}function Eg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case ft:return 2;case Ht:return 8;case wt:case zt:return 32;case pe:return 268435456;default:return 32}default:return 32}}var wf=!1,xa=null,Ma=null,ya=null,vo=new Map,So=new Map,Ea=[],SS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tg(t,n){switch(t){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(n.pointerId)}}function xo(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=A(n),n!==null&&yg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function xS(t,n,a,o,c){switch(n){case"focusin":return xa=xo(xa,t,n,a,o,c),!0;case"dragenter":return Ma=xo(Ma,t,n,a,o,c),!0;case"mouseover":return ya=xo(ya,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return vo.set(f,xo(vo.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,So.set(f,xo(So.get(f)||null,t,n,a,o,c)),!0}return!1}function bg(t){var n=Ci(t.target);if(n!==null){var a=j(n);if(a!==null){if(n=a.tag,n===13){if(n=xt(a),n!==null){t.blockedOn=n,Io(t.priority,function(){if(a.tag===13){var o=Xn(),c=ra(a,o);c!==null&&wn(c,a,o),bf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Rf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Uc=o,a.target.dispatchEvent(o),Uc=null}else return n=A(a),n!==null&&yg(n),t.blockedOn=a,!1;n.shift()}return!0}function Ag(t,n,a){Il(t)&&a.delete(n)}function MS(){wf=!1,xa!==null&&Il(xa)&&(xa=null),Ma!==null&&Il(Ma)&&(Ma=null),ya!==null&&Il(ya)&&(ya=null),vo.forEach(Ag),So.forEach(Ag)}function Hl(t,n){t.blockedOn===n&&(t.blockedOn=null,wf||(wf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,MS)))}var Gl=null;function Rg(t){Gl!==t&&(Gl=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Cf(o||a)===null)continue;break}var f=A(a);f!==null&&(t.splice(n,3),n-=3,_u(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Mo(t){function n(N){return Hl(N,t)}xa!==null&&Hl(xa,t),Ma!==null&&Hl(Ma,t),ya!==null&&Hl(ya,t),vo.forEach(n),So.forEach(n);for(var a=0;a<Ea.length;a++){var o=Ea[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ea.length&&(a=Ea[0],a.blockedOn===null);)bg(a),a.blockedOn===null&&Ea.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],S=c[nn]||null;if(typeof f=="function")S||Rg(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[nn]||null)T=S.formAction;else if(Cf(c)!==null)continue}else T=S.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Rg(a)}}}function Df(t){this._internalRoot=t}Vl.prototype.render=Df.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Xn();xg(a,o,t,n,null,null)},Vl.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&kr(),xg(t.current,2,null,t,null,null),Tl(),n[Ri]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Cs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ea.length&&n!==0&&n<Ea[a].priority;a++);Ea.splice(a,0,t),a===0&&bg(t)}};var Cg=e.version;if(Cg!=="19.0.0")throw Error(r(527,Cg,"19.0.0"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=nt(n),t=t!==null?Et(t):null,t=t===null?null:t.stateNode,t};var yS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:w,findFiberByHostInstance:Ci,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{qt=kl.inject(yS),Gt=kl}catch{}}return Eo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Wp,f=qp,S=Yp,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=vg(t,1,!1,null,null,a,o,c,f,S,T,null),t[Ri]=n.current,df(t.nodeType===8?t.parentNode:t),new Df(n)},Eo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=Wp,S=qp,T=Yp,N=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),n=vg(t,1,!0,n,a??null,o,c,f,S,T,N,V),n.context=Sg(null),a=n.current,o=Xn(),c=ha(o),c.callback=null,da(a,c,o),n.current.lanes=o,bn(n,o),Ei(n),t[Ri]=n.current,df(t),new Vl(n)},Eo.version="19.0.0",Eo}var Fg;function LS(){if(Fg)return Nf.exports;Fg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Nf.exports=US(),Nf.exports}var NS=LS();const OS=H_(NS),Ig=s=>{let e;const i=new Set,r=(p,g)=>{const x=typeof p=="function"?p(e):p;if(!Object.is(x,e)){const v=e;e=g??(typeof x!="object"||x===null)?x:Object.assign({},e,x),i.forEach(y=>y(e,v))}},l=()=>e,d={setState:r,getState:l,getInitialState:()=>m,subscribe:p=>(i.add(p),()=>i.delete(p))},m=e=s(r,l,d);return d},PS=s=>s?Ig(s):Ig,zS=s=>s;function BS(s,e=zS){const i=dh.useSyncExternalStore(s.subscribe,()=>e(s.getState()),()=>e(s.getInitialState()));return dh.useDebugValue(i),i}const FS=s=>{const e=PS(s),i=r=>BS(e,r);return Object.assign(i,e),i},IS=s=>FS;function HS(s,e){let i;try{i=s()}catch{return}return{getItem:l=>{var u;const h=m=>m===null?null:JSON.parse(m,void 0),d=(u=i.getItem(l))!=null?u:null;return d instanceof Promise?d.then(h):h(d)},setItem:(l,u)=>i.setItem(l,JSON.stringify(u,void 0)),removeItem:l=>i.removeItem(l)}}const ph=s=>e=>{try{const i=s(e);return i instanceof Promise?i:{then(r){return ph(r)(i)},catch(r){return this}}}catch(i){return{then(r){return this},catch(r){return ph(r)(i)}}}},GS=(s,e)=>(i,r,l)=>{let u={storage:HS(()=>localStorage),partialize:C=>C,version:0,merge:(C,M)=>({...M,...C}),...e},h=!1;const d=new Set,m=new Set;let p=u.storage;if(!p)return s((...C)=>{console.warn(`[zustand persist middleware] Unable to update item '${u.name}', the given storage is currently unavailable.`),i(...C)},r,l);const g=()=>{const C=u.partialize({...r()});return p.setItem(u.name,{state:C,version:u.version})},x=l.setState;l.setState=(C,M)=>{x(C,M),g()};const v=s((...C)=>{i(...C),g()},r,l);l.getInitialState=()=>v;let y;const b=()=>{var C,M;if(!p)return;h=!1,d.forEach(P=>{var O;return P((O=r())!=null?O:v)});const _=((M=u.onRehydrateStorage)==null?void 0:M.call(u,(C=r())!=null?C:v))||void 0;return ph(p.getItem.bind(p))(u.name).then(P=>{if(P)if(typeof P.version=="number"&&P.version!==u.version){if(u.migrate){const O=u.migrate(P.state,P.version);return O instanceof Promise?O.then(L=>[!0,L]):[!0,O]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,P.state];return[!1,void 0]}).then(P=>{var O;const[L,H]=P;if(y=u.merge(H,(O=r())!=null?O:v),i(y,!0),L)return g()}).then(()=>{_==null||_(y,void 0),y=r(),h=!0,m.forEach(P=>P(y))}).catch(P=>{_==null||_(void 0,P)})};return l.persist={setOptions:C=>{u={...u,...C},C.storage&&(p=C.storage)},clearStorage:()=>{p==null||p.removeItem(u.name)},getOptions:()=>u,rehydrate:()=>b(),hasHydrated:()=>h,onHydrate:C=>(d.add(C),()=>{d.delete(C)}),onFinishHydration:C=>(m.add(C),()=>{m.delete(C)})},u.skipHydration||b(),y||v},VS=GS,Bf=[{id:"better-petting",name:"Better Petting Technique",description:"Get 2 cats per click",cost:50,effect:s=>{s.clicksPerClick=2},purchased:!1,level:1},{id:"auto-petter",name:"Auto Petter",description:"Get 1 cat per second automatically",cost:100,effect:s=>{s.clicksPerSecond+=1},purchased:!1,level:1},{id:"petting-glove",name:"Petting Glove",description:"Get 5 cats per click",cost:500,effect:s=>{s.clicksPerClick=5},purchased:!1,requires:"better-petting",level:1},{id:"catnip",name:"Premium Catnip",description:"Double your current passive cat income per second",cost:1e3,effect:s=>{s.clicksPerSecond*=2},purchased:!1,requires:"auto-petter",level:1},{id:"laser-pointer",name:"Laser Pointer",description:"Get 10 cats per click",cost:2e3,effect:s=>{s.clicksPerClick=10},purchased:!1,requires:"petting-glove",level:1}],cs=new Audio("/assets/sounds/click.mp3");cs.loop=!0;let Xl=null;const Hg=s=>{Xl&&clearTimeout(Xl),cs.paused&&(cs.currentTime=0,cs.play().catch(e=>console.error("Audio error:",e))),s(e=>({...e,isSpinning:!0})),Xl=window.setTimeout(()=>{cs.pause(),cs.currentTime=0,s(e=>({...e,isSpinning:!1})),Xl=null},2e3)},Gg={clicks:0,clicksPerClick:1,clicksPerSecond:0,lastSaved:Date.now(),firstClickTime:null,lifetimeClicks:0,isSpinning:!1},Es=IS()(VS((s,e)=>({...Gg,upgrades:Bf,incrementClicks:()=>{s(i=>{Hg(s);const r=Date.now(),l=i.clicksPerClick;return{clicks:i.clicks+l,lifetimeClicks:i.lifetimeClicks+l,firstClickTime:i.firstClickTime===null&&i.clicks===0?r:i.firstClickTime}})},purchaseUpgrade:i=>{const r=e();console.log("Attempting purchase:",i),console.log("Current state:",r);const l=Bf.find(m=>m.id===i),u=r.upgrades.findIndex(m=>m.id===i);if(console.log("Upgrade index:",u),u===-1||!l){console.log("Upgrade not found");return}const h=r.upgrades[u];if(console.log("Upgrade:",h),console.log("Current clicks:",r.clicks),console.log("Upgrade cost:",h.cost),h.purchased||r.clicks<h.cost){console.log("Cannot purchase:",h.purchased?"already purchased":"not enough clicks");return}const d={...r};l.effect(d),console.log("State after effect:",d),s({...r,clicks:r.clicks-h.cost,clicksPerClick:d.clicksPerClick,clicksPerSecond:d.clicksPerSecond,upgrades:r.upgrades.map((m,p)=>p===u?{...m,purchased:!0}:m),lastSaved:Date.now()}),console.log("Purchase completed")},processOfflineProgress:()=>{const{lastSaved:i,clicksPerSecond:r}=e(),l=Date.now(),u=Math.floor((l-i)/1e3);if(u>0&&r>0){const h=u*r;return s(d=>({clicks:d.clicks+h,lastSaved:l})),h}return s({lastSaved:l}),0},resetGame:()=>{s({...Gg,upgrades:Bf.map(i=>({...i,purchased:!1})),lastSaved:Date.now(),firstClickTime:null,lifetimeClicks:0})},addClicks:i=>{s(r=>{Hg(s);const l=Date.now();return{clicks:r.clicks+i,lifetimeClicks:r.lifetimeClicks+i,lastSaved:Date.now(),firstClickTime:r.firstClickTime===null&&r.clicks===0?l:r.firstClickTime}})}}),{name:"cat-clicker-storage",partialize:s=>({clicks:s.clicks,clicksPerClick:s.clicksPerClick,clicksPerSecond:s.clicksPerSecond,lastSaved:s.lastSaved,firstClickTime:s.firstClickTime,lifetimeClicks:s.lifetimeClicks,upgrades:s.upgrades.map(e=>({...e,effect:void 0}))})})),kS=()=>{const{clicks:s,clicksPerClick:e,clicksPerSecond:i,firstClickTime:r,lifetimeClicks:l}=Es(),[u,h]=Yn.useState(0);Yn.useEffect(()=>{const m=()=>{if(r&&l>0){const g=(Date.now()-r)/1e3;g>=1?h(l/g):h(0)}};m();const p=setInterval(m,1e3);return()=>clearInterval(p)},[l,r]);const d=()=>{if(!r)return"00:00:00";const m=Math.floor((Date.now()-r)/1e3),p=Math.floor(m/3600),g=Math.floor(m%3600/60),x=m%60;return`${p.toString().padStart(2,"0")}:${g.toString().padStart(2,"0")}:${x.toString().padStart(2,"0")}`};return Kt.jsxs("header",{className:"mb-8",children:[Kt.jsx("h1",{className:"text-3xl font-bold text-center mb-6 text-purple-200",children:"Cat Premium Enhancements Shop"}),Kt.jsxs("div",{className:"grid grid-cols-6 gap-4 max-w-4xl mx-auto",children:[Kt.jsxs("div",{className:"flex flex-col items-center",children:[Kt.jsx("span",{className:"text-purple-300 text-sm mb-1 h-8 flex items-center",children:"Cats"}),Kt.jsx("span",{className:"text-purple-100 text-xl font-bold",children:Math.floor(s)})]}),Kt.jsxs("div",{className:"flex flex-col items-center",children:[Kt.jsx("span",{className:"text-purple-300 text-sm mb-1 h-8 flex items-center",children:"Cats Per Click"}),Kt.jsx("span",{className:"text-purple-100 text-xl font-bold",children:e})]}),Kt.jsxs("div",{className:"flex flex-col items-center",children:[Kt.jsxs("span",{className:"text-purple-300 text-sm mb-1 h-8 flex items-center text-center",children:["Passive Cat",Kt.jsx("br",{}),"Income"]}),Kt.jsx("span",{className:"text-purple-100 text-xl font-bold",children:i})]}),Kt.jsxs("div",{className:"flex flex-col items-center",children:[Kt.jsx("span",{className:"text-purple-300 text-sm mb-1 h-8 flex items-center",children:"Lifetime Cats"}),Kt.jsx("span",{className:"text-purple-100 text-xl font-bold",children:Math.floor(l)})]}),Kt.jsxs("div",{className:"flex flex-col items-center",children:[Kt.jsx("span",{className:"text-purple-300 text-sm mb-1 h-8 flex items-center",children:"Cats/sec (avg)"}),Kt.jsx("span",{className:"text-purple-100 text-xl font-bold",children:u.toFixed(1)})]}),Kt.jsxs("div",{className:"flex flex-col items-center",children:[Kt.jsx("span",{className:"text-purple-300 text-sm mb-1 h-8 flex items-center",children:"Time Elapsed"}),Kt.jsx("span",{className:"text-purple-100 text-xl font-bold",children:d()})]})]})]})},XS=()=>{const{incrementClicks:s,isSpinning:e}=Es(),i=()=>{s()},r=e?"/assets/gifs/spin-loop.gif":"/assets/gifs/cat.gif";return Kt.jsx("div",{className:"flex justify-center my-8",children:Kt.jsx("div",{className:`cursor-pointer transition-transform ${e?"animate-spin-slow scale-110":"hover:scale-105"}`,onClick:i,children:Kt.jsx("img",{src:r,alt:"Clickable Cat",className:`w-48 h-48 ${e?"drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]":""}`})})})},WS=({upgrade:s})=>{const{clicks:e,purchaseUpgrade:i}=Es(),r=Yn.useRef(null);r.current||(r.current=new Audio("/assets/sounds/purr.mp3"));const l=s.purchased||e<s.cost,u=()=>{l||(r.current&&(r.current.currentTime=0,r.current.play().catch(h=>console.error("Audio error:",h))),i(s.id))};return Kt.jsxs("div",{className:`p-4 rounded-lg transition-all duration-200 ${s.purchased?"bg-green-900/50 cursor-default":l?"bg-gray-800/50 opacity-75 cursor-not-allowed":"bg-purple-900/50 hover:bg-purple-800/50 cursor-pointer"} mb-2 border border-purple-500/30`,onClick:u,children:[Kt.jsxs("div",{className:"flex justify-between items-center",children:[Kt.jsxs("div",{children:[Kt.jsx("h3",{className:"text-lg font-bold text-purple-200",children:s.name}),Kt.jsxs("p",{className:"text-sm text-purple-300/75",children:["Level: ",s.level]})]}),Kt.jsx("div",{className:"text-right",children:Kt.jsx("p",{className:`text-lg font-semibold ${s.purchased?"text-green-400":l?"text-red-400":"text-green-400"}`,children:s.purchased?"Purchased":`${s.cost} cats`})})]}),Kt.jsx("p",{className:"text-sm text-purple-400/90 mt-1",children:s.description})]})},qS=()=>{const{upgrades:s}=Es(),e=s.filter(i=>{if(i.requires){const r=s.find(l=>l.id===i.requires);return r==null?void 0:r.purchased}return!0});return Kt.jsxs("div",{className:"bg-gray-900/80 rounded-lg p-6 backdrop-blur-sm",children:[Kt.jsx("h2",{className:"text-2xl font-bold mb-4 text-center text-pink-400",children:"Cat Premium Enhancements Shop"}),Kt.jsx("div",{className:"space-y-3",children:e.map(i=>Kt.jsx(WS,{upgrade:i},i.id))})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const id="173",YS=0,Vg=1,jS=2,G_=1,ZS=2,Zi=3,Pa=0,zn=1,Ki=2,La=0,ds=1,kg=2,Xg=3,Wg=4,KS=5,fr=100,QS=101,JS=102,$S=103,tx=104,ex=200,nx=201,ix=202,ax=203,mh=204,gh=205,rx=206,sx=207,ox=208,lx=209,cx=210,ux=211,fx=212,hx=213,dx=214,_h=0,vh=1,Sh=2,gs=3,xh=4,Mh=5,yh=6,Eh=7,V_=0,px=1,mx=2,Na=0,gx=1,_x=2,vx=3,Sx=4,xx=5,Mx=6,yx=7,k_=300,_s=301,vs=302,Th=303,bh=304,Tc=306,Ah=1e3,dr=1001,Rh=1002,_i=1003,Ex=1004,Wl=1005,bi=1006,Ff=1007,pr=1008,ea=1009,X_=1010,W_=1011,Uo=1012,ad=1013,mr=1014,Qi=1015,No=1016,rd=1017,sd=1018,Ss=1020,q_=35902,Y_=1021,j_=1022,gi=1023,Z_=1024,K_=1025,ps=1026,xs=1027,Q_=1028,od=1029,J_=1030,ld=1031,cd=1033,mc=33776,gc=33777,_c=33778,vc=33779,Ch=35840,wh=35841,Dh=35842,Uh=35843,Lh=36196,Nh=37492,Oh=37496,Ph=37808,zh=37809,Bh=37810,Fh=37811,Ih=37812,Hh=37813,Gh=37814,Vh=37815,kh=37816,Xh=37817,Wh=37818,qh=37819,Yh=37820,jh=37821,Sc=36492,Zh=36494,Kh=36495,$_=36283,Qh=36284,Jh=36285,$h=36286,Tx=3200,bx=3201,Ax=0,Rx=1,Ua="",ri="srgb",Ms="srgb-linear",Mc="linear",Oe="srgb",Zr=7680,qg=519,Cx=512,wx=513,Dx=514,tv=515,Ux=516,Lx=517,Nx=518,Ox=519,Yg=35044,jg="300 es",Ji=2e3,yc=2001;class Ts{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zg=1234567;const wo=Math.PI/180,Lo=180/Math.PI;function bs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[i&63|128]+yn[i>>8&255]+"-"+yn[i>>16&255]+yn[i>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function me(s,e,i){return Math.max(e,Math.min(i,s))}function ud(s,e){return(s%e+e)%e}function Px(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function zx(s,e,i){return s!==e?(i-s)/(e-s):0}function Do(s,e,i){return(1-i)*s+i*e}function Bx(s,e,i,r){return Do(s,e,1-Math.exp(-i*r))}function Fx(s,e=1){return e-Math.abs(ud(s,e*2)-e)}function Ix(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function Hx(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function Gx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Vx(s,e){return s+Math.random()*(e-s)}function kx(s){return s*(.5-Math.random())}function Xx(s){s!==void 0&&(Zg=s);let e=Zg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wx(s){return s*wo}function qx(s){return s*Lo}function Yx(s){return(s&s-1)===0&&s!==0}function jx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Zx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Kx(s,e,i,r,l){const u=Math.cos,h=Math.sin,d=u(i/2),m=h(i/2),p=u((e+r)/2),g=h((e+r)/2),x=u((e-r)/2),v=h((e-r)/2),y=u((r-e)/2),b=h((r-e)/2);switch(l){case"XYX":s.set(d*g,m*x,m*v,d*p);break;case"YZY":s.set(m*v,d*g,m*x,d*p);break;case"ZXZ":s.set(m*x,m*v,d*g,d*p);break;case"XZX":s.set(d*g,m*b,m*y,d*p);break;case"YXY":s.set(m*y,d*g,m*b,d*p);break;case"ZYZ":s.set(m*b,m*y,d*g,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function us(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const If={DEG2RAD:wo,RAD2DEG:Lo,generateUUID:bs,clamp:me,euclideanModulo:ud,mapLinear:Px,inverseLerp:zx,lerp:Do,damp:Bx,pingpong:Fx,smoothstep:Ix,smootherstep:Hx,randInt:Gx,randFloat:Vx,randFloatSpread:kx,seededRandom:Xx,degToRad:Wx,radToDeg:qx,isPowerOfTwo:Yx,ceilPowerOfTwo:jx,floorPowerOfTwo:Zx,setQuaternionFromProperEuler:Kx,normalize:Dn,denormalize:us};class ze{constructor(e=0,i=0){ze.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=me(this.x,e.x,i.x),this.y=me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=me(this.x,e,i),this.y=me(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(e,i,r,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],x=r[7],v=r[2],y=r[5],b=r[8],C=l[0],M=l[3],_=l[6],P=l[1],O=l[4],L=l[7],H=l[2],G=l[5],B=l[8];return u[0]=h*C+d*P+m*H,u[3]=h*M+d*O+m*G,u[6]=h*_+d*L+m*B,u[1]=p*C+g*P+x*H,u[4]=p*M+g*O+x*G,u[7]=p*_+g*L+x*B,u[2]=v*C+y*P+b*H,u[5]=v*M+y*O+b*G,u[8]=v*_+y*L+b*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=g*h-d*p,v=d*m-g*u,y=p*u-h*m,b=i*x+r*v+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=x*C,e[1]=(l*p-g*r)*C,e[2]=(d*r-l*h)*C,e[3]=v*C,e[4]=(g*i-l*m)*C,e[5]=(l*u-d*i)*C,e[6]=y*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Hf.makeScale(e,i)),this}rotate(e){return this.premultiply(Hf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Hf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hf=new le;function ev(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ec(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qx(){const s=Ec("canvas");return s.style.display="block",s}const Kg={};function fs(s){s in Kg||(Kg[s]=!0,console.warn(s))}function Jx(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function $x(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tM(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qg=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jg=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eM(){const s={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Oe&&(l.r=ta(l.r),l.g=ta(l.g),l.b=ta(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Oe&&(l.r=ms(l.r),l.g=ms(l.g),l.b=ms(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ua?Mc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ms]:{primaries:e,whitePoint:r,transfer:Mc,toXYZ:Qg,fromXYZ:Jg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:Oe,toXYZ:Qg,fromXYZ:Jg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),s}const Ae=eM();function ta(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Kr;class nM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Kr===void 0&&(Kr=Ec("canvas")),Kr.width=e.width,Kr.height=e.height;const r=Kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Kr}return i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ec("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ta(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ta(i[r]/255)*255):i[r]=ta(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iM=0;class nv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Gf(l[h].image)):u.push(Gf(l[h]))}else u=Gf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Gf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aM=0;class Bn extends Ts{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=dr,l=dr,u=bi,h=pr,d=gi,m=ea,p=Bn.DEFAULT_ANISOTROPY,g=Ua){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=bs(),this.name="",this.source=new nv(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=k_;Bn.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,i=0,r=0,l=1){je.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],x=m[8],v=m[1],y=m[5],b=m[9],C=m[2],M=m[6],_=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+C)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,L=(y+1)/2,H=(_+1)/2,G=(g+v)/4,B=(x+C)/4,K=(b+M)/4;return O>L&&O>H?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=G/r,u=B/r):L>H?L<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),r=G/l,u=K/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=B/u,l=K/u),this.set(r,l,u,i),this}let P=Math.sqrt((M-b)*(M-b)+(x-C)*(x-C)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(M-b)/P,this.y=(x-C)/P,this.z=(v-g)/P,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=me(this.x,e.x,i.x),this.y=me(this.y,e.y,i.y),this.z=me(this.z,e.z,i.z),this.w=me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=me(this.x,e,i),this.y=me(this.y,e,i),this.z=me(this.z,e,i),this.w=me(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rM extends Ts{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new je(0,0,e,i),this.scissorTest=!1,this.viewport=new je(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Bn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const i=Object.assign({},e.texture.image);return this.texture.source=new nv(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends rM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class iv extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sM extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3];const v=u[h+0],y=u[h+1],b=u[h+2],C=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x;return}if(d===1){e[i+0]=v,e[i+1]=y,e[i+2]=b,e[i+3]=C;return}if(x!==C||m!==v||p!==y||g!==b){let M=1-d;const _=m*v+p*y+g*b+x*C,P=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const H=Math.sqrt(O),G=Math.atan2(H,_*P);M=Math.sin(M*G)/H,d=Math.sin(d*G)/H}const L=d*P;if(m=m*M+v*L,p=p*M+y*L,g=g*M+b*L,x=x*M+C*L,M===1-d){const H=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=H,p*=H,g*=H,x*=H}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=u[h],v=u[h+1],y=u[h+2],b=u[h+3];return e[i]=d*b+g*x+m*y-p*v,e[i+1]=m*b+g*v+p*x-d*y,e[i+2]=p*b+g*y+d*v-m*x,e[i+3]=g*b-d*x-m*v-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),x=d(u/2),v=m(r/2),y=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=v*g*x+p*y*b,this._y=p*y*x-v*g*b,this._z=p*g*b+v*y*x,this._w=p*g*x-v*y*b;break;case"YXZ":this._x=v*g*x+p*y*b,this._y=p*y*x-v*g*b,this._z=p*g*b-v*y*x,this._w=p*g*x+v*y*b;break;case"ZXY":this._x=v*g*x-p*y*b,this._y=p*y*x+v*g*b,this._z=p*g*b+v*y*x,this._w=p*g*x-v*y*b;break;case"ZYX":this._x=v*g*x-p*y*b,this._y=p*y*x+v*g*b,this._z=p*g*b-v*y*x,this._w=p*g*x+v*y*b;break;case"YZX":this._x=v*g*x+p*y*b,this._y=p*y*x+v*g*b,this._z=p*g*b-v*y*x,this._w=p*g*x-v*y*b;break;case"XZY":this._x=v*g*x-p*y*b,this._y=p*y*x-v*g*b,this._z=p*g*b+v*y*x,this._w=p*g*x+v*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],v=r+d+x;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(r>d&&r>x){const y=2*Math.sqrt(1+r-d-x);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-r-x);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+x-r-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(me(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),x=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=h*x+this._w*v,this._x=r*x+this._x*v,this._y=l*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion($g.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion($g.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+m*p+h*x-d*g,this.y=r+m*g+d*p-u*x,this.z=l+m*x+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=me(this.x,e.x,i.x),this.y=me(this.y,e.y,i.y),this.z=me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=me(this.x,e,i),this.y=me(this.y,e,i),this.z=me(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vf.copy(this).projectOnVector(e),this.sub(Vf)}reflect(e){return this.sub(Vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vf=new rt,$g=new Oo;class Po{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,hi):hi.fromBufferAttribute(u,h),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ql.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ql.copy(r.boundingBox)),ql.applyMatrix4(e.matrixWorld),this.union(ql)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),Yl.subVectors(this.max,To),Qr.subVectors(e.a,To),Jr.subVectors(e.b,To),$r.subVectors(e.c,To),ba.subVectors(Jr,Qr),Aa.subVectors($r,Jr),ir.subVectors(Qr,$r);let i=[0,-ba.z,ba.y,0,-Aa.z,Aa.y,0,-ir.z,ir.y,ba.z,0,-ba.x,Aa.z,0,-Aa.x,ir.z,0,-ir.x,-ba.y,ba.x,0,-Aa.y,Aa.x,0,-ir.y,ir.x,0];return!kf(i,Qr,Jr,$r,Yl)||(i=[1,0,0,0,1,0,0,0,1],!kf(i,Qr,Jr,$r,Yl))?!1:(jl.crossVectors(ba,Aa),i=[jl.x,jl.y,jl.z],kf(i,Qr,Jr,$r,Yl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],hi=new rt,ql=new Po,Qr=new rt,Jr=new rt,$r=new rt,ba=new rt,Aa=new rt,ir=new rt,To=new rt,Yl=new rt,jl=new rt,ar=new rt;function kf(s,e,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){ar.fromArray(s,u);const d=l.x*Math.abs(ar.x)+l.y*Math.abs(ar.y)+l.z*Math.abs(ar.z),m=e.dot(ar),p=i.dot(ar),g=r.dot(ar);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const oM=new Po,bo=new rt,Xf=new rt;class bc{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):oM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const i=bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(bo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Xf)),this.expandByPoint(bo.copy(e.center).sub(Xf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wi=new rt,Wf=new rt,Zl=new rt,Ra=new rt,qf=new rt,Kl=new rt,Yf=new rt;class av{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Wi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,i),Wi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Wf.copy(e).add(i).multiplyScalar(.5),Zl.copy(i).sub(e).normalize(),Ra.copy(this.origin).sub(Wf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(Zl),d=Ra.dot(this.direction),m=-Ra.dot(Zl),p=Ra.lengthSq(),g=Math.abs(1-h*h);let x,v,y,b;if(g>0)if(x=h*m-d,v=h*d-m,b=u*g,x>=0)if(v>=-b)if(v<=b){const C=1/g;x*=C,v*=C,y=x*(x+h*v+2*d)+v*(h*x+v+2*m)+p}else v=u,x=Math.max(0,-(h*v+d)),y=-x*x+v*(v+2*m)+p;else v=-u,x=Math.max(0,-(h*v+d)),y=-x*x+v*(v+2*m)+p;else v<=-b?(x=Math.max(0,-(-h*u+d)),v=x>0?-u:Math.min(Math.max(-u,-m),u),y=-x*x+v*(v+2*m)+p):v<=b?(x=0,v=Math.min(Math.max(-u,-m),u),y=v*(v+2*m)+p):(x=Math.max(0,-(h*u+d)),v=x>0?u:Math.min(Math.max(-u,-m),u),y=-x*x+v*(v+2*m)+p);else v=h>0?-u:u,x=Math.max(0,-(h*v+d)),y=-x*x+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Wf).addScaledVector(Zl,v),y}intersectSphere(e,i){Wi.subVectors(e.center,this.origin);const r=Wi.dot(this.direction),l=Wi.dot(Wi)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),g>=0?(u=(e.min.y-v.y)*g,h=(e.max.y-v.y)*g):(u=(e.max.y-v.y)*g,h=(e.min.y-v.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-v.z)*x,m=(e.max.z-v.z)*x):(d=(e.max.z-v.z)*x,m=(e.min.z-v.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,i,r,l,u){qf.subVectors(i,e),Kl.subVectors(r,e),Yf.crossVectors(qf,Kl);let h=this.direction.dot(Yf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ra.subVectors(this.origin,e);const m=d*this.direction.dot(Kl.crossVectors(Ra,Kl));if(m<0)return null;const p=d*this.direction.dot(qf.cross(Ra));if(p<0||m+p>h)return null;const g=-d*Ra.dot(Yf);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,i,r,l,u,h,d,m,p,g,x,v,y,b,C,M){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,g,x,v,y,b,C,M)}set(e,i,r,l,u,h,d,m,p,g,x,v,y,b,C,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=v,_[3]=y,_[7]=b,_[11]=C,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ts.setFromMatrixColumn(e,0).length(),u=1/ts.setFromMatrixColumn(e,1).length(),h=1/ts.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const v=h*g,y=h*x,b=d*g,C=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=y+b*p,i[5]=v-C*p,i[9]=-d*m,i[2]=C-v*p,i[6]=b+y*p,i[10]=h*m}else if(e.order==="YXZ"){const v=m*g,y=m*x,b=p*g,C=p*x;i[0]=v+C*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=y*d-b,i[6]=C+v*d,i[10]=h*m}else if(e.order==="ZXY"){const v=m*g,y=m*x,b=p*g,C=p*x;i[0]=v-C*d,i[4]=-h*x,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*g,i[9]=C-v*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const v=h*g,y=h*x,b=d*g,C=d*x;i[0]=m*g,i[4]=b*p-y,i[8]=v*p+C,i[1]=m*x,i[5]=C*p+v,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const v=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*g,i[4]=C-v*x,i[8]=b*x+y,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*x+b,i[10]=v-C*x}else if(e.order==="XZY"){const v=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=v*x+C,i[5]=h*g,i[9]=y*x-b,i[2]=b*x-y,i[6]=d*g,i[10]=C*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lM,e,cM)}lookAt(e,i,r){const l=this.elements;return Wn.subVectors(e,i),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Ca.crossVectors(r,Wn),Ca.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Ca.crossVectors(r,Wn)),Ca.normalize(),Ql.crossVectors(Wn,Ca),l[0]=Ca.x,l[4]=Ql.x,l[8]=Wn.x,l[1]=Ca.y,l[5]=Ql.y,l[9]=Wn.y,l[2]=Ca.z,l[6]=Ql.z,l[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],x=r[5],v=r[9],y=r[13],b=r[2],C=r[6],M=r[10],_=r[14],P=r[3],O=r[7],L=r[11],H=r[15],G=l[0],B=l[4],K=l[8],w=l[12],R=l[1],F=l[5],ct=l[9],it=l[13],mt=l[2],ht=l[6],W=l[10],at=l[14],j=l[3],xt=l[7],U=l[11],nt=l[15];return u[0]=h*G+d*R+m*mt+p*j,u[4]=h*B+d*F+m*ht+p*xt,u[8]=h*K+d*ct+m*W+p*U,u[12]=h*w+d*it+m*at+p*nt,u[1]=g*G+x*R+v*mt+y*j,u[5]=g*B+x*F+v*ht+y*xt,u[9]=g*K+x*ct+v*W+y*U,u[13]=g*w+x*it+v*at+y*nt,u[2]=b*G+C*R+M*mt+_*j,u[6]=b*B+C*F+M*ht+_*xt,u[10]=b*K+C*ct+M*W+_*U,u[14]=b*w+C*it+M*at+_*nt,u[3]=P*G+O*R+L*mt+H*j,u[7]=P*B+O*F+L*ht+H*xt,u[11]=P*K+O*ct+L*W+H*U,u[15]=P*w+O*it+L*at+H*nt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],x=e[6],v=e[10],y=e[14],b=e[3],C=e[7],M=e[11],_=e[15];return b*(+u*m*x-l*p*x-u*d*v+r*p*v+l*d*y-r*m*y)+C*(+i*m*y-i*p*v+u*h*v-l*h*y+l*p*g-u*m*g)+M*(+i*p*x-i*d*y-u*h*x+r*h*y+u*d*g-r*p*g)+_*(-l*d*g-i*m*x+i*d*v+l*h*x-r*h*v+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=e[9],v=e[10],y=e[11],b=e[12],C=e[13],M=e[14],_=e[15],P=x*M*p-C*v*p+C*m*y-d*M*y-x*m*_+d*v*_,O=b*v*p-g*M*p-b*m*y+h*M*y+g*m*_-h*v*_,L=g*C*p-b*x*p+b*d*y-h*C*y-g*d*_+h*x*_,H=b*x*m-g*C*m-b*d*v+h*C*v+g*d*M-h*x*M,G=i*P+r*O+l*L+u*H;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/G;return e[0]=P*B,e[1]=(C*v*u-x*M*u-C*l*y+r*M*y+x*l*_-r*v*_)*B,e[2]=(d*M*u-C*m*u+C*l*p-r*M*p-d*l*_+r*m*_)*B,e[3]=(x*m*u-d*v*u-x*l*p+r*v*p+d*l*y-r*m*y)*B,e[4]=O*B,e[5]=(g*M*u-b*v*u+b*l*y-i*M*y-g*l*_+i*v*_)*B,e[6]=(b*m*u-h*M*u-b*l*p+i*M*p+h*l*_-i*m*_)*B,e[7]=(h*v*u-g*m*u+g*l*p-i*v*p-h*l*y+i*m*y)*B,e[8]=L*B,e[9]=(b*x*u-g*C*u-b*r*y+i*C*y+g*r*_-i*x*_)*B,e[10]=(h*C*u-b*d*u+b*r*p-i*C*p-h*r*_+i*d*_)*B,e[11]=(g*d*u-h*x*u-g*r*p+i*x*p+h*r*y-i*d*y)*B,e[12]=H*B,e[13]=(g*C*l-b*x*l+b*r*v-i*C*v-g*r*M+i*x*M)*B,e[14]=(b*d*l-h*C*l-b*r*m+i*C*m+h*r*M-i*d*M)*B,e[15]=(h*x*l-g*d*l+g*r*m-i*x*m-h*r*v+i*d*v)*B,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,x=d+d,v=u*p,y=u*g,b=u*x,C=h*g,M=h*x,_=d*x,P=m*p,O=m*g,L=m*x,H=r.x,G=r.y,B=r.z;return l[0]=(1-(C+_))*H,l[1]=(y+L)*H,l[2]=(b-O)*H,l[3]=0,l[4]=(y-L)*G,l[5]=(1-(v+_))*G,l[6]=(M+P)*G,l[7]=0,l[8]=(b+O)*B,l[9]=(M-P)*B,l[10]=(1-(v+C))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ts.set(l[0],l[1],l[2]).length();const h=ts.set(l[4],l[5],l[6]).length(),d=ts.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],di.copy(this);const p=1/u,g=1/h,x=1/d;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=x,di.elements[9]*=x,di.elements[10]*=x,i.setFromRotationMatrix(di),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=Ji){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),x=(i+e)/(i-e),v=(r+l)/(r-l);let y,b;if(d===Ji)y=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===yc)y=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=Ji){const m=this.elements,p=1/(i-e),g=1/(r-l),x=1/(h-u),v=(i+e)*p,y=(r+l)*g;let b,C;if(d===Ji)b=(h+u)*x,C=-2*x;else if(d===yc)b=u*x,C=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=C,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ts=new rt,di=new Ze,lM=new rt(0,0,0),cM=new rt(1,1,1),Ca=new rt,Ql=new rt,Wn=new rt,t_=new Ze,e_=new Oo;class na{constructor(e=0,i=0,r=0,l=na.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-me(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return t_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(t_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return e_.setFromEuler(this),this.setFromQuaternion(e_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}na.DEFAULT_ORDER="XYZ";class rv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uM=0;const n_=new rt,es=new Oo,qi=new Ze,Jl=new rt,Ao=new rt,fM=new rt,hM=new Oo,i_=new rt(1,0,0),a_=new rt(0,1,0),r_=new rt(0,0,1),s_={type:"added"},dM={type:"removed"},ns={type:"childadded",child:null},jf={type:"childremoved",child:null};class Fn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new rt,i=new na,r=new Oo,l=new rt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new le}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return es.setFromAxisAngle(e,i),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,i){return es.setFromAxisAngle(e,i),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(i_,e)}rotateY(e){return this.rotateOnAxis(a_,e)}rotateZ(e){return this.rotateOnAxis(r_,e)}translateOnAxis(e,i){return n_.copy(e).applyQuaternion(this.quaternion),this.position.add(n_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(i_,e)}translateY(e){return this.translateOnAxis(a_,e)}translateZ(e){return this.translateOnAxis(r_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Jl.copy(e):Jl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Ao,Jl,this.up):qi.lookAt(Jl,Ao,this.up),this.quaternion.setFromRotationMatrix(qi),l&&(qi.extractRotation(l.matrixWorld),es.setFromRotationMatrix(qi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(s_),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(dM),jf.child=e,this.dispatchEvent(jf),jf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(s_),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,fM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,hM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),x=h(e.shapes),v=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Fn.DEFAULT_UP=new rt(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new rt,Yi=new rt,Zf=new rt,ji=new rt,is=new rt,as=new rt,o_=new rt,Kf=new rt,Qf=new rt,Jf=new rt,$f=new je,th=new je,eh=new je;class mi{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),pi.subVectors(e,i),l.cross(pi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){pi.subVectors(l,i),Yi.subVectors(r,i),Zf.subVectors(e,i);const h=pi.dot(pi),d=pi.dot(Yi),m=pi.dot(Zf),p=Yi.dot(Yi),g=Yi.dot(Zf),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const v=1/x,y=(p*m-d*g)*v,b=(h*g-d*m)*v;return u.set(1-y-b,b,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ji.x),m.addScaledVector(h,ji.y),m.addScaledVector(d,ji.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return $f.setScalar(0),th.setScalar(0),eh.setScalar(0),$f.fromBufferAttribute(e,i),th.fromBufferAttribute(e,r),eh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector($f,u.x),h.addScaledVector(th,u.y),h.addScaledVector(eh,u.z),h}static isFrontFacing(e,i,r,l){return pi.subVectors(r,i),Yi.subVectors(e,i),pi.cross(Yi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),pi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;is.subVectors(l,r),as.subVectors(u,r),Kf.subVectors(e,r);const m=is.dot(Kf),p=as.dot(Kf);if(m<=0&&p<=0)return i.copy(r);Qf.subVectors(e,l);const g=is.dot(Qf),x=as.dot(Qf);if(g>=0&&x<=g)return i.copy(l);const v=m*x-g*p;if(v<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(is,h);Jf.subVectors(e,u);const y=is.dot(Jf),b=as.dot(Jf);if(b>=0&&y<=b)return i.copy(u);const C=y*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(as,d);const M=g*b-y*x;if(M<=0&&x-g>=0&&y-b>=0)return o_.subVectors(u,l),d=(x-g)/(x-g+(y-b)),i.copy(l).addScaledVector(o_,d);const _=1/(M+C+v);return h=C*_,d=v*_,i.copy(r).addScaledVector(is,h).addScaledVector(as,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wa={h:0,s:0,l:0},$l={h:0,s:0,l:0};function nh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class we{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ae.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ae.workingColorSpace){if(e=ud(e,1),i=me(i,0,1),r=me(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=nh(h,u,e+1/3),this.g=nh(h,u,e),this.b=nh(h,u,e-1/3)}return Ae.toWorkingColorSpace(this,l),this}setStyle(e,i=ri){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ri){const r=sv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Ae.fromWorkingColorSpace(En.copy(this),e),Math.round(me(En.r*255,0,255))*65536+Math.round(me(En.g*255,0,255))*256+Math.round(me(En.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.fromWorkingColorSpace(En.copy(this),i);const r=En.r,l=En.g,u=En.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(En.copy(this),i),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=ri){Ae.fromWorkingColorSpace(En.copy(this),e);const i=En.r,r=En.g,l=En.b;return e!==ri?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(wa),this.setHSL(wa.h+e,wa.s+i,wa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(wa),e.getHSL($l);const r=Do(wa.h,$l.h,i),l=Do(wa.s,$l.s,i),u=Do(wa.l,$l.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new we;we.NAMES=sv;let pM=0;class zo extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=ds,this.side=Pa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(r.blending=this.blending),this.side!==Pa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==mh&&(r.blendSrc=this.blendSrc),this.blendDst!==gh&&(r.blendDst=this.blendDst),this.blendEquation!==fr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ov extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new na,this.combine=V_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $e=new rt,tc=new ze;let mM=0;class Ai{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Yg,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)tc.fromBufferAttribute(this,i),tc.applyMatrix3(e),this.setXY(i,tc.x,tc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.applyMatrix3(e),this.setXYZ(i,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.applyMatrix4(e),this.setXYZ(i,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.applyNormalMatrix(e),this.setXYZ(i,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.transformDirection(e),this.setXYZ(i,$e.x,$e.y,$e.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=us(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Dn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=us(i,this.array)),i}setX(e,i){return this.normalized&&(i=Dn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=us(i,this.array)),i}setY(e,i){return this.normalized&&(i=Dn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=us(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Dn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=us(i,this.array)),i}setW(e,i){return this.normalized&&(i=Dn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Dn(i,this.array),r=Dn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Dn(i,this.array),r=Dn(r,this.array),l=Dn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Dn(i,this.array),r=Dn(r,this.array),l=Dn(l,this.array),u=Dn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yg&&(e.usage=this.usage),e}}class lv extends Ai{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class cv extends Ai{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Oa extends Ai{constructor(e,i,r){super(new Float32Array(e),i,r)}}let gM=0;const ai=new Ze,ih=new Fn,rs=new rt,qn=new Po,Ro=new Po,dn=new rt;class ia extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ev(e)?cv:lv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new le().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,i,r){return ai.makeTranslation(e,i,r),this.applyMatrix4(ai),this}scale(e,i,r){return ai.makeScale(e,i,r),this.applyMatrix4(ai),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Oa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];qn.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Ro.setFromBufferAttribute(d),this.morphTargetsRelative?(dn.addVectors(qn.min,Ro.min),qn.expandByPoint(dn),dn.addVectors(qn.max,Ro.max),qn.expandByPoint(dn)):(qn.expandByPoint(Ro.min),qn.expandByPoint(Ro.max))}qn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)dn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(dn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)dn.fromBufferAttribute(d,p),m&&(rs.fromBufferAttribute(e,p),dn.add(rs)),l=Math.max(l,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<r.count;K++)d[K]=new rt,m[K]=new rt;const p=new rt,g=new rt,x=new rt,v=new ze,y=new ze,b=new ze,C=new rt,M=new rt;function _(K,w,R){p.fromBufferAttribute(r,K),g.fromBufferAttribute(r,w),x.fromBufferAttribute(r,R),v.fromBufferAttribute(u,K),y.fromBufferAttribute(u,w),b.fromBufferAttribute(u,R),g.sub(p),x.sub(p),y.sub(v),b.sub(v);const F=1/(y.x*b.y-b.x*y.y);isFinite(F)&&(C.copy(g).multiplyScalar(b.y).addScaledVector(x,-y.y).multiplyScalar(F),M.copy(x).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(F),d[K].add(C),d[w].add(C),d[R].add(C),m[K].add(M),m[w].add(M),m[R].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let K=0,w=P.length;K<w;++K){const R=P[K],F=R.start,ct=R.count;for(let it=F,mt=F+ct;it<mt;it+=3)_(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const O=new rt,L=new rt,H=new rt,G=new rt;function B(K){H.fromBufferAttribute(l,K),G.copy(H);const w=d[K];O.copy(w),O.sub(H.multiplyScalar(H.dot(w))).normalize(),L.crossVectors(G,w);const F=L.dot(m[K])<0?-1:1;h.setXYZW(K,O.x,O.y,O.z,F)}for(let K=0,w=P.length;K<w;++K){const R=P[K],F=R.start,ct=R.count;for(let it=F,mt=F+ct;it<mt;it+=3)B(e.getX(it+0)),B(e.getX(it+1)),B(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new rt,u=new rt,h=new rt,d=new rt,m=new rt,p=new rt,g=new rt,x=new rt;if(e)for(let v=0,y=e.count;v<y;v+=3){const b=e.getX(v+0),C=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)dn.fromBufferAttribute(e,i),dn.normalize(),e.setXYZ(i,dn.x,dn.y,dn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,x=d.normalized,v=new p.constructor(m.length*g);let y=0,b=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*g;for(let _=0;_<g;_++)v[b++]=p[y++]}return new Ai(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ia,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,x=p.length;g<x;g++){const v=p[g],y=e(v,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,v=p.length;x<v;x++){const y=p[x];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],x=u[p];for(let v=0,y=x.length;v<y;v++)g.push(x[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const l_=new Ze,rr=new av,ec=new bc,c_=new rt,nc=new rt,ic=new rt,ac=new rt,ah=new rt,rc=new rt,u_=new rt,sc=new rt;class $i extends Fn{constructor(e=new ia,i=new ov){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){rc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],x=u[m];g!==0&&(ah.fromBufferAttribute(x,e),h?rc.addScaledVector(ah,g):rc.addScaledVector(ah.sub(i),g))}i.add(rc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ec.copy(r.boundingSphere),ec.applyMatrix4(u),rr.copy(e.ray).recast(e.near),!(ec.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ec,c_)===null||rr.origin.distanceToSquared(c_)>(e.far-e.near)**2))&&(l_.copy(u).invert(),rr.copy(e.ray).applyMatrix4(l_),!(r.boundingBox!==null&&rr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,rr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,v=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=v.length;b<C;b++){const M=v[b],_=h[M.materialIndex],P=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let L=P,H=O;L<H;L+=3){const G=d.getX(L),B=d.getX(L+1),K=d.getX(L+2);l=oc(this,_,e,r,p,g,x,G,B,K),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=b,_=C;M<_;M+=3){const P=d.getX(M),O=d.getX(M+1),L=d.getX(M+2);l=oc(this,h,e,r,p,g,x,P,O,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=v.length;b<C;b++){const M=v[b],_=h[M.materialIndex],P=Math.max(M.start,y.start),O=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let L=P,H=O;L<H;L+=3){const G=L,B=L+1,K=L+2;l=oc(this,_,e,r,p,g,x,G,B,K),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=b,_=C;M<_;M+=3){const P=M,O=M+1,L=M+2;l=oc(this,h,e,r,p,g,x,P,O,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function _M(s,e,i,r,l,u,h,d){let m;if(e.side===zn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Pa,d),m===null)return null;sc.copy(d),sc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(sc);return p<i.near||p>i.far?null:{distance:p,point:sc.clone(),object:s}}function oc(s,e,i,r,l,u,h,d,m,p){s.getVertexPosition(d,nc),s.getVertexPosition(m,ic),s.getVertexPosition(p,ac);const g=_M(s,e,i,r,nc,ic,ac,u_);if(g){const x=new rt;mi.getBarycoord(u_,nc,ic,ac,x),l&&(g.uv=mi.getInterpolatedAttribute(l,d,m,p,x,new ze)),u&&(g.uv1=mi.getInterpolatedAttribute(u,d,m,p,x,new ze)),h&&(g.normal=mi.getInterpolatedAttribute(h,d,m,p,x,new rt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new rt,materialIndex:0};mi.getNormal(nc,ic,ac,v.normal),g.face=v,g.barycoord=x}return g}class Bo extends ia{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],x=[];let v=0,y=0;b("z","y","x",-1,-1,r,i,e,h,u,0),b("z","y","x",1,-1,r,i,-e,h,u,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Oa(p,3)),this.setAttribute("normal",new Oa(g,3)),this.setAttribute("uv",new Oa(x,2));function b(C,M,_,P,O,L,H,G,B,K,w){const R=L/B,F=H/K,ct=L/2,it=H/2,mt=G/2,ht=B+1,W=K+1;let at=0,j=0;const xt=new rt;for(let U=0;U<W;U++){const nt=U*F-it;for(let Et=0;Et<ht;Et++){const At=Et*R-ct;xt[C]=At*P,xt[M]=nt*O,xt[_]=mt,p.push(xt.x,xt.y,xt.z),xt[C]=0,xt[M]=0,xt[_]=G>0?1:-1,g.push(xt.x,xt.y,xt.z),x.push(Et/B),x.push(1-U/K),at+=1}}for(let U=0;U<K;U++)for(let nt=0;nt<B;nt++){const Et=v+nt+ht*U,At=v+nt+ht*(U+1),q=v+(nt+1)+ht*(U+1),dt=v+(nt+1)+ht*U;m.push(Et,At,dt),m.push(At,q,dt),j+=6}d.addGroup(y,j,w),y+=j,v+=at}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Un(s){const e={};for(let i=0;i<s.length;i++){const r=ys(s[i]);for(const l in r)e[l]=r[l]}return e}function vM(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function uv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const SM={clone:ys,merge:Un};var xM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class za extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xM,this.fragmentShader=MM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=vM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class fv extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Ji}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Da=new rt,f_=new ze,h_=new ze;class si extends fv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Da.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Da.x,Da.y).multiplyScalar(-e/Da.z),Da.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Da.x,Da.y).multiplyScalar(-e/Da.z)}getViewSize(e,i){return this.getViewBounds(e,f_,h_),i.subVectors(h_,f_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(wo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ss=-90,os=1;class yM extends Fn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(ss,os,e,i);l.layers=this.layers,this.add(l);const u=new si(ss,os,e,i);u.layers=this.layers,this.add(u);const h=new si(ss,os,e,i);h.layers=this.layers,this.add(h);const d=new si(ss,os,e,i);d.layers=this.layers,this.add(d);const m=new si(ss,os,e,i);m.layers=this.layers,this.add(m);const p=new si(ss,os,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===yc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(x,v,y),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class hv extends Bn{constructor(e,i,r,l,u,h,d,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:_s,super(e,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EM extends gr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new hv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:bi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Bo(5,5,5),u=new za({name:"CubemapFromEquirect",uniforms:ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:La});u.uniforms.tEquirect.value=i;const h=new $i(l,u),d=i.minFilter;return i.minFilter===pr&&(i.minFilter=bi),new yM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class lc extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TM={type:"move"};class rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),_=this._getHandJoint(p,C);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),y=.02,b=.005;p.inputState.pinching&&v>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new lc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class bM extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new na,this.environmentIntensity=1,this.environmentRotation=new na,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const sh=new rt,AM=new rt,RM=new le;class cr{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=sh.subVectors(r,i).cross(AM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(sh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||RM.getNormalMatrix(e),l=this.coplanarPoint(sh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new bc,cc=new rt;class dv{constructor(e=new cr,i=new cr,r=new cr,l=new cr,u=new cr,h=new cr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ji){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],x=l[6],v=l[7],y=l[8],b=l[9],C=l[10],M=l[11],_=l[12],P=l[13],O=l[14],L=l[15];if(r[0].setComponents(m-u,v-p,M-y,L-_).normalize(),r[1].setComponents(m+u,v+p,M+y,L+_).normalize(),r[2].setComponents(m+h,v+g,M+b,L+P).normalize(),r[3].setComponents(m-h,v-g,M-b,L-P).normalize(),r[4].setComponents(m-d,v-x,M-C,L-O).normalize(),i===Ji)r[5].setComponents(m+d,v+x,M+C,L+O).normalize();else if(i===yc)r[5].setComponents(d,x,C,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(cc.x=l.normal.x>0?e.max.x:e.min.x,cc.y=l.normal.y>0?e.max.y:e.min.y,cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pv extends zo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const d_=new Ze,td=new av,uc=new bc,fc=new rt;class CM extends Fn{constructor(e=new ia,i=new pv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),uc.copy(r.boundingSphere),uc.applyMatrix4(l),uc.radius+=u,e.ray.intersectsSphere(uc)===!1)return;d_.copy(l).invert(),td.copy(e.ray).applyMatrix4(d_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,x=r.attributes.position;if(p!==null){const v=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let b=v,C=y;b<C;b++){const M=p.getX(b);fc.fromBufferAttribute(x,M),p_(fc,M,m,l,e,i,this)}}else{const v=Math.max(0,h.start),y=Math.min(x.count,h.start+h.count);for(let b=v,C=y;b<C;b++)fc.fromBufferAttribute(x,b),p_(fc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function p_(s,e,i,r,l,u,h){const d=td.distanceSqToPoint(s);if(d<i){const m=new rt;td.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class mv extends Bn{constructor(e,i,r,l,u,h,d,m,p,g=ps){if(g!==ps&&g!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===ps&&(r=mr),r===void 0&&g===xs&&(r=Ss),super(null,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:_i,this.minFilter=m!==void 0?m:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ac extends ia{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,x=e/d,v=i/m,y=[],b=[],C=[],M=[];for(let _=0;_<g;_++){const P=_*v-h;for(let O=0;O<p;O++){const L=O*x-u;b.push(L,-P,0),C.push(0,0,1),M.push(O/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<d;P++){const O=P+p*_,L=P+p*(_+1),H=P+1+p*(_+1),G=P+1+p*_;y.push(O,L,G),y.push(L,H,G)}this.setIndex(y),this.setAttribute("position",new Oa(b,3)),this.setAttribute("normal",new Oa(C,3)),this.setAttribute("uv",new Oa(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.width,e.height,e.widthSegments,e.heightSegments)}}class wM extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DM extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class UM extends fv{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class LM extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function m_(s,e,i,r){const l=NM(r);switch(i){case Y_:return s*e;case Z_:return s*e;case K_:return s*e*2;case Q_:return s*e/l.components*l.byteLength;case od:return s*e/l.components*l.byteLength;case J_:return s*e*2/l.components*l.byteLength;case ld:return s*e*2/l.components*l.byteLength;case j_:return s*e*3/l.components*l.byteLength;case gi:return s*e*4/l.components*l.byteLength;case cd:return s*e*4/l.components*l.byteLength;case mc:case gc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _c:case vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wh:case Uh:return Math.max(s,16)*Math.max(e,8)/4;case Ch:case Dh:return Math.max(s,8)*Math.max(e,8)/2;case Lh:case Nh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case kh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case qh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Sc:case Zh:case Kh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $_:case Qh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jh:case $h:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function NM(s){switch(s){case ea:case X_:return{byteLength:1,components:1};case Uo:case W_:case No:return{byteLength:2,components:1};case rd:case sd:return{byteLength:2,components:4};case mr:case ad:case Qi:return{byteLength:4,components:1};case q_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=id);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gv(){let s=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function OM(s){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,g);else{x.sort((y,b)=>y.start-b.start);let v=0;for(let y=1;y<x.length;y++){const b=x[v],C=x[y];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++v,x[v]=C)}x.length=v+1;for(let y=0,b=x.length;y<b;y++){const C=x[y];s.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var PM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,VM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,XM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ay=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ry=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ly=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fy="gl_FragColor = linearToOutputTexel( gl_FragColor );",hy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,py=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,my=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_y=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,My=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,by=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ay=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ry=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ly=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ny=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Oy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,By=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ky=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$y=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,SE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ME=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,TE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,GE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$E=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:PM,alphahash_pars_fragment:zM,alphamap_fragment:BM,alphamap_pars_fragment:FM,alphatest_fragment:IM,alphatest_pars_fragment:HM,aomap_fragment:GM,aomap_pars_fragment:VM,batching_pars_vertex:kM,batching_vertex:XM,begin_vertex:WM,beginnormal_vertex:qM,bsdfs:YM,iridescence_fragment:jM,bumpmap_pars_fragment:ZM,clipping_planes_fragment:KM,clipping_planes_pars_fragment:QM,clipping_planes_pars_vertex:JM,clipping_planes_vertex:$M,color_fragment:ty,color_pars_fragment:ey,color_pars_vertex:ny,color_vertex:iy,common:ay,cube_uv_reflection_fragment:ry,defaultnormal_vertex:sy,displacementmap_pars_vertex:oy,displacementmap_vertex:ly,emissivemap_fragment:cy,emissivemap_pars_fragment:uy,colorspace_fragment:fy,colorspace_pars_fragment:hy,envmap_fragment:dy,envmap_common_pars_fragment:py,envmap_pars_fragment:my,envmap_pars_vertex:gy,envmap_physical_pars_fragment:Ry,envmap_vertex:_y,fog_vertex:vy,fog_pars_vertex:Sy,fog_fragment:xy,fog_pars_fragment:My,gradientmap_pars_fragment:yy,lightmap_pars_fragment:Ey,lights_lambert_fragment:Ty,lights_lambert_pars_fragment:by,lights_pars_begin:Ay,lights_toon_fragment:Cy,lights_toon_pars_fragment:wy,lights_phong_fragment:Dy,lights_phong_pars_fragment:Uy,lights_physical_fragment:Ly,lights_physical_pars_fragment:Ny,lights_fragment_begin:Oy,lights_fragment_maps:Py,lights_fragment_end:zy,logdepthbuf_fragment:By,logdepthbuf_pars_fragment:Fy,logdepthbuf_pars_vertex:Iy,logdepthbuf_vertex:Hy,map_fragment:Gy,map_pars_fragment:Vy,map_particle_fragment:ky,map_particle_pars_fragment:Xy,metalnessmap_fragment:Wy,metalnessmap_pars_fragment:qy,morphinstance_vertex:Yy,morphcolor_vertex:jy,morphnormal_vertex:Zy,morphtarget_pars_vertex:Ky,morphtarget_vertex:Qy,normal_fragment_begin:Jy,normal_fragment_maps:$y,normal_pars_fragment:tE,normal_pars_vertex:eE,normal_vertex:nE,normalmap_pars_fragment:iE,clearcoat_normal_fragment_begin:aE,clearcoat_normal_fragment_maps:rE,clearcoat_pars_fragment:sE,iridescence_pars_fragment:oE,opaque_fragment:lE,packing:cE,premultiplied_alpha_fragment:uE,project_vertex:fE,dithering_fragment:hE,dithering_pars_fragment:dE,roughnessmap_fragment:pE,roughnessmap_pars_fragment:mE,shadowmap_pars_fragment:gE,shadowmap_pars_vertex:_E,shadowmap_vertex:vE,shadowmask_pars_fragment:SE,skinbase_vertex:xE,skinning_pars_vertex:ME,skinning_vertex:yE,skinnormal_vertex:EE,specularmap_fragment:TE,specularmap_pars_fragment:bE,tonemapping_fragment:AE,tonemapping_pars_fragment:RE,transmission_fragment:CE,transmission_pars_fragment:wE,uv_pars_fragment:DE,uv_pars_vertex:UE,uv_vertex:LE,worldpos_vertex:NE,background_vert:OE,background_frag:PE,backgroundCube_vert:zE,backgroundCube_frag:BE,cube_vert:FE,cube_frag:IE,depth_vert:HE,depth_frag:GE,distanceRGBA_vert:VE,distanceRGBA_frag:kE,equirect_vert:XE,equirect_frag:WE,linedashed_vert:qE,linedashed_frag:YE,meshbasic_vert:jE,meshbasic_frag:ZE,meshlambert_vert:KE,meshlambert_frag:QE,meshmatcap_vert:JE,meshmatcap_frag:$E,meshnormal_vert:tT,meshnormal_frag:eT,meshphong_vert:nT,meshphong_frag:iT,meshphysical_vert:aT,meshphysical_frag:rT,meshtoon_vert:sT,meshtoon_frag:oT,points_vert:lT,points_frag:cT,shadow_vert:uT,shadow_frag:fT,sprite_vert:hT,sprite_frag:dT},Ut={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ti={basic:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new we(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Un([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Un([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new we(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Un([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Un([Ut.points,Ut.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Un([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Un([Ut.common,Ut.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Un([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Un([Ut.sprite,Ut.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Un([Ut.common,Ut.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Un([Ut.lights,Ut.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ti.physical={uniforms:Un([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const hc={r:0,b:0,g:0},or=new na,pT=new Ze;function mT(s,e,i,r,l,u,h){const d=new we(0);let m=u===!0?0:1,p,g,x=null,v=0,y=null;function b(O){let L=O.isScene===!0?O.background:null;return L&&L.isTexture&&(L=(O.backgroundBlurriness>0?i:e).get(L)),L}function C(O){let L=!1;const H=b(O);H===null?_(d,m):H&&H.isColor&&(_(H,1),L=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(O,L){const H=b(L);H&&(H.isCubeTexture||H.mapping===Tc)?(g===void 0&&(g=new $i(new Bo(1,1,1),new za({name:"BackgroundCubeMaterial",uniforms:ys(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,B,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),or.copy(L.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(pT.makeRotationFromEuler(or)),g.material.toneMapped=Ae.getTransfer(H.colorSpace)!==Oe,(x!==H||v!==H.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,x=H,v=H.version,y=s.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new $i(new Ac(2,2),new za({name:"BackgroundMaterial",uniforms:ys(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Pa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(H.colorSpace)!==Oe,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(x!==H||v!==H.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,x=H,v=H.version,y=s.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,L){O.getRGB(hc,uv(s)),r.buffers.color.setClear(hc.r,hc.g,hc.b,L,h)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,L=1){d.set(O),m=L,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(d,m)},render:C,addToRenderList:M,dispose:P}}function gT(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,h=!1;function d(R,F,ct,it,mt){let ht=!1;const W=x(it,ct,F);u!==W&&(u=W,p(u.object)),ht=y(R,it,ct,mt),ht&&b(R,it,ct,mt),mt!==null&&e.update(mt,s.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,L(R,F,ct,it),mt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function x(R,F,ct){const it=ct.wireframe===!0;let mt=r[R.id];mt===void 0&&(mt={},r[R.id]=mt);let ht=mt[F.id];ht===void 0&&(ht={},mt[F.id]=ht);let W=ht[it];return W===void 0&&(W=v(m()),ht[it]=W),W}function v(R){const F=[],ct=[],it=[];for(let mt=0;mt<i;mt++)F[mt]=0,ct[mt]=0,it[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ct,attributeDivisors:it,object:R,attributes:{},index:null}}function y(R,F,ct,it){const mt=u.attributes,ht=F.attributes;let W=0;const at=ct.getAttributes();for(const j in at)if(at[j].location>=0){const U=mt[j];let nt=ht[j];if(nt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor)),U===void 0||U.attribute!==nt||nt&&U.data!==nt.data)return!0;W++}return u.attributesNum!==W||u.index!==it}function b(R,F,ct,it){const mt={},ht=F.attributes;let W=0;const at=ct.getAttributes();for(const j in at)if(at[j].location>=0){let U=ht[j];U===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(U=R.instanceColor));const nt={};nt.attribute=U,U&&U.data&&(nt.data=U.data),mt[j]=nt,W++}u.attributes=mt,u.attributesNum=W,u.index=it}function C(){const R=u.newAttributes;for(let F=0,ct=R.length;F<ct;F++)R[F]=0}function M(R){_(R,0)}function _(R,F){const ct=u.newAttributes,it=u.enabledAttributes,mt=u.attributeDivisors;ct[R]=1,it[R]===0&&(s.enableVertexAttribArray(R),it[R]=1),mt[R]!==F&&(s.vertexAttribDivisor(R,F),mt[R]=F)}function P(){const R=u.newAttributes,F=u.enabledAttributes;for(let ct=0,it=F.length;ct<it;ct++)F[ct]!==R[ct]&&(s.disableVertexAttribArray(ct),F[ct]=0)}function O(R,F,ct,it,mt,ht,W){W===!0?s.vertexAttribIPointer(R,F,ct,mt,ht):s.vertexAttribPointer(R,F,ct,it,mt,ht)}function L(R,F,ct,it){C();const mt=it.attributes,ht=ct.getAttributes(),W=F.defaultAttributeValues;for(const at in ht){const j=ht[at];if(j.location>=0){let xt=mt[at];if(xt===void 0&&(at==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),at==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor)),xt!==void 0){const U=xt.normalized,nt=xt.itemSize,Et=e.get(xt);if(Et===void 0)continue;const At=Et.buffer,q=Et.type,dt=Et.bytesPerElement,St=q===s.INT||q===s.UNSIGNED_INT||xt.gpuType===ad;if(xt.isInterleavedBufferAttribute){const Tt=xt.data,Rt=Tt.stride,Qt=xt.offset;if(Tt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<j.locationSize;Pt++)_(j.location+Pt,Tt.meshPerAttribute);R.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Pt=0;Pt<j.locationSize;Pt++)M(j.location+Pt);s.bindBuffer(s.ARRAY_BUFFER,At);for(let Pt=0;Pt<j.locationSize;Pt++)O(j.location+Pt,nt/j.locationSize,q,U,Rt*dt,(Qt+nt/j.locationSize*Pt)*dt,St)}else{if(xt.isInstancedBufferAttribute){for(let Tt=0;Tt<j.locationSize;Tt++)_(j.location+Tt,xt.meshPerAttribute);R.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Tt=0;Tt<j.locationSize;Tt++)M(j.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,At);for(let Tt=0;Tt<j.locationSize;Tt++)O(j.location+Tt,nt/j.locationSize,q,U,nt*dt,nt/j.locationSize*Tt*dt,St)}}else if(W!==void 0){const U=W[at];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(j.location,U);break;case 3:s.vertexAttrib3fv(j.location,U);break;case 4:s.vertexAttrib4fv(j.location,U);break;default:s.vertexAttrib1fv(j.location,U)}}}}P()}function H(){K();for(const R in r){const F=r[R];for(const ct in F){const it=F[ct];for(const mt in it)g(it[mt].object),delete it[mt];delete F[ct]}delete r[R]}}function G(R){if(r[R.id]===void 0)return;const F=r[R.id];for(const ct in F){const it=F[ct];for(const mt in it)g(it[mt].object),delete it[mt];delete F[ct]}delete r[R.id]}function B(R){for(const F in r){const ct=r[F];if(ct[R.id]===void 0)continue;const it=ct[R.id];for(const mt in it)g(it[mt].object),delete it[mt];delete ct[R.id]}}function K(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:w,dispose:H,releaseStatesOfGeometry:G,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:M,disableUnusedAttributes:P}}function _T(s,e,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function d(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let y=0;for(let b=0;b<x;b++)y+=g[b];i.update(y,r,1)}function m(p,g,x,v){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],g[b],v[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,x);let b=0;for(let C=0;C<x;C++)b+=g[C]*v[C];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function vT(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==gi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const K=B===No&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ea&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Qi&&!K)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=b>0,G=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:L,vertexTextures:H,maxSamples:G}}function ST(s){const e=this;let i=null,r=0,l=!1,u=!1;const h=new cr,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const y=x.length!==0||v||r!==0||l;return l=v,r=x.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,y){const b=x.clippingPlanes,C=x.clipIntersection,M=x.clipShadows,_=s.get(x);if(!l||b===null||b.length===0||u&&!M)u?g(null):p();else{const P=u?0:r,O=P*4;let L=_.clippingState||null;m.value=L,L=g(b,v,O,y);for(let H=0;H!==O;++H)L[H]=i[H];_.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,v,y,b){const C=x!==null?x.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const _=y+C*4,P=v.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<_)&&(M=new Float32Array(_));for(let O=0,L=y;O!==C;++O,L+=4)h.copy(x[O]).applyMatrix4(P,d),h.normal.toArray(M,L),M[L+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function xT(s){let e=new WeakMap;function i(h,d){return d===Th?h.mapping=_s:d===bh&&(h.mapping=vs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Th||d===bh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new EM(m.height);return p.fromEquirectangularTexture(s,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const hs=4,g_=[.125,.215,.35,.446,.526,.582],hr=20,oh=new UM,__=new we;let lh=null,ch=0,uh=0,fh=!1;const ur=(1+Math.sqrt(5))/2,ls=1/ur,v_=[new rt(-ur,ls,0),new rt(ur,ls,0),new rt(-ls,0,ur),new rt(ls,0,ur),new rt(0,ur,-ls),new rt(0,ur,ls),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)];class S_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lh,ch,uh),this._renderer.xr.enabled=fh,e.scissorTest=!1,dc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===_s||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:No,format:gi,colorSpace:Ms,depthBuffer:!1},l=x_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=x_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MT(u)),this._blurMaterial=yT(u,e,i)}return l}_compileMaterial(e){const i=new $i(this._lodPlanes[0],e);this._renderer.compile(i,oh)}_sceneToCubeUV(e,i,r,l){const d=new si(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,v=g.toneMapping;g.getClearColor(__),g.toneMapping=Na,g.autoClear=!1;const y=new ov({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),b=new $i(new Bo,y);let C=!1;const M=e.background;M?M.isColor&&(y.color.copy(M),e.background=null,C=!0):(y.color.copy(__),C=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):P===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const O=this._cubeSize;dc(l,P*O,_>2?O:0,O,O),g.setRenderTarget(l),C&&g.render(b,d),g.render(e,d)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=v,g.autoClear=x,e.background=M}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===_s||e.mapping===vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=M_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new $i(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;dc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,oh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=v_[(l-u-1)%v_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new $i(this._lodPlanes[l],p),v=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*hr-1),C=u/b,M=isFinite(u)?1+Math.floor(g*C):hr;M>hr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${hr}`);const _=[];let P=0;for(let B=0;B<hr;++B){const K=B/C,w=Math.exp(-K*K/2);_.push(w),B===0?P+=w:B<M&&(P+=2*w)}for(let B=0;B<_.length;B++)_[B]=_[B]/P;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=_,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:O}=this;v.dTheta.value=b,v.mipInt.value=O-r;const L=this._sizeLods[l],H=3*L*(l>O-hs?l-O+hs:0),G=4*(this._cubeSize-L);dc(i,H,G,3*L,2*L),m.setRenderTarget(i),m.render(x,oh)}}function MT(s){const e=[],i=[],r=[];let l=s;const u=s-hs+1+g_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-hs?m=g_[h-s+hs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,b=6,C=3,M=2,_=1,P=new Float32Array(C*b*y),O=new Float32Array(M*b*y),L=new Float32Array(_*b*y);for(let G=0;G<y;G++){const B=G%3*2/3-1,K=G>2?0:-1,w=[B,K,0,B+2/3,K,0,B+2/3,K+1,0,B,K,0,B+2/3,K+1,0,B,K+1,0];P.set(w,C*b*G),O.set(v,M*b*G);const R=[G,G,G,G,G,G];L.set(R,_*b*G)}const H=new ia;H.setAttribute("position",new Ai(P,C)),H.setAttribute("uv",new Ai(O,M)),H.setAttribute("faceIndex",new Ai(L,_)),e.push(H),l>hs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function x_(s,e,i){const r=new gr(s,e,i);return r.texture.mapping=Tc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function dc(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function yT(s,e,i){const r=new Float32Array(hr),l=new rt(0,1,0);return new za({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function M_(){return new za({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function y_(){return new za({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function fd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ET(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Th||m===bh,g=m===_s||m===vs;if(p||g){let x=e.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new S_(s)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new S_(s)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function TT(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&fs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function bT(s,e,i,r){const l={},u=new WeakMap;function h(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",h),delete l[v.id];const y=u.get(v);y&&(e.remove(y),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const y in v)e.update(v[y],s.ARRAY_BUFFER)}function p(x){const v=[],y=x.index,b=x.attributes.position;let C=0;if(y!==null){const P=y.array;C=y.version;for(let O=0,L=P.length;O<L;O+=3){const H=P[O+0],G=P[O+1],B=P[O+2];v.push(H,G,G,B,B,H)}}else if(b!==void 0){const P=b.array;C=b.version;for(let O=0,L=P.length/3-1;O<L;O+=3){const H=O+0,G=O+1,B=O+2;v.push(H,G,G,B,B,H)}}else return;const M=new(ev(v)?cv:lv)(v,1);M.version=C;const _=u.get(x);_&&e.remove(_),u.set(x,M)}function g(x){const v=u.get(x);if(v){const y=x.index;y!==null&&v.version<y.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function AT(s,e,i){let r;function l(v){r=v}let u,h;function d(v){u=v.type,h=v.bytesPerElement}function m(v,y){s.drawElements(r,y,u,v*h),i.update(y,r,1)}function p(v,y,b){b!==0&&(s.drawElementsInstanced(r,y,u,v*h,b),i.update(y,r,b))}function g(v,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,v,0,b);let M=0;for(let _=0;_<b;_++)M+=y[_];i.update(M,r,1)}function x(v,y,b,C){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<v.length;_++)p(v[_]/h,y[_],C[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,v,0,C,0,b);let _=0;for(let P=0;P<b;P++)_+=y[P]*C[P];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function RT(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function CT(s,e,i){const r=new WeakMap,l=new je;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let R=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;v!==void 0&&v.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let L=0;b===!0&&(L=1),C===!0&&(L=2),M===!0&&(L=3);let H=d.attributes.position.count*L,G=1;H>e.maxTextureSize&&(G=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const B=new Float32Array(H*G*4*x),K=new iv(B,H,G,x);K.type=Qi,K.needsUpdate=!0;const w=L*4;for(let F=0;F<x;F++){const ct=_[F],it=P[F],mt=O[F],ht=H*G*4*F;for(let W=0;W<ct.count;W++){const at=W*w;b===!0&&(l.fromBufferAttribute(ct,W),B[ht+at+0]=l.x,B[ht+at+1]=l.y,B[ht+at+2]=l.z,B[ht+at+3]=0),C===!0&&(l.fromBufferAttribute(it,W),B[ht+at+4]=l.x,B[ht+at+5]=l.y,B[ht+at+6]=l.z,B[ht+at+7]=0),M===!0&&(l.fromBufferAttribute(mt,W),B[ht+at+8]=l.x,B[ht+at+9]=l.y,B[ht+at+10]=l.z,B[ht+at+11]=mt.itemSize===4?l.w:1)}}v={count:x,texture:K,size:new ze(H,G)},r.set(d,v),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function wT(s,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,x=e.get(m,g);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const _v=new Bn,E_=new mv(1,1),vv=new iv,Sv=new sM,xv=new hv,T_=[],b_=[],A_=new Float32Array(16),R_=new Float32Array(9),C_=new Float32Array(4);function As(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=T_[l];if(u===void 0&&(u=new Float32Array(l),T_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,s[h].toArray(u,d)}return u}function on(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function ln(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Rc(s,e){let i=b_[e];i===void 0&&(i=new Int32Array(e),b_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function DT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function UT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;s.uniform2fv(this.addr,e),ln(i,e)}}function LT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(on(i,e))return;s.uniform3fv(this.addr,e),ln(i,e)}}function NT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;s.uniform4fv(this.addr,e),ln(i,e)}}function OT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;C_.set(r),s.uniformMatrix2fv(this.addr,!1,C_),ln(i,r)}}function PT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;R_.set(r),s.uniformMatrix3fv(this.addr,!1,R_),ln(i,r)}}function zT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;A_.set(r),s.uniformMatrix4fv(this.addr,!1,A_),ln(i,r)}}function BT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function FT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;s.uniform2iv(this.addr,e),ln(i,e)}}function IT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;s.uniform3iv(this.addr,e),ln(i,e)}}function HT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;s.uniform4iv(this.addr,e),ln(i,e)}}function GT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function VT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;s.uniform2uiv(this.addr,e),ln(i,e)}}function kT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;s.uniform3uiv(this.addr,e),ln(i,e)}}function XT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;s.uniform4uiv(this.addr,e),ln(i,e)}}function WT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(E_.compareFunction=tv,u=E_):u=_v,i.setTexture2D(e||u,l)}function qT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Sv,l)}function YT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||xv,l)}function jT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||vv,l)}function ZT(s){switch(s){case 5126:return DT;case 35664:return UT;case 35665:return LT;case 35666:return NT;case 35674:return OT;case 35675:return PT;case 35676:return zT;case 5124:case 35670:return BT;case 35667:case 35671:return FT;case 35668:case 35672:return IT;case 35669:case 35673:return HT;case 5125:return GT;case 36294:return VT;case 36295:return kT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return WT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return jT}}function KT(s,e){s.uniform1fv(this.addr,e)}function QT(s,e){const i=As(e,this.size,2);s.uniform2fv(this.addr,i)}function JT(s,e){const i=As(e,this.size,3);s.uniform3fv(this.addr,i)}function $T(s,e){const i=As(e,this.size,4);s.uniform4fv(this.addr,i)}function tb(s,e){const i=As(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function eb(s,e){const i=As(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function nb(s,e){const i=As(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function ib(s,e){s.uniform1iv(this.addr,e)}function ab(s,e){s.uniform2iv(this.addr,e)}function rb(s,e){s.uniform3iv(this.addr,e)}function sb(s,e){s.uniform4iv(this.addr,e)}function ob(s,e){s.uniform1uiv(this.addr,e)}function lb(s,e){s.uniform2uiv(this.addr,e)}function cb(s,e){s.uniform3uiv(this.addr,e)}function ub(s,e){s.uniform4uiv(this.addr,e)}function fb(s,e,i){const r=this.cache,l=e.length,u=Rc(i,l);on(r,u)||(s.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||_v,u[h])}function hb(s,e,i){const r=this.cache,l=e.length,u=Rc(i,l);on(r,u)||(s.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Sv,u[h])}function db(s,e,i){const r=this.cache,l=e.length,u=Rc(i,l);on(r,u)||(s.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||xv,u[h])}function pb(s,e,i){const r=this.cache,l=e.length,u=Rc(i,l);on(r,u)||(s.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||vv,u[h])}function mb(s){switch(s){case 5126:return KT;case 35664:return QT;case 35665:return JT;case 35666:return $T;case 35674:return tb;case 35675:return eb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return ab;case 35668:case 35672:return rb;case 35669:case 35673:return sb;case 5125:return ob;case 36294:return lb;case 36295:return cb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return pb}}class gb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=ZT(i.type)}}class _b{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=mb(i.type)}}class vb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function w_(s,e){s.seq.push(e),s.map[e.id]=e}function Sb(s,e,i){const r=s.name,l=r.length;for(hh.lastIndex=0;;){const u=hh.exec(r),h=hh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){w_(i,p===void 0?new gb(d,s,e):new _b(d,s,e));break}else{let x=i.map[d];x===void 0&&(x=new vb(d),w_(i,x)),i=x}}}class xc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Sb(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function D_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const xb=37297;let Mb=0;function yb(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const U_=new le;function Eb(s){Ae._getMatrix(U_,Ae.workingColorSpace,s);const e=`mat3( ${U_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(s)){case Mc:return[e,"LinearTransferOETF"];case Oe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function L_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+yb(s.getShaderSource(e),h)}else return l}function Tb(s,e){const i=Eb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function bb(s,e){let i;switch(e){case gx:i="Linear";break;case _x:i="Reinhard";break;case vx:i="Cineon";break;case Sx:i="ACESFilmic";break;case Mx:i="AgX";break;case yx:i="Neutral";break;case xx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const pc=new rt;function Ab(){Ae.getLuminanceCoefficients(pc);const s=pc.x.toFixed(4),e=pc.y.toFixed(4),i=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function Cb(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function wb(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(e,h),locationSize:d}}return i}function Co(s){return s!==""}function N_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function O_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Db=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(s){return s.replace(Db,Lb)}const Ub=new Map;function Lb(s,e){let i=ce[e];if(i===void 0){const r=Ub.get(e);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ed(i)}const Nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P_(s){return s.replace(Nb,Ob)}function Ob(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function z_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===G_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ZS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function zb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _s:case vs:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function Fb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case V_:e="ENVMAP_BLENDING_MULTIPLY";break;case px:e="ENVMAP_BLENDING_MIX";break;case mx:e="ENVMAP_BLENDING_ADD";break}return e}function Ib(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Hb(s,e,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Pb(i),p=zb(i),g=Bb(i),x=Fb(i),v=Ib(i),y=Rb(i),b=Cb(u),C=l.createProgram();let M,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Co).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Co).join(`
`),_.length>0&&(_+=`
`)):(M=[z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),_=[z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Na?"#define TONE_MAPPING":"",i.toneMapping!==Na?ce.tonemapping_pars_fragment:"",i.toneMapping!==Na?bb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Tb("linearToOutputTexel",i.outputColorSpace),Ab(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Co).join(`
`)),h=ed(h),h=N_(h,i),h=O_(h,i),d=ed(d),d=N_(d,i),d=O_(d,i),h=P_(h),d=P_(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=P+M+h,L=P+_+d,H=D_(l,l.VERTEX_SHADER,O),G=D_(l,l.FRAGMENT_SHADER,L);l.attachShader(C,H),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(F){if(s.debug.checkShaderErrors){const ct=l.getProgramInfoLog(C).trim(),it=l.getShaderInfoLog(H).trim(),mt=l.getShaderInfoLog(G).trim();let ht=!0,W=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ht=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,H,G);else{const at=L_(l,H,"vertex"),j=L_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ct+`
`+at+`
`+j)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(it===""||mt==="")&&(W=!1);W&&(F.diagnostics={runnable:ht,programLog:ct,vertexShader:{log:it,prefix:M},fragmentShader:{log:mt,prefix:_}})}l.deleteShader(H),l.deleteShader(G),K=new xc(l,C),w=wb(l,C)}let K;this.getUniforms=function(){return K===void 0&&B(this),K};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,xb)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Mb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=G,this}let Gb=0;class Vb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new kb(e),i.set(e,r)),r}}class kb{constructor(e){this.id=Gb++,this.code=e,this.usedTimes=0}}function Xb(s,e,i,r,l,u,h){const d=new rv,m=new Vb,p=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,R,F,ct,it){const mt=ct.fog,ht=it.geometry,W=w.isMeshStandardMaterial?ct.environment:null,at=(w.isMeshStandardMaterial?i:e).get(w.envMap||W),j=at&&at.mapping===Tc?at.image.height:null,xt=b[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const U=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,nt=U!==void 0?U.length:0;let Et=0;ht.morphAttributes.position!==void 0&&(Et=1),ht.morphAttributes.normal!==void 0&&(Et=2),ht.morphAttributes.color!==void 0&&(Et=3);let At,q,dt,St;if(xt){const ye=Ti[xt];At=ye.vertexShader,q=ye.fragmentShader}else At=w.vertexShader,q=w.fragmentShader,m.update(w),dt=m.getVertexShaderID(w),St=m.getFragmentShaderID(w);const Tt=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),Qt=it.isInstancedMesh===!0,Pt=it.isBatchedMesh===!0,Me=!!w.map,Re=!!w.matcap,ae=!!at,z=!!w.aoMap,pn=!!w.lightMap,se=!!w.bumpMap,fe=!!w.normalMap,kt=!!w.displacementMap,Ce=!!w.emissiveMap,Xt=!!w.metalnessMap,D=!!w.roughnessMap,E=w.anisotropy>0,tt=w.clearcoat>0,ut=w.dispersion>0,vt=w.iridescence>0,ft=w.sheen>0,Ht=w.transmission>0,wt=E&&!!w.anisotropyMap,zt=tt&&!!w.clearcoatMap,pe=tt&&!!w.clearcoatNormalMap,yt=tt&&!!w.clearcoatRoughnessMap,Bt=vt&&!!w.iridescenceMap,qt=vt&&!!w.iridescenceThicknessMap,Gt=ft&&!!w.sheenColorMap,Ft=ft&&!!w.sheenRoughnessMap,re=!!w.specularMap,jt=!!w.specularColorMap,De=!!w.specularIntensityMap,k=Ht&&!!w.transmissionMap,Lt=Ht&&!!w.thicknessMap,st=!!w.gradientMap,gt=!!w.alphaMap,Ct=w.alphaTest>0,Dt=!!w.alphaHash,$t=!!w.extensions;let He=Na;w.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(He=s.toneMapping);const tn={shaderID:xt,shaderType:w.type,shaderName:w.name,vertexShader:At,fragmentShader:q,defines:w.defines,customVertexShaderID:dt,customFragmentShaderID:St,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Pt,batchingColor:Pt&&it._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&it.instanceColor!==null,instancingMorph:Qt&&it.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Tt===null?s.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Ms,alphaToCoverage:!!w.alphaToCoverage,map:Me,matcap:Re,envMap:ae,envMapMode:ae&&at.mapping,envMapCubeUVHeight:j,aoMap:z,lightMap:pn,bumpMap:se,normalMap:fe,displacementMap:v&&kt,emissiveMap:Ce,normalMapObjectSpace:fe&&w.normalMapType===Rx,normalMapTangentSpace:fe&&w.normalMapType===Ax,metalnessMap:Xt,roughnessMap:D,anisotropy:E,anisotropyMap:wt,clearcoat:tt,clearcoatMap:zt,clearcoatNormalMap:pe,clearcoatRoughnessMap:yt,dispersion:ut,iridescence:vt,iridescenceMap:Bt,iridescenceThicknessMap:qt,sheen:ft,sheenColorMap:Gt,sheenRoughnessMap:Ft,specularMap:re,specularColorMap:jt,specularIntensityMap:De,transmission:Ht,transmissionMap:k,thicknessMap:Lt,gradientMap:st,opaque:w.transparent===!1&&w.blending===ds&&w.alphaToCoverage===!1,alphaMap:gt,alphaTest:Ct,alphaHash:Dt,combine:w.combine,mapUv:Me&&C(w.map.channel),aoMapUv:z&&C(w.aoMap.channel),lightMapUv:pn&&C(w.lightMap.channel),bumpMapUv:se&&C(w.bumpMap.channel),normalMapUv:fe&&C(w.normalMap.channel),displacementMapUv:kt&&C(w.displacementMap.channel),emissiveMapUv:Ce&&C(w.emissiveMap.channel),metalnessMapUv:Xt&&C(w.metalnessMap.channel),roughnessMapUv:D&&C(w.roughnessMap.channel),anisotropyMapUv:wt&&C(w.anisotropyMap.channel),clearcoatMapUv:zt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:pe&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&C(w.sheenRoughnessMap.channel),specularMapUv:re&&C(w.specularMap.channel),specularColorMapUv:jt&&C(w.specularColorMap.channel),specularIntensityMapUv:De&&C(w.specularIntensityMap.channel),transmissionMapUv:k&&C(w.transmissionMap.channel),thicknessMapUv:Lt&&C(w.thicknessMap.channel),alphaMapUv:gt&&C(w.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(fe||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!ht.attributes.uv&&(Me||gt),fog:!!mt,useFog:w.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Rt,skinning:it.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Et,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:He,decodeVideoTexture:Me&&w.map.isVideoTexture===!0&&Ae.getTransfer(w.map.colorSpace)===Oe,decodeVideoTextureEmissive:Ce&&w.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(w.emissiveMap.colorSpace)===Oe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ki,flipSided:w.side===zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$t&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&w.extensions.multiDraw===!0||Pt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function _(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)R.push(F),R.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(P(R,w),O(R,w),R.push(s.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function P(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function O(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function L(w){const R=b[w.type];let F;if(R){const ct=Ti[R];F=SM.clone(ct.uniforms)}else F=w.uniforms;return F}function H(w,R){let F;for(let ct=0,it=g.length;ct<it;ct++){const mt=g[ct];if(mt.cacheKey===R){F=mt,++F.usedTimes;break}}return F===void 0&&(F=new Hb(s,R,w,u),g.push(F)),F}function G(w){if(--w.usedTimes===0){const R=g.indexOf(w);g[R]=g[g.length-1],g.pop(),w.destroy()}}function B(w){m.remove(w)}function K(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:L,acquireProgram:H,releaseProgram:G,releaseShaderCache:B,programs:g,dispose:K}}function Wb(){let s=new WeakMap;function e(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function qb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function B_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function F_(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(x,v,y,b,C,M){let _=s[e];return _===void 0?(_={id:x.id,object:x,geometry:v,material:y,groupOrder:b,renderOrder:x.renderOrder,z:C,group:M},s[e]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=y,_.groupOrder=b,_.renderOrder=x.renderOrder,_.z=C,_.group=M),e++,_}function d(x,v,y,b,C,M){const _=h(x,v,y,b,C,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(x,v,y,b,C,M){const _=h(x,v,y,b,C,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,v){i.length>1&&i.sort(x||qb),r.length>1&&r.sort(v||B_),l.length>1&&l.sort(v||B_)}function g(){for(let x=e,v=s.length;x<v;x++){const y=s[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function Yb(){let s=new WeakMap;function e(r,l){const u=s.get(r);let h;return u===void 0?(h=new F_,s.set(r,[h])):l>=u.length?(h=new F_,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function jb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new we};break;case"SpotLight":i={position:new rt,direction:new rt,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return s[e.id]=i,i}}}function Zb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let Kb=0;function Qb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Jb(s){const e=new jb,i=Zb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,u=new Ze,h=new Ze;function d(p){let g=0,x=0,v=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,b=0,C=0,M=0,_=0,P=0,O=0,L=0,H=0,G=0,B=0;p.sort(Qb);for(let w=0,R=p.length;w<R;w++){const F=p[w],ct=F.color,it=F.intensity,mt=F.distance,ht=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=ct.r*it,x+=ct.g*it,v+=ct.b*it;else if(F.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(F.sh.coefficients[W],it);B++}else if(F.isDirectionalLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const at=F.shadow,j=i.get(F);j.shadowIntensity=at.intensity,j.shadowBias=at.bias,j.shadowNormalBias=at.normalBias,j.shadowRadius=at.radius,j.shadowMapSize=at.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=ht,r.directionalShadowMatrix[y]=F.shadow.matrix,P++}r.directional[y]=W,y++}else if(F.isSpotLight){const W=e.get(F);W.position.setFromMatrixPosition(F.matrixWorld),W.color.copy(ct).multiplyScalar(it),W.distance=mt,W.coneCos=Math.cos(F.angle),W.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),W.decay=F.decay,r.spot[C]=W;const at=F.shadow;if(F.map&&(r.spotLightMap[H]=F.map,H++,at.updateMatrices(F),F.castShadow&&G++),r.spotLightMatrix[C]=at.matrix,F.castShadow){const j=i.get(F);j.shadowIntensity=at.intensity,j.shadowBias=at.bias,j.shadowNormalBias=at.normalBias,j.shadowRadius=at.radius,j.shadowMapSize=at.mapSize,r.spotShadow[C]=j,r.spotShadowMap[C]=ht,L++}C++}else if(F.isRectAreaLight){const W=e.get(F);W.color.copy(ct).multiplyScalar(it),W.halfWidth.set(F.width*.5,0,0),W.halfHeight.set(0,F.height*.5,0),r.rectArea[M]=W,M++}else if(F.isPointLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity),W.distance=F.distance,W.decay=F.decay,F.castShadow){const at=F.shadow,j=i.get(F);j.shadowIntensity=at.intensity,j.shadowBias=at.bias,j.shadowNormalBias=at.normalBias,j.shadowRadius=at.radius,j.shadowMapSize=at.mapSize,j.shadowCameraNear=at.camera.near,j.shadowCameraFar=at.camera.far,r.pointShadow[b]=j,r.pointShadowMap[b]=ht,r.pointShadowMatrix[b]=F.shadow.matrix,O++}r.point[b]=W,b++}else if(F.isHemisphereLight){const W=e.get(F);W.skyColor.copy(F.color).multiplyScalar(it),W.groundColor.copy(F.groundColor).multiplyScalar(it),r.hemi[_]=W,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const K=r.hash;(K.directionalLength!==y||K.pointLength!==b||K.spotLength!==C||K.rectAreaLength!==M||K.hemiLength!==_||K.numDirectionalShadows!==P||K.numPointShadows!==O||K.numSpotShadows!==L||K.numSpotMaps!==H||K.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=L+H-G,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=B,K.directionalLength=y,K.pointLength=b,K.spotLength=C,K.rectAreaLength=M,K.hemiLength=_,K.numDirectionalShadows=P,K.numPointShadows=O,K.numSpotShadows=L,K.numSpotMaps=H,K.numLightProbes=B,r.version=Kb++)}function m(p,g){let x=0,v=0,y=0,b=0,C=0;const M=g.matrixWorldInverse;for(let _=0,P=p.length;_<P;_++){const O=p[_];if(O.isDirectionalLight){const L=r.directional[x];L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),x++}else if(O.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const L=r.rectArea[b];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),h.identity(),u.copy(O.matrixWorld),u.premultiply(M),h.extractRotation(u),L.halfWidth.set(O.width*.5,0,0),L.halfHeight.set(0,O.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const L=r.point[v];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),v++}else if(O.isHemisphereLight){const L=r.hemi[C];L.direction.setFromMatrixPosition(O.matrixWorld),L.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:r}}function I_(s){const e=new Jb(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function $b(s){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new I_(s),e.set(l,[d])):u>=h.length?(d=new I_(s),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const tA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nA(s,e,i){let r=new dv;const l=new ze,u=new ze,h=new je,d=new wM({depthPacking:bx}),m=new DM,p={},g=i.maxTextureSize,x={[Pa]:zn,[zn]:Pa,[Ki]:Ki},v=new za({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:tA,fragmentShader:eA}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new ia;b.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new $i(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=G_;let _=this.type;this.render=function(G,B,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const w=s.getRenderTarget(),R=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),ct=s.state;ct.setBlending(La),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const it=_!==Zi&&this.type===Zi,mt=_===Zi&&this.type!==Zi;for(let ht=0,W=G.length;ht<W;ht++){const at=G[ht],j=at.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const xt=j.getFrameExtents();if(l.multiply(xt),u.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/xt.x),l.x=u.x*xt.x,j.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/xt.y),l.y=u.y*xt.y,j.mapSize.y=u.y)),j.map===null||it===!0||mt===!0){const nt=this.type!==Zi?{minFilter:_i,magFilter:_i}:{};j.map!==null&&j.map.dispose(),j.map=new gr(l.x,l.y,nt),j.map.texture.name=at.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const U=j.getViewportCount();for(let nt=0;nt<U;nt++){const Et=j.getViewport(nt);h.set(u.x*Et.x,u.y*Et.y,u.x*Et.z,u.y*Et.w),ct.viewport(h),j.updateMatrices(at,nt),r=j.getFrustum(),L(B,K,j.camera,at,this.type)}j.isPointLightShadow!==!0&&this.type===Zi&&P(j,K),j.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(w,R,F)};function P(G,B){const K=e.update(C);v.defines.VSM_SAMPLES!==G.blurSamples&&(v.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new gr(l.x,l.y)),v.uniforms.shadow_pass.value=G.map.texture,v.uniforms.resolution.value=G.mapSize,v.uniforms.radius.value=G.radius,s.setRenderTarget(G.mapPass),s.clear(),s.renderBufferDirect(B,null,K,v,C,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,s.setRenderTarget(G.map),s.clear(),s.renderBufferDirect(B,null,K,y,C,null)}function O(G,B,K,w){let R=null;const F=K.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(F!==void 0)R=F;else if(R=K.isPointLight===!0?m:d,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ct=R.uuid,it=B.uuid;let mt=p[ct];mt===void 0&&(mt={},p[ct]=mt);let ht=mt[it];ht===void 0&&(ht=R.clone(),mt[it]=ht,B.addEventListener("dispose",H)),R=ht}if(R.visible=B.visible,R.wireframe=B.wireframe,w===Zi?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:x[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,K.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ct=s.properties.get(R);ct.light=K}return R}function L(G,B,K,w,R){if(G.visible===!1)return;if(G.layers.test(B.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===Zi)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,G.matrixWorld);const it=e.update(G),mt=G.material;if(Array.isArray(mt)){const ht=it.groups;for(let W=0,at=ht.length;W<at;W++){const j=ht[W],xt=mt[j.materialIndex];if(xt&&xt.visible){const U=O(G,xt,w,R);G.onBeforeShadow(s,G,B,K,it,U,j),s.renderBufferDirect(K,null,it,U,G,j),G.onAfterShadow(s,G,B,K,it,U,j)}}}else if(mt.visible){const ht=O(G,mt,w,R);G.onBeforeShadow(s,G,B,K,it,ht,null),s.renderBufferDirect(K,null,it,ht,G,null),G.onAfterShadow(s,G,B,K,it,ht,null)}}const ct=G.children;for(let it=0,mt=ct.length;it<mt;it++)L(ct[it],B,K,w,R)}function H(G){G.target.removeEventListener("dispose",H);for(const K in p){const w=p[K],R=G.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const iA={[_h]:vh,[Sh]:yh,[xh]:Eh,[gs]:Mh,[vh]:_h,[yh]:Sh,[Eh]:xh,[Mh]:gs};function aA(s,e){function i(){let k=!1;const Lt=new je;let st=null;const gt=new je(0,0,0,0);return{setMask:function(Ct){st!==Ct&&!k&&(s.colorMask(Ct,Ct,Ct,Ct),st=Ct)},setLocked:function(Ct){k=Ct},setClear:function(Ct,Dt,$t,He,tn){tn===!0&&(Ct*=He,Dt*=He,$t*=He),Lt.set(Ct,Dt,$t,He),gt.equals(Lt)===!1&&(s.clearColor(Ct,Dt,$t,He),gt.copy(Lt))},reset:function(){k=!1,st=null,gt.set(-1,0,0,0)}}}function r(){let k=!1,Lt=!1,st=null,gt=null,Ct=null;return{setReversed:function(Dt){if(Lt!==Dt){const $t=e.get("EXT_clip_control");Lt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const He=Ct;Ct=null,this.setClear(He)}Lt=Dt},getReversed:function(){return Lt},setTest:function(Dt){Dt?Tt(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(Dt){st!==Dt&&!k&&(s.depthMask(Dt),st=Dt)},setFunc:function(Dt){if(Lt&&(Dt=iA[Dt]),gt!==Dt){switch(Dt){case _h:s.depthFunc(s.NEVER);break;case vh:s.depthFunc(s.ALWAYS);break;case Sh:s.depthFunc(s.LESS);break;case gs:s.depthFunc(s.LEQUAL);break;case xh:s.depthFunc(s.EQUAL);break;case Mh:s.depthFunc(s.GEQUAL);break;case yh:s.depthFunc(s.GREATER);break;case Eh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=Dt}},setLocked:function(Dt){k=Dt},setClear:function(Dt){Ct!==Dt&&(Lt&&(Dt=1-Dt),s.clearDepth(Dt),Ct=Dt)},reset:function(){k=!1,st=null,gt=null,Ct=null,Lt=!1}}}function l(){let k=!1,Lt=null,st=null,gt=null,Ct=null,Dt=null,$t=null,He=null,tn=null;return{setTest:function(ye){k||(ye?Tt(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(ye){Lt!==ye&&!k&&(s.stencilMask(ye),Lt=ye)},setFunc:function(ye,Tn,bn){(st!==ye||gt!==Tn||Ct!==bn)&&(s.stencilFunc(ye,Tn,bn),st=ye,gt=Tn,Ct=bn)},setOp:function(ye,Tn,bn){(Dt!==ye||$t!==Tn||He!==bn)&&(s.stencilOp(ye,Tn,bn),Dt=ye,$t=Tn,He=bn)},setLocked:function(ye){k=ye},setClear:function(ye){tn!==ye&&(s.clearStencil(ye),tn=ye)},reset:function(){k=!1,Lt=null,st=null,gt=null,Ct=null,Dt=null,$t=null,He=null,tn=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},v=new WeakMap,y=[],b=null,C=!1,M=null,_=null,P=null,O=null,L=null,H=null,G=null,B=new we(0,0,0),K=0,w=!1,R=null,F=null,ct=null,it=null,mt=null;const ht=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,at=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=at>=1):j.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=at>=2);let xt=null,U={};const nt=s.getParameter(s.SCISSOR_BOX),Et=s.getParameter(s.VIEWPORT),At=new je().fromArray(nt),q=new je().fromArray(Et);function dt(k,Lt,st,gt){const Ct=new Uint8Array(4),Dt=s.createTexture();s.bindTexture(k,Dt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $t=0;$t<st;$t++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Lt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,Ct):s.texImage2D(Lt+$t,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ct);return Dt}const St={};St[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Tt(s.DEPTH_TEST),h.setFunc(gs),se(!1),fe(Vg),Tt(s.CULL_FACE),z(La);function Tt(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function Rt(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function Qt(k,Lt){return x[k]!==Lt?(s.bindFramebuffer(k,Lt),x[k]=Lt,k===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Lt),k===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Pt(k,Lt){let st=y,gt=!1;if(k){st=v.get(Lt),st===void 0&&(st=[],v.set(Lt,st));const Ct=k.textures;if(st.length!==Ct.length||st[0]!==s.COLOR_ATTACHMENT0){for(let Dt=0,$t=Ct.length;Dt<$t;Dt++)st[Dt]=s.COLOR_ATTACHMENT0+Dt;st.length=Ct.length,gt=!0}}else st[0]!==s.BACK&&(st[0]=s.BACK,gt=!0);gt&&s.drawBuffers(st)}function Me(k){return b!==k?(s.useProgram(k),b=k,!0):!1}const Re={[fr]:s.FUNC_ADD,[QS]:s.FUNC_SUBTRACT,[JS]:s.FUNC_REVERSE_SUBTRACT};Re[$S]=s.MIN,Re[tx]=s.MAX;const ae={[ex]:s.ZERO,[nx]:s.ONE,[ix]:s.SRC_COLOR,[mh]:s.SRC_ALPHA,[cx]:s.SRC_ALPHA_SATURATE,[ox]:s.DST_COLOR,[rx]:s.DST_ALPHA,[ax]:s.ONE_MINUS_SRC_COLOR,[gh]:s.ONE_MINUS_SRC_ALPHA,[lx]:s.ONE_MINUS_DST_COLOR,[sx]:s.ONE_MINUS_DST_ALPHA,[ux]:s.CONSTANT_COLOR,[fx]:s.ONE_MINUS_CONSTANT_COLOR,[hx]:s.CONSTANT_ALPHA,[dx]:s.ONE_MINUS_CONSTANT_ALPHA};function z(k,Lt,st,gt,Ct,Dt,$t,He,tn,ye){if(k===La){C===!0&&(Rt(s.BLEND),C=!1);return}if(C===!1&&(Tt(s.BLEND),C=!0),k!==KS){if(k!==M||ye!==w){if((_!==fr||L!==fr)&&(s.blendEquation(s.FUNC_ADD),_=fr,L=fr),ye)switch(k){case ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kg:s.blendFunc(s.ONE,s.ONE);break;case Xg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wg:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kg:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wg:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}P=null,O=null,H=null,G=null,B.set(0,0,0),K=0,M=k,w=ye}return}Ct=Ct||Lt,Dt=Dt||st,$t=$t||gt,(Lt!==_||Ct!==L)&&(s.blendEquationSeparate(Re[Lt],Re[Ct]),_=Lt,L=Ct),(st!==P||gt!==O||Dt!==H||$t!==G)&&(s.blendFuncSeparate(ae[st],ae[gt],ae[Dt],ae[$t]),P=st,O=gt,H=Dt,G=$t),(He.equals(B)===!1||tn!==K)&&(s.blendColor(He.r,He.g,He.b,tn),B.copy(He),K=tn),M=k,w=!1}function pn(k,Lt){k.side===Ki?Rt(s.CULL_FACE):Tt(s.CULL_FACE);let st=k.side===zn;Lt&&(st=!st),se(st),k.blending===ds&&k.transparent===!1?z(La):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const gt=k.stencilWrite;d.setTest(gt),gt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ce(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Tt(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function se(k){R!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),R=k)}function fe(k){k!==YS?(Tt(s.CULL_FACE),k!==F&&(k===Vg?s.cullFace(s.BACK):k===jS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),F=k}function kt(k){k!==ct&&(W&&s.lineWidth(k),ct=k)}function Ce(k,Lt,st){k?(Tt(s.POLYGON_OFFSET_FILL),(it!==Lt||mt!==st)&&(s.polygonOffset(Lt,st),it=Lt,mt=st)):Rt(s.POLYGON_OFFSET_FILL)}function Xt(k){k?Tt(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function D(k){k===void 0&&(k=s.TEXTURE0+ht-1),xt!==k&&(s.activeTexture(k),xt=k)}function E(k,Lt,st){st===void 0&&(xt===null?st=s.TEXTURE0+ht-1:st=xt);let gt=U[st];gt===void 0&&(gt={type:void 0,texture:void 0},U[st]=gt),(gt.type!==k||gt.texture!==Lt)&&(xt!==st&&(s.activeTexture(st),xt=st),s.bindTexture(k,Lt||St[k]),gt.type=k,gt.texture=Lt)}function tt(){const k=U[xt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ut(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(k){At.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),At.copy(k))}function Ft(k){q.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function re(k,Lt){let st=p.get(Lt);st===void 0&&(st=new WeakMap,p.set(Lt,st));let gt=st.get(k);gt===void 0&&(gt=s.getUniformBlockIndex(Lt,k.name),st.set(k,gt))}function jt(k,Lt){const gt=p.get(Lt).get(k);m.get(Lt)!==gt&&(s.uniformBlockBinding(Lt,gt,k.__bindingPointIndex),m.set(Lt,gt))}function De(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},xt=null,U={},x={},v=new WeakMap,y=[],b=null,C=!1,M=null,_=null,P=null,O=null,L=null,H=null,G=null,B=new we(0,0,0),K=0,w=!1,R=null,F=null,ct=null,it=null,mt=null,At.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Tt,disable:Rt,bindFramebuffer:Qt,drawBuffers:Pt,useProgram:Me,setBlending:z,setMaterial:pn,setFlipSided:se,setCullFace:fe,setLineWidth:kt,setPolygonOffset:Ce,setScissorTest:Xt,activeTexture:D,bindTexture:E,unbindTexture:tt,compressedTexImage2D:ut,compressedTexImage3D:vt,texImage2D:Bt,texImage3D:qt,updateUBOMapping:re,uniformBlockBinding:jt,texStorage2D:pe,texStorage3D:yt,texSubImage2D:ft,texSubImage3D:Ht,compressedTexSubImage2D:wt,compressedTexSubImage3D:zt,scissor:Gt,viewport:Ft,reset:De}}function rA(s,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ze,g=new WeakMap;let x;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(D,E){return y?new OffscreenCanvas(D,E):Ec("canvas")}function C(D,E,tt){let ut=1;const vt=Xt(D);if((vt.width>tt||vt.height>tt)&&(ut=tt/Math.max(vt.width,vt.height)),ut<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ft=Math.floor(ut*vt.width),Ht=Math.floor(ut*vt.height);x===void 0&&(x=b(ft,Ht));const wt=E?b(ft,Ht):x;return wt.width=ft,wt.height=Ht,wt.getContext("2d").drawImage(D,0,0,ft,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ft+"x"+Ht+")."),wt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),D;return D}function M(D){return D.generateMipmaps}function _(D){s.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(D,E,tt,ut,vt=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ft=E;if(E===s.RED&&(tt===s.FLOAT&&(ft=s.R32F),tt===s.HALF_FLOAT&&(ft=s.R16F),tt===s.UNSIGNED_BYTE&&(ft=s.R8)),E===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.R8UI),tt===s.UNSIGNED_SHORT&&(ft=s.R16UI),tt===s.UNSIGNED_INT&&(ft=s.R32UI),tt===s.BYTE&&(ft=s.R8I),tt===s.SHORT&&(ft=s.R16I),tt===s.INT&&(ft=s.R32I)),E===s.RG&&(tt===s.FLOAT&&(ft=s.RG32F),tt===s.HALF_FLOAT&&(ft=s.RG16F),tt===s.UNSIGNED_BYTE&&(ft=s.RG8)),E===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ft=s.RG16UI),tt===s.UNSIGNED_INT&&(ft=s.RG32UI),tt===s.BYTE&&(ft=s.RG8I),tt===s.SHORT&&(ft=s.RG16I),tt===s.INT&&(ft=s.RG32I)),E===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ft=s.RGB16UI),tt===s.UNSIGNED_INT&&(ft=s.RGB32UI),tt===s.BYTE&&(ft=s.RGB8I),tt===s.SHORT&&(ft=s.RGB16I),tt===s.INT&&(ft=s.RGB32I)),E===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ft=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ft=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ft=s.RGBA32UI),tt===s.BYTE&&(ft=s.RGBA8I),tt===s.SHORT&&(ft=s.RGBA16I),tt===s.INT&&(ft=s.RGBA32I)),E===s.RGB&&tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ft=s.RGB9_E5),E===s.RGBA){const Ht=vt?Mc:Ae.getTransfer(ut);tt===s.FLOAT&&(ft=s.RGBA32F),tt===s.HALF_FLOAT&&(ft=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ft=Ht===Oe?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function L(D,E){let tt;return D?E===null||E===mr||E===Ss?tt=s.DEPTH24_STENCIL8:E===Qi?tt=s.DEPTH32F_STENCIL8:E===Uo&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===mr||E===Ss?tt=s.DEPTH_COMPONENT24:E===Qi?tt=s.DEPTH_COMPONENT32F:E===Uo&&(tt=s.DEPTH_COMPONENT16),tt}function H(D,E){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==_i&&D.minFilter!==bi?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function G(D){const E=D.target;E.removeEventListener("dispose",G),K(E),E.isVideoTexture&&g.delete(E)}function B(D){const E=D.target;E.removeEventListener("dispose",B),R(E)}function K(D){const E=r.get(D);if(E.__webglInit===void 0)return;const tt=D.source,ut=v.get(tt);if(ut){const vt=ut[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&w(D),Object.keys(ut).length===0&&v.delete(tt)}r.remove(D)}function w(D){const E=r.get(D);s.deleteTexture(E.__webglTexture);const tt=D.source,ut=v.get(tt);delete ut[E.__cacheKey],h.memory.textures--}function R(D){const E=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let vt=0;vt<E.__webglFramebuffer[ut].length;vt++)s.deleteFramebuffer(E.__webglFramebuffer[ut][vt]);else s.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)s.deleteFramebuffer(E.__webglFramebuffer[ut]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=D.textures;for(let ut=0,vt=tt.length;ut<vt;ut++){const ft=r.get(tt[ut]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove(tt[ut])}r.remove(D)}let F=0;function ct(){F=0}function it(){const D=F;return D>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),F+=1,D}function mt(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ht(D,E){const tt=r.get(D);if(D.isVideoTexture&&kt(D),D.isRenderTargetTexture===!1&&D.version>0&&tt.__version!==D.version){const ut=D.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(tt,D,E);return}}i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+E)}function W(D,E){const tt=r.get(D);if(D.version>0&&tt.__version!==D.version){q(tt,D,E);return}i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+E)}function at(D,E){const tt=r.get(D);if(D.version>0&&tt.__version!==D.version){q(tt,D,E);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+E)}function j(D,E){const tt=r.get(D);if(D.version>0&&tt.__version!==D.version){dt(tt,D,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+E)}const xt={[Ah]:s.REPEAT,[dr]:s.CLAMP_TO_EDGE,[Rh]:s.MIRRORED_REPEAT},U={[_i]:s.NEAREST,[Ex]:s.NEAREST_MIPMAP_NEAREST,[Wl]:s.NEAREST_MIPMAP_LINEAR,[bi]:s.LINEAR,[Ff]:s.LINEAR_MIPMAP_NEAREST,[pr]:s.LINEAR_MIPMAP_LINEAR},nt={[Cx]:s.NEVER,[Ox]:s.ALWAYS,[wx]:s.LESS,[tv]:s.LEQUAL,[Dx]:s.EQUAL,[Nx]:s.GEQUAL,[Ux]:s.GREATER,[Lx]:s.NOTEQUAL};function Et(D,E){if(E.type===Qi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===bi||E.magFilter===Ff||E.magFilter===Wl||E.magFilter===pr||E.minFilter===bi||E.minFilter===Ff||E.minFilter===Wl||E.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,xt[E.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,xt[E.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,xt[E.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,U[E.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,nt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_i||E.minFilter!==Wl&&E.minFilter!==pr||E.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function At(D,E){let tt=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",G));const ut=E.source;let vt=v.get(ut);vt===void 0&&(vt={},v.set(ut,vt));const ft=mt(E);if(ft!==D.__cacheKey){vt[ft]===void 0&&(vt[ft]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),vt[ft].usedTimes++;const Ht=vt[D.__cacheKey];Ht!==void 0&&(vt[D.__cacheKey].usedTimes--,Ht.usedTimes===0&&w(E)),D.__cacheKey=ft,D.__webglTexture=vt[ft].texture}return tt}function q(D,E,tt){let ut=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=s.TEXTURE_3D);const vt=At(D,E),ft=E.source;i.bindTexture(ut,D.__webglTexture,s.TEXTURE0+tt);const Ht=r.get(ft);if(ft.version!==Ht.__version||vt===!0){i.activeTexture(s.TEXTURE0+tt);const wt=Ae.getPrimaries(Ae.workingColorSpace),zt=E.colorSpace===Ua?null:Ae.getPrimaries(E.colorSpace),pe=E.colorSpace===Ua||wt===zt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let yt=C(E.image,!1,l.maxTextureSize);yt=Ce(E,yt);const Bt=u.convert(E.format,E.colorSpace),qt=u.convert(E.type);let Gt=O(E.internalFormat,Bt,qt,E.colorSpace,E.isVideoTexture);Et(ut,E);let Ft;const re=E.mipmaps,jt=E.isVideoTexture!==!0,De=Ht.__version===void 0||vt===!0,k=ft.dataReady,Lt=H(E,yt);if(E.isDepthTexture)Gt=L(E.format===xs,E.type),De&&(jt?i.texStorage2D(s.TEXTURE_2D,1,Gt,yt.width,yt.height):i.texImage2D(s.TEXTURE_2D,0,Gt,yt.width,yt.height,0,Bt,qt,null));else if(E.isDataTexture)if(re.length>0){jt&&De&&i.texStorage2D(s.TEXTURE_2D,Lt,Gt,re[0].width,re[0].height);for(let st=0,gt=re.length;st<gt;st++)Ft=re[st],jt?k&&i.texSubImage2D(s.TEXTURE_2D,st,0,0,Ft.width,Ft.height,Bt,qt,Ft.data):i.texImage2D(s.TEXTURE_2D,st,Gt,Ft.width,Ft.height,0,Bt,qt,Ft.data);E.generateMipmaps=!1}else jt?(De&&i.texStorage2D(s.TEXTURE_2D,Lt,Gt,yt.width,yt.height),k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,yt.width,yt.height,Bt,qt,yt.data)):i.texImage2D(s.TEXTURE_2D,0,Gt,yt.width,yt.height,0,Bt,qt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){jt&&De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Gt,re[0].width,re[0].height,yt.depth);for(let st=0,gt=re.length;st<gt;st++)if(Ft=re[st],E.format!==gi)if(Bt!==null)if(jt){if(k)if(E.layerUpdates.size>0){const Ct=m_(Ft.width,Ft.height,E.format,E.type);for(const Dt of E.layerUpdates){const $t=Ft.data.subarray(Dt*Ct/Ft.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,Dt,Ft.width,Ft.height,1,Bt,$t)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,Ft.width,Ft.height,yt.depth,Bt,Ft.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,Gt,Ft.width,Ft.height,yt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,Ft.width,Ft.height,yt.depth,Bt,qt,Ft.data):i.texImage3D(s.TEXTURE_2D_ARRAY,st,Gt,Ft.width,Ft.height,yt.depth,0,Bt,qt,Ft.data)}else{jt&&De&&i.texStorage2D(s.TEXTURE_2D,Lt,Gt,re[0].width,re[0].height);for(let st=0,gt=re.length;st<gt;st++)Ft=re[st],E.format!==gi?Bt!==null?jt?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,Ft.width,Ft.height,Bt,Ft.data):i.compressedTexImage2D(s.TEXTURE_2D,st,Gt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?k&&i.texSubImage2D(s.TEXTURE_2D,st,0,0,Ft.width,Ft.height,Bt,qt,Ft.data):i.texImage2D(s.TEXTURE_2D,st,Gt,Ft.width,Ft.height,0,Bt,qt,Ft.data)}else if(E.isDataArrayTexture)if(jt){if(De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Gt,yt.width,yt.height,yt.depth),k)if(E.layerUpdates.size>0){const st=m_(yt.width,yt.height,E.format,E.type);for(const gt of E.layerUpdates){const Ct=yt.data.subarray(gt*st/yt.data.BYTES_PER_ELEMENT,(gt+1)*st/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,yt.width,yt.height,1,Bt,qt,Ct)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Bt,qt,yt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Gt,yt.width,yt.height,yt.depth,0,Bt,qt,yt.data);else if(E.isData3DTexture)jt?(De&&i.texStorage3D(s.TEXTURE_3D,Lt,Gt,yt.width,yt.height,yt.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Bt,qt,yt.data)):i.texImage3D(s.TEXTURE_3D,0,Gt,yt.width,yt.height,yt.depth,0,Bt,qt,yt.data);else if(E.isFramebufferTexture){if(De)if(jt)i.texStorage2D(s.TEXTURE_2D,Lt,Gt,yt.width,yt.height);else{let st=yt.width,gt=yt.height;for(let Ct=0;Ct<Lt;Ct++)i.texImage2D(s.TEXTURE_2D,Ct,Gt,st,gt,0,Bt,qt,null),st>>=1,gt>>=1}}else if(re.length>0){if(jt&&De){const st=Xt(re[0]);i.texStorage2D(s.TEXTURE_2D,Lt,Gt,st.width,st.height)}for(let st=0,gt=re.length;st<gt;st++)Ft=re[st],jt?k&&i.texSubImage2D(s.TEXTURE_2D,st,0,0,Bt,qt,Ft):i.texImage2D(s.TEXTURE_2D,st,Gt,Bt,qt,Ft);E.generateMipmaps=!1}else if(jt){if(De){const st=Xt(yt);i.texStorage2D(s.TEXTURE_2D,Lt,Gt,st.width,st.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Bt,qt,yt)}else i.texImage2D(s.TEXTURE_2D,0,Gt,Bt,qt,yt);M(E)&&_(ut),Ht.__version=ft.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function dt(D,E,tt){if(E.image.length!==6)return;const ut=At(D,E),vt=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+tt);const ft=r.get(vt);if(vt.version!==ft.__version||ut===!0){i.activeTexture(s.TEXTURE0+tt);const Ht=Ae.getPrimaries(Ae.workingColorSpace),wt=E.colorSpace===Ua?null:Ae.getPrimaries(E.colorSpace),zt=E.colorSpace===Ua||Ht===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const pe=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,Bt=[];for(let gt=0;gt<6;gt++)!pe&&!yt?Bt[gt]=C(E.image[gt],!0,l.maxCubemapSize):Bt[gt]=yt?E.image[gt].image:E.image[gt],Bt[gt]=Ce(E,Bt[gt]);const qt=Bt[0],Gt=u.convert(E.format,E.colorSpace),Ft=u.convert(E.type),re=O(E.internalFormat,Gt,Ft,E.colorSpace),jt=E.isVideoTexture!==!0,De=ft.__version===void 0||ut===!0,k=vt.dataReady;let Lt=H(E,qt);Et(s.TEXTURE_CUBE_MAP,E);let st;if(pe){jt&&De&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,re,qt.width,qt.height);for(let gt=0;gt<6;gt++){st=Bt[gt].mipmaps;for(let Ct=0;Ct<st.length;Ct++){const Dt=st[Ct];E.format!==gi?Gt!==null?jt?k&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Dt.width,Dt.height,Gt,Dt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,re,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Dt.width,Dt.height,Gt,Ft,Dt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,re,Dt.width,Dt.height,0,Gt,Ft,Dt.data)}}}else{if(st=E.mipmaps,jt&&De){st.length>0&&Lt++;const gt=Xt(Bt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,re,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(yt){jt?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Bt[gt].width,Bt[gt].height,Gt,Ft,Bt[gt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,Bt[gt].width,Bt[gt].height,0,Gt,Ft,Bt[gt].data);for(let Ct=0;Ct<st.length;Ct++){const $t=st[Ct].image[gt].image;jt?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,$t.width,$t.height,Gt,Ft,$t.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,re,$t.width,$t.height,0,Gt,Ft,$t.data)}}else{jt?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Gt,Ft,Bt[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,Gt,Ft,Bt[gt]);for(let Ct=0;Ct<st.length;Ct++){const Dt=st[Ct];jt?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,Gt,Ft,Dt.image[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,re,Gt,Ft,Dt.image[gt])}}}M(E)&&_(s.TEXTURE_CUBE_MAP),ft.__version=vt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function St(D,E,tt,ut,vt,ft){const Ht=u.convert(tt.format,tt.colorSpace),wt=u.convert(tt.type),zt=O(tt.internalFormat,Ht,wt,tt.colorSpace),pe=r.get(E),yt=r.get(tt);if(yt.__renderTarget=E,!pe.__hasExternalTextures){const Bt=Math.max(1,E.width>>ft),qt=Math.max(1,E.height>>ft);vt===s.TEXTURE_3D||vt===s.TEXTURE_2D_ARRAY?i.texImage3D(vt,ft,zt,Bt,qt,E.depth,0,Ht,wt,null):i.texImage2D(vt,ft,zt,Bt,qt,0,Ht,wt,null)}i.bindFramebuffer(s.FRAMEBUFFER,D),fe(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,vt,yt.__webglTexture,0,se(E)):(vt===s.TEXTURE_2D||vt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ut,vt,yt.__webglTexture,ft),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(D,E,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,D),E.depthBuffer){const ut=E.depthTexture,vt=ut&&ut.isDepthTexture?ut.type:null,ft=L(E.stencilBuffer,vt),Ht=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=se(E);fe(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,ft,E.width,E.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,ft,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ft,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ht,s.RENDERBUFFER,D)}else{const ut=E.textures;for(let vt=0;vt<ut.length;vt++){const ft=ut[vt],Ht=u.convert(ft.format,ft.colorSpace),wt=u.convert(ft.type),zt=O(ft.internalFormat,Ht,wt,ft.colorSpace),pe=se(E);tt&&fe(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,zt,E.width,E.height):fe(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,zt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,zt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=r.get(E.depthTexture);ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const vt=ut.__webglTexture,ft=se(E);if(E.depthTexture.format===ps)fe(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0);else if(E.depthTexture.format===xs)fe(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Qt(D){const E=r.get(D),tt=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ut=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",vt)};ut.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ut}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Rt(E.__webglFramebuffer,D)}else if(tt){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=s.createRenderbuffer(),Tt(E.__webglDepthbuffer[ut],D,!1);else{const vt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[ut];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,ft)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Tt(E.__webglDepthbuffer,D,!1);else{const ut=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,vt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,vt)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(D,E,tt){const ut=r.get(D);E!==void 0&&St(ut.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&Qt(D)}function Me(D){const E=D.texture,tt=r.get(D),ut=r.get(E);D.addEventListener("dispose",B);const vt=D.textures,ft=D.isWebGLCubeRenderTarget===!0,Ht=vt.length>1;if(Ht||(ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture()),ut.__version=E.version,h.memory.textures++),ft){tt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[wt]=[];for(let zt=0;zt<E.mipmaps.length;zt++)tt.__webglFramebuffer[wt][zt]=s.createFramebuffer()}else tt.__webglFramebuffer[wt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)tt.__webglFramebuffer[wt]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(Ht)for(let wt=0,zt=vt.length;wt<zt;wt++){const pe=r.get(vt[wt]);pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture(),h.memory.textures++)}if(D.samples>0&&fe(D)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let wt=0;wt<vt.length;wt++){const zt=vt[wt];tt.__webglColorRenderbuffer[wt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[wt]);const pe=u.convert(zt.format,zt.colorSpace),yt=u.convert(zt.type),Bt=O(zt.internalFormat,pe,yt,zt.colorSpace,D.isXRRenderTarget===!0),qt=se(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Bt,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,tt.__webglColorRenderbuffer[wt])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),Tt(tt.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){i.bindTexture(s.TEXTURE_CUBE_MAP,ut.__webglTexture),Et(s.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)St(tt.__webglFramebuffer[wt][zt],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt);else St(tt.__webglFramebuffer[wt],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(E)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let wt=0,zt=vt.length;wt<zt;wt++){const pe=vt[wt],yt=r.get(pe);i.bindTexture(s.TEXTURE_2D,yt.__webglTexture),Et(s.TEXTURE_2D,pe),St(tt.__webglFramebuffer,D,pe,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,0),M(pe)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let wt=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(wt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(wt,ut.__webglTexture),Et(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)St(tt.__webglFramebuffer[zt],D,E,s.COLOR_ATTACHMENT0,wt,zt);else St(tt.__webglFramebuffer,D,E,s.COLOR_ATTACHMENT0,wt,0);M(E)&&_(wt),i.unbindTexture()}D.depthBuffer&&Qt(D)}function Re(D){const E=D.textures;for(let tt=0,ut=E.length;tt<ut;tt++){const vt=E[tt];if(M(vt)){const ft=P(D),Ht=r.get(vt).__webglTexture;i.bindTexture(ft,Ht),_(ft),i.unbindTexture()}}}const ae=[],z=[];function pn(D){if(D.samples>0){if(fe(D)===!1){const E=D.textures,tt=D.width,ut=D.height;let vt=s.COLOR_BUFFER_BIT;const ft=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ht=r.get(D),wt=E.length>1;if(wt)for(let zt=0;zt<E.length;zt++)i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let zt=0;zt<E.length;zt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(vt|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(vt|=s.STENCIL_BUFFER_BIT)),wt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const pe=r.get(E[zt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pe,0)}s.blitFramebuffer(0,0,tt,ut,0,0,tt,ut,vt,s.NEAREST),m===!0&&(ae.length=0,z.length=0,ae.push(s.COLOR_ATTACHMENT0+zt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ae.push(ft),z.push(ft),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),wt)for(let zt=0;zt<E.length;zt++){i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const pe=r.get(E[zt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,pe,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function se(D){return Math.min(l.maxSamples,D.samples)}function fe(D){const E=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(D){const E=h.render.frame;g.get(D)!==E&&(g.set(D,E),D.update())}function Ce(D,E){const tt=D.colorSpace,ut=D.format,vt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||tt!==Ms&&tt!==Ua&&(Ae.getTransfer(tt)===Oe?(ut!==gi||vt!==ea)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function Xt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=ct,this.setTexture2D=ht,this.setTexture2DArray=W,this.setTexture3D=at,this.setTextureCube=j,this.rebindTextures=Pt,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=fe}function sA(s,e){function i(r,l=Ua){let u;const h=Ae.getTransfer(l);if(r===ea)return s.UNSIGNED_BYTE;if(r===rd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===sd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===q_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===X_)return s.BYTE;if(r===W_)return s.SHORT;if(r===Uo)return s.UNSIGNED_SHORT;if(r===ad)return s.INT;if(r===mr)return s.UNSIGNED_INT;if(r===Qi)return s.FLOAT;if(r===No)return s.HALF_FLOAT;if(r===Y_)return s.ALPHA;if(r===j_)return s.RGB;if(r===gi)return s.RGBA;if(r===Z_)return s.LUMINANCE;if(r===K_)return s.LUMINANCE_ALPHA;if(r===ps)return s.DEPTH_COMPONENT;if(r===xs)return s.DEPTH_STENCIL;if(r===Q_)return s.RED;if(r===od)return s.RED_INTEGER;if(r===J_)return s.RG;if(r===ld)return s.RG_INTEGER;if(r===cd)return s.RGBA_INTEGER;if(r===mc||r===gc||r===_c||r===vc)if(h===Oe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===mc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_c)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===mc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_c)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ch||r===wh||r===Dh||r===Uh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Ch)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Uh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lh||r===Nh||r===Oh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Lh||r===Nh)return h===Oe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Oh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ph||r===zh||r===Bh||r===Fh||r===Ih||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ph)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ih)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sc||r===Zh||r===Kh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Sc)return h===Oe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$_||r===Qh||r===Jh||r===$h)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Sc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Qh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$h)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ss?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const oA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Bn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new za({vertexShader:oA,fragmentShader:lA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $i(new Ac(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uA extends Ts{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,v=null,y=null,b=null;const C=new cA,M=i.getContextAttributes();let _=null,P=null;const O=[],L=[],H=new ze;let G=null;const B=new si;B.viewport=new je;const K=new si;K.viewport=new je;const w=[B,K],R=new LM;let F=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let dt=O[q];return dt===void 0&&(dt=new rh,O[q]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(q){let dt=O[q];return dt===void 0&&(dt=new rh,O[q]=dt),dt.getGripSpace()},this.getHand=function(q){let dt=O[q];return dt===void 0&&(dt=new rh,O[q]=dt),dt.getHandSpace()};function it(q){const dt=L.indexOf(q.inputSource);if(dt===-1)return;const St=O[dt];St!==void 0&&(St.update(q.inputSource,q.frame,p||h),St.dispatchEvent({type:q.type,data:q.inputSource}))}function mt(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",mt),l.removeEventListener("inputsourceschange",ht);for(let q=0;q<O.length;q++){const dt=L[q];dt!==null&&(L[q]=null,O[q].disconnect(dt))}F=null,ct=null,C.reset(),e.setRenderTarget(_),y=null,v=null,x=null,l=null,P=null,At.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",mt),l.addEventListener("inputsourceschange",ht),M.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Tt=null,Rt=null;M.depth&&(Rt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=M.stencil?xs:ps,Tt=M.stencil?Ss:mr);const Qt={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:u};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(Qt),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new gr(v.textureWidth,v.textureHeight,{format:gi,type:ea,depthTexture:new mv(v.textureWidth,v.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new gr(y.framebufferWidth,y.framebufferHeight,{format:gi,type:ea,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ht(q){for(let dt=0;dt<q.removed.length;dt++){const St=q.removed[dt],Tt=L.indexOf(St);Tt>=0&&(L[Tt]=null,O[Tt].disconnect(St))}for(let dt=0;dt<q.added.length;dt++){const St=q.added[dt];let Tt=L.indexOf(St);if(Tt===-1){for(let Qt=0;Qt<O.length;Qt++)if(Qt>=L.length){L.push(St),Tt=Qt;break}else if(L[Qt]===null){L[Qt]=St,Tt=Qt;break}if(Tt===-1)break}const Rt=O[Tt];Rt&&Rt.connect(St)}}const W=new rt,at=new rt;function j(q,dt,St){W.setFromMatrixPosition(dt.matrixWorld),at.setFromMatrixPosition(St.matrixWorld);const Tt=W.distanceTo(at),Rt=dt.projectionMatrix.elements,Qt=St.projectionMatrix.elements,Pt=Rt[14]/(Rt[10]-1),Me=Rt[14]/(Rt[10]+1),Re=(Rt[9]+1)/Rt[5],ae=(Rt[9]-1)/Rt[5],z=(Rt[8]-1)/Rt[0],pn=(Qt[8]+1)/Qt[0],se=Pt*z,fe=Pt*pn,kt=Tt/(-z+pn),Ce=kt*-z;if(dt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ce),q.translateZ(kt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(dt.projectionMatrix),q.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Xt=Pt+kt,D=Me+kt,E=se-Ce,tt=fe+(Tt-Ce),ut=Re*Me/D*Xt,vt=ae*Me/D*Xt;q.projectionMatrix.makePerspective(E,tt,ut,vt,Xt,D),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function xt(q,dt){dt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(dt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let dt=q.near,St=q.far;C.texture!==null&&(C.depthNear>0&&(dt=C.depthNear),C.depthFar>0&&(St=C.depthFar)),R.near=K.near=B.near=dt,R.far=K.far=B.far=St,(F!==R.near||ct!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,ct=R.far),B.layers.mask=q.layers.mask|2,K.layers.mask=q.layers.mask|4,R.layers.mask=B.layers.mask|K.layers.mask;const Tt=q.parent,Rt=R.cameras;xt(R,Tt);for(let Qt=0;Qt<Rt.length;Qt++)xt(Rt[Qt],Tt);Rt.length===2?j(R,B,K):R.projectionMatrix.copy(B.projectionMatrix),U(q,R,Tt)};function U(q,dt,St){St===null?q.matrix.copy(dt.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(dt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(dt.projectionMatrix),q.projectionMatrixInverse.copy(dt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Lo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(q){m=q,v!==null&&(v.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let nt=null;function Et(q,dt){if(g=dt.getViewerPose(p||h),b=dt,g!==null){const St=g.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Tt=!1;St.length!==R.cameras.length&&(R.cameras.length=0,Tt=!0);for(let Pt=0;Pt<St.length;Pt++){const Me=St[Pt];let Re=null;if(y!==null)Re=y.getViewport(Me);else{const z=x.getViewSubImage(v,Me);Re=z.viewport,Pt===0&&(e.setRenderTargetTextures(P,z.colorTexture,v.ignoreDepthValues?void 0:z.depthStencilTexture),e.setRenderTarget(P))}let ae=w[Pt];ae===void 0&&(ae=new si,ae.layers.enable(Pt),ae.viewport=new je,w[Pt]=ae),ae.matrix.fromArray(Me.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Me.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Re.x,Re.y,Re.width,Re.height),Pt===0&&(R.matrix.copy(ae.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Tt===!0&&R.cameras.push(ae)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Pt=x.getDepthInformation(St[0]);Pt&&Pt.isValid&&Pt.texture&&C.init(e,Pt,l.renderState)}}for(let St=0;St<O.length;St++){const Tt=L[St],Rt=O[St];Tt!==null&&Rt!==void 0&&Rt.update(Tt,dt,p||h)}nt&&nt(q,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),b=null}const At=new gv;At.setAnimationLoop(Et),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}}const lr=new na,fA=new Ze;function hA(s,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,uv(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,P,O,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),x(M,_)):_.isMeshPhongMaterial?(u(M,_),g(M,_)):_.isMeshStandardMaterial?(u(M,_),v(M,_),_.isMeshPhysicalMaterial&&y(M,_,L)):_.isMeshMatcapMaterial?(u(M,_),b(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),C(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,P,O):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===zn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===zn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const P=e.get(_),O=P.envMap,L=P.envMapRotation;O&&(M.envMap.value=O,lr.copy(L),lr.x*=-1,lr.y*=-1,lr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),M.envMapRotation.value.setFromMatrix4(fA.makeRotationFromEuler(lr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,P,O){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*P,M.scale.value=O*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function x(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function v(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,P){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===zn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function C(M,_){const P=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function dA(s,e,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const L=O.program;r.uniformBlockBinding(P,L)}function p(P,O){let L=l[P.id];L===void 0&&(b(P),L=g(P),l[P.id]=L,P.addEventListener("dispose",M));const H=O.program;r.updateUBOMapping(P,H);const G=e.render.frame;u[P.id]!==G&&(v(P),u[P.id]=G)}function g(P){const O=x();P.__bindingPointIndex=O;const L=s.createBuffer(),H=P.__size,G=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,H,G),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,L),L}function x(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const O=l[P.id],L=P.uniforms,H=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let G=0,B=L.length;G<B;G++){const K=Array.isArray(L[G])?L[G]:[L[G]];for(let w=0,R=K.length;w<R;w++){const F=K[w];if(y(F,G,w,H)===!0){const ct=F.__offset,it=Array.isArray(F.value)?F.value:[F.value];let mt=0;for(let ht=0;ht<it.length;ht++){const W=it[ht],at=C(W);typeof W=="number"||typeof W=="boolean"?(F.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,ct+mt,F.__data)):W.isMatrix3?(F.__data[0]=W.elements[0],F.__data[1]=W.elements[1],F.__data[2]=W.elements[2],F.__data[3]=0,F.__data[4]=W.elements[3],F.__data[5]=W.elements[4],F.__data[6]=W.elements[5],F.__data[7]=0,F.__data[8]=W.elements[6],F.__data[9]=W.elements[7],F.__data[10]=W.elements[8],F.__data[11]=0):(W.toArray(F.__data,mt),mt+=at.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ct,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(P,O,L,H){const G=P.value,B=O+"_"+L;if(H[B]===void 0)return typeof G=="number"||typeof G=="boolean"?H[B]=G:H[B]=G.clone(),!0;{const K=H[B];if(typeof G=="number"||typeof G=="boolean"){if(K!==G)return H[B]=G,!0}else if(K.equals(G)===!1)return K.copy(G),!0}return!1}function b(P){const O=P.uniforms;let L=0;const H=16;for(let B=0,K=O.length;B<K;B++){const w=Array.isArray(O[B])?O[B]:[O[B]];for(let R=0,F=w.length;R<F;R++){const ct=w[R],it=Array.isArray(ct.value)?ct.value:[ct.value];for(let mt=0,ht=it.length;mt<ht;mt++){const W=it[mt],at=C(W),j=L%H,xt=j%at.boundary,U=j+xt;L+=xt,U!==0&&H-U<at.storage&&(L+=H-U),ct.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=L,L+=at.storage}}}const G=L%H;return G>0&&(L+=H-G),P.__size=L,P.__cache={},this}function C(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function M(P){const O=P.target;O.removeEventListener("dispose",M);const L=h.indexOf(O.__bindingPointIndex);h.splice(L,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const P in l)s.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class pA{constructor(e={}){const{canvas:i=Qx(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const b=new Uint32Array(4),C=new Int32Array(4);let M=null,_=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=Na,this.toneMappingExposure=1;const L=this;let H=!1,G=0,B=0,K=null,w=-1,R=null;const F=new je,ct=new je;let it=null;const mt=new we(0);let ht=0,W=i.width,at=i.height,j=1,xt=null,U=null;const nt=new je(0,0,W,at),Et=new je(0,0,W,at);let At=!1;const q=new dv;let dt=!1,St=!1;this.transmissionResolutionScale=1;const Tt=new Ze,Rt=new Ze,Qt=new rt,Pt=new je,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function ae(){return K===null?j:1}let z=r;function pn(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${id}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),z===null){const X="webgl2";if(z=pn(X,A),z===null)throw pn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let se,fe,kt,Ce,Xt,D,E,tt,ut,vt,ft,Ht,wt,zt,pe,yt,Bt,qt,Gt,Ft,re,jt,De,k;function Lt(){se=new TT(z),se.init(),jt=new sA(z,se),fe=new vT(z,se,e,jt),kt=new aA(z,se),fe.reverseDepthBuffer&&v&&kt.buffers.depth.setReversed(!0),Ce=new RT(z),Xt=new Wb,D=new rA(z,se,kt,Xt,fe,jt,Ce),E=new xT(L),tt=new ET(L),ut=new OM(z),De=new gT(z,ut),vt=new bT(z,ut,Ce,De),ft=new wT(z,vt,ut,Ce),Gt=new CT(z,fe,D),yt=new ST(Xt),Ht=new Xb(L,E,tt,se,fe,De,yt),wt=new hA(L,Xt),zt=new Yb,pe=new $b(se),qt=new mT(L,E,tt,kt,ft,y,m),Bt=new nA(L,ft,fe),k=new dA(z,Ce,fe,kt),Ft=new _T(z,se,Ce),re=new AT(z,se,Ce),Ce.programs=Ht.programs,L.capabilities=fe,L.extensions=se,L.properties=Xt,L.renderLists=zt,L.shadowMap=Bt,L.state=kt,L.info=Ce}Lt();const st=new uA(L,z);this.xr=st,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(W,at,!1))},this.getSize=function(A){return A.set(W,at)},this.setSize=function(A,X,$=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,at=X,i.width=Math.floor(A*j),i.height=Math.floor(X*j),$===!0&&(i.style.width=A+"px",i.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(W*j,at*j).floor()},this.setDrawingBufferSize=function(A,X,$){W=A,at=X,j=$,i.width=Math.floor(A*$),i.height=Math.floor(X*$),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(nt)},this.setViewport=function(A,X,$,Q){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,X,$,Q),kt.viewport(F.copy(nt).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(Et)},this.setScissor=function(A,X,$,Q){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,X,$,Q),kt.scissor(ct.copy(Et).multiplyScalar(j).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(A){kt.setScissorTest(At=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(A=!0,X=!0,$=!0){let Q=0;if(A){let Y=!1;if(K!==null){const Mt=K.texture.format;Y=Mt===cd||Mt===ld||Mt===od}if(Y){const Mt=K.texture.type,bt=Mt===ea||Mt===mr||Mt===Uo||Mt===Ss||Mt===rd||Mt===sd,Ot=qt.getClearColor(),Nt=qt.getClearAlpha(),te=Ot.r,ee=Ot.g,Yt=Ot.b;bt?(b[0]=te,b[1]=ee,b[2]=Yt,b[3]=Nt,z.clearBufferuiv(z.COLOR,0,b)):(C[0]=te,C[1]=ee,C[2]=Yt,C[3]=Nt,z.clearBufferiv(z.COLOR,0,C))}else Q|=z.COLOR_BUFFER_BIT}X&&(Q|=z.DEPTH_BUFFER_BIT),$&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),qt.dispose(),zt.dispose(),pe.dispose(),Xt.dispose(),E.dispose(),tt.dispose(),ft.dispose(),De.dispose(),k.dispose(),Ht.dispose(),st.dispose(),st.removeEventListener("sessionstart",Fo),st.removeEventListener("sessionend",Rs),vi.stop()};function gt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=Ce.autoReset,X=Bt.enabled,$=Bt.autoUpdate,Q=Bt.needsUpdate,Y=Bt.type;Lt(),Ce.autoReset=A,Bt.enabled=X,Bt.autoUpdate=$,Bt.needsUpdate=Q,Bt.type=Y}function Dt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){const X=A.target;X.removeEventListener("dispose",$t),He(X)}function He(A){tn(A),Xt.remove(A)}function tn(A){const X=Xt.get(A).programs;X!==void 0&&(X.forEach(function($){Ht.releaseProgram($)}),A.isShaderMaterial&&Ht.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,$,Q,Y,Mt){X===null&&(X=Me);const bt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ot=Cc(A,X,$,Q,Y);kt.setMaterial(Q,bt);let Nt=$.index,te=1;if(Q.wireframe===!0){if(Nt=vt.getWireframeAttribute($),Nt===void 0)return;te=2}const ee=$.drawRange,Yt=$.attributes.position;let ge=ee.start*te,_e=(ee.start+ee.count)*te;Mt!==null&&(ge=Math.max(ge,Mt.start*te),_e=Math.min(_e,(Mt.start+Mt.count)*te)),Nt!==null?(ge=Math.max(ge,0),_e=Math.min(_e,Nt.count)):Yt!=null&&(ge=Math.max(ge,0),_e=Math.min(_e,Yt.count));const Ie=_e-ge;if(Ie<0||Ie===1/0)return;De.setup(Y,Q,Ot,$,Nt);let Ee,ne=Ft;if(Nt!==null&&(Ee=ut.get(Nt),ne=re,ne.setIndex(Ee)),Y.isMesh)Q.wireframe===!0?(kt.setLineWidth(Q.wireframeLinewidth*ae()),ne.setMode(z.LINES)):ne.setMode(z.TRIANGLES);else if(Y.isLine){let Zt=Q.linewidth;Zt===void 0&&(Zt=1),kt.setLineWidth(Zt*ae()),Y.isLineSegments?ne.setMode(z.LINES):Y.isLineLoop?ne.setMode(z.LINE_LOOP):ne.setMode(z.LINE_STRIP)}else Y.isPoints?ne.setMode(z.POINTS):Y.isSprite&&ne.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ne.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ne.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Zt=Y._multiDrawStarts,an=Y._multiDrawCounts,ve=Y._multiDrawCount,Ln=Nt?ut.get(Nt).bytesPerElement:1,oi=Xt.get(Q).currentProgram.getUniforms();for(let An=0;An<ve;An++)oi.setValue(z,"_gl_DrawID",An),ne.render(Zt[An]/Ln,an[An])}else if(Y.isInstancedMesh)ne.renderInstances(ge,Ie,Y.count);else if($.isInstancedBufferGeometry){const Zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,an=Math.min($.instanceCount,Zt);ne.renderInstances(ge,Ie,an)}else ne.render(ge,Ie)};function ye(A,X,$){A.transparent===!0&&A.side===Ki&&A.forceSinglePass===!1?(A.side=zn,A.needsUpdate=!0,nn(A,X,$),A.side=Pa,A.needsUpdate=!0,nn(A,X,$),A.side=Ki):nn(A,X,$)}this.compile=function(A,X,$=null){$===null&&($=A),_=pe.get($),_.init(X),O.push(_),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),A!==$&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const Q=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Mt=Y.material;if(Mt)if(Array.isArray(Mt))for(let bt=0;bt<Mt.length;bt++){const Ot=Mt[bt];ye(Ot,$,Y),Q.add(Ot)}else ye(Mt,$,Y),Q.add(Mt)}),O.pop(),_=null,Q},this.compileAsync=function(A,X,$=null){const Q=this.compile(A,X,$);return new Promise(Y=>{function Mt(){if(Q.forEach(function(bt){Xt.get(bt).currentProgram.isReady()&&Q.delete(bt)}),Q.size===0){Y(A);return}setTimeout(Mt,10)}se.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Tn=null;function bn(A){Tn&&Tn(A)}function Fo(){vi.stop()}function Rs(){vi.start()}const vi=new gv;vi.setAnimationLoop(bn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(A){Tn=A,st.setAnimationLoop(A),A===null?vi.stop():vi.start()},st.addEventListener("sessionstart",Fo),st.addEventListener("sessionend",Rs),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(X),X=st.getCamera()),A.isScene===!0&&A.onBeforeRender(L,A,X,K),_=pe.get(A,O.length),_.init(X),O.push(_),Rt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q.setFromProjectionMatrix(Rt),St=this.localClippingEnabled,dt=yt.init(this.clippingPlanes,St),M=zt.get(A,P.length),M.init(),P.push(M),st.enabled===!0&&st.isPresenting===!0){const Mt=L.xr.getDepthSensingMesh();Mt!==null&&_r(Mt,X,-1/0,L.sortObjects)}_r(A,X,0,L.sortObjects),M.finish(),L.sortObjects===!0&&M.sort(xt,U),Re=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Re&&qt.addToRenderList(M,A),this.info.render.frame++,dt===!0&&yt.beginShadows();const $=_.state.shadowsArray;Bt.render($,A,X),dt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=M.opaque,Y=M.transmissive;if(_.setupLights(),X.isArrayCamera){const Mt=X.cameras;if(Y.length>0)for(let bt=0,Ot=Mt.length;bt<Ot;bt++){const Nt=Mt[bt];Io(Q,Y,A,Nt)}Re&&qt.render(A);for(let bt=0,Ot=Mt.length;bt<Ot;bt++){const Nt=Mt[bt];Cs(M,A,Nt,Nt.viewport)}}else Y.length>0&&Io(Q,Y,A,X),Re&&qt.render(A),Cs(M,A,X);K!==null&&B===0&&(D.updateMultisampleRenderTarget(K),D.updateRenderTargetMipmap(K)),A.isScene===!0&&A.onAfterRender(L,A,X),De.resetDefaultState(),w=-1,R=null,O.pop(),O.length>0?(_=O[O.length-1],dt===!0&&yt.setGlobalState(L.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function _r(A,X,$,Q){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){Q&&Pt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Rt);const bt=ft.update(A),Ot=A.material;Ot.visible&&M.push(A,bt,Ot,$,Pt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const bt=ft.update(A),Ot=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pt.copy(A.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Pt.copy(bt.boundingSphere.center)),Pt.applyMatrix4(A.matrixWorld).applyMatrix4(Rt)),Array.isArray(Ot)){const Nt=bt.groups;for(let te=0,ee=Nt.length;te<ee;te++){const Yt=Nt[te],ge=Ot[Yt.materialIndex];ge&&ge.visible&&M.push(A,bt,ge,$,Pt.z,Yt)}}else Ot.visible&&M.push(A,bt,Ot,$,Pt.z,null)}}const Mt=A.children;for(let bt=0,Ot=Mt.length;bt<Ot;bt++)_r(Mt[bt],X,$,Q)}function Cs(A,X,$,Q){const Y=A.opaque,Mt=A.transmissive,bt=A.transparent;_.setupLightsView($),dt===!0&&yt.setGlobalState(L.clippingPlanes,$),Q&&kt.viewport(F.copy(Q)),Y.length>0&&In(Y,X,$),Mt.length>0&&In(Mt,X,$),bt.length>0&&In(bt,X,$),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Io(A,X,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Q.id]===void 0&&(_.state.transmissionRenderTarget[Q.id]=new gr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?No:ea,minFilter:pr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Mt=_.state.transmissionRenderTarget[Q.id],bt=Q.viewport||F;Mt.setSize(bt.z*L.transmissionResolutionScale,bt.w*L.transmissionResolutionScale);const Ot=L.getRenderTarget();L.setRenderTarget(Mt),L.getClearColor(mt),ht=L.getClearAlpha(),ht<1&&L.setClearColor(16777215,.5),L.clear(),Re&&qt.render($);const Nt=L.toneMapping;L.toneMapping=Na;const te=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),_.setupLightsView(Q),dt===!0&&yt.setGlobalState(L.clippingPlanes,Q),In(A,$,Q),D.updateMultisampleRenderTarget(Mt),D.updateRenderTargetMipmap(Mt),se.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Yt=0,ge=X.length;Yt<ge;Yt++){const _e=X[Yt],Ie=_e.object,Ee=_e.geometry,ne=_e.material,Zt=_e.group;if(ne.side===Ki&&Ie.layers.test(Q.layers)){const an=ne.side;ne.side=zn,ne.needsUpdate=!0,en(Ie,$,Q,Ee,ne,Zt),ne.side=an,ne.needsUpdate=!0,ee=!0}}ee===!0&&(D.updateMultisampleRenderTarget(Mt),D.updateRenderTargetMipmap(Mt))}L.setRenderTarget(Ot),L.setClearColor(mt,ht),te!==void 0&&(Q.viewport=te),L.toneMapping=Nt}function In(A,X,$){const Q=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Mt=A.length;Y<Mt;Y++){const bt=A[Y],Ot=bt.object,Nt=bt.geometry,te=Q===null?bt.material:Q,ee=bt.group;Ot.layers.test($.layers)&&en(Ot,X,$,Nt,te,ee)}}function en(A,X,$,Q,Y,Mt){A.onBeforeRender(L,X,$,Q,Y,Mt),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(L,X,$,Q,A,Mt),Y.transparent===!0&&Y.side===Ki&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,L.renderBufferDirect($,X,Q,Y,A,Mt),Y.side=Pa,Y.needsUpdate=!0,L.renderBufferDirect($,X,Q,Y,A,Mt),Y.side=Ki):L.renderBufferDirect($,X,Q,Y,A,Mt),A.onAfterRender(L,X,$,Q,Y,Mt)}function nn(A,X,$){X.isScene!==!0&&(X=Me);const Q=Xt.get(A),Y=_.state.lights,Mt=_.state.shadowsArray,bt=Y.state.version,Ot=Ht.getParameters(A,Y.state,Mt,X,$),Nt=Ht.getProgramCacheKey(Ot);let te=Q.programs;Q.environment=A.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(A.isMeshStandardMaterial?tt:E).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,te===void 0&&(A.addEventListener("dispose",$t),te=new Map,Q.programs=te);let ee=te.get(Nt);if(ee!==void 0){if(Q.currentProgram===ee&&Q.lightsStateVersion===bt)return vr(A,Ot),ee}else Ot.uniforms=Ht.getUniforms(A),A.onBeforeCompile(Ot,L),ee=Ht.acquireProgram(Ot,Nt),te.set(Nt,ee),Q.uniforms=Ot.uniforms;const Yt=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Yt.clippingPlanes=yt.uniform),vr(A,Ot),Q.needsLights=Ho(A),Q.lightsStateVersion=bt,Q.needsLights&&(Yt.ambientLightColor.value=Y.state.ambient,Yt.lightProbe.value=Y.state.probe,Yt.directionalLights.value=Y.state.directional,Yt.directionalLightShadows.value=Y.state.directionalShadow,Yt.spotLights.value=Y.state.spot,Yt.spotLightShadows.value=Y.state.spotShadow,Yt.rectAreaLights.value=Y.state.rectArea,Yt.ltc_1.value=Y.state.rectAreaLTC1,Yt.ltc_2.value=Y.state.rectAreaLTC2,Yt.pointLights.value=Y.state.point,Yt.pointLightShadows.value=Y.state.pointShadow,Yt.hemisphereLights.value=Y.state.hemi,Yt.directionalShadowMap.value=Y.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Yt.spotShadowMap.value=Y.state.spotShadowMap,Yt.spotLightMatrix.value=Y.state.spotLightMatrix,Yt.spotLightMap.value=Y.state.spotLightMap,Yt.pointShadowMap.value=Y.state.pointShadowMap,Yt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=ee,Q.uniformsList=null,ee}function Ri(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=xc.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function vr(A,X){const $=Xt.get(A);$.outputColorSpace=X.outputColorSpace,$.batching=X.batching,$.batchingColor=X.batchingColor,$.instancing=X.instancing,$.instancingColor=X.instancingColor,$.instancingMorph=X.instancingMorph,$.skinning=X.skinning,$.morphTargets=X.morphTargets,$.morphNormals=X.morphNormals,$.morphColors=X.morphColors,$.morphTargetsCount=X.morphTargetsCount,$.numClippingPlanes=X.numClippingPlanes,$.numIntersection=X.numClipIntersection,$.vertexAlphas=X.vertexAlphas,$.vertexTangents=X.vertexTangents,$.toneMapping=X.toneMapping}function Cc(A,X,$,Q,Y){X.isScene!==!0&&(X=Me),D.resetTextureUnits();const Mt=X.fog,bt=Q.isMeshStandardMaterial?X.environment:null,Ot=K===null?L.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ms,Nt=(Q.isMeshStandardMaterial?tt:E).get(Q.envMap||bt),te=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ee=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Yt=!!$.morphAttributes.position,ge=!!$.morphAttributes.normal,_e=!!$.morphAttributes.color;let Ie=Na;Q.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ie=L.toneMapping);const Ee=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ne=Ee!==void 0?Ee.length:0,Zt=Xt.get(Q),an=_.state.lights;if(dt===!0&&(St===!0||A!==R)){const ke=A===R&&Q.id===w;yt.setState(Q,A,ke)}let ve=!1;Q.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==an.state.version||Zt.outputColorSpace!==Ot||Y.isBatchedMesh&&Zt.batching===!1||!Y.isBatchedMesh&&Zt.batching===!0||Y.isBatchedMesh&&Zt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Zt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Zt.instancing===!1||!Y.isInstancedMesh&&Zt.instancing===!0||Y.isSkinnedMesh&&Zt.skinning===!1||!Y.isSkinnedMesh&&Zt.skinning===!0||Y.isInstancedMesh&&Zt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Zt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Zt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Zt.instancingMorph===!1&&Y.morphTexture!==null||Zt.envMap!==Nt||Q.fog===!0&&Zt.fog!==Mt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==yt.numPlanes||Zt.numIntersection!==yt.numIntersection)||Zt.vertexAlphas!==te||Zt.vertexTangents!==ee||Zt.morphTargets!==Yt||Zt.morphNormals!==ge||Zt.morphColors!==_e||Zt.toneMapping!==Ie||Zt.morphTargetsCount!==ne)&&(ve=!0):(ve=!0,Zt.__version=Q.version);let Ln=Zt.currentProgram;ve===!0&&(Ln=nn(Q,X,Y));let oi=!1,An=!1,cn=!1;const Ue=Ln.getUniforms(),Rn=Zt.uniforms;if(kt.useProgram(Ln.program)&&(oi=!0,An=!0,cn=!0),Q.id!==w&&(w=Q.id,An=!0),oi||R!==A){kt.buffers.depth.getReversed()?(Tt.copy(A.projectionMatrix),$x(Tt),tM(Tt),Ue.setValue(z,"projectionMatrix",Tt)):Ue.setValue(z,"projectionMatrix",A.projectionMatrix),Ue.setValue(z,"viewMatrix",A.matrixWorldInverse);const mn=Ue.map.cameraPosition;mn!==void 0&&mn.setValue(z,Qt.setFromMatrixPosition(A.matrixWorld)),fe.logarithmicDepthBuffer&&Ue.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ue.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,An=!0,cn=!0)}if(Y.isSkinnedMesh){Ue.setOptional(z,Y,"bindMatrix"),Ue.setOptional(z,Y,"bindMatrixInverse");const ke=Y.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),Ue.setValue(z,"boneTexture",ke.boneTexture,D))}Y.isBatchedMesh&&(Ue.setOptional(z,Y,"batchingTexture"),Ue.setValue(z,"batchingTexture",Y._matricesTexture,D),Ue.setOptional(z,Y,"batchingIdTexture"),Ue.setValue(z,"batchingIdTexture",Y._indirectTexture,D),Ue.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ue.setValue(z,"batchingColorTexture",Y._colorsTexture,D));const Sn=$.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Gt.update(Y,$,Ln),(An||Zt.receiveShadow!==Y.receiveShadow)&&(Zt.receiveShadow=Y.receiveShadow,Ue.setValue(z,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Rn.envMap.value=Nt,Rn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(Rn.envMapIntensity.value=X.environmentIntensity),An&&(Ue.setValue(z,"toneMappingExposure",L.toneMappingExposure),Zt.needsLights&&wc(Rn,cn),Mt&&Q.fog===!0&&wt.refreshFogUniforms(Rn,Mt),wt.refreshMaterialUniforms(Rn,Q,j,at,_.state.transmissionRenderTarget[A.id]),xc.upload(z,Ri(Zt),Rn,D)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(xc.upload(z,Ri(Zt),Rn,D),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ue.setValue(z,"center",Y.center),Ue.setValue(z,"modelViewMatrix",Y.modelViewMatrix),Ue.setValue(z,"normalMatrix",Y.normalMatrix),Ue.setValue(z,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ke=Q.uniformsGroups;for(let mn=0,Sr=ke.length;mn<Sr;mn++){const Nn=ke[mn];k.update(Nn,Ln),k.bind(Nn,Ln)}}return Ln}function wc(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Ho(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,X,$){Xt.get(A.texture).__webglTexture=X,Xt.get(A.depthTexture).__webglTexture=$;const Q=Xt.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const $=Xt.get(A);$.__webglFramebuffer=X,$.__useDefaultFramebuffer=X===void 0};const Ba=z.createFramebuffer();this.setRenderTarget=function(A,X=0,$=0){K=A,G=X,B=$;let Q=!0,Y=null,Mt=!1,bt=!1;if(A){const Nt=Xt.get(A);if(Nt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1;else if(Nt.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(Nt.__hasExternalTextures)D.rebindTextures(A,Xt.get(A.texture).__webglTexture,Xt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Yt=A.depthTexture;if(Nt.__boundDepthTexture!==Yt){if(Yt!==null&&Xt.has(Yt)&&(A.width!==Yt.image.width||A.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const te=A.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(bt=!0);const ee=Xt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[X])?Y=ee[X][$]:Y=ee[X],Mt=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?Y=Xt.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?Y=ee[$]:Y=ee,F.copy(A.viewport),ct.copy(A.scissor),it=A.scissorTest}else F.copy(nt).multiplyScalar(j).floor(),ct.copy(Et).multiplyScalar(j).floor(),it=At;if($!==0&&(Y=Ba),kt.bindFramebuffer(z.FRAMEBUFFER,Y)&&Q&&kt.drawBuffers(A,Y),kt.viewport(F),kt.scissor(ct),kt.setScissorTest(it),Mt){const Nt=Xt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Nt.__webglTexture,$)}else if(bt){const Nt=Xt.get(A.texture),te=X;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Nt.__webglTexture,$,te)}else if(A!==null&&$!==0){const Nt=Xt.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Nt.__webglTexture,$)}w=-1},this.readRenderTargetPixels=function(A,X,$,Q,Y,Mt,bt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Ot=Ot[bt]),Ot){kt.bindFramebuffer(z.FRAMEBUFFER,Ot);try{const Nt=A.texture,te=Nt.format,ee=Nt.type;if(!fe.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-Q&&$>=0&&$<=A.height-Y&&z.readPixels(X,$,Q,Y,jt.convert(te),jt.convert(ee),Mt)}finally{const Nt=K!==null?Xt.get(K).__webglFramebuffer:null;kt.bindFramebuffer(z.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,X,$,Q,Y,Mt,bt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Ot=Ot[bt]),Ot){const Nt=A.texture,te=Nt.format,ee=Nt.type;if(!fe.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-Q&&$>=0&&$<=A.height-Y){kt.bindFramebuffer(z.FRAMEBUFFER,Ot);const Yt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Yt),z.bufferData(z.PIXEL_PACK_BUFFER,Mt.byteLength,z.STREAM_READ),z.readPixels(X,$,Q,Y,jt.convert(te),jt.convert(ee),0);const ge=K!==null?Xt.get(K).__webglFramebuffer:null;kt.bindFramebuffer(z.FRAMEBUFFER,ge);const _e=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Jx(z,_e,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Yt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Mt),z.deleteBuffer(Yt),z.deleteSync(_e),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,$=0){A.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const Q=Math.pow(2,-$),Y=Math.floor(A.image.width*Q),Mt=Math.floor(A.image.height*Q),bt=X!==null?X.x:0,Ot=X!==null?X.y:0;D.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,bt,Ot,Y,Mt),kt.unbindTexture()};const ws=z.createFramebuffer(),Ci=z.createFramebuffer();this.copyTextureToTexture=function(A,X,$=null,Q=null,Y=0,Mt=null){A.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],X=arguments[2],Mt=arguments[3]||0,$=null),Mt===null&&(Y!==0?(fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=Y,Y=0):Mt=0);let bt,Ot,Nt,te,ee,Yt,ge,_e,Ie;const Ee=A.isCompressedTexture?A.mipmaps[Mt]:A.image;if($!==null)bt=$.max.x-$.min.x,Ot=$.max.y-$.min.y,Nt=$.isBox3?$.max.z-$.min.z:1,te=$.min.x,ee=$.min.y,Yt=$.isBox3?$.min.z:0;else{const Sn=Math.pow(2,-Y);bt=Math.floor(Ee.width*Sn),Ot=Math.floor(Ee.height*Sn),A.isDataArrayTexture?Nt=Ee.depth:A.isData3DTexture?Nt=Math.floor(Ee.depth*Sn):Nt=1,te=0,ee=0,Yt=0}Q!==null?(ge=Q.x,_e=Q.y,Ie=Q.z):(ge=0,_e=0,Ie=0);const ne=jt.convert(X.format),Zt=jt.convert(X.type);let an;X.isData3DTexture?(D.setTexture3D(X,0),an=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),an=z.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),an=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const ve=z.getParameter(z.UNPACK_ROW_LENGTH),Ln=z.getParameter(z.UNPACK_IMAGE_HEIGHT),oi=z.getParameter(z.UNPACK_SKIP_PIXELS),An=z.getParameter(z.UNPACK_SKIP_ROWS),cn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ee.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ee.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,te),z.pixelStorei(z.UNPACK_SKIP_ROWS,ee),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Yt);const Ue=A.isDataArrayTexture||A.isData3DTexture,Rn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const Sn=Xt.get(A),ke=Xt.get(X),mn=Xt.get(Sn.__renderTarget),Sr=Xt.get(ke.__renderTarget);kt.bindFramebuffer(z.READ_FRAMEBUFFER,mn.__webglFramebuffer),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Nn=0;Nn<Nt;Nn++)Ue&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.get(A).__webglTexture,Y,Yt+Nn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.get(X).__webglTexture,Mt,Ie+Nn)),z.blitFramebuffer(te,ee,bt,Ot,ge,_e,bt,Ot,z.DEPTH_BUFFER_BIT,z.NEAREST);kt.bindFramebuffer(z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Xt.has(A)){const Sn=Xt.get(A),ke=Xt.get(X);kt.bindFramebuffer(z.READ_FRAMEBUFFER,ws),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ci);for(let mn=0;mn<Nt;mn++)Ue?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Sn.__webglTexture,Y,Yt+mn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Sn.__webglTexture,Y),Rn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.__webglTexture,Mt,Ie+mn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ke.__webglTexture,Mt),Y!==0?z.blitFramebuffer(te,ee,bt,Ot,ge,_e,bt,Ot,z.COLOR_BUFFER_BIT,z.NEAREST):Rn?z.copyTexSubImage3D(an,Mt,ge,_e,Ie+mn,te,ee,bt,Ot):z.copyTexSubImage2D(an,Mt,ge,_e,te,ee,bt,Ot);kt.bindFramebuffer(z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Rn?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(an,Mt,ge,_e,Ie,bt,Ot,Nt,ne,Zt,Ee.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(an,Mt,ge,_e,Ie,bt,Ot,Nt,ne,Ee.data):z.texSubImage3D(an,Mt,ge,_e,Ie,bt,Ot,Nt,ne,Zt,Ee):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Mt,ge,_e,bt,Ot,ne,Zt,Ee.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Mt,ge,_e,Ee.width,Ee.height,ne,Ee.data):z.texSubImage2D(z.TEXTURE_2D,Mt,ge,_e,bt,Ot,ne,Zt,Ee);z.pixelStorei(z.UNPACK_ROW_LENGTH,ve),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ln),z.pixelStorei(z.UNPACK_SKIP_PIXELS,oi),z.pixelStorei(z.UNPACK_SKIP_ROWS,An),z.pixelStorei(z.UNPACK_SKIP_IMAGES,cn),Mt===0&&X.generateMipmaps&&z.generateMipmap(an),kt.unbindTexture()},this.copyTextureToTexture3D=function(A,X,$=null,Q=null,Y=0){return A.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],X=arguments[3],Y=arguments[4]||0),fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,$,Q,Y)},this.initRenderTarget=function(A){Xt.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),kt.unbindTexture()},this.resetState=function(){G=0,B=0,K=null,kt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const mA=()=>{const s=Yn.useRef(null),e=Es(u=>u.isSpinning),i=Yn.useRef(.001),r=Yn.useRef(null),l=Yn.useRef(null);return Yn.useEffect(()=>{if(!s.current)return;const u=new bM,h=new si(75,window.innerWidth/window.innerHeight,.1,2e3),d=new pA;d.setSize(window.innerWidth,window.innerHeight),s.current.appendChild(d.domElement),h.position.z=1e3;const m=new ia,p=[];for(let v=0;v<5e3;v++)p.push(If.randFloatSpread(2e3),If.randFloatSpread(2e3),If.randFloatSpread(2e3));m.setAttribute("position",new Oa(p,3));const g=new CM(m,new pv({size:3,color:16777215}));u.add(g);const x=v=>{requestAnimationFrame(x);const y=1e-5,b=.002,C=2e3;if(e&&(l.current=v),l.current&&v-l.current<=C){r.current===null&&(r.current=v);const _=(v-r.current)/1e3,P=5;_<P?i.current=y+(b-y)*(_/P):i.current=b}else i.current=y,r.current=null;g.rotation.y+=i.current,d.render(u,h)};return x(0),()=>{d.dispose(),s.current&&s.current.removeChild(d.domElement)}},[e]),Kt.jsx("div",{ref:s,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,background:"#000008"}})};function gA(){const{clicksPerSecond:s,processOfflineProgress:e,resetGame:i,addClicks:r}=Es(),[l,u]=Yn.useState(!1),[h,d]=Yn.useState(0);return Yn.useEffect(()=>{const m=setInterval(()=>{s>0&&r(s/10)},100);return()=>clearInterval(m)},[s,r]),Yn.useEffect(()=>{const m=e();m>0&&(d(m),u(!0))},[e]),Kt.jsxs(Kt.Fragment,{children:[Kt.jsx(mA,{}),Kt.jsxs("div",{className:"game-container",children:[Kt.jsx(kS,{}),Kt.jsx(XS,{}),Kt.jsx(qS,{}),Kt.jsx("div",{className:"text-center mt-8",children:Kt.jsx("button",{onClick:i,className:"text-xs text-gray-400 hover:text-gray-600",children:"Reset Game"})}),l&&Kt.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:Kt.jsxs("div",{className:"bg-white rounded-lg p-6 max-w-md",children:[Kt.jsx("h3",{className:"text-xl font-bold mb-2",children:"Welcome Back!"}),Kt.jsxs("p",{className:"mb-4",children:["While you were away, your cats generated ",Math.floor(h)," clicks for you!"]}),Kt.jsx("button",{className:"bg-pink-500 text-white px-4 py-2 rounded-lg w-full",onClick:()=>u(!1),children:"Collect"})]})})]})]})}OS.createRoot(document.getElementById("root")).render(Kt.jsx(dh.StrictMode,{children:Kt.jsx(gA,{})}));
