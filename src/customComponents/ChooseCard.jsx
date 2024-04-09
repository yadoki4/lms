import React from "react";
import "./Styles.css";
const ChooseCard = ({
  number,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
}) => {
  return (
    <div className="blah flex justify-center items-center rounded-[10px] px-5 py-4 gap-6 bg-[#FCE0A2] w-1/2">
      <div className="circle1 flex w-24 h-24 rounded-full items-center justify-center bg-white">
        <p className="text-center font-poppins font-semibold text-3xl text-[#000000]">
          {number}
        </p>
      </div>
      <div className="flex w-3/4 flex-col gap-1">
        <p className="font-poppins font-semibold text-base text-[#000000]">
          <span className="mr-2 number hidden">{number})</span>
          {heading1}
        </p>
        <p className="font-poppins font-medium text-sm text-[#000000]">
          {heading2}
        </p>
      </div>
    </div>
  );
};

export default ChooseCard;
