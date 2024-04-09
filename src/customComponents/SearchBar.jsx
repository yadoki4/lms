import React from "react";

const SearchBar = () => {
  return (
    <div className=" lg:flex justify-end items-center px-12 ">
      <div className="sm:flex md:flex items-center py-4  h-10 bg-white rounded-lg  px-2 gap-2">
        <img src="/assets/search.svg" alt="Search" className="w-6" />
        <input
          className="w-64  text-sm font-normal font-['Poppins] italic 
      bg-white  border-none  focus:outline-none "
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
