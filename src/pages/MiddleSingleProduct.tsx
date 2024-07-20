import React from "react";
import Homezx9Speaker from "../components/Homezx9Speaker";
import Homezx7Speaker from "../components/Homezx7Speaker";

export default function MiddleSingleProduct() {
  return (
    <div
      className={`px-[24px] flex flex-col gap-[24px] items-center mb-[50px]`}
    >
      <Homezx9Speaker />
      <Homezx7Speaker />
    </div>
  );
}
