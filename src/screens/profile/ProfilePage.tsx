import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import LogoDefault from "../../components/logo/LogoDefault";
import CardAvt from "../../components/cart/CardAvt";
import classNames from "../../libs/utils/classNames";
import { IconPenUnderline } from "../../components/icon/Icon";
import FieldUpdateProfile from "../../components/field/FieldUpdateProfile";
import ButtonCancel from "../../components/button/ButtonCancel";
import ButtonSubmit from "../../components/button/ButtonSubmit";
import { FieldValues, useForm } from "react-hook-form";
import { User } from "../../data/User";
import OrderHistory from "./OrderHistory";
import { Order } from "../../data/Order";
import orderApi from "../../libs/api/order.api";
import { Button } from "flowbite-react";
import { Modal } from "flowbite-react";
import ChangePassword from "./ChangePassword";
import { toast } from "react-toastify";
import userApi, { ChangePasswordRequest } from "../../libs/api/user.api";

const ProfilePage = () => {
    const [disable, setDisable] = useState(true);
    const [disableBtnSubmit, setDisableBtnSubmit] = useState(true);
    const [disableBtnEdit, setDisableBtnEdit] = useState(false);

    const { userInfo } = useAppSelector((state) => state.user);
    const { handleSubmit, control, setValue, setFocus } = useForm({
        mode: "onChange",
        defaultValues: {
            userName: userInfo.userName,
            email: userInfo.email,
            name: userInfo.userProfile?.name,
            userProfile: userInfo.userProfile,
        },
    });

    const userName = window.location.pathname.split("/")[2];
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleEditProfile = () => {
        setDisableBtnEdit(!disableBtnEdit);
        setDisableBtnSubmit(!disableBtnSubmit);
        setDisable(false);
    };

    const handleCancelEdit = () => {
        setDisableBtnEdit(!disableBtnEdit);
        setDisableBtnSubmit(!disableBtnSubmit);
        setDisable(true);
    };

    const [modalShow, setModalShow] = useState(false);

    const onCloseModal = () => {
        setModalShow(false);
    };

    const onClickModal = () => {
        setModalShow(true);
    };

    const handleChangePassword = async (data: FieldValues) => {
        const { password, newPassword, confirmPassword } = data;
        const changePasswordRequest: ChangePasswordRequest = {
            email: userInfo?.email || "",
            oldPassword: password,
            newPassword,
        };
        await userApi.changePassword(changePasswordRequest).then((res) => {
            if (res.result) {
                if (res.data) {
                    toast.success("Đổi mật khẩu thành công", {
                        position: "top-center",
                        autoClose: 1000,
                        pauseOnHover: false,
                        draggable: true,
                        delay: 50,
                    });
                } else {
                    toast.error("Mật khẩu cũ không đúng", {
                        position: "top-center",
                        autoClose: 1000,
                        pauseOnHover: false,
                        draggable: true,
                        delay: 50,
                    });
                }
                onCloseModal();
            }
        });
    };

    useEffect(() => {
        if (userInfo.id === "") {
            navigate("/login");
        } else {
            setLoading(false);
        }
    }, [userInfo]);

    if (loading) {
        return null;
    }
    return (
        <div className="max-w-7xl flex flex-col gap-[30px] lg:flex-row lg:gap-[33px] mx-auto py-10 px-5 h-screen dark:bg-gray-900">
            <Modal show={modalShow} onClose={onCloseModal}>
                <Modal.Header>Đổi mật khẩu</Modal.Header>
                <Modal.Body>
                    <ChangePassword
                        handleChangePassword={handleChangePassword}
                    />
                </Modal.Body>
            </Modal>
            <CardAvt />
            <div className="flex-1 px-5 lg:px-0">
                <div className="flex justify-between ">
                    <div className="border-gray-c3 my-5 hidden border-b pb-8 lg:block text-3xl font-semibold">
                        <LogoDefault />
                    </div>
                </div>
                <div className="font-DMSans">
                    <div className="mb-2 flex justify-between">
                        <p className="text-grayScale-c2 text-xl font-medium dark:text-white lg:text-2xl">
                            Xin chào, {userInfo?.userProfile?.name}
                        </p>
                        <button
                            disabled={disableBtnEdit}
                            type="button"
                            className={classNames(
                                "text-semibold px-3 py-1 rounded-full border hover:bg-slate-100 hover:text-black transition-all border-gray-c4",
                                disableBtnEdit ? "bg-gray-c4" : "bg-transparent"
                            )}
                            onClick={handleEditProfile}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <span>
                                    <IconPenUnderline />
                                </span>
                                <span>Chỉnh sửa thông tin</span>
                            </div>
                        </button>
                    </div>
                    <form
                        onChange={() => setDisableBtnSubmit(false)}
                        // onSubmit={handleSubmit(handleUpdateInfo)}
                        className="mt-3"
                    >
                        {/* <div className="grid grid-rows-3 gap-8"> */}
                        <div className="">
                            <div className="grid grid-cols-2 gap-8">
                                <FieldUpdateProfile
                                    name="name"
                                    id="name"
                                    placeholder="Enter your name"
                                    control={control}
                                    hasDisable={disable}
                                    color="dark:text-white"
                                >
                                    Tên người dùng
                                </FieldUpdateProfile>
                                <FieldUpdateProfile
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    control={control}
                                    tabIndex={-1}
                                    hasDisable={disable}
                                    color="dark:text-white"
                                >
                                    Email
                                </FieldUpdateProfile>
                            </div>
                        </div>
                        <div className="mt-8 inline-block w-full text-right">
                            <div className="inline-block">
                                <div className="flex items-center">
                                    <ButtonCancel
                                        onClick={handleCancelEdit}
                                        disable={disableBtnSubmit}
                                    />
                                    <ButtonSubmit disable={disableBtnSubmit}>
                                        Cập nhật
                                    </ButtonSubmit>
                                </div>
                            </div>
                        </div>
                    </form>
                    <button
                        onClick={onClickModal}
                        className="text-white px-5 py-2 bg-gradient-to-brtext-lg font-semibold rounded-md hover:bg-gradient-to-br bg-gradient-to-br from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 mb-5"
                    >
                        Đổi mật khẩu
                    </button>
                    <OrderHistory />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
