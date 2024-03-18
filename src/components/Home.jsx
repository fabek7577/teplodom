import React, { useState } from "react";
import { CarouselCustomNavigation } from "./Carousel";
import Categories from "../features/categories/Categories";
import NewProducts from "../features/new/NewProducts";
import PopularProducts from "../features/popularProducts/PopularProducts";
import OurAdvantages from "./OurAdvantages";
import OurTeam from "./OurTeam";
import AboutUs from "./AboutUs";
const Home = () => {
  return (
    <div className="container mb-10">
      <div className="h-[170px] md:h-[230px] lg:h-[300px] mt-5 lg:mt-14">
        <CarouselCustomNavigation />
      </div>
      <Categories />
      <NewProducts />
      <PopularProducts />
      <OurAdvantages />
      <OurTeam />
      <AboutUs />
    </div>
  );
};

export default Home;
