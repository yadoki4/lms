import React, { useEffect, useState } from "react";
import SearchBar from "../../customComponents/SearchBar";
import NotificationCard from "../../customComponents/notificationCard";
import { Shared } from "../../shared";
import { useNavigate } from 'react-router-dom';

const Students = () => {
  const [Allclasses, setallclasses] = useState(true);
  const [ClassA, setclassA] = useState(false);
  const [ClassB, setclassB] = useState(false);
  const [notification, setNotification] = useState(true);
  const [preview, setpreview] = useState(false);
  const [students, setStudents] = useState([]);
  const [activityStatusData, setActivityStatusData] = useState([]);
  const [transformedActivityStatusData, setTransformedActivityStatusData] = useState([]);
  const [subm_data, setSubm_data] = useState([]);


  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn || userRole !== 'teacher') {
      navigate('/');
    }
  }, [navigate]);


  // Function to calculate the week number based on LessonID and Week
  const calculateWeekNumber = (lessonId, week) => {
    return (lessonId - 1) * 4 + week;
  };

  // Function to fetch students
  const fetchStudents = async () => {
    try {
      const response = await fetch(Shared.apiurl + `/api/students/${sessionStorage.getItem('TeacherID')}`);
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

  // Function to fetch activity statuses
  const fetchActivityStatus = async () => {
    try {
      const response = await fetch(Shared.apiurl + `/api/activitystatus/${sessionStorage.getItem('TeacherID')}`); // Assuming proxy is set up in development environment
      if (!response.ok) {
        throw new Error('Failed to fetch activity statuses');
      }
      const data = await response.json();
      setActivityStatusData(data); // Set fetched activity statuses in state

      // Transform the fetched data to calculate week numbers
      const transformedData = data.map(item => ({
        ...item,
        WeekNumber: calculateWeekNumber(item.LessonID, item.Week)
      }));
      setTransformedActivityStatusData(transformedData);
      console.log("Transformed: ", transformedData);
    } catch (error) {
      console.error('Error fetching activity statuses:', error);
      // Handle error state or notification if needed
    }
  };

  // Function to fetch submitted activities
  const fetchSubmittedActivities = async (weekNumber, totalActivities, studentId) => {
    try {
      const response = await fetch(Shared.apiurl + `/api/submitted-all-activities/${sessionStorage.getItem('TeacherID')}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ weekNumber, totalActivities, studentId }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch activity statuses');
      }
  
      const data = await response.json();
  
      // Store the status for each student and week
      const key = `${studentId}-${weekNumber}`;
      setSubm_data(prevData => ({
        ...prevData,
        [key]: data.status
      }));
      console.log(`Status for ${key}: ${data.status}`);
  
    } catch (error) {
      console.error('Error fetching activity statuses:', error);
      // Handle error state or notification if needed
    }
  };
  

  useEffect(() => {
    fetchStudents(); // Invoke fetchStudents function
    fetchActivityStatus(); // Fetch activity statuses when component mounts
  }, []);

  useEffect(() => {
    // Call fetchSubmittedActivities for each student and week number
    if (students.length && transformedActivityStatusData.length) {
      students.forEach(student => {
        transformedActivityStatusData.forEach(item => {
          fetchSubmittedActivities(item.WeekNumber, item.TotalActivities, student.StudentID);
        });
      });
    }
  }, [students, transformedActivityStatusData]);


  return (
    <>
      {Allclasses && (
        <div className="w-ful">
          <SearchBar></SearchBar>
          <div className="w-ful flex items-center mx-8 mt-8">
            <div>
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
            </div>
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
                  Balance
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
                    11 lessons
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
                <div className="flex flex-row">
                  <div className="flex flex-[5] flex-wrap justify-start gap-4 pl-6 pt-6 pb-4">
                    {transformedActivityStatusData.map((item) => (
                      <div className="flex flex-col w-8" key={item.WeekNumber}>
                        <p className="font-poppins text-center font-regular text-[#2B2D42] text-xs sm:text-sm md:text-base mb-1">
                          {item.WeekNumber}
                        </p>
                        <div
                          // className={`w-full h-1.5 rounded ${JSON.parse(true) ? "bg-[green]" : "bg-[red]"
                          //   }`}
                          className={`w-full h-1.5 rounded ${subm_data[`${student.StudentID}-${item.WeekNumber}`] === 'P' ? "bg-[green]" : subm_data[`${student.StudentID}-${item.WeekNumber}`] === 'M' ? "bg-[yellow]" : "bg-[red]"}`}

                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-[2]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Students;
