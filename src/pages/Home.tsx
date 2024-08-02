import React, { useContext } from "react";
import HomePageCategoryList from "../components/HomePageCategoryList";
import MiddleSingleProduct from "./MiddleSingleProduct";
import HomeStaticBlackBackground from "../components/HomeStaticBlackBackground";
import Burger from "../components/Burger";
import { Context } from "../App";
import Cart from "../components/Cart";

export default function Home() {
  const { burgerShow, cartShow } = useContext(Context);
  return (
    <div className="relative">
      {cartShow ? <Cart /> : null}
      {burgerShow ? <Burger /> : null}
      <HomeStaticBlackBackground />
      <HomePageCategoryList />
      <MiddleSingleProduct />
    </div>
  );
}
