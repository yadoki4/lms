import React from "react";
import AttendanceCard from "../../customComponents/attendencecard";
import SearchBar from "../../customComponents/SearchBar";

const Attendance = () => {
  const Array = [
    {
      id: 1,
      Name: "Rauf",
      Total_Activity: "54",
      Total_Weeks: "29",
      attendance: "9",
    },
    {
      id: 2,
      Name: "Akif",
      Total_Activity: "30",
      Total_Weeks: "44",
      attendance: "19",
    },
    {
      id: 3,
      Name: "Abdullah",
      Total_Activity: "60",
      Total_Weeks: "35",
      attendance: "23",
    },
    {
      id: 4,
      Name: "Farhad",
      Total_Activity: "34",
      Total_Weeks: "32",
      attendance: "40",
    },
    {
      id: 5,
      Name: "Aqsa",
      Total_Activity: "72",
      Total_Weeks: "54",
      attendance: "60",
    },
    {
      id: 6,
      Name: "Misal",
      Total_Activity: "100",
      Total_Weeks: "43",
      attendance: "50",
    },
  ];
  return (
    <div>
      <SearchBar />
      <div className="flex flex-col gap-4 mx-6 mt-4">
        <div className="flex w-full   rounded-xl h-12 bg-white mt-4 px-2 py-2">
          <div className=" flex items-center justify-between gap-1  w-full px-2">
            <p className=" font-poppins font-bold text-[#000000] text-xs">
              Name
            </p>
            <p className="  font-poppins font-bold text-[#000000] text-xs">
              Total Activities
            </p>
            <p className=" font-poppins font-bold text-[#000000] text-xs">
              Total weeks
            </p>
            <p className=" font-poppins font-bold text-[#000000] text-xs">
              Attendance
            </p>
          </div>
        </div>
      </div>
      <div className="flex  flex-col gap-4 mx-6 mt-4">
        {Array.map((item) => (
          <AttendanceCard
            Name={item.Name}
            Total_Activity={item.Total_Activity}
            Total_Weeks={item.Total_Weeks}
            attendance={item.attendance}
          />
        ))}
      </div>
    </div>
  );
};

export default Attendance;
