import React from "react";
import data from "../data.json";
import arrowRight from "/assets/shared/desktop/icon-arrow-right.svg";

export default function HomePageList() {
  return (
    <div className="parent flex flex-col  items-center px-[24px] gap-[60px] mb-[120px] mt-[70px] ">
      {
        <>
          {data[data.length - 1].info?.map((item) => {
            return (
              <div className="flex flex-col items-center w-full bg-[#F1F1F1] rounded-[8px] pb-[15px] ">
                <img
                  src={item.source}
                  alt=""
                  style={{
                    width: item.size.width,
                    height: item.size.height,
                    marginTop: "-14%",
                  }}
                />
                <h1 className="text-[#000] text-[15px] font-bold tracking-[1.071px] uppercase mb-[15px]">
                  {item.name}
                </h1>
                <div className="flex gap-[13px] items-center">
                  <span className="text-[#000] text-[13px] font-bold tracking-[1.071px] uppercase opacity-50">
                    {item.text}
                  </span>
                  <img src={item.arrow} alt="" />
                </div>
              </div>
            );
          })}
        </>
      }
    </div>
  );
}
