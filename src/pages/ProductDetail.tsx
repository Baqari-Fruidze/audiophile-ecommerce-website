import { useContext } from "react";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomePageCategoryList from "../components/HomePageCategoryList";
import DetailsTopSection from "../components/DetailsTopSection";
import FeaturesAndInTheCart from "../components/FeaturesAndInTheCart";
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import { Product } from "../types/SingleObjType";
import { Context } from "../App";
import Cart from "../components/Cart";
import Burger from "../components/Burger";

export default function ProductDetail() {
  const { cartShow, burgerShow } = useContext(Context);
  const { product } = useParams();
  const navigate = useNavigate();
  const dataToShow = data?.find((item) => item.name === product) as Product;

  return (
    <div className="parent pt-[16px] md:pt-[33px]">
      {burgerShow ? <Burger /> : null}
      {cartShow ? <Cart /> : null}
      <button
        onClick={() => navigate(-1)}
        className="text-[#000] text-[15px] font-normal opacity-50 ml-[24px] mb-[24px] md:ml-[40px]"
      >
        go back
      </button>
      <div className="flex flex-col gap-[88px] md:gap-[120px]">
        <DetailsTopSection dataToShow={dataToShow} product={product} />
        <FeaturesAndInTheCart dataToShow={dataToShow} />
        <YouMayAlsoLike dataToShow={dataToShow} />
        <HomePageCategoryList />
      </div>
    </div>
  );
}
