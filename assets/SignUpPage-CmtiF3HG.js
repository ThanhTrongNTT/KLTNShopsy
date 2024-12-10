import{b as v,r as k,B as l,j as e,L as N}from"./index-U3IHK3J-.js";import{u as x,T as p}from"./TogglePassword-Bmu6xKQi.js";import{I as t}from"./Input-Cusj-UVN.js";import{u as P}from"./index.esm-B0W0m6Ci.js";import{c as T,a as C,o as S}from"./index.esm-VsV-ECDS.js";import{E,P as F,C as L}from"./schema-4_BAWby1.js";import{L as O}from"./logo-BQJkpfV5.js";import{A}from"./authentication.api-RN8rdxIv.js";import"./Icon-Bqf1QVmF.js";import"./classNames-BuontFX9.js";const H=T({email:E,password:F,confirmPassword:L,name:C().required("Please enter your name")}),G=()=>{var c,d,g,h;const n=v(),{value:i,handleToggleValue:f}=x(),{value:m,handleToggleValue:b}=x(),{handleSubmit:w,control:a,setFocus:y,formState:{errors:r}}=P({resolver:S(H),mode:"onSubmit"}),j=async s=>{if(s.password!==s.confirmPassword){l.error("Mật khẩu không giống nhau",{autoClose:1e3,pauseOnHover:!1,draggable:!0,delay:50}),y("confirmPassword");return}const o={email:s.email,password:s.password,userProfile:{name:s.name}};await A.register(o).then(u=>{u.result&&(n("/login"),l.success(u.message,{autoClose:1e4,pauseOnHover:!0,draggable:!0,delay:50}))})};return k.useEffect(()=>{const s=Object.values(r);if(s.length>0&&s[0].message){const o=s[0].message;l.error(o.toString(),{autoClose:1e3,pauseOnHover:!1,draggable:!0,delay:50})}},[r]),e.jsx("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-gray-200 bg-banner-login bg-cover",children:e.jsx("div",{className:"w-full bg-white rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0",children:e.jsxs("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[e.jsx("div",{className:"text-black flex justify-center font-bold text-2xl pt-5 cursor-pointer",onClick:()=>n("/"),children:e.jsx("img",{className:"h-20 w-auto cursor-pointer",src:O,alt:""})}),e.jsx("h1",{className:"text-xl font-bold leading-tight tracking-tight text-center pt-6 md:text-2xl text-black",children:"Tạo tài khoản"}),e.jsxs("form",{className:"space-y-4 md:space-y-6",onSubmit:w(j),children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Email"}),e.jsx(t,{variant:"outlined",control:a,name:"email",type:"email",placeholder:"Email",error:((c=r.email)==null?void 0:c.message)??""})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"Name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Tên người dùng"}),e.jsx(t,{variant:"outlined",control:a,name:"name",type:"text",placeholder:"Tên người dùng",error:((d=r.name)==null?void 0:d.message)??""})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Mật khẩu"}),e.jsx(t,{variant:"outlined",control:a,name:"password",type:i?"text":"password",placeholder:"Mật khẩu",error:((g=r.password)==null?void 0:g.message)??"",children:e.jsx(p,{open:i,onClick:f})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"confirm-password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Nhập lại mật khẩu"}),e.jsx(t,{variant:"outlined",control:a,name:"confirmPassword",type:m?"text":"password",placeholder:"Nhập lại mật khẩu",error:((h=r.confirmPassword)==null?void 0:h.message)??"",children:e.jsx(p,{open:m,onClick:b})})]}),e.jsx("button",{type:"submit",className:"border-2 bg-cyan-300 border-white w-full text-white bg-primary-600 hover:bg-cyan-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 hover:text-black hover:duration-500",children:"Tạo tài khoản"}),e.jsxs("p",{className:"text-sm font-light text-gray-400",children:["Đã có tài khoản?"," ",e.jsx(N,{to:"/login",className:"font-medium text-primary-600 hover:underline text-primary-500",children:"Đăng nhập"})]})]})]})})})};export{G as default};
