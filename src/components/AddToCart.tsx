import React from "react";
import { Product } from "../types/SingleObjType";
import { useContext } from "react";
import { Context } from "../App";
import { useState } from "react";
import { useEffect } from "react";

export default function AddToCart({
  dataToShow,
  product,
}: {
  dataToShow: Product;
  product: string;
}) {
  const { list, setList } = useContext(Context);
  const [count, setCount] = useState<number>(1);
  const byuItem = () => {
    setList((prev) => ({ ...prev, [product]: count }));
  };
  useEffect(() => {
    Object.keys(list).length > 0 &&
      localStorage.setItem("buyList", JSON.stringify(list));
  }, [list]);
  console.log(list);
  return (
    <div className="flex flex-col gap-[31px]">
      <span className="text-[#000] text-[18px] font-bold tracking-[1.286px]">
        ${dataToShow.price * count}
      </span>
      <div className="flex gap-[16px] w-[90%] ">
        <div className="bg-[#F1F1F1] w-[45%] px-[15px] py-[14px] flex justify-between">
          <span
            className="text-[13px] text-[#000] font-bold tracking-[1px] opacity-25"
            onClick={() => setCount((prev) => prev - 1)}
          >
            -
          </span>
          <span className="text-[13px] text-[#000] font-bold tracking-[1px]">
            {count}
          </span>
          <span
            className="text-[13px] text-[#000] font-bold tracking-[1px] opacity-25"
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </span>
        </div>
        <div
          className="w-[50%] bg-[#D87D4A] flex items-center justify-center  "
          onClick={byuItem}
        >
          <span className="text-[#fff] text-[13px] font-bold tracking-[1px] ">
            ADD TO CART
          </span>
        </div>
      </div>
    </div>
  );
}
