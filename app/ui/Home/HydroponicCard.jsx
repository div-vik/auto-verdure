import Image from "next/image";
import React from "react";

const HydroponicCard = ({ data }) => {
  return (
    <div className="max-w-[373px] h-[315px] md:w-full md:h-[308.96px] xl:w-[373px] xl:h-[315px] px-8 pt-[52px] pb-[75px] rounded-3xl bg-primaryCream hover:bg-primaryMain hover:text-white">
      <Image
        className="object-contain md:w-[39.233px] md:h-[39.22px]"
        src={data.img}
        alt={data.title}
        width={40}
        height={40}
      />
      <div className="mt-[39px] max-w-[309px] md:w-[303.075px] xl:w-[309px]">
        <p className="text-2xl md:text-[23.54px] xl:text-2xl leading-[28.8px] md:leading-[28.248px] xl:leading-[28.8px] -tracking-[0.6px] md:-tracking-[0.588px] xl:-tracking-[0.6px] font-[600] text-primaryGrayscale">
          {data.title}
        </p>
        <p className="mt-2 text-sm md:text-[13.732px] xl:text-sm leading-6 md:leading-[23.54px] xl:leading-6 font-normal text-secondaryGrayscale">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default HydroponicCard;
