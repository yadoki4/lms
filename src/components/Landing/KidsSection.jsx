import React from "react";
import KidsImage from "../../customComponents/kidsImage";
import "./Landing.css"

const KidsSection = () => {
  return (
    <div className="bg-white  mt-14 flex flex-col gap-4 ">
      <div className=" flex justify-center items-center   bg-white rounded-lg mt-4  ">
        <p className="font-poppins text-[#2B2D42] font-semibold text-4xl text-center">
        Öğrencilerimizin kodlama çalışmaları
        </p>
      </div>
      <div className="flex kids  justify-center gap-6 mt-6 ">
        <KidsImage
          heading1="Sarah-10 years old"
          img="/assets/kidsimg1.svg"
          heading2="Sarah, age 10, crafts a maze-rescue game."
          heading3="Her coding brilliance shines"
        />
        <KidsImage
          heading1="Sarah-10 years old"
          img="/assets/kidsimg2.svg"
          heading2="Sarah, age 10, crafts a maze-rescue game."
          heading3="Her coding brilliance shines"
        />
        <KidsImage
          heading1="Sarah-10 years old"
          img="/assets/kidsimg1.svg"
          heading2="Sarah, age 10, crafts a maze-rescue game."
          heading3="Her coding brilliance shines"
        />
      </div>
      <div className="flex kids justify-center  mt-8 gap-6">
        <KidsImage
          heading1="Sarah-10 years old"
          img="/assets/kidsimg1.svg"
          heading2="Sarah, age 10, crafts a maze-rescue game."
          heading3="Her coding brilliance shines"
        />
        <KidsImage
          heading1="Sarah-10 years old"
          img="/assets/kidsimg2.svg"
          heading2="Sarah, age 10, crafts a maze-rescue game."
          heading3="Her coding brilliance shines"
        />
        <KidsImage
          heading1="Sarah-10 years old"
          img="/assets/kidsimg1.svg"
          heading2="Sarah, age 10, crafts a maze-rescue game."
          heading3="Her coding brilliance shines"
        />
      </div>
    </div>
  );
};

export default KidsSection;
