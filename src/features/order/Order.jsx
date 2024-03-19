import React from "react";
import Modal from "../../components/Modal";
import closeIcon from "../../assets/modal/close.svg";
import { useSelector } from "react-redux";
const Order = ({ closer, quantity , title}) => {
  const name = useSelector(state => state.account.user?.name);
  return (
    <Modal>
      <div className="relative px-[15px] pt-[20px] pb-[30px] lg:p-[30px] lg:pb-[40px] mt-52 mb-3 lg:m-0 bg-white rounded-[20px] max-w-[1110px] !mx-auto overflow-auto">
        <div
          onClick={() => closer(false)}
          className="border-2 border-black p-1 rounded-full w-[26px] lg:w-8 cursor-pointer absolute top-5 right-5"
        >
          <img src={closeIcon} className="scale-110" />
        </div>
        <h1 className="text-[28px] font-semibold leading-none tracking-wide">
          Оформление заказа
        </h1>
        <p className="mt-5 text-xl leading-6 lg:mt-[40px]">
          {title}
        </p>
        <form>
          <div className="lg:flex justify-between items-center gap-10 lg:mt-[10px]">
            <div className="lg:flex flex-col w-full">
              <label className="flex flex-col mt-[30px] lg:mt-[20px]">
                <p className="text-sm leading-4">Введите Штук</p>
                <input type="number" className="order-inp" required defaultValue={quantity} />
              </label>
              <label className="flex flex-col mt-[20px]">
                <p className="text-sm leading-4">Введите имя</p>
                <input type="text" className="order-inp" required defaultValue={name}/>
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
            <input
              type="checkbox"
              className="modal-checkbox !accent-[#D9D9D9]"
              required
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
    </Modal>
  );
};

export default Order;
