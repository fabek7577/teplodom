import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewProducts } from "./newProductsSlice";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";
import SectionTitle from "../../ui/SectionTitle";

const AllNewProducts = () => {
  const { newProducts } = useSelector((state) => state.newProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewProducts());
  }, []);
  return (
    <div className="container my-[76px]">
      <SectionTitle>Все новинки на сайте</SectionTitle>
      <div className="flex overflow-x-scroll xl:justify-between xl:overflow-x-auto gap-4 py-5">
        {newProducts?.map((product, i) => {
          if (i >= 5) {
            return null;
          } else {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </div>
      <div className="flex overflow-x-scroll xl:justify-between xl:overflow-x-auto gap-4 py-5">
        {newProducts?.map((product, i) => {
          if (i < 5) {
            return null;
          } else {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default AllNewProducts;
