import React, { useEffect } from "react";
import SectionTitle from "../../ui/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router-dom";
import { getCategoryProducts } from "../../services/apiProducts";

const SimilarProducts = ({ currentProductCategory, currentProductId }) => {
  const { categoryProducts } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryProducts(currentProductCategory));
  }, []);
  return (
    <div className="mt-[76px]">
      <SectionTitle to={`/categories/${currentProductCategory}`}>
        Похожие продукты <span>Смотреть все →</span>
      </SectionTitle>
      <div className="flex overflow-x-scroll lg:grid grid-cols-4 xl:overflow-x-auto gap-4 py-5">
        {categoryProducts?.map((product, i) => {
          if (i >= 4) {
            return null;
          }
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <div className="flex overflow-x-scroll lg:grid grid-cols-4 xl:overflow-x-auto gap-4 py-5">
        {categoryProducts.length >= 8 &&
          categoryProducts?.map((product, i) => {
            if (i < 4 || i > 8 || product.id == currentProductId) {
              return null;
            } else {
              return <ProductCard key={product.id} product={product} />;
            }
          })}
      </div>
    </div>
  );
};

export default SimilarProducts;
