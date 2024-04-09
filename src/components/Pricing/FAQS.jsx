import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const FAQS = () => {
  const [icon, seticon] = useState(false);
  const [content1, setcontent1] = useState(false);
  const [content2, setcontent2] = useState(false);
  const [content3, setcontent3] = useState(false);
  const [content4, setcontent4] = useState(false);
  return (
    <div className="flex mt-32 flex-col gap-12 justify-center items-center">
      <div>
        <p className="font-poppins font-medium text-[#000000] text-3xl">
          Frequently Asked Questions (FAQs)
        </p>
      </div>

      <div className="flex flex-col w-full md:w-2/3 rounded-[8px] bg-orange-1 px-6 py-8">
        <div className="flex gap-8  justify-between items-center">
          <p className="font-poppins font-medium text-[#2B2D42] text-xl">
            Çocuğumun bilgisayar kullanma becerilerinden tam emin değilim.
            <br /> Acaba çocuğum kodlamaya uygun mu?
          </p>

          <button
            onClick={() => {
              //seticon(!icon);
              setcontent1(!content1);
            }}
            className={`${
              content1 ? "bg-orange-logo text-white" : "bg-white"
            } w-[46px] h-[46px] flex font-poppins font-medium text-[#FB8500]  rounded-full  justify-center items-center `}
          >
            {content1 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </button>
        </div>
        {content1 && (
          <div>
            <p className="font-poppins font-normal text-lg text-[#2B2D42]">
              Ücretsiz deneme dersinden önce çocuğunuzun bilgisayar kullanma
              becerilerinden emin olmak amacıyla bir test gönderiyoruz. Bu
              testte öğrencimiz eğer yeterli puanı alamazsa ücretsiz 1 ders
              bilgisayar kullanımı dersi ve bu yeteneklerini geliştirebilecek
              etkinlikler ve egzersizlerle çocuğunuzun kursa hazır olmasını
              sağlıyoruz.
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col w-full md:w-2/3 rounded-[8px] bg-orange-1 px-6 py-8">
        <div className="flex gap-8  justify-between items-center">
          <p className="font-poppins font-medium text-[#2B2D42] text-xl">
            Ücretsiz deneme dersinde neler yapılıyor?
          </p>

          <button
            onClick={() => {
              //seticon(!icon);
              setcontent2(!content2);
            }}
            className={`${
              content2 ? "bg-orange-logo text-white" : "bg-white"
            } w-[46px] h-[46px] flex font-poppins font-medium text-[#FB8500]  rounded-full  justify-center items-center `}
          >
            {content2 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </button>
        </div>
        {content2 && (
          <div>
            <p className="font-poppins font-normal text-lg text-[#2B2D42]">
              Bu derste öğretmeniniz, platformumuzu tanıtacak ve ardından
              çocuğunuzun ilgi ve yeteneklerini belirlemek için detaylı bir
              analiz yapacak. Okulumuz hakkında daha fazla bilgi edinip, 1
              saatlik gerçek bir ders deneyimi yaşayacaksınız.
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col w-full md:w-2/3 rounded-[8px] bg-orange-1 px-6 py-8">
        <div className="flex gap-8  justify-between items-center">
          <p className="font-poppins font-medium text-[#2B2D42] text-xl">
            Ödeme planlarınız nelerdir?
          </p>

          <button
            onClick={() => {
              //seticon(!icon);
              setcontent3(!content3);
            }}
            className={`${
              content3 ? "bg-orange-logo text-white" : "bg-white"
            } w-[46px] h-[46px] flex font-poppins font-medium text-[#FB8500]  rounded-full  justify-center items-center `}
          >
            {content3 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </button>
        </div>
        {content3 && (
          <div>
            <p className="font-poppins font-normal text-lg text-[#2B2D42]">
              Size özel ödeme planlarını çağrı merkezimizle görüşebilirsiniz. Bu
              konuda beklentilerinizin karşılanacağına kesinlikle emin
              olabilirsiniz.
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col w-full md:w-2/3 rounded-[8px] bg-orange-1 px-6 py-8">
        <div className="flex gap-8  justify-between items-center">
          <p className="font-poppins font-medium text-[#2B2D42] text-xl">
            Kurs deneyiminden memnun kalmazsak para iadesi garantisi var mı?
          </p>

          <button
            onClick={() => {
              //seticon(!icon);
              setcontent4(!content4);
            }}
            className={`${
              content4 ? "bg-orange-logo text-white" : "bg-white"
            } w-[46px] h-[46px] flex font-poppins font-medium text-[#FB8500]  rounded-full  justify-center items-center `}
          >
            {content4 ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </button>
        </div>
        {content4 && (
          <div>
            <p className="font-poppins font-normal text-lg text-[#2B2D42]">
              Öğretmenlerimizin deneyimine, kurs materyallerimize ve
              platformumuza kesinlikle güveniyoruz. Bu nedenle; İlk modül (4
              ders) içinde koşulsuz şartsız para iadesi seçeneği bulunmaktadır.
              Eğer ilk modülden daha sonra kurstan ayrılmayı talep ederseniz,
              öğrencimizin henüz görmediği derslerin tamamının ücretini iade
              ediyoruz.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQS;
