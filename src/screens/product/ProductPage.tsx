import React, { useEffect, useState } from "react";
import ImageCustom from "../../components/Image/ImageCustom";
import { Each } from "../../components/Each/Each";
import ProductItem from "../../components/Products/ProductItem";
import classNames from "../../libs/utils/classNames";
import ModalDefault from "../../components/modal/ModalDefault";
import { Breadcrumb, Dropdown } from "flowbite-react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { Category } from "../../data/Categories";
import CategoryApi from "../../libs/api/category.api";
import { formatCategories } from "../../libs/utils/category";
import productApi from "../../libs/api/product.api";

const ProductPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const gender = searchParams.get("gender");
    const [activeTab, setActiveTab] = useState<Category | null>(null);
    const [category, setCategory] = useState<Category | null>(null);
    const [Menu, setMenu] = useState<Category[]>([]);
    const fetchCategories = async () => {
        await CategoryApi.getAllCategory().then((res) => {
            setMenu(formatCategories(res.data));
        });
    };
    const onShort = (message: string) => {
        toast.success(message, {
            autoClose: 500,
            delay: 10,
            draggable: true,
            pauseOnHover: true,
        });
    };
    const fetchProducts = async (genderName: string, categoryName: string) => {
        await productApi
            .searchProductsByCategory(
                genderName,
                categoryName,
                1,
                10,
                "modifiedDate",
                "asc"
            )
            .then((res) => {
                console.log(res.data.items);
            });
    };
    const handleChangeTab = (tab: Category) => {
        setActiveTab(tab);
        setCategory(null);
        changeURL(`/product?gender=${tab?.categoryName}`);
    };
    const handleChangeCategory = (category: Category) => {
        setCategory(category);
        changeURL(
            `/product?gender=${activeTab?.categoryName}&category=${category.categoryName}`
        );
    };
    const changeURL = (path) => {
        navigate(path, { replace: true });
    };
    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (gender && Menu.length > 0) {
            console.log(gender);

            const tab = Menu.find((item) => item.categoryName === gender);
            console.log(tab);

            if (tab) setActiveTab(tab);
        }
    }, [Menu]);

    useEffect(() => {
        if (activeTab) fetchProducts(activeTab.categoryName, "");
    }, [activeTab]);

    return (
        <div className="bg-white dark:bg-[#121212] dark:text-white">
            <ModalDefault />
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 py-3">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href={`product?gender=${gender}`}>
                            {activeTab?.locale}
                        </Breadcrumb.Item>
                        {category && (
                            <Breadcrumb.Item>{category.locale}</Breadcrumb.Item>
                        )}
                    </Breadcrumb>
                </div>
                <div className="flex justify-center mb-4">
                    {Menu.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleChangeTab(tab)}
                            className={`flex-1 px-6 py-2 text-lg font-semibold hover:text-black ${
                                activeTab?.categoryName === tab.categoryName
                                    ? "border-b-2 border-black text-black dark:text-white dark:border-white"
                                    : "text-gray-500 dark:text-white"
                            }`}
                        >
                            {tab.locale}
                        </button>
                    ))}
                </div>
                <section
                    aria-labelledby="products-heading"
                    className="pb-24 pt-6"
                >
                    <div data-aos="fade-up">
                        <h1 className="text-sm font-bold">Kết quả</h1>
                        <h1 className="text-base">12 Sản phẩm</h1>
                    </div>
                    <div className="flex gap-x-8 gap-y-10">
                        {/* Filter */}
                        <div className="flex flex-col w-1/4">
                            <h1
                                data-aos="fade-up"
                                data-aos-delay="100"
                                className="text-2xl font-bold py-10"
                            >
                                {activeTab?.locale}
                            </h1>
                            <ul
                                role="list"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                className="space-y-4 pb-6 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                {activeTab?.children.map((item) => (
                                    <li
                                        className={classNames(
                                            "p-2 rounded-md cursor-pointer text-lg font-semibold hover:bg-gray-300 hover:dark:text-black",
                                            item.categoryName ===
                                                category?.categoryName
                                                ? "bg-gray-300 dark:bg-gray-800"
                                                : ""
                                        )}
                                        key={item.id}
                                        onClick={() =>
                                            handleChangeCategory(item)
                                        }
                                    >
                                        {item.locale}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Main List */}
                        <div className="">
                            <div className="flex justify-end p-5">
                                <Dropdown label="Sắp xếp theo">
                                    <Dropdown.Item
                                        className="hover:text-blue-400"
                                        onClick={() =>
                                            onShort("Giá từ thấp đến cao")
                                        }
                                    >
                                        Giá từ thấp đến cao
                                    </Dropdown.Item>
                                    <Dropdown.Item className="hover:text-blue-400">
                                        Giá từ cao đến thấp
                                    </Dropdown.Item>
                                    <Dropdown.Item className="hover:text-blue-400">
                                        Hàng mới về
                                    </Dropdown.Item>
                                    <Dropdown.Item className="hover:text-blue-400">
                                        Hàng tiêu biểu
                                    </Dropdown.Item>
                                    <Dropdown.Item className="hover:text-blue-400">
                                        Được đánh giá tốt nhất
                                    </Dropdown.Item>
                                </Dropdown>
                            </div>
                            <div className="grid grid-cols-1 col-span-3 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Product */}
                                {Array.from(
                                    { length: 10 },
                                    (_, index) => index + 1
                                ).map((number, index) => {
                                    const remainder = index % 8;
                                    const delay = 300 + remainder * 100;

                                    return (
                                        <div
                                            key={index}
                                            data-aos="fade-up"
                                            data-aos-delay={delay}
                                        >
                                            <ProductItem />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProductPage;
