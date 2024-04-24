import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pricing.css";
const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-8">
      <div className="flex justify-center items-center">
        <p className="font-poppins font-semibold text-3xl text-[#FB8500]">
          Fiyatlandırma
        </p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <p className="text-center text-[#2B2D42]font-poppins font-normal sm:text-3xl">
          Her adımda yaratıcılığa ve eleştirel düşünceye ilham vermek üzere
          tasarlanan özel kodlama kurslarımızla çocuğunuzun geleceğine şimdiden
          yatırım yapın
        </p>
      </div>
      <div className="ParentCard flex gap-10 px-10 py-8 mt-8 mx-8 justify-center items-center">
        <div className="Cards w-1/4 h-2/5 px-6 py-4 bg-orange-1 rounded-[20px]">
          <div className="flex flex-col gap-10">
            <div>
              <p className="font-poppins font-bold text-2xl text-[#2B2D42]">
                Güçlü Başlangıç
              </p>
              <p className="w-[22px] h-[2px] bg-orange-logo mt-1"></p>
            </div>

            <div className="flex flex-col justify-center items-center mt-8">
              <p className="font-poppins font-semibold text-4xl text-[#2B2D42]">
                343 TL / Ders
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
                Kurs içeriğinin yarısını sunan giriş paketimizle başlayın
              </p>
            </div>
            <div className=" flex  rounded-lg mt-10 justify-center  items-center">
              <button
                onClick={() => {navigate("/#registration");}}
                className="bg-orange-logo text-white font-Sans font-medium   rounded-xl w-60 h-11
           justify-center items-center px-2 py-2"
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
                Klasik
              </p>
              <p className="w-[22px] h-[2px] bg-white mt-1"></p>
            </div>

            <div className="flex flex-col justify-center items-center mt-8">
              <p className="font-poppins font-semibold text-4xl text-white">
                311 TL / Ders
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
                Tüm kurs müfredatına erişim sağlayan klasik paketimizle
                öğrenmeye derinlemesine dalın değiştir
              </p>
            </div>
            <div className=" flex  rounded-lg mt-10 justify-center  items-center">
              <button
                onClick={() => {navigate("/#registration");}}
                className="bg-white text-[#2B2D42] font-Sans font-medium   rounded-xl w-60 h-11
           justify-center items-center px-2 py-2"
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
                Yıldız Yazılımcı
              </p>
              <p className="w-[22px] h-[2px] bg-orange-logo mt-1"></p>
            </div>

            <div className="flex flex-col justify-center items-center mt-8">
              <p className="font-poppins font-semibold text-4xl text-[#2B2D42]">
                280 TL / Ders
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
                Tam potansiyelinizi gerçekleştirmek için premium paketimizle,
                kapsamlı öğrenme için 64 ders (2 kurs) sunuyoruz.
              </p>
            </div>
            <div className=" flex  rounded-lg mt-10 justify-center  items-center">
              <button
                onClick={() => {navigate("/#registration");}}
                className="bg-orange-logo text-white font-Sans font-medium   rounded-xl w-60 h-11
           justify-center items-center px-2 py-2"
              >
                Şimdi Kaydolun
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Card3 hidden w-1/4 h-2/5 px-6 py-4 bg-orange-1 rounded-[20px]">
        <div className="flex flex-col gap-10">
          <div>
            <p className="font-poppins font-bold text-2xl text-[#2B2D42]">
              Star Developer
            </p>
            <p className="w-[22px] h-[2px] bg-orange-logo mt-1"></p>
          </div>

          <div className="flex flex-col justify-center items-center mt-8">
            <p className="font-poppins font-semibold text-4xl text-[#2B2D42]">
              280 TL / Ders
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
              Unlock your full potential with our <br />
              premium package, featuring 64 lessons
              <br /> for comprehensive learning
            </p>
          </div>
          <div className=" flex  rounded-lg mt-10 justify-center  items-center">
            <button
              onClick={() => {navigate("/#registration");}}
              className="bg-orange-logo text-white font-Sans font-medium   rounded-xl w-60 h-11
           justify-center items-center px-2 py-2"
            >
              Şimdi Kaydolun
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
