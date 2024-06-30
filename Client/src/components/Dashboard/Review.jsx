import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Shared } from "../../shared";

const Review = () => {
  const [reviewSubmissions, setReviewSubmissions] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn || userRole !== 'teacher') {
      navigate('/');
    }
  }, [navigate]);

  // Function to fetch review submissions
  const fetchReviewSubmissions = async () => {
    try {
      const response = await fetch(Shared.apiurl + `/api/review-submissions?teacherID=${sessionStorage.getItem('TeacherID')}`);
      if (!response.ok) {
        throw new Error('Failed to fetch review submissions.');
      }
      const data = await response.json();
      setReviewSubmissions(data);
    } catch (error) {
      console.error('Error fetching review submissions:', error);
    }
  };

  useEffect(() => {
    fetchReviewSubmissions();
  }, []);

  // Function to handle awarding points
  const handleAwardPoints = async (submissionID) => {
    try {
      const awardPoints = prompt('Enter award points:');
      if (!awardPoints) return;

      const response = await fetch(Shared.apiurl + `/api/review-submissions/${submissionID}/award-points`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ awardPoints }),
      });

      if (!response.ok) {
        throw new Error('Failed to award points.');
      }

      // Refresh submissions after awarding points
      fetchReviewSubmissions();
    } catch (error) {
      console.error('Error awarding points:', error);
    }
  };

  return (
    <div className="flex flex-col gap-4 mx-6 mt-4">
      <div className="flex w-full rounded-xl h-12 bg-white mt-4 px-2 py-2">
        <div className="flex justify-between gap-1 w-full px-2">
          <p className="font-poppins font-semibold text-black text-2xl">Name</p>
          <p className="font-poppins font-semibold text-black text-2xl">Date</p>
          <p className="font-poppins font-semibold text-black text-2xl">Submitted File</p>
          <p className="font-poppins font-semibold text-black text-2xl">Award points</p>
        </div>
      </div>

      {reviewSubmissions.map((submission) => (
        <div key={submission.s_activityID} className="flex justify-between w-full px-2 py-3 rounded-xl bg-white">
          <div>
            <p className="font-poppins font-regular text-[#2B2D42] text-sm">{submission.StudentName}</p>
          </div>

          <div>
            <p className="font-poppins font-regular text-[#2B2D42] text-sm">{submission.Subm_Date}</p>
          </div>

          <div className="font-bold">
            <a
              href={Shared.apiurl + `/uploads/${submission.FilePath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {submission.FilePath}
            </a>
          </div>

          <div>
            <button
              onClick={() => handleAwardPoints(submission.s_activityID)}
              className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
            >
              Award Points
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
