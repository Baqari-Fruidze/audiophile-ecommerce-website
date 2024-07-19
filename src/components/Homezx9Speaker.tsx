import React from "react";
import { Link } from "react-router-dom";
import speakerMobile from "/assets/home/mobile/image-speaker-zx9.png";

export default function Homezx9Speaker() {
  return (
    <div className="parent bg-[#D87D4A] rounded-[8px] py-[55px] px-[23px] w-full flex flex-col items-center gap-[32px]">
      <img src={speakerMobile} alt="" className="w-[172px]  h-[207px]" />
      <div className="flex flex-col items-center gap-[24px]">
        <h1 className="text-[36px] text-[#fff] font-bold tracking-[1.25px] uppercase text-center w-[7ch] leading-[40px]">
          ZX9 SPEAKER
        </h1>
        <p className="text-[15px] font-light leading-[25px] text-[#fff] text-center opacity-75">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link className="bg-[#000] text-[13px] text-[#fff] font-bold tracking-[1px] uppercase py-[15px] px-[30px]">
          See Product
        </Link>
      </div>
    </div>
  );
}
