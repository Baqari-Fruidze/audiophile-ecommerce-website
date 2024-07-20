import React from "react";
import { Link } from "react-router-dom";

export default function Homezx7Speaker() {
  return (
    <div className="bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-center w-full py-[101px] pl-[24px] rounded-[8px]">
      <h1 className="text-[28px] text-[#000] font-bold tracking-[2px] uppercase mb-[32px]">
        ZX7 SPEAKER
      </h1>
      <Link className="text-[#000] text-[13px] font-bold tracking-[1px] uppercase py-[14px] px-[31px] border-[1px] border-solid border-[#000]">
        See Product
      </Link>
    </div>
  );
}
