import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import SectionTitle from "../../ui/SectionTitle";

const NewProducts = () => {
  const { products } = useSelector((state) => state.products);
  const dateNow = Date.now();
  const tenDays = 86400000 * 10;
  return (
    <div className="mt-[76px]">
      <SectionTitle to={"new"}>
        Новинки на сайте <span>Смотреть все →</span>
      </SectionTitle>
      <div className="flex overflow-x-auto lg:grid grid-cols-4 gap-4 py-5">
        {products?.map((product, i) => {
          if (i >= 4 || dateNow - Date.parse(product.addedTime) > tenDays) {
            return null;
          } else {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </div>
      <div className="flex overflow-x-auto lg:grid grid-cols-4 gap-4 py-5">
        {products?.map((product, i) => {
          if (
            i <= 4 ||
            i > 8 ||
            dateNow - Date.parse(product.addedTime) > tenDays
          ) {
            return null;
          } else {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default NewProducts;
