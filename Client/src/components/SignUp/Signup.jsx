import React, { useState, useEffect} from "react";
import { toast } from "react-toastify";
import "./Modal.css";
import { AiTwotoneFlag } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Modal } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Shared } from "../../shared";

export default function Signup({ isOpen, onClose }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Role, setRole] = useState("");

  useEffect(() => {
    // Check if user is already logged in based on session storage
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const storedRole = sessionStorage.getItem('userRole');
    if (isLoggedIn === 'true' && storedRole) {
      // Redirect to appropriate dashboard based on role
      navigate(`/${storedRole}/dashboard`);
    }
  }, []);

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

      const response = await fetch(Shared.apiurl + "/api/auth/signup", requestOptions);
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
      navigate('/')

    } catch (error) {
      console.error("Signup failed:", error.response ? error.response.data : error.message);
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
      <div>
        <div className="flex justify-end">
          <RxCross2 className="hover:cursor-pointer" onClick={onClose} size={30} />
        </div>
        <div className="flex justify-start">
          <div className="w-10 h-10 bg-white shadow-sm flex justify-center items-center rounded-lg">
            <AiTwotoneFlag size={30} />
          </div>
        </div>

        <div className="flex justify-center flex-col gap-1 mt-4">
          <p className="text-center text-xl font-bold text-[#101828] font-poppins">
            Bir "Ubicrafter" olmak için kaydolun
          </p>
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label className="text-[#2B2D42] font-medium font-poppins">İsim*</label>
          <input
            className="border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
            type="text"
            value={Name}
            onChange={handleName}
            placeholder="İsminizi giriniz"
          />
          <label className="text-[#2B2D42] font-medium font-poppins">E-posta*</label>
          <input
            className="border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
            type="email"
            value={Email}
            onChange={handleEmail}
            placeholder="E-posta adresinizi giriniz"
          />
          <label className="text-[#2B2D42] font-medium font-poppins">Rol*</label>
          <select
            className="border focus:outline-none border-[#D0D5DD] rounded-lg px-1 py-1 bg-white"
            value={Role}
            onChange={handleRole}
          >
            <option value="" disabled>
              Rolünüzü seçin
            </option>
            <option value="teacher">Öğretmen</option>
            <option value="student">Öğrenci</option>
          </select>
          <label className="text-[#2B2D42] font-medium font-poppins">Parola*</label>
          <input
            className="border focus:outline-none rounded-lg px-2 py-2 bg-white border-[#D0D5DD]"
            type="password"
            value={Password}
            onChange={handlePassword}
            placeholder="Bir parola oluşturun"
          />
        </div>
        <div className="flex mt-3">
          <div className="gap-2">
            <label className="ml-1 text-[#475467] font-normal font-poppins">
              Must be at least 8 characters.
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-5">
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
