import React from "react";
import ImageCustom from "../Image/ImageCustom";
import { CartDetail } from "../../data/CartDetail";
type OrderCardProps = {
    cartItem: CartDetail;
    index: number;
    id?: string;
};

const OrderCart = ({ cartItem, index, id }: OrderCardProps) => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-12 items-center gap-x-4 p-3 w-full">
                <div className="w-20 h-20 col-span-2">
                    <ImageCustom
                        src={
                            // cartItem.product.images.length > 0
                            //   ? cartItem.product.images[0].url
                            //   :
                            "https://readymadeui.com/images/product1.webp"
                        }
                        alt={"cartItem.product.productName"}
                        rounded
                    />
                </div>
                <div className="col-span-5">
                    <span className="mx-2 truncate ">
                        {"cartItem.product.productName"}
                    </span>
                </div>
                <div className="flex gap-2 col-span-2">
                    <span className="h-7 w-8 bg-gray-200 text-center items-center content-center">
                        {cartItem.quantity}
                    </span>
                </div>
                <div className="col-span-2">
                    <span>
                        {/* {(cartItem.product.price * cartItem.quantity).toLocaleString("en", { */}
                        {/* {(100 * cartItem.quantity).toLocaleString("en", { */}
                        {(100 * 2).toLocaleString("en", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default OrderCart;
