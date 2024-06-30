import React from "react";
import TBoard from "./TBoard";
import { Outlet } from "react-router";
const Main = () => {
  //const percentage = 66;
  return (
    <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">
      <div className="hidden md:flex justify-between items-center py-4 px-4">
        <h3 className=" text-3xl font-bold">Dashboard</h3>
        <img src={"/assets/logo.svg"} alt="Company Logo" className="pr-3" />
      </div>
      <div className="w-full h-full bg-orange-1 md:py-10 py-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
