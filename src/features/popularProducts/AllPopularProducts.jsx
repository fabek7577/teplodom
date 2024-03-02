import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";
import { getPopularProducts } from "./popularProductsSlice";

const AllPopularProducts = () => {
  const { popularProducts } = useSelector((state) => state.popularProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularProducts());
  }, []);
  return (
    <div className="container my-[76px]">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl lg:text-3xl">Все популярные товары</h1>
        <Link to={"popular"} className="text-sm text-[#0077B6] lg:text-lg">
          Все →
        </Link>
      </div>
      <div className="flex overflow-x-scroll xl:justify-between xl:overflow-x-auto xl:flex-wrap gap-4 py-5">
        {popularProducts?.map((product, i) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default AllPopularProducts;
