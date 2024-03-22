import React from "react";
import Input from "../ui/Input";
import Link from "next/link";
import { BsApple, BsGoogle } from "react-icons/bs";
import Image from "next/image";

const Signin = () => {
  return (
    <div className="mt-[55px] mb-[41px] lg:mb-[152px] bg-orange-500 w-full flex flex-col lg:flex-row lg:gap-[57px] justify-center items-center lg:justify-normal overflow-x-hidden">
      <div className="bg-purple-500 mb-[46px] lg:mb-0 w-full lg:w-[560px] px-11 sm:px-[50px] flex flex-col justify-center items-center">
        {/* Title */}
        <div className="max-w-[560px] w-full flex flex-col gap-y-3">
          <p className="text-[32px] leading-8 font-normal capitalize text-[#070707]">
            Welcome back
          </p>
          <p className="w-[266px] sm:w-full text-sm leading-[22.4px] font-medium text-[#8E8F94]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Google and Apple Authentication */}
        <div className="mt-[42px] sm:mt-[52px] max-w-[560px] w-full flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
          <button className="w-full flex gap-2 justify-center items-center py-[14px] sm:py-[17px] rounded-[60px] border-[1px] border-[#070707] bg-[#FFFFFF] text-[#070707] hover:bg-[#070707] hover:text-white ease-in-out duration-200">
            <BsApple />
            <p>Continue with Apple</p>
          </button>
          <button className="w-full flex gap-2 justify-center items-center py-[14px] sm:py-[17px] rounded-[60px] border-[1px] border-[#070707] bg-[#FFFFFF] text-[#070707] hover:bg-[#070707] hover:text-white ease-in-out duration-200">
            <BsGoogle />
            <p>Continue with Google</p>
          </button>
        </div>

        {/* Or */}
        <div className="my-8 max-w-[560px] w-full flex gap-x-2 items-center">
          <div className="w-full h-[1px] bg-[#E4E4E4]" />
          <p className="text-base leading-[25.6px] font-medium text-[#070707]">
            or
          </p>
          <div className="w-full h-[1px] bg-[#E4E4E4]" />
        </div>

        {/* Form */}
        <div className="max-w-[560px] w-full">
          <form className="w-full flex flex-col gap-y-6">
            <Input label="Email" placeholder="Type here" type="email" />
            <Input label="Password" placeholder="Type here" type="password" />

            <button
              type="submit"
              className="mt-[42px] sm:mt-[52px] w-full text-base px-6 py-[17px] rounded-[30px] border-[1px] bg-[#070707] border-[#070707] text-[#FFFFFF] font-[600]"
            >
              Log In
            </button>

            <p className="mt-4 sm:mt-6 text-sm leading-[18.2px] text-[#8E8F94] font-medium text-center">
              Don’t have an account?
              <Link href="/cart/checkout/signup">
                <span className="text-[#070707]"> Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="bg-pink-500 w-fit flex justify-center items-center">
        {/* Image */}
        <div className="w-[70%] h-[70%] lg:w-[548.65px] lg:h-[592px] md:object-contain">
          <Image
            className="w-full h-full"
            src="/signinImg.png"
            alt="img"
            width={345.65}
            height={373}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
