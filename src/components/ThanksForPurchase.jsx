import React from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { delModals } from "../features/modal/modalSlice";
const ThanksForPurchase = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClose = () => {
    navigate("/");
    dispatch(delModals());
  };
  return (
    <Modal type={"thanksForPurchase"}>
      <h1 className="text-[28px] xs:text-[32px] sm:!text-[40px] font-bold leading-none">
        Спасибо за покупку !
      </h1>
      <p className="text-[14px] xs:text-base sm:!text-xl mt-[20px]">
        Ваш номер заказ №{Date.now()}
      </p>
      <button
        onClick={handleClose}
        className="btn py-1.5 xs:py-[9px] px-5 mt-6 xs:mt-[40px]"
      >
        Главная страница
      </button>
    </Modal>
  );
};

export default ThanksForPurchase;
