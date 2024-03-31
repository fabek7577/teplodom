import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SectionTitle from "../../ui/SectionTitle";
import ProductCard from "../../components/ProductCard";
import { getCategoryProducts } from "../../services/apiProducts";

const CategoryProducts = () => {
  const { category } = useParams();
  const { categoryProducts } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCategoryProducts(category));
  }, []);

  return (
    <div className="container my-8 lg:my-[76px]">
      <SectionTitle>Категория {category}</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoryProducts?.map((product) => {
          return <ProductCard key={product.id} product={product} type={"all"} />;
        })}
      </div>
    </div>
  );
};

export default CategoryProducts;
