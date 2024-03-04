import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../../ui/SectionTitle";
import CategoryCard from "./CategoryCard";
import { getCategories } from "../../services/apiProducts";

const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div className="mt-[76px]">
      <SectionTitle to={"categories"}>
        Категории <span>Все категории →</span>
      </SectionTitle>
      <div className="flex overflow-x-scroll xl:justify-between xl:overflow-x-auto gap-4">
        {categories?.map((category, i) => {
          if (i > 6) {
            return null;
          } else {
            return <CategoryCard key={category.id} category={category} />;
          }
        })}
      </div>
    </div>
  );
};

export default Categories;
