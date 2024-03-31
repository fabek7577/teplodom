import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CategoryCard = ({ category, type }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/categories/${category.title}`);
  };
  if (type) {
    return (
      <div
        onClick={handleClick}
        className="bg-white rounded-xl w-[270px] mx-auto xs:w-full h-[250px] xs:h-[210px] sm:!h-[255px] lg:!h-[265px] p-1 flex flex-col justify-evenly cursor-pointer"
      >
        <div className="w-full h-[140px] md:h-[180px] lg:h-[200px] flex items-center justify-center">
          <img
            src={category.image}
            className="w-full max-h-full object-contain"
          />
        </div>
        <p className="text-center capitalize h-[48px] flex items-center justify-center"><span className="line-clamp-2">{category.title}</span></p>
      </div>
    );
  }
  return (
    <div
      onClick={handleClick}
      className="min-w-[140px] h-[170px] md:w-[170px] md:h-[200px] flex flex-col bg-white rounded-xl p-3 cursor-pointer"
    >
      <div className="flex flex-1 items-center justify-center w-full h-full">
        <img src={category.image} className="max-w-[110px]" />
      </div>
      <p className="text-center capitalize min-h-[48px] flex items-center justify-center"><span className="line-clamp-2 w-full">{category.title}</span></p>
    </div>
  );
};

export default CategoryCard;
