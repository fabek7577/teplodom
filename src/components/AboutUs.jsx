import React from "react";
import SectionTitle from "../ui/SectionTitle";
import aboutUs from "../assets/aboutUs/image.png";
const AboutUs = () => {
  return (
    <section className="my-12 text-center md:flex items-center justify-between md:text-start gap-12">
      <div className="">
        <SectionTitle>Интернет магазин Теплодом</SectionTitle>
        <div className="text-lg mt-8">
          Компания <strong>Teplodom</strong> является лидером строительных
          материалов на локальном рынке и предлагает широкий ассортимент
          строительных, отделочных материалов и товаров для дома всем клиентам
          Узбекистана.
          <span className="hidden lg:inline-block mt-10">
            В каталоге на сайте Teplodom представлена продукция самых известных
            брендов от крупнейших мировых производителей, а также популярные
            отечественные торговые марки. Благодаря удобной навигации, легко
            найти необходимый товар и отложить его в корзину для оформления
            онлайн заказа.
          </span>
          <span className="hidden lg:inline-block mt-10">
            Высокое качество, экспертные знания, качественные ресурсы и
            улучшение производства с каждым днем является обязательным
            требованием для нашего бренда!
          </span>
        </div>
      </div>
      <div className="mt-12 w-full h-full flex items-center justify-center">
        <img
          src={aboutUs}
          className="max-w-[500px] md:max-w-[300px] lg:max-w-[500px] h-full object-cover"
        />
      </div>
    </section>
  );
};

export default AboutUs;
