import { AxiosResponse } from "axios";
import AxiosClient from "./axiosClient/AxiosClient";

// TODO: Add types for the response
const AuthenticationApi = {
  login: (email: string, password: string): Promise<AxiosResponse> => {
    const url = "auth/login";
    return AxiosClient.post(url, { email, password });
  },
  logout: (): Promise<AxiosResponse> => {
    const url = "auth/logout";
    return AxiosClient.post(url);
  },
  refreshToken: (refreshToken: string): Promise<AxiosResponse> => {
    const url = `auth/refresh-token`;
    return AxiosClient.post(url, { refreshToken });
  },
  register: (email: string, password: string): Promise<AxiosResponse> => {
    const url = "auth/register";
    return AxiosClient.post(url, { email, password });
  },
};

export default AuthenticationApi;
