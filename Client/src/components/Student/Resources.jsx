import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SearchBar from "../../customComponents/SearchBar";
import "./Progresbar.css";

const Resources = () => {
  const filesArray = [
    {
      id: 1,
      filename: "Database-MySQL.pdf",
      fileType: "pdf",
    },
    {
      id: 2,
      filename: "Database-MySQL.pdf",
      fileType: "pdf",
    },
    {
      id: 3,
      filename: "Summary-of-php.docx",
      fileType: "docx",
    },
    {
      id: 4,
      filename: "Summary-of-php.xls",
      fileType: "xls",
    },
    {
      id: 5,
      filename: "Database-MySQL",
      fileType: "pdf",
    },
    {
      id: 6,
      filename: "Database-MySQL.xls",
      fileType: "xls",
    },
    {
      id: 7,
      filename: "Database-MySQL.docx",
      fileType: "docx",
    },
  ];

  const ProgressBar = ({ total, obtained, filename }) => {
  const [progress, setProgress] = useState((obtained / total) * 100);

  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn || userRole !== 'student') {
      navigate('/');
    }
  }, [navigate]);

    return (
      <div className="w-full flex flex-col justify-between">
        <div className="flex justify-between gap-4">
          <p className="mt-3 font-poppins font-medium text-xs text-[#2B2D42]">
            {filename}
          </p>
          <p className="mt-3 font-poppins font-medium text-xs text-[#2B2D42]">
            350 KB
          </p>
        </div>
        <div className="progress-bar flex w-full mt-2">
          <div
            className="progress"
            style={{ width: `${progress}%`, backgroundColor: "#FB8500" }}
          ></div>
          <div
            className="remaining-progress"
            style={{ width: `${100 - progress}%`, backgroundColor: "grey" }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="gap-4 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40">
      {filesArray.map((item) => (
        <div key={item.id} className="flex flex-col sm:flex-row justify-between px-2 mt-3 py-2 gap-5 bg-white rounded-xl">
          <div className="flex-1 flex gap-6">
            {item.fileType === "pdf" && (
              <div className="flex justify-center items-center">
                <img src="/assets/pdficon.svg" alt="pdf" className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" />
              </div>
            )}
            {item.fileType === "docx" && (
              <div className="flex justify-center items-center">
                <img src="/assets/wordicon.svg" alt="docx" className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" />
              </div>
            )}
            {item.fileType === "xls" && (
              <div className="flex justify-center items-center">
                <img src="/assets/excelicon.svg" alt="xls" className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" />
              </div>
            )}
            <div className="flex flex-col w-full justify-between">
              <ProgressBar total={6400} obtained={4200} filename={item.filename} />
            </div>
          </div>
          <button className="font-poppins text-sm text-[#ffffff] w-full sm:w-36 h-12 mt-3 rounded-[70px] font-bold bg-orange-logo px-4">
            Download
          </button>
        </div>
      ))}
    </div>
  );
};

export default Resources;
