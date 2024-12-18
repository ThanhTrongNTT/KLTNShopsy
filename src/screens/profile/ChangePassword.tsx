import React, { useEffect } from "react";
import InputProfile from "../../components/input/InputProfile";
import Input from "../../components/input/Input";
import TogglePassword from "../../components/toggle/TogglePassword";
import useToggleValue from "../../components/common/useToggleValue";
import { FieldValues, useForm } from "react-hook-form";
import { ConfirmPasswordSchema, PasswordSchema } from "../../libs/utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useAppSelector } from "../../redux/store";
import userApi, { ChangePasswordRequest } from "../../libs/api/user.api";
const schema = Yup.object({
    password: PasswordSchema,
    confirmPassword: ConfirmPasswordSchema,
    newPassword: PasswordSchema,
});

interface ChangePasswordProps {
    handleChangePassword: (data: FieldValues) => void;
}
const ChangePassword = ({ handleChangePassword }: ChangePasswordProps) => {
    const { userInfo } = useAppSelector((state) => state.user);
    const { value: showPassword, handleToggleValue: handleTogglePassword } =
        useToggleValue();
    const {
        value: showNewPassword,
        handleToggleValue: handleToggleNewPassword,
    } = useToggleValue();
    const {
        value: showConfirmPassword,
        handleToggleValue: handleToggleConfirmPassword,
    } = useToggleValue();
    const {
        handleSubmit,
        control,
        setFocus,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onSubmit",
    });

    const handleChange = async (data: FieldValues) => {
        console.log("data", data);
        const { password, newPassword, confirmPassword } = data;
        if (newPassword !== confirmPassword) {
            toast.error("Mật khẩu không giống nhau", {
                position: "top-center",
                autoClose: 1000,
                pauseOnHover: false,
                draggable: true,
                delay: 50,
            });
            setFocus("confirmPassword");
            return;
        }
        handleChangePassword(data);
    };
    useEffect(() => {
        const arrErrors = Object.values(errors);
        if (arrErrors.length > 0) {
            if (arrErrors[0].message) {
                const message = arrErrors[0].message;
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
    return (
        <div>
            <div className="">
                <form
                    className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
                    onSubmit={handleSubmit(handleChange)}
                >
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Mật khẩu cũ
                        </label>
                        <Input
                            variant={"outlined"}
                            control={control}
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Mật khẩu cũ"
                            error={errors.password?.message ?? ""}
                        >
                            <TogglePassword
                                open={showPassword}
                                onClick={handleTogglePassword}
                            />
                        </Input>
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Mật khẩu mới
                        </label>
                        <Input
                            variant={"outlined"}
                            control={control}
                            name="newPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Mật khẩu mới"
                            error={errors.password?.message ?? ""}
                        >
                            <TogglePassword
                                open={showNewPassword}
                                onClick={handleToggleNewPassword}
                            />
                        </Input>
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Nhập lại mật khẩu
                        </label>
                        <Input
                            variant={"outlined"}
                            control={control}
                            name="confirmPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Nhập lại mật khẩu"
                            error={errors.password?.message ?? ""}
                        >
                            <TogglePassword
                                open={showConfirmPassword}
                                onClick={handleToggleConfirmPassword}
                            />
                        </Input>
                    </div>
                    <button
                        type="submit"
                        className="text-white px-5 py-2 bg-gradient-to-brtext-lg font-semibold rounded-md hover:bg-gradient-to-br bg-gradient-to-br from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 mb-5 text-center"
                    >
                        Đổi mật khẩu
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
