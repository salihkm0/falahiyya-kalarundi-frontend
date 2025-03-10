import React from "react";
import { Outlet } from "react-router-dom";
import WhatsAppSupport from "../components/shared/WhatsAppSupport";

export const StudentLayout = () => {
  return (
    <>
    <WhatsAppSupport/>
      <Outlet />
      <footer className="bg-gray-800 text-white py-4 text-center mt-10">
        <p className="text-sm sm:text-base">
          Developed by{" "}
          <span className="font-semibold text-blue-400">Salih Km</span>
        </p>
      </footer>
    </>
  );
};
