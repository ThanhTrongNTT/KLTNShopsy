import { AxiosResponse } from "axios";
import AxiosClient from "./AxiosClient/AxiosClient";
import { User } from "../../data/User";
import { ApiResponse } from "../../data/payload";

export interface ChangePasswordRequest {
    email: string;
    oldPassword: string;
    newPassword: string;
}

const userApi = {
    getMe: (email: string): Promise<AxiosResponse<User>> => {
        const url = `user/${email}`;
        return AxiosClient.get(url);
    },
    activeUser: (
        email: string,
        token: string
    ): Promise<AxiosResponse<User>> => {
        const url = `user/active/${email}`;
        return AxiosClient.post(url, null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
    changePassword: (
        changePasswordRequest: ChangePasswordRequest
    ): Promise<ApiResponse<User>> => {
        const url = `user/change-password`;
        return AxiosClient.post(url, changePasswordRequest);
    },
};
export default userApi;
