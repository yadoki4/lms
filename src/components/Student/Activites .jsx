import React, { useState } from "react";
import LessonCard from "../../customComponents/LessonCard";
import { FaArrowLeft } from "react-icons/fa6";
import Activityinfocard from "../../customComponents/Activityinfocard";
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
  const [Home, setHome] = useState(false);
  const [Class, setClass] = useState(true);
  const [TaskDiscription, setTask] = useState(false);
  return (
    <>
      {mainscreen && (
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
      )}
      {activities && (
        <div className="mx-14">
          <div className="flex gap-6 w-full   rounded-xl bg-white mt-4 px-3 py-3">
            <div className="justify-center items-center">
              <FaArrowLeft
                className="hover:cursor-pointer"
                size={30}
                onClick={() => {
                  setactivities(false);
                  setmainscreen(true);
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
              <button
                onClick={() => {
                  setClass(true);
                  setHome(false);
                }}
                className={`${
                  Class ? "bg-orange-logo text-white" : null
                } font-poppins font-medium text-[#1B2559] text-2xl  rounded-3xl w-40 justify-center items-center px-2 py-2`}
              >
                In the Class
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setHome(true);
                  setClass(false);
                }}
                className={`${
                  Home ? "bg-orange-logo text-white" : null
                } font-poppins font-semibold text-2xl text-[#1B2559]  rounded-3xl w-40 justify-center items-center px-2 py-2`}
              >
                At Home
              </button>
            </div>
          </div>
          {Class && (
            <div className="flex  flex-col mt-6 ">
              {ClassTask.map((item) => (
                <button
                  onClick={() => {
                    setmainscreen(false);
                    setHome(false);
                    setClass(false);
                    setactivities(false);
                    setTask(true);
                  }}
                >
                  <Activityinfocard index={item.id} task={item.task} />
                </button>
              ))}
            </div>
          )}
          {Home && (
            <div className="flex  flex-col mt-6 ">
              {HomeTask.map((item) => (
                <button
                  onClick={() => {
                    setmainscreen(false);
                    setHome(false);
                    setClass(false);
                    setactivities(false);
                    setTask(true);
                  }}
                >
                  <Activityinfocard index={item.id} task={item.task} />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      {TaskDiscription && (
        <div className="bg-white w-full h-full mt-6">
          <div className="mx-6 py-10">
            <div className="flex justify-between">
              <div>
                <p className="font-poppins font-semibold text-[#fb8500] text-2xl">
                  Activity 1:Write and run a simple Python script to display
                  "Hello, World!".
                </p>
              </div>
              <div>
                <p className="font-poppins font-medium text-[#2B2D42] text-lg">
                  March 11,2024
                </p>
              </div>
            </div>
            <div className="w-1/4 flex flex-col mt-4 gap-4">
              <div className="flex justify-between font-poppins font-medium text-[#2B2D42] text-xl">
                <p>Ethan Taylor</p>
                <p>100 points</p>
              </div>
              <div className="flex font-poppins font-semibold text-[#2B2D42] text-xl">
                <p>Due Date </p>
                <p>March 17,2024</p>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <div className="flex mt-4 flex-col gap-3">
                <p className="font-poppins font-semibold text-[#2B2D42] text-xl">
                  Description:
                </p>
                <p className="font-poppins font-normal text-[#2B2D42] text-base leading-8">
                  In this activity, utilizing the Python IDE provided by the
                  platform, students will embark on a foundational journey into
                  Python programming
                  <br /> by creating and executing a straightforward script that
                  displays the timeless message "Hello, World!". The Python IDE,
                  integrated into the
                  <br /> platform, serves as a comprehensive environment where
                  students can compile, test, and submit programming-based
                  problems with
                  <br /> ease.
                </p>
              </div>
              <div className="flex flex-col mt-4 gap-3">
                <p className="font-poppins font-semibold text-[#2B2D42] text-xl">
                  Instructions
                </p>
                <p className="font-poppins font-normal text-[#2B2D42] text-base">
                  1.Access the Python IDE within the platform's interface.
                </p>
                <p className="font-poppins font-normal text-[#2B2D42] text-base">
                  2.Start a new Python project or file within the IDE.
                </p>
                <p className="font-poppins font-normal text-[#2B2D42] text-base ">
                  3.Write the following Python code to create a simple script:
                </p>
                <div className="flex  bg-orange-1 w-1/5 h-14 rounded-[15px] px-2 py-4">
                  <p className="font-poppins font-normal text-base text-[#2B2D42]">
                    Print(“Hello,World!”)
                  </p>
                </div>
                <p className="font-poppins font-normal text-[#2B2D42] text-base ">
                  4.Run the script using the IDE's execution capabilities.
                </p>
                <p className="font-poppins font-normal text-[#2B2D42] text-base ">
                  5.Observe the output "Hello, World!" displayed within the
                  IDE's output console.
                </p>
                <p className="font-poppins font-normal text-[#2B2D42] text-base ">
                  6.Submit the code.
                </p>
              </div>
              <div className="flex mt-4 flex-col gap-3">
                <p className="font-poppins font-semibold text-[#2B2D42] text-xl">
                  Learning Outcome:
                </p>
                <p className="font-poppins font-normal text-[#2B2D42] text-base leading-8">
                  By engaging in this activity, students will become acquainted
                  with the Python programming language within the platform's
                  dedicated
                  <br /> IDE. They will learn the process of creating,
                  executing, and testing Python scripts, setting the stage for
                  their exploration into more complex
                  <br /> programming challenges and projects. The Python IDE
                  provided by the platform offers students a user-friendly
                  environment equipped
                  <br /> with essential tools for effective programming practice
                  and learning.
                </p>
              </div>
              <div className="flex justify-end mt-10">
                <button
                  onClick={() => {
                    setmainscreen(false);
                    setHome(false);
                    setClass(true);
                    setTask(false);
                    setactivities(true);
                  }}
                  className={
                    " bg-orange-logo font-poppins font-bold text-base text-[#FFFFFF]  rounded-[18px] w-48 justify-center items-center px-2 py-2"
                  }
                >
                  Complete Activity
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Activites;
