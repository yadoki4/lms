import React, { useState } from "react";
import "./Landing.css";

const Creativity = () => {
  const [activeBox, setActiveBox] = useState(1);

  const handleButtonClick = (boxNumber) => {
    setActiveBox(boxNumber);
  };

  return (
    <div className="bg-white mt-24">
      <div className="flex justify-center items-center landing gap-8">
        <div className="box1">
          <img
            className="box2"
            src="/assets/shortgirl.svg"
            alt="Short girl"
          ></img>
        </div>
        <div
          className={`flex flex-col gap-3 justify-center items-center box1 ${
            activeBox === 1 ? "visible" : "hidden"
          }`}
        >
          <p className="font-poppins font-semibold text-3xl small text-[#2B2D42] box2">
            <span className="text-[#FB8500]">Ubicraft</span> ile Kodlama
            <br className="hide" /> Macerasına Katılın!
          </p>
          <p className="font-poppins font-normal text-sm text-[#2B2D42] box2">
            “Çocuklar için tasarlanmış,
            <br className="hide" /> interaktif bir platform olan Ubicraft
            <br className="hide" /> kodlama becerilerini öğrenme ve
            <br className="hide" /> yaratıcılığı geliştirme imkanı sunuyor.
            <br className="hide" /> Geleceğin liderlerini şimdiden
            şekillendirmeye başlayın!
          </p>
        </div>
        <div
          className={`flex flex-col gap-3 justify-center items-center box1 ${
            activeBox === 2 ? "visible" : "hidden"
          }`}
        >
          <p className="font-poppins font-semibold text-3xl small text-[#2B2D42] box2">
            <span className="text-[#FB8500]">Hayal </span> Gücünü
            <br className="hide" /> Kodlamayla Birleştirin!
          </p>
          <p className="font-poppins font-normal text-sm text-[#2B2D42] box2">
            “Embark on a journey where
            <br className="hide" /> coding meets creativity, unlocking
            <br className="hide" /> endless possibilities for young
            <br className="hide" /> minds to explore and create.”
          </p>
        </div>
        <div
          className={`flex flex-col gap-3 justify-center items-center box1 ${
            activeBox === 3 ? "visible" : "hidden"
          }`}
        >
          <p className="font-poppins font-semibold text-3xl small text-[#2B2D42] box2">
            Ignite <span className="text-[#FB8500]">Creativity</span> with
            <br className="hide" /> Coding Adventures
          </p>
          <p className="font-poppins font-normal text-sm text-[#2B2D42] box2">
            “Embark on a journey where
            <br className="hide" /> coding meets creativity, unlocking
            <br className="hide" /> endless possibilities for young
            <br className="hide" /> minds to explore and create.”
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 mt-10">
        <button
          className={`rounded-[10px] w-[226px] h-[5px] bg-orange-logo ${
            activeBox === 1 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(1)}
        ></button>
        <button
          className={`rounded-[10px] w-[226px] h-[5px] bg-[#C4C4C4] hover:bg-orange-logo ${
            activeBox === 2 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(2)}
        ></button>
        <button
          className={`rounded-[10px] w-[226px] h-[5px] bg-[#C4C4C4] hover:bg-orange-logo ${
            activeBox === 3 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(3)}
        ></button>
      </div>
    </div>
  );
};

export default Creativity;
