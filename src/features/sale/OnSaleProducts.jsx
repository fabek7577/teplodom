import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../ui/SectionTitle";
import ProductCard from "../../components/ProductCard";

const OnSaleProducts = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="container my-[76px]">
      <SectionTitle>Товары по акции</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product, i) => {
          if (product.discountPercentage >= 15) {
            return (
              <ProductCard key={product.id} product={product} sale={true} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default OnSaleProducts;
