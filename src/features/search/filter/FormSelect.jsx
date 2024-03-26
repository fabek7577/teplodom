import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBrand, setCategory } from "./filterSlice";

const FormSelect = ({ selectors, title, select, type }) => {
  const { category, brand } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    type === "category"
      ? dispatch(setCategory(e.target.selectedOptions[0].value))
      : type === "brand"
      ? dispatch(setBrand(e.target.selectedOptions[0].value))
      : "";
  };
  return (
    <form className="max-w-sm mx-auto">
      <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
        {title}
      </label>
      <select
        onChange={handleChange}
        value={type == "category" ? category : brand}
        className="bg-[#FAFAFA] text-gray-900/60 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
      >
        <option value="">Выбрать</option>
        {selectors?.map((selector) => {
          return (
            <option key={selector.id} value={selector[select]}>
              {selector[select]}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default FormSelect;
