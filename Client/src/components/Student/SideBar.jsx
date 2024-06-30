import React, { useState } from "react";
import { IoGrid } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { BsArchive, BsListTask } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { FiClipboard } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { Shared  } from "../../shared";

import { useNavigate } from "react-router-dom";

export default function Sidebar({ show, setter }) {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const MenuList = [
    {
      name: "Dashboard",
      route: "/student/dashboard",
      icon: <IoGrid />,
    },
    {
      name: "Classes",
      route: "/student/classes",
      icon: <BsArchive />,
    },
    {
      name: "Activities",
      route: "/student/allactivities",
      icon: <GiGraduateCap />,
    },
    {
      name: "Grades",
      route: "/student/grades",
      icon: <FiClipboard />,
    },
    {
      name: "Resources",
      route: "/student/resources",
      icon: <BsListTask />,
    },
    {
      name: "Notification",
      route: "/student/notification",
      icon: <FaRegBell />,
    },
    {
      name: "Settings",
      route: "/student/settings",
      icon: <FiSettings />,
    },
    // {
    //   name: "Lesson",
    //   route: "/student/lesson",
    //   icon: <FiSettings />,
    // },
    {
      name: "Log Out",
      route: "/logout",
      icon: <CiLogout />,
    },
  ];

  // Define our base class
  const className =
    "bg-white w-[250px] transition-[margin-left] ease-in-out duration-500 relative md:static top-0 bottom-0 left-0 z-40 overflow-y: auto";
  // Append class based on state of sidebar visibility
  const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

  const handleLogout = async () => {
    try {

      // Clear session data from sessionStorage
      sessionStorage.clear();
  
      // Send request to backend to logout
      const response = await fetch(Shared.apiurl + '/api/auth/logout', {
        method: 'POST',
        credentials: 'include', // Include credentials for cookies
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Logout failed');
      }
  
      // Logout successful, navigate to login page
      navigate("/");
  
    } catch (error) {
      console.error('Logout error:', error.message);
      // Handle error appropriately, e.g., show error message to the user
    }
  };
  

  // Clickable menu items
  const MenuItem = ({ icon, name, route, index }) => {
    const handleClick = () => {
      if (route === "/logout") {
        handleLogout();
      } else {
        setter((oldVal) => !oldVal);
        setSelected(index);
        navigate(route);
      }
    };

    return (
      <div
        onClick={handleClick}
        className={`flex gap-1 [&>*]:my-auto text-md mt-4 py-2 px-4 rounded-lg ${
          selected === index ? "bg-orange-logo" : "bg-white"
        } cursor-pointer`}
      >
        <div
          className={`text-xl flex [&>*]:mx-auto w-[25px] ${
            selected === index ? "text-white" : "text-gray-1"
          }`}
        >
          {icon}
        </div>
        <div
          className={`${
            selected === index ? "text-white" : "text-gray-1"
          } text-lg font-[Poppins] font-normal ml-3`}
        >
          {name}
        </div>
      </div>
    );
  };

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-orange-1 z-30`}
      onClick={() => {
        setter((oldVal) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass} p-10`}>
        <div className="flex flex-col mb-1 py-2">
          <img
            src={"/assets/user.svg"}
            alt="Company Logo"
            width={300}
            height={300}
            className="rounded-full mb-2"
          />
          <h3 className="text-center text-base font-semibold font-[Poppins] text-black-1">
            {sessionStorage.getItem('Name')}
          </h3>
          <h3 className="text-center text-base font-normal font-[Poppins] text-gray-1">
            Computer Science
          </h3>
          <h3 className="text-center text-base font-semibold font-[Poppins] text-black-1">
            Student
          </h3>
        </div>
        <div className="flex flex-col">
          {MenuList.map((item, index) => (
            <MenuItem
              key={index}
              index={index}
              icon={item.icon}
              name={item.name}
              route={item.route}
            />
          ))}
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
