import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../../ui/SectionTitle";
import ProductCard from "../../../components/ProductCard";

const FavouritesProductsList = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="container my-[76px]">
      <SectionTitle>Избранное</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product, i) => {
          if (product.favourite) {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default FavouritesProductsList;
