import React from "react";
import SectionTitle from "../ui/SectionTitle";
import phoneIcon from "../assets/contacts/phone.svg";
import clockIcon from "../assets/contacts/clock.svg";
import locationIcon from "../assets/contacts/location.svg";
import calendarIcon from "../assets/contacts/calendar.svg";
import mailIcon from "../assets/contacts/mail.svg";
import OrderCallBack from "./OrderCallBack";
const Contacts = () => {
  return (
    <section className="container my-12">
      <SectionTitle>Контакты</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-[30px]">
        <div className="text-center order-1">
          <div className="contacts-icon">
            <img src={phoneIcon} className="" />
          </div>
          <div className="flex flex-col mt-[14px]">
            <span className="font-medium text-xl lg:text-2xl tracking-wider">
              Телефон
            </span>
            <span className="mt-3 lg:text-lg">+998 (95) 111 29 16</span>
          </div>
        </div>

        <div className="hidden sm:inline-block text-center order-4">
          <div className="contacts-icon">
            <img src={phoneIcon} className="" />
          </div>
          <div className="flex flex-col mt-[14px]">
            <span className="font-medium text-xl lg:text-2xl tracking-wider">
              Телефон
            </span>
            <span className="mt-3 lg:text-lg">+998 (95) 111 29 16</span>
          </div>
        </div>

        <div className="text-center order-3">
          <div className="contacts-icon">
            <img src={mailIcon} className="" />
          </div>
          <div className="flex flex-col mt-[14px]">
            <span className="font-medium text-xl lg:text-2xl tracking-wider">
              Е-майл
            </span>
            <span className="mt-3 lg:text-lg">Sardorraimov@gmail.com</span>
          </div>
        </div>

        <div className="text-center order-6">
          <div className="contacts-icon">
            <img src={clockIcon} className="" />
          </div>
          <div className="flex flex-col mt-[14px]">
            <span className="font-medium text-xl lg:text-2xl tracking-wider">
              Время
            </span>
            <span className="mt-3 lg:text-lg">Каждый день с 8:00 – 18:00</span>
          </div>
        </div>

        <div className="text-center order-5">
          <div className="contacts-icon">
            <img src={calendarIcon} className="" />
          </div>
          <div className="flex flex-col mt-[14px]">
            <span className="font-medium text-xl lg:text-2xl tracking-wider">
              Расписание
            </span>
            <span className="mt-3 lg:text-lg">
              Мы в вашем распоряжении <br /> 7 дней в неделю!
            </span>
          </div>
        </div>

        <div className="text-center order-2">
          <div className="contacts-icon">
            <img src={locationIcon} className="" />
          </div>
          <div className="flex flex-col mt-[14px]">
            <span className="font-medium text-xl lg:text-2xl tracking-wider">
              Локация
            </span>
            <span className="mt-3 lg:text-lg">
              ул. Уста Ширин, рынок Джамий <br /> дом 134, магазин 131
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[60px]">
        <SectionTitle>Заказать обратный звонок</SectionTitle>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-x-7 lg:gap-x-[54px]">
          <OrderCallBack />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1520.3573686344364!2d69.22818622063775!3d41.3267345834201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bb7a0ebbae3%3A0xf9e01b5d45fc68cd!2sPDP%20Academy!5e0!3m2!1sru!2s!4v1711543578010!5m2!1sru!2s"
            className="w-full h-[374px] lg:h-[389px] border-none rounded-[10px] md:rounded-[20px] mt-10 md:mt-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
