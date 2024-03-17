import React from "react";

const Payment = () => {
  return (
    <div className="mb-[95px] sm:mb-[58px] xl:mb-[105px] w-full px-11 sm:px-0 flex flex-col justify-center items-center">
      {/* Title */}
      <div className="mb-[42px] sm:mb-[52px] max-w-[560px] w-full flex flex-col gap-y-3 sm:justify-center sm:items-center">
        <p className="text-[32px] leading-8 font-normal capitalize text-[#070707]">
          Payment
        </p>
        <p className="w-[266px] sm:w-full text-sm leading-[22.4px] font-medium text-[#8E8F94] sm:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Content */}
      <div className="w-full sm:px-[51px] xl:px-[12px] flex flex-col justify-center items-center">
        <div className="mt-[86px] sm:mt-[69px] max-w-[1119px] w-full h-[703px] border-[1px] rounded-[25px] border-[#000000]"></div>
      </div>
    </div>
  );
};

export default Payment;
