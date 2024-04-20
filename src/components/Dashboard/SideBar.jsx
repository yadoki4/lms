// @/components/Layout/Sidebar.js
import React, { useState, useEffect } from 'react'
import { IoGrid } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { BsArchive, BsListTask, BsHandIndexThumbFill } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
import { FaRegBell } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';


export default function Sidebar({ show, setter }) { 

  const [selected, setSelected] = useState(0)

  const MenuList = [
    {                        
      name:"Dashboard",
      route:"/dashboard/teacher",
      icon:<IoGrid />
    },
    {                        
      name:"Classes",
      route:"/dashboard/classes",
      icon:<BsArchive />
    },
    {                        
      name:"Students",
      route:"/dashboard/student",
      icon:<GiGraduateCap />
    },
    {                        
      name:"Curriculum",
      route:"/dashboard/curriculum",
      icon:<BsListTask />
    },
    {
      name:"Attendance",
      route:"/dashboard/attendence",
      icon:<SlNotebook />
    },
    {
      name:"Notification",
      route:"/dashboard/notification",
      icon:<FaRegBell />
    },
    {
      name:"Settings",
      route:"/dashboard/settings",
      icon:<FiSettings />
    },
    {
      name:"Log Out",
      route:"/login",
      icon:<CiLogout />
    }
  ]

    // Define our base class
    const className = "bg-white w-[250px] transition-[margin-left] ease-in-out duration-500 relative md:static top-0 bottom-0 left-0 z-40 overflow-y: auto";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

    // Clickable menu items
    const MenuItem = ({ icon, name, route, index }) => {
        // Highlight menu item based on currently displayed route
       // const colorClass = router.pathname === route ? "text-white" : "text-white/50 hover:text-white";

        return (
            <Link
                onClick={() => {
                    setter(oldVal => !oldVal);
                    setSelected(index)
                }}
                to={route}
                className={`flex gap-1 [&>*]:my-auto text-md mt-4 py-2 px-4 rounded-lg ${selected==index?'bg-orange-logo':'bg-white'} cursor-pointer`}
            >
                <div className={`text-xl flex [&>*]:mx-auto w-[25px] ${selected==index?'text-white':'text-gray-1'}`}>
                    {icon}
                </div>
                <div className={`${selected==index?'text-white':'text-gray-1'} text-lg font-[Poppins] font-normal ml-3`}>{name}</div>
            </Link>
        )
    }

    // Overlay to prevent clicks in background, also serves as our close button
    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-orange-1 z-30`}
            onClick={() => {
                setter(oldVal => !oldVal);
            }}/>
    )

    return (
        <>
            <div className={`${className}${appendClass} p-10`}>
                <div className="flex flex-col mb-1 py-2">
                  <img src={"/assets/user.svg"} alt="Company Logo" width={300} height={300} className='rounded-full mb-2' />
                  <h3 className='text-center text-base font-semibold font-[Poppins] text-black-1'>Max</h3>
                  <h3 className='text-center text-base font-normal font-[Poppins] text-gray-1'>Computer Science</h3>
                  <h3 className='text-center text-base font-semibold font-[Poppins] text-black-1'>Teacher</h3>
                </div>
                <div className="flex flex-col">
                  {
                    MenuList.map((item,index)=>(
                      <MenuItem 
                        index={index}
                        icon={item.icon}
                        name={item.name}
                        route={item.route}
                      />
                    ))
                  }
                </div>
            </div>
            {show ? <ModalOverlay /> : <></>}
        </>
    )
}