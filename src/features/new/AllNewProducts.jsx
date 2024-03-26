import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import SectionTitle from "../../ui/SectionTitle";

const AllNewProducts = () => {
  const { products } = useSelector((state) => state.products);
  const date = Math.floor(Date.now());
  const tenDays = 86400000 * 30;
  return (
    <div className="container my-8 lg:my-[76px]">
      <SectionTitle>Все новинки на сайте</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product) => {
          if (date - Date.parse(product.addedTime) > tenDays) {
            return null;
          } else return <ProductCard key={product.id} product={product} type={"all"} />;
        })}
      </div>
    </div>
  );
};

export default AllNewProducts;
