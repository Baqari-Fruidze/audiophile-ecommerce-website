import React from "react";
import { Product } from "../types/SingleObjType";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function FeaturesAndInTheCart({
  dataToShow,
}: {
  dataToShow: Product;
}) {
  const mobile = useMediaQuery("only screen and (max-width : 768px)");
  const tablet = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 1439px)"
  );
  return (
    <div className="flex flex-col gap-[88px] px-[24px] md:gap-[120px] md:px-[40px]">
      <div className="features flex flex-col gap-[24px] md:gap-[32px]">
        <span className="text-[24px] text-[#000] font-bold tracking-[0.857px] leading-[36px] md:text-[32px] md:tracking-[1.143px]">
          FEATURES
        </span>
        <p className="text-[#000] text-[15px] font-normal leading-[25px] opacity-50">
          {dataToShow.features}
        </p>
      </div>
      <div className="inTheBox flex flex-col gap-[24px] md:flex-row md:gap-[30%]">
        <span className="text-[24px] text-[#000] font-bold tracking-[0.857px] leading-[36px] md:text-[32px] md:tracking-[1.143px]">
          in the box
        </span>
        <div>
          {dataToShow.includes.map((item, index) => {
            return (
              <div className="flex gap-[21px] md:gap-[24px]" key={index}>
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
      <div className="ImagesCon flex flex-col gap-[24px] md:flex-row">
        <div className="twoImagesCon flex  flex-col gap-[24px]">
          <img
            src={
              mobile
                ? dataToShow.gallery.first.mobile
                : tablet
                ? dataToShow.gallery.first.tablet
                : dataToShow.gallery.first.desktop
            }
            alt=""
            className="rounded-[8px]"
          />
          <img
            src={
              mobile
                ? dataToShow.gallery.second.mobile
                : tablet
                ? dataToShow.gallery.second.tablet
                : dataToShow.gallery.second.desktop
            }
            alt=""
            className="rounded-[8px]"
          />
        </div>
        <div>
          <img
            src={
              mobile
                ? dataToShow.gallery.third.mobile
                : tablet
                ? dataToShow.gallery.third.tablet
                : dataToShow.gallery.third.desktop
            }
            alt=""
            className="rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
}
