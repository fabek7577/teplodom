import React, { useState } from "react";
import Modal from "../../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "@material-tailwind/react";
import { pushOrder } from "../../services/apiTelegramm";
import { delModals, setModal } from "../modal/modalSlice";
const Order = ({ title }) => {
  const { name } = useSelector((state) => state.account.user);
  const [inputs, setInputs] = useState({
    quantity: 0,
    number: 0,
    name,
    region: "",
    city: "",
    locality: "",
    address: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { quantity, address, city, locality, name, number, region } = inputs;
    pushOrder({
      quantity,
      number,
      name,
      region,
      city,
      locality,
      address,
    });
    dispatch(delModals());
    dispatch(setModal("thanksForPurchase"));
  };
  return (
    <Modal type={"order"}>
      <h1 className="text-[28px] font-semibold leading-none tracking-wide">
        Оформление заказа
      </h1>
      <p className="mt-5 text-xl leading-6 lg:mt-[40px]">{title}</p>
      <form onSubmit={handleSubmit}>
        <div className="lg:flex justify-between items-center gap-10 lg:mt-[10px]">
          <div className="lg:flex flex-col w-full">
            <label className="flex flex-col mt-[30px] lg:mt-[20px]">
              <p className="text-sm leading-4">Введите Штук</p>
              <input
                type="number"
                className="order-inp"
                required
                value={inputs.quantity}
                onChange={(e) =>
                  setInputs(
                    (prev) => (prev = { ...prev, quantity: e.target.value })
                  )
                }
              />
            </label>
            <label className="flex flex-col mt-[20px]">
              <p className="text-sm leading-4">Введите имя</p>
              <input
                type="text"
                className="order-inp"
                required
                value={inputs.name}
                onChange={(e) =>
                  setInputs(
                    (prev) => (prev = { ...prev, name: e.target.value })
                  )
                }
              />
            </label>
            <label className="flex flex-col mt-[20px]">
              <p className="text-sm leading-4">Введите город / район</p>
              <input
                type="text"
                className="order-inp"
                required
                value={inputs.city}
                onChange={(e) =>
                  setInputs(
                    (prev) => (prev = { ...prev, city: e.target.value })
                  )
                }
              />
            </label>
          </div>
          <div className="lg:flex flex-col w-full">
            <label className="flex flex-col mt-[20px]">
              <p className="text-sm leading-4">Введите номер телефона</p>
              <input
                type="text"
                className="order-inp"
                required
                value={inputs.number}
                onChange={(e) =>
                  setInputs(
                    (prev) => (prev = { ...prev, number: e.target.value })
                  )
                }
              />
            </label>
            <label className="flex flex-col mt-[20px]">
              <p className="text-sm leading-4">Введите область</p>
              <input
                type="text"
                className="order-inp"
                required
                value={inputs.region}
                onChange={(e) =>
                  setInputs(
                    (prev) => (prev = { ...prev, region: e.target.value })
                  )
                }
              />
            </label>
            <label className="flex flex-col mt-[20px]">
              <p className="text-sm leading-4">Введите населённый пункт</p>
              <input
                type="text"
                className="order-inp"
                required
                value={inputs.locality}
                onChange={(e) =>
                  setInputs(
                    (prev) => (prev = { ...prev, locality: e.target.value })
                  )
                }
              />
            </label>
          </div>
        </div>
        <label className="flex flex-col mt-[20px]">
          <p className="text-sm leading-4">Введите адресс</p>
          <input
            type="text"
            className="order-inp"
            required
            value={inputs.address}
            onChange={(e) =>
              setInputs((prev) => (prev = { ...prev, address: e.target.value }))
            }
          />
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
    </Modal>
  );
};

export default Order;
