import React from "react";
import basketIcon from "../../../assets/navbar/basket.svg";
import basketActive from "../../../assets/navbar/basketActive.svg";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const BasketIcon = () => {
  const { pathname } = useLocation();
  const { basket } = useSelector((state) => state.basket);
  return (
    <Link to={"/basket"} className="nav-icon relative">
      {basket.length != 0 && (
        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-red-500 absolute top-0 right-0 flex items-center justify-center">
          <span className="text-xs text-white">{basket.length}</span>
        </div>
      )}
      <img
        src={pathname == "/basket" ? basketActive : basketIcon}
        alt="navbar basket"
        className="w-6 sm:w-7"
      />
    </Link>
  );
};

export default BasketIcon;
