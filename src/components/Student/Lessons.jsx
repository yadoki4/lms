import React from "react";
import LessonCard from "../../customComponents/LessonCard";

const Lessons = () => {
  const Array = [
    {
      id: 1,
      lesson: "Introduction to Python",
    },
    {
      id: 2,
      lesson: "Functions and Modules ",
    },
    {
      id: 3,
      lesson: "Data Structures Part 1",
    },
    {
      id: 4,
      lesson: "Data Structures Part 2",
    },
    {
      id: 5,
      lesson: "File Handling and Exception Handling",
    },
    {
      id: 6,
      lesson: "Intermediate Topics",
    },
    {
      id: 7,
      lesson: "Project Development Part 1",
    },
  ];
  return (
    <div className="mx-14">
      <div className="flex gap-6 w-full   rounded-xl bg-white mt-4 px-3 py-3">
        <div className="justify-center items-center">
          <img src="/assets/lesson.svg"></img>
        </div>
        <div className="justify-center items-center ">
          <p className="text-center font-poppins font-bold text-[#000000] text-3xl">
            Lessons
          </p>
        </div>
      </div>
      <div className="flex  flex-col ">
        {Array.map((item) => (
          <LessonCard lesson={item.lesson} />
        ))}
      </div>
    </div>
  );
};

export default Lessons;
