import React from "react";
import SectionTitle from "../ui/SectionTitle";
import phoneIcon from "../assets/contacts/phone.svg";
import clockIcon from "../assets/contacts/clock.svg";
import locationIcon from "../assets/contacts/location.svg";
import calendarIcon from "../assets/contacts/calendar.svg";
import mailIcon from "../assets/contacts/mail.svg";
const Contacts = () => {
  return (
    <section className="container my-12">
      <SectionTitle>Контакты</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-[30px]">
        <div className="text-center order-1">
          <div className="p-5 lg:p-6 border-[3px] border-yellow rounded-full w-fit flex items-center justify-center mx-auto">
            <img src={phoneIcon} className="" />
          </div>
          <div className="flex flex-col mt-[14px]">
            <span className="font-medium text-xl lg:text-2xl tracking-wider">Телефон</span>
            <span className="mt-3 lg:text-lg">+998 (95) 111 29 16</span>
          </div>
        </div>
        
        <div className="hidden sm:inline-block text-center order-4">
          <div className="p-5 lg:p-6 border-[3px] border-yellow rounded-full w-fit flex items-center justify-center mx-auto">
            <img src={phoneIcon} className="" />
          </div>
          <div className="flex flex-col mt-[14px]">
            <span className="font-medium text-xl lg:text-2xl tracking-wider">Телефон</span>
            <span className="mt-3 lg:text-lg">+998 (95) 111 29 16</span>
          </div>
        </div>

        <div className="text-center order-3">
          <div className="p-5 lg:p-6 border-[3px] border-yellow rounded-full w-fit flex items-center justify-center mx-auto">
            <img src={mailIcon} className="" />
          </div>
          <div className="flex flex-col mt-[14px]">
            <span className="font-medium text-xl lg:text-2xl tracking-wider">Е-майл</span>
            <span className="mt-3 lg:text-lg">Sardorraimov@gmail.com</span>
          </div>
        </div>

        <div className="text-center order-6">
          <div className="p-5 lg:p-6 border-[3px] border-yellow rounded-full w-fit flex items-center justify-center mx-auto">
            <img src={clockIcon} className="" />
          </div>
          <div className="flex flex-col mt-[14px]">
            <span className="font-medium text-xl lg:text-2xl tracking-wider">Время</span>
            <span className="mt-3 lg:text-lg">Каждый день с 8:00 – 18:00</span>
          </div>
        </div>

        <div className="text-center order-5">
          <div className="p-5 lg:p-6 border-[3px] border-yellow rounded-full w-fit flex items-center justify-center mx-auto">
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
          <div className="p-5 lg:p-6 border-[3px] border-yellow rounded-full w-fit flex items-center justify-center mx-auto">
            <img src={locationIcon} className="" />
          </div>
          <div className="flex flex-col mt-[14px]">
            <span className="font-medium text-xl lg:text-2xl tracking-wider">Локация</span>
            <span className="mt-3 lg:text-lg">
              ул. Уста Ширин, рынок Джамий <br /> дом 134, магазин 131
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contacts;
