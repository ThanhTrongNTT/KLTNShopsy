import { Product } from "../../data/Product";
import { PageResponse } from "../../data/type.interface";
import AxiosClient from "./axiosClient/AxiosClient";

const productApi = {
    getAllProducts: (
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string
    ): Promise<PageResponse<Product>> => {
        const url = `products?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    searchProductByPrice: (
        minPrice: number,
        maxPrice: number,
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string
    ) => {
        const url = `products/search-by-price?minPrice=${minPrice}&maxPrice=${maxPrice}&pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
    getProductById: (id: string) => {
        const url = `products/${id}`;
        return AxiosClient.get(url);
    },
    searchProductsByCategory: (
        gender: string,
        category: string,
        pageNo: number,
        pageSize: number,
        sortBy: string,
        sortDir: string
    ): Promise<PageResponse<Product>> => {
        const url = `/products/search-by-category?genderName=${gender}&categoryName=${category}&pageNo=${
            pageNo - 1
        }&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`;
        return AxiosClient.get(url);
    },
};

export default productApi;
