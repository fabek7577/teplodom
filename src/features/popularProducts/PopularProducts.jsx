import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import SectionTitle from "../../ui/SectionTitle";

const PopularProducts = () => {
  const { products } = useSelector((state) => state.products);
  const popularProducts = products?.filter((item) => item.rating >= 4.5);
  return (
    <div className="mt-[76px]">
      <SectionTitle to={"popular"}>
        Популярные товары <span>Все →</span>
      </SectionTitle>
      
      <div className="flex overflow-x-scroll lg:grid grid-cols-4 xl:overflow-x-auto gap-4 py-5">
        {popularProducts?.map((product, i) => {
          if (i >= 4) {
            return null;
          } else {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </div>

      <div className="flex overflow-x-scroll lg:grid grid-cols-4 xl:overflow-x-auto gap-4 py-5">
        {popularProducts?.map((product, i) => {
          if (i <= 4 || i > 8) {
            return null;
          } else {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default PopularProducts;
