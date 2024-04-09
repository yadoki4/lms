import React, { useState } from "react";
import SearchBar from "../../customComponents/SearchBar";

const Classes = () => {
  const [showView, setShowView] = useState(false);

  return (
    <div className="w-ful flex flex-col gap-4 mx-16">
      <SearchBar></SearchBar>
      <div className=" flex flex-col md:flex-row md:items-start items-center  bg-white rounded-3xl px-6 py-6 gap-4">
        <div className="h-48 w-64 bg-[#D9D9D9] "></div>
        <div className="flex flex-col px-4 py-4 ">
          <p className="mt-3 font-poppins font-bold text-3xl text-[#2B2D42] ">
            Class Name
          </p>
          <p className="mt-3 font-poppins  text-[#2B2D42] font-medium text-2xl">
            Students: 30
          </p>
          <button className="font-poppins text-xs  text-[#ffffff] w-32 h-11 mt-3 rounded-3xl  font-bold bg-orange-logo px-4">
            View
          </button>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row md:items-start items-center  bg-white rounded-3xl px-6 py-6 gap-4">
        <div className="h-48 w-64 bg-[#D9D9D9] "></div>
        <div className="flex flex-col px-4 py-4 ">
          <p className="mt-3 font-poppins font-bold text-3xl text-[#2B2D42] ">
            Class Name
          </p>
          <p className="mt-3 font-poppins  text-[#2B2D42] font-medium text-2xl">
            Students: 30
          </p>
          <button className="font-poppins text-xs  text-[#ffffff] w-32 h-11 mt-3 rounded-3xl  font-bold bg-orange-logo px-4">
            View
          </button>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row md:items-start items-center  bg-white rounded-3xl px-6 py-6 gap-4">
        <div className="h-48 w-64 bg-[#D9D9D9] "></div>
        <div className="flex flex-col px-4 py-4 ">
          <p className="mt-3 font-poppins font-bold text-3xl text-[#2B2D42] ">
            Class Name
          </p>
          <p className="mt-3 font-poppins  text-[#2B2D42] font-medium text-2xl">
            Students: 30
          </p>
          <button className="font-poppins text-xs  text-[#ffffff] w-32 h-11 mt-3 rounded-3xl  font-bold bg-orange-logo px-4">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Classes;
