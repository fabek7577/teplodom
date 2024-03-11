import React, { useState } from "react";
import search from "../../assets/navbar/search.svg";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [inp, setInp] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inp}`);
    setInp("")
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center h-full w-[350px] sm:w-[400px] md:w-[350px] lg:w-[445px]"
    >
      <img
        src={search}
        alt="search icon"
        className="absolute top-2/4 left-[25px] translate-50"
      />
      <input
        type="search"
        name="search"
        placeholder="Поиск..."
        className="w-full p-3 ps-12 shadow rounded-3xl md:rounded-lg"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
    </form>
  );
};

export default Form;
