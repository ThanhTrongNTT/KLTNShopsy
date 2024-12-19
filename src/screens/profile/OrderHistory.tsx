import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { Pagination } from "flowbite-react";
import { Order } from "../../data/Order";
import orderApi from "../../libs/api/order.api";
import { formatDate } from "../../libs/utils/date";
export const STATUS_OPTIONS = [
    { label: "Order Placed", value: "ORDER_PLACED", color: "bg-blue-500" },
    { label: "Paid", value: "PAID", color: "bg-green-500" },
    { label: "Pending", value: "PENDING", color: "bg-yellow-500" },
    { label: "Processing", value: "PROCESSING", color: "bg-yellow-500" },
    { label: "Shipped", value: "SHIPPED", color: "bg-purple-500" },
    { label: "Delivered", value: "DELIVERED", color: "bg-green-700" },
    { label: "Canceled", value: "CANCELED", color: "bg-red-500" },
];

const OrderHistory = () => {
    const { userInfo } = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [orderHistory, setOrderHistory] = useState<Order[]>([]);
    const navigate = useNavigate();

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const fetchOrderHistory = async () => {
        orderApi
            .getOrderByUser(
                userInfo?.email || "",
                currentPage - 1,
                5,
                "modifiedDate",
                "desc"
            )
            .then((res) => {
                setOrderHistory(res.data.items);
                setTotalPage(res.data.totalItems / 5);
            });
    };
    useEffect(() => {
        fetchOrderHistory();
    }, [currentPage]);
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
        <div>
            <span className="font-semibold text-lg">Lịch sử đơn hàng</span>
            <div className="p-5">
                <div className="overflow-x-auto rounded-2xl border mx-4 border-gray-c4 ">
                    <table className="bg-white w-full text-sm text-left text-gray-400">
                        <thead>
                            <tr>
                                <th scope="col" className="p-3">
                                    Name
                                </th>
                                <th scope="col" className="p-3">
                                    Total Price
                                </th>
                                <th scope="col" className="p-3">
                                    Status
                                </th>
                                <th scope="col" className="p-3">
                                    Payment Method
                                </th>
                                <th scope="col" className="p-3">
                                    Is Paid
                                </th>
                                <th scope="col" className="p-3">
                                    Order At
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderHistory.map((order: Order, index) => {
                                const currentStatus = STATUS_OPTIONS.find(
                                    (status) => status.value === order.status
                                );
                                return (
                                    <tr
                                        className="bg-white border border-gray-c2 hover:bg-gray-c2 cursor-pointer"
                                        key={index}
                                    >
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium whitespace-nowrap"
                                        >
                                            {order.address?.firstName +
                                                " " +
                                                order.address?.lastName}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium whitespace-nowrap"
                                        >
                                            {order.total?.toLocaleString(
                                                "it-IT",
                                                {
                                                    style: "currency",
                                                    currency: "VND",
                                                }
                                            )}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium whitespace-nowrap"
                                        >
                                            <span
                                                className={`p-2 text-sm rounded-full border-none  text-white ${
                                                    currentStatus?.color ||
                                                    "bg-gray-400"
                                                }`}
                                            >
                                                {order.status}
                                            </span>
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium whitespace-nowrap"
                                        >
                                            {order.paymentMethod}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium whitespace-nowrap"
                                        >
                                            {order.isPaid ? "Paid" : "Not Paid"}
                                        </th>
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium whitespace-nowrap"
                                        >
                                            {formatDate(order.createdDate || '')}
                                        </th>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-center">
                <Pagination
                    showIcons={true}
                    currentPage={currentPage}
                    totalPages={totalPage}
                    onPageChange={onPageChange}
                    layout="pagination"
                />
            </div>
        </div>
    );
};

export default OrderHistory;
