import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import SearchBar from "../../customComponents/SearchBar";
import axios from 'axios';
import { Shared } from "../../shared";
import Taskanddesc from "./Taskanddesc";

const AllActivities = () => {
    const [showView, setShowView] = useState(false);
    const [ModuleView, setModuleView] = useState(true);
    const [TaskDiscription, setTask] = useState(false);
    const [item, setItem] = useState({});


    const [Teacher, setTeacher] = useState('');
    const [activities, setActivities] = useState({});

    const navigate = useNavigate();
    useEffect(() => {
      const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
      const userRole = sessionStorage.getItem('userRole');
  
      if (!isLoggedIn || userRole !== 'student') {
        navigate('/');
      }
    }, [navigate]);

    useEffect(() => {
        axios.get(`${Shared.apiurl}/api/teacher/${sessionStorage.getItem('TeacherID')}`)
            .then(response => {
                console.log(response.data.Name);
                setTeacher(response.data.Name);
            })
            .catch(error => {
                console.error('There was an error fetching the teacher!', error);
            });
    }, []);

    useEffect(() => {
        // Fetch activities grouped by lesson
        axios.get(Shared.apiurl + `/api/activities/${sessionStorage.getItem('TeacherID')}`)
            .then(response => {
                setActivities(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the activities!', error);
            });
    }, []);

    const toggleView = () => {
        setShowView(!showView);
    };


    return (
        <div>
            <SearchBar />
            {ModuleView && (
                <div className="flex flex-col gap-4 mx-16">
                    <div className="w-full flex justify-end items-center mt-4">
                    </div>
                    {Object.keys(activities).map(month => (
                        <div key={month}>
                            <div className="flex w-full rounded-xl h-16 bg-white mt-4 px-2 py-2">
                                <div className="w-2 h-12 rounded-md bg-orange-logo"></div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="ml-2 font-poppins font-bold text-[#2B2D42] text-xs">
                                        Module {month}
                                    </p>
                                    <div className="flex justify-end items-center">
                                        <IoIosArrowDown onClick={toggleView} />
                                    </div>
                                </div>
                            </div>
                            {showView && activities[month].map(activity => (
                                <div key={activity.ActivityID} className="flex w-full rounded-xl h-16 bg-white mt-4 px-2 py-2">
                                    <div className="flex items-center justify-between w-full">


                                        <button
                                            onClick={() => {
                                                setModuleView(false)
                                                setTask(true)
                                                setItem(activity)
                                            }}
                                        >
                                            <p className="ml-2 font-poppins font-bold text-[#2B2D42] text-xs">
                                                {activity.Title}
                                            </p>
                                        </button>


                                        <div className="flex justify-between items-center gap-3">

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}

            {TaskDiscription && (
                <Taskanddesc item={item} Teacher={Teacher} />
            )}


        </div>
    );
};

export default AllActivities;
