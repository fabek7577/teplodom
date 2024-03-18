import React, { useRef } from "react";
import closeIcon from "../../assets/modal/close.svg";
import Modal from "../../components/Modal";
import { useDispatch } from "react-redux";
import { getAccount } from "../../services/apiProducts";
const Login = ({ closer }) => {
  const dispatch = useDispatch();
  const contact = useRef();
  const pass = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginer = {
      contact: contact.current.value,
      password: pass.current.value,
    };
    dispatch(getAccount(loginer));
    closer(false);
  };
  return (
    <Modal>
      <div className="relative px-[15px] py-[30px] sm:px-6 md:px-[50px] md:py-[60px] lg:px-[105px] bg-[#F9F9F9] rounded-[20px] xl:rounded-[35px] max-w-[630px] mx-auto">
        <div
          onClick={() => closer(false)}
          className="border-2 border-black p-1 rounded-full w-fit cursor-pointer absolute top-6 right-6"
        >
          <img src={closeIcon} />
        </div>
        <h1 className="text-[32px] md:text-[42px] font-semibold tracking-wide">
          Войти
        </h1>
        <form onSubmit={handleSubmit}>
          <label className="flex flex-col mt-[30px]">
            <span>Электронная почта или номер телефона</span>
            <input type="text" className="modal-formInp" ref={contact} />
          </label>

          <label className="flex flex-col mt-[30px]">
            <span>Пароль</span>
            <input type="password" className="modal-formInp" ref={pass} />
          </label>

          <a className="text-[#2730D6] mt-5 hover:underline block">
            Забыли свой пароль ?
          </a>
          <button className="btn w-full md:w-[190px] mt-6 py-[14px] text-white text-lg">
            Войти
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default Login;
