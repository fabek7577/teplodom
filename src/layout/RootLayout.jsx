import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <div className="bg-[#2D2B45]">
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
