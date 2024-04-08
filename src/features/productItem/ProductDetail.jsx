import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getProduct } from "../../services/apiProducts";
import SimilarProducts from "./SimilarProducts";
import { useDispatch } from "react-redux";
import { addToBasket } from "../navbar/basket/basketSlice";
import { addFavourite } from "../../productsSlice";
import Order from "../order/Order";
import BasketIcon from "../../assets/productDetail/BasketIcon";
import LikeIcon from "../../assets/productDetail/LikeIcon";
import ClockIcon from "../../assets/productDetail/ClockIcon";
import PayIcon from "../../assets/productDetail/PayIcon";
import { setModal } from "../modal/modalSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(useLoaderData());
  const isOnSale = product.discountPercentage >= 15;
  const discount = Math.floor(
    product.price * (product.discountPercentage / 100)
  );
  const price = product.price;
  const [counter, setCounter] = useState(1);

  const handleBasket = () => {
    dispatch(addToBasket(product));
  };
  const handleFavourite = () => {
    dispatch(addFavourite(product));
    setProduct((prev) => (prev = { ...prev, favourite: true }));
  };

  return (
    <>
      <div className="container my-14">
        <div className="bg-white px-4 py-6 rounded-xl border lg:border-none">
          <div className="lg:flex items-center justify-between gap-8">
            <h1 className="font-bold text-3xl mb-14 lg:hidden">
              {product.title}
            </h1>
            <div className="flex justify-center items-center rounded-xl w-full lg:w-2/3 h-full xl:w-[464px] xl:h-[470px] py-2 lg:border">
              <img
                src={product.image}
                className="w-full md:max-w-[500px] max-h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center mt-14 lg:mt-0 lg:w-2/3">
              <h1 className="hidden lg:inline-block font-bold text-3xl xl:text-5xl mb-14">
                {product.title}
              </h1>
              <p className="text-xl xl:text-2xl line-clamp-6 w-full">
                {product.description}
              </p>
              <div className="flex items-center gap-4 mt-6">
                <p
                  className={`text-3xl xl:text-[40px] ${
                    isOnSale ? "text-red-500" : ""
                  }`}
                >
                  {isOnSale
                    ? (price - discount).toLocaleString()
                    : price.toLocaleString()}
                  сум
                </p>
                {isOnSale && (
                  <p className="text-lg xl:text-2xl line-through text-gray-600">
                    {price.toLocaleString()} сум
                  </p>
                )}
              </div>
              <div className="flex items-center gap-3 xs:gap-4 mt-8">
                <PayIcon onClick={() => dispatch(setModal("order"))} />
                <ClockIcon />
                <BasketIcon onClick={handleBasket} />
                <LikeIcon
                  onClick={handleFavourite}
                  isFavourite={product.favourite}
                />
                <div className="flex items-center border-2 rounded-xl md:rounded-lg divide-x-2">
                  <span
                    className="px-[11px] py-1 md:py-2 md:px-4 xl:py-[10px] xl:px-5 text-2xl xl:text-4xl cursor-pointer"
                    onClick={() =>
                      setCounter((prev) => (prev - 1 == 0 ? prev : prev - 1))
                    }
                  >
                    –
                  </span>
                  <span className="px-[11px] py-1 md:py-2 md:px-4 xl:py-[10px] xl:px-5 text-2xl xl:text-4xl ">
                    {counter}
                  </span>
                  <span
                    className="px-[11px] py-1 md:py-2 md:px-4 xl:py-[10px] xl:px-5 text-2xl xl:text-4xl cursor-pointer"
                    onClick={() => setCounter((prev) => prev + 1)}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SimilarProducts
          currentProductId={product.id}
          currentProductCategory={product.category}
        />
      </div>
    </>
  );
};

export async function loader({ params }) {
  const { productId } = params;
  const response = await getProduct(productId);
  return response;
}

export default ProductDetail;
