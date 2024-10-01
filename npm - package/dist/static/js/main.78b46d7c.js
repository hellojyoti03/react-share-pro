/*! For license information please see main.78b46d7c.js.LICENSE.txt */
(()=>{"use strict";var e={153:(e,t,r)=>{var n=r(43),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,u={},s=null,l=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!i.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:l,props:u,_owner:c.current}}t.Fragment=u,t.jsx=s,t.jsxs=s},202:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function m(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}function b(){}function _(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var w=_.prototype=new b;w.constructor=_,h(w,m.prototype),w.isPureReactComponent=!0;var g=Array.isArray,x=Object.prototype.hasOwnProperty,S={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var o,u={},a=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,o)&&!k.hasOwnProperty(o)&&(u[o]=t[o]);var i=arguments.length-2;if(1===i)u.children=n;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];u.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===u[o]&&(u[o]=i[o]);return{$$typeof:r,type:e,key:a,ref:c,props:u,_owner:S.current}}function R(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function C(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,u,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return a=a(i=e),e=""===u?"."+C(i,0):u,g(a)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),$(a,t,o,"",(function(e){return e}))):null!=a&&(R(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(i=0,u=""===u?".":u+":",g(e))for(var s=0;s<e.length;s++){var l=u+C(c=e[s],s);i+=$(c,t,o,l,a)}else if(l=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"===typeof l)for(e=l.call(e),s=0;!(c=e.next()).done;)i+=$(c=c.value,t,o,l=u+C(c,s++),a);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function P(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},D={transition:null},N={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:D,ReactCurrentOwner:S};function U(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=a,t.PureComponent=_,t.StrictMode=u,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.act=U,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=S.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)x.call(t,s)&&!k.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==i?i[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:r,type:e.type,key:u,ref:a,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=U,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,r){return O.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,r){return O.current.useReducer(e,t,r)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return O.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},43:(e,t,r)=>{e.exports=r(202)},579:(e,t,r)=>{e.exports=r(153)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}var n=r(43);var o=r(579);const u=e=>{const{url:t,text:r,className:u,isDefault:a,children:c}=e,i=async t=>{null===t||void 0===t||t.preventDefault(),null===t||void 0===t||t.stopPropagation(),function(){var e,t;let{url:r=(null===(e=window)||void 0===e||null===(t=e.location)||void 0===t?void 0:t.href),text:n="",tab:o="_blank"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{const e=encodeURIComponent(r),t=encodeURIComponent(n),u=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(e)}&hashtag=${encodeURIComponent(t)}`;window.open(u,o)}catch(u){console.error("Error sharing via fb:",u)}}(e)};return a?(0,o.jsx)(n.Fragment,{children:(0,o.jsxs)("button",{className:"share-button",onClick:i,children:[c,(0,o.jsx)("i",{class:"fa fa-facebook-f","aria-hidden":"true",className:"facebook-svg"})]})}):(0,o.jsx)(o.Fragment,{})};u.defaultProps={text:"",description:"",url:"",isDefault:!0,children:(0,o.jsx)(o.Fragment,{})};const a=e=>{const t=async t=>{null===t||void 0===t||t.preventDefault(),null===t||void 0===t||t.stopPropagation(),function(){let{subject:e="",body:t="",tab:r="_blank"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{const n=`mailto:?subject=${encodeURIComponent(e)}&body=${encodeURIComponent(t)}`;window.open(n,r)}catch(n){console.error("Error sharing via email:",n)}}(e)};return e.isDefault,(0,o.jsx)(n.Fragment,{children:(0,o.jsxs)("button",{className:"share-button",onClick:t,children:[e.children,(0,o.jsx)("i",{className:"fa fa-envelope email-svg","aria-hidden":"true"})]})})};a.defaultProps={isDefault:!0,children:(0,o.jsx)(o.Fragment,{}),subject:"",body:"",tab:"_blank",className:"share-button"};const c=e=>{const t=async t=>{null===t||void 0===t||t.preventDefault(),null===t||void 0===t||t.stopPropagation(),function(){var e,t;let{url:r=(null===(e=window)||void 0===e||null===(t=e.location)||void 0===t?void 0:t.href),text:n="",tab:o="_blank"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{const e=encodeURIComponent(r),t=`https://twitter.com/intent/tweet?text=${encodeURIComponent(n)}&url=${e}`;window.open(t,o)}catch(u){console.error("Error sharing via twitter:",u)}}(e)};return e.isDefault,(0,o.jsx)(n.Fragment,{children:(0,o.jsxs)("button",{className:"share-button",onClick:t,children:[e.children,(0,o.jsx)("i",{className:"fa fa-twitter twitter-svg","aria-hidden":"true"})]})})};c.defaultProps={isDefault:!0,children:(0,o.jsx)(o.Fragment,{}),url:window.location.href,text:"",tab:"_blank",className:"share-button"}})();
//# sourceMappingURL=main.78b46d7c.js.map