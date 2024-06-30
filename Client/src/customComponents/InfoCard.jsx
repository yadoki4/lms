import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const InfoCard = ({ title, description }) => {
  return (
    <div className="flex gap-8 my-2">
      <div className="w-2 h-12 rounded-md bg-orange-logo"></div>
      <div className="flex flex-col">
        <p className="font-poppins text-['#1B2559'] font-semibold text-base">{title}</p>
        <p className="font-poppins text-[#A3AED0] font-medium text-sm">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
