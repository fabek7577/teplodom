import React from "react";
const Modal = ({ children }) => {
  return (
    <div className="h-screen w-full bg-black/25 fixed top-0 left-0 z-50 flex items-center justify-center overflow-y-auto">
      <div className="container">
        {children}
      </div>
    </div>
  );
};

export default Modal;
