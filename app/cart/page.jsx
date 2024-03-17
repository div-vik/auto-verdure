import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <div className="mt-[70px] sm:mt-[155px] xl:mt-[105px] mb-[131px] sm:mb-[106px] xl:mb-[188px] w-full bg-[#FFFCF8] xl:flex xl:flex-col xl:justify-center xl:items-center">
      {/* Title */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-[40px] sm:text-[70px] leading-[48px] sm:leading-[80px] -tracking-[1px] sm:-tracking-[1.75px] font-normal text-primaryGrayscale">
          <p>Cart</p>
        </div>
        <div className="mt-3 sm:mt-6 text-base font-medium">
          <p className="text-secondaryGrayscale">
            <Link href="/">
              <span className="text-primaryMain">Home</span>
            </Link>{" "}
            / Cart
          </p>
        </div>
      </div>

      {/* Cart Items */}
      <div className="mt-[58px] sm:mt-[112px] xl:mt-[141px] xl:w-[1210px] px-[39px] sm:px-[50px] xl:px-0">
        {/* Product Details */}
        <div className="w-full xl:flex xl:gap-x-[33px] xl:justify-normal xl:items-start">
          <p className="sm:hidden text-2xl leading-8 font-bold text-[#111827]">
            Your Cart
          </p>

          <div className="mt-6 w-full flex sm:hidden flex-col gap-y-[24.46px]">
            <div className="w-full flex gap-x-6">
              <div className="w-[112px] h-[112px]">
                <Image
                  className="w-full h-full"
                  src="/cartPlant.png"
                  alt="cartPlant"
                  width={112}
                  height={112}
                />
              </div>

              <div className="w-full flex justify-between">
                <div className="text-[18px] leading-7 text-[#111827] flex flex-col gap-y-[7px]">
                  <p className="font-bold">Grobox</p>
                  <p className="font-normal">Rs. 27337</p>
                  <p className="font-normal">Quantity</p>
                  <div className="h-[22.5px] px-[7.68px] py-4 rounded-[29.2px] border-[0.51px] border-[#9F9F9F] bg-[#FFFFFF] flex justify-center items-center">
                    - 1 +
                  </div>
                </div>

                <div className="w-[28px] h-[28px]">
                  <Image
                    className="w-full h-full object-contain"
                    src="/delete.svg"
                    alt="delete"
                    width={28}
                    height={28}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex gap-x-6">
              <div className="w-[112px] h-[112px]">
                <Image
                  className="w-full h-full"
                  src="/cartPlant.png"
                  alt="cartPlant"
                  width={112}
                  height={112}
                />
              </div>

              <div className="w-full flex justify-between">
                <div className="text-[18px] leading-7 text-[#111827] flex flex-col gap-y-[7px]">
                  <p className="font-bold">Grobox</p>
                  <p className="font-normal">Rs. 27337</p>
                  <p className="font-normal">Quantity</p>
                  <div className="h-[22.5px] px-[7.68px] py-4 rounded-[29.2px] border-[0.51px] border-[#9F9F9F] bg-[#FFFFFF] flex justify-center items-center">
                    - 1 +
                  </div>
                </div>

                <div className="w-[28px] h-[28px]">
                  <Image
                    className="w-full h-full object-contain"
                    src="/delete.svg"
                    alt="delete"
                    width={28}
                    height={28}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex gap-x-6">
              <div className="w-[112px] h-[112px]">
                <Image
                  className="w-full h-full"
                  src="/cartPlant.png"
                  alt="cartPlant"
                  width={112}
                  height={112}
                />
              </div>

              <div className="w-full flex justify-between">
                <div className="text-[18px] leading-7 text-[#111827] flex flex-col gap-y-[7px]">
                  <p className="font-bold">Grobox</p>
                  <p className="font-normal">Rs. 27337</p>
                  <p className="font-normal">Quantity</p>
                  <div className="h-[22.5px] px-[7.68px] py-4 rounded-[29.2px] border-[0.51px] border-[#9F9F9F] bg-[#FFFFFF] flex justify-center items-center">
                    - 1 +
                  </div>
                </div>

                <div className="w-[28px] h-[28px]">
                  <Image
                    className="w-full h-full object-contain"
                    src="/delete.svg"
                    alt="delete"
                    width={28}
                    height={28}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full xl:w-[784px] hidden sm:flex flex-col justify-center items-center">
            {/* Product Table */}
            <table className="w-full">
              <thead className="w-full px-[69px] py-[15px] rounded-2xl border-[1px] border-[#000000] bg-white flex justify-between items-center">
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
              </thead>

              <tbody className="mt-[37px] w-full px-[69px] text-base text-[#9F9F9F] flex gap-y-[37px] justify-between items-center">
                <tr className="w-full flex justify-between items-center">
                  <td>
                    <div className="w-fit flex">
                      <div className="w-[105px] h-[105px]">
                        <Image
                          className="w-full h-full"
                          src="/cartPlant.png"
                          alt="imgae"
                          width={105}
                          height={105}
                        />
                      </div>
                      <p>Grobox</p>
                    </div>
                  </td>
                  <td>Rs. 250,000.00</td>
                  <td className="w-fit h-fit rounded-[57px] border-[1px] border-[#9F9F9F]">
                    - 0 +
                  </td>
                  <td className="text-[#000000]">Rs. 250,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="mt-6 sm:mt-12 xl:mt-0 w-full xl:w-[353px]">
            <div className="w-full px-5 py-[15px] rounded-2xl flex flex-col justify-center items-center sm:justify-end sm:items-end xl:justify-center xl:items-center bg-[#FFFFFF]">
              <p className="text-[32px] font-bold">Cart Totals</p>

              <div className="my-[18px] xl:my-[71px] w-[243px] xl:w-full xl:px-[35px] flex gap-y-[31px] flex-col justify-center">
                <div className="w-full flex justify-between">
                  <p className="text-base font-[600]">Subtotal</p>
                  <p className="text-base text-[#9F9F9F] font-normal">
                    Rs. 250,000.00
                  </p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="text-base font-[600]">Total</p>
                  <p className="text-xl text-primaryMain font-[600]">
                    Rs. 250,000.00
                  </p>
                </div>
              </div>

              <Link
                href="/cart/checkout/signup"
                className="w-full sm:w-[353px] xl:w-full text-base leading-[20.8px] px-6 py-[17px] rounded-[30px] text-[#FFFFFF] font-normal bg-[#070707] flex justify-center items-center"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
