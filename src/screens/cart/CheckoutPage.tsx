import { yupResolver } from "@hookform/resolvers/yup";
import { Breadcrumb } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    District,
    Province,
    Ward,
    getDistricts,
    getProvinces,
    getWards,
} from "vietnam-provinces";
import DropdownAddress from "../../components/dropdown/DropdownAddress";
import Field from "../../components/field/Field";
import Label from "../../components/label/Label";
import { OrderRequest } from "../../libs/api/order.api";
import { OrderSchema } from "../../libs/utils/schema";
import { RootState, useAppSelector } from "../../redux/store";
import couponApi from "../../libs/api/coupon.api";
import { Coupon } from "../../data/Coupon";

const CheckoutPage = () => {
    const order = JSON.parse(localStorage.getItem("order") || "{}");
    const navigate = useNavigate();
    const cart = useAppSelector((state: RootState) => state.cart.items);
    const { userInfo } = useAppSelector((state: RootState) => state.user);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const {
        handleSubmit,
        control,
        setValue,
        getValues,
        clearErrors,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(OrderSchema),
        mode: "onSubmit",
        defaultValues: {
            firstName: order.order?.address?.firstName || "",
            lastName: order.order?.address?.lastName || "",
            email: order.order?.address?.email || "",
            phoneNumber: order.order?.address?.phone || "",
            province: order.order?.address?.province || "",
            district: order.order?.address?.district || "",
            ward: order.order?.address?.ward || "",
            address: order.order?.address?.addressData || "",
            note: order.order?.note || "",
            coupon: "",
        },
    });

    // Address
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [wards, setWards] = useState<Ward[]>([]);
    const [selectedProvince, setSelectedProvince] = useState<Province>();
    const [selectedDistrict, setSelectedDistrict] = useState<Province>();

    const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCity: Province | undefined = provinces.find(
            (city) => city.name === e.target.value
        );
        setSelectedProvince(selectedCity);
        clearErrors("province");
    };

    const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedDistrict: District | undefined = districts.find(
            (district) => district.name === e.target.value
        );
        setSelectedDistrict(selectedDistrict);
        clearErrors("district");
    };
    useEffect(() => {
        if (selectedProvince) {
            setDistricts(getDistricts(selectedProvince.code));
        }
    }, [selectedProvince]);

    useEffect(() => {
        if (selectedDistrict) {
            setWards(getWards(selectedDistrict.code));
        }
    }, [selectedDistrict]);

    const handleCreateOrder = (data: FieldValues) => {
        const request: OrderRequest = {
            order: {
                productsCount: cart.length,
                note: data.note,
                subTotal: subtotal,
                tax: 0,
                total: total,
                status: "Pending",
                paymentMethod: "COD",
                isPaid: false,
                user: userInfo,
                coupon: coupon,
                address: {
                    addressData: data.address,
                    province: data.province,
                    district: data.district,
                    ward: data.ward,
                    phone: data.phoneNumber,
                    email: data.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                },
            },
            orderItems: cart.map((cartItem) => ({
                product: cartItem.productItem,
                quantity: cartItem.quantity,
                subTotal:
                    cartItem.quantity *
                    (cartItem.productItem.product?.promoPrice ?? 0),
            })),
        };
        return request;
    };
    const onSubmit = async (data: FieldValues) => {
        const newData = handleCreateOrder(data);
        console.log(newData);
        localStorage.setItem("order", JSON.stringify(newData));
        navigate("/payment");
        console.log(data);
    };
    const handleSubTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach((item) => {
            totalPrice +=
                (item.productItem.product?.promoPrice ?? 0) * item.quantity;
        });
        setSubtotal(totalPrice);
        setTotal(totalPrice);
    };
    const [couponList, setCouponList] = useState<Coupon[]>([]);
    const [coupon, setCoupon] = useState<Coupon | null>(null);
    const [appliedCoupon, setAppliedCoupon] = useState<string>(""); 
    const getCouponList = async () => {
        const res = await couponApi.getCouponList().then((res) => {
            if (res.result) {
                setCouponList(res.data);
            }
        });
    };
    const checkCoupon = () => {
        const code = getValues("coupon");
        const coupon = couponList.find((coupon) => coupon.code === code);
    
        if (coupon) {
            if (appliedCoupon) {
                toast.error("Bạn đã áp dụng một mã giảm giá rồi", {
                    position: "top-center",
                    autoClose: 1000,
                    pauseOnHover: false,
                    draggable: true,
                    delay: 50,
                });
                return
            }
            setCoupon(coupon);
            setAppliedCoupon(coupon.code);
            setTotal(total - (coupon.discount / 100) * total);
            setValue("coupon", ""); 
            toast.success("Áp dụng mã giảm giá thành công!", {
                position: "top-center",
                autoClose: 1000,
                pauseOnHover: false,
                draggable: true,
                delay: 50,
            });
        } else {
            toast.error("Mã giảm giá không tồn tại", {
                position: "top-center",
                autoClose: 1000,
                pauseOnHover: false,
                draggable: true,
                delay: 50,
            });
        }
    };
    useEffect(() => {
        handleSubTotalPrice();
        setProvinces(getProvinces());
        getCouponList();
    }, []);

    useEffect(() => {
        const arrErrors = Object.values(errors);
        if (arrErrors.length > 0) {
            if (arrErrors[0]?.message) {
                const message = arrErrors[0]?.message;
                toast.error(message.toString(), {
                    position: "top-center",
                    autoClose: 1000,
                    pauseOnHover: false,
                    draggable: true,
                    delay: 50,
                });
            }
        }
    }, [errors]);

    useEffect(() => {
        if (userInfo.id === "") {
            toast.error("Bạn cần đăng nhập để xem trang này!", {
                position: "top-center",
                autoClose: 1000,
                pauseOnHover: true,
                draggable: true,
                delay: 50,
            });
            navigate("/login", { replace: true });
        }
    }, [navigate, userInfo]);

    return (
        <div className="p-10 w-3/4 text-center mx-auto">
            <h2 className="text-5xl font-bold text-center mb-5">Sport Store</h2>
            {/* <BreadCrumb /> */}
            <div className="flex justify-center flex-col laptop:flex-row ">
                <div className="laptop:w-3/4 text-center w-full">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">
                            <span className="font-bold">Home</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href={`/cart`}>
                            <span className="font-bold">Cart</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <span className="font-bold">Checkout</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex gap-x-10 justify-center px-5"
                        >
                            <div className="laptop:w-2/3 form-input border-none flex flex-col gap-4 w-3/4">
                                <div className="grid grid-cols-2 gap-10">
                                    <div className="text-left">
                                        <Label
                                            htmlFor=""
                                            className="px-2 text-lg"
                                        >
                                            Họ
                                        </Label>
                                        <Field
                                            control={control}
                                            name="firstName"
                                            id="first-name"
                                            placeholder="Nhập họ..."
                                            error={
                                                errors.firstName?.message ?? ""
                                            }
                                        >
                                            First Name
                                        </Field>
                                    </div>
                                    <div className="text-left">
                                        <Label
                                            htmlFor=""
                                            className="px-2 text-lg"
                                        >
                                            Tên
                                        </Label>
                                        <Field
                                            control={control}
                                            name="lastName"
                                            id="last-name"
                                            placeholder="Nhập tên..."
                                            error={
                                                errors.lastName?.message ?? ""
                                            }
                                        >
                                            Last Name
                                        </Field>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-10">
                                    <div className="text-left">
                                        <Label
                                            htmlFor=""
                                            className="px-2 text-lg"
                                        >
                                            Email
                                        </Label>
                                        <Field
                                            control={control}
                                            name="email"
                                            id="email"
                                            placeholder="Nhập email..."
                                            error={errors.email?.message ?? ""}
                                        >
                                            Email
                                        </Field>
                                    </div>
                                    <div className="text-left">
                                        <Label
                                            htmlFor=""
                                            className="px-2 text-lg"
                                        >
                                            Số điện thoại
                                        </Label>
                                        <Field
                                            control={control}
                                            name="phoneNumber"
                                            id="phone-number"
                                            placeholder="Nhập số điện thoại..."
                                            error={
                                                errors.phoneNumber?.message ??
                                                ""
                                            }
                                        >
                                            Số điện thoại
                                        </Field>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-10">
                                    <div className="flex flex-col text-left">
                                        <Label
                                            htmlFor=""
                                            className="px-2 text-lg"
                                        >
                                            Tỉnh/Thành phố
                                        </Label>
                                        <DropdownAddress
                                            className=""
                                            control={control}
                                            setValue={setValue}
                                            dropdownLabel={order.order?.address?.province || "Chọn tỉnh/thành phố"}
                                            name="province"
                                            list={provinces}
                                            onChange={handleProvinceChange}
                                            error={
                                                errors.province?.message ?? ""
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <Label
                                            htmlFor=""
                                            className="px-2 text-lg"
                                        >
                                            Quận/Huyện
                                        </Label>
                                        <DropdownAddress
                                            onChange={handleDistrictChange}
                                            className=""
                                            control={control}
                                            setValue={setValue}
                                            dropdownLabel={order.order?.address?.district || "Chọn quận/huyện"}
                                            name="district"
                                            list={districts}
                                            error={
                                                errors.district?.message ?? ""
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <Label
                                            htmlFor=""
                                            className="px-2 text-lg"
                                        >
                                            Phường/Xã
                                        </Label>
                                        <DropdownAddress
                                            onChange={() => { clearErrors("ward");}}
                                            className=""
                                            control={control}
                                            setValue={setValue}
                                            dropdownLabel={order.order?.address?.ward || "Chọn phường/xã"}
                                            name="ward"
                                            list={wards}
                                            error={errors.ward?.message ?? ""}
                                        />
                                    </div>
                                </div>
                                <div className="text-left">
                                    <Label htmlFor="" className="px-2 text-lg">
                                        Địa chỉ
                                    </Label>
                                    <Field
                                        control={control}
                                        name="address"
                                        id="address"
                                        placeholder="Nhập địa chỉ..."
                                        error={errors.address?.message ?? ""}
                                    >
                                        Address
                                    </Field>
                                </div>
                                <div className="text-left">
                                    <Label htmlFor="" className="px-2 text-lg">
                                        Ghi chú
                                    </Label>
                                    <Controller
                                        name="note"
                                        control={control}
                                        render={({
                                            field: { onChange, value },
                                        }) => (
                                            <textarea
                                                cols={90}
                                                rows={4}
                                                onChange={onChange}
                                                value={value}
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Write your thoughts here..."
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="laptop:w-full laptop:mt-0 rounded p-5 w-1/3 bg-gray-100 mt-6 h-fit">
                                <span className=" flex justify-between gap-x-1 font-bold text-lg">
                                    <span>
                                        TỔNG ĐƠN HÀNG | {cart.length} SẢN PHẨM
                                    </span>
                                    <a
                                        className="hover:underline cursor-pointer"
                                        href="/cart"
                                    >
                                        SỬA
                                    </a>
                                </span>
                                <div>
                                    <div className="flex justify-between my-2">
                                        <span>Tổng cộng</span>
                                        <span>
                                            {subtotal.toLocaleString("it-IT", {
                                                style: "currency",
                                                currency: "VND",
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Tiền ship</span>
                                        <span>
                                            {(0).toLocaleString("it-IT", {
                                                style: "currency",
                                                currency: "VND",
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex justify-between font-bold text-lg my-2">
                                        <span>Tổng đơn đặt hàng</span>
                                        <span>
                                            {/* {totalPrice.toLocaleString("en", { */}
                                            {total.toLocaleString("it-IT", {
                                                style: "currency",
                                                currency: "VND",
                                            })}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-x-2 content-center">
                                    <div className="text-left">
                                        <Label htmlFor="" className="px-2 text-lg">
                                            Mã giảm giá
                                        </Label>
                                        <Field
                                            control={control}
                                            name="coupon"
                                            id="coupon"
                                            placeholder="Enter Coupon..."
                                        />
                                    </div>
                                    <div className="cursor-pointer items-center w-1/2 bg-blue-500 px-5 py-3 text-white rounded-md mt-6" onClick={()=> checkCoupon()}>Áp dụng</div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-1/2 bg-blue-500 text-white p-2 rounded-md mt-5"
                                >
                                    Thanh toán
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
