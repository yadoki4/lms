import React, { useState } from "react";
import SearchBar from "../../customComponents/SearchBar";
import NotificationCard from "../../customComponents/notificationCard";
const Students = () => {
  //const [showView, setShowView] = useState(false);
  const [Allclasses, setallclasses] = useState(true);
  const [ClassA, setclassA] = useState(false);
  const [ClassB, setclassB] = useState(false);
  const [notification, setNotification] = useState(true);
  const [preview, setpreview] = useState(false);
  const students = [
    {
      courseNo: "CS101",
      name: "John Doe",
      balance: 500,
      email: "john.doe@example.com",
      phone: "123-456-7890",
      guardian: "Jane Doe",
      lastActiveDate: "2023-03-21",
    },
    {
      courseNo: "ENG204",
      name: "Jane Smith",
      balance: 250,
      email: "jane.smith@example.com",
      phone: "098-765-4321",
      guardian: "John Smith",
      lastActiveDate: "2023-03-20",
    },
  ];
  const lectureDetails = [
    {
      id: 1,
      day: 1,
      status: "false",
    },
    {
      id: 2,
      day: 2,
      status: "true",
    },
    {
      id: 3,
      day: 3,
      status: "false",
    },
    {
      id: 4,
      day: 4,
      status: "false",
    },
    {
      id: 5,
      day: 5,
      status: "false",
    },
    {
      id: 6,
      day: 6,
      status: "false",
    },
    {
      id: 7,
      day: 7,
      status: "true",
    },
    {
      id: 8,
      day: 8,
      status: "true",
    },
    {
      id: 8,
      day: 8,
      status: "true",
    },
    {
      id: 9,
      day: 9,
      status: "true",
    },
    {
      id: 10,
      day: 10,
      status: "true",
    },
    {
      id: 11,
      day: 11,
      status: "true",
    },
    {
      id: 12,
      day: 12,
      status: "false",
    },
    {
      id: 13,
      day: 13,
      status: "false",
    },
    {
      id: 14,
      day: 14,
      status: "false",
    },
    {
      id: 15,
      day: 15,
      status: "false",
    },
    {
      id: 16,
      day: 16,
      status: "false",
    },
    {
      id: 17,
      day: 17,
      status: "false",
    },
    {
      id: 18,
      day: 19,
      status: "true",
    },
    {
      id: 19,
      day: 19,
      status: "false",
    },
    {
      id: 20,
      day: 20,
      status: "true",
    },
    {
      id: 21,
      day: 21,
      status: "true",
    },
    {
      id: 22,
      day: 22,
      status: "false",
    },
    {
      id: 23,
      day: 23,
      status: "false",
    },
    {
      id: 23,
      day: 23,
      status: "false",
    },
    {
      id: 24,
      day: 24,
      status: "false",
    },
    {
      id: 25,
      day: 25,
      status: "true",
    },
    {
      id: 26,
      day: 26,
      status: "true",
    },
    {
      id: 27,
      day: 27,
      status: "true",
    },
    {
      id: 28,
      day: 28,
      status: "false",
    },
    {
      id: 29,
      day: 29,
      status: "false",
    },
    {
      id: 30,
      day: 30,
      status: "false",
    },
    {
      id: 31,
      day: 31,
      status: "false",
    },
    {
      id: 32,
      day: 32,
      status: "false",
    },
  ];
  const Array = [
    {
      id: 1,
      notificationDiscription:
        "Selena comments on your posts about Algorithm tasks",
      notificationTime: "20 minutes ago",
      notificationType: "Comment",
    },
    {
      id: 2,
      notificationDiscription:
        "Well done! You have submitted your tasks of Introduction to Python",
      notificationTime: "Yesterday",
      notificationType: "Submit",
    },
    {
      id: 3,
      notificationDiscription:
        "Mr.John add new quiz and some tasks on PHP course",
      notificationTime: "20 minutes ago",
      notificationType: "Add",
    },
    {
      id: 4,
      notificationDiscription:
        "Your task is overdue for 13 hours and 25 minutes",
      notificationTime: "22 January 2024",
      notificationType: "OverDue",
    },
    {
      id: 5,
      notificationDiscription:
        "Selena comments on your posts about Algorithm tasks",
      notificationTime: "20 minutes ago",
      notificationType: "Comment",
    },
    {
      id: 6,
      notificationDiscription:
        "Well done! You have submitted your tasks of Introduction to Python",
      notificationTime: "Yesterday",
      notificationType: "Submit",
    },
    {
      id: 7,
      notificationDiscription:
        "Mr.John add new quiz and some tasks on PHP course",
      notificationTime: "20 minutes ago",
      notificationType: "Add",
    },
  ];
  return (
    <>
      {Allclasses && (
        <div className="w-ful">
          <SearchBar></SearchBar>
          <div className="w-ful flex items-center mx-8 mt-8">
            <div className=" flex justify-between ">
              <div>
                <button
                  onClick={() => {
                    setallclasses(false);
                    setclassB(false);
                  }}
                  className={`${
                    Allclasses ? "bg-orange-logo text-white" : null
                  } font-poppins font-semibold text-[#1B2559] text-2xl rounded-3xl w-40 justify-center items-center px-2 py-2`}
                >
                  All classes
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    setallclasses(false);
                    setclassB(false);
                    setclassA(true);
                  }}
                  className={`${
                    ClassA ? "bg-orange-logo text-white" : null
                  } font-poppins font-semibold text-[#1B2559] text-2xl  rounded-xl w-40 justify-center items-center px-2 py-2`}
                >
                  Class A
                </button>
              </div>
              <div>
                <button
                  onClick={() => {}}
                  className={`${
                    ClassB ? "bg-orange-logo text-white" : null
                  } font-poppins font-semibold text-[#1B2559] text-2xl  rounded-xl w-44 justify-center items-center px-2 py-2`}
                >
                  Class B
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mx-6 mt-4">
            <div className="flex w-full   rounded-xl h-12 bg-white mt-4  py-2">
              <div className=" flex items-center justify-between  w-full">
                <p className="flex-1 font-poppins text-center font-medium text-[#000000] text-sm">
                  Course
                  <br />
                  No.
                </p>
                <p className="flex-1 font-poppins text-center font-medium text-[#000000] text-sm">
                  Name
                </p>
                <p className=" flex-1 font-poppins text-center font-medium text-[#000000] text-sm">
                  Balance
                </p>
                <p className="flex-1 font-poppins text-center font-medium text-[#000000] text-sm">
                  Email Address
                </p>
                <p className="flex-1 font-poppins text-center font-medium text-[#000000] text-sm">
                  Phone Number
                </p>
                <p className="flex-1 font-poppins text-center font-medium text-[#000000] text-sm">
                  Guardian
                </p>
                <p className="flex-1 font-poppins text-center font-medium text-[#000000] text-sm">
                  Last Active Date
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full   rounded-xl  bg-white mt-4  py-2">
              <div className=" flex items-center justify-between  w-full ">
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  1
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  Samantha <br />
                  Johnson
                </p>
                <p className="flex-1  font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  11 lessons
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  sam.johnson@example.com
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  555-123-4567
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  Michael Smith
                  <br /> (Father)
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  2024-02-20
                </p>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-[5] flex-wrap justify-start gap-4 pl-6 pt-6 pb-4">
                  {lectureDetails.map((item) => (
                    <div className=" flex flex-col w-8">
                      <p className="font-poppins text-center font-regular text-[#2B2D42] text-sm mb-1 font-mediu">
                        {item.day}
                      </p>
                      <div
                        className={`w-full h-1.5 rounded ${
                          JSON.parse(item.status) ? "bg-[green]" : "bg-[red]"
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-[2]" />
              </div>
            </div>
            <div className="flex flex-col w-full   rounded-xl  bg-white mt-4  py-2">
              <div className=" flex items-center justify-between  w-full ">
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  1
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  Samantha <br />
                  Johnson
                </p>
                <p className="flex-1  font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  11 lessons
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  sam.johnson@example.com
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  555-123-4567
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  Michael Smith
                  <br /> (Father)
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  2024-02-20
                </p>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-[5] flex-wrap justify-start gap-4 pl-6 pt-6 pb-4">
                  {lectureDetails.map((item) => (
                    <div className=" flex flex-col w-8">
                      <p className="font-poppins text-center font-regular text-[#2B2D42] text-sm mb-1 font-mediu">
                        {item.day}
                      </p>
                      <div
                        className={`w-full h-1.5 rounded ${
                          JSON.parse(item.status) ? "bg-[green]" : "bg-[red]"
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-[2]" />
              </div>
            </div>
            <div className="flex flex-col w-full   rounded-xl  bg-white mt-4  py-2">
              <div className=" flex items-center justify-between  w-full ">
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  1
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  Samantha <br />
                  Johnson
                </p>
                <p className="flex-1  font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  11 lessons
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  sam.johnson@example.com
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  555-123-4567
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  Michael Smith
                  <br /> (Father)
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  2024-02-20
                </p>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-[5] flex-wrap justify-start gap-4 pl-6 pt-6 pb-4">
                  {lectureDetails.map((item) => (
                    <div className=" flex flex-col w-8">
                      <p className="font-poppins text-center font-regular text-[#2B2D42] text-sm mb-1 font-mediu">
                        {item.day}
                      </p>
                      <div
                        className={`w-full h-1.5 rounded ${
                          JSON.parse(item.status) ? "bg-[green]" : "bg-[red]"
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-[2]" />
              </div>
            </div>
            <div className="flex flex-col w-full   rounded-xl  bg-white mt-4  py-2">
              <div className=" flex items-center justify-between  w-full ">
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  1
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  Samantha <br />
                  Johnson
                </p>
                <p className="flex-1  font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  11 lessons
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  sam.johnson@example.com
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  555-123-4567
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  Michael Smith
                  <br /> (Father)
                </p>
                <p className="flex-1 font-poppins text-center font-regular text-[#2B2D42] text-sm">
                  2024-02-20
                </p>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-[5] flex-wrap justify-start gap-4 pl-6 pt-6 pb-4">
                  {lectureDetails.map((item) => (
                    <div className=" flex flex-col w-8">
                      <p className="font-poppins text-center font-regular text-[#2B2D42] text-sm mb-1 font-mediu">
                        {item.day}
                      </p>
                      <div
                        className={`w-full h-1.5 rounded ${
                          JSON.parse(item.status) ? "bg-[green]" : "bg-[red]"
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-[2]" />
              </div>
            </div>
          </div>
        </div>
      )}
      {ClassA && (
        <div>
          <div className=" flex justify-center ">
            <div>
              <button
                onClick={() => {
                  setpreview(false);
                  setNotification(true);
                }}
                className={`${
                  notification ? "bg-orange-logo text-white" : null
                } font-poppins font-medium text-[#1B2559] text-2xl  rounded-xl w-40 justify-center items-center px-2 py-2`}
              >
                Notification
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setpreview(true);
                  setNotification(false);
                }}
                className={`${
                  preview ? "bg-orange-logo text-white" : null
                } font-poppins font-medium text-[#1B2559] text-2xl  rounded-xl w-44 justify-center items-center px-2 py-2`}
              >
                To Review
              </button>
            </div>
          </div>

          {notification && (
            <div className="flex  flex-col gap-4 mx-20 mt-4">
              {Array.map((item) => (
                <NotificationCard
                  notificationDiscription={item.notificationDiscription}
                  notificationTime={item.notificationTime}
                  notificationType={item.notificationType}
                />
              ))}
            </div>
          )}
          {preview && (
            <div className="flex flex-col gap-4 mx-6 mt-4">
              <div className="flex w-full   rounded-xl h-12 bg-white mt-4 px-2 py-2">
                <div className=" flex  justify-between gap-1  w-full px-2">
                  <p className=" font-poppins font-semibold text-[#000000] text-2xl">
                    Name
                  </p>
                  <p className="  font-poppins font-semibold text-[#000000] text-2xl">
                    Date
                  </p>
                  <p className=" font-poppins font-semibold text-[#000000] text-2xl">
                    Submitted File
                  </p>
                  <p className=" font-poppins font-semibold text-[#000000] text-2xl"></p>
                </div>
              </div>

              <div className=" flex  justify-between  w-full px-2 py-3 rounded-xl bg-white ">
                <div>
                  <p className=" font-poppins  font-regular text-[#2B2D42] text-sm">
                    Samantha Johnson
                  </p>
                </div>

                <div>
                  <p className="  font-poppins  font-regular text-[#2B2D42] text-sm">
                    2024-02-20
                  </p>
                </div>
                <div>
                  <img src="/assets/pdf.svg"></img>
                </div>
                <div>
                  <p className=" text-center font-poppins  font-regular text-[#2B2D42] text-sm">
                    Award points
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Students;
