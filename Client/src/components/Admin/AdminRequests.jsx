import React, { useEffect, useState } from "react";
import SearchBar from "../../customComponents/SearchBar";
import { Shared } from "../../shared";
import { useNavigate } from 'react-router-dom';

const AdminRequests = () => {
  const [allClasses, setAllClasses] = useState(true);
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn || userRole !== 'admin') {
      navigate('/');
    }
  }, [navigate]);


  // Function to fetch teachers
  const fetchTeachers = async () => {
    try {
      const response = await fetch(Shared.apiurl + `/api/teachersrequests`);
      if (!response.ok) {
        throw new Error('Failed to fetch teachers');
      }
      const data = await response.json();
      setTeachers(data); // Set fetched teachers in state
    } catch (error) {
      console.error('Error fetching teachers:', error);
      // Handle error state or notification if needed
    }
  };

  // Function to update teacher status
  const approveTeacher = async (teacherId) => {
    try {
      const response = await fetch(Shared.apiurl + `/api/approveTeacher/${teacherId}`, {
        method: 'PATCH', // Use PATCH to update a resource
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ApplicationStatus: 1 }) // Send the updated status
      });
      if (!response.ok) {
        throw new Error('Failed to update teacher status');
      }
      // Refresh the list of teachers after approval
      fetchTeachers();
    } catch (error) {
      console.error('Error updating teacher status:', error);
      // Handle error state or notification if needed
    }
  };

  useEffect(() => {
    fetchTeachers(); // Invoke fetchTeachers function
  }, []);

  return (
    <>
      {allClasses && (
        <div className="w-full">
          <SearchBar />
          <div className="flex flex-col gap-4 mx-6 mt-4">
            <div className="w-full rounded-xl bg-white mt-4 py-2">
              <div className="flex flex-wrap items-center justify-between w-full">
                <p className="w-full sm:w-auto font-poppins text-center font-medium text-[#000000] text-xs sm:text-sm md:text-base lg:text-lg">
                  Name
                </p>
                <p className="w-full sm:w-auto font-poppins text-center font-medium text-[#000000] text-xs sm:text-sm md:text-base lg:text-lg">
                  Email Address
                </p>
                <p className="w-full sm:w-auto font-poppins text-center font-medium text-[#000000] text-xs sm:text-sm md:text-base lg:text-lg">
                  Status
                </p>
                <p className="w-full sm:w-auto font-poppins text-center font-medium text-[#000000] text-xs sm:text-sm md:text-base lg:text-lg">
                  Action
                </p>
              </div>
            </div>

            {teachers.map((teacher) => (
              <div key={teacher.Email} className="flex flex-col w-full rounded-xl bg-white mt-4 py-2">
                <div className="flex flex-wrap items-center justify-between w-full">
                  <p className="w-full sm:w-auto font-poppins text-center text-[#2B2D42] text-xs sm:text-sm md:text-base lg:text-lg">
                    {teacher.Name}
                  </p>
                  <p className="w-full sm:w-auto font-poppins text-center text-[#2B2D42] text-xs sm:text-sm md:text-base lg:text-lg">
                    {teacher.Email}
                  </p>
                  <p className="w-full sm:w-auto font-poppins text-center text-[#2B2D42] text-xs sm:text-sm md:text-base lg:text-lg">
                    {teacher.ApplicationStatus === 0 ? 'Pending' : 'Approved'}
                  </p>
                  <button 
                    className="font-poppins text-xs sm:text-sm text-[#ffffff] w-28 sm:w-32 h-10 sm:h-11 mt-3 rounded-3xl font-bold bg-orange-logo px-4 focus:outline-none focus:ring-2 focus:ring-orange-logo focus:ring-opacity-50"
                    onClick={() => approveTeacher(teacher.TeacherID)} // Call the approve function on click
                    disabled={teacher.ApplicationStatus === 1} // Disable button if already approved
                  >
                    Approve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminRequests;
