import React, { FormEvent, KeyboardEvent, useState } from "react";
import Logo from "@assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Trang chủ",
    link: "/#",
  },
  {
    id: 2,
    name: "Nam",
    link: "/#services",
    dropdownLinks: [
      {
        id: 1,
        name: "Tất cả sản phẩm",
        link: "/#",
      },
      {
        id: 2,
        name: "Best Selling",
        link: "/#",
      },
      {
        id: 3,
        name: "Top Rated",
        link: "/#",
      },
    ],
  },
  {
    id: 3,
    name: "Nữ",
    link: "/#",
    dropdownLinks: [
      {
        id: 1,
        name: "Trending Products",
        link: "/#",
      },
      {
        id: 2,
        name: "Best Selling",
        link: "/#",
      },
      {
        id: 3,
        name: "Top Rated",
        link: "/#",
      },
    ],
  },
  {
    id: 4,
    name: "Trẻ em",
    link: "/#",
    dropdownLinks: [
      {
        id: 1,
        name: "Trending Products",
        link: "/#",
      },
      {
        id: 2,
        name: "Best Selling",
        link: "/#",
      },
      {
        id: 3,
        name: "Top Rated",
        link: "/#",
      },
    ],
  },
  {
    id: 5,
    name: "Trang sức",
    link: "/#",
    dropdownLinks: [
      {
        id: 1,
        name: "Trending Products",
        link: "/#",
      },
      {
        id: 2,
        name: "Best Selling",
        link: "/#",
      },
      {
        id: 3,
        name: "Top Rated",
        link: "/#",
      },
    ],
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Enter: ", searchText);
      setSearchText("");
    }
  };

  const handleChangeSearch = (e: FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    const newValue = e.currentTarget.value;
    setSearchText((prevValue) => prevValue + newValue);
    console.log(searchText);
  };
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                onKeyDown={handleSearch}
                onChange={handleChangeSearch}
                type="text"
                value={searchText}
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 items-center content-center"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
            <div className="flex gap-5">
              <div className="text-lg font-medium text-gray-700 hover:text-gray-800 cursor-pointer">
                Login
              </div>
              <span className="h-6 w-px bg-gray-400" aria-hidden="true"></span>
              <div className="text-lg font-medium text-gray-700 hover:text-gray-800 cursor-pointer pr-3">
                Create account
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id} className="group relative cursor-pointer">
              <a
                href={data.link}
                className="px-4 hover:text-primary duration-200 flex items-center"
              >
                {data.name}
                {data.dropdownLinks && (
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                )}
              </a>
              {data.dropdownLinks && (
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {data.dropdownLinks.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          {/* <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {data.dropdownLinks.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
