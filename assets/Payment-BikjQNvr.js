import{r as a,c as b,b as y,u as j,B as c,j as e,C}from"./index-rcsuNl_2.js";import{L as N}from"./Label-BMVc37tj.js";import{o as i}from"./order.api-BVu2QJ_r.js";import"./classNames-BuontFX9.js";const O={id:"",productsCount:0,note:"",user:null,subTotal:0,tax:0,total:0,status:"",paymentMethod:"",address:null,isPaid:!1},w=()=>{const[d,u]=a.useState(!0),h=b(),n=y(),{userInfo:s}=j(t=>t.user),[r,m]=a.useState("COD"),[o,v]=a.useState(JSON.parse(localStorage.getItem("order")??"{}")),[g,f]=a.useState(O),l=t=>{m(t)},p=async()=>{console.log("Order: ",o),o.order.status="PENDING",o.order.paymentMethod=r,await i.createOrder(o).then(t=>{t.result&&(console.log("Order created: ",t.data),f(t.data),h(C()))}),r==="Momo"?await i.paymentMomo(g).then(t=>{if(t.result){console.log("Redirect to Momo: ",t.data);const x=JSON.parse(t.data);window.location.href=x.payUrl,localStorage.removeItem("order")}}):(localStorage.removeItem("order"),c.success("Order has been created successfully.",{autoClose:1e3,pauseOnHover:!0,draggable:!0,delay:50}),n("/profile",{replace:!0}))};return a.useEffect(()=>{s.id===""?(c.error("You need to login to view this page.",{autoClose:1e3,pauseOnHover:!0,draggable:!0,delay:50}),n("/login",{replace:!0})):u(!1)},[n,s]),d?null:e.jsx("div",{className:"flex justify-center h-screen",children:e.jsxs("div",{className:"flex flex-col w-1/2 p-10 m-10",children:[e.jsx(N,{htmlFor:"",className:"flex justify-center font-extrabold uppercase px-2 text-xl m-10",children:"Phương thức thanh toán"}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex justify-between border border-b-gray-400",children:[e.jsxs("div",{className:"items-center content-center flex justify-items-center p-10",children:[e.jsx("input",{id:"radio-cod",type:"radio",value:"COD",name:"payment-method",className:"text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",checked:r==="COD",onChange:()=>l("COD")}),e.jsx("label",{htmlFor:"radio-cod",className:"px-2 text-base font-normal",children:"Thanh toán khi giao hàng (COD)"})]}),e.jsxs("div",{className:"items-center content-center flex justify-items-center p-10",children:[e.jsx("input",{id:"radio-momo",type:"radio",value:"Momo",name:"payment-method",className:"text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",checked:r==="Momo",onChange:()=>l("Momo")}),e.jsx("label",{htmlFor:"radio-momo",className:"px-2 text-base font-normal",children:"Thanh toán bằng Momo"})]})]}),e.jsxs("div",{className:"p-10 bg-gray-100 text-center items-center content-center",children:[r==="COD"&&e.jsx("p",{children:"Cảm ơn bạn đã lựa chọn thanh toán khi giao hàng (COD). Chúng tôi sẽ liên hệ để xác nhận đơn hàng qua điện thoại."}),r==="Momo"&&e.jsx("p",{children:"Bạn đã chọn thanh toán bằng Momo. Sau khi xác nhận, bạn sẽ được chuyển hướng đến Momo để hoàn tất giao dịch."})]})]}),e.jsx("div",{className:"flex justify-center p-10",children:e.jsx("button",{className:"bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all",onClick:p,children:"Xác nhận đặt hàng"})})]})})};export{w as default};