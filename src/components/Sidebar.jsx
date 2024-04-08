import React from "react";
import logo from "../assets/navbar/logo.svg";
import { Link } from "react-router-dom";
import closeIcon from "../assets/modal/close.svg";
import { useDispatch } from "react-redux";
import { delModals } from "../features/modal/modalSlice";
const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <aside
      onClick={() => dispatch(delModals())}
      className="fixed top-0 left-0 z-[99] h-full w-full"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-full w-4/5 bg-white px-[15px] py-[20px] animate-sidebar"
      >
        <div className="flex justify-between items-center">
          <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="Navbar logo" className="w-14 sm:w-[70px]" />
            <div className="text-center">
              <h1 className="bg-linarOrange bg-clip-text text-transparent text-lg lg:!text-2xl font-semibold tracking-wider">
                TEPLODOM
              </h1>
              <p className="text-[10px] lg:text-sm leading-4">
                Интернет магазин <br /> строй материалов
              </p>
            </div>
          </Link>
          <button
            onClick={() => {
              dispatch(delModals());
            }}
            className="p-3 rounded-full bg-[#F7F7F7] cursor-pointer"
          >
            <img src={closeIcon} alt="close icon" className="scale-110" />
          </button>
        </div>
        <ul className="flex flex-col divide-y divide-black mt-5">
          <li className="py-5 text-lg">
            <Link to={"/sale"}>Товары по акции</Link>
          </li>
          <li className="py-5 text-lg">
            <Link to={"/new"}>Новинки</Link>
          </li>
          <li className="py-5 text-lg">
            <Link to={"/toProviders"}>Поставщикам</Link>
          </li>
          <li className="py-5 text-lg">
            <Link to={"/contacts"}>Контакты</Link>
          </li>
          <li className="py-5 text-lg">
            <Link to={"/returnProduct"}>Возврат товара</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
