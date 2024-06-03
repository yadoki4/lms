import React from "react";

const Experience = () => {
  return (
    <div className="bg-white justify-center items-center mt-14 flex flex-col gap-4 ">
     
      <div className=" flex  bg-white rounded-lg mt-4  ">
        <p className="text-center text-[#2B2D42] font-poppins font-medium  lg:text-xl">
        <span className="text-[#FB8500]"> Ücretsiz deneme dersimizle </span> heyecan verici bir kodlama macerasına başlayın. Uzman bir <br className="hidden lg:block" />
öğretmenimiz eşliğinde <span className="text-[#FB8500]"> Ubicraft </span> platformunu deneyimleyin ve sadece bir oturumda<br className="hidden lg:block"r />
çocuğunuzun<span className="text-[#FB8500]"> sınırsız  </span> potansiyelini ortaya çıkarın.
        </p>
      </div>
      <div className=" flex boxes3 gap-3 justify-center rounded-lg mt-14  ">
        <div className="flex flex-1 flex-col gap-6 bg-orange-logo px-8 py-12 rounded-xl">
          <div className="flex justify-center items-center text-white self-center  text-5xl font-bold ">
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

        <div className="flex flex-1 flex-col gap-6 bg-orange-logo px-8  py-12 rounded-xl">
        <div className="flex justify-center items-center text-white self-center  text-5xl font-bold ">
            2
          </div>
          <div>
            <p className="text-center font-poppins text-[#FFFFFF]   font-semibold text-lg">
            Ders İçeriği                               
            </p>
          </div>
          <div>
            <p className="text-center font-poppins text-[#FFFFFF]   font-normal text-base">
            1 saatlik ders süresinde, <br />  öğrencinin ilk haftanın<br /> etkinliklerini<br /> öğretmen eşliğinde<br /> tamamlaması amaçlanır ve<br /> öğrencinin seviyesi tespit<br /> edilir.

            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6 bg-orange-logo px-8  py-12 rounded-xl">
        <div className="flex justify-center items-center text-white self-center  text-5xl font-bold ">
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
