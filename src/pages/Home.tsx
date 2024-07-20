import React from "react";
import HomePageCategoryList from "../components/HomePageCategoryList";
import MiddleSingleProduct from "./MiddleSingleProduct";
import HomeStaticBlackBackground from "../components/HomeStaticBlackBackground";

export default function Home() {
  return (
    <div>
      <HomeStaticBlackBackground />
      <HomePageCategoryList />
      <MiddleSingleProduct />
    </div>
  );
}
