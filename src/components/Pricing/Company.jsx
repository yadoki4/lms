import React from "react";

import ChooseCard from "../../customComponents/ChooseCard";
const Company = () => {
  return (
    <div className="bg-white mt-10">
      <div className="bg-orange-1 px-10 py-10">
        <div className="justify-center items-center mx-8">
          <p className="text-center font-poppins  font-medium text-[#2B2D42] sm:text-3xl">
            Şirketimiz, çocuklara yüksek kaliteli kodlama eğitimi sağlamaya,
            teknoloji ve yenilikçiliğe olan sevgiyi erken yaşlardan itibaren
            teşvik etmeye kendini adamıştır. Deneyimli eğitmenlerimiz ve
            etkileşimli müfredatımız her öğrenci için ilgi çekici bir öğrenme
            deneyimi sağlar."
          </p>
        </div>
        <div>
          <div className=" flex  rounded-lg mt-10 justify-center  items-center">
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
      <div></div>
      <div className="mt-24">
        <p className="text-center font-poppins font-medium text-3xl ">
          Neden Bizi Seçmelisiniz?
        </p>
      </div>
      <div className="flex gap-14 flex-col mx-12 mt-10">
        <div className="flex">
          <ChooseCard
            number={1}
            heading1={"Uzman Öğretmenler:"}
            heading2={
              "Eğitmenlerimiz, çocuklarla iletişim kurma konusunda deneyimli ve alanında uzmandır. Her öğrenciye bireysel ilgi göstererek, her birinin potansiyelini en üst düzeye çıkarmasına yardımcı olurlar.Kurs süresince öğrencinin gelişimini takip etmek adına sizinle sürekli iletişim halinde olacaklar."
            }
          />
        </div>
        <div className="flex  items-end justify-end">
          <ChooseCard
            number={2}
            heading1={"Yüksek Etkileşimli Öğrenme Deneyimi:"}
            heading2={
              "Çocuklar için özgün, yüksek etkileşimli bir programlama deneyimi sunuyoruz. Interaktif oyunlar, canlı dersler ve projelerle kodlama becerilerini eğlenceli bir şekilde geliştiriyoruz. Uzmanlarca hazırlanan özelleştirilmiş müfredatımız çocukları desteklemek ve ilgilerini çekmek için tasarlandı."
            }
          />
        </div>
        <div className="flex">
          <ChooseCard
            number={3}
            heading1={"Gelişim Takibi:"}
            heading2={
              "Kurs süresince öğretmenlerimiz sadece ders esnasında değil her an yanınızda! Her modülde veli geri bildirimleri, her 8 haftada bir veli toplantısı ve özelleştirilmiş ödev takip sistemimiz ile hata payını sıfıra indirin. "
            }
          />
        </div>
        <div className="flex  items-end justify-end">
          <ChooseCard
            number={4}
            heading1={"Modern Eğitim Teknolojileri"}
            heading2={
              "Platformumuz, çocukların kodlama öğrenirken ihtiyaçlarını göz önünde bulundurarak herhangi bir programa gerek olmadan, sadece kurs deneyimine odaklanmak amacıyla tasarlanmıştır.Çocuk dostu arayüzümüz ve kolay erişilebilirlik özellikleri ile çocuklar, kendi hızlarında ve istedikleri zaman öğrenme fırsatına sahiptirler"
            }
          />
        </div>
        <div className="flex">
          <ChooseCard
            number={5}
            heading1={"Esnek Kurs Saatleri:"}
            heading2={
              "Haftanın herhangi bir gününü ve sizin için uygun olan bir saat dilimini seçin ve öğrenme deneyiminize hemen başlayın. Programınızda herhangi bir değişiklik olduğunda, hızlı ve kolay bir şekilde ders gününüzü ve saatinizi değiştirin, böylece öğrenme süreciniz kesintiye uğramadan devam etsin."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
