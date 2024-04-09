import React, { useState } from "react";

import SearchBar from "../../customComponents/SearchBar";
import { IoIosArrowDown } from "react-icons/io";
const Setting = () => {
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

  const [emailupdates, setemailupdates] = useState(false);
  const [teacheractivity, setteacheractivity] = useState(false);
  const [studentinvite, setstudentinvite] = useState(false);
  const [duedateRem, setduedateRem] = useState(false);
  const [submission, setsubmission] = useState(false);
  const [resubmission, setresubmission] = useState(false);
  const [classA, setclassA] = useState(false);
  const [ClassB, setclassB] = useState(false);
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
    <>
      <SearchBar />
      <div className="w-ful flex items-center justify-center  gap-4 jus mt-8">
        <div className=" flex justify-between gap-8">
          <div>
            <button
              onClick={() => {
                setProfile(true);
                setAccount(false);
                setNotificationSettiing(false);
              }}
              className={`${
                profile ? "bg-orange-logo text-white" : null
              } font-poppins font-medium text-[#1B2559]  rounded-xl w-40 justify-center items-center px-2 py-2`}
            >
              Profile
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setAccount(true);
                setProfile(false);
                setNotificationSettiing(false);
              }}
              className={`${
                account ? "bg-orange-logo text-white" : null
              } font-poppins font-medium text-[#1B2559]  rounded-xl w-40 justify-center items-center px-2 py-2`}
            >
              Account Setting
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setNotificationSettiing(true);
                setAccount(false);
                setProfile(false);
              }}
              className={`${
                notification ? "bg-orange-logo text-white" : null
              } font-poppins font-medium text-[#1B2559]  rounded-xl w-44 justify-center items-center px-2 py-2`}
            >
              Notification Setting
            </button>
          </div>
        </div>
      </div>
      {profile && (
        <div className="w-full mt-5 ">
          <div className=" flex justify-between mx-24 rounded-3xl bg-white">
            <div className="flex w-3/6 flex-col gap-2 px-6 py-3">
              <div>
                <p className="font-poppins font-semibold text-[#000000]">
                  Basic Information
                </p>
              </div>
              <div className="flex flex-col">
                <label class="text-[#344054] font-medium font-poppins">
                  Name*
                </label>
                <input
                  class="border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
                  type="text"
                  value={name}
                  onChange={handleName}
                  placeholder="Enter your Name"
                />
              </div>

              <div className="flex flex-col">
                <label class="text-[#344054] font-medium font-poppins">
                  Email*
                </label>
                <input
                  class="border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
                  type="text"
                  value={email}
                  onChange={handleEmail}
                  placeholder="Enter your Email"
                />
              </div>

              <div className="flex flex-col">
                <label class="text-[#344054] font-medium font-poppins">
                  Phone Number*
                </label>
                <input
                  class="border focus:outline-none rounded-lg px-2 py-2 bg-white border-[#D0D5DD]"
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumber}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="flex flex-col">
                <label class="text-[#344054] font-medium font-poppins">
                  Username
                </label>
                <input
                  class="border focus:outline-none rounded-lg px-2 py-2 bg-white border-[#D0D5DD]"
                  type="text"
                  value={userName}
                  onChange={handleUserName}
                  placeholder="Enter Username"
                />
              </div>
              <div className="flex gap-8">
                <div>
                  <label class="text-[#344054] font-medium font-poppins">
                    Guardian Name*
                  </label>
                  <input
                    class="border focus:outline-none rounded-lg px-2 py-2 bg-white border-[#D0D5DD]"
                    type="text"
                    value={guardianName}
                    onChange={handleGuardianName}
                    placeholder="Enter your guardian name"
                  />
                </div>
                <div>
                  <label class="text-[#344054] font-medium font-poppins">
                    Relation*
                  </label>
                  <input
                    class="border focus:outline-none rounded-lg px-2 py-2 bg-white border-[#D0D5DD]"
                    type="text"
                    value={relation}
                    onChange={handleRelation}
                    placeholder="Enter relation"
                  />
                </div>
              </div>
            </div>
            <div className="px-20 py-20">
              <div className="flex flex-col justify-center items-center gap-5">
                <p className=" text-[#000000] font-poppins font-semibold text-2xl">
                  Profile Picture
                </p>
                <div className="w-52 h-48 bg-gray-4 rounded-full"></div>
                <button
                  className="font-poppins font-bold text-xs text-[#FFFFFF]
        bg-orange-logo rounded-2xl w-32 justify-center items-center px-2 py-2"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {account && (
        <div className="w-full mt-5 ">
          <div className=" flex flex-col  mx-24 px-6 py-6  bg-white">
            <div>
              <p className="font-poppins font-semibold text-[#000000] text-2xl">
                Change Password
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-3">
              <div className="flex flex-col">
                <label class="text-[#344054] font-medium font-poppins">
                  Current Password*
                </label>
                <input
                  class="border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
                  type="text"
                  value={currentPassword}
                  onChange={handleCurrentPassword}
                  placeholder="Enter your current password"
                />
              </div>

              <div className="flex flex-col">
                <label class="text-[#344054] font-medium font-poppins">
                  New Password*
                </label>
                <input
                  class="border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
                  type="text"
                  value={newPassword}
                  onChange={handleNewPassword}
                  placeholder="Create a new password"
                />
                <label class="text-[#475467] font-normal font-inter text-sm mt-1">
                  Must be at least 8 characters.
                </label>
              </div>

              <div className="flex flex-col">
                <label class="text-[#344054] font-medium font-poppins">
                  Confirm Password*
                </label>
                <input
                  class="border focus:outline-none rounded-lg px-2 py-2 bg-white border-[#D0D5DD]"
                  type="text"
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  placeholder="Enter password to confirm"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col  mx-24 px-6 py-6 rounded-3xl bg-white">
            <div>
              <p className="font-poppins font-semibold text-[#2B2D42] text-2xl">
                Language Preference
              </p>
            </div>
            <div className="mt-3">
              <p className="font-inter font-medium text-[#2B2D42] text-sm">
                Select Language
              </p>
            </div>
            <div className="flex  w-full   rounded-xl h-16 bg-white mt-2 px-2 py-2">
              <div className=" flex items-center justify-between rounded-lg w-full border border-[#D0D5DD]">
                <p className="ml-2 font-poppins font-bold text-[#2B2D42] text-xs ">
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
      )}
      {notification && (
        <div className="w-full mt-5 ">
          <div className=" flex flex-col gap-4 px-3 py-3 mx-24 rounded-3xl bg-white">
            <div>
              <p className="font-poppins font-semibold text-[#2B2D42] text-2xl">
                Notifications
              </p>
            </div>
            <div>
              <p className="font-poppins font-semibold text-[#2B2D42] text-xl">
                Email Notification
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-poppins font-normal text-[#2B2D42] text-xl">
                Receive Updates via Email
              </p>
              <input
                type="checkbox"
                checked={emailupdates}
                onChange={() => {
                  setemailupdates(!emailupdates);
                }}
                className="accent-[#FB8500] text-white "
                name="checkbox1"
                value="value1"
              ></input>
            </div>
            <div>
              <p className="font-poppins font-semibold text-[#2B2D42] text-xl">
                Classes you're Attending
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-poppins font-normal text-[#2B2D42] text-xl">
                Activities from teacher
              </p>
              <input
                type="checkbox"
                checked={teacheractivity}
                onChange={() => {
                  setteacheractivity(!teacheractivity);
                }}
                className="accent-[#FB8500] text-white"
                name="checkbox1"
                value="value1"
              ></input>
            </div>
            <div className="flex justify-between">
              <p className="font-poppins font-normal text-[#2B2D42] text-xl">
                Invitation to join classes as student
              </p>
              <input
                type="checkbox"
                checked={studentinvite}
                onChange={() => {
                  setstudentinvite(!studentinvite);
                }}
                className="accent-[#FB8500] text-white"
                name="checkbox1"
                value="value1"
              ></input>
            </div>
            <div className="flex justify-between">
              <p className="font-poppins font-normal text-[#2B2D42] text-xl">
                Due date reminders for your activity
              </p>
              <input
                type="checkbox"
                checked={duedateRem}
                onChange={() => {
                  setduedateRem(!duedateRem);
                }}
                className="accent-[#FB8500] text-white"
                name="checkbox1"
                value="value1"
              ></input>
            </div>
            <div>
              <p className="font-poppins font-semibold text-[#2B2D42] text-xl">
                Classes you teach
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-poppins font-normal text-[#2B2D42] text-xl">
                Late submission of student activity
              </p>
              <input
                type="checkbox"
                checked={submission}
                onChange={() => {
                  setsubmission(!submission);
                }}
                className="accent-[#FB8500] text-white"
                name="checkbox1"
                value="value1"
              ></input>
            </div>
            <div className="flex justify-between">
              <p className="font-poppins font-normal text-[#2B2D42] text-xl">
                Resubmissions of activity
              </p>
              <input
                type="checkbox"
                checked={resubmission}
                onChange={() => {
                  setresubmission(!resubmission);
                }}
                className="accent-[#FB8500] text-white"
                name="checkbox1"
                value="value1"
              ></input>
            </div>

            <div>
              <p className="font-poppins font-semibold text-[#2B2D42] text-2xl">
                Class Notification
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-poppins font-medium text-[#2B2D42] text-2xl">
                Class A
              </p>
              <input
                type="checkbox"
                checked={classA}
                onChange={() => {
                  setclassA(!classA);
                }}
                className="accent-[#FB8500] text-white"
                name="checkbox1"
                value="value1"
              ></input>
            </div>
            <div className="flex justify-between">
              <p className="font-poppins font-medium text-[#2B2D42] text-2xl">
                Class B
              </p>
              <input
                type="checkbox"
                checked={ClassB}
                onChange={() => {
                  setclassB(!ClassB);
                }}
                className="accent-[#FB8500] text-white"
                name="checkbox1"
                value="value1"
              ></input>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Setting;
