import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../SignUp/Singin";
import SignupModal from "../SignUp/Signup";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleSignupModal = () => {
    setShowSignupModal(!showSignupModal);
  };
  return (
    <nav className="bg-gray-50 max-w-full md:max-w-screen-xl mx-auto px-6 md:px-1 lg:px-20 py-4 md:py-6">
      <div className="flex justify-between md:justify-evenly items-center">
        <div className="flex gap-8">
          {/* Primary Navbar items */}
          <div className="hidden md:flex gap-8">
            
          <div className="flex items-center w-20 h-8 gap-1">
          {/* Website Logo */}
          <button  onClick={() => {
            navigate("/");
          }}
            className="text-orange-logo text-2xl font-bold font-poppins"
          >
            LOGO
          </button>
        </div>
            <a
              href=""
              className="text-gray-600 m-1 font-normal font-poppins"
            >
              Courses
            </a>
            <a
              href=""
              className="text-gray-600 mt-1 font-normal font-poppins "
            >
              About Us
            </a>
          </div>
        </div>
        
        {/* Secondary Navbar items */}
        <div className="hidden md:flex items-center gap-8">
          
          <a
            href=""
            className="text-gray-600 font-normal font-poppins"
          >
            Contact
          </a>
          <button
            onClick={toggleLoginModal}
            className="text-gray-600 font-normal font-poppins"
          >
            Sign in
          </button>

          <button
            onClick={toggleSignupModal}
            className="text-gray-600 font-normal font-poppins"
          >
            Sign up
          </button>
          <button
                onClick={() => {
            navigate("/pricing");
          }}
              className="rounded-xl bg-[#5988fe] text-[#FFFFFF] font-poppins font-semibold text-base w-52  h-12
           justify-center items-center px-2 py-2"
            >
              Find Your Plan
            </button>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <div className="relative">
            <input
              className="bg-gray-50 text-sm font-normal font-['Poppins] italic ml-1 py-1 pr-8 pl-3 rounded-full border border-gray-4 focus:outline-none focus:border-blue-500"
              placeholder="I'm looking for..."
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
          <button  onClick={() => {
            navigate("/");
          }}
            className="text-orange-logo text-2xl font-bold font-poppins"
          >
            LOGO
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
            <li className="active">
             
            </li>
            <li>
              <a
                href="#services"
                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                Contact
              </a>
              <button
                onClick={() => {
            navigate("/pricing");
          }}
              className="rounded-xl bg-[#5988fe] text-[#FFFFFF] font-poppins font-semibold text-base w-52  h-12
           justify-center items-center px-2 py-2"
            >
              Find Your Plan
            </button>
            </li>
          </ul>
        </div>
      )}
       {showLoginModal && <LoginModal setOpenModal={setShowLoginModal} />}

{showSignupModal && <SignupModal setOpenModal={setShowSignupModal} />}

    </nav>
  );
};

export default Navbar;
