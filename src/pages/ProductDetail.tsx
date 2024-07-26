import React from "react";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomePageCategoryList from "../components/HomePageCategoryList";
import DetailsTopSection from "../components/DetailsTopSection";
import FeaturesAndInTheCart from "../components/FeaturesAndInTheCart";

export default function ProductDetail() {
  const { product } = useParams();
  const navigate = useNavigate();
  const dataToShow = data?.find((item) => item.name === product);
  return (
    <div className="parent pt-[16px]">
      <button
        onClick={() => navigate(-1)}
        className="text-[#000] text-[15px] font-normal opacity-50 ml-[24px]"
      >
        go back
      </button>
      <div className="flex flex-col gap-[88px]">
        <DetailsTopSection dataToShow={dataToShow} />
        <FeaturesAndInTheCart dataToShow={dataToShow} />
        <HomePageCategoryList />
      </div>
    </div>
  );
}
