import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchedCard from "./SearchedCard";
import SectionTitle from "../../ui/SectionTitle";
import Filter from "./filter/Filter";
import { useParams } from "react-router-dom";
const Search = () => {
  const { searchedItem } = useParams();
  const { products } = useSelector((state) => state.products);
  let [filteredItems, setFilteredItems] = useState(
    searchedItem
      ? products?.filter(
          ({ title }) =>
            title
              .toLocaleLowerCase()
              .indexOf(searchedItem.toLocaleLowerCase()) !== -1
        )
      : products
  );

  // filters
  const [categoryFil, setCategory] = useState("");
  const [priceFil, setPrice] = useState({
    min: 0,
    max: 0,
  });
  const [colorFil, setColor] = useState("");
  const [brandFil, setBrand] = useState("");

  // filter and clear functions
  const handleClear = () => {
    setCategory("");
    setPrice({
      max: 0,
      min: 0,
    });
    setColor("");
    setBrand("");
    setFilteredItems(products);
  };
  const handleSearch = () => {
    // category || color || brand
    //   ? setFilteredItems(
    //       products?.filter(
    //         (product) =>
    //           product.category === category ||
    //           product.brand === brand ||
    //           product.color === color
    //       )
    //     )
    //   : "";
    // category && brand
    //   ? setFilteredItems(
    //       products?.filter((product) => product.category == category && product.brand == brand)
    //     )
    //   : "";
    // category && brand && color
    //   ? setFilteredItems(
    //       products?.filter(
    //         (product) =>
    //           product.category == category &&
    //           product.brand == brand &&
    //           product.color == color
    //       )
    //     )
    //   : "";
    setFilteredItems((prev) =>
      prev?.filter(
        ({ category, color, brand, price }) =>
          (category == categoryFil || categoryFil == "") &&
          (color == colorFil || colorFil == "") &&
          (brand == brandFil || brandFil == "") &&
          price >= priceFil.min &&
          (price <= priceFil.max || priceFil.max == 0)
      )
    );
  };
  return (
    <div className="container my-[76px] flex items-start justify-between gap-5">
      <Filter
        filters={{ setCategory, setPrice, setBrand }}
        colors={{ colorFil, setColor }}
        handleSearch={handleSearch}
        handleClear={handleClear}
      />
      <div className="grow">
        <SectionTitle>Товары по поиску ({filteredItems.length})</SectionTitle>
        <div className="flex flex-col gap-8">
          {filteredItems?.slice(0, 10).map((product) => {
            return <SearchedCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
