import{c as v,b as k,r as N,B as o,j as e,L as d,d as h,g as T}from"./index-B-tY19ju.js";import{L}from"./logo-BQJkpfV5.js";import{c as E,o as S}from"./index.esm-FRzgUneH.js";import{u as A}from"./index.esm-XeVgiBPz.js";import{u as _,T as U}from"./TogglePassword-DVuyaFHD.js";import{I as u}from"./Input-yhgYq0lF.js";import{A as G}from"./authentication.api-GOAvAHbx.js";import{E as H,P as O}from"./schema-CvkrwIes.js";import{j as P,u as C}from"./user.api-n0bpbcm_.js";import{b as I}from"./Icon-0DEkEerO.js";import"./classNames-BuontFX9.js";const R="/KLTNShopsy/assets/google-logo-BM7JBFoG.png",g="https://thanhtrongsport-be-production.up.railway.app",p="https://thanhtrongntt.github.io/KLTNShopsy",B=g+"/oauth2/authorization/google?redirect_uri="+p,F=g+"/oauth2/authorization/github?redirect_uri="+p,M=E({email:H,password:O}),Z=()=>{var c,m;const x=v(),{value:n,handleToggleValue:f}=_(),i=k(),b=async s=>{await G.login(s.email,s.password).then(async t=>{h.set("accessToken",t.data.accessToken),h.set("refreshToken",t.data.refreshToken);const w=P(t.data.accessToken||"");C.getMe(w.sub).then(r=>{const j=r.data;x(T(j))}).catch(r=>{o.error(r.message,{autoClose:500,delay:10,draggable:!0,pauseOnHover:!1,position:"bottom-right"})}),o.success("Login Success!",{autoClose:500,delay:10,draggable:!0,pauseOnHover:!0}),i("/")}).catch(t=>{t.status===404&&o.error("User does not existed!",{autoClose:500,delay:10,draggable:!0,pauseOnHover:!1})})},{handleSubmit:y,control:l,formState:{errors:a}}=A({resolver:S(M),mode:"onSubmit"});return N.useEffect(()=>{const s=Object.values(a);if(s.length>0&&s[0].message){const t=s[0].message;o.error(t.toString(),{autoClose:1e3,pauseOnHover:!1,draggable:!0,delay:50})}},[a]),e.jsx("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-gray-200 bg-banner-login bg-cover shadow-2xl",children:e.jsxs("div",{className:"w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 border-gray-700",children:[e.jsx("div",{className:"text-black flex justify-center font-bold text-2xl pt-5 cursor-pointer",onClick:()=>i("/"),children:e.jsx("img",{className:"h-20 w-auto cursor-pointer",src:L,alt:""})}),e.jsxs("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[e.jsx("h1",{className:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Đăng nhập"}),e.jsxs("form",{className:"space-y-4 md:space-y-6",onSubmit:y(b),children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Email"}),e.jsx(u,{variant:"outlined",control:l,name:"email",type:"email",placeholder:"Email",error:((c=a.email)==null?void 0:c.message)??""})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Mật khẩu"}),e.jsx(u,{variant:"outlined",control:l,name:"password",type:n?"text":"password",placeholder:"Mật khẩu",error:((m=a.password)==null?void 0:m.message)??"",children:e.jsx(U,{open:n,onClick:f})})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(d,{to:"/forgot-password",className:"text-sm font-medium text-black hover:underline",children:"Quên mật khẩu?"})}),e.jsx("button",{type:"submit",className:"border-2 bg-cyan-300 border-white w-full text-white bg-primary-600 hover:bg-cyan-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 hover:text-black hover:duration-500",children:"Đăng nhập"}),e.jsxs("p",{className:"text-sm font-light text-gray-400",children:["Bạn chưa có tài khoản?"," ",e.jsx(d,{to:"/sign-up",className:"font-medium text-primary-600 hover:underline text-primary-500",children:"Đăng ký"})]})]}),e.jsxs("div",{className:"flex flex-col mt-8 gap-y-4",children:[e.jsxs("a",{className:"hover:scale-110 ease-in-out duration-300 transition flex items-center justify-center gap-2 border border-gray-200 w-full py-3 mb-4 text-gray-800 font-bold text-sm uppercase bg-white rounded-lg shadow-md",href:B,children:[e.jsx("img",{src:R,className:"h-6 w-6",alt:"Google"})," ","Đăng nhập với Google"]}),e.jsxs("a",{className:"hover:scale-110 ease-in-out flex items-center justify-center w-full py-3 mb-4 text-white font-bold text-sm uppercase bg-gray-800 rounded-lg shadow-md transition duration-300",href:F,children:[e.jsx(I,{})," Đăng nhập với Github"]})]})]})]})})};export{Z as default};
