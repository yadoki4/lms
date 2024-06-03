import React from "react";
import KidsImage from "../../customComponents/kidsImage";
import "./Landing.css"
import Card1 from "../Landing/courseimages/card1.png"
import Card2 from "../Landing/courseimages/card2.png"
import Card3 from "../Landing/courseimages/card3.png"
import Card4 from "../Landing/courseimages/card4.png"
import Card5 from "../Landing/courseimages/card5.png"
import Card6 from "../Landing/courseimages/card6.png"
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
          img={Card1}
          heading2="Kursun  17. haftasında bir platform oyunu"
          heading3=" tasarladı."
        />
        <KidsImage
          heading1="Ali Berk - 12 Yaş"
          img={Card2}
          heading2="Kursun 22. Haftasında tasarladığı “Space "
          heading3="Inviders” oyunu"
        />
        <KidsImage
          heading1="Betül - 11 Yaş"
          img={Card3}
          heading2="Mezuniyet projesi için Flappy Bird "
          heading3="oyunundan esinlendi"
        />
      </div>
      <div className="flex kids justify-center  mt-8 gap-6">
        <KidsImage
          heading1="Alp Erdem - 16 Yaş"
          img={Card4}
          heading2="Mezuniyet projesi için Unity kullanarak "
          heading3="3D bir oyun geliştirdi"
        />
        <KidsImage
          heading1="İnci - 14 Yaş"
          img={Card5}
          heading2="Klasik Super Mario oyunundan esinlenerek "
          heading3="oluşturulan bir platform oyunu"
        />
        <KidsImage
          heading1="İlker - 13 Yaş"
          img={Card6}
          heading2="Mezuniyet projesi için bir korku oyunu"
          heading3=" geliştirdi"
        />
      </div>
    </div>
  );
};

export default KidsSection;
