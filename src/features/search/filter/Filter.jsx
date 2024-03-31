import React, { useEffect } from "react";
import SectionTitle from "../../../ui/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { getBrands, getCategories } from "../../../services/apiProducts";
import FormSelect from "./FormSelect";
import Cost from "./Cost";
import Color from "./Color";
import FilterButtons from "./FilterButtons";
import closeIcon from "../../../assets/modal/close.svg";
const Filter = ({ type, closer }) => {
  const { categories } = useSelector((state) => state.categories);
  const { brands } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories());
    }
    if (!brands.length) {
      dispatch(getBrands());
    }
  }, []);

  const baseClass =
    type == "modal"
      ? "relative max-w-[384px] lg:w-[360px] h-[670px] bg-white rounded-2xl p-5"
      : `hidden md:inline-block sticky top-10 left-0 w-[300px] lg:w-[360px] h-[670px] bg-white rounded-2xl p-5`;
  return (
    <div onClick={(e) => e.stopPropagation()} className={`${baseClass}`}>
      {type == "modal" && (
        <div
          onClick={() => closer(false)}
          className="border-2 border-black p-1 rounded-full w-[26px] lg:w-8 cursor-pointer absolute top-5 right-5"
        >
          <img src={closeIcon} className="scale-110" />
        </div>
      )}
      <div className="mb-8">
        <h1 className="text-xl xs:text-2xl lg:text-3xl font-semibold">
          Фильтр
        </h1>
      </div>
      <FormSelect
        selectors={categories}
        title="Категория"
        select="title"
        type="category"
      />
      <Cost />
      <Color />
      <div className="mt-10">
        <FormSelect
          selectors={brands}
          title="Бренды товары"
          select="title"
          type="brand"
        />
      </div>
      <FilterButtons />
    </div>
  );
};

export default Filter;
