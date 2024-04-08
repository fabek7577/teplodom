import React from "react";
import { useSelector } from "react-redux";
import Order from "../features/order/Order";
import ThanksForPurchase from "../components/ThanksForPurchase";
import Authentication from "../features/account/Authentication";
import Sidebar from "../components/Sidebar";
const Modals = () => {
  const { modalList } = useSelector((state) => state.modals);
  return (
    <>
      {modalList?.map((item) => {
        if (item.modal === "order") {
          return <Order key={item.id} />;
        }
        if (item.modal === "thanksForPurchase") {
          return <ThanksForPurchase key={item.id} />;
        }
        if (item.modal === "auth") {
          return <Authentication key={item.id} />;
        }
        if (item.modal === "sidebar") {
          return <Sidebar key={item.id} />;
        }
      })}
    </>
  );
};

export default Modals;
