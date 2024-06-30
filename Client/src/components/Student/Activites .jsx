import React, { useState, useEffect } from "react";
import LessonCard from "../../customComponents/LessonCard";
import { FaArrowLeft } from "react-icons/fa6";
import Activityinfocard from "../../customComponents/Activityinfocard";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Shared } from "../../shared";
import Taskanddesc from "./Taskanddesc";




const Activites = () => {
  const ClassTask = [
    {
      id: 1,
      task: "Write and run a simple Python script to display Hello, World!",
    },
    {
      id: 2,
      task: "Create variables to store different types of data (e.g., integers, strings) and perform basic arithmetic operations. ",
    },
    {
      id: 3,
      task: "Write conditional statements to check user input and display appropriate messages.",
    },
    {
      id: 4,
      task: "Write a program that uses loops to print numbers from 1 to 10.",
    },
    {
      id: 5,
      task: "Create a program that simulates a basic guessing game using conditional statements and loops.",
    },
    {
      id: 6,
      task: "Implement a program that calculates factorial of a number using loop structures.",
    },
    {
      id: 7,
      task: "Define a function that takes two numbers as input and returns their sum.",
    },
  ];
  const HomeTask = [
    {
      id: 1,
      task: "Write and run a simple Python script to display Hello, World!",
    },
    {
      id: 2,
      task: "Create variables to store different types of data (e.g., integers, strings) and perform basic arithmetic operations. ",
    },
    {
      id: 3,
      task: "Write conditional statements to check user input and display appropriate messages.",
    },
  ];
  const [mainscreen, setmainscreen] = useState(true);
  const [activities, setactivities] = useState(false);
  const [Teacher, setTeacher] = useState();
  const [TaskDiscription, setTask] = useState(false);
  const [item, setItem] = useState({});
  const navigate = useNavigate();


  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn || userRole !== 'student') {
      navigate('/');
    }
  }, [navigate]);


  useEffect(() => {
    if (sessionStorage.getItem('activities')) {
      setmainscreen(false);
      setactivities(true);
    }
  }, []);

  useEffect(() => {
      axios.get(`${Shared.apiurl}/api/teacher/${sessionStorage.getItem('TeacherID')}`)
        .then(response => {
          console.log(response.data.Name);
          setTeacher(response.data.Name);
        })
        .catch(error => {
          console.error('There was an error fetching the teacher!', error);
        });
  }, []);

  const activitiesFromStorage = JSON.parse(sessionStorage.getItem('activities')) || [];
  return (
    <>
      {/* {mainscreen && (
        <div className="flex flex-col gap-4 mx-6 mt-4">
          <div className="flex justify-between w-full   rounded-xl h-12 bg-white mt-4 px-2 py-2">
            <div className="w-20 h-4">
              <p className=" text-center font-poppins  font-semibold text[#000000] text-2xl">
                Sr no.
              </p>
            </div>

            <div className="flex w-2/5 items-start ">
              <p className=" font-poppins  font-semibold text[#000000] text-2xl">
                Activity
              </p>
            </div>
            <div className="flex w-1/3 items-start">
              <p className=" font-poppins  font-semibold text[#000000] text-2xl">
                Grades
              </p>
            </div>
          </div>

          <div className=" flex  justify-between  w-full px-2 py-3 rounded-xl bg-white ">
            <div className="w-20 h-4">
              <p className=" text-center font-poppins  font-normal text[#2B2D42] text-base">
                1
              </p>
            </div>

            <div className="flex w-2/5 items-start ">
              <button
                onClick={() => {
                  setmainscreen(false);
                  setactivities(true);
                }}
                className=" font-poppins  font-normal text[#2B2D42] text-base"
              >
                Activity
              </button>
            </div>
            <div className="flex w-1/3 justify-around">
              <img src="/assets/ActivityCircle.svg"></img>

              <img src="/assets/ActivityStar.svg"></img>
            </div>
          </div>
        </div>
      )} */}
      
      
      {activities && (
        <div className="mx-14">
          <div className="flex gap-6 w-full   rounded-xl bg-white mt-4 px-3 py-3">
            <div className="justify-center items-center">
              <FaArrowLeft
                className="hover:cursor-pointer"
                size={30}
                onClick={() => {
                  setactivities(false);
                  setmainscreen(true)
                  navigate("/student/lesson")
                }}
              />
            </div>
            <div className="justify-center items-center">
              <img src="/assets/lesson.svg"></img>
            </div>
            <div className="justify-center items-center ">
              <p className="text-center font-poppins font-bold text-[#000000] text-3xl">
                Activities
              </p>
            </div>
          </div>
          <div className=" flex justify-center mt-7 gap-8">
            <div>
            </div>
            <div>
            </div>
          </div>

            <div className="flex  flex-col mt-6 ">
              {activitiesFromStorage.map((item, index) => (
                <button
                  onClick={() => {
                    setmainscreen(false);
                    setactivities(false);
                    setTask(true);
                    setItem(item)
                  }}
                >
                  <Activityinfocard index={index+1} task={item.Title} />
                </button>
              ))}
            </div>
         

        </div>
      )}

      {TaskDiscription && (
        <Taskanddesc item={item} Teacher={Teacher}/>
      )}

    </>
  );
};

export default Activites;
