import { Checkbox } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";

const OrderProduct = () => {
  const name = useSelector((state) => state.account.user?.name);
  return (
    <div className="container my-8">
      <div className="max-w-[720px]">
        <h1 className="text-[28px] font-semibold leading-none tracking-wide underline underline-offset-8">
          Быстрая покупка
        </h1>
        <p className="mt-5 text-xl leading-6 lg:mt-[40px]">
          Купить Пеноплекс Основа
        </p>
        <form>
          <div className="md:flex justify-between items-center gap-10 lg:mt-[10px]">
            <div className="lg:flex flex-col w-full">
              <label className="flex flex-col mt-[30px] lg:mt-[20px]">
                <p className="text-sm leading-4">Введите Штук</p>
                <input type="number" className="order-inp" required />
              </label>
              <label className="flex flex-col mt-[20px]">
                <p className="text-sm leading-4">Введите имя</p>
                <input
                  type="text"
                  className="order-inp"
                  required
                  defaultValue={name}
                />
              </label>
              <label className="flex flex-col mt-[20px]">
                <p className="text-sm leading-4">Введите город / район</p>
                <input type="text" className="order-inp" required />
              </label>
            </div>
            <div className="lg:flex flex-col w-full">
              <label className="flex flex-col mt-[20px]">
                <p className="text-sm leading-4">Введите номер телефона</p>
                <input type="text" className="order-inp" required />
              </label>
              <label className="flex flex-col mt-[20px]">
                <p className="text-sm leading-4">Введите область</p>
                <input type="text" className="order-inp" required />
              </label>
              <label className="flex flex-col mt-[20px]">
                <p className="text-sm leading-4">Введите населённый пункт</p>
                <input type="text" className="order-inp" required />
              </label>
            </div>
          </div>
          <label className="flex flex-col mt-[20px]">
            <p className="text-sm leading-4">Введите адресс</p>
            <input type="text" className="order-inp" required />
          </label>

          <label className="flex items-center gap-3 mt-[30px] lg:mt-[25px]">
            <Checkbox
              required
              ripple={false}
              className="rounded-[4px] hover:before:opacity-0 checked:!border-[#D9D9D9] checked:!bg-[#D9D9D9]"
              containerProps={{ className: "p-0" }}
            />
            <span className="text-sm lg:text-base tracking-tight">
              Я согласен с
              <a className="text-[#2289FF] hover:underline ms-1">
                правилами публичной оферты
              </a>
            </span>
          </label>

          <button className="btn w-full md:w-[220px] mt-[55px] md:mt-[19px] py-3 text-white text-lg lg:text-base">
            Оформить заказ
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderProduct;
