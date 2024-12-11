import { Link } from "react-router-dom";
import React from "react";

import Logo from "./Logo";
import classNames from "../../libs/utils/classNames";
import logo from "../../assets/logo.png";

const LogoDefault = ({ className = "" }) => {
    return (
        <Link to="/">
            <div
                className={classNames(
                    "header-left flex cursor-pointer select-none items-center gap-[10px]",
                    className
                )}
            >
                <img src={logo} alt="" className="h-10 w-10" />
                <div className="text-sm font-bold text-c2 lg:text-xl text-black">
                    Sport Store
                </div>
            </div>
        </Link>
    );
};

export default LogoDefault;
