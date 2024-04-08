import React from "react";
import person from "../../assets/navbar/person.svg";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../modal/modalSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const handleClick = () => {
    !user?.name && dispatch(setModal("auth"));
  };
  return (
    <>
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
