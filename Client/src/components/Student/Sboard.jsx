import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import InfoCard from "../../customComponents/InfoCard";
import ActivityCard from "../../customComponents/activity-card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Shared } from "../../shared";
import { useNavigate } from 'react-router-dom';

const StudentsDashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn || userRole !== 'student') {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    const updateActivityStatus = async () => {
      try {
        const response = await fetch(Shared.apiurl + '/api/activities/updateStatus', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          console.log('Activity status updated successfully.');
        } else {
          console.error('Failed to update activity status.');
        }
      } catch (error) {
        console.error('Error updating activity status:', error);
      }
    };

    updateActivityStatus(); // Call the function immediately when component mounts
  }, []); // Empty dependency array ensures it runs only once


  return (
    <div className="w-ful flex flex-col gap-10 mx-8">
      <div className="w-full bg-white rounded-md flex flex-col md:flex-row justify-between px-5 py-5 gap-2">
        <div className="block md:hidden py-10">
          <img
            color="#D9D9D9"
            src="/assets/welcome.svg"
            alt="Search"
            className="w-full md:w-52 h-52"
          />
        </div>
        <div className="flex flex-col gap-3  ">
          <p className="font-poppins text-['#2B2D42'] font-extrabold text-4xl  ">
            Hi {sessionStorage.getItem('Name')},
          </p>
          <p className="font-poppins text-['#2B2D42'] font-bold text-2xl ">
            Welcome!
          </p>
          <p className="font-poppins text-['#2B2D42'] font-normal text-lg">
            Access course materials, track progress,
            <br />
            complete assignments, and collaborate with
            <br />
            peers seamlessly.
          </p>
        </div>
        <div className="hidden md:flex">
          <img
            color="#D9D9D9"
            src="/assets/welcome.svg"
            alt="Search"
            className="w-full h-56"
          />
        </div>
      </div>
      {/* 
  Class
*/}

      <div className="flex w-full h-full flex-col md:flex-row gap-8">
        <div className="flex flex-col md:flex-row   md:items-start items-center bg-white rounded-3xl px-6 py-6 gap-4 md:w-3/5">
          <div className="h-72 w-80 bg-[#D9D9D9]  "></div>
          <div className="flex flex-col px-4 py-4 ">
            <p className="mt-3 font-poppins font-bold text-3xl text-[#2B2D42] ">
              Class Name
            </p>
            <p className="mt-3 font-poppins  text-[#2B2D42] font-medium text-2xl">
              Instructor Name
            </p>
            <button className="font-poppins text-xs w-32 h-11  text-[#ffffff] mt-4 rounded-xl  font-bold bg-orange-logo px-2 py-2">
              View all Classes
            </button>
          </div>
        </div>
        <div className="  flex-1  bg-white rounded-xl px-6 py-8 gap-10">
          <p className="font-poppins text-['#1B2559'] font-semibold text-4xl ">
            Upcoming
          </p>
          <InfoCard
            title="Enviroment Disscus"
            description="01:00 PM-02:00 PM"
          />
          <InfoCard title="Fitness Training" description="01:00 PM-02:00 PM" />
          <InfoCard title="Reading time" description="01:00 PM-02:00 PM" />
          <div className="flex justify-end items-center   mt-5">
            <button className="font-poppins text-orange-logo font-semibold  text-xl">
              View All Tasks
            </button>
            <FaArrowRightLong size={15} className="ml-1  text-orange-logo" />
          </div>
        </div>
      </div>
      <div className="flex w-full h-full flex-col md:flex-row gap-8">
        <div className="flex-1  bg-white rounded-xl px-3 py-8 gap-10">
          <p className="font-poppins text-['#1B2559'] font-semibold text-4xl text-center ">
            Grades Achieved
          </p>
          <div className="flex w-full flex-col justify-center gap-5 items-center px-4 rounded-lg mt-4">
            <div className="w-48 h-36">
              <CircularProgressbar
                value={66}
                text={`${45}%`}
                styles={buildStyles({
                  textColor: "#333",
                  pathColor: "#FB8500",
                  trailColor: "white",
                })}
              />
            </div>
            <div className="flex justify-end  items-center mt-5 w-full">
              <button className="font-poppins text-orange-logo font-semibold  text-xl">
                View All Tasks
              </button>
              <FaArrowRightLong size={15} className="ml-1  text-orange-logo" />
            </div>
          </div>
        </div>
        <div className="  flex flex-col  bg-white rounded-xl px-3 py-4 md:w-3/5">
          <div className="w-full flex justify-between ">
            <p className="font-poppins text-['#2B2D42'] font-semibold text-xl ">
              Activities
            </p>
            <div className="flex gap-4">
              <p className="font-poppins  text-orange-logo text-base ">All</p>
              <p className="font-poppins text-['#1B2559'] text-base ">
                Completed
              </p>
              <p className="font-poppins text-['##1B2559'] font-normal text-base ">
                Incomplete
              </p>
            </div>
          </div>
          <ActivityCard
            title="Activity 1"
            instructorName="by Instructor name"
          />
          <ActivityCard
            title="Activity 2"
            instructorName="by Instructor name"
          />
          <ActivityCard
            title="Activity 3"
            instructorName="by Instructor name"
          />
          <div className="flex justify-end items-center mt-5 ">
            <button className="font-poppins   text-orange-logo font-semibold  text-xl">
              View All
            </button>
            <FaArrowRightLong size={15} className="ml-1  text-orange-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsDashboard;
