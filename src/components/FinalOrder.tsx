import React, { useContext } from "react";
import { Context } from "../App";
import data from "../data.json";

export default function FinalOrder() {
  const { list } = useContext(Context);
  let src;
  let quantity;
  let names;
  let singleItem;
  let price;
  let count;
  if (Object.keys(list).length > 0) {
    names = Object.entries(list);
    singleItem = names[0][0];
    src = data[0].CartImages?.find(
      (item) => Object.keys(item)[0] === singleItem
    )[singleItem];
    quantity = Object.values(list)[0];
    price = data.find((item) => item.name === singleItem)?.price;
    count = Object.keys(list).length - 1;
  }

  //   console.log(SingleItem);
  //   const ImgSrc = data[0].CartImages?.filter(
  //     (item) => Object.keys(item)[0] === SingleItem
  //   )[1];
  //   const final = Object.values(ImgSrc);
  //   const src = data[0].CartImages?.find((item) =>
  //     console.log(Object.keys(item)[0])
  //   );

  return (
    <div className="p-[32px]">
      <svg
        width="64"
        height="64"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-[23px]"
      >
        <g fill="none" fill-rule="evenodd">
          <circle fill="#D87D4A" cx="32" cy="32" r="32" />
          <path
            stroke="#FFF"
            stroke-width="4"
            d="m20.754 33.333 6.751 6.751 15.804-15.803"
          />
        </g>
      </svg>
      <p className="text-[24px] text-[#000] font-bold tracking-[0.857px] leading-[28px] ">
        THANK YOU
      </p>
      <p className="text-[24px] text-[#000] font-bold tracking-[0.857px] leading-[28px] mb-[16px]">
        FOR YOUR ORDER
      </p>
      <p className="text-[15px] text-[#000] font-normal opacity-50 mb-[24px]">
        You will receive an email confirmation shortly.
      </p>
      <div className="flex flex-col">
        <div className="bg-[#F1F1F1] p-[24px] flex flex-col gap-[25px]">
          <div className="flex justify-between">
            <div className="flex gap-[27px] ">
              <div className="flex justify-center items-center">
                <img src={src} alt="" className="w-28px h-[32px]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] text-[#000] font-bold">
                  {singleItem?.slice(0, singleItem.length - 10)}
                </span>
                <span className="text-[14px] text-[#000] font-bold opacity-50">
                  ${price}
                </span>
              </div>
            </div>
            <span className="text-[15px] text-[#000] font-bold leading-[25px] opacity-50">
              {names && names[0][1]}
            </span>
          </div>
          <div className="flex items-center justify-center">
            <hr className="bg-red-800 text-red-800 h-[10px]" />
            <span className="text-[12px] text-[#000] font-bold opacity-45 tracking-[-0.214px]">
              and {count} other item(s)
            </span>
          </div>
        </div>
        <div className="bg-[#000]"></div>
      </div>
    </div>
  );
}
