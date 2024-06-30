import React from "react";

const AttendanceCard = ({ Name, Total_Activity, Total_Weeks, attendance }) => {
  return (
    <div className="flex w-full   rounded-xl h-12 bg-white mt-4 px-2 py-2">
      <div className=" flex items-center justify-between gap-1  w-full px-2">
        <p className=" font-poppins font-bold text-[#000000] text-xs">{Name}</p>
        <p className="  font-poppins font-bold text-[#000000] text-xs">
          {Total_Activity}
        </p>
        <p className=" font-poppins font-bold text-[#000000] text-xs">
          {Total_Weeks}
        </p>
        <p className=" font-poppins font-bold text-[#000000] text-xs">
          {attendance}
        </p>
      </div>
    </div>
  );
};

export default AttendanceCard;
