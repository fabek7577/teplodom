import React, { useState } from "react";
import person from "../../assets/navbar/person.svg";
import Authentication from "../account/Authentication";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.account);
  const [auth, setAuth] = useState(false);
  const handleClick = () => {
    !user?.name && setAuth(true);
  };
  return (
    <>
      {auth && <Authentication closer={setAuth} />}
      <button
        onClick={handleClick}
        className="nav-icon flex gap-4 lg:rounded-2xl"
      >
        <img src={person} alt="navbar person" className="w-6 sm:w-7" />
        <span className="text-lg hidden lg:inline min-w-[79px] line-clamp-1">
          {user?.name ? user.name.slice(0, 7) : "Профиль"}
        </span>
      </button>
    </>
  );
};

export default Profile;
