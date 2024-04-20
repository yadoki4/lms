import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const RegestrationSection = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    <div className="bg-orange-1 py-20 form px-20 mt-14 flex  flex-col gap-4">
      <div className=" flex flex-col  mx-24 px-6 py-6 forminner rounded-xl  bg-white">
        <div className="flex justify-between">
          <p className="font-poppins font-semibold text-[#000000] text-2xl">
            Registration
          </p>
          <a
            href="/"
            className="text-orange-logo text-2xl font-bold font-poppins"
          >
            LOGO
          </a>
        </div>
        <div className="mt-2 flex flex-col gap-3">
          <div className="flex flex-col">
            <label class="text-[#344054] font-medium font-poppins">Name*</label>
            <input
              class="border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
              type="text"
              value={currentPassword}
              onChange={handleCurrentPassword}
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label class="text-[#344054] font-medium font-poppins">
              Email*
            </label>
            <input
              class="border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
              type="text"
              value={currentPassword}
              onChange={handleCurrentPassword}
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label class="text-[#344054] font-medium font-poppins">
              Child's Name*
            </label>
            <input
              class="border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
              type="text"
              value={currentPassword}
              onChange={handleCurrentPassword}
              placeholder="Enter your Child's name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#344054] font-medium font-poppins">
              Child's Age*
            </label>
            <input
              class="border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
              type="text"
              value={newPassword}
              onChange={handleNewPassword}
              placeholder="Enter your child's age"
            />
          </div>

          <div className=" flex flex-col rounded-3xl bg-white">
            <div className="">
              <p className="text-[#344054] font-medium font-poppins">
                Preferred Course
              </p>
            </div>
            <div className="flex  w-full   rounded-lg h-16 bg-white  py-2">
              <div className=" flex items-center justify-between rounded-lg w-full border border-[#D0D5DD]">
                <p className="ml-2 font-inter font-normal text-[#667085] text-base ">
                  Select your preferred course
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
      <div className=" flex  rounded-lg mt-10 justify-center  items-center">
        <button
          onClick={() => {}}
          className="bg-orange-logo text-white font-poppins font-medium   rounded-xl w-60 h-11
           justify-center items-center px-2 py-2"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default RegestrationSection;
