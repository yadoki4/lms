import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Signup from "../SignUp/Signup";
import Singin from "../SignUp/Singin";
import { IoMdLogIn } from "react-icons/io";

import { RxCross2 } from "react-icons/rx";

import { Shared } from "../../shared";
import { Modal } from "@mantine/core";
import { toast } from "react-toastify";

import { Portal } from "@mantine/core";

import logo from "./Color-1.png"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [Email, setEmail] = useState("");
  const [Emailerror, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
    validateEmail(event.target.value);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsEmpty(value === "");
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const validateEmail = (inputValue) => {
    if (!inputValue) {
      setEmailError("Field cannot be empty");
    } else {
      setEmailError("");
    }
  };
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSignupModalOpened, setIsSignupModalOpened] = useState(false);

  const closeSignupModal = () => {
    setShowLoginModal(false);
  };
  const closeSignInModal = () => {
    setIsSignupModalOpened(false);
  };
  async function login() {
    try {
      const raw = JSON.stringify({
        email: Email,
        password: password,
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
        Shared.apiurl + "/api/auth/login",
        requestOptions
      );
      const result = await response.json();
      console.log("Response:", result.user.role);
      console.log(result + "]]]]]]]]]]]]]");
      localStorage.setItem("LogDetails", JSON.stringify(result));
      if (result.message === "Logged in successfully") {
      
        if (result.user.role == "teacher") {
          navigate("/dashboard/teacher");
        }
        if (result.user.role == "student") {
          navigate("/student/sdashboard");
        } else if (result.message === "Invalid email or password") {
          toast.error(`Oops: ${result.message}`, {
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
    } catch (error) {
      toast.error(`Oops: ${error.message}`, {
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
    <nav className="bg-gray-50 max-w-full md:max-w-screen-xl mx-auto px-6 md:px-1 lg:px-20 py-4 md:py-6">
      <div className="flex justify-between md:justify-evenly items-center">
        <div className="flex gap-8">
          {/* Primary Navbar items */}
          <div className="hidden md:flex gap-8">
            <div className="flex items-center w-20 h-8 gap-1">
              {/* Website Logo */}
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="text-orange-logo text-2xl font-bold font-poppins"
              >
                <img src={logo} alt="" />
              </button>
            </div>
            <a href="" className="text-gray-600 m-1 font-normal font-poppins">
              Kurslar
            </a>
            <a href="" className="text-gray-600 mt-1 font-normal font-poppins ">
              Hakkımızda
            </a>
          </div>
        </div>

        {/* Secondary Navbar items */}
        <div className="hidden md:flex items-center gap-8">
          <a href="" className="text-gray-600 font-normal font-poppins">
            İletişim
          </a>
          <button
            onClick={() => {
              setIsSignupModalOpened(true);
            }}
            className="text-gray-600 font-normal font-poppins"
          >
            Giriş Yap
          </button>

          <button
            onClick={() => {
              setShowLoginModal(true);
            }}
            className="text-gray-600 font-normal font-poppins"
          >
            Kaydol
          </button>
          <button
            onClick={() => {
              navigate("/pricing");
            }}
            className="rounded-xl bg-[#fb8500] text-[#FFFFFF] font-poppins font-semibold text-base w-52  h-12
           justify-center items-center px-2 py-2"
          >
            Planlarımızı keşfedin
          </button>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <div className="relative">
            <input
              className="bg-gray-50 text-sm font-normal font-['Poppins] italic ml-1 py-1 pr-8 pl-3 rounded-full border border-gray-4 focus:outline-none focus:border-blue-500"
              placeholder="Şunu Arıyorum..."
            />
            <img
              src="/assets/search.svg"
              alt="Search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 cursor-pointer"
            />
          </div>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex w-full justify-between items-center">
          <div className=" w-20 h-8 gap-1">
            {/* Website Logo */}
            <button
              onClick={() => {
                navigate("/");
              }}
              className="text-orange-logo text-2xl font-bold font-poppins"
            >
              <img src={logo} alt="" />
            </button>
          </div>
          <button
            className="outline-none mobile-menu-button"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 text-gray-500 hover:text-blue-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {showMenu && (
        <div className="md:hidden bg-white">
          <ul className="">
            <li className="active"></li>
            <li>
              <a
                href="#services"
                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                Kurslar
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                Hakkımızda
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                İletişim
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsSignupModalOpened(true);
                }}
                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                Giriş Yap
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowLoginModal(true);
                }}
                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                Kaydol
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  navigate("/pricing");
                }}
                className="rounded-xl bg-[#5988fe] text-[#FFFFFF] font-poppins font-semibold text-base w-52  h-12
           justify-center items-center px-2 py-2"
              >
                Planlarımızı keşfedin
              </button>
            </li>
          </ul>
        </div>
      )}
      {isSignupModalOpened && (
        <Portal>
         <Singin isOpen={isSignupModalOpened} onClose={closeSignInModal} />
      </Portal>
      )}
      {showLoginModal && (
        <Portal>
          <Signup isOpen={showLoginModal} onClose={closeSignupModal} />
        </Portal>
      )}
    </nav>
  );
};

export default Navbar;
