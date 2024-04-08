import React, { useRef } from "react";
import Modal from "../../components/Modal";
import { useDispatch } from "react-redux";
import { registerUser } from "./accountSlice";
import { pushRegister } from "../../services/apiTelegramm";
import { toast } from "react-toastify";
import { Checkbox } from "@material-tailwind/react";
import { delModals } from "../modal/modalSlice";
const Register = ({ setLogin }) => {
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
      dispatch(delModals());
      dispatch(registerUser(user));
      pushRegister(user);
      toast.success("Пользователь успешно создан", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <Modal type={"register"}>
      <h1 className="text-[32px] md:text-[42px] font-semibold tracking-wide leading-10">
        Регистрация
      </h1>

      <div className="mt-5">
        Есть аккаунт?
        <button onClick={() => setLogin(true)} className="text-[#2730D6] ms-3">
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
          <input type="text" className="modal-formInp" required ref={contact} />
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
          <Checkbox
            inputRef={checkbox}
            required
            color="green"
            ripple={false}
            className="rounded-[4px] hover:before:opacity-0"
            containerProps={{ className: "p-0" }}
          />
          <span className="text-sm tracking-tight">
            Я согласен с Условиями и Политикой конфиденциальности
          </span>
        </label>

        <button className="btn w-full md:w-[190px] mt-[14px] py-[14px] text-white text-lg">
          Регистрация
        </button>
      </form>
    </Modal>
  );
};

export default Register;
