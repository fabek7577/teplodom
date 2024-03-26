import React from "react";
import logof from "../assets/footer/logof.svg";
import call from "../assets/footer/call.svg";
import insta from "../assets/footer/insta.svg";
import telega from "../assets/footer/telega.svg";
import facebook from "../assets/footer/facebook.svg";
import enth from "../assets/footer/enth.svg";
import loc from "../assets/footer/loc.svg";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="relative lg:flex justify-between xl:gap-x-56 p-4 pb-16 lg:p-8 text-white">
      <div className="mb-9 min-w-fit">
        <div className="flex items-center gap-2 cursor-pointer mb-3">
          <img src={logof} alt="Navbar logo" />
          <div className="text-center">
            <h1 className="text-lg lg:text-2xl font-semibold tracking-wider">
              TEPLODOM
            </h1>
            <p className="text-[10px] lg:text-sm leading-4">
              Интернет магазин <br /> строй материалов
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-start gap-1">
          <img src={loc} alt="" />
          <span className="">
            ул.Уста Ширин, рынок <br /> Джамий, дом 134
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:items-center md:justify-between sm:flex-1 lg:flex-none xl:flex-1 flex-wrap sm:flex-row gap-5 lg:gap-10 text-lg mb-9">
        <div className="flex flex-col gap-6 md:gap-1">
          <a className="font-bold md:mb-4">Быстрые ссылки</a>
          <a>Мастерам</a>
          <a>Оформление заказа</a>
          <a>Пользовательское соглашение</a>
        </div>
        <div className="flex flex-col gap-6 md:gap-1">
          <a className="font-bold md:mb-4">Полезное</a>
          <a>О нас</a>
          <a>Поставщикам</a>
          <a>Возврат товара</a>
        </div>
        <div className="flex flex-col gap-6 md:gap-1">
          <a className="font-bold md:mb-4">Контакты</a>
          <span className="flex items-center gap-2">
            <img src={call} /> +998 95 111 29 16
          </span>
          <span className="flex items-center gap-2">
            <img src={call} /> +998 95 111 29 16
          </span>
          <span className="flex gap-7">
            <img src={telega} className="cursor-pointer" />
            <img src={insta} className="cursor-pointer" />
            <img src={facebook} className="cursor-pointer" />
            <img src={enth} className="cursor-pointer" />
          </span>
        </div>
      </div>

      <div className="flex items-start gap-1 md:hidden">
        <img src={loc} />
        <span className="">
          ул.Уста Ширин, рынок <br /> Джамий, дом 134
        </span>
      </div>
      <div className="absolute bottom-0 left-2/4 -translate-x-2/4 w-full flex justify-center py-4 lg:pb-4">
        © {date.getFullYear()} Teplodom. Все права защищены
      </div>
    </footer>
  );
};

export default Footer;
