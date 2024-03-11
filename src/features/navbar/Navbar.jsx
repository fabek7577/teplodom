import React from "react";
import logo from "../../assets/navbar/logo.svg";
import person from "../../assets/navbar/person.svg";
import filters from "../../assets/navbar/filters.svg";
import sidebar from "../../assets/navbar/sidebar.svg";
import { Link, NavLink } from "react-router-dom";
import BasketIcon from "./basket/BasketIcon";
import FavouritesIcon from "./favourites/FavouritesIcon";
import Form from "./Form";
const Navbar = () => {
  return (
    <nav className="py-5 flex flex-col gap-10">
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-5">
        <Link
          to={"/"}
          className="flex items-center gap-2 cursor-pointer md:order-1"
        >
          <img src={logo} alt="Navbar logo" className="w-14 sm:w-[70px]" />
          <div className="text-center">
            <h1 className="bg-linarOrange bg-clip-text text-transparent text-lg lg:text-2xl font-semibold tracking-wider">
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
          <Link className="nav-icon flex gap-4 lg:rounded-lg">
            <img src={person} alt="navbar person" className="w-6 sm:w-7" />
            <span className="text-lg hidden lg:inline">Профиль</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-evenly gap-1 sm:gap-3 md:order-2 md:flex-none">
          <img src={sidebar} className="nav-icon md:hidden" />
          <Form />
          <img src={filters} className="nav-icon md:hidden" />
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
  );
};

export default Navbar;
