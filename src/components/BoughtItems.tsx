import { useContext } from "react";
import { Context } from "../App";
import data from "../data.json";

export default function BoughtItems() {
  const { list } = useContext(Context);
  const dataToMap = Object.entries(list);
  return (
    <div className="flex flex-col gap-[24px] ">
      {dataToMap.map((el, index) => {
        return (
          <div className="flex justify-between" key={index}>
            <div className="flex gap-[16px]">
              <div className="bg-[ #F1F1F] rounded-[8px] w-[64px] h-[64px] flex items-center justify-center">
                <img
                  src={
                    data[0].CartImages?.find((item) => el[0] === item.name)?.src
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
            <span className="text-[15px] text-[#000] font-bold opacity-50 mt-[8px]">
              x{el[1]}
            </span>
          </div>
        );
      })}
    </div>
  );
}
