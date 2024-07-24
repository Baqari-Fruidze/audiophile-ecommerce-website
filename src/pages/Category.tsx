import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import HeaderCategory from "../components/HeaderCategory";

export default function Category() {
  const { category } = useParams();
  const dataToMap = data.filter((el) => el.category === category);

  return (
    <div>
      <HeaderCategory category={category} />
    </div>
  );
}
