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
          heading1="Akif - 10 Yaş"
          img="/assets/card1.png"
          heading2="Kursun  17. haftasında bir platform oyunu"
          heading3=" tasarladı."
        />
        <KidsImage
          heading1="Ali Berk - 12 Yaş"
          img="/assets/card2.png"
          heading2="Kursun 22. Haftasında tasarladığı “Space "
          heading3="Inviders” oyunu"
        />
        <KidsImage
          heading1="Betül - 11 Yaş"
          img="/assets/card3.png"
          heading2="Mezuniyet projesi için Flappy Bird "
          heading3="oyunundan esinlendi"
        />
      </div>
      <div className="flex kids justify-center  mt-8 gap-6">
        <KidsImage
          heading1="Alp Erdem - 16 Yaş"
          img="/assets/card4.png"
          heading2="Mezuniyet projesi için Unity kullanarak "
          heading3="3D bir oyun geliştirdi"
        />
        <KidsImage
          heading1="İnci - 14 Yaş"
          img="/assets/card5.png"
          heading2="Klasik Super Mario oyunundan esinlenerek "
          heading3="oluşturulan bir platform oyunu"
        />
        <KidsImage
          heading1="İlker - 13 Yaş"
          img="/assets/card6.png"
          heading2="Mezuniyet projesi için bir korku oyunu"
          heading3=" geliştirdi"
        />
      </div>
    </div>
  );
};

export default KidsSection;
