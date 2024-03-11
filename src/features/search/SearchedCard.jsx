import React from "react";
import basket from "../../assets/card/basket.svg";
import like from "../../assets/card/like.svg";
const SearchedCard = ({ product }) => {
  const price = product.price.toLocaleString();
  return (
    <div className="bg-white p-[15px] rounded-2xl flex gap-10">
      <div className="flex justify-center items-center rounded-2xl border min-w-[170px] max-w-[170px] h-[170px]">
        <img src={product.image} className="w-full max-h-full object-contain" />
      </div>
      <div className="py-[15px] flex justify-between grow gap-2">
        <div className="flex flex-col justify-between">
          <h1 className="text-xl">{product.title}</h1>
          <p className="font-bold text-2xl">{price} сум</p>
        </div>
        <div className="flex flex-col justify-between min-w-fit">
          <button className="bg-yellow p-4 rounded-md">
            <img src={like} />
          </button>
          <button className="bg-yellow p-4 rounded-md">
            <img src={basket} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchedCard;
