import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../../ui/SectionTitle";
import CategoryCard from "./CategoryCard";
import { getCategories } from "../../services/apiProducts";

const AllCategories = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div className="container my-10 sm:my-[76px]">
      <SectionTitle>Все категории</SectionTitle>
      <div className="grid grid-cols-2 sm:!grid-cols-3 md:!grid-cols-4 gap-y-4 gap-x-3 lg:gap-x-8 xs:gap-y-8">
        {categories?.map((category) => {
          return (
            <CategoryCard key={category.id} category={category} type={"big"} />
          );
        })}
      </div>
    </div>
  );
};

export default AllCategories;
