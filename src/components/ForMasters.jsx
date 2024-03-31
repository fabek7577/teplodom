import React from "react";
import SectionTitle from "../ui/SectionTitle";
import OrderCallBack from "./OrderCallBack";

const ForMasters = () => {
  return (
    <div className="container my-8">
      <SectionTitle>Мастерам</SectionTitle>
      <div className="text-lg">
        <p className="mt-5">
          Вы мастер, который чинит то, что сломано и строит что-то новое?
        </p>
        <p className="mt-[47px]">
          Заявите о себе на сайте —{" "}
          <a className="text-blue-500">Teplodomshop.com!</a>
        </p>
        <p className="mt-[47px]">
          <a className="text-blue-500">Teplodomshop.com</a> — это база мастеров
          по ремонту квартир/домов и других специальность.
        </p>
        <p className="mt-[47px]">
          В каталоге зарегистрированы мастера которые хотят без всяких проблем
          клиентов. Вы получите персональную страничку в интернете с
          фотографиями работ и контактами, которую сможете отправлять клиентам.
          А самые лучшие мастера, которые оставили свои данные нам, чтобы
          зарегистрироваться — получать стабильный поток клиентов
        </p>
      </div>
      <div className="mt-[50px]">
        <SectionTitle>Заказать обратный звонок</SectionTitle>
        <OrderCallBack type="mini" />
      </div>
    </div>
  );
};

export default ForMasters;
