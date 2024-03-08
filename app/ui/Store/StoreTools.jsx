import Image from "next/image";
import React from "react";

const StoreTools = () => {
  return (
    <div className="mt-[42px] md:mt-10 w-screen">
      <div className="py-[30px] md:px-[98px] md:py-[38px] bg-[#9A5CF50F] bg-opacity-[6%] flex flex-col justify-center items-center">
        <div className="max-w-[355px] md:max-w-full w-full text-xs md:text-xl flex justify-between">
          <div className="w-fit flex items-center">
            {/* Filter */}
            <div className="w-fit flex items-center">
              <Image
                className="object-contain"
                src="/filter.svg"
                alt="filter"
                width={25}
                height={25}
              />
              <p className="ml-[9px] md:ml-3 font-normal">Filter</p>
              <Image
                className="object-contain hidden md:flex ml-[24px]"
                src="/gridRound.svg"
                alt="gridRound"
                width={28}
                height={28}
              />
              <Image
                className="object-contain hidden md:flex ml-[24px]"
                src="/list.svg"
                alt="list"
                width={24}
                height={24}
              />
            </div>

            <div className="hidden md:flex ml-[30px] mr-[34px] w-[2px] h-[37px] bg-[#9F9F9F]" />

            <div className="w-fit hidden md:flex items-center">
              <p className="ml-[9px] text-base font-normal">
                Showing 1–16 of 32 results
              </p>
            </div>
          </div>

          {/* Sort by, Default */}
          <div className="w-fit flex xl:gap-[29px] justify-center items-center">
            <div className="w-fit hidden lg:flex justify-end items-center">
              <p className="font-normal mr-[20px]">Show</p>
              <p className="px-[18px] py-3 rounded-full font-normal bg-white flex justify-center items-center">
                16
              </p>
            </div>

            <div className="w-fit flex md:hidden lg:flex justify-end items-center">
              <p className="font-normal mr-[20px]">Sort by</p>
              <p className="px-8 py-3 rounded-[53px] font-normal bg-white flex justify-center items-center">
                Default
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 hidden w-full px-8 md:flex lg:hidden gap-[29px] justify-end items-center">
        <div className="w-fit flex justify-end items-center">
          <p className="font-normal mr-[20px]">Show</p>
          <p className="px-[18px] py-3 rounded-full font-normal bg-white flex justify-center items-center">
            16
          </p>
        </div>

        <div className="w-fit flex justify-end items-center">
          <p className="font-normal mr-[20px]">Sort by</p>
          <p className="px-8 py-3 rounded-[53px] font-normal bg-white flex justify-center items-center">
            Default
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreTools;
