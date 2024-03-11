import React from "react";

const FormSelect = ({ selectors, title, select, setSelect }) => {
  const handleChange = (e) => {
    setSelect(e.target.selectedOptions[0].value);
  };
  return (
    <form className="max-w-sm mx-auto">
      <label className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
        {title}
      </label>
      <select
        onChange={handleChange}
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
