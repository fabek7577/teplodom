import React, { useEffect, useState } from "react";
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
  const [cardCounts, setCardCounts] = useState(6);
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
  useEffect(()=>{
    setCardCounts(6)
  },[filteredItems])
  
  return (
    <div className="container my-8 lg:my-[76px]">
      <div className="flex items-start justify-between gap-5">
        <Filter />
        <div className="grow">
          <SectionTitle>Товары по поиску ({filteredItems.length})</SectionTitle>
          <div className="flex flex-col gap-8">
            {filteredItems?.slice(0, cardCounts).map((product) => {
              return <SearchedCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex mt-[90px]">
        <button
          onClick={() => setCardCounts((prev) => (prev += 6))}
          className={`${
            filteredItems.length <= 6
              ? "hidden"
              : cardCounts >= filteredItems.length
              ? "hidden"
              : ""
          } btn text-[22px] py-[10px] px-[26px] mx-auto`}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default Search;
