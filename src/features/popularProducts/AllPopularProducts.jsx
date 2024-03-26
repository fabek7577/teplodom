import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import SectionTitle from "../../ui/SectionTitle";

const AllPopularProducts = () => {
  const { products } = useSelector((state) => state.products);
  const popularProducts = products?.filter((item) => item.rating >= 4.5);
  return (
    <div className="container my-8 lg:my-[76px]">
      <SectionTitle>Все популярные товары</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularProducts?.map((product, i) => {
          return <ProductCard key={product.id} product={product} type={"all"} />;
        })}
      </div>
    </div>
  );
};

export default AllPopularProducts;
