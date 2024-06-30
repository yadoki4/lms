import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shared } from "../../shared";
import "./Pricing.css";

const Pricing = () => {
  const [pricingData, setPricingData] = useState([]);
  const navigate = useNavigate();

  async function getPricingData() {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const response = await fetch(
        Shared.apiurl + "/api/plans",
        requestOptions
      );
      const result = await response.json();
      setPricingData(result);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  useEffect(() => {
    getPricingData();
  }, []);

  return (
    <div className="mt-8">
      <div className="flex justify-center items-center">
        <p className="font-poppins font-semibold text-3xl text-[#FB8500]">
          Fiyatlandırma
        </p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <p className="text-center text-[#2B2D42] font-poppins font-normal sm:text-3xl">
          Her adımda yaratıcılığa ve eleştirel düşünceye ilham vermek üzere
          tasarlanan özel kodlama kurslarımızla çocuğunuzun geleceğine şimdiden
          yatırım yapın
        </p>
      </div>
      <div className="ParentCard flex gap-10 px-10 py-8 mt-8 mx-8 justify-center items-center">
        {pricingData.length > 0 && (
          <>
            <div className="Cards w-1/4 h-2/5 px-6 py-4 bg-orange-1 rounded-[20px]">
              <div className="flex flex-col gap-10">
                <div>
                  <p className="font-poppins font-bold text-2xl text-[#2B2D42]">
                    {pricingData[0].title}
                  </p>
                  <p className="w-[22px] h-[2px] bg-orange-logo mt-1"></p>
                </div>
                <div className="flex flex-col justify-center items-center mt-8">
                  <p className="font-poppins font-semibold text-3xl text-[#2B2D42]">
                    {pricingData[0].price} TL / Ders
                  </p>
                  <p className="font-poppins font-normal text-xl text-[#747474]">
                    Güçlü Başlangıç
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <div>
                  <p className="font-poppins font-semibold text-sm text-[#2B2D42]">
                    Sizi neler bekliyor?
                  </p>
                </div>
                <div>
                  <p className="font-poppins font-normal text-[#2B2D42] text-xs">
                    {pricingData[0].description}
                  </p>
                </div>
                <div className=" flex  rounded-lg mt-10 justify-center  items-center">
                  <button
                    onClick={() => {
                      navigate("/#registration");
                    }}
                    className="bg-orange-logo text-white font-Sans font-medium   rounded-xl w-60 h-11 justify-center items-center px-2 py-2"
                  >
                    Şimdi Kaydolun
                  </button>
                </div>
              </div>
            </div>
            <div className="Cards MarCard w-1/4 h-2/5 mt-[90px] px-6 py-4 bg-orange-logo rounded-[20px]">
              <div className="flex flex-col gap-10">
                <div>
                  <p className="font-poppins font-bold text-2xl text-white">
                    {pricingData[1].title}
                  </p>
                  <p className="w-[22px] h-[2px] bg-white mt-1"></p>
                </div>
                <div className="flex flex-col justify-center items-center mt-8">
                  <p className="font-poppins font-semibold text-3xl text-white">
                    {pricingData[1].price} TL / Ders
                  </p>
                  <p className="font-poppins font-normal text-xl text-white">
                    Güçlü Başlangıç
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <div>
                  <p className="font-poppins font-semibold text-sm text-white">
                    Sizi neler bekliyor?
                  </p>
                </div>
                <div>
                  <p className="font-poppins font-normal text-white text-xs">
                    {pricingData[1].description}
                  </p>
                </div>
                <div className=" flex  rounded-lg mt-10 justify-center  items-center">
                  <button
                    onClick={() => {
                      navigate("/#registration");
                    }}
                    className="bg-white text-[#2B2D42] font-Sans font-medium rounded-xl w-60 h-11 justify-center items-center px-2 py-2"
                  >
                    Şimdi Kaydolun
                  </button>
                </div>
              </div>
            </div>
            <div className="Card2 w-1/4 h-2/5 px-6 py-4 bg-orange-1 rounded-[20px]">
              <div className="flex flex-col gap-10">
                <div>
                  <p className="font-poppins font-bold text-2xl text-[#2B2D42]">
                    {pricingData[2].title}
                  </p>
                  <p className="w-[22px] h-[2px] bg-orange-logo mt-1"></p>
                </div>
                <div className="flex flex-col justify-center items-center mt-8">
                  <p className="font-poppins font-semibold text-3xl text-[#2B2D42]">
                    {pricingData[2].price} TL / Ders
                  </p>
                  <p className="font-poppins font-normal text-xl text-[#747474]">
                    Güçlü Başlangıç
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <div>
                  <p className="font-poppins font-semibold text-sm text-[#2B2D42]">
                    Sizi neler bekliyor?
                  </p>
                </div>
                <div>
                  <p className="font-poppins font-normal text-[#2B2D42] text-xs">
                    {pricingData[2].description}
                  </p>
                </div>
                <div className=" flex  rounded-lg mt-10 justify-center  items-center">
                  <button
                    onClick={() => {
                      navigate("/#registration");
                    }}
                    className="bg-orange-logo text-white font-Sans font-medium rounded-xl w-60 h-11 justify-center items-center px-2 py-2"
                  >
                    Şimdi Kaydolun
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Pricing;
