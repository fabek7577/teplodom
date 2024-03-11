import React from "react";
import saleImg from "../assets/card/sale.svg";
import { Link, useLocation } from "react-router-dom";
import CardButton from "../ui/CardButton";
const ProductCard = ({ product, sale }) => {
  const { pathname } = useLocation();
  const discount = Math.floor(
    product.price * (product.discountPercentage / 100)
  );
  const price = product.price;

  return (
    <div
      className={`productCard ${pathname == "/sale" ? "xl:!h-[420px]" : ""}`}
    >
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
        className="flex-1 mt-4 md:mt-[18px] line-clamp-2 xl:leading-[18px] text-sm xl:text-md hover:underline"
      >
        {product.title}
      </Link>
      {/* PRICE */}
      <div className="">
        {sale && (
          <p className="text-sm xl:text-md leading-[5px] text-red-500 line-through">
            {price.toLocaleString()} сум
          </p>
        )}
        <p className="font-bold xl:text-[19px]">
          {sale ? (price - discount).toLocaleString() : price.toLocaleString()}{" "}
          сум
        </p>
      </div>

      <CardButton product={product} />
    </div>
  );
};

export default ProductCard;
