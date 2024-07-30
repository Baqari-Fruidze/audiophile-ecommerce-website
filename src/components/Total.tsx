import React, { useContext } from "react";
import { Context } from "../App";
import data from "../data.json";

export default function Total() {
  const { list } = useContext(Context);
  const names = Object.entries(list);
  const number = names.reduce((acc, el) => {
    console.log(data.filter((item) => el[0] === item.name));
    return data.filter((item) => el[0] === item.name)[0].price * el[1] + acc;
  }, 0);
  console.log(names);
  return (
    <div className="flex flex-col gap-[31px]">
      <div className="flex flex-col gap-[8px]">
        <div className="flex justify-between items-center">
          <span>TOTAL</span>
          <span>{number}</span>
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
