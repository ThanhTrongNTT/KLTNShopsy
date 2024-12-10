import{b as v,r as P,B as l,j as e}from"./index-BNfdW5Yk.js";import{u as h,T as p}from"./TogglePassword-DtvHR9X2.js";import{I as o}from"./Input-C8sP8e7g.js";import{u as N}from"./index.esm-Byluce2_.js";import{c as k,a as C,o as S}from"./index.esm-LCD8qw9o.js";import{E,P as T,C as F}from"./schema-BMay9Lg1.js";import{L as A}from"./logo-CZ75ns0d.js";import{A as O}from"./authentication.api-I2xnM5p8.js";import"./Icon-BPiYwNCv.js";import"./classNames-BuontFX9.js";const H=k({email:E,password:T,confirmPassword:F,name:C().required("Please enter your name")}),D=()=>{var c,d,u,g;const m=v(),{value:n,handleToggleValue:f}=h(),{value:i,handleToggleValue:w}=h(),{handleSubmit:b,control:a,setFocus:y,formState:{errors:s}}=N({resolver:S(H),mode:"onSubmit"}),j=async r=>{if(r.password!==r.confirmPassword){l.error("Confirm password does not match",{autoClose:1e3,pauseOnHover:!1,draggable:!0,delay:50}),y("confirmPassword");return}const t={email:r.email,password:r.password,userProfile:{name:r.name}};await O.register(t).then(x=>{x.result&&(m("/login"),l.success(x.message,{autoClose:1e4,pauseOnHover:!0,draggable:!0,delay:50}))})};return P.useEffect(()=>{const r=Object.values(s);if(r.length>0&&r[0].message){const t=r[0].message;l.error(t.toString(),{autoClose:1e3,pauseOnHover:!1,draggable:!0,delay:50})}},[s]),e.jsx("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-gray-200 bg-banner-login bg-cover",children:e.jsx("div",{className:"w-full bg-white rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0",children:e.jsxs("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[e.jsx("div",{className:"text-black flex justify-center font-bold text-2xl pt-5 cursor-pointer",onClick:()=>m("/"),children:e.jsx("img",{className:"h-20 w-auto cursor-pointer",src:A,alt:""})}),e.jsx("h1",{className:"text-xl font-bold leading-tight tracking-tight pt-6 md:text-2xl text-black",children:"Create and account"}),e.jsxs("form",{className:"space-y-4 md:space-y-6",onSubmit:b(j),children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your email"}),e.jsx(o,{variant:"outlined",control:a,name:"email",type:"email",placeholder:"Email",error:((c=s.email)==null?void 0:c.message)??""})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"Name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your name"}),e.jsx(o,{variant:"outlined",control:a,name:"name",type:"text",placeholder:"Name",error:((d=s.name)==null?void 0:d.message)??""})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Password"}),e.jsx(o,{variant:"outlined",control:a,name:"password",type:n?"text":"password",placeholder:"Password",error:((u=s.password)==null?void 0:u.message)??"",children:e.jsx(p,{open:n,onClick:f})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"confirm-password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Confirm Password"}),e.jsx(o,{variant:"outlined",control:a,name:"confirmPassword",type:i?"text":"password",placeholder:"Confirm Password",error:((g=s.confirmPassword)==null?void 0:g.message)??"",children:e.jsx(p,{open:i,onClick:w})})]}),e.jsx("button",{type:"submit",className:"border-2 bg-cyan-300 border-white w-full text-white bg-primary-600 hover:bg-cyan-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 hover:text-black hover:duration-500",children:"Create an account"}),e.jsxs("p",{className:"text-sm font-light text-gray-400",children:["Already have an account?"," ",e.jsx("a",{href:"/login",className:"font-medium text-primary-600 hover:underline text-primary-500",children:"Login here"})]})]})]})})})};export{D as default};
