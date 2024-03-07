import React from "react";
import { useDispatch } from "react-redux";
import basket from "../assets/card/basket.svg";
import order from "../assets/card/order.svg";
import like from "../assets/card/like.svg";
import likeActive from "../assets/card/likeActive.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { addFavourite, delFavourite } from "../productsSlice";
import { addToBasket, delFromBasket } from "../features/navbar/basket/basketSlice";
import Button from "./Button";

const CardButton = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleBasket = () => {
    dispatch(addToBasket(product));
    if (pathname == "/basket") {
      navigate(`/products/${product.id}`);
    }
  };

  const handleFavourite = () => {
    if (product.favourite) {
      dispatch(delFavourite(product));
    } else dispatch(addFavourite(product));
  };

  const handleClick = () => {
    if (pathname == "/favourites") {
      handleFavourite();
    }
    if (pathname == "/basket") {
      dispatch(delFromBasket(product.id));
    }
  };
  return (
    <div className="flex justify-between mt-[18px]">
      <button
        onClick={handleBasket}
        className="btn flex items-center gap-3 xl:gap-[18px] py-2 px-3 lg:px-4 xl:px-7"
      >
        <img src={pathname == "/basket" ? order : basket} />
        <span>{pathname == "/basket" ? "Оформить" : "В корзину"}</span>
      </button>
      {pathname == "/favourites" || pathname == "/basket" ? (
        <Button onClick={handleClick} type={"urn"} />
      ) : (
        <button onClick={handleFavourite} className="btn p-2">
          <img src={product.favourite ? likeActive : like} />
        </button>
      )}
    </div>
  );
};

export default CardButton;
