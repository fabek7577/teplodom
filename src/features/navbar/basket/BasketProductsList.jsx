import React from "react";
import SectionTitle from "../../../ui/SectionTitle";
import ProductCard from "../../../components/ProductCard";
import { useSelector } from "react-redux";
import PagenatiedItems from "../../../components/PagenatiedItems";

const BasketProductsList = () => {
  const { basket } = useSelector((state) => state.basket);
  return (
    <div className="container my-8 lg:my-[76px]">
      <SectionTitle>Корзинка</SectionTitle>
      <PagenatiedItems
        data={basket}
        cardType={{
          type: "all",
        }}
        className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"}
      />
    </div>
  );
};

export default BasketProductsList;
