import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "./filterSlice";

const Cost = () => {
  const { price } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const min = useRef();
  const max = useRef();
  const handleChange = () => {
    dispatch(setPrice({ min: +min.current.value, max: +max.current.value }));
  };
  useEffect(() => {
    if (price.min == 0 && price.max == 0) {
      min.current.value = "";
      max.current.value = "";
    }
  }, [price]);
  return (
    <div className="mt-7">
      <span className="text-xs">Цена</span>
      <div className="grid grid-cols-2 bg-[#FAFAFA] rounded-lg overflow-hidden divide-x divide-black/40">
        <input
          ref={min}
          type="number"
          className="bg-[#FAFAFA] py-2 px-5 placeholder:text-gray-900/60 outline-none"
          placeholder="От"
          onChange={handleChange}
        />
        <input
          ref={max}
          type="number"
          className="bg-[#FAFAFA] py-2 px-5 placeholder:text-gray-900/60 outline-none"
          placeholder="До"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Cost;
