import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import data from "../data.json";
import HeaderCategory from "../components/HeaderCategory";
import HomePageCategoryList from "../components/HomePageCategoryList";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Context } from "../App";
import Cart from "../components/Cart";
import Burger from "../components/Burger";

export default function Category() {
  const { cartShow, burgerShow } = useContext(Context);
  const { category } = useParams();
  const dataToMap = data.filter((el) => el.category === category).reverse();
  const mobile = useMediaQuery("only screen and (max-width : 768px)");
  const tablet = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 1439px)"
  );

  return (
    <div>
      {burgerShow ? <Burger /> : null}
      {cartShow ? <Cart /> : null}
      <HeaderCategory category={category} />
      <div className="bg-[#FAFAFA] pt-[64px] pb-[120px] px-[24px] flex flex-col gap-[120px] md:pt-[120px] md:px-[40px] des:px-[165px] ">
        {dataToMap.map((item, index) => {
          return (
            <div
              className="flex flex-col gap-[32px] md:gap-[52px] des:flex-row items-center des:gap-[125px]"
              key={index}
            >
              <div
                className={`bg-[#F1F1F1] rounded-[8px] flex items-center justify-center ${
                  index % 2 === 0 ? `des:order-1` : `des:order-2`
                }`}
              >
                <img
                  src={
                    mobile
                      ? item.categoryImage?.mobile
                      : tablet
                      ? item.categoryImage?.tablet
                      : item.categoryImage?.desktop
                  }
                  alt=""
                  className="rounded-[8px]"
                />
              </div>
              <div
                className={`flex flex-col gap-[24px] items-center }   ${
                  index % 2 === 0 ? `des:order-2` : `des:order-1`
                }`}
              >
                {item.new ? (
                  <h1 className="text-[#D87D4A] text-[14px] font-normal tracking-[10px] uppercase">
                    NEW PRODUCT
                  </h1>
                ) : null}
                <p className="text-[#000] text-[28px] font-bold tracking-[1px] uppercase text-center md:text-[40px] md:tracking-[1.429px] md:leading-[44px]">
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
