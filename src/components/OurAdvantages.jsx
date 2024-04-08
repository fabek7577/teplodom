import React from "react";
import star from "../assets/ourAdvantages/star.svg";
import plane from "../assets/ourAdvantages/plane.svg";
import store from "../assets/ourAdvantages/store.svg";
import deliver from "../assets/ourAdvantages/deliver.svg";
import box from "../assets/ourAdvantages/box.svg";
import SectionTitle from "../ui/SectionTitle";


const OurAdvantages = () => {
  return (
    <section className="mt-[50px]">
      <SectionTitle>Наши преимущества</SectionTitle>
      <div className="flex flex-wrap gap-10 justify-center text-center lg:text-start">
        <div className="ourAdvantages">
          <div className="bg-blue-100 ourAdvantages-icon">
            <img src={star} />
          </div>
          <p className="w-[200px] lg:w-[225px] lg:text-lg">
            50 000 довольных клиентов по всей страна
          </p>
        </div>
        <div className="ourAdvantages">
          <div className="bg-[#8500B426] ourAdvantages-icon">
            <img src={plane} />
          </div>
          <p className="w-[200px] lg:w-[225px] lg:text-lg">
            99% заказов приходит в назначенное время
          </p>
        </div>
        <div className="ourAdvantages">
          <div className="bg-[#31CEFF26] ourAdvantages-icon">
            <img src={store} />
          </div>
          <p className="w-[200px] lg:w-[225px] lg:text-lg">
            5 лет на рынке инструмента и техники
          </p>
        </div>
        <div className="ourAdvantages">
          <div className="bg-[#FFA30B26] ourAdvantages-icon">
            <img src={box} />
          </div>
          <p className="w-[200px] lg:w-[225px] lg:text-lg">
            Боле 5 000 позиций товаров на складах
          </p>
        </div>
        <div className="ourAdvantages">
          <div className="bg-[#00E01626] ourAdvantages-icon">
            <img src={deliver} />
          </div>
          <p className="w-[200px] lg:w-[225px] lg:text-lg">
            Бесплатная доставка по городу Ташкент (при заказе от 3 млн.)
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurAdvantages;
