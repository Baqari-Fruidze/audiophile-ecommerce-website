import React from "react";
import data from "../data.json";
import arrowRight from "/assets/shared/desktop/icon-arrow-right.svg";

export default function HomePageList() {
  return (
    <div className="parent flex flex-col gap-[68px] items-center">
      {
        <>
          {data[data.length - 1].info?.map((item) => {
            return (
              <div>
                <img src={item.source} alt="" />
                <h1>{item.name}</h1>
                <span>{item.text}</span>
                <img src={arrowRight} alt="" />
              </div>
            );
          })}
        </>
      }
    </div>
  );
}
