import React from "react";

const DropdownCart = ({ items }) => {
    return (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
            {items.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                    {items.map((item, index) => (
                        <li key={index} className="py-2 flex items-center">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-10 h-10 object-fit rounded-lg"
                            />
                            <div className="ml-3">
                                <p className="text-sm font-semibold text-gray-800">
                                    {item.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {item.price} USD
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-sm text-gray-500">Your cart is empty</p>
            )}
        </div>
    );
};

export default DropdownCart;
