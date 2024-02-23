import Image from "next/image";
import Link from "next/link";
import React from "react";

const CollectionCard = () => {
  return (
    <div className="w-fit h-fit md:h-fit p-3 md:p-0 md:flex flex-row-reverse rounded-xl md:rounded-[32.1px] md:overflow-hidden bg-[#F8F8F8]">
      <Image
        className="object-contain md:w-[203.231px] md:h-full xl:w-[355px]"
        src="/newCollection.png"
        alt="img"
        width={147.347}
        height={157.183}
      />

      <div className="mt-[16.94px] w-[119px] xl:w-[202px] md:mx-[36.64px] xl:mx-16 xl:mt-[40px]">
        <p className="text-[15.237px] md:text-[21.754px] xl:text-[38px] leading-[19.888px] md:leading-[28.281px] xl:leading-[49.4px] text-[#0E0E0E] font-normal">
          Zenpot
        </p>
        <p className="mt-[8.12px] md:mt-[9.47px] xl:mt-[16.8px] mb-2 md:mb-[5.57px] xl:mb-[10px] text-[8px] md:text-[9.732px] xl:text-[17px] leading-[12.029px] md:leading-[17.174px] xl:leading-[30px] text-[#5B5B5B] font-normal">
          zenpot nurtures your plant while adding a touch of serenity to your
          living space.
        </p>
        <Link href="#">
          <p className="flex items-center md:pb-[5px] md:border-b-[1px] md:border-[#BBBBBB] text-[6.817px] md:text-[9.732px] xl:text-[17px] leading-[0.02px] md:leading-[11.45px] xl:leading-5 text-[#0E0E0E] font-normal">
            Buy Now{" "}
            <span>
              <Image
                className="object-contain ml-[2px] md:w-[10.305px] md:h-[10.877px] xl:w-[18px] xl:h-[19px]"
                src="/buyNow.svg"
                alt="img"
                width={7.21}
                height={7.619}
              />
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CollectionCard;
