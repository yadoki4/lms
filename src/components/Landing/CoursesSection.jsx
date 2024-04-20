import React from "react";
import { useNavigate } from "react-router-dom";

const CoursesSection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f3f5fe] py-8  mt-16 flex flex-col">
      <div className=" flex   justify-center rounded-lg mt-4  ">
        <p className="font-poppins text-[#2B2D42] font-semibold text-4xl text-center">
          “Yeni nesil öğrenimi  
          <span className="text-[#FB8500]"> Ücretsiz Deneme Dersi </span>ile keşfedin.”
        </p>
      </div>
      <div className="flex flex-wrap justify-between w-11/12  mx-auto rounded-lg mt-10">
        <div className="flex p-10 h-1/2 mt-4   rounded-2xl flex-col bg-orange-1">
          <p className="text-[#5988fe]">YAŞ 5-7</p>
          <div className="flex flex-row justify-between items-center">
            <p>
              Matematik
              <br /> Seviye 2
            </p>
            <img src="/assets/mob.png"></img>
          </div>
          <div className="mt-4">
            <p className="font-poppins text-xs">
              Çocuklar için Erken Matematik Maceralan,
              <br />
              matematik öğrenmeyi keyifli ve eğlenceli
              <br />
              bir deneyim haline getirmek için
              <br />
              tasarlanmış dinamik ve ilgi çekici 9 seviyeli
              <br />
              bir programdir
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <div className="flex flex-row gap-4">
              <p className="bg-white rounded-full w-20 text-center">Mantık</p>
              <p className="bg-white rounded-full w-20 text-center">Geometri</p>
              <p className="bg-white rounded-full w-20 text-center">
                Algoritma
              </p>
            </div>
            <div>
              <p className="bg-white rounded-full w-20 text-center">Sayma</p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
                onClick={() => {
            navigate("/pricing");
          }}
              className="rounded-xl bg-[#5988fe] text-[#FFFFFF] font-poppins font-semibold text-base w-52  h-12
           justify-center items-center px-2 py-2"
            >
              Daha fazla öğrenin
            </button>
          </div>
        </div>

        <div className="flex p-10 h-1/2 mt-4   rounded-2xl flex-col bg-orange-1">
          <p className="text-[#5988fe]">YAŞ 7-8</p>
          <div className="flex flex-row justify-between items-center">
            <p>
              Matematik
              <br /> Seviye 3
            </p>
            <img src="/assets/mob3.png"></img>
          </div>
          <div className="mt-4">
            <p className="font-poppins text-xs">
              Çocuklar için Erken Matematik Maceralan,
              <br />
              matematik öğrenmeyi keyifli ve eğlenceli
              <br />
              bir deneyim haline getirmek için
              <br />
              tasarlanmış dinamik ve ilgi çekici 9 seviyeli
              <br />
              bir programdir
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <div className="flex flex-row gap-4">
              <p className="bg-white rounded-full w-20 text-center">Mantık</p>
              <p className="bg-white rounded-full w-20 text-center">Geometri</p>
              <p className="bg-white rounded-full w-20 text-center">
                Algoritma
              </p>
            </div>
            <div>
              <p className="bg-white rounded-full w-20 text-center">Sayma</p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
                onClick={() => {
            navigate("/pricing");
          }}
              className="rounded-xl bg-[#5988fe] text-[#FFFFFF] font-poppins font-semibold text-base w-52  h-12
           justify-center items-center px-2 py-2"
            >
              Daha fazla öğrenin
            </button>
          </div>
        </div>

        <div className="flex p-10 h-1/2 mt-4   rounded-2xl flex-col bg-orange-1">
          <p className="text-[#5988fe]">YAŞ 8-11</p>
          <div className="flex flex-row justify-between items-center">
            <p>
              Scratch ileÖğretmen Platformu
              <br /> Kodlamanın
              <br /> Büyüsü
            </p>
            <img src="/assets/S.png"></img>
          </div>
          <div className="mt-4">
            <p className="font-poppins text-xs">
              Çocuklar için Erken Matematik Maceralan,
              <br />
              matematik öğrenmeyi keyifli ve eğlenceli
              <br />
              bir deneyim haline getirmek için
              <br />
              tasarlanmış dinamik ve ilgi çekici 9 seviyeli
              <br />
              bir programdir
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <div className="flex flex-row gap-4">
              <p className="bg-white rounded-full w-20 text-center">Mantık</p>
              <p className="bg-white rounded-full w-20 text-center">Geometri</p>
              <p className="bg-white rounded-full w-20 text-center">
                Algoritma
              </p>
            </div>
            <div>
              <p className="bg-white rounded-full w-20 text-center">Sayma</p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
                onClick={() => {
            navigate("/pricing");
          }}
              className="rounded-xl bg-[#5988fe] text-[#FFFFFF] font-poppins font-semibold text-base w-52  h-12
           justify-center items-center px-2 py-2"
            >
              Daha fazla öğrenin
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between  w-11/12 mx-auto   rounded-lg ">
        <div className="flex p-10 h-1/2 mt-4   rounded-2xl flex-col bg-orange-1">
          <p className="text-[#5988fe]">YAŞ 5-7</p>
          <div className="flex flex-row justify-between items-center">
            <p>
              Matematik
              <br /> Seviye 2
            </p>
            <img src="/assets/board.png"></img>
          </div>
          <div className="mt-4">
            <p className="font-poppins text-xs">
              Çocuklar için Erken Matematik Maceralan,
              <br />
              matematik öğrenmeyi keyifli ve eğlenceli
              <br />
              bir deneyim haline getirmek için
              <br />
              tasarlanmış dinamik ve ilgi çekici 9 seviyeli
              <br />
              bir programdir
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <div className="flex flex-row gap-4">
              <p className="bg-white rounded-full w-20 text-center">Mantık</p>
              <p className="bg-white rounded-full w-20 text-center">Geometri</p>
              <p className="bg-white rounded-full w-20 text-center">
                Algoritma
              </p>
            </div>
            <div>
              <p className="bg-white rounded-full w-20 text-center">Sayma</p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
                onClick={() => {
            navigate("/pricing");
          }}
              className="rounded-xl bg-[#5988fe] text-[#FFFFFF] font-poppins font-semibold text-base w-52  h-12
           justify-center items-center px-2 py-2"
            >
              Daha fazla öğrenin
            </button>
          </div>
        </div>

        <div className="flex p-10 h-1/2 mt-4   rounded-2xl flex-col bg-orange-1">
          <p className="text-[#5988fe]">YAŞ 7-8</p>
          <div className="flex flex-row justify-between items-center">
            <p>
              Roblox Oyun
              <br /> Tasarımı
            </p>
            <img src="/assets/R.png"></img>
          </div>
          <div className="mt-4">
            <p className="font-poppins text-xs">
              Çocuklar için Erken Matematik Maceralan,
              <br />
              matematik öğrenmeyi keyifli ve eğlenceli
              <br />
              bir deneyim haline getirmek için
              <br />
              tasarlanmış dinamik ve ilgi çekici 9 seviyeli
              <br />
              bir programdir
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <div className="flex flex-row gap-4">
              <p className="bg-white rounded-full w-20 text-center">Mantık</p>
              <p className="bg-white rounded-full w-20 text-center">Geometri</p>
              <p className="bg-white rounded-full w-20 text-center">
                Algoritma
              </p>
            </div>
            <div>
              <p className="bg-white rounded-full w-20 text-center">Sayma</p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
                onClick={() => {
            navigate("/pricing");
          }}
              className="rounded-xl bg-[#5988fe] text-[#FFFFFF] font-poppins font-semibold text-base w-52  h-12
           justify-center items-center px-2 py-2"
            >
              Daha fazla öğrenin
            </button>
          </div>
        </div>

        <div className="flex p-10 h-1/2 mt-4   rounded-2xl flex-col bg-orange-1">
          <p className="text-[#5988fe]">YAŞ 8-11</p>
          <div className="flex flex-row justify-between items-center">
            <p>Python Start</p>
            <img src="/assets/python.png"></img>
          </div>
          <div className="mt-4">
            <p className="font-poppins text-xs">
              Çocuklar için Erken Matematik Maceralan,
              <br />
              matematik öğrenmeyi keyifli ve eğlenceli
              <br />
              bir deneyim haline getirmek için
              <br />
              tasarlanmış dinamik ve ilgi çekici 9 seviyeli
              <br />
              bir programdir
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <div className="flex flex-row gap-4">
              <p className="bg-white rounded-full w-20 text-center">Mantık</p>
              <p className="bg-white rounded-full w-20 text-center">Geometri</p>
              <p className="bg-white rounded-full w-20 text-center">
                Algoritma
              </p>
            </div>
            <div>
              <p className="bg-white rounded-full w-20 text-center">Sayma</p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
                onClick={() => {
            navigate("/pricing");
          }}
              className="rounded-xl bg-[#5988fe] text-[#FFFFFF] font-poppins font-semibold text-base w-52  h-12
           justify-center items-center px-2 py-2"
            >
              Daha fazla öğrenin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
