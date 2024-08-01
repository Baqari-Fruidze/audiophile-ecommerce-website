import { useContext } from "react";
import { Context } from "../App";
import data from "../data.json";
import { Product } from "../types/SingleObjType";

export default function FinalOrder() {
  const { list } = useContext(Context);
  let src;
  let names;
  let singleItem: string | undefined;
  let price;
  let count;
  let total;
  let vat: number;
  let grandtotal: number | undefined;

  if (Object.keys(list).length > 0) {
    names = Object.entries(list);
    singleItem = names[0][0];
    src = data[0].CartImages?.find((item) => item.name === singleItem)?.src;
    price = data.find((item) => item.name === singleItem)?.price;
    count = Object.keys(list).length - 1;
    total = names.reduce((acc, el) => {
      return (
        (data.find((item) => el[0] === item.name) as Product)?.price * el[1] +
        acc
      );
    }, 0);
    vat = Number((total * 0.2).toFixed(2));
    grandtotal = total + vat + 50;
  }

  return (
    <div className="min-w-screen min-h-screen bg-[rgba(0,0,0,0.4)]  fixed top-0 left-0  flex items-center ">
      <div className="p-[32px] bg-[#FFF] rounded-[8px]   ">
        <svg
          width="64"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-[23px]"
        >
          <g fill="none" fill-rule="evenodd">
            <circle fill="#D87D4A" cx="32" cy="32" r="32" />
            <path
              stroke="#FFF"
              stroke-width="4"
              d="m20.754 33.333 6.751 6.751 15.804-15.803"
            />
          </g>
        </svg>
        <p className="text-[24px] text-[#000] font-bold tracking-[0.857px] leading-[28px] ">
          THANK YOU
        </p>
        <p className="text-[24px] text-[#000] font-bold tracking-[0.857px] leading-[28px] mb-[16px]">
          FOR YOUR ORDER
        </p>
        <p className="text-[15px] text-[#000] font-normal opacity-50 mb-[24px]">
          You will receive an email confirmation shortly.
        </p>
        <div className="flex flex-col mb-[23px]">
          <div className="bg-[#F1F1F1] p-[24px] flex flex-col gap-[25px] rounded-[8px]">
            <div className="flex justify-between relative">
              <div className="flex gap-[27px] ">
                <div className="flex justify-center items-center">
                  <img src={src} alt="" className="w-28px h-[32px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] text-[#000] font-bold">
                    {singleItem?.slice(0, singleItem.length - 10)}
                  </span>
                  <span className="text-[14px] text-[#000] font-bold opacity-50">
                    ${price}
                  </span>
                </div>
              </div>
              <span className="text-[15px] text-[#000] font-bold leading-[25px] opacity-50">
                {names && names[0][1]}
              </span>
              <hr className="bg-[#000] text-[#000] h-[1px] w-full absolute bottom-[-30%] opacity-[0.08] " />
            </div>
            <div className="flex items-center justify-center ">
              <span className="text-[12px] text-[#000] font-bold opacity-45 tracking-[-0.214px]">
                and {count} other item(s)
              </span>
            </div>
          </div>
          <div className="bg-[#000] flex flex-col gap-[8px] py-[17px] pl-[24px]">
            <p className="text-[15px] text-[#fff] font-normal opacity-50 leading-[25px]">
              grand total
            </p>
            <p className="text-[#fff] text-[18px] font-bold uppercase">
              ${grandtotal}
            </p>
          </div>
        </div>
        <button className="bg-[#D87D4A] text-[#fff] text-[13px] font-bold py-[15px] tracking-[1px] px-[52px] w-full">
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}
