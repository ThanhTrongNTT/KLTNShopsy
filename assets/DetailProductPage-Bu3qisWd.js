import{b as Q,c as Y,i as J,u as g,r as i,k as _,l as ee,m as se,n as ae,v as te,o as re,j as e,B as T,q as le,p as B}from"./index-D-eLugpM.js";import{c as p}from"./classNames-BuontFX9.js";import{S as v}from"./index-ACA11s5k.js";import{R as ie,L as ne}from"./Icon-C7d-iepv.js";import{P as N}from"./ProductItem-C0cfwC1R.js";import{a as u}from"./ToggleSwitch-DR2CD_xf.js";import"./index-BmI-qxXo.js";import"./ImageCustom-fjbINf9m.js";const oe={id:"",color:null,size:"",stock:1,mainImage:null,product:null},ce=["XS","S","M","L","XL","XXL"],ye=()=>{var w,S,C,k,z,P,I,L,A,M;const D=Q(),d=Y(),{slug:H}=J(),R=g(a=>a.cart.items),[s,F]=i.useState(null),[o,X]=i.useState([]),[n,G]=i.useState(oe),x=g(_),m=g(ee),h=g(se),[r,K]=i.useState(null),[f,O]=i.useState("");i.useState(1);const[c,j]=i.useState("description");var y={speed:500,slidesToScroll:4,infinite:!1,autoplay:!0,autoplaySpeed:2e3,cssEase:"linear",pauseOnHover:!0,pauseOnFocus:!0,nextArrow:e.jsx(ie,{}),prevArrow:e.jsx(ne,{}),responsive:[{breakpoint:1e4,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:640,settings:{slidesToShow:1,slidesToScroll:1}}]};const U=(()=>{const a=new Map;return o.forEach(t=>{const{color:l}=t;if(l&&l.id)if(a.has(l.id)){const E=a.get(l.id);E&&E.productItems.push(t)}else a.set(l.id,{color:l,productItems:[t]})}),Array.from(a.values())})(),V=()=>{const a=o.find(t=>{var l;return((l=t.color)==null?void 0:l.id)===(r==null?void 0:r.color.id)&&t.size===f});d(le(a)),T.success("Product added to cart.",{autoClose:1e3,pauseOnHover:!0,draggable:!0,delay:50})},$=a=>{G(a),a.size&&O(a.size)},b=()=>{if(!n||!n.stock)return!0;const a=n.stock;return R.every(t=>t.quantity&&t.quantity<a)},q=async a=>{B.getProductItemsList(a).then(t=>{t.result&&X(t.data)})},W=async()=>{B.getProductBySlug(H).then(a=>{a.result&&(F(a.data),a.data.id&&q(a.data.id))}).catch(a=>{a.response.data.result||D("/not-found")})};i.useEffect(()=>{W(),d(ae()),d(te()),d(re())},[]),i.useEffect(()=>{console.log(n)},[n]);const Z=a=>{K(a)};return e.jsxs("div",{className:"font-[sans-serif]",children:[e.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx("div",{className:"flex items-baseline justify-between py-3",children:e.jsxs(u,{children:[e.jsx(u.Item,{href:"#",children:e.jsx("span",{className:"font-bold",children:"Home"})}),e.jsx(u.Item,{href:`/product?gender=${(w=s==null?void 0:s.gender)==null?void 0:w.categoryName}`,children:e.jsx("span",{className:"font-bold",children:(C=(S=s==null?void 0:s.gender)==null?void 0:S.locale)==null?void 0:C.toUpperCase()})}),e.jsx(u.Item,{children:(k=s==null?void 0:s.category)==null?void 0:k.locale})]})}),e.jsxs("div",{className:"grid items-start grid-cols-1 lg:grid-cols-2 gap-10",children:[e.jsxs("div",{className:"w-full top-0 text-center",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:"https://readymadeui.com/images/product1.webp",alt:"Shirt",className:"lg:w-2/3 w-1/3 h-1/3 lg:h-full rounded-xl object-cover object-top"})}),e.jsx("div",{className:"flex gap-x-8 gap-y-6 justify-center mx-auto mt-6",children:(s==null?void 0:s.subImages)&&(s==null?void 0:s.subImages.length)>1&&(s==null?void 0:s.subImages.map(a=>e.jsx("img",{src:a.url,alt:a.fileName,className:"w-20 cursor-pointer rounded-xl overflow-hidden transition transform duration-300 ease-in-out hover:scale-110 hover:border hover:border-gray-300"},a.id)))})]}),e.jsxs("div",{className:"w-3/4",children:[e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"font-semibold text-gray-800",children:s==null?void 0:s.productName}),e.jsx("p",{className:"text-sm text-gray-400 mt-2",children:((P=(z=s==null?void 0:s.gender)==null?void 0:z.locale)==null?void 0:P.toUpperCase())||""})]}),e.jsxs("div",{className:"ml-auto h-fit flex flex-wrap gap-4",children:[e.jsxs("button",{type:"button",onClick:()=>{T.success("Add to wishlist",{autoClose:1e3,delay:10,draggable:!0,pauseOnHover:!1})},className:"px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12px",fill:"currentColor",className:"mr-1",viewBox:"0 0 64 64",children:e.jsx("path",{d:"M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z","data-original":"#000000"})}),"100"]}),e.jsx("button",{type:"button",className:"px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12px",fill:"currentColor",viewBox:"0 0 512 512",children:[e.jsx("path",{d:"M453.332 85.332c0 38.293-31.039 69.336-69.332 69.336s-69.332-31.043-69.332-69.336C314.668 47.043 345.707 16 384 16s69.332 31.043 69.332 69.332zm0 0","data-original":"#000000"}),e.jsx("path",{d:"M384 170.668c-47.063 0-85.332-38.273-85.332-85.336C298.668 38.273 336.938 0 384 0s85.332 38.273 85.332 85.332c0 47.063-38.27 85.336-85.332 85.336zM384 32c-29.418 0-53.332 23.938-53.332 53.332 0 29.398 23.914 53.336 53.332 53.336s53.332-23.938 53.332-53.336C437.332 55.938 413.418 32 384 32zm69.332 394.668C453.332 464.957 422.293 496 384 496s-69.332-31.043-69.332-69.332c0-38.293 31.039-69.336 69.332-69.336s69.332 31.043 69.332 69.336zm0 0","data-original":"#000000"}),e.jsx("path",{d:"M384 512c-47.063 0-85.332-38.273-85.332-85.332 0-47.063 38.27-85.336 85.332-85.336s85.332 38.273 85.332 85.336c0 47.059-38.27 85.332-85.332 85.332zm0-138.668c-29.418 0-53.332 23.938-53.332 53.336C330.668 456.063 354.582 480 384 480s53.332-23.938 53.332-53.332c0-29.398-23.914-53.336-53.332-53.336zM154.668 256c0 38.293-31.043 69.332-69.336 69.332C47.043 325.332 16 294.293 16 256s31.043-69.332 69.332-69.332c38.293 0 69.336 31.039 69.336 69.332zm0 0","data-original":"#000000"}),e.jsx("path",{d:"M85.332 341.332C38.273 341.332 0 303.062 0 256s38.273-85.332 85.332-85.332c47.063 0 85.336 38.27 85.336 85.332s-38.273 85.332-85.336 85.332zm0-138.664C55.914 202.668 32 226.602 32 256s23.914 53.332 53.332 53.332c29.422 0 53.336-23.934 53.336-53.332s-23.914-53.332-53.336-53.332zm0 0","data-original":"#000000"}),e.jsx("path",{d:"M135.703 245.762c-7.426 0-14.637-3.864-18.562-10.774-5.825-10.218-2.239-23.254 7.98-29.101l197.95-112.852c10.218-5.867 23.253-2.281 29.1 7.977 5.825 10.218 2.24 23.254-7.98 29.101L146.238 242.965a21.195 21.195 0 0 1-10.535 2.797zm197.93 176c-3.586 0-7.211-.899-10.54-2.797L125.142 306.113c-10.22-5.824-13.801-18.86-7.977-29.101 5.8-10.239 18.856-13.844 29.098-7.977l197.953 112.852c10.219 5.824 13.8 18.86 7.976 29.101-3.945 6.91-11.156 10.774-18.558 10.774zm0 0","data-original":"#000000"})]})})]})]}),e.jsx("hr",{className:"my-8"}),o.length>0?e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col mb-4 gap-y-2",children:[e.jsx("div",{className:"flex items-center gap-x-4",children:U.map(a=>e.jsx("button",{className:`w-10 h-10 rounded-full border ${(r==null?void 0:r.color.name)===a.color.name?"border-black scale-110 border-2":"border-gray-300 border-4"} hover:border-gray-400 transition-transform duration-200 transform`,style:{backgroundColor:a.color.code},onClick:()=>Z(a),"aria-label":`Select color ${a.color}`},a.color.id))}),e.jsxs("span",{className:"text-[#6a6a6a] text-sm",children:["Màu sắc:"," ",r==null?void 0:r.color.displayCode," ",r==null?void 0:r.color.name]})]}),e.jsxs("div",{className:"flex flex-col mb-4 gap-y-2",children:[e.jsx("div",{className:"flex space-x-2",children:r?r.productItems.map((a,t)=>e.jsx("button",{className:`px-4 py-2 border rounded-lg text-sm font-medium ${a.size===f?"border-gray-500 bg-gray-200 shadow-lg":"border-gray-300"} hover:bg-gray-100 hover:shadow transition-all duration-200`,onClick:()=>$(a),children:a.size},t)):ce.map((a,t)=>e.jsx("button",{className:" cursor-not-allowed px-4 py-2 border rounded-lg text-sm font-medium",children:a},t))}),e.jsxs("span",{className:"text-[#6a6a6a] text-sm ",children:["Kích cỡ: ",(I=s==null?void 0:s.gender)==null?void 0:I.locale," ",f]})]})]}):e.jsx(e.Fragment,{children:" Không có sản phẩm phù hợp"}),e.jsx("hr",{className:"my-8"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap gap-4 items-start justify-between mb-5",children:[e.jsx("div",{children:(s==null?void 0:s.basePrice)===(s==null?void 0:s.promoPrice)?e.jsx(e.Fragment,{children:e.jsx("p",{children:e.jsx("span",{className:"text-lg font-semibold text-black dark:text-[#E0E0E0]",children:(L=s==null?void 0:s.basePrice)==null?void 0:L.toLocaleString("it-IT",{style:"currency",currency:"VND"})})})}):e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx("span",{className:"text-lg font-semibold line-through text-black dark:text-[#E0E0E0]",children:(A=s==null?void 0:s.basePrice)==null?void 0:A.toLocaleString("it-IT",{style:"currency",currency:"VND"})})}),e.jsx("p",{children:e.jsx("span",{className:"text-2xl font-bold text-red-500 dark:text-[#E0E0E0]",children:(M=s==null?void 0:s.promoPrice)==null?void 0:M.toLocaleString("it-IT",{style:"currency",currency:"VND"})})})]})}),e.jsx("span",{className:"text-base text-red-500",children:(s==null?void 0:s.sales)&&(s==null?void 0:s.sales.description)})]}),o.length===0?e.jsx("span",{className:"text-gray-500",children:"Không có sản phẩm phù hợp"}):n.id!==""&&!b()?e.jsx("span",{className:"text-red-500",children:"Hết hàng"}):null]}),e.jsxs("div",{className:"flex flex-wrap gap-4 h-fit",children:[e.jsxs("span",{className:"px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center",children:[e.jsx("svg",{className:"w-3 mr-1",fill:"currentColor",viewBox:"0 0 14 13",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"})}),"4.8"]}),e.jsxs("button",{type:"button",className:"px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-3 mr-1",fill:"currentColor",viewBox:"0 0 32 32",children:[e.jsx("path",{d:"M14.236 21.954h-3.6c-.91 0-1.65-.74-1.65-1.65v-7.201c0-.91.74-1.65 1.65-1.65h3.6a.75.75 0 0 1 .75.75v9.001a.75.75 0 0 1-.75.75zm-3.6-9.001a.15.15 0 0 0-.15.15v7.2a.15.15 0 0 0 .15.151h2.85v-7.501z","data-original":"#000000"}),e.jsx("path",{d:"M20.52 21.954h-6.284a.75.75 0 0 1-.75-.75v-9.001c0-.257.132-.495.348-.633.017-.011 1.717-1.118 2.037-3.25.18-1.184 1.118-2.089 2.28-2.201a2.557 2.557 0 0 1 2.17.868c.489.56.71 1.305.609 2.042a9.468 9.468 0 0 1-.678 2.424h.943a2.56 2.56 0 0 1 1.918.862c.483.547.708 1.279.617 2.006l-.675 5.401a2.565 2.565 0 0 1-2.535 2.232zm-5.534-1.5h5.533a1.06 1.06 0 0 0 1.048-.922l.675-5.397a1.046 1.046 0 0 0-1.047-1.182h-2.16a.751.751 0 0 1-.648-1.13 8.147 8.147 0 0 0 1.057-3 1.059 1.059 0 0 0-.254-.852 1.057 1.057 0 0 0-.795-.365c-.577.052-.964.435-1.04.938-.326 2.163-1.71 3.507-2.369 4.036v7.874z","data-original":"#000000"}),e.jsx("path",{d:"M4 31.75a.75.75 0 0 1-.612-1.184c1.014-1.428 1.643-2.999 1.869-4.667.032-.241.055-.485.07-.719A14.701 14.701 0 0 1 1.25 15C1.25 6.867 7.867.25 16 .25S30.75 6.867 30.75 15 24.133 29.75 16 29.75a14.57 14.57 0 0 1-5.594-1.101c-2.179 2.045-4.61 2.81-6.281 3.09A.774.774 0 0 1 4 31.75zm12-30C8.694 1.75 2.75 7.694 2.75 15c0 3.52 1.375 6.845 3.872 9.362a.75.75 0 0 1 .217.55c-.01.373-.042.78-.095 1.186A11.715 11.715 0 0 1 5.58 29.83a10.387 10.387 0 0 0 3.898-2.37l.231-.23a.75.75 0 0 1 .84-.153A13.072 13.072 0 0 0 16 28.25c7.306 0 13.25-5.944 13.25-13.25S23.306 1.75 16 1.75z","data-original":"#000000"})]}),"87 Reviews"]})]})]}),e.jsx("hr",{className:"my-8"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:e.jsx("button",{type:"button",onClick:()=>V(),className:p("min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-300 hover:border-gray-500 text-gray-800 text-sm font-bold rounded",o.length>0&&b()&&n.id!==""?"cursor-pointer":"cursor-not-allowed"),disabled:!(o.length>0&&b()&&n.id!==""),children:"Add to cart"})})]})]}),e.jsxs("div",{className:"mt-24 max-w-4xl",children:[e.jsxs("ul",{className:"flex border-b",children:[e.jsx("li",{onClick:()=>j("description"),className:p("text-gray-400 font-bold text-sm py-3 px-8 cursor-pointer transition-all hover:bg-gray-100 hover:text-gray-800",c==="description"&&"text-gray-800 bg-gray-100 border-b-2 border-gray-800"),children:"Description"}),e.jsx("li",{onClick:()=>j("review"),className:p("text-gray-400 font-bold text-sm py-3 px-8 cursor-pointer transition-all hover:bg-gray-100 hover:text-gray-800",c==="review"&&"text-gray-800 bg-gray-100 border-b-2 border-gray-800"),children:"Reviews"}),e.jsx("li",{onClick:()=>j("rating"),className:p("text-gray-400 font-bold text-sm py-3 px-8 cursor-pointer transition-all hover:bg-gray-100 hover:text-gray-800",c==="rating"&&"text-gray-800 bg-gray-100 border-b-2 border-gray-800"),children:"Ratings"})]}),c==="description"?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-8",children:[e.jsx("h3",{className:"text-lg font-bold text-gray-800",children:"Product Description"}),e.jsx("p",{className:"text-sm text-gray-400 mt-4",children:s==null?void 0:s.longDescription})]})}):c==="review"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-8",children:[e.jsx("h3",{className:"text-lg font-bold text-gray-800",children:"Product Review"}),e.jsx("p",{className:"text-sm text-gray-400 mt-4",children:s==null?void 0:s.freeInformation})]}),e.jsxs("ul",{className:"space-y-3 list-disc mt-6 pl-4 text-sm text-gray-400",children:[e.jsx("li",{children:s==null?void 0:s.washingInformation}),e.jsx("li",{children:s==null?void 0:s.freeInformation})]})]}):e.jsxs("div",{className:"mt-8",children:[e.jsx("h3",{className:"text-lg font-bold text-gray-800",children:"Product Rating"}),e.jsx("p",{className:"text-sm text-gray-400 mt-4",children:"Elevate your casual style with our premium men's t-shirt. Crafted for comfort and designed with a modern fit, this versatile shirt is an essential addition to your wardrobe. The soft and breathable fabric ensures all-day comfort, making it perfect for everyday wear. Its classic crew neck and short sleeves offer a timeless look."})]})]})]}),e.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{children:[e.jsx("div",{"data-aos":"fade-up",className:"font-bold text-xl flex justify-center py-4",children:"SẢN PHẨM ĐƯỢC QUAN TÂM"}),e.jsx(v,{...y,infinite:x&&x.length>3,children:x&&x.map((a,t)=>e.jsx("div",{"data-aos":"fade-up","data-aos-delay":400+t*100,className:"h-[630px]",children:e.jsx(N,{product:a})},a.id||t))})]}),e.jsxs("div",{className:"py-8",children:[e.jsx("div",{"data-aos":"fade-up",className:"font-bold text-xl flex justify-center py-4",children:"SẢN PHẨM THƯỜNG ĐƯỢC MUA KÈM"}),e.jsx("div",{"data-aos":"zoom-in",children:e.jsx(v,{...y,infinite:m&&m.length>3,children:m&&m.map((a,t)=>e.jsx("div",{"data-aos":"fade-up","data-aos-delay":400+t*100,className:"h-[630px]",children:e.jsx(N,{product:a})},a.id))})})]}),e.jsxs("div",{className:"py-8",children:[e.jsx("div",{"data-aos":"fade-up",className:"font-bold text-xl",children:"ĐÃ XEM GẦN ĐÂY"}),e.jsx(v,{...y,infinite:h&&h.length>3,children:h&&h.map((a,t)=>e.jsx("div",{"data-aos":"fade-up","data-aos-delay":400+t*100,className:"h-[630px]",children:e.jsx(N,{product:a})},a.id))})]})]})]})};export{ye as default};