import{u as o,r as t,b as n,j as e}from"./index-rcsuNl_2.js";import{P as i}from"./ToggleSwitch-C00oP2Zh.js";import"./index-CFGV0JZl.js";const p=()=>{const{userInfo:s}=o(l=>l.user),[a,r]=t.useState(!0),c=n();return t.useEffect(()=>{s.id===""?c("/login"):r(!1)},[s]),a?null:e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-lg",children:"Lịch sử đơn hàng"}),e.jsx("div",{className:"p-5",children:e.jsx("div",{className:"overflow-x-auto rounded-2xl border mx-4 border-gray-c4 ",children:e.jsx("table",{className:"bg-white w-full text-sm text-left text-gray-400",children:e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"p-3",children:"Total Price"}),e.jsx("th",{scope:"col",className:"p-3",children:"Status"}),e.jsx("th",{scope:"col",className:"p-3",children:"Payment Method"}),e.jsx("th",{scope:"col",className:"p-3",children:"Is Paid"}),e.jsx("th",{scope:"col",className:"p-3 text-center",children:"Action"})]})})})})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(i,{showIcons:!0,currentPage:1,totalPages:0,onPageChange:()=>{},layout:"pagination"})})]})};export{p as default};