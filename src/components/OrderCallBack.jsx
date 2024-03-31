import React, { useState } from "react";
import { pushContact } from "../services/apiTelegramm";
import { toast } from "react-toastify";

const OrderCallBack = ({ type }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    pushContact({ name, number, comment });
    setName("");
    setNumber("");
    setComment("");
    toast.success("Обратный звонок отправлен", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <form
        className={`flex flex-col gap-y-5 ${
          type ? "md:max-w-[530px]" : "md:w-full"
        }`}
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col">
          <span>Введите имя</span>
          <input
            type="text"
            className="mt-[10px] p-[9px] border border-[#CCCCCC] rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col">
          <span>Введите номер телефона</span>
          <input
            type="number"
            className="mt-[10px] p-[9px] border border-[#CCCCCC] rounded-md"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col">
          <span>Комментарии</span>
          <textarea
            rows="4"
            className="mt-[10px] p-[10px] border border-[#CCCCCC] rounded-md resize-none"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </label>
        <button className="btn w-fit py-3 px-5 text-xs ms-auto lg:ms-0">
          Отправить
        </button>
      </form>
    </>
  );
};

export default OrderCallBack;
