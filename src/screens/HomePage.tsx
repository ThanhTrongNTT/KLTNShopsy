import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import TopProducts from "../components/TopProducts/TopProducts";
import Banner from "../components/Banner/Banner";
import Subscribe from "../components/Subscribe/Subscribe";
import Testimonials from "../components/Testimonials/Testimonials";
import Popup from "../components/Popup/Popup";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { JWTType } from "../data/type.interface";
import { jwtDecode } from "jwt-decode";
import userApi from "../libs/api/user.api";
import { update } from "../redux/slices/userSlice";
import { User } from "../data/User";

const HomePage = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);
    const { userInfo } = useAppSelector((state: RootState) => state.user);
    const dispatch = useAppDispatch();

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };
    useEffect(() => {
        const isOAuth2 = Cookies.get("oAuth2");
        if (isOAuth2) {
            Cookies.remove("oAuth2");
            const accessToken = Cookies.get("accessToken");
            const decode: JWTType = jwtDecode(accessToken || "");
            userApi
                .getMe(decode.sub)
                .then((res) => {
                    const userProfile: User = res.data;
                    dispatch(update(userProfile));
                    toast.success("Login Success!", {
                        autoClose: 500,
                        delay: 10,
                        draggable: true,
                        pauseOnHover: true,
                    });

                    console.log("userInfo", userInfo);
                })
                .catch((err) => {
                    toast.error(err.message, {
                        autoClose: 500,
                        delay: 10,
                        draggable: true,
                        pauseOnHover: false,
                        position: "bottom-right",
                    });
                });
        }
    }, []);

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
            <Hero handleOrderPopup={handleOrderPopup} />
            <Products />
            <TopProducts handleOrderPopup={handleOrderPopup} />
            <Banner />
            <Subscribe />
            <Products />
            <Testimonials />
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </div>
    );
};

export default HomePage;
