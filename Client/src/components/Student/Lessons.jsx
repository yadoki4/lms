import React, { useState, useEffect } from "react";
import LessonCard from "../../customComponents/LessonCard";
import axios from 'axios';
import Activites from "../../components/Student/Activites ";
import { Shared } from "../../shared";
import { useNavigate } from "react-router-dom";

const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  const [activities, setActivities] = useState([]);
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn || userRole !== 'student') {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    axios.get(Shared.apiurl + '/api/lessons')
      .then(response => {
        setLessons(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the lessons!', error);
      });
  }, []);

  const handleLessonClick = (lessonId) => {
    setSelectedLessonId(lessonId);
    axios.get(Shared.apiurl + `/api/lessons/${lessonId}/activities`, {
      params: {
        teacherId: sessionStorage.getItem('TeacherID')
      }
    })
    .then(response => {
      setActivities(response.data);
      // Convert the array to JSON string
      const activitiesJSON = JSON.stringify(response.data);
    
      // Store the JSON string in session storage
      sessionStorage.setItem('activities', activitiesJSON);
      navigate('/student/activity');
    })
    .catch(error => {
      console.error('There was an error fetching the activities!', error);
    });
  };

  return (
    <div className="mx-14">
      <div className="flex gap-6 w-full rounded-xl bg-white mt-4 px-3 py-3">
        <div className="justify-center items-center">
          <img src="/assets/lesson.svg" alt="Lesson Icon" />
        </div>
        <div className="justify-center items-center ">
          <p className="text-center font-poppins font-bold text-[#000000] text-3xl">
            Lessons
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.LessonID}
            lesson={lesson}
            onClick={() => handleLessonClick(lesson.LessonID)}
          />
        ))}
      </div>
      {/* {selectedLessonId && (
        <div className="flex flex-col mt-4">
          <h2 className="text-center font-poppins font-bold text-[#000000] text-2xl">
            Activities
          </h2>
          {activities.map((activity) => (
            <Activites key={activity.id} activity={activity} />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Lessons;
