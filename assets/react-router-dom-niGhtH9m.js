import{r as i,a as Z}from"./react-BJSe_0y8.js";import{R as $}from"./react-dom-DoFaDyJA.js";import{m as ee,D as Y,a as V,R as te,u as ne,N as F,b as ie,c as ae,d as K,e as A,f as re,g as oe}from"./react-router-CI5NvMvA.js";import{b as se,d as le,E as ue,s as N,e as B,i as j,f as W}from"./@remix-run-C1m2vfpv.js";/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},P.apply(this,arguments)}function G(n,t){if(n==null)return{};var e={},r=Object.keys(n),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(e[a]=n[a]);return e}function ce(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function fe(n,t){return n.button===0&&(!t||t==="_self")&&!ce(n)}const de=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],he=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],ve="6";try{window.__reactRouterVersion=ve}catch{}function De(n,t){return se({basename:t==null?void 0:t.basename,future:P({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:le({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||pe(),routes:n,mapRouteProperties:ee,window:t==null?void 0:t.window}).initialize()}function pe(){var n;let t=(n=window)==null?void 0:n.__staticRouterHydrationData;return t&&t.errors&&(t=P({},t,{errors:me(t.errors)})),t}function me(n){if(!n)return null;let t=Object.entries(n),e={};for(let[r,a]of t)if(a&&a.__type==="RouteErrorResponse")e[r]=new ue(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let s=window[a.__subType];if(typeof s=="function")try{let l=new s(a.message);l.stack="",e[r]=l}catch{}}if(e[r]==null){let s=new Error(a.message);s.stack="",e[r]=s}}else e[r]=a;return e}const J=i.createContext({isTransitioning:!1}),we=i.createContext(new Map),ye="startTransition",H=Z[ye],ge="flushSync",M=$[ge];function Se(n){H?H(n):n()}function O(n){M?M(n):n()}class Re{constructor(){this.status="pending",this.promise=new Promise((t,e)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",e(r))}})}}function Ve(n){let{fallbackElement:t,router:e,future:r}=n,[a,s]=i.useState(e.state),[l,c]=i.useState(),[h,u]=i.useState({isTransitioning:!1}),[o,w]=i.useState(),[v,R]=i.useState(),[y,E]=i.useState(),T=i.useRef(new Map),{v7_startTransition:C}=r||{},p=i.useCallback(d=>{C?Se(d):d()},[C]),m=i.useCallback((d,S)=>{let{deletedFetchers:g,unstable_flushSync:_,unstable_viewTransitionOpts:L}=S;g.forEach(b=>T.current.delete(b)),d.fetchers.forEach((b,Q)=>{b.data!==void 0&&T.current.set(Q,b.data)});let q=e.window==null||typeof e.window.document.startViewTransition!="function";if(!L||q){_?O(()=>s(d)):p(()=>s(d));return}if(_){O(()=>{v&&(o&&o.resolve(),v.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:L.currentLocation,nextLocation:L.nextLocation})});let b=e.window.document.startViewTransition(()=>{O(()=>s(d))});b.finished.finally(()=>{O(()=>{w(void 0),R(void 0),c(void 0),u({isTransitioning:!1})})}),O(()=>R(b));return}v?(o&&o.resolve(),v.skipTransition(),E({state:d,currentLocation:L.currentLocation,nextLocation:L.nextLocation})):(c(d),u({isTransitioning:!0,flushSync:!1,currentLocation:L.currentLocation,nextLocation:L.nextLocation}))},[e.window,v,o,T,p]);i.useLayoutEffect(()=>e.subscribe(m),[e,m]),i.useEffect(()=>{h.isTransitioning&&!h.flushSync&&w(new Re)},[h]),i.useEffect(()=>{if(o&&l&&e.window){let d=l,S=o.promise,g=e.window.document.startViewTransition(async()=>{p(()=>s(d)),await S});g.finished.finally(()=>{w(void 0),R(void 0),c(void 0),u({isTransitioning:!1})}),R(g)}},[p,l,o,e.window]),i.useEffect(()=>{o&&l&&a.location.key===l.location.key&&o.resolve()},[o,v,a.location,l]),i.useEffect(()=>{!h.isTransitioning&&y&&(c(y.state),u({isTransitioning:!0,flushSync:!1,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),E(void 0))},[h.isTransitioning,y]),i.useEffect(()=>{},[]);let f=i.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:d=>e.navigate(d),push:(d,S,g)=>e.navigate(d,{state:S,preventScrollReset:g==null?void 0:g.preventScrollReset}),replace:(d,S,g)=>e.navigate(d,{replace:!0,state:S,preventScrollReset:g==null?void 0:g.preventScrollReset})}),[e]),x=e.basename||"/",k=i.useMemo(()=>({router:e,navigator:f,static:!1,basename:x}),[e,f,x]);return i.createElement(i.Fragment,null,i.createElement(Y.Provider,{value:k},i.createElement(V.Provider,{value:a},i.createElement(we.Provider,{value:T.current},i.createElement(J.Provider,{value:h},i.createElement(te,{basename:x,location:a.location,navigationType:a.historyAction,navigator:f,future:{v7_relativeSplatPath:e.future.v7_relativeSplatPath}},a.initialized||e.future.v7_partialHydration?i.createElement(Te,{routes:e.routes,future:e.future,state:a}):t))))),null)}function Te(n){let{routes:t,future:e,state:r}=n;return ne(t,void 0,r,e)}const Le=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xe=i.forwardRef(function(t,e){let{onClick:r,relative:a,reloadDocument:s,replace:l,state:c,target:h,to:u,preventScrollReset:o,unstable_viewTransition:w}=t,v=G(t,de),{basename:R}=i.useContext(F),y,E=!1;if(typeof u=="string"&&Ee.test(u)&&(y=u,Le))try{let m=new URL(window.location.href),f=u.startsWith("//")?new URL(m.protocol+u):new URL(u),x=N(f.pathname,R);f.origin===m.origin&&x!=null?u=x+f.search+f.hash:E=!0}catch{}let T=ie(u,{relative:a}),C=be(u,{replace:l,state:c,target:h,preventScrollReset:o,relative:a,unstable_viewTransition:w});function p(m){r&&r(m),m.defaultPrevented||C(m)}return i.createElement("a",P({},v,{href:y||T,onClick:E||s?r:p,ref:e,target:h}))}),Fe=i.forwardRef(function(t,e){let{"aria-current":r="page",caseSensitive:a=!1,className:s="",end:l=!1,style:c,to:h,unstable_viewTransition:u,children:o}=t,w=G(t,he),v=A(h,{relative:w.relative}),R=K(),y=i.useContext(V),{navigator:E,basename:T}=i.useContext(F),C=y!=null&&ke(v)&&u===!0,p=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,m=R.pathname,f=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;a||(m=m.toLowerCase(),f=f?f.toLowerCase():null,p=p.toLowerCase()),f&&T&&(f=N(f,T)||f);const x=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let k=m===p||!l&&m.startsWith(p)&&m.charAt(x)==="/",d=f!=null&&(f===p||!l&&f.startsWith(p)&&f.charAt(p.length)==="/"),S={isActive:k,isPending:d,isTransitioning:C},g=k?r:void 0,_;typeof s=="function"?_=s(S):_=[s,k?"active":null,d?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let L=typeof c=="function"?c(S):c;return i.createElement(xe,P({},w,{"aria-current":g,className:_,ref:e,style:L,to:h,unstable_viewTransition:u}),typeof o=="function"?o(S):o)});function Ke(n){let{getKey:t,storageKey:e}=n;return Pe({getKey:t,storageKey:e}),null}var I;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(I||(I={}));var D;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(D||(D={}));function X(n){let t=i.useContext(Y);return t||j(!1),t}function Ce(n){let t=i.useContext(V);return t||j(!1),t}function be(n,t){let{target:e,replace:r,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:c}=t===void 0?{}:t,h=ae(),u=K(),o=A(n,{relative:l});return i.useCallback(w=>{if(fe(w,e)){w.preventDefault();let v=r!==void 0?r:B(u)===B(o);h(n,{replace:v,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:c})}},[u,h,o,r,a,e,n,s,l,c])}const z="react-router-scroll-positions";let U={};function Pe(n){let{getKey:t,storageKey:e}=n===void 0?{}:n,{router:r}=X(I.UseScrollRestoration),{restoreScrollPosition:a,preventScrollReset:s}=Ce(D.UseScrollRestoration),{basename:l}=i.useContext(F),c=K(),h=re(),u=oe();i.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),_e(i.useCallback(()=>{if(u.state==="idle"){let o=(t?t(c,h):null)||c.key;U[o]=window.scrollY}try{sessionStorage.setItem(e||z,JSON.stringify(U))}catch{}window.history.scrollRestoration="auto"},[e,t,u.state,c,h])),typeof document<"u"&&(i.useLayoutEffect(()=>{try{let o=sessionStorage.getItem(e||z);o&&(U=JSON.parse(o))}catch{}},[e]),i.useLayoutEffect(()=>{let o=t&&l!=="/"?(v,R)=>t(P({},v,{pathname:N(v.pathname,l)||v.pathname}),R):t,w=r==null?void 0:r.enableScrollRestoration(U,()=>window.scrollY,o);return()=>w&&w()},[r,l,t]),i.useLayoutEffect(()=>{if(a!==!1){if(typeof a=="number"){window.scrollTo(0,a);return}if(c.hash){let o=document.getElementById(decodeURIComponent(c.hash.slice(1)));if(o){o.scrollIntoView();return}}s!==!0&&window.scrollTo(0,0)}},[c,a,s]))}function _e(n,t){let{capture:e}=t||{};i.useEffect(()=>{let r=e!=null?{capture:e}:void 0;return window.addEventListener("pagehide",n,r),()=>{window.removeEventListener("pagehide",n,r)}},[n,e])}function ke(n,t){t===void 0&&(t={});let e=i.useContext(J);e==null&&j(!1);let{basename:r}=X(I.useViewTransitionState),a=A(n,{relative:t.relative});if(!e.isTransitioning)return!1;let s=N(e.currentLocation.pathname,r)||e.currentLocation.pathname,l=N(e.nextLocation.pathname,r)||e.nextLocation.pathname;return W(a.pathname,l)!=null||W(a.pathname,s)!=null}export{xe as L,Fe as N,Ve as R,Ke as S,De as c};