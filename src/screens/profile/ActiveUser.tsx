import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { JWTType } from "../../data/type.interface";
import userApi from "../../libs/api/user.api";
import { toast } from "react-toastify";
const ActiveUser = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleActivation = () => {
        navigate("/login");
    };

    useEffect(() => {
        const handleActivation = async () => {
            if (!token) {
                redirectToLogin("Có lỗi xảy ra!");
                return;
            }

            try {
                const decode: JWTType = jwtDecode(token);

                if (!decode.active) {
                    redirectToLogin("Tài khoản chưa được kích hoạt!");
                    return;
                }

                try {
                    const response = await userApi.activeUser(
                        decode.sub,
                        token
                    );
                    setLoading(false);
                    console.log(response);
                } catch (error) {
                    redirectToLogin("Kích hoạt tài khoản thất bại!");
                }
            } catch {
                redirectToLogin("Token không hợp lệ!");
            }
        };

        const redirectToLogin = (message: string) => {
            toast.error(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/login");
        };

        handleActivation();
    }, [token]);

    if (loading) {
        return null;
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Kích hoạt tài khoản
                </h1>
                <p className="text-lg text-gray-600 mb-6 text-center">
                    Bạn đã kích hoạt tài khoản thành công.Cảm ơn bạn đã đăng ký.
                    Vui lòng nhấn nút bên dưới để trở về đăng nhập
                </p>
                <button
                    onClick={handleActivation}
                    className="px-6 py-3 bg-green-500 text-white font-medium text-lg rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                >
                    Trờ về đăng nhập
                </button>
            </div>
        </div>
    );
};

export default ActiveUser;
