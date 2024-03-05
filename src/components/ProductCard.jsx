import React from "react";
import basket from "../assets/card/basket.svg";
import like from "../assets/card/like.svg";
import saleImg from "../assets/card/sale.svg";
import { Link } from "react-router-dom";
const ProductCard = ({ product, sale }) => {
  const discount = Math.floor(
    product.price * (product.discountPercentage / 100) * 1000
  );
  const price = product.price * 1000;
  return (
    <div className="productCard">
      {sale && (
        <img
          src={saleImg}
          className="absolute -top-[6px] -left-[6px] scale-110"
        />
      )}
      <div className="flex items-center justify-center w-full h-[170px] xl:h-[200px]">
        <img src={product.image} className="w-full max-h-full object-contain" />
      </div>
      <Link
        to={`/products/${product.id}`}
        className="line-clamp-2 xl:line text-sm xl:text-md xl:h-[40px] hover:underline"
      >
        {product.title}
      </Link>
      {/* PRICE */}
      <div className="">
        {sale && (
          <p className="text-red-500 line-through">
            {price.toLocaleString()} сум
          </p>
        )}
        <p className="font-bold xl:text-[19px]">
          {sale ? (price - discount).toLocaleString() : price.toLocaleString()}{" "}
          сум
        </p>
      </div>

      <div className="flex justify-between">
        <button className="btn flex items-center gap-3 lg:px-5">
          <img src={basket} style={{color: "red"}} />
          <span>В корзину</span>
        </button>
        <button className="btn">
          <img src={like} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
