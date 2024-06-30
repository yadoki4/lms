import React from "react";

const SearchBar = () => {
  return (
    <div className="px-4 lg:px-12 flex justify-center lg:justify-end items-center">
    <div className="flex items-center py-2 sm:py-4 h-10 bg-white rounded-lg px-2 sm:px-4 gap-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <img src="/assets/search.svg" alt="Search" className="w-4 sm:w-5 md:w-6" />
      <input
        className="flex-grow text-xs sm:text-sm font-normal font-['Poppins'] italic bg-white border-none focus:outline-none"
        placeholder="Search"
      />
    </div>
  </div>
  
  );
};

export default SearchBar;
