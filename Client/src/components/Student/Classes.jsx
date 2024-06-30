import React, {useEffect} from "react";
import SearchBar from "../../customComponents/SearchBar";
import "./Progresbar.css";
import { useNavigate } from "react-router-dom";

const StudClasses = () => {
  const navigate = useNavigate(); // Initialize navigate function from useNavigate

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn || userRole !== 'student') {
      navigate('/');
    }
  }, [navigate]);

  const ProgressBar = ({ total, obtained }) => {
    const progress = (obtained / total) * 100;

    return (
      <div className="progress-bar-container flex items-center gap-5">
        <div className="progress-bar flex">
          <div
            className="flex progress justify-center items-center"
            style={{ width: `${progress}%`, backgroundColor: "#FB8500" }}
          ></div>
          <div
            className="remaining-progress justify-center items-center"
            style={{ width: `${100 - progress}%`, backgroundColor: "grey" }}
          ></div>
        </div>
        <div className="progress-text items-center">
          <p className="text-center">{`${obtained}/${total}`}</p>
        </div>
      </div>
    );
  };

  const handleGoToCourse = () => {
    navigate('/student/lesson'); // Navigate to '/student/lesson' route
  };

  return (
    <div className="w-full flex flex-col gap-4 mx-16">
      <SearchBar />
      <div className="flex gap-6 bg-white rounded-lg mt-4 items-center">
        <div>
          <img src="/assets/Python.svg" alt="Python" />
        </div>
        <div className="self-center items-center justify-center ml-6">
          <p className="font-poppins font-bold text-3xl text-[#2B2D42]">
            Python Basic
          </p>
        </div>
      </div>
      <div className="flex items-center bg-white rounded-3xl px-6 py-6 gap-4">
        <div className="h-48 w-64 bg-[#D9D9D9]"></div>
        <div className="flex-1 flex-col px-4 py-4 gap-5">
          <p className="mt-3 font-poppins font-bold text-3xl text-[#2B2D42]">
            Class Name
          </p>
          <p className="mt-3 font-poppins font-medium text-2xl text-[#2B2D42]">
            Instructor Name
          </p>
          <div>
            <ProgressBar total={6400} obtained={4200} />
          </div>
          <button
            onClick={handleGoToCourse}
            className="font-poppins text-sm text-white w-36 h-12 mt-3 rounded-[70px] font-bold bg-orange-logo px-4"
          >
            Go to Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudClasses;
