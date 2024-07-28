import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function HomeYX1Earphones() {
  const mobile = useMediaQuery("only screen and (max-width : 768px)");
  const tablet = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 1439px)"
  );

  return (
    <div className="flex flex-col  gap-[24px] w-full md:flex-row ">
      <img
        src={
          mobile
            ? "/assets/home/mobile/image-earphones-yx1.jpg"
            : tablet
            ? "/assets/home/tablet/image-earphones-yx1.jpg"
            : "/assets/home/desktop/image-earphones-yx1.jpg"
        }
        alt=""
        className="rounded-[8px] w-full md:w-[50%]"
      />
      <div className="bg-[#F1F1F1] py-[41px] pl-[24px] w-full rounded-[8px] md:py-[101px] md:pl-[42px]">
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
