import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Modal.css";
import { AiTwotoneFlag } from "react-icons/ai";
import { Shared } from "../../shared";

import { RxCross2 } from "react-icons/rx";
import { Modal, Button, Group, rem } from "@mantine/core";
import { useNavigate } from "react-router-dom";
export default function Signup({ isOpen, onClose }) {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [Name, setName] = useState();
  const [Role, setRole] = useState();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleRole = (event) => {
    setRole(event.target.value);
  };
  const navigate = useNavigate();
  async function SignnUP() {
    try {
      const raw = JSON.stringify({
        name: Name,
        email: Email,
        password: Password,
        role: Role,
      });
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        Shared.apiurl + "/api/auth/signup",
        requestOptions
      );
      const result = await response.json();
      console.log("Response:", result.message);
      toast.success(`!!: ${result.message}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // if (result.message !== "User created successfully") {
      //   navigate("/dashboard/teacher");
      //   //setALert(true);
      // }
      // if (result.message == "User created successfully") {
      //   navigate("/student/sdashboard");
      // }
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
    }
  }
  return (
    <Modal
      withinPortal
      withOverlay
      opened={isOpen}
      size={"auto"}
      className="modalContainer"
      radius="xl"
      centered
      withCloseButton={false}
    >
      <div className="">
        <div class="flex justify-end">
          <RxCross2 class="hover:cursor-pointer" onClick={onClose} size={30} />
        </div>
        <div class="flex justify-start">
          <div class="w-10 h-10 bg-white shadow-sm flex justify-center items-center rounded-lg">
            <AiTwotoneFlag size={30} />
          </div>
        </div>

        <div class="flex justify-center flex-col gap-1 mt-4">
          <p class="text-center text-xl font-bold text-[#101828] font-poppins">
            Bir "Ubicrafter" olmak için kaydolun
          </p>
        </div>
        <div class=" flex flex-col gap-1 mt-4">
          <label class="text-[#2B2D42] font-medium font-poppins">İsim*</label>
          <input
            class="border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
            type="text"
            value={Name}
            onChange={handleName}
            placeholder="İsminizi giriniz"
          />
          <label class="text-[#2B2D42] font-medium font-poppins">
            E-posta*
          </label>
          <input
            class="border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
            type="text"
            value={Email}
            onChange={handleEmail}
            placeholder="E-posta adresinizi giriniz"
          />
            <label className="text-[#2B2D42] font-medium font-poppins">Rol*</label>
        <input
          className="border focus:outline-none border-[#D0D5DD] rounded-lg px-1 py-1 bg-white"
          type="text"
          value={Role}
          onChange={handleRole}
          placeholder="Rolünüzü girin"
        />
          <label class="text-[#2B2D42] font-medium font-poppins">Parola*</label>
          <input
            class="border focus:outline-none rounded-lg px-2 py-2 bg-white border-[#D0D5DD]"
            type="text"
            value={Password}
            onChange={handlePassword}
            placeholder="Bir parola oluşturun"
          />
        </div>
        <div class="flex mt-3">
          <div class="gap-2">
            <label class="ml-1 text-[#475467] font-normal font-poppins">
              Must be at least 8 characters.
            </label>
          </div>
        </div>
        <div class="flex flex-col gap-3 mt-5">
        <button
          onClick={SignnUP}
          className="bg-orange-logo h-10 rounded-lg text-[#FFFFFF] font-semibold font-poppins"
        >
          Kaydol
        </button>
        <button
          onClick={onClose}
          className="bg-white h-10 rounded-lg border border-[#D0D5DD] font-semibold font-poppins"
        >
          İptal
        </button>
        </div>
      </div>
    </Modal>
  );
}
