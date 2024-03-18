import React, { useRef } from "react";
import closeIcon from "../../assets/modal/close.svg";
import Modal from "../../components/Modal";
import { useDispatch } from "react-redux";
import { registerUser } from "./accountSlice";
const Register = ({ setLogin, closer }) => {
  const dispatch = useDispatch();
  const name = useRef();
  const contact = useRef();
  const pass = useRef();
  const passRep = useRef();
  const checkbox = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      id: Date.now(),
      name: name.current.value,
      contact: contact.current.value,
      password: pass.current.value,
    };

    if (pass.current.value != passRep.current.value) {
      alert("Пароли не совпадают");
    } else {
      closer(false);
      dispatch(registerUser(user));
    }
  };
  return (
    <Modal>
      <div className="relative px-[15px] py-[30px] sm:px-6 md:px-[50px] md:py-[50px] lg:px-[105px] bg-[#F9F9F9] rounded-[20px] xl:rounded-[35px] max-w-[630px] mx-auto">
        <div
          onClick={() => closer(false)}
          className="border-2 border-black p-1 rounded-full w-fit cursor-pointer absolute top-6 right-6"
        >
          <img src={closeIcon} />
        </div>

        <h1 className="text-[32px] md:text-[42px] font-semibold tracking-wide leading-10">
          Регистрация
        </h1>

        <div className="mt-5">
          Есть аккаунт?
          <button
            onClick={() => setLogin(true)}
            className="text-[#2730D6] ms-3"
          >
            Войти
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="flex flex-col mt-6">
            <span>Ваше имя</span>
            <input type="text" className="modal-formInp" required ref={name} />
          </label>

          <label className="flex flex-col mt-6">
            <span>Электронная почта или номер телефона</span>
            <input
              type="text"
              className="modal-formInp"
              required
              ref={contact}
            />
          </label>

          <label className="flex flex-col mt-6">
            <span>Пароль</span>
            <input
              type="password"
              className="modal-formInp"
              required
              ref={pass}
            />
          </label>
          <label className="flex flex-col mt-6">
            <span>Подтвердить пароль</span>
            <input
              type="password"
              className="modal-formInp"
              required
              ref={passRep}
            />
          </label>

          <label className="flex items-center gap-3 mt-6">
            <input
              type="checkbox"
              className="modal-checkbox"
              required
              ref={checkbox}
            />
            <span className="text-sm tracking-tight">
              Я согласен с Условиями и Политикой конфиденциальности
            </span>
          </label>

          <button className="btn w-full md:w-[190px] mt-[14px] py-[14px] text-white text-lg">
            Регистрация
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default Register;
