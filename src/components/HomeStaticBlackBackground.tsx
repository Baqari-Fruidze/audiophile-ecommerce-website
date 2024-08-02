import React from "react";
import { Link } from "react-router-dom";

export default function HomeStaticBlackBackground() {
  return (
    <div className=" bg-[url('/assets/home/mobile/image-header.jpg')]  bg-cover bg-[center_top_-90px] py-[108px] flex flex-col items-center px-[24px] mb-[90px] md:bg-[url('/assets/home/tablet/image-header.jpg')] md:py-[136px] ">
      <span className="text-[14px] text-[#fff] font-light tracking-[10px] uppercase opacity-[0.4964] mb-[14px] md:mb-[24px]">
        NEW PRODUCT
      </span>
      <h1 className="text-[#fff] text-[36px] font-bold leading-[40px] tracking-[1.286px] text-center mb-[24px]  md:text-[56px] md:leading-[58px] md:tracking-[2px]">
        XX99 Mark II HeadphoneS
      </h1>
      <p className="text-[15px] font-normal text-[#fff] text-center opacity-75 leading-[25px] mb-[28px] md:w-[39ch] md:mb-[40px]">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Link
        to={"/headphones/XX99 Mark II Headphones"}
        className="bg-[#D87D4A] text-[13px] text-[#fff] font-bold tracking-[1px] uppercase py-[15px] px-[30px]"
      >
        see product
      </Link>
    </div>
  );
}
