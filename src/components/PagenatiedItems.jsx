import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Pagination } from "@mui/material";

const PagenatiedItems = ({ data, cardType, className }) => {
  const [end, setEnd] = useState(1 * 16);
  const start = end - 16;
  const handleChange = (e, value) => {
    setEnd(value * 16);
  };
  return (
    <>
      <div className={className}>
        {data.slice(start, end).map((product, i) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              sale={cardType.sale}
              type={cardType.type}
            />
          );
        })}
      </div>
      <div
        className={`${
          data.length <= 16 && "hidden"
        } flex items-center justify-center mt-[62px]`}
      >
        <Pagination
          count={Math.ceil(data.length / 16)}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default PagenatiedItems;
