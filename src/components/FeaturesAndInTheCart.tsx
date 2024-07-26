import React from "react";
import { Product } from "../types/SingleObjType";

export default function FeaturesAndInTheCart({
  dataToShow,
}: {
  dataToShow: Product;
}) {
  return (
    <div className="flex flex-col gap-[88px] px-[24px]">
      <div className="features flex flex-col gap-[24px]">
        <span className="text-[24px] text-[#000] font-bold tracking-[0.857px] leading-[36px]">
          FEATURES
        </span>
        <p className="text-[#000] text-[15px] font-normal leading-[25px] opacity-50">
          {dataToShow.features}
        </p>
      </div>
      <div className="inTheBox flex flex-col gap-[24px] ">
        <span className="text-[24px] text-[#000] font-bold tracking-[0.857px] leading-[36px]">
          in the box
        </span>
        <div>
          {dataToShow.includes.map((item, index) => {
            return (
              <div className="flex gap-[21px]" key={index}>
                <span className="text-[#D87D4A] text-[15px] font-bold leading-[25px]">
                  {item.quantity}x
                </span>
                <span className="text-[#000] text-[15px] font-normal leading-[25px] opacity-50">
                  {item.item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ImagesCon flex flex-col gap-[24px]">
        <div className="twoImagesCon flex  flex-col gap-[24px]">
          <img
            src={dataToShow.gallery.first.mobile}
            alt=""
            className="rounded-[8px]"
          />
          <img
            src={dataToShow.gallery.second.mobile}
            alt=""
            className="rounded-[8px]"
          />
        </div>
        <div>
          <img
            src={dataToShow.gallery.third.mobile}
            alt=""
            className="rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
}
