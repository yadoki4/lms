import React from "react";

const Experience = () => {
  return (
    <div className="bg-white justify-center items-center mt-14 flex flex-col gap-4 ">
     
      <div className=" flex  bg-white rounded-lg mt-4  ">
        <p className="text-center text-[#2B2D42] font-poppins font-medium text-xl">
          Embark on an exhilarating coding adventure with our complimentary
          trial <br />
          lesson. Delve into interactive activities that ignite curiosity and
          unlock your <br />
          child's limitless potential in just one session
        </p>
      </div>
      <div className=" flex boxes3 gap-3 justify-center rounded-lg mt-14  ">
        <div className="flex w-72 flex-1 flex-col gap-6 bg-orange-logo px-8 py-12 rounded-xl">
          <div className="flex justify-center items-center bg-[#dedede] self-center w-12 rounded-full h-12  text-2xl ">
            1
          </div>
          <div>
            <p className="text-center font-poppins text-[#FFFFFF]   font-semibold text-lg">
            Sizi neler bekliyor?
            </p>
          </div>
          <div>
            <p className="text-center font-poppins text-[#FFFFFF]   font-normal text-base">
            Dilediğiniz kursun ilk<br />  dersini birebir deneyimleyin.<br />  Yeni nesil öğretim platformumuzu <br /> keşfedin. Dersin sonunda <br /> öğretmenimiz ile birlikte kurs<br />  sürecini planlayın.
              
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col  px-8 py-12 small  justify-center items-center">
          <div className="bg-orange-logo flex flex-col gap-6 px-16 rounded-2xl py-8">
          <div className="flex justify-center items-center bg-[#dedede] self-center w-12 rounded-full h-12  text-2xl ">
            2
          </div>
            <div>
              <p className="text-center font-poppins text-[#FFFFFF]   font-semibold text-lg">
              Ders
              </p>
            </div>
            <div>
              <p className="text-center font-poppins text-[#FFFFFF]   font-normal text-xs">
              Ders 1 saat <br /> sürecektir.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6 bg-orange-logo px-8  py-12 rounded-xl">
        <div className="flex justify-center items-center bg-[#dedede] self-center w-12 rounded-full h-12  text-2xl ">
            3
          </div>
          <div>
            <p className="text-center font-poppins text-[#FFFFFF]   font-semibold text-lg">
            Deneme Dersinin Faydaları nelerdir?
            </p>
          </div>
          <div>
            <p className="text-center font-poppins text-[#FFFFFF]   font-normal text-base">
            Öğrencimizin kursa adaptasyon <br /> sürecini hızlandırın.<br /> Gerçek kurs deneyiminin<br /> ilk dersine hazır hale<br /> gelin. Aklınızdaki soru <br />işaretlerini ortadan kaldırın.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
