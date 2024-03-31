import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../ui/SectionTitle";
import PagenatiedItems from "../../components/PagenatiedItems";

const OnSaleProducts = () => {
  const { products } = useSelector((state) => state.products);
  const productOnSale = products?.filter(
    (item) => item.discountPercentage >= 15
  )

  return (
    <div className="container my-8 lg:my-[76px]">
      <SectionTitle>Товары по акции</SectionTitle>
      <PagenatiedItems
        data={productOnSale}
        cardType={{
          sale: true,
          type: "all",
        }}
        className={
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-5"
        }
      />
    </div>
  );
};

export default OnSaleProducts;
