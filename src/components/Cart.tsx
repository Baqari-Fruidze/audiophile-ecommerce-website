import React, { useContext, useEffect } from "react";
import { Context } from "../App";
import data from "../data.json";
import { Product } from "../types/SingleObjType";

export default function BoughtItems() {
  const { list, setList } = useContext(Context);
  const dataToMap = Object.entries(list);
  let names;
  let total;
  let vat: number;
  let grandtotal;
  let length;
  if (Object.keys(list).length > 0) {
    length = Object.keys(list).length;
    names = Object.entries(list);
    total = names.reduce((acc, el) => {
      return (
        (data.find((item) => el[0] === item.name) as Product)?.price * el[1] +
        acc
      );
    }, 0);
    vat = Number((total * 0.2).toFixed(2));
    grandtotal = total + vat + 50;
  }
  useEffect(() => {
    Object.keys(list).length > 0 &&
      localStorage.setItem("buyList", JSON.stringify(list));
  }, [list]);

  return (
    <div className="fixed w-screen min-h-screen bg-[rgba(0,0,0,0.4)] flex justify-center items-center z-20 top-[100px] left-0">
      <div className=" flex flex-col gap-[31px] w-[90%] rounded-[8px] bg-[#fff] py-[32px] px-[28px] mt-[-450px]">
        <div className="flex justify-between">
          <span className="text-[18px] text-[#000] font-bold tracking-[1.286] uppercase">
            cart({length})
          </span>
          <span
            className="text-[15px] text-[#000] font-normal opacity-50 underline"
            onClick={() => setList({})}
          >
            Remove all
          </span>
        </div>
        <div className="flex flex-col gap-[24px] ">
          {dataToMap.map((el, index) => {
            return (
              <div className="flex justify-between items-center" key={index}>
                <div className="flex gap-[16px]">
                  <div className="bg-[ #F1F1F] rounded-[8px] w-[64px] h-[64px] flex items-center justify-center">
                    <img
                      src={
                        data[0].CartImages?.find((item) => el[0] === item.name)
                          ?.src
                      }
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] text-[#000] font-bold mt-[10px]">
                      {el[0]}
                    </span>
                    <span className="text-[14px] text-[#000] font-bold opacity-50">
                      $ {data.find((finded) => finded?.name === el[0])?.price}
                    </span>
                  </div>
                </div>
                <div className="bg-[#F1F1F1] flex justify-between px-[10px] py-[7px] w-[90px]">
                  <span
                    className="text-[13px] font-bold text-[#000] tracking-[1px] opacity-25"
                    onClick={() =>
                      setList((prev) => ({ ...prev, [el[0]]: el[1] - 1 }))
                    }
                  >
                    -
                  </span>
                  <span className="text-[13px] font-bold text-[#000] tracking-[1px]">
                    {el[1]}
                  </span>
                  <span
                    className="text-[13px] font-bold text-[#000] tracking-[1px] opacity-25"
                    onClick={() =>
                      setList((prev) => ({ ...prev, [el[0]]: el[1] + 1 }))
                    }
                  >
                    +
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="flex justify-between">
            <span className="text-[15px] text-[#000] font-normal opacity-50">
              total
            </span>
            <span className="text-[18px] text-[#000] font-bold  uppercase">
              ${grandtotal}
            </span>
          </div>
          <button className="bg-[#D87D4A] py-[15px] text-[13px] text-[#fff] tracking-[1px] uppercase font-bold">
            checkout
          </button>
        </div>
      </div>
    </div>
  );
}
