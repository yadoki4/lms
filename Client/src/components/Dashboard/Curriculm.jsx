import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import SearchBar from "../../customComponents/SearchBar";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Shared } from "../../shared";

const Curriculm = () => {
  const [showView, setShowView] = useState(false);
  const [createActivityView, setCreateActivityView] = useState(false);
  const [curriculumView, setCurriculumView] = useState(true);
  const [editActivityView, setEditActivityView] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [Outcome, setOutcome] = useState("");

  const [points, setPoints] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [submissionLanguage, setSubmissionLanguage] = useState("");
  const [lesson, setLesson] = useState("");
  const [week, setWeek] = useState("");
  const [teacherId, setTeacherId] = useState(sessionStorage.getItem('TeacherID'));
  const [activities, setActivities] = useState({});


  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn || userRole !== 'teacher') {
      navigate('/');
    }
  }, [navigate]);


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

  const handleSaveActivity = () => {
    const activityData = {
      title,
      description,
      instructions,
      Outcome,
      points,
      dueDate,
      teacherId,
      lesson,
      week
    };

    axios.post(Shared.apiurl + "/api/createactivity", activityData)
      .then(response => {
        console.log(response.data);
        setCurriculumView(true);
        setCreateActivityView(false);
        // Refresh activities
        axios.get(Shared.apiurl + "/api/activities")
          .then(response => {
            setActivities(response.data);
          })
          .catch(error => {
            console.error('There was an error fetching the activities!', error);
          });
      })
      .catch(error => {
        console.error('There was an error saving the activity!', error);
      });
  };

  return (
    <div>
      <SearchBar />
      {curriculumView && (
        <div className="flex flex-col gap-4 mx-16">
          <div className="w-full flex justify-end items-center mt-4">
            <div className="flex gap-1 items-center justify-center w-44 h-10 bg-white rounded-lg px-2 py-2">
              <FiPlus size={16} />
              <button
                onClick={() => {
                  setCurriculumView(false);
                  setCreateActivityView(true);
                }}
                className="font-poppins font-bold text-[#2B2D42] text-xs"
              >
                Add new Activity
              </button>
            </div>
          </div>
          {Object.keys(activities).map(lesson => (
            <div key={lesson}>
              <div className="flex w-full rounded-xl h-16 bg-white mt-4 px-2 py-2">
                <div className="w-2 h-12 rounded-md bg-orange-logo"></div>
                <div className="flex items-center justify-between w-full">
                  <p className="ml-2 font-poppins font-bold text-[#2B2D42] text-xs">
                    Module {lesson}
                  </p>
                  <div className="flex justify-end items-center">
                    <IoIosArrowDown onClick={toggleView} />
                  </div>
                </div>
              </div>
              {showView && activities[lesson].map(activity => (
                <div key={activity.ActivityID} className="flex w-full rounded-xl h-16 bg-white mt-4 px-2 py-2">
                  <div className="flex items-center justify-between w-full">
                    <p className="ml-2 font-poppins font-bold text-[#2B2D42] text-xs">
                      {activity.Title}
                    </p>
                    <div className="flex justify-between items-center gap-3">
                      <MdOutlineModeEditOutline
                        onClick={() => {
                          setCreateActivityView(false);
                          setCurriculumView(false);
                          setEditActivityView(true);
                        }}
                        size={20}
                      />
                      <RiDeleteBinLine size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      
      {createActivityView && (
        <div className="w-full mt-8">
          <div className="flex flex-col mx-20 px-6 py-6 bg-white">
            <div>
              <p className="font-poppins font-semibold text-[#000000] text-2xl">
                Create activity
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[#344054] font-medium font-poppins text-sm">
                  Title
                </label>
                <input
                  className="focus:outline-none border border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter title"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#344054] font-medium font-poppins text-sm">
                  Description
                </label>
                <textarea
                  className="mt-1 w-full border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  cols={50}
                  placeholder="Enter Description"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#344054] font-medium font-poppins text-sm">
                  Instructions
                </label>
                <textarea
                  className="mt-1 w-full border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  rows={5}
                  cols={50}
                  placeholder="Enter Instructions"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#344054] font-medium font-poppins text-sm">
                  Learning Outcome
                </label>
                <textarea
                  className="mt-1 w-full border focus:outline-none border-[#D0D5DD] rounded-lg px-2 py-2"
                  value={Outcome}
                  onChange={(e) => setOutcome(e.target.value)}
                  rows={5}
                  cols={50}
                  placeholder="Enter Outcome"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#344054] font-medium font-poppins text-sm">
                  Points
                </label>
                <input
                  className="focus:outline-none border border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
                  type="text"
                  value={points}
                  onChange={(e) => setPoints(e.target.value)}
                  placeholder="Enter Points"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#344054] font-medium font-poppins text-sm">
                  Due Date
                </label>
                <input
                  className="focus:outline-none border border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  placeholder="Enter due date"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#344054] font-medium font-poppins text-sm">
                  Module
                </label>
                <select
                  className="focus:outline-none border border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
                  value={lesson}
                  onChange={(e) => setLesson(e.target.value)}
                >
                  <option value="">Select Module</option>
                  {[...Array(8).keys()].map(i => (
                    <option key={i + 1} value={i + 1}>Lesson {i + 1}</option>
                  ))}
                </select>
                <label className="text-[#344054] font-medium font-poppins text-sm">
                  Week
                </label>
                <select
                  className="focus:outline-none border border-[#D0D5DD] rounded-lg px-2 py-2 bg-white"
                  value={week}
                  onChange={(e) => setWeek(e.target.value)}
                >
                  <option value="">Select Week</option>
                  {[...Array(4).keys()].map(i => (
                    <option key={i + 1} value={i + 1}>Week {i + 1}</option>
                  ))}
                </select>

              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4 mx-20 px-6 py-6">
            <button
              onClick={handleSaveActivity}
              className="bg-orange-logo text-white font-poppins font-medium rounded-xl w-40 justify-center items-center px-2 py-2"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Edit activity view can be implemented similarly */}
    </div>
  );
};

export default Curriculm;
