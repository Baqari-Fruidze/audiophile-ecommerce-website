import React from "react";
import earphoneMobile from "/assets/home/mobile/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";

export default function HomeYX1Earphones() {
  return (
    <div className="flex flex-col items-center gap-[24px] w-full ">
      <img src={earphoneMobile} alt="" className="rounded-[8px] w-full" />
      <div className="bg-[#F1F1F1] py-[41px] pl-[24px] w-full rounded-[8px]">
        <h1 className="text-[28px] text-[#000] font-bold tracking-[2px] uppercase mb-[32px]">
          YX1 EARPHONES
        </h1>
        <Link className="text-[#000] text-[13px] font-bold tracking-[1px] uppercase py-[14px] px-[31px] border-[1px] border-solid border-[#000] ">
          See Product
        </Link>
      </div>
    </div>
  );
}
