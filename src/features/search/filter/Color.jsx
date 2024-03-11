import React, { useRef, useState } from "react";

const Color = ({ colors }) => {
  const { colorFil, setColor } = colors;
  const handleCheck = (e) => {
    setColor(e.target.value);
    if (colorFil == e.target.value) {
      e.target.checked = false;
      setColor("");
    }
  };
  return (
    <div className="mt-10">
      <h1 className="mb-3">Цвет</h1>
      <div className="flex items-center gap-4">
        <label
          className={`color-choose bg-black border border-transparent ring-black ${
            colorFil == "black" ? "ring-1" : ""
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
            colorFil == "white" ? "ring-1" : ""
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
            colorFil == "red" ? "ring-1" : ""
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
            colorFil == "orange" ? "ring-1" : ""
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
            colorFil == "green" ? "ring-1" : ""
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
            colorFil == "purple" ? "ring-1" : ""
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
