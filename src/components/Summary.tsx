import React, { useContext } from "react";
import { Context } from "../App";
import BoughtItems from "./BoughtItems";

export default function Summary() {
  return (
    <div className="bg-[#FFF] flex flex-col gap-[32px] px-[24px] py-[32px]">
      <h1 className="text-[18px] text-[#000] font-bold tracking-[1.286px] uppercase">
        summary
      </h1>
      <BoughtItems />
    </div>
  );
}
