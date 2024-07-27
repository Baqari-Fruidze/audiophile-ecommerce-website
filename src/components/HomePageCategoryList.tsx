import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
export default function HomePageCategoryList() {
  return (
    <div className="parent flex flex-col  items-center px-[24px] gap-[60px] mb-[120px] mt-[70px] ">
      {
        <>
          {data[data.length - 1].info?.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center w-full bg-[#F1F1F1] rounded-[8px] pb-[15px]  "
                key={index}
              >
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
                <Link to={`/${item.name}`}>
                  <div className="flex gap-[13px] items-center">
                    <span className="text-[#000] text-[13px] font-bold tracking-[1.071px] uppercase opacity-50">
                      {item.text}
                    </span>
                    <img src={item.arrow} alt="" />
                  </div>
                </Link>
              </div>
            );
          })}
        </>
      }
    </div>
  );
}
