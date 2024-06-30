import React from "react";
import"../../components/Landing/Landing.css"
const TeacherStudentCard = ({mainImg,title, paragraph, t1, alt1, title1, t2, alt2, title2, t3, alt3, title3, t4, alt4, title4}) => {
  return (
    <div className="flex flex-row contain w-10/12 bg-white">
      <img
        src={mainImg}
        className="h-auto containimg w-1/2"
        alt="Teacher"
      />
      <div className="flex flex-col justify-center md:pl-10 pt-6 md:pt-0">
        <div className="text-2xl font-semibold mb-2 font-Poppins">
          {title}
        </div>
        <p className="lg:text-lg mb-6 font-normal font-Poppins text-black-1">
          {paragraph}
        </p>
        <ul className="list-none py-2">
          <li className="flex flex-wrap items-center justify-between py-4">
            <div className="flex items-center mt-2">
              <img
                src={t1}
                alt={alt1}
                className="w-12 h-12 md:w-16 md:h-16 mr-4"
              />
              <span className="inline-block p-2 rounded-full bg-blue-500 mr-2">
                {title1}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <img
                src={t2}
                alt={alt2}
                className="w-12 h-12 md:w-16 md:h-16 mr-4"
              />
              <span className="inline-block p-2 rounded-full bg-blue-500 mr-2">
                {title2}
              </span>
            </div>
          </li>
          <li className="flex items-center flex-wrap justify-between py-4">
            <div className="flex items-center mt-2" >
              <img
                src={t3}
                alt={alt3}
                className="w-12 h-12 md:w-16 md:h-16 mr-4"
              />
              <span className="inline-block p-2 rounded-full bg-blue-500 mr-2">
                {title3}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <img
                src={t4}
                alt={alt4}
                className="w-12 h-12 md:w-16 md:h-16 mr-4"
              />
              <span className="inline-block p-2 rounded-full bg-blue-500 mr-2">
                {title4}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeacherStudentCard;
