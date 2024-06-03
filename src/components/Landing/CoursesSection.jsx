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
            <div className="card-container ">
              <div className="card flex-col justify-center items-center">
                <img className='mx-auto' src={Unity} alt="Unity" />
                <h3 className='mx-auto text-white w-fit text-lg font-bold   mt-5'>YAŞ 7-8</h3>
                <h3 className='mx-auto text-white w-fit font-semibold text-4xl mt-5'>Unity</h3>
                <h3 className='text-white xl:text-lg text-sm font-bold  text-center mt-5'>Yaratıcılığınızı ve hayal gücünüzü kullanarak benzersiz oyunlar oluşturun. C# programlama dilini öğrenin."</h3>
                <div className='w-full justify-center flex mt-5'>
                <button className='text-[#fb8500] bg-white px-4 mb-8 xl:mb-0 py-2 mt-28 '>Learn More</button>
                </div>
              </div>
              <div className="card flex-col justify-center items-center hover-card">
                <h2 className='text-[#fb8500] font-semibold text-4xl my-3'>Unity</h2>
                <h2 className='font-bold text-2xl  my-5'>Kurs süresi:  32 Hafta</h2>
                <p className='font-normal text-lg  my-5'><span className='font-bold text-2xl'>Müfredat:</span>  C# yazılım diline giriş, 2D ve <br /> 3D oyun tasarımları, temel seviye <br /> modelleme</p>
                <p className='font-normal text-lg  my-5'><span className='font-bold text-2xl'>Seviye: </span> Başlangıç</p>
                <div className='flex justify-between  my-5 flex-wrap'>
                  <button className='bg-white p-3 rounded-2xl '>C#</button>
                  <button className='bg-white p-3 rounded-2xl '>Oyun Geliştirme</button>
                  <button className='bg-white p-3 rounded-2xl '>2D Oyun</button>
                  <button className='bg-white p-3 rounded-2xl '>3D</button>
                </div>
<div className='flex justify-center items-center'>
<button className='bg-[#fb8500] py-4 px-7 text-white rounded-2xl mt-9'>Planlarımızı Keşfedin</button>

</div>
              </div>
            </div>
            <div className="card-container">
              <div className="card flex-col justify-center items-center">
                <img className='mx-auto' src={Roblox} alt="Roblox" />
                <h3 className='mx-auto text-white w-fit text-lg font-bold  mt-5 '>YAŞ 7-8</h3>
                <h3 className='mx-auto text-white w-fit font-semibold text-4xl mt-5'>Roblox</h3>
                <h3 className='text-white xl:text-lg text-sm font-bold  text-center mt-5'>Roblox'un heyecan verici evreninin bir parçası olun! Oyunlar, haritalar ve oyun içi ögeler tasarlayın ve sınırsız hayal gücüyle yaratın. En sevdiğiniz oyunu nasıl paraya dönüştüreceğinizi öğrenin."</h3>
                <div className='w-full justify-center flex mt-5'>
                <button className='text-[#fb8500] bg-white px-4 py-2 mt-10 '>Learn More</button>
                </div>
              </div>
              <div className="card flex-col justify-center items-center hover-card">
              <h2 className='text-[#fb8500] font-semibold text-4xl my-3'>Roblox</h2>
                <h2 className='font-bold text-2xl  my-5'>Kurs süresi:  32 Hafta</h2>
                <p className='font-normal text-lg  my-5'><span className='font-bold text-2xl'>Müfredat:</span>  Roblox Studio ile oyunlar ve <br /> oyun içi 3D öğelerin tasarımlarını<br /> oluşturma</p>
                <p className='font-normal text-lg  my-5'><span className='font-bold text-2xl'>Seviye: </span> Başlangıç</p>
                <div className='flex justify-between  my-5 '>
                  <button className='bg-white p-3 rounded-2xl ml-2 '>Hayal Gücü</button>
                  <button className='bg-white p-3 rounded-2xl ml-2 '>Oyun Tasarımı</button>
                  <button className='bg-white p-3 rounded-2xl ml-2'>3D Modelleme</button>
                </div>
<div className='flex justify-center items-center'>
<button className='bg-[#fb8500] py-4 px-7 text-white rounded-2xl mt-9'>Planlarımızı Keşfedin</button>

</div>
              </div>
            </div>
            <div className="card-container">
              <div className="card flex-col justify-center items-center">
                <img className='mx-auto' src={Python} alt="Python Temelli" />
                <h3 className='mx-auto text-white w-fit text-lg font-bold mt-5'>YAŞ 7-8</h3>
                <h3 className='mx-auto text-white w-fit font-semibold text-4xl mt-5'>Python Start</h3>
                <h3 className='text-white xl:text-lg text-sm font-bold  text-center mt-5'>3Python'ın gücüyle tanışın, temellerini öğrenin. Uzman öğretmenler eşliğinde çizimler ve 2D oyunlar ile kodlama sanatını keşfedin! </h3>
                <div className='w-full justify-center flex mt-5'>
                <button className='text-[#fb8500] bg-white px-4 py-2 mt-20 '>Learn More</button>
                </div>
              </div>
              <div className="card flex-col justify-center items-center hover-card">
              <h2 className='text-[#fb8500] font-semibold text-4xl my-3'>Python Start</h2>
                <h2 className='font-bold text-2xl  my-5'>Kurs süresi:  32 Hafta</h2>
                <p className='font-normal text-lg  my-5'><span className='font-bold text-2xl'>Müfredat:</span>  Python temellerine giriş, temel syntax, kodlama yardımıya çizimler, 2D oyun geliştirme</p>
                <p className='font-normal text-lg  my-5'><span className='font-bold text-2xl'>Seviye: </span> Başlangıç</p>
                <div className='flex justify-between  my-5 flex-wrap'>
                  <button className='bg-white p-3 rounded-2xl '>Algoritma</button>
                  <button className='bg-white p-3 rounded-2xl '>Kodlama</button>
                  <button className='bg-white p-3 rounded-2xl '>2D Oyunlar</button>
                  <button className='bg-white p-3 rounded-2xl mt-3 '>Çizimler</button>
                </div>
