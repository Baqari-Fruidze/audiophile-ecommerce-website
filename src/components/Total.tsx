import React, { useContext } from "react";
import { Context } from "../App";
import data from "../data.json";

export default function Total() {
  const { list } = useContext(Context);
  const names = Object.keys(list);

  return (
    <div className="flex flex-col gap-[31px]">
      <div className="flex flex-col gap-[8px]">
        <div className="flex justify-between items-center">
          <span>TOTAL</span>
          <span></span>
        </div>
        <div className="flex justify-between items-center">
          <span>SHIPPING</span>
          <span></span>
        </div>
        <div className="flex justify-between items-center">
          <span>VAT (INCLUDED)</span>
          <span></span>
        </div>
        <div className="flex justify-between items-center">
          <span>GRAND TOTAL</span>
          <span></span>
        </div>
      </div>
      <button>CONTINUE & PAY</button>
    </div>
  );
}
