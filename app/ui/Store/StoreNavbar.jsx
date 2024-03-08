import { storeNavItems } from "@/app/constant/data";
import Link from "next/link";
import React from "react";

const StoreNavbar = () => {
  return (
    <div className="mt-[31px] md:mt-10 md:px-[44px] xl:px-[64px] max-w-[355px] md:max-w-full w-full h-full flex gap-4">
      {storeNavItems.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className="w-fit text-[10px] md:text-[17px] leading-5 px-3 py-2 md:px-6 md:py-3 border-[1px] rounded-[33px] border-[#D1D1D1] hover:bg-[#0E0E0E] hover:border-[#0E0E0E] hover:text-[#fff] font-medium capitalize flex justify-center items-center"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default StoreNavbar;
