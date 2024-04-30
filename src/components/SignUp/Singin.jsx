import React, { useState } from "react";
import "./Modal.css";
import { IoMdLogIn } from "react-icons/io";
import { AiTwotoneFlag } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Shared } from "../../shared";
import { Modal, Button, Group, rem } from "@mantine/core";

function SignIn({ isOpen, onClose }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  async function login(email, password) {
    try {
      const response = await fetch(Shared.apiurl + "/api/auth/login", {
        email: email,
        password: password,
      });
      console.log("Login successful");
      console.log("Response:", response.data.user.role);
      return response.data; // Return response data if needed
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
      throw error;
      // Re-throw error to handle it at a higher level if needed
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
      <div className="px-4 pb-4">
        <div className="flex justify-end mt-4">
          <RxCross2
            className="hover:cursor-pointer"
            onClick={onClose}
            size={30}
          />
        </div>
        <div className="flex justify-center">
          <div className=" w-10 h-10 bg-white drop-shadow-sm flex justify-center items-center rounded-lg">
            <IoMdLogIn size={30} />
          </div>
        </div>

        <div className="flex justify-center flex-col gap-1">
          <p className="inline-block text-center text-xl font-bold text-[#101828] font-poppins">
            Hesabınıza giriş yapın
          </p>
          <p className="inline-block text-center  text-[#475467] font-normal text-lg font-poppins">
            Hoş geldiniz! Lütfen bilgilerinizi giriniz.
          </p>
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label className=" text-[#2B2D42]  font-medium font-poppins">
            E-posta
          </label>
          <input
            className="border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
            type="text"
            value={Email}
            onChange={handleEmail}
            placeholder="E-posta adresinizi giriniz"
          />
          <label className=" text-[#2B2D42]  font-medium font-poppins">
            Parola
          </label>
          <input
            className="border focus:outline-none rounded-lg px-2 py-2 bg-white border-[#D0D5DD]"
            type="password"
            value={Password}
            onChange={handlePassword}
            placeholder="Şifrenizi girin"
          />
        </div>
        <div className="flex justify-between mt-3">
          <div className="gap-2">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="accent-[#FB8500] text-white"
              name="checkbox1"
              value="value1"
            ></input>
            <label className="ml-1 text-[#2B2D42]  font-semibold font-poppins">
              Beni hatırla
            </label>
          </div>
          <div>
            <button className="bg-white text-[#FB8500]  font-bold font-poppins ">
              Şifrenizi mi unuttunuz?
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <a
            href="/signup"
            className="bg-orange-logo h-10 rounded-lg text-[#FFFFFF] font-semibold font-poppins text-center pt-2 "
          >
            Giriş Yap
          </a>
          <button
            onClick={() => {
              login(Email, Password);
            }}
            className="bg-white h-10 rounded-lg  border border-[#D0D5DD] font-semibold font-poppins "
          >
            İptal
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default SignIn;
