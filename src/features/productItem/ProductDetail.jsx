import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getProduct } from "../../services/apiProducts";
import payIcon from "../../assets/productDetail/pay.svg";
import clock from "../../assets/productDetail/clock.svg";
import basket from "../../assets/productDetail/basket.svg";
import like from "../../assets/productDetail/like.svg";
import payIconWHITE from "../../assets/productDetail/payWHITE.svg";
import clockWHITE from "../../assets/productDetail/clockWHITE.svg";
import basketWHITE from "../../assets/productDetail/basketWHITE.svg";
import likeWHITE from "../../assets/productDetail/likeWHITE.svg";
import SimilarProducts from "./SimilarProducts";
const ProductDetail = () => {
  const product = useLoaderData();
  const isOnSale = product.discountPercentage >= 15;
  const discount = Math.floor(
    product.price * (product.discountPercentage / 100) * 1000
  );
  const price = product.price * 1000;

  const [counter, setCounter] = useState(1);

  return (
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
          <div className="flex flex-col justify-center mt-14 lg:mt-0 w-2/3">
            <h1 className="hidden lg:inline-block font-bold text-3xl xl:text-5xl mb-14">
              {product.title}
            </h1>
            <p className="text-xl xl:text-2xl">{product.description}</p>
            <div className="flex items-center gap-4 mt-6">
              <p
                className={`text-3xl xl:text-[40px] ${
                  isOnSale ? "text-red-500" : ""
                }`}
              >
                {isOnSale
                  ? (price - discount).toLocaleString()
                  : price.toLocaleString()}{" "}
                сум
              </p>
              {isOnSale && (
                <p className="text-lg xl:text-2xl line-through text-gray-600">
                  {price.toLocaleString()} сум
                </p>
              )}
            </div>
            <div className="flex items-center gap-4 mt-8">
              <img
                src={payIcon}
                onMouseEnter={(e) => (e.target.src = payIconWHITE)}
                onMouseLeave={(e) => (e.target.src = payIcon)}
                className="productDetail-icon"
              />
              <img
                src={clock}
                onMouseEnter={(e) => (e.target.src = clockWHITE)}
                onMouseLeave={(e) => (e.target.src = clock)}
                className="productDetail-icon"
              />
              <img
                src={basket}
                onMouseEnter={(e) => (e.target.src = basketWHITE)}
                onMouseLeave={(e) => (e.target.src = basket)}
                className="productDetail-icon"
              />
              <img
                src={like}
                onMouseEnter={(e) => (e.target.src = likeWHITE)}
                onMouseLeave={(e) => (e.target.src = like)}
                className="productDetail-icon"
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
  );
};

export async function loader({ params }) {
  const { productId } = params;
  const response = await getProduct(productId);
  return response;
}

export default ProductDetail;
