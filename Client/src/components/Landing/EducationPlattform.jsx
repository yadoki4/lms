import React, { useState } from "react";
import TeacherStudentCard from "../../Containers/Landing/TeacherStudentCard";

const EducationPlatformComponent = () => {
  const [selected, setSelected] = useState("teacher");
  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 md:p-8">
      <div className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-12">
        "Öğrenciler ve öğretmenler için özel çözümler."
      </div>
      <div className="mb-12 flex md:flex-row flex-col justify-center">
        <div
          onClick={() => setSelected("teacher")}
          className={`text-xl font-semibold mb-2 font-Poppins text-black-1 mr-10 ${
            selected == "teacher" ? "bg-orange-1" : "bg-white"
          } px-4 py-2 rounded-full cursor-pointer`}
        >
          Öğretmen Platformu
        </div>
        <div
          onClick={() => setSelected("student")}
          className={`text-xl font-semibold mb-2 font-Poppins text-black-1  ${
            selected == "student" ? "bg-orange-1" : "bg-white"
          } cursor-pointer px-4 rounded-full py-2`}
        >
          Öğrenci Platformu
        </div>
      </div>
      {selected == "teacher" ? (
        <TeacherStudentCard
          mainImg={"/assets/teacher.svg"}
          title={"Öğretmen Platformu"}
          paragraph={`"Öğretmen platformumuz, kapsamlı işlevselliği öğrencilerimizi daha etkili bir şekilde yönetmemize yardımcı olur.  Ders materyallerini özelleştirerek sınıfımızın ihtiyaçlarına uygun hale getirebilir ve kolayca ödev oluşturup her öğrencinin ihtiyaçlarına yönelik çalışmalar yapabiliriz. Ayrıca, derslere katılım durumunu anlık bildirimlerle takip edebilir ve öğrencilerin derste diğer web sitelerine veya oyunlara girişlerini gözlemleyebiliriz. Tüm bu özellikler ve çok daha fazlası, öğrencilerimizin başarısını artırmak için güçlü bir araç seti sunar."`}
          t1={"/assets/t1.png"}
          alt1={"Öğrenci Yönetimi"}
          title1={"Öğrenci Yönetimi"}
          t2={"/assets/t2.svg"}
          alt2={"Özelleştirilmiş Ödevler"}
          title2={"Özelleştirilmiş Ödevler"}
          t3={"/assets/t3.svg"}
          alt3={"Notlandırma"}
          title3={"Notlandırma"}
          t4={"/assets/t4.svg"}
          alt4={"Yoklama ve Bildirimler"}
          title4={"Yoklama ve Bildirimler"}
        />
      ) : (
        <TeacherStudentCard
          mainImg={"/assets/student.png"}
          title={"Öğrenci Platformu"}
          paragraph={`Öğrenci platformumuz, öğrencilerimizin ek programlar yüklemeye gerek kalmadan kapsamlı kurs içeriklerimize anında erişim sağlamalarını sağlayan kullanıcı dostu bir arayüz sunuyor. Ayrıca, platformumuzda bulunan interaktif online kodlama programı ile öğrencilerimiz, kodlama deneyimlerini kolayca yaşayabilir ve geliştirebilirler. Gelişim takibi, otomatik izleme sistemleri ve her an diğer öğrencilerle etkileşim kurabilecekleri online bir ortam gibi birçok özellik, güvenli ve interaktif bir öğrenme ortamı sunuyor.`}
          t1={"/assets/s1.svg"}
          alt1={"Güçlü Müfredat"}
          title1={"Güçlü Müfredat"}
          t2={"/assets/s2.svg"}
          alt2={"Ödevlendirme"}
          title2={"Ödevlendirme"}
          t3={"/assets/s3.svg"}
          alt3={"Gelişim Takibi"}
          title3={"Gelişim Takibi"}
          t4={"/assets/s4.svg"}
          alt4={"Online Python Programına Erişim"}
          title4={"Online Python Programına Erişim"}
        />
      )}
    </div>
  );
};

export default EducationPlatformComponent;
