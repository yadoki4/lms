import React from 'react';
import './CoursesSection.css'; 
import Unity from "./courseimages/unity.png"
import Roblox from "./courseimages/roblox.png"
import Python from "./courseimages/p1.png"
import Python2 from "./courseimages/p2.png"

const CoursesSection = () => {
  return (
    <div className="bg-[#f3f5fe] py-8 mt-16 flex flex-col">
      <div className=" flex justify-center rounded-lg mt-4">
        <p className="font-poppins text-[#2B2D42] font-semibold text-4xl ">
          “Yeni nesil kurslarımızı  
          <span className="text-[#FB8500]"> Ücretsiz Deneme Dersi </span>ile keşfedin.”
        </p>
      </div>
      <div className="custom-slider">
        <div className="slider-container">
          <div className="slider">
            {/* Course 1 */}
            <div className="card-container">
              <div className="card flex-col justify-center items-center">
                <img className='mx-auto' src={Unity} alt="Unity" />
                <h3 className='mx-auto text-white w-fit text-lg font-bold   mt-5'>YAŞ 7-8</h3>
                <h3 className='mx-auto text-white w-fit font-semibold text-4xl mt-5'>Unity</h3>
                <h3 className='text-white text-lg font-bold  text-center mt-5'>Küçük lokmalık derslerle (her 3 günde bir) kodlama temellerini öğrenin! Yoğun yazlar için mükemmel, eğlenceli 1,5 saatlik derslerle kodlamaya devam edin ve eğlenin!</h3>
                <div className='w-full justify-center flex mt-5'>
                <button className='text-[#fb8500] bg-white px-4 py-2 mt-16 '>Learn More</button>
                </div>
              </div>
              <div className="card flex-col justify-center items-center hover-card">
                <h3>Additional Content</h3>
                <p>Additional Content Details</p>
              </div>
            </div>
            {/* Course 2 */}
            <div className="card-container">
              <div className="card flex-col justify-center items-center">
                <img className='mx-auto' src={Roblox} alt="Roblox" />
                <h3 className='mx-auto text-white w-fit text-lg font-bold  mt-5 '>YAŞ 7-8</h3>
                <h3 className='mx-auto text-white w-fit font-semibold text-4xl mt-5'>Roblox</h3>
                <h3 className='text-white text-lg font-bold  text-center mt-5'>Küçük lokmalık derslerle (her 3 günde bir) kodlama temellerini öğrenin! Yoğun yazlar için mükemmel, eğlenceli 1,5 saatlik derslerle kodlamaya devam edin ve eğlenin!</h3>
                <div className='w-full justify-center flex mt-5'>
                <button className='text-[#fb8500] bg-white px-4 py-2 mt-12 '>Learn More</button>
                </div>
              </div>
              <div className="card flex-col justify-center items-center hover-card">
                <h3>Additional Content</h3>
                <p>Additional Content Details</p>
              </div>
            </div>
            {/* Course 3 */}
            <div className="card-container">
              <div className="card flex-col justify-center items-center">
                <img className='mx-auto' src={Python} alt="Python Temelli" />
                <h3 className='mx-auto text-white w-fit text-lg font-bold mt-5'>YAŞ 7-8</h3>
                <h3 className='mx-auto text-white w-fit font-semibold text-4xl mt-5'>Python Temelli</h3>
                <h3 className='text-white text-lg font-bold  text-center mt-5'>32 haftalık Python Temelli kursumuzla kodlama temellerinde uzmanlaşın! Önemli veri yapıları, algoritmalar öğrenin ve kendi 2D oyunlarınızı geliştirin. İleri seviye Python ve Unity kurslarına hazırlık sağlar!</h3>
                <div className='w-full justify-center flex mt-5'>
                <button className='text-[#fb8500] bg-white px-4 py-2 mt-8 '>Learn More</button>
                </div>
              </div>
              <div className="card flex-col justify-center items-center hover-card">
                <h3>Additional Content</h3>
                <p>Additional Content Details</p>
              </div>
            </div>
            {/* Course 4 */}
            <div className="card-container">
              <div className="card flex-col justify-center items-center">
                <img className='mx-auto' src={Python2} alt="Python Yaz Okulu" />
                <h3 className='mx-auto text-white w-fit text-lg font-bold   mt-5'>YAŞ 7-8</h3>
                <h3 className='mx-auto text-white w-fit font-semibold text-4xl mt-5'>Python Yaz Okulu</h3>
                <h3 className='text-white text-lg font-bold  text-center mt-5'>Python Basic müfredatının tamamını sadece 1 yaz tatilinde öğrenin. Dersler 3 günde bir gerçekleşir. Yaz tatilini fırsata dönüştürmek isteyenler için mükemmeldir. 1.5 saatlik derslerle kodlamaya devam edin ve eğlenin.</h3>
                <div className='w-full justify-center flex mt-5'>
                <button className='text-[#fb8500] bg-white px-4 py-2 mt-6 '>Learn More</button>
                </div>
              </div>
              <div className="card flex-col justify-center items-center hover-card">
                <h3>Additional Content</h3>
                <p>Additional Content Details</p>
              </div>
            </div>
            {/* Course 5 */}
            <div className="card-container">
              <div className="card flex-col justify-center items-center">
                <img className='mx-auto' src={Python} alt="Python Profesyonel" />
                <h3 className='mx-auto text-white w-fit text-lg font-bold   mt-5'>YAŞ 7-8</h3>
                <h3 className='mx-auto text-white w-fit font-semibold text-4xl mt-5'>Python Profesyonel</h3>
                <h3 className='text-white text-lg font-bold  text-center mt-5'>Python unuzu bir üst seviyeye taşıyın! OOP, NumPy & Pandas ile veri analizi, otomasyon gibi gelişmiş konseptlerde uzmanlaşın. Etkileyici projeler oluşturun ve kariyer fırsatlarını keşfedin. Deneyimli kodlayıcılar ve geleceğin geliştiricileri için idealdir.</h3>
                <div className='w-full justify-center flex mt-5'>
                <button className='text-[#fb8500] bg-white px-4 py-2  '>Learn More</button>
                </div>
              </div>
              <div className="card flex-col justify-center items-center hover-card">
                <h3>Additional Content</h3>
                <p>Additional Content Details</p>
              </div>
            </div>
            {/* Course 6 */}
            <div className="card-container">
              <div className="card flex-col justify-center items-center">
                <img className='mx-auto' src={Python} alt="Python Basic" />
                <h3 className='mx-auto text-white w-fit text-lg font-bold  mt-5'>YAŞ 7-8</h3>
                <h3 className='mx-auto text-white w-fit font-semibold text-4xl mt-5'>Python Basic</h3>
                <h3 className='text-white text-lg font-bold  text-center mt-5'>32 haftalık Python Temel kursumuzda kodlamanın temellerinde ustalaşın! Önemli veri yapılarını, algoritmaları öğrenin ve 2D oyunlar oluşturun. Sizi ileri düzey Python ve Unity ye hazırlar!</h3>
                <div className='w-full justify-center flex mt-5'>
                <button className='text-[#fb8500] bg-white px-4 py-2 mt-14 '>Learn More</button>
                </div>
              </div>
              <div className="card flex-col justify-center items-center hover-card">
                <h3>Additional Content</h3>
                <p>Additional Content Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
