import { Coupon } from "../../data/Coupon";
import { ApiResponse, PageResponse } from "../../data/payload";
import AxiosClient from "./AxiosClient/AxiosClient";

const couponApi = {
    getCouponList: async (): Promise<ApiResponse<Coupon[]>> => {
        const url = `/coupons/list`;
        return AxiosClient.get(url);
    },
};
export default couponApi;
