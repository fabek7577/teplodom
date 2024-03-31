import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../../ui/SectionTitle";
import ProductCard from "../../../components/ProductCard";
import PagenatiedItems from "../../../components/PagenatiedItems";

const FavouritesProductsList = () => {
  const { products } = useSelector((state) => state.products);
  const favouriteProducts = products.filter((item) => item.favourite);
  return (
    <div className="container my-8 lg:my-[76px]">
      <SectionTitle>Избранное</SectionTitle>
      <PagenatiedItems
        data={favouriteProducts}
        cardType={{
          type: "all",
        }}
        className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"}
      />
    </div>
  );
};

export default FavouritesProductsList;
