import React from "react";

const LessonCard = ({ lesson }) => {
  return (
    <div className="flex w-full gap-3 items-center  rounded-xl bg-white mt-4 px-3 py-3">
      <div className="w-2 h-12 rounded-md bg-orange-logo"></div>
      <div className="justify-center items-center">
        <p className="text-center font-poppins font-bold text-base text-[#2B2D42]">
          Lesson :{lesson}
        </p>
      </div>
    </div>
  );
};

export default LessonCard;
