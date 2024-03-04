import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { getPopularProducts } from "./popularProductsSlice";
import SectionTitle from "../../ui/SectionTitle";

const AllPopularProducts = () => {
  const { popularProducts } = useSelector((state) => state.popularProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularProducts());
  }, []);
  return (
    <div className="container my-[76px]">
      <SectionTitle>Все популярные товары</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularProducts?.map((product, i) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default AllPopularProducts;
