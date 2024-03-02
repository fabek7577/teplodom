import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "./categorySlice";
import SectionTitle from "../../ui/SectionTitle";

const AllCategories = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div className="container my-[76px]">
      <SectionTitle>Все категории</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {categories?.map((category) => {
          return (
            <div key={category.id} className="bg-white rounded-xl h-[210px] sm:h-[255px] lg:h-[265px] p-1 flex flex-col justify-evenly cursor-pointer">
              <div className="w-full h-[140px] md:h-[180px] lg:h-[200px] flex items-center justify-center">
                <img src={category.image} className="w-full max-h-full object-contain" />
              </div>
              <p className="text-center line-clamp-2">{category.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCategories;
