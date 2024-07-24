import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

export default function HeaderCategory({ category }: { category: string }) {
  return (
    <div className="py-[32px] bg-[#000]">
      <h1 className="  text-[28px] text-[#fff] text-center font-bold tracking-[2px]">
        {category}
      </h1>
    </div>
  );
}
