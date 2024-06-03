import React from "react";
import Tick from "./pricingImages/tick.png"
import Heroimg from "./pricingImages/Pricingsectwo.png"
import ChooseCard from "../../customComponents/ChooseCard";
import Card1 from "./pricingImages/Card1.png"
import Card2 from "./pricingImages/Card2.png"
import Card3 from "./pricingImages/Card3.png"
import Card4 from "./pricingImages/Card4.png"
import Card5 from "./pricingImages/Card5.png"
const Company = () => {
  return (
    <div className="bg-white mt-10">
      <div className="bg-orange-1 px-10 py-10 flex justify-between">


       <div>
<div className="flex justify-center">
<img className="xl:hidden flex" src={Heroimg} alt="" />

</div>
<div className="flex items-center mt-4">
  <img src={Tick} alt="" />
  <p className="ml-2 font-medium lg:text-3xl">Çocuklara yüksek kaliteli <br className="hidden xl:block" /> kodlama eğitimi sunuyoruz</p>
</div>
<div className="flex items-center mt-4">
  <img src={Tick} alt="" />
  <p className="ml-2 font-medium lg:text-3xl">Teknolojiyi sevdiriyoruz ve yenilikçi düşünceyi <br className="hidden xl:block" /> küçük yaştan itibaren teşvik ediyoruz</p>
</div>
<div className="flex items-center mt-4">
  <img src={Tick} alt="" />
  <p className="ml-2 font-medium lg:text-3xl">Deneyimli eğitmenler ile bu <br className="hidden xl:block" /> deneyimi garantiliyoruz</p>
</div>
<div className="flex items-center mt-4">
  <img src={Tick} alt="" />
  <p className="ml-2 font-medium lg:text-3xl">Etkiileşimli müfredat ile ilgi çekici bir <br className="hidden xl:block" /> öğrenme deneyimi sunuyoruz</p>
</div>
<div className="flex items-center mt-4">
  <img src={Tick} alt="" />
  <p className="ml-2 font-medium lg:text-3xl">Her öğrencinin ihtiyaçlarına özel olarak <br className="hidden xl:block" /> hazırlanmış Ubicraft Platform ile çocuğunuzun <br className="hidden xl:block" /> kariyerini şimdiden şekillendiriyoruz</p>
</div>
<div className=" xl:hidden flex  rounded-lg mt-10 justify-center  items-center">
            <button
              onClick={() => {}}
              className="bg-orange-logo text-sm text-white font-poppins font-bold   rounded-xl w-60 h-11
           justify-center items-center px-2 py-2"
            >
              Ücretsiz deneme dersi
            </button>
          </div>
       </div>
       <div>
<img className="xl:flex hidden" src={Heroimg} alt="" />
<div className=" xl:flex hidden  rounded-lg mt-10 justify-center  items-center">
            <button
              onClick={() => {}}
              className="bg-orange-logo text-sm text-white font-poppins font-bold   rounded-xl w-60 h-11
           justify-center items-center px-2 py-2"
            >
              Ücretsiz deneme dersi
            </button>
          </div>
       </div>
       
      </div>













      
      <div className="mt-24">
        <p className="text-center font-poppins font-medium text-3xl ">
          Neden Bizi Seçmelisiniz?
        </p>
      </div>
      <div className="flex gap-14 flex-col mx-12 mt-10">
        <div className="flex w-11/12 justify-between">
          <ChooseCard
            number={1}
            heading1={"Uzman Öğretmenler:"}
            heading2={
              "Eğitmenlerimiz, çocuklarla iletişim kurma konusunda deneyimli ve alanında uzmandır. Her öğrenciye bireysel ilgi göstererek, her birinin potansiyelini en üst düzeye çıkarmasına yardımcı olurlar.Kurs süresince öğrencinin gelişimini takip etmek adına sizinle sürekli iletişim halinde olacaklar."
            }
          />
          <img className="hidden lg:block" src={Card1} alt="" />
        </div>
        <div className="flex  w-11/12 justify-between">
          <img className="hidden lg:block" src={Card2} alt="" />
          <ChooseCard
            number={2}
            heading1={"Yüksek Etkileşimli Öğrenme Deneyimi:"}
            heading2={
              "Çocuklar için özgün, yüksek etkileşimli bir programlama deneyimi sunuyoruz. Interaktif oyunlar, canlı dersler ve projelerle kodlama becerilerini eğlenceli bir şekilde geliştiriyoruz. Uzmanlarca hazırlanan özelleştirilmiş müfredatımız çocukları desteklemek ve ilgilerini çekmek için tasarlandı."
            }
          />
        </div>
        <div className="flex w-11/12 justify-between">
          <ChooseCard
            number={3}
            heading1={"Gelişim Takibi:"}
            heading2={
              "Kurs süresince öğretmenlerimiz sadece ders esnasında değil her an yanınızda! Her modülde veli geri bildirimleri, her 8 haftada bir veli toplantısı ve özelleştirilmiş ödev takip sistemimiz ile hata payını sıfıra indirin. "
            }
          />
          <img className="hidden lg:block" src={Card3}alt="" />
        </div>
        <div className="flex  w-11/12 justify-between">
          <img className="hidden lg:block" src={Card4} alt="" />
          <ChooseCard
            number={4}
            heading1={"Modern Eğitim Teknolojileri"}
            heading2={
              "Platformumuz, çocukların kodlama öğrenirken ihtiyaçlarını göz önünde bulundurarak herhangi bir programa gerek olmadan, sadece kurs deneyimine odaklanmak amacıyla tasarlanmıştır.Çocuk dostu arayüzümüz ve kolay erişilebilirlik özellikleri ile çocuklar, kendi hızlarında ve istedikleri zaman öğrenme fırsatına sahiptirler"
            }
          />
        </div>
        <div className="flex w-11/12 justify-between">
          <ChooseCard
            number={5}
            heading1={"Esnek Kurs Saatleri:"}
            heading2={
              "Haftanın herhangi bir gününü ve sizin için uygun olan bir saat dilimini seçin ve öğrenme deneyiminize hemen başlayın. Programınızda herhangi bir değişiklik olduğunda, hızlı ve kolay bir şekilde ders gününüzü ve saatinizi değiştirin, böylece öğrenme süreciniz kesintiye uğramadan devam etsin."
            }
          />
          <img  className="hidden lg:block" src={Card5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Company;
