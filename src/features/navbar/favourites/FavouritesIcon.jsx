import React from "react";
import like from "../../../assets/navbar/like.svg";
import likeActive from "../../../assets/navbar/likeActive.svg";
import { Link, useLocation } from "react-router-dom";

const FavouritesIcon = () => {
  const { pathname } = useLocation();
  return (
    <Link to={"/favourites"} className="nav-icon">
      <img
        src={pathname == "/favourites" ? likeActive : like}
        alt="navbar likes"
        className="w-6 sm:w-7"
      />
    </Link>
  );
};

export default FavouritesIcon;
