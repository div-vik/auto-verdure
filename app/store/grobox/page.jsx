import React from "react";
import ProductCard from "@/app/ui/Store/ProductCard";
import { grobox } from "@/app/constant/data";
import Link from "next/link";
import TopSegment from "@/app/ui/Store/TopSegment";

const Grobox = () => {
  return (
    <div>
      <TopSegment />

      <div className="mt-[42px] md:mt-[58px] xl:mt-[110px] mb-[70.46px] md:mb-[124.8px] xl:mb-[142.3px] w-full flex flex-col justify-center items-center">
        <div className="max-w-[359px] md:max-w-[750.998px] xl:max-w-[1312px] w-full grid grid-cols-2 xl:grid-cols-3 gap-x-[9px] gap-y-[41.46px] md:gap-x-[43.21px] md:gap-y-16 xl:gap-x-[49px] xl:gap-y-[48px]">
          {grobox.map((product, index) => (
            <Link key={index} href="/store/grobox/123">
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grobox;
