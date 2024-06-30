import React, { useState, useEffect } from "react";
import SearchBar from "../../customComponents/SearchBar";
import { Shared } from "../../shared";
import { useNavigate } from 'react-router-dom';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn || userRole !== 'teacher') {
      navigate('/');
    }
  }, [navigate]);


  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const teacherId = sessionStorage.getItem('TeacherID');
        const response = await fetch(Shared.apiurl + "/api/classes", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${teacherId}`
          },
          credentials: 'include'
        });
        if (!response.ok) {
          throw new Error('Failed to fetch classes');
        }
        const data = await response.json();
        setClasses(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching class data:", error);
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col gap-4 px-4 lg:px-16">
      <SearchBar />
      {classes.map((cls) => (
        <div key={cls.ClassID} className="flex flex-col md:flex-row md:items-start items-center bg-white rounded-3xl px-4 sm:px-6 py-6 gap-4 shadow-lg">
          <div className="h-48 w-full md:w-64 bg-[#D9D9D9] rounded-3xl"></div>
          <div className="flex flex-col px-4 py-4">
            <p className="mt-3 font-poppins font-bold text-2xl sm:text-3xl text-[#2B2D42]">
              Class {cls.ClassNo}
            </p>
            <p className="mt-3 font-poppins text-[#2B2D42] font-medium text-xl sm:text-2xl">
              Students: {cls.Total_Students}
            </p>
            <button className="font-poppins text-xs sm:text-sm text-[#ffffff] w-28 sm:w-32 h-10 sm:h-11 mt-3 rounded-3xl font-bold bg-orange-logo px-4 focus:outline-none focus:ring-2 focus:ring-orange-logo focus:ring-opacity-50">
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
