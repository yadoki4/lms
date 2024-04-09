import React from "react";

const KidsImage = ({ heading1, img, heading2, heading3 }) => {
  return (
    <div className="flex flex-col bg-orange-1  rounded-xl">
      <div className="flex justify-center items-center">
        <img className="min-w-80 rounded-lg" src={img}></img>
      </div>
      <div className="ml-2 px-1 py-1">
        <p className=" font-poppins text-[#2B2D42]   font-semibold text-sm">
          {heading1}
        </p>
      </div>
      <div className="ml-2 px-1 py-1">
        <p className=" font-poppins text-[#2B2D42]   font-semibold text-base">
          {heading2}
          <br /> {heading3}
        </p>
      </div>
    </div>
  );
};

export default KidsImage;
