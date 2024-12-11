import { AxiosResponse } from "axios";
import AxiosClient from "./AxiosClient/AxiosClient";
import { User } from "../../data/User";

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
};
export default userApi;
