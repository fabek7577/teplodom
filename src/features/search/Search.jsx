import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchedCard from "./SearchedCard";
import SectionTitle from "../../ui/SectionTitle";
import Filter from "./filter/Filter";
import { useParams } from "react-router-dom";
import { setFilteredItems } from "./filter/filterSlice";
const Search = () => {
  const dispatch = useDispatch();
  const { searchedItem } = useParams();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(
      setFilteredItems(
        searchedItem
          ? products?.filter(
              ({ title }) =>
                title
                  .toLocaleLowerCase()
                  .indexOf(searchedItem.toLocaleLowerCase()) !== -1
            )
          : products
      )
    );
  }, []);
  const { filteredItems } = useSelector((state) => state.filter);
  return (
    <div className="container my-8 lg:my-[76px] flex items-start justify-between gap-5">
      <Filter />
      <div className="grow">
        <SectionTitle>Товары по поиску ({filteredItems.length})</SectionTitle>
        <div className="flex flex-col gap-8">
          {filteredItems?.map((product) => {
            return <SearchedCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
