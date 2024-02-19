import { orders } from "@/app/constant/data";
import React from "react";

const Orders = () => {
  return (
    <div className="py-[62px] md:pt-[132px] md:pb-[188px] xl:pt-[106px] xl:pb-[260px] 2xl:pb-[320px] px-4 md:px-[51px] xl:px-[216px] 2xl:px-[270px] flex flex-col gap-5 bg-[#FFFCF8]">
      <div className="mt-[30px] flex flex-col gap-y-5">
        {orders.map((order, index) => (
          <>
            <div
              className="w-full px-[19px] py-[21px] text-xs tracking-[0.24px] md:hidden flex flex-col tertiaryFont font-normal border-[1px] rounded-2xl border-black"
              key={index}
            >
              <div className="flex justify-between items-center">
                <div className="w-[120px] font-[600] text-[#151C28]">
                  <p>{order.productName}</p>
                </div>
                <div className="pr-[23px] text-[#585562]">
                  <p>{order.paymentStatus}</p>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div className="text-[#585562]">
                  <p>{order.location}</p>
                </div>
                <div
                  className={
                    order.deliveryStatus === "Delivered"
                      ? "px-4 py-2 rounded-[20px] w-fit bg-secondarySuccessAlerts bg-opacity-10 text-secondarySuccessAlerts"
                      : "px-4 py-2 rounded-[20px] w-fit bg-[#FFF5EB] text-[#FB7E15]"
                  }
                >
                  <p>{order.deliveryStatus}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <table>
        <thead className="hidden md:flex px-[35px] md:text-[11px] tracking-[0.24px] text-[#151C28] tertiaryFont font-normal">
          <tr className="flex justify-between items-center">
            <td className="w-[120px]">Product</td>
            <td>Address</td>
            <td>Order Type</td>
            <td>Payment</td>
            <td>Delivery Status</td>
            <td>Time</td>
          </tr>
        </thead>

        <tbody className="mt-[30px] hidden md:flex flex-col gap-5">
          {orders.map((order, index) => (
            <tr
              key={index}
              className="px-[35px] py-[38px] text-xs w-full border-[1px] border-black rounded-2xl bg-white flex justify-between items-center"
            >
              <td className="w-[120px]">{order.productName}</td>

              <td>{order.location}</td>

              <td>{order.productType}</td>

              <td>{order.paymentStatus}</td>

              <td
                className={
                  order.deliveryStatus === "Delivered"
                    ? "px-4 py-2 rounded-[20px] w-[130px] flex justify-center items-center bg-secondarySuccessAlerts bg-opacity-10 text-secondarySuccessAlerts"
                    : "px-4 py-2 rounded-[20px] w-[130px] flex justify-center items-center bg-[#FFF5EB] text-[#FB7E15]"
                }
              >
                {order.deliveryStatus}
              </td>

              <td>{order.lastUpdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
