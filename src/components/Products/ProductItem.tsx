import React from "react";
import { useNavigate } from "react-router-dom";
import ImageCustom from "../Image/ImageCustom";
import StarRating from "../rating/StarRating";

const ProductItem = () => {
    const navigate = useNavigate();
    const getRandomStar = () => {
        // Tạo số ngẫu nhiên từ 1 đến 5 với bước nhảy 0.5
        const randomValue = Math.random() * (5 - 1) + 1;
        return Math.round(randomValue * 2) / 2;
    };
    return (
        <div
            className="flex max-w-xs flex-col
overflow-hidden rounded-lg border border-gray-100 dark:border-[#424242] bg-white dark:bg-[#1E1E1E]  transition transform ease-in-out duration-300 hover:scale-105 dark:hover:shadow-gray-800 hover:shadow-lg"
        >
            <div
                className="relative mx-3 mt-3 flex h-70 overflow-hidden rounded-xl cursor-pointer"
                onClick={() => navigate(`/product/${"123123"}`)}
            >
                <ImageCustom
                    className="object-cover w-full"
                    src={"https://readymadeui.com/images/product1.webp"}
                    alt=""
                />
            </div>
            <div className="mt-4 px-5 pb-5 flex flex-col justify-between">
                <div>Color</div>
                <div className="flex justify-between font-semibold text-gray-400">
                    <span>{"Gender".toUpperCase()}</span>
                    <span>{"Size".toUpperCase()}</span>
                </div>
                <h5
                    className="text-xl font-bold tracking-tight text-slate-900 dark:text-[#E0E0E0] truncate cursor-pointer"
                    // onClick={() => navigate(`/product/detail/${product.id}`)}
                >
                    Thanh Trong
                </h5>
                <div className="mt-2">
                    <p>
                        <span className="text-base font-semibold line-through text-black dark:text-[#E0E0E0]">
                            {(480000).toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </span>
                    </p>
                    <p>
                        <span className="text-xl font-bold text-red-500">
                            {(390000).toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </span>
                    </p>
                </div>
                <span className="text-base text-red-500">
                    Limited Offer Từ 11 Oct 2024 - 17 Oct 2024
                </span>
                <div className="mt-2 mb-5 flex">
                    <StarRating rating={getRandomStar()} />
                    <span>{"(4)"}</span>
                </div>
                {/* <button className="flex items-center justify-center rounded-md bg-gray-700 dark:bg-[#333333] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    Add to cart
                </button> */}
            </div>
        </div>
    );
};

export default ProductItem;
