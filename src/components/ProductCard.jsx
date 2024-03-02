import React from "react";
import basket from "../assets/card/basket.svg";
import like from "../assets/card/like.svg";
const ProductCard = ({ product }) => {
  return (
    <div className="min-w-[210px] h-[330px] xl:w-[300px] xl:h-[410px] flex flex-col justify-between gap-2 bg-white rounded-xl p-3">
      <div className="flex items-center justify-center w-full h-[170px] xl:h-[200px]">
        <img src={product.image} className="w-full max-h-full object-contain" />
      </div>
      <h1 className="line-clamp-2 xl:line text-sm xl:text-md xl:h-[40px]">{product.name}</h1>

      <p className="font-bold xl:text-[19px]">{product.price} сум</p>
      <div className="flex justify-between">
        <button className="btn flex items-center gap-3 xl:px-5">
          <img src={basket} alt="" />
          <span>В корзину</span>
        </button>
        <button className="btn">
          <img src={like} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
