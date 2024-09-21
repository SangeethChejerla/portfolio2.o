import{a as S,r as i}from"./index.BiFHKRHA.js";import{c as N,a as z,u as A}from"./index.YD8_icbL.js";import{u as w,S as y}from"./index.Dve5_t-8.js";import{j as x}from"./jsx-runtime.B1YlcU0w.js";function B(e){const t=e+"CollectionProvider",[o,n]=N(t),[r,s]=o(t,{collectionRef:{current:null},itemMap:new Map}),a=C=>{const{scope:f,children:h}=C,d=S.useRef(null),m=S.useRef(new Map).current;return x.jsx(r,{scope:f,itemMap:m,collectionRef:d,children:h})};a.displayName=t;const l=e+"CollectionSlot",u=S.forwardRef((C,f)=>{const{scope:h,children:d}=C,m=s(l,h),p=w(f,m.collectionRef);return x.jsx(y,{ref:p,children:d})});u.displayName=l;const c=e+"CollectionItemSlot",v="data-radix-collection-item",R=S.forwardRef((C,f)=>{const{scope:h,children:d,...m}=C,p=S.useRef(null),E=w(f,p),b=s(c,h);return S.useEffect(()=>(b.itemMap.set(p,{ref:p,...m}),()=>void b.itemMap.delete(p))),x.jsx(y,{[v]:"",ref:E,children:d})});R.displayName=c;function I(C){const f=s(e+"CollectionConsumer",C);return S.useCallback(()=>{const d=f.collectionRef.current;if(!d)return[];const m=Array.from(d.querySelectorAll(`[${v}]`));return Array.from(f.itemMap.values()).sort((b,M)=>m.indexOf(b.ref.current)-m.indexOf(M.ref.current))},[f.collectionRef,f.itemMap])}return[{Provider:a,Slot:u,ItemSlot:R},I,n]}var O=i.createContext(void 0);function H(e){const t=i.useContext(O);return e||t||"ltr"}function W(e,t,{checkForDefaultPrevented:o=!0}={}){return function(r){if(e?.(r),o===!1||!r.defaultPrevented)return t?.(r)}}function U(e){const[t,o]=i.useState(void 0);return z(()=>{if(e){o({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const s=r[0];let a,l;if("borderBoxSize"in s){const u=s.borderBoxSize,c=Array.isArray(u)?u[0]:u;a=c.inlineSize,l=c.blockSize}else a=e.offsetWidth,l=e.offsetHeight;o({width:a,height:l})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else o(void 0)},[e]),t}function q({prop:e,defaultProp:t,onChange:o=()=>{}}){const[n,r]=k({defaultProp:t,onChange:o}),s=e!==void 0,a=s?e:n,l=A(o),u=i.useCallback(c=>{if(s){const R=typeof c=="function"?c(e):c;R!==e&&l(R)}else r(c)},[s,e,r,l]);return[a,u]}function k({defaultProp:e,onChange:t}){const o=i.useState(e),[n]=o,r=i.useRef(n),s=A(t);return i.useEffect(()=>{r.current!==n&&(s(n),r.current=n)},[n,r,s]),o}/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g=(...e)=>e.filter((t,o,n)=>!!t&&n.indexOf(t)===o).join(" ");/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:n,className:r="",children:s,iconNode:a,...l},u)=>i.createElement("svg",{ref:u,...P,width:t,height:t,stroke:e,strokeWidth:n?Number(o)*24/Number(t):o,className:g("lucide",r),...l},[...a.map(([c,v])=>i.createElement(c,v)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=(e,t)=>{const o=i.forwardRef(({className:n,...r},s)=>i.createElement(T,{ref:s,iconNode:t,className:g(`lucide-${L(e)}`,n),...r}));return o.displayName=`${e}`,o};export{B as a,H as b,W as c,q as d,K as e,U as u};
