import React, { useEffect } from "react";
import SectionTitle from "../../../ui/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { getBrands, getCategories } from "../../../services/apiProducts";
import FormSelect from "./FormSelect";
import Cost from "./Cost";
import Color from "./Color";
import FilterButtons from "./FilterButtons";

const Filter = ({ filters, colors, handleSearch, handleClear }) => {
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

  return (
    <div className="w-[360px] h-[670px] bg-white rounded-2xl p-5">
      <SectionTitle>Фильтр</SectionTitle>
      <FormSelect
        selectors={categories}
        title="Категория"
        select="title"
        setSelect={filters.setCategory}
      />
      <Cost setPrice={filters.setPrice} />
      <Color colors={colors} />
      <div className="mt-10">
        <FormSelect
          selectors={brands}
          title="Бренды товары"
          select="title"
          setSelect={filters.setBrand}
        />
      </div>
      <FilterButtons handleSearch={handleSearch} handleClear={handleClear} />
    </div>
  );
};

export default Filter;
