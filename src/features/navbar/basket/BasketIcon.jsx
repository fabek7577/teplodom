import React from "react";
import basket from "../../../assets/navbar/basket.svg";
import basketActive from "../../../assets/navbar/basketActive.svg";
import { Link, useLocation } from "react-router-dom";

const BasketIcon = () => {
  const { pathname } = useLocation();
  return (
    <Link to={"/basket"} className="nav-icon">
      <img
        src={pathname == "/basket" ? basketActive : basket}
        alt="navbar basket"
        className="w-6 sm:w-7"
      />
    </Link>
  );
};

export default BasketIcon;
