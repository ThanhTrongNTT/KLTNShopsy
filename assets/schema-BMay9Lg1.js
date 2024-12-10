import{a,c as e}from"./index.esm-LCD8qw9o.js";const r=a().required("Please enter your emaill address!").matches(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,{message:"Please enter valid email address"}),s=a().required("Please enter your password").min(8,"Password must be 8 characters"),n=a().required("Please enter your confirm password").min(8,"Password must be 8 characters"),c=e().shape({firstName:a().required("Hãy nhập họ của bạn!"),lastName:a().required("Hãy nhập tên của bạn"),email:a().required("Hãy nhập địa chỉ email của bạn!").matches(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,{message:"Hãy điền đúng định dạng của email!"}),phoneNumber:a().required("Hãy điền vào số điện thoại của bạn!").matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,{message:"Hãy điền đúng định dạng của số điện thoại"}),province:a().required("Bạn chưa chọn tỉnh thành!"),district:a().required("Bạn chưa chọn quận huyện!"),ward:a().required("Bạn chưa chọn phường xã!"),address:a().required("Hãy nhập địa chỉ tự thể của bạn"),note:a().optional(),coupon:a().optional()});export{n as C,r as E,c as O,s as P};
