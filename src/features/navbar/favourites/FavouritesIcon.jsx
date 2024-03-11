import React, { useEffect, useState } from "react";
import like from "../../../assets/navbar/like.svg";
import likeActive from "../../../assets/navbar/likeActive.svg";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const FavouritesIcon = () => {
  const { pathname } = useLocation();
  const { products } = useSelector((state) => state.products);
  const [likes, setLikes] = useState([]);
  useEffect(() => {
    setLikes(products?.filter((item) => item.favourite));
  }, [products]);
  return (
    <Link to={"/favourites"} className="nav-icon relative">
      {likes.length != 0 && (
        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-red-500 absolute top-0 right-0 flex items-center justify-center">
          <span className="text-xs text-white">{likes.length}</span>
        </div>
      )}
      <img
        src={pathname == "/favourites" ? likeActive : like}
        alt="navbar likes"
        className="w-6 sm:w-7"
      />
    </Link>
  );
};

export default FavouritesIcon;
