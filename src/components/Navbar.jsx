import React from "react";
import logo from "../assets/navbar/logo.svg";
import search from "../assets/navbar/search.svg";
import person from "../assets/navbar/person.svg";
import basket from "../assets/navbar/basket.svg";
import like from "../assets/navbar/like.svg";
import filters from "../assets/navbar/filters.svg";
import sidebar from "../assets/navbar/sidebar.svg";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="container py-5 flex flex-col gap-10">
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-5">
        <Link to={"/"} className="flex items-center gap-2 cursor-pointer md:order-1">
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
          <div className="nav-icon">
            <img src={like} alt="navbar likes" className="w-4 sm:w-7" />
          </div>
          <div className="nav-icon">
            <img src={basket} alt="navbar basket" className="w-4 sm:w-7" />
          </div>
          <div className="nav-icon flex gap-4 lg:rounded-lg">
            <img src={person} alt="navbar person" className="w-4 sm:w-7" />
            <span className="text-lg hidden lg:inline">Профиль</span>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-evenly gap-1 sm:gap-3 md:order-2 md:flex-none">
          <img src={sidebar} className="nav-icon md:hidden" />
          <form className="relative flex items-center h-full w-[350px] sm:w-[400px] md:w-[350px] lg:w-[445px]">
            <img
              src={search}
              alt="search"
              className="absolute top-2/4 left-[25px] translate-50"
            />
            <input
              type="text"
              placeholder="Поиск..."
              className="w-full p-3 ps-12 shadow rounded-3xl md:rounded-lg"
            />
          </form>
          <img src={filters} className="nav-icon md:hidden" />
        </div>
      </div>

      <div className="hidden md:flex justify-between">
        <NavLink to={"/sale"} className="nav-sidebar">Товары по акции</NavLink>
        <NavLink to={"/new"} className="nav-sidebar">Новинки</NavLink>
        <NavLink to={"/toProviders"} className="nav-sidebar">Поставщикам</NavLink>
        <NavLink to={"/contacts"} className="nav-sidebar">Контакты</NavLink>
        <NavLink to={"/returnProduct"} className="nav-sidebar">Возврат товара</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
