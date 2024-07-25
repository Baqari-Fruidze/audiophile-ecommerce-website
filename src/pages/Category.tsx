import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import data from "../data.json";
import HeaderCategory from "../components/HeaderCategory";
import HomePageCategoryList from "../components/HomePageCategoryList";

export default function Category() {
  const { category } = useParams();
  const dataToMap = data.filter((el) => el.category === category).reverse();

  return (
    <div>
      <HeaderCategory category={category} />
      <div className="bg-[#FAFAFA] pt-[64px] pb-[120px] px-[24px] flex flex-col gap-[120px]">
        {dataToMap.map((item, index) => {
          return (
            <div className="flex flex-col gap-[32px]" key={index}>
              <div className="bg-[#F1F1F1] rounded-[8px] flex items-center justify-center">
                <img
                  src={item.categoryImage?.mobile}
                  alt=""
                  className="rounded-[8px]"
                />
              </div>
              <div className="flex flex-col gap-[24px] items-center">
                {item.new ? (
                  <h1 className="text-[#D87D4A] text-[14px] font-normal tracking-[10px] uppercase">
                    NEW PRODUCT
                  </h1>
                ) : null}
                <p className="text-[#000] text-[28px] font-bold tracking-[1px] uppercase text-center">
                  {item.name}
                </p>
                <p className="text-[#000] text-[15px] font-normal text-center leading-[25px] opacity-50">
                  {item.description}
                </p>
                <Link
                  to={`/${category}/${item.name}`}
                  className="bg-[#D87D4A] py-[15px] px-[31px] text-[13px] text-[#fff] font-bold tracking-[1px] uppercase"
                >
                  See Product
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <HomePageCategoryList />
    </div>
  );
}
