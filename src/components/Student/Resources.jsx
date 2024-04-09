import React, { useState } from "react";
import SearchBar from "../../customComponents/SearchBar";
import "./Progresbar.css";
const Resources = () => {
  const Array = [
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
  //const [showView, setShowView] = useState(false);
  const ProgressBar = ({ total, obtained, filename }) => {
    const [progress, setProgress] = useState((obtained / total) * 100);

    return (
      <div className=" flex-col w-2/3 justify-between">
        <div className="flex  justify-between gap-4">
          <p className="mt-3 font-poppins font-medium text-xs text-[#2B2D42] ">
            {filename}
          </p>
          <p className="mt-3 font-poppins font-medium text-xs text-[#2B2D42] ">
            350 KB
          </p>
        </div>
        <div className="progress-bar flex w-3/4">
          <div
            className="  progress justify-center items-center"
            style={{ width: `${progress}%`, backgroundColor: "#FB8500" }}
          ></div>
          <div
            className=" remaining-progress justify-center items-center"
            style={{ width: `${100 - progress}%`, backgroundColor: "grey" }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="  gap-4 mx-16">
      {Array.map((item) => (
        <div className=" flex justify-between px-2 mt-3 py-2 gap-5 bg-white rounded-xl ">
          <div className="flex-1 flex  gap-6">
            {item.fileType === "pdf" && (
              <div className=" flex justify-center items-center ">
                <img src="/assets/pdficon.svg" alt="pdf"></img>
              </div>
            )}
            {item.fileType === "docx" && (
              <div className=" flex justify-center items-center ">
                <img src="/assets/wordicon.svg" alt="pdf"></img>
              </div>
            )}
            {item.fileType === "xls" && (
              <div className=" flex justify-center items-center ">
                <img src="/assets/excelicon.svg" alt="pdf"></img>
              </div>
            )}
            <div className=" flex-col w-2/3 justify-between">
              <div className="mt-2">
                <ProgressBar
                  className="mt-4"
                  total={6400}
                  obtained={4200}
                  filename={item.filename}
                />
              </div>
            </div>
          </div>

          <button className="font-poppins text-sm text-[#ffffff] w-36 h-12 mt-3 rounded-[70px]  font-bold bg-orange-logo px-4">
            Download
          </button>
        </div>
      ))}
    </div>
  );
};

export default Resources;
