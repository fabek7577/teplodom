import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

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
