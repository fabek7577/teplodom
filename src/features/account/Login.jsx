import React, { useRef } from "react";
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
    <Modal type={"login"} closer={closer}>
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
    </Modal>
  );
};

export default Login;
