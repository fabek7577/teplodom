import React, { useState } from "react";
import logo from "../../assets/navbar/logo.svg";
import filters from "../../assets/navbar/filters.svg";
import sidebarIcon from "../../assets/navbar/sidebar.svg";
import { Link, NavLink } from "react-router-dom";
import BasketIcon from "./basket/BasketIcon";
import FavouritesIcon from "./favourites/FavouritesIcon";
import Form from "./Form";
import Profile from "./Profile";
import Filter from "../search/filter/Filter";
import Sidebar from "../../components/Sidebar";
const Navbar = () => {
  const [filter, setFilter] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const handleFilter = () => {
    setFilter(true);
  };
  return (
    <>
      {filter && (
        <div
          onClick={() => setFilter(false)}
          className="px-[15px] fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black/30"
        >
          <Filter type="modal" closer={setFilter} />
        </div>
      )}
      {sidebar && <Sidebar closer={setSidebar} />}
      <nav className="py-5 flex flex-col gap-10">
        <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-5">
          <Link
            to={"/"}
            className="flex items-center gap-2 cursor-pointer md:order-1"
          >
            <img src={logo} alt="Navbar logo" className="w-14 sm:w-[70px]" />
            <div className="text-center">
              <h1 className="bg-linarOrange bg-clip-text text-transparent xs:text-lg lg:!text-2xl font-semibold tracking-wider">
                TEPLODOM
              </h1>
              <p className="text-[10px] lg:text-sm leading-4">
                Интернет магазин <br /> строй материалов
              </p>
            </div>
          </Link>

          <div className="flex gap-5 md:gap-3 lg:gap-5 items-center justify-center md:order-3">
            <FavouritesIcon />
            <BasketIcon />
            <Profile />
          </div>

          <div className="flex flex-1 items-center justify-evenly gap-2 sm:gap-3 md:order-2 md:flex-none">
            <img
              onClick={() => setSidebar(true)}
              src={sidebarIcon}
              className="nav-icon md:hidden"
            />
            <Form />
            <img
              src={filters}
              className="nav-icon md:hidden"
              onClick={handleFilter}
            />
          </div>
        </div>

        <div className="hidden md:flex justify-between">
          <NavLink to={"/sale"} className="nav-sidebar">
            Товары по акции
          </NavLink>
          <NavLink to={"/new"} className="nav-sidebar">
            Новинки
          </NavLink>
          <NavLink to={"/toProviders"} className="nav-sidebar">
            Поставщикам
          </NavLink>
          <NavLink to={"/contacts"} className="nav-sidebar">
            Контакты
          </NavLink>
          <NavLink to={"/returnProduct"} className="nav-sidebar">
            Возврат товара
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
