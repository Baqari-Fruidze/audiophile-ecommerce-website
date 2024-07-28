import React from "react";
import Homezx9Speaker from "../components/Homezx9Speaker";
import Homezx7Speaker from "../components/Homezx7Speaker";
import HomeYX1Earphones from "../components/HomeYX1Earphones";

export default function MiddleSingleProduct() {
  return (
    <div
      className={`px-[24px] flex flex-col gap-[24px] items-center mb-[120px] md:gap-[32px] md:px-[40px]`}
    >
      <Homezx9Speaker />
      <Homezx7Speaker />
      <HomeYX1Earphones />
    </div>
  );
}
