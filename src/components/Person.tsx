import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import personMobile from "/assets/shared/mobile/image-best-gear.jpg";
import personTablet from "/assets/shared/tablet/image-best-gear.jpg";
import personDesktop from "/assets/shared/desktop/image-best-gear.jpg";

export default function Person() {
  const mobile = useMediaQuery("only screen and (max-width : 768px)");
  const tablet = useMediaQuery(
    "only screen and (min-width : 768px) and (max-width : 1440px)"
  );
  const desktop = useMediaQuery("only screen and (min-width : 1440px)");
  return (
    <div className="parent flex flex-col gap-[32px] items-center px-[24px] mb-[120px]">
      <img
        src={mobile ? personMobile : tablet ? personTablet : personDesktop}
        alt=""
        className="rounded-[8px]"
      />
      <div className="flex flex-col gap-[32px] ">
        <p className="text-[#000] text-[28px] font-bold tracking-[1px] uppercase text-center ">
          Bringing you the <br />
          <span className="text-[#D87D4A] text-[28px] font-bold tracking-[1px] uppercase">
            best
          </span>{" "}
          audio gear
        </p>
        <p className="text-[#000] text-[15px] font-normal text-center opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
