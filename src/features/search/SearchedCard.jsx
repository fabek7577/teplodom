import React from "react";
import basket from "../../assets/card/basket.svg";
import like from "../../assets/card/like.svg";
import likeActive from "../../assets/card/likeActive.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../navbar/basket/basketSlice";
import { addFavourite } from "../../productsSlice";
const SearchedCard = ({ product }) => {
  const dispatch = useDispatch();
  const price = product.price.toLocaleString();

  const handleBasket = () => {
    dispatch(addToBasket(product));
  };

  const handleFavourite = () => {
    dispatch(addFavourite(product));
  };
  return (
    <div className="bg-white p-[15px] rounded-2xl flex gap-5 md:gap-8">
      <div className="flex justify-center items-center rounded-2xl border min-w-[130px] max-w-[130px] lg:min-w-[170px] lg:max-w-[170px] h-[130px] lg:h-[170px]">
        <img src={product.image} className="w-full max-h-full object-contain" />
      </div>
      <div className="p-2 sm:py-[15px] flex justify-between grow gap-2">
        <div className="flex flex-col justify-between">
          <Link
            to={`/products/${product.id}`}
            className="sm:text-lg lg:text-xl hover:underline"
          >
            {product.title}
          </Link>
          <p className="font-bold text-lg sm:text-xl lg:text-2xl">
            {price} сум
          </p>
        </div>
        <div className="flex flex-col justify-between min-w-fit">
          <button onClick={handleFavourite} className="bg-yellow p-2 lg:p-4 rounded-md btn">
            <img src={product.favourite ? likeActive : like} />
          </button>
          <button onClick={handleBasket} className="bg-yellow p-2 lg:p-4 rounded-md btn">
            <img src={basket} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchedCard;
