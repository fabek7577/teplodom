import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";
import { getPopularProducts } from "./popularProductsSlice";
import SectionTitle from "../../ui/SectionTitle";

const PopularProducts = () => {
  const { popularProducts } = useSelector((state) => state.popularProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularProducts());
  }, []);
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
