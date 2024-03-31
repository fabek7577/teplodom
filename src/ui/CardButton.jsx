import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import basket from "../assets/card/basket.svg";
import orderIcon from "../assets/card/order.svg";
import like from "../assets/card/like.svg";
import likeActive from "../assets/card/likeActive.svg";
import { useLocation } from "react-router-dom";
import { addFavourite, delFavourite } from "../productsSlice";
import {
  addToBasket,
  delFromBasket,
} from "../features/navbar/basket/basketSlice";
import Button from "./Button";
import Authentication from "../features/account/Authentication";
import Order from "../features/order/Order";

const CardButton = ({ product, type }) => {
  const { user } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(false);
  const [order, setOrder] = useState(false);
  const { pathname } = useLocation();

  const handleBasket = () => {
    if (pathname == "/basket") {
      if (user) {
        setOrder(true);
      } else setAuth(true);
    } else {
      dispatch(addToBasket(product));
    }
  };

  const handleFavourite = () => {
    dispatch(addFavourite(product));
  };

  const handleClick = () => {
    if (pathname == "/favourites") {
      dispatch(delFavourite(product));
    }
    if (pathname == "/basket") {
      dispatch(delFromBasket(product.id));
    }
  };

  if (type == "all") {
    return (
      <>
        {order && <Order closer={setOrder} title={product.title} />}
        {auth && <Authentication closer={setAuth} />}
        <div className="flex justify-between mt-[18px]">
          <button
            onClick={handleBasket}
            className="btn flex items-center gap-[7px] xl:gap-[18px] py-2 px-[10px] xs:px-[13px] sm:!px-6 xl:!px-7"
          >
            <img
              src={pathname == "/basket" ? orderIcon : basket}
              className="w-[21px] xs:w-fit"
            />
            <span className="text-[15px] xs:text-base">{pathname == "/basket" ? "Оформить" : "В корзину"}</span>
          </button>

          {pathname == "/favourites" || pathname == "/basket" ? (
            <Button onClick={handleClick} type={"urn"} />
          ) : (
            <button onClick={handleFavourite} className="btn py-[7px] px-[9px]">
              <img
                src={product.favourite ? likeActive : like}
                className="w-5 xs:w-fit"
              />
            </button>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      {order && <Order closer={setOrder} title={product.title} />}
      {auth && <Authentication closer={setAuth} />}
      <div className="flex justify-between mt-[18px]">
        <button
          onClick={handleBasket}
          className="btn flex items-center gap-3 xl:gap-[18px] py-2 px-3 xs:px-[13px] sm:!px-5 xl:!px-7"
        >
          <img src={pathname == "/basket" ? orderIcon : basket} />
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
    </>
  );
};

export default CardButton;
