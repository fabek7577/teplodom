import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "./filterSlice";

const Color = () => {
  const dispatch = useDispatch();
  const { color } = useSelector((state) => state.filter);
  const handleCheck = (e) => {
    dispatch(setColor(e.target.value));
    if (color == e.target.value) {
      e.target.checked = false;
      dispatch(setColor(""));
    }
  };
  return (
    <div className="mt-10">
      <h1 className="mb-3">Цвет</h1>
      <div className="flex items-center gap-4">
        <label
          className={`color-choose bg-black border border-transparent ring-black ${
            color == "black" ? "ring-1" : ""
          }`}
        >
          <input
            onClick={handleCheck}
            type="radio"
            name="color"
            value="black"
            className="hidden"
          />
        </label>

        <label
          className={`color-choose bg-white border border-gray-200 ring-gray-200 ${
            color == "white" ? "ring-1" : ""
          }`}
        >
          <input
            onClick={handleCheck}
            type="radio"
            name="color"
            value="white"
            className="hidden"
          />
        </label>

        <label
          className={`color-choose bg-red-500 border border-transparent ring-red-500 ${
            color == "red" ? "ring-1" : ""
          }`}
        >
          <input
            onClick={handleCheck}
            type="radio"
            name="color"
            value="red"
            className="hidden"
          />
        </label>

        <label
          className={`color-choose bg-orange-500 border border-transparent ring-orange-500 ${
            color == "orange" ? "ring-1" : ""
          }`}
        >
          <input
            onClick={handleCheck}
            type="radio"
            name="color"
            value="orange"
            className="hidden"
          />
        </label>

        <label
          className={`color-choose bg-green-500 border border-transparent ring-green-500 ${
            color == "green" ? "ring-1" : ""
          }`}
        >
          <input
            onClick={handleCheck}
            type="radio"
            name="color"
            value="green"
            className="hidden"
          />
        </label>

        <label
          className={`color-choose bg-[#CF00F0] border border-transparent ring-[#CF00F0] ${
            color == "purple" ? "ring-1" : ""
          }`}
        >
          <input
            onClick={handleCheck}
            type="radio"
            name="color"
            value="purple"
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default Color;
