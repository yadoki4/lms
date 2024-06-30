import React, { useState, useEffect } from "react";
import SearchBar from "../../customComponents/SearchBar";
import { Shared } from "../../shared";
import { useNavigate } from 'react-router-dom';

const AdminClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [teachers, setTeachers] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn || userRole !== 'admin') {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch(Shared.apiurl + "/api/Allclasses", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${teacherId}`
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

  const fetchTeachers = async () => {
    try {
      const response = await fetch(Shared.apiurl + "/api/allteachers");
      if (!response.ok) {
        throw new Error('Failed to fetch teachers');
      }
      const data = await response.json();
      setTeachers(data);
    } catch (error) {
      console.error("Error fetching teachers data:", error);
    }
  };

  const handleAssignClick = (classId) => {
    setSelectedClassId(classId);
    fetchTeachers();
  };

  const handleTeacherAssign = async (teacherId) => {
    try {
      const response = await fetch(Shared.apiurl + `/api/assignteacher`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ classId: selectedClassId, teacherId }),
      });
      if (response.ok) {
        // Refresh the class data after assigning a teacher
        const updatedClasses = classes.map(cls => 
          cls.ClassID === selectedClassId ? { ...cls, TeacherID: teacherId, TeacherName: teachers.find(t => t.TeacherID === teacherId).Name } : cls
        );
        setClasses(updatedClasses);
        setSelectedClassId(null);
      } else {
        console.error('Failed to assign teacher');
      }
    } catch (error) {
      console.error('Error assigning teacher:', error);
    }
  };

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
            <p className="mt-3 font-poppins text-[#2B2D42] font-medium text-xl sm:text-2xl">
              Instructor: {cls.TeacherName || 'Not Assigned'}
            </p>
            {!cls.TeacherName && (
              <button
                onClick={() => handleAssignClick(cls.ClassID)}
                className="font-poppins text-xs sm:text-sm text-[#ffffff] w-28 sm:w-32 h-10 sm:h-11 mt-3 rounded-3xl font-bold bg-orange-logo px-4 focus:outline-none focus:ring-2 focus:ring-orange-logo focus:ring-opacity-50"
              >
                Assign
              </button>
            )}
            {selectedClassId === cls.ClassID && (
              <select
                onChange={(e) => handleTeacherAssign(e.target.value)}
                className="mt-3 p-2 rounded-md border-2 border-gray-300"
              >
                <option value="">Select Teacher</option>
                {teachers.map((teacher) => (
                  <option key={teacher.TeacherID} value={teacher.TeacherID}>
                    {teacher.Name} (Classes: {teacher.classCount})
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminClasses;
