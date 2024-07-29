import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
export default function HomePageCategoryList() {
  const mobile = useMediaQuery("only screen and (max-width : 768px)");
  const tablet = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 1439px)"
  );
  return (
    <div className="parent flex flex-col  items-center px-[24px] gap-[80px] mb-[120px] mt-[70px] md:flex-row md:px-[40px] md:gap-[2%] md:mb-[96px] md:mt-[80px] ">
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
                    marginTop: mobile ? "-10%" : tablet ? "-20%" : "-30%",
                  }}
                />
                <h1 className="text-[#000] text-[15px] font-bold tracking-[1.071px] uppercase mb-[15px]">
                  {item.name}
                </h1>
                <Link to={`/${item.name}`}>
                  <div className="flex gap-[13px] items-center md:gap-[22px]">
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
