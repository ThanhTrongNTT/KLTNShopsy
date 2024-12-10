import{r as l,j as u}from"./index-rcsuNl_2.js";import{a as h}from"./index.esm-1yPZn37H.js";import{c as f}from"./classNames-BuontFX9.js";const y=l.createContext(null),p={didCatch:!1,error:null};let g=class extends l.Component{constructor(r){super(r),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=p}static getDerivedStateFromError(r){return{didCatch:!0,error:r}}resetErrorBoundary(){const{error:r}=this.state;if(r!==null){for(var e,t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];(e=(t=this.props).onReset)===null||e===void 0||e.call(t,{args:a,reason:"imperative-api"}),this.setState(p)}}componentDidCatch(r,e){var t,n;(t=(n=this.props).onError)===null||t===void 0||t.call(n,r,e)}componentDidUpdate(r,e){const{didCatch:t}=this.state,{resetKeys:n}=this.props;if(t&&e.error!==null&&x(r.resetKeys,n)){var a,o;(a=(o=this.props).onReset)===null||a===void 0||a.call(o,{next:n,prev:r.resetKeys,reason:"keys"}),this.setState(p)}}render(){const{children:r,fallbackRender:e,FallbackComponent:t,fallback:n}=this.props,{didCatch:a,error:o}=this.state;let i=r;if(a){const d={error:o,resetErrorBoundary:this.resetErrorBoundary};if(typeof e=="function")i=e(d);else if(t)i=l.createElement(t,d);else if(n!==void 0)i=n;else throw o}return l.createElement(y.Provider,{value:{didCatch:a,error:o,resetErrorBoundary:this.resetErrorBoundary}},i)}};function x(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return s.length!==r.length||s.some((e,t)=>!Object.is(e,r[t]))}function E(s,r){const e=l.forwardRef((n,a)=>l.createElement(g,r,l.createElement(s,{...n,ref:a}))),t=s.displayName||s.name||"Unknown";return e.displayName="withErrorBoundary(".concat(t,")"),e}const b=()=>u.jsx("div",{className:"rounded-lg bg-red-100 p-5 text-red-500",children:"Look like component is error"}),v=({pointer:s,variant:r,children:e,control:t,name:n,type:a,error:o="",placeholder:i="",...d})=>{const{field:m}=h({control:t,name:n,defaultValue:""});let c="text-sm font-medium font-Poppins transition-all w-full focus:outline-none focus:ring-2 focus:ring-c2 focus:ring-opacity-50 border border-gray-c3 rounded-xl px-6 py-4 text-c3";switch(r){case"outlined":c+="rounded-xl border bg-transparent px-6 py-4 text-c3";break;case"text":c=c;break}return u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:a,className:f(c,o.length>0?"border-red-700 text-red-700":"border-gray-c3 text-black",e?"pr-16":"",s&&"cursor-pointer","transition-all px-3 py-3 m-2 focus:border-none"),placeholder:o.length>0?o:i,...m,...d}),e&&u.jsx("span",{className:"absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer select-none",children:e})]})},j=E(v,{FallbackComponent:b});export{j as I};