import React, { useState, useEffect } from "react";
import "./Modal.css";
import { IoMdLogIn } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Modal } from "@mantine/core";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Shared } from "../../shared";

function SignIn({ isOpen, onClose }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [Emailerror, setEmailError] = useState("");
  const [Role, setRole] = useState(""); // New state for role
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

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

  const handleRole = (event) => {
    setRole(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

 async function login(email, password, role) {
  try {
    const raw = JSON.stringify({
      email: email,
      password: password,
      role: role,
    });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      credentials: "include", // This ensures cookies are sent with the request
      redirect: "follow",
    };

    const response = await fetch(Shared.apiurl + "/api/auth/login", requestOptions);
    const result = await response.json();

    console.log("Response:", result);
    toast.success(`!!: ${result.message}`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    if (result.message === "Login successful") {
      // Store session information
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('userRole', role);

      sessionStorage.setItem('Name', result.user.Name);
      sessionStorage.setItem('Email', result.user.Email);
      sessionStorage.setItem('Password', result.user.Password);

      // Redirect to appropriate dashboard based on role
      if (role === "student") {
        sessionStorage.setItem('StudentID', result.user.StudentID);
        sessionStorage.setItem('SubscriptionStatus', result.user.SubscriptionStatus);
        sessionStorage.setItem('Phone', result.user.Phone);
        sessionStorage.setItem('Guardian', result.user.Guardian);
        sessionStorage.setItem('ClassID', result.user.ClassID);
        sessionStorage.setItem('TeacherID', result.user.TeacherID);

        console.log("Navigating to student dashboard...");
        navigate(`/student/dashboard`);
      } else if (role === "teacher") {
        sessionStorage.setItem('ApplicationStatus', result.user.ApplicationStatus);
        sessionStorage.setItem('TeacherID', result.user.TeacherID);

        console.log("Navigating to teacher dashboard...");
        navigate(`/teacher/dashboard`);
      } else if (role === "admin") {
        console.log("Navigating to admin dashboard...");
        console.log(sessionStorage.getItem('userRole'));
        console.log(sessionStorage.getItem('isLoggedIn'));
        navigate(`/admin/classes`);
      }
    } else {
      console.log("Login failed with message: ", result.message);
    }
  } catch (error) {
    console.error("Login failed:", error.response ? error.response.data : error.message);
    toast.error("Login failed: " + (error.response ? error.response.data : error.message), {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

  
  
  return (
    <Modal
      withinPortal
      withOverlay
      opened={isOpen}
      size={"auto"}
      radius="xl"
      centered
      withCloseButton={false}
    >
      <div className="px-4 pb-4">
        <div className="flex justify-end ">
          <RxCross2
            className="hover:cursor-pointer"
            onClick={onClose}
            size={30}
          />
        </div>
        <div className="flex justify-center">
          <div className="w-9 h-10 bg-white drop-shadow-sm flex justify-center items-center rounded-lg">
            <IoMdLogIn size={30} />
          </div>
        </div>
        <div className="flex justify-center flex-col gap-1">
          <p className="inline-block text-center text-xl font-bold text-[#101828] font-poppins">
            Hesabınıza giriş yapın
          </p>
          <p className="inline-block text-center text-[#475467] font-normal text-lg font-poppins">
            Hoş geldiniz! Lütfen bilgilerinizi giriniz.
          </p>
        </div>
        <div className="flex flex-col gap-1 mt-4">
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
            <option value="admin">Yönetici</option>
          </select>
          <label className="text-[#2B2D42] font-medium font-poppins">E-posta</label>
          <input
            className={`${Emailerror ? 'border-["#FF0000"]' : 'border-["#333"]'
              } border focus:outline-none   rounded-lg px-2 py-2 bg-white`}
            type="text"
            value={Email}
            onChange={handleEmail}
            placeholder={
              Emailerror ? Emailerror : "E-posta adresinizi giriniz"
            }
          />
          <label className="text-[#2B2D42] font-medium font-poppins">Parola</label>
          <input
            className={`border focus:outline-none rounded-lg px-2 py-2 bg-white ${isEmpty ? "border-[#FF0000]" : "border-[#D0D5DD]"
              }`}
            type="password"
            value={Password}
            onChange={handlePassword}
            placeholder={isEmpty ? "Cannot be empty" : "Şifrenizi girin"}
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
            />
            <label className="ml-1 text-[#2B2D42] font-semibold font-poppins">
              Beni hatırla
            </label>
          </div>
          <div>
            <button className="bg-white text-[#FB8500] font-bold font-poppins">
              Şifrenizi mi unuttunuz?
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <button
            onClick={() => login(Email, Password, Role)}
            className="bg-white hover:bg-orange-logo h-10 rounded-lg border border-[#D0D5DD] font-semibold font-poppins"
          >
            Giriş Yap
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

export default SignIn;
