import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navItems } from "../constant/data";

const Navbar = () => {
  return (
    <div className="px-4 py-[19px] md:pl-[51px] md:pr-[27.53px] xl:pl-[117px] xl:pr-[77.34px] bg-[#FFFCF8] flex justify-between items-center">
      {/* Logo and Company Name */}
      <Link
        href="/"
        className="gap-[10px] no-underline text-black flex justify-center items-center"
      >
        <div className="object-contain w-[48.475px] h-[44px]">
          <Image src="/logo.png" alt="logo" width={48.475} height={44} />
        </div>
        <p className="text-sm leading-[28.8px] fontText uppercase text-center font-medium">
          Auto Verdure
        </p>
      </Link>

      {/* Hamburger Icon */}
      <div className="xl:hidden w-[32px] h-[32px] object-contain cursor-pointer">
        <Image src="/hamburger.svg" alt="hamburger" width={32} height={32} />
      </div>

      {/* Nav Items */}
      <div className="hidden xl:block">
        <ul className="gap-16 flex justify-center items-center">
          {navItems.map((item, index) => (
            <Link
              className="text-sm gap-1 flex justify-center items-center text-primaryGrayscale no-underline list-none font-normal leading-6"
              key={index}
              href={item.url}
            >
              <li
                className={
                  item.title === "Contact" ? "font-bold" : "font-normal"
                }
              >
                {item.title}
              </li>
              <div className={item.title === "Contact" ? "flex" : "hidden"}>
                <Image
                  src="/downArrow.svg"
                  alt="downArrow"
                  width={16}
                  height={16}
                />
              </div>
            </Link>
          ))}
        </ul>
      </div>

      {/* Search Bar, Cart, User Avatar */}
      <div className="hidden xl:flex gap-[15px]">
        <div className="w-[240px] h-[50px] pr-[17px] flex justify-between items-center border-2 border-primaryBg rounded-[999px] bg-secondaryBg">
          <input
            className="pl-5 py-[16.6px] mr-[17px] rounded-[999px] border-r-2 w-full h-full focus:outline-none rounded-r-none bg-secondaryBg"
            type="text"
            placeholder="Search"
            autoComplete="false"
          />
          <div className="cursor-pointer">
            <Image
              className="object-contain w-4 h-4"
              src="/search.svg"
              alt="search"
              width={16}
              height={16}
            />
          </div>
        </div>

        <div className="gap-4 flex justify-center items-center">
          <div className="w-[24.53px] h-[24.53px]">
            <Image
              className="object-contain"
              src="/cart.svg"
              alt="cart"
              width={24.53}
              height={24.53}
            />
          </div>
          <div className="w-[24.53px] h-[24.53px]">
            <Image
              className="object-contain"
              src="/avatar.svg"
              alt="cart"
              width={24.53}
              height={24.53}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
