import React from "react";
import { Product } from "../types/SingleObjType";
import AddToCart from "./AddToCart";

export default function DetailsTopSection({
  dataToShow,
}: {
  dataToShow: Product;
}) {
  return (
    <div className="flex flex-col px-[24px] gap-[40px]">
      <div className="flex justify-center items-center bg-[#F1F1F1]">
        <img src={dataToShow.image.mobile} alt="" className="" />
      </div>
      <div className="flex flex-col gap-[24px]">
        {dataToShow.new ? (
          <h1 className="text-[#D87D4A] text-[14px] font-normal tracking-[10px] uppercase">
            NEW PRODUCT
          </h1>
        ) : null}
        <p className="text-[#000] text-[28px] font-bold tracking-[1px] uppercase text-left">
          {dataToShow.name}
        </p>
        <p className="text-[15px] text-[#000] font-normal leading-[25px] opacity-50">
          {dataToShow.description}
        </p>
        <AddToCart dataToShow={dataToShow} />
      </div>
    </div>
  );
}
