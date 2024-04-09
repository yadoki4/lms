import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import SearchBar from "../../customComponents/SearchBar";
const Curriculm = () => {
  const [showView, setShowView] = useState(false);
  const toggleView = () => {
    setShowView(!showView);
  };
  const [createActivityView, setcreateActivityView] = useState(false);

  const [curriculumView, setCurriculumView] = useState(true);
  const [editactivityView, seteditactivityView] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [relation, setRelation] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profile, setProfile] = useState(true);
  const [account, setAccount] = useState(false);
  const [notification, setNotificationSettiing] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);
  const handleEmailCheckboxChange = () => {
    setEmailChecked(!emailChecked);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleGuardianName = (event) => {
    setGuardianName(event.target.value);
  };
  const handleRelation = (event) => {
    setRelation(event.target.value);
  };
  const handleCurrentPassword = (event) => {
    setCurrentPassword(event.target.value);
  };
  const handleNewPassword = (event) => {
    setNewPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  return (
    <div>
      <SearchBar />
      {curriculumView && (
        <div className="flex flex-col gap-4 mx-16">
          <div className="  w-full   flex justify-end items-center mt-4 ">
            <div className="flex gap-1 items-center justify-center w-44 h-10 bg-white rounded-lg px-2 py-2 ">
              <FiPlus size={16} />
              <button
                onClick={() => {
                  setCurriculumView(false);
                  setcreateActivityView(true);
                }}
                className="font-poppins font-bold text-[#2B2D42] text-xs"
              >
                Add new Activity
              </button>
            </div>
          </div>
          <div className="flex w-full   rounded-xl h-16 bg-white mt-4 px-2 py-2">
            <div className="w-2 h-12 rounded-md bg-orange-logo "></div>
            <div className=" flex items-center justify-between  w-full">
              <p className="ml-2 font-poppins font-bold text-[#2B2D42] text-xs">
                Week 1-4: Introduction to Python
              </p>
              <div className="flex justify-end items-center">
                <IoIosArrowDown onClick={toggleView} />
              </div>
            </div>
          </div>
          {showView && (
            <div className="flex w-full   rounded-xl h-16 bg-white mt-4 px-2 py-2">
              <div className=" flex items-center justify-between  w-full">
                <p className="ml-2 font-poppins font-bold text-[#2B2D42] text-xs">
                  Activity 1: Write and run simple python code to display
                  "Hello, World!"
                </p>
                <div className="flex justify-between items-center gap-3">
                  <MdOutlineModeEditOutline
                    onClick={() => {
                      setcreateActivityView(false);
                      setCurriculumView(false);
                      seteditactivityView(true);
                    }}
                    size={20}
                  />

                  <RiDeleteBinLine size={20} />
                </div>
              </div>
            </div>
          )}
          <div className="flex w-full   rounded-xl h-16 bg-white mt-4 px-2 py-2">
            <div className="w-2 h-12 rounded-md bg-orange-logo "></div>
            <div className=" flex items-center justify-between  w-full">
              <p className="ml-2 font-poppins font-bold text-[#2B2D42] text-xs">
                Week 1-4: Introduction to Python
              </p>
              <div className="flex justify-end items-center">
                <IoIosArrowDown onClick={toggleView} />
              </div>
            </div>
          </div>
          {showView && (
            <div className="flex w-full   rounded-xl h-16 bg-white mt-4 px-2 py-2">
              <div className=" flex items-center justify-between  w-full">
                <p className="ml-2 font-poppins font-bold text-[#2B2D42] text-xs">
                  Activity 1: Write and run simple python code to display
                  "Hello, World!"
                </p>
                <div className="flex justify-between items-center gap-3">
                  <MdOutlineModeEditOutline
                    onClick={() => {
                      setcreateActivityView(false);
                      setCurriculumView(false);
                      seteditactivityView(true);
                    }}
                    size={20}
                  />

                  <RiDeleteBinLine size={20} />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {createActivityView && (
        <div className="w-full mt-8">
          <div className=" flex flex-col  mx-20 px-6 py-6  bg-white">
            <div>
              <p className="font-poppins font-semibold text-[#000000] text-2xl">
                Create activity
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label class="text-[#344054] font-medium font-poppins text-sm">
                  Title
                </label>
                <input
                  class=" focus:outline-none border border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
                  type="text"
                  value={currentPassword}
                  onChange={handleCurrentPassword}
                  placeholder="Enter title"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label class="text-[#344054] font-medium font-poppins text-sm">
                  Discription
                </label>
                <textarea
                  className="mt-1 w-full border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2"
                  value={currentPassword} // Bind value to state
                  onChange={handleCurrentPassword} // Handle change event
                  rows={5} // Number of visible text lines
                  cols={50} // Number of visible text columns
                  placeholder="Enter Discription" // Placeholder text
                />
              </div>
              <div className="flex flex-col gap-1">
                <label class="text-[#344054] font-medium font-poppins text-sm">
                  Points
                </label>
                <input
                  class=" focus:outline-none border border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
                  type="text"
                  value={currentPassword}
                  onChange={handleCurrentPassword}
                  placeholder="Enter Points"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label class="text-[#344054] font-medium font-poppins text-sm">
                  Due Date
                </label>
                <input
                  class=" focus:outline-none border border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
                  type="text"
                  value={currentPassword}
                  onChange={handleCurrentPassword}
                  placeholder="Enter due date"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label class="text-[#344054] font-medium font-poppins text-sm">
                  Submission
                </label>
                <div className="flex  w-full   rounded-lg h-14 bg-white mt-1  py-2">
                  <div className=" flex items-center justify-between rounded-lg w-full border border-[#D0D5DD]">
                    <p className="ml-2 font-inter font-medium text-[#344054] text-sm ">
                      Select your preferred language
                    </p>
                    <div className="flex justify-end items-center">
                      <IoIosArrowDown
                        onClick={() => {
                          alert("Wait");
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4  mx-20 px-6 py-6">
            <button
              onClick={() => {
                setCurriculumView(true);
                setcreateActivityView(false);
              }}
              className="bg-orange-logo text-white font-poppins font-medium   rounded-xl w-40 justify-center items-center px-2 py-2"
            >
              Save
            </button>
          </div>
        </div>
      )}
      {editactivityView && (
        <div className="w-full mt-8">
          <div className=" flex flex-col  mx-20 px-6 py-6  bg-white">
            <div>
              <p className="font-poppins font-semibold text-[#000000] text-2xl">
                Edit Activity
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label class="text-[#344054] font-medium font-poppins text-sm">
                  Title
                </label>
                <input
                  class=" focus:outline-none border border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
                  type="text"
                  value={currentPassword}
                  onChange={handleCurrentPassword}
                  placeholder="Enter title"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label class="text-[#344054] font-medium font-poppins text-sm">
                  Discription
                </label>
                <textarea
                  className="mt-1 w-full border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2"
                  value={currentPassword} // Bind value to state
                  onChange={handleCurrentPassword} // Handle change event
                  rows={5} // Number of visible text lines
                  cols={50} // Number of visible text columns
                  placeholder="Enter Discription" // Placeholder text
                />
              </div>
              <div className="flex flex-col gap-1">
                <label class="text-[#344054] font-medium font-poppins text-sm">
                  Points
                </label>
                <input
                  class=" focus:outline-none border border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
                  type="text"
                  value={currentPassword}
                  onChange={handleCurrentPassword}
                  placeholder="Enter Points"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label class="text-[#344054] font-medium font-poppins text-sm">
                  Due Date
                </label>
                <input
                  class=" focus:outline-none border border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
                  type="text"
                  value={currentPassword}
                  onChange={handleCurrentPassword}
                  placeholder="Enter due date"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label class="text-[#344054] font-medium font-poppins text-sm">
                  Submission
                </label>
                <div className="flex  w-full   rounded-lg h-14 bg-white mt-1  py-2">
                  <div className=" flex items-center justify-between rounded-lg w-full border border-[#D0D5DD]">
                    <p className="ml-2 font-inter font-medium text-[#344054] text-sm ">
                      Select your preferred language
                    </p>
                    <div className="flex justify-end items-center">
                      <IoIosArrowDown
                        onClick={() => {
                          alert("Wait");
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4  mx-20 px-6 py-6">
            <button
              onClick={() => {
                setCurriculumView(true);
                setcreateActivityView(false);
                seteditactivityView(false);
              }}
              className="bg-orange-logo text-white font-poppins font-medium   rounded-xl w-40 justify-center items-center px-2 py-2"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Curriculm;
