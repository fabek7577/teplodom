import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "./categorySlice";
import { Link } from "react-router-dom";
import SectionTitle from "../../ui/SectionTitle";

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
            return (
              <div
                key={category.id}
                className="min-w-[140px] h-[170px] lg:w-[170px] lg:h-[200px] flex flex-col bg-white rounded-xl p-3 cursor-pointer"
              >
                <div className="flex flex-1 items-center justify-center w-full h-full">
                  <img src={category.image} className="max-w-[110px]" />
                </div>
                <p className="text-center line-clamp-2">{category.name}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Categories;