<div className='flex justify-center items-center'>
<button className='bg-[#fb8500] py-4 px-7 text-white rounded-2xl mt-9'>Planlarımızı Keşfedin</button>

</div>
              </div>
            </div>
            <div className="card-container">
              <div className="card flex-col justify-center items-center">
                <img className='mx-auto' src={Python2} alt="Python Yaz Okulu" />
                <h3 className='mx-auto text-white w-fit text-lg font-bold   mt-5'>YAŞ 7-8</h3>
                <h3 className='mx-auto text-white w-fit font-semibold text-4xl mt-5'>Python Yaz Okulu</h3>
                <h3 className='text-white xl:text-lg text-sm font-bold  text-center mt-5'>Python temellerine giriş, temel syntax, kodlama yardımıya çizimler, 2D oyun geliştirme.</h3>
                <div className='w-full justify-center flex mt-5'>
                <button className='text-[#fb8500] bg-white px-4 py-2 mt-[100px] '>Learn More</button>
                </div>
              </div>
              <div className="card flex-col justify-center items-center hover-card">
              <h2 className='text-[#fb8500] font-semibold text-4xl my-3'>Python Yaz Okulu</h2>
                <h2 className='font-bold text-2xl  my-5'>Kurs süresi:  32 Ders 3 Ay</h2>
                <p className='font-normal text-lg  my-5'><span className='font-bold text-2xl'>Müfredat:</span>  C# yazılım diline giriş, 2D ve <br /> 3D oyun tasarımları, temel seviye <br /> modelleme</p>
                <p className='font-normal text-lg  my-5'><span className='font-bold text-2xl'>Seviye: </span> Başlangıç</p>
                <div className='flex justify-between  my-5 flex-wrap'>
                <button className='bg-white p-3 rounded-2xl '>Algoritma</button>
                  <button className='bg-white p-3 rounded-2xl '>Kodlama</button>
                  <button className='bg-white p-3 rounded-2xl '>2D Oyunlar</button>
                  <button className='bg-white p-3 rounded-2xl mt-3 '>Çizimler</button> 
                </div>
<div className='flex justify-center items-center'>
<button className='bg-[#fb8500] py-4 px-7 text-white rounded-2xl mt-9'>Planlarımızı Keşfedin</button>

</div>
              </div>
            </div>
            <div className="card-container">
              <div className="card flex-col justify-center items-center">
                <img className='mx-auto' src={Python} alt="Python Profesyonel" />
                <h3 className='mx-auto text-white w-fit text-lg font-bold   mt-5'>YAŞ 7-8</h3>
                <h3 className='mx-auto text-white w-fit font-semibold text-4xl mt-5'>Python PRO</h3>
                <h3 className='text-white xl:text-lg text-sm font-bold  text-center mt-5'>Python deneyiminizi bir üst seviyeye taşıyın.  Etkileyici projeler oluşturun ve bunları CV'nize ekleyerek erkenden kariyer fırsatlarını keşfedin. Geleceğin yıldızları için idealdir.</h3>
                <div className='w-full justify-center flex mt-5'>
                <button className='text-[#fb8500] bg-white px-4 py-2  mt-12 '>Learn More</button>
                </div>
              </div>
              <div className="card flex-col justify-center items-center hover-card">
              <h2 className='text-[#fb8500] font-semibold text-4xl my-3'>Python Pro</h2>
                <h2 className='font-bold text-2xl  my-5'>Kurs süresi:  32 Ders</h2>
                <p className='font-normal text-lg  my-5'><span className='font-bold text-2xl'>Müfredat:</span> Python ile yapay zeka uygulamaları, discord botları,  web geliştirme, ileri düzey programlama</p>
                <p className='font-normal text-lg  my-5'><span className='font-bold text-2xl'>Seviye: </span>  İleri düzey</p>
                <div className='flex justify-between  my-5 flex-wrap'>
                  <button className='bg-white p-3 rounded-2xl '>Yapay Zeka</button>
                  <button className='bg-white p-3 rounded-2xl '>Web Sitesi </button>
                  <button className='bg-white p-3 rounded-2xl '>Botlar</button>
                  <button className='bg-white p-3 rounded-2xl mt-3 '>İleri Düzey</button>
                </div>
<div className='flex justify-center items-center'>
<button className='bg-[#fb8500] py-4 px-7 text-white rounded-2xl mt-9'>Planlarımızı Keşfedin</button>

</div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
