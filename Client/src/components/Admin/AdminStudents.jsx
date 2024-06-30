import React, { useEffect, useState } from "react";
import SearchBar from "../../customComponents/SearchBar";
import { Shared } from "../../shared";
import { useNavigate } from 'react-router-dom';

const AdminStudents = () => {
  const [Allclasses, setallclasses] = useState(true);
  const [ClassA, setclassA] = useState(false);
  const [ClassB, setclassB] = useState(false);

  const [students, setStudents] = useState([]);


  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn || userRole !== 'admin') {
      navigate('/');
    }
  }, [navigate]);



  // Function to fetch students
  const fetchStudents = async () => {
    try {
      const response = await fetch(Shared.apiurl + `/api/allstudents/`);
      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }
      const data = await response.json();
      setStudents(data); // Set fetched students in state
    } catch (error) {
      console.error('Error fetching students:', error);
      // Handle error state or notification if needed
    }
  };


  useEffect(() => {
    fetchStudents(); // Invoke fetchStudents function
  }, []);



  return (
    <>
      {Allclasses && (
        <div className="w-ful">
          <SearchBar></SearchBar>
          <div className="w-ful flex items-center mx-8 mt-8">
            {/* <div>
              <div className=" flex justify-center">
                <button
                  onClick={() => {
                    setallclasses(false);
                    setclassB(false);
                  }}
                  className={`${Allclasses ? "bg-orange-logo text-white" : null
                    } font-poppins font-semibold text-[#1B2559] text-2xl rounded-3xl w-40 justify-center items-center px-2 py-2`}
                >
                  All classes
                </button>
              </div>
              <div className="flex justify-between">
                <div>
                  <button
                    onClick={() => {
                      setallclasses(false);
                      setclassB(false);
                      setclassA(true);
                    }}
                    className={`${ClassA ? "bg-orange-logo text-white" : null
                      } font-poppins font-semibold text-[#1B2559] text-2xl  rounded-xl w-40 justify-center items-center px-2 py-2`}
                  >
                    Class A
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => { }}
                    className={`${ClassB ? "bg-orange-logo text-white" : null
                      } font-poppins font-semibold text-[#1B2559] text-2xl  rounded-xl w-44 justify-center items-center px-2 py-2`}
                  >
                    Class B
                  </button>
                </div>
              </div>
            </div> */}
          </div>
          <div className="flex flex-col gap-4 mx-6 mt-4">
            <div className="w-full rounded-xl bg-white mt-4 py-2">
              <div className="flex flex-wrap items-center justify-between w-full">
                <p className="hidden sm:flex w-full sm:w-auto  font-poppins text-center font-medium text-[#000000] text-xs sm:text-sm md:text-base lg:text-lg">
                  Course
                  <br className="block sm:hidden" />
                  No.
                </p>
                <p className="hidden sm:flex w-full sm:w-auto  font-poppins text-center font-medium text-[#000000] text-xs sm:text-sm md:text-base lg:text-lg">
                  Name
                </p>

                <p className="hidden sm:flex w-full sm:w-auto  font-poppins text-center font-medium text-[#000000] text-xs sm:text-sm md:text-base lg:text-lg">
                  Email Address
                </p>
                <p className="hidden sm:flex w-full sm:w-auto  font-poppins text-center font-medium text-[#000000] text-xs sm:text-sm md:text-base lg:text-lg">
                  Phone Number
                </p>
                <p className="hidden sm:flex w-full sm:w-auto  font-poppins text-center font-medium text-[#000000] text-xs sm:text-sm md:text-base lg:text-lg">
                  Guardian
                </p>
                <p className="hidden sm:flex w-full sm:w-auto  font-poppins text-center font-medium text-[#000000] text-xs sm:text-sm md:text-base lg:text-lg">
                  Last Active Date
                </p>
              </div>
            </div>

            {students.map((student) => (
              <div key={student.StudentID} className="flex flex-col w-full rounded-xl bg-white mt-4 py-2">
                <div className="flex flex-wrap items-center justify-between w-full">
                  <p className="hidden sm:flex w-full sm:w-auto font-poppins text-center font-regular text-[#2B2D42] text-xs sm:text-sm md:text-base lg:text-lg">
                    1
                  </p>
                  <p className="hidden sm:flex w-full sm:w-auto font-poppins text-center font-regular text-[#2B2D42] text-xs sm:text-sm md:text-base lg:text-lg">
                    {student.Name} <br className="block sm:hidden" />
                  </p>
                  <p className="hidden sm:flex w-full sm:w-auto font-poppins text-center font-regular text-[#2B2D42] text-xs sm:text-sm md:text-base lg:text-lg">
                    {student.Email}
                  </p>
                  <p className="hidden sm:flex w-full sm:w-auto font-poppins text-center font-regular text-[#2B2D42] text-xs sm:text-sm md:text-base lg:text-lg">
                    {student.Phone}
                  </p>
                  <p className="hidden sm:flex w-full sm:w-auto font-poppins text-center font-regular text-[#2B2D42] text-xs sm:text-sm md:text-base lg:text-lg">
                    {student.Guardian} <br className="block sm:hidden" />
                  </p>
                  <p className="hidden sm:flex w-full sm:w-auto font-poppins text-center font-regular text-[#2B2D42] text-xs sm:text-sm md:text-base lg:text-lg">
                    2024-02-20
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminStudents;
