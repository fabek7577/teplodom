import React from "react";
import closeIcon from "../assets/modal/close.svg";
const Modal = ({ children, type, closer }) => {
  let modalClass = "";
  if (type == "login") {
    modalClass =
      "relative px-[15px] py-[30px] sm:px-6 md:px-[50px] md:py-[60px] lg:px-[105px] bg-[#F9F9F9] rounded-[20px] xl:rounded-[35px] max-w-[630px] mx-auto";
  }
  if (type == "register") {
    modalClass =
      "relative px-[15px] py-[30px] sm:px-9 md:px-[50px] md:py-[40px] lg:px-[90px] bg-[#F9F9F9] rounded-[20px] xl:rounded-[35px] max-w-[600px] mx-auto";
  }
  if (type == "order") {
    modalClass =
      "relative px-[15px] pt-[20px] pb-[30px] lg:p-[30px] lg:pb-[40px] mt-52 mb-3 lg:m-0 bg-white rounded-[20px] max-w-[1110px] !mx-auto overflow-auto";
  }

  return (
    <div
      onClick={() => closer(false)}
      className="h-screen w-full bg-black/25 fixed top-0 left-0 z-50 flex items-center justify-center overflow-y-auto"
    >
      <div className="container">
        <div className={modalClass} onClick={(e) => e.stopPropagation()}>
          <div
            onClick={() => closer(false)}
            className="border-2 border-black p-1 rounded-full w-fit cursor-pointer absolute top-6 right-6"
          >
            <img src={closeIcon} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
