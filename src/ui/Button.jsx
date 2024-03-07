import React, { useState } from "react";
import urn from "../assets/card/urn.svg";
import urnRed from "../assets/card/urnRed.svg";
const Button = ({ type, onClick }) => {
  const [btnActive, setBtnActive] = useState(false);
  if (type == "urn") {
    return (
      <button
        onClick={() => {
          onClick();
          setBtnActive(false);
        }}
        onMouseDown={() => setBtnActive(true)}
        className="btn py-1 px-2 box-border !bg-transparent border-[1.5px] border-[#E1E1E1] active:ring-0 active:border-[#FF1111]"
      >
        <img src={btnActive ? urnRed : urn} />
      </button>
    );
  }
};

export default Button;
