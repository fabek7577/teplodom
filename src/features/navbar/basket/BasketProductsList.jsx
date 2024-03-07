import React from "react";
import SectionTitle from "../../../ui/SectionTitle";
import ProductCard from "../../../components/ProductCard";
import { useSelector } from "react-redux";

const BasketProductsList = () => {
  const { basket } = useSelector((state) => state.basket);
  return (
    <div className="container my-[76px]">
      <SectionTitle>Корзинка</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {basket?.map((product, i) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default BasketProductsList;
