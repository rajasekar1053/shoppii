import{a as C,R as L}from"./react-BJSe_0y8.js";import{w as M}from"./use-sync-external-store-Bl9xUlXM.js";var o="default"in C?L:C,g=Symbol.for("react-redux-context"),w=typeof globalThis<"u"?globalThis:{};function T(){if(!o.createContext)return{};const e=w[g]??(w[g]=new Map);let r=e.get(o.createContext);return r||(r=o.createContext(null),e.set(o.createContext,r)),r}var c=T(),U=()=>{throw new Error("uSES not initialized!")};function v(e=c){return function(){return o.useContext(e)}}var R=v(),E=U,D=e=>{E=e},H=(e,r)=>e===r;function P(e=c){const r=e===c?R:v(e),t=(n,s={})=>{const{equalityFn:i=H,devModeChecks:a={}}=typeof s=="function"?{equalityFn:s}:s,{store:l,subscription:f,getServerState:u,stabilityCheck:b,identityFunctionCheck:p}=r();o.useRef(!0);const x=o.useCallback({[n.name](d){return n(d)}}[n.name],[n,b,a.stabilityCheck]),S=E(f.addNestedSub,l.getState,u||l.getState,x,i);return o.useDebugValue(S),S};return Object.assign(t,{withTypes:()=>t}),t}var $=P();function V(e){e()}function j(){let e=null,r=null;return{clear(){e=null,r=null},notify(){V(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){const t=[];let n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(t){let n=!0;const s=r={callback:t,next:null,prev:r};return s.prev?s.prev.next=s:e=s,function(){!n||e===null||(n=!1,s.next?s.next.prev=s.prev:r=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}var m={notify(){},get:()=>[]};function z(e,r){let t,n=m,s=0,i=!1;function a(y){b();const N=n.subscribe(y);let h=!1;return()=>{h||(h=!0,N(),p())}}function l(){n.notify()}function f(){d.onStateChange&&d.onStateChange()}function u(){return i}function b(){s++,t||(t=r?r.addNestedSub(f):e.subscribe(f),n=j())}function p(){s--,t&&s===0&&(t(),t=void 0,n.clear(),n=m)}function x(){i||(i=!0,b())}function S(){i&&(i=!1,p())}const d={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:f,isSubscribed:u,trySubscribe:x,tryUnsubscribe:S,getListeners:()=>n};return d}var W=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_=W?o.useLayoutEffect:o.useEffect;function I({store:e,context:r,children:t,serverState:n,stabilityCheck:s="once",identityFunctionCheck:i="once"}){const a=o.useMemo(()=>{const u=z(e);return{store:e,subscription:u,getServerState:n?()=>n:void 0,stabilityCheck:s,identityFunctionCheck:i}},[e,n,s,i]),l=o.useMemo(()=>e.getState(),[e]);_(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),l!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,l]);const f=r||c;return o.createElement(f.Provider,{value:a},t)}var F=I;function k(e=c){const r=e===c?R:v(e),t=()=>{const{store:n}=r();return n};return Object.assign(t,{withTypes:()=>t}),t}var q=k();function A(e=c){const r=e===c?q:k(e),t=()=>r().dispatch;return Object.assign(t,{withTypes:()=>t}),t}var G=A();D(M.useSyncExternalStoreWithSelector);export{F as P,G as a,$ as u};
