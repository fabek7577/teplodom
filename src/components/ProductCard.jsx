import React from "react";
import saleImg from "../assets/card/sale.svg";
import { Link, useLocation } from "react-router-dom";
import CardButton from "../ui/CardButton";
const ProductCard = ({ product, sale, type }) => {
  const { pathname } = useLocation();
  const discount = Math.floor(
    product.price * (product.discountPercentage / 100)
  );
  const price = product.price;

  const baseClass =
    "relative min-w-[230px] max-w-[230px] w-[188px] xs:w-[210px] sm:!w-[260px] md:!w-[240px] h-[330px] xl:min-w-[255px] xl:h-[400px] flex flex-col bg-white rounded-[15px] p-3 lg:px-3 xl:px-[15px] xl:pb-[28px] mx-auto";

  if (type == "all") {
    return (
      <div
        className={`${baseClass} !min-w-[188px] xs:max-w-[250px] xl:max-w-[255px] xl:!min-w-[255px] h-[314px] ${
          pathname == "/sale" ? "xl:!h-[420px]" : ""
        }`}
      >
        {/* is onSale */}
        {sale && (
          <img src={saleImg} className="absolute -top-[10px] -left-[10px] " />
        )}
        {/* Product IMG */}
        <div className="flex items-center justify-center w-full h-[170px] xl:h-[200px]">
          <img
            src={product.image}
            alt="Product card image"
            className="w-full max-h-full object-contain"
          />
        </div>
        {/* Product Title */}
        <Link
          to={`/products/${product.id}`}
          className="flex-1 mt-4 md:mt-[18px] hover:underline"
        >
          <span className="line-clamp-2 text-sm xl:text-base leading-[17px] xl:leading-[19px]">
            {product.title}
          </span>
        </Link>
        {/* PRICE */}
        <div className="">
          {sale && (
            <p className="text-sm xl:text-md leading-none text-red-500 line-through">
              {price.toLocaleString()} сум
            </p>
          )}
          <p className="font-bold xl:text-[19px] leading-[19px] xl:leading-[23px]">
            {sale
              ? (price - discount).toLocaleString()
              : price.toLocaleString()}
            сум
          </p>
        </div>
        <CardButton product={product} type="all" />
      </div>
    );
  }

  return (
    <div
      className={`productCard ${pathname == "/sale" ? "xl:!h-[420px]" : ""}`}
    >
      {/* is onSale */}
      {sale && (
        <img
          src={saleImg}
          className="absolute -top-[6px] -left-[6px] scale-110"
        />
      )}
      {/* Product IMG */}
      <div className="flex items-center justify-center w-full h-[170px] xl:h-[200px]">
        <img
          src={product.image}
          alt="Product card image"
          className="w-full max-h-full object-contain"
        />
      </div>
      {/* Product Title */}
      <Link
        to={`/products/${product.id}`}
        className="flex-1 leading-[17px] xl:leading-[19px] mt-4 md:mt-[18px] hover:underline"
      >
        <span className="line-clamp-2 text-sm xl:text-base">
          {product.title}
        </span>
      </Link>
      {/* PRICE */}
      <div className="">
        {sale && (
          <p className="text-sm xl:text-md leading-[17px] text-red-500 line-through">
            {price.toLocaleString()} сум
          </p>
        )}
        <p className="font-bold xl:text-[19px] leading-[19px] xl:leading-[23px]">
          {sale ? (price - discount).toLocaleString() : price.toLocaleString()}
          сум
        </p>
      </div>

      <CardButton product={product} />
    </div>
  );
};

export default ProductCard;
