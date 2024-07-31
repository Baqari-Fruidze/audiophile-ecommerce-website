import React, { useContext } from "react";
import { Context } from "../App";
import data from "../data.json";

export default function Total() {
  const { list } = useContext(Context);
  const names = Object.entries(list);
  const number = names.reduce((acc, el) => {
    return data.filter((item) => el[0] === item.name)[0].price * el[1] + acc;
  }, 0);
  const vat = number * 0.2;
  const roundedVat = vat.toFixed(2);
  const total = `${number + Number(roundedVat)}`;
  const grandtotal = total + 50;
  return (
    <div className="flex flex-col gap-[31px]">
      <div className="flex flex-col gap-[8px]">
        <div className="flex justify-between items-center">
          <span className="text-[15px] text-[#000] font-normal leading-[25px] opacity-50">
            TOTAL
          </span>
          <span className="text-[18px] text-[#000] font-bold uppercase">
            {total}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[15px] text-[#000] font-normal leading-[25px] opacity-50">
            SHIPPING
          </span>
          <span className="text-[18px] text-[#000] font-bold uppercase">
            $ 50
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[15px] text-[#000] font-normal leading-[25px] opacity-50">
            VAT (INCLUDED)
          </span>
          <span className="text-[18px] text-[#000] font-bold uppercase">
            {roundedVat}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[15px] text-[#000] font-normal leading-[25px] opacity-50">
            GRAND TOTAL
          </span>
          <span className="text-[18px] text-[#D87D4A] font-bold uppercase">
            {grandtotal}
          </span>
        </div>
      </div>
      <button className="py-[15px] bg-[#D87D4A] text-[#fff] text-[13px] tracking-[1px] font-bold">
        CONTINUE & PAY
      </button>
    </div>
  );
}
