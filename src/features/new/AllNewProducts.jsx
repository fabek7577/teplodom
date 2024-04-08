import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../ui/SectionTitle";
import PagenatiedItems from "../../components/PagenatiedItems";

const AllNewProducts = () => {
  const { products } = useSelector((state) => state.products);
  const date = Math.floor(Date.now());
  const tenDays = 86400000 * 30; // 30 teng bolishi kere 10 alooooo
  const newProducts = products.filter(
    (item) => !(date - Date.parse(item.addedTime) > tenDays)
  );
  return (
    <div className="container my-8 lg:my-[76px]">
      <SectionTitle>Все новинки на сайте</SectionTitle>
      <PagenatiedItems
        data={newProducts}
        cardType={{
          type: "all",
        }}
        className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"}
      />
    </div>
  );
};

export default AllNewProducts;
