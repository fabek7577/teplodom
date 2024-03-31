import React from "react";
import clearIcon from "../../../assets/filter/clear.svg";
import searchIcon from "../../../assets/filter/search.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, setFilteredItems } from "./filterSlice";
const FilterButtons = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // filter and clear functions
  const handleClear = () => {
    dispatch(clearFilters(products));
  };
  const handleSearch = () => {
    pathname !== "search/" && navigate("/search/");
    dispatch(setFilteredItems(products));
  };
  return (
    <div className="flex items-center justify-between mt-10 text-lg gap-5">
      <button
        onClick={handleClear}
        className="py-[14px] px-4 bg-[#F7F7F7] flex items-center justify-center gap-3 rounded-xl w-[150px]"
      >
        <img src={clearIcon} />
        <span>Очистить</span>
      </button>
      <button
        onClick={handleSearch}
        className="py-[14px] px-4 bg-yellow flex items-center justify-center gap-3 rounded-xl w-[150px]"
      >
        <img src={searchIcon} />
        <span className="text-white">Найти</span>
      </button>
    </div>
  );
};

export default FilterButtons;
