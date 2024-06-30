import React, { useState, useEffect } from 'react';
import { Shared } from "../../shared";
import { useNavigate } from 'react-router-dom';

const SubmittedActivity = () => {
    const [submittedActivities, setSubmittedActivities] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
      const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
      const userRole = sessionStorage.getItem('userRole');
  
      if (!isLoggedIn || userRole !== 'student') {
        navigate('/');
      }
    }, [navigate]);

    // Function to fetch submitted activities
    const fetchSubmittedActivities = async () => {
        try {
            const response = await fetch(Shared.apiurl +`/api/submitted-activities?StudentID=${sessionStorage.getItem('StudentID')}`); // Replace with your backend endpoint
            if (!response.ok) {
                throw new Error('Failed to fetch submitted activities.');
            }
            const data = await response.json();
            setSubmittedActivities(data); // Assuming data is an array of submitted activities with titles
        } catch (error) {
            console.error('Error fetching submitted activities:', error);
        }
    };

    useEffect(() => {
        fetchSubmittedActivities();
    }, []);

    return (
        <>
            <div className="flex flex-col gap-4 mx-6 mt-4">
                <div className="flex justify-between w-full rounded-xl h-12 bg-white mt-4 px-2 py-2">
                    <div className="w-20 h-4">
                        <p className="text-center font-poppins font-semibold text-black text-2xl">
                            Sr no.
                        </p>
                    </div>

                    <div className="flex w-2/5 items-start">
                        <p className="font-poppins font-semibold text-black text-2xl">
                            Activity
                        </p>
                    </div>
                    <div className="flex w-1/3 items-start">
                        <p className="font-poppins font-semibold text-black text-2xl">
                            Grades
                        </p>
                    </div>
                </div>

                {submittedActivities.map((activity, index) => (
                    <div key={activity.ActivityID} className="flex justify-between w-full px-2 py-3 rounded-xl bg-white">
                        <div className="w-20 h-4">
                            <p className="text-center font-poppins font-normal text-[#2B2D42] text-base">
                                {index + 1}
                            </p>
                        </div>

                        <div className="flex w-2/5 items-start">
                            <button
                                onClick={() => {
                                    // Handle click event if needed
                                }}
                                className="font-poppins font-normal text-[#2B2D42] text-base"
                            >
                                {activity.ActivityTitle}
                            </button>
                        </div>
                        <div className="flex w-1/3 justify-around">
                            {/* Render grades or icons as needed */}
                            <img src="/assets/ActivityCircle.svg" alt="Circle Icon" />
                            <img src="/assets/ActivityStar.svg" alt="Star Icon" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SubmittedActivity;
