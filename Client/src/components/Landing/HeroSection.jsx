import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url('/assets/hero.svg')` }}
      className="bg-no-repeat bg-cover p-8 lg:p-20"
    >
      <div className="flex flex-col items-start justify-between md:my-20">
        <div className="lg:w-1/2">
          <h1 className="text-2xl lg:text-5xl font-bold text-black-1 font-poppins">
          Çocuğunuzun Yaratıcılığını 
          </h1>
          <h1 className="text-2xl lg:text-5xl font-bold text-orange-logo font-poppins pt-2">
          Kodlayın!
          </h1>
          <button className="mt-12 px-6 md:px-20 py-2 bg-orange-logo text-white font-semibold rounded-2xl shadow-md hover:bg-white hover:text-orange-logo transition-all font-poppins">
          Ücretsiz Deneme Dersi
          </button>
          <p className="text-2xl pt-4 font-bold">8-17 yaş arası çocuklara yarının kapılarını aralayan çevrimiçi  <span className="text-orange-logo">
         platformumuz Ubicraft ile tanışın ve hayallerinizi kodlayın! </span> </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
