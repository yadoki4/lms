import React from "react";

const ActivityCard = ({ title, instructorName }) => {
  return (
    <div className="flex gap-4 my-2 items-center">
      <div className="">
        <img src="/assets/activity.svg" alt="Search" className="w-16 h-16" />
      </div>
      <div className="flex flex-col">
        <p className="font-poppins text-['1B2559#'] font-semibold text-base">
          {title}
        </p>
        <p className="font-poppins text-[#A3AED0] font-medium text-sm ">
          {instructorName}
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
