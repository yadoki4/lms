import React, { useState } from 'react';
import { Shared } from "../../shared";

export default function Taskanddesc({ item, Teacher }) {
    const [selectedFile, setSelectedFile] = useState(null);

    // Function to split and return the date part
    const DateTimeSplit = (datetime) => {
        const date = new Date(datetime);
        return date.toISOString().split('T')[0]; // Returns date in 'YYYY-MM-DD' format
    };

    // Function to format a date to 'Month Day, Year' format
    const DateFormat = (date) => {
        const dateObj = new Date(date);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return dateObj.toLocaleDateString('en-US', options);
    };

    const currentDate = new Date();
    const formattedCurrentDate = DateFormat(currentDate);

    const dueDate = new Date(item.DueDate);
    const formattedDueDate = DateFormat(dueDate);

    const isDueDatePassed = dueDate < currentDate;

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

// Function to calculate the week number based on LessonID and Week
  const calculateWeekNumber = (lessonId, week) => {
    return (lessonId - 1) * 4 + week;
  };

    const handleSubmit = async () => {
        if (!selectedFile) {
            alert("Please select a file to upload.");
            return;
        }

        const Week = calculateWeekNumber(item.LessonID, item.Week)

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('studentID', sessionStorage.getItem('StudentID'));
        formData.append('teacherID', sessionStorage.getItem('TeacherID'));
        formData.append('activityID', item.ActivityID);
        formData.append('Week', Week);
        formData.append('currentDate', formattedCurrentDate);

        console.log(formattedCurrentDate);

        try {
            const response = await fetch(Shared.apiurl + '/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert("File uploaded successfully.");
            } else {
                alert("Failed to upload file.");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Error uploading file.");
        }
    };

    return (
        <>
            <div className="bg-white w-full h-full mt-6">
                <div className="mx-6 py-10">
                    {isDueDatePassed ? (
                        <div className="flex justify-center">
                            <p className="font-poppins font-semibold text-[#fb8500] text-2xl">
                                Date Passed
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-poppins font-semibold text-[#fb8500] text-2xl">
                                        {item.Title}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-poppins font-medium text-[#2B2D42] text-lg">
                                        {formattedCurrentDate}
                                    </p>
                                </div>
                            </div>
                            <div className="w-1/4 flex flex-col mt-4 gap-4">
                                <div className="flex justify-between font-poppins font-medium text-[#2B2D42] text-xl">
                                    <p>{Teacher}</p>
                                    <p>{item.Points} Points</p>
                                </div>
                                <div className="flex font-poppins font-semibold text-[#2B2D42] text-xl">
                                    <p>Due Date {formattedDueDate}</p>
                                </div>
                            </div>
                            <div className="flex flex-col mt-5">
                                <div className="flex mt-4 flex-col gap-3">
                                    <p className="font-poppins font-semibold text-[#2B2D42] text-xl">
                                        Description:
                                    </p>
                                    <p className="font-poppins font-normal text-[#2B2D42] text-base leading-8">
                                        {item.Description}
                                    </p>
                                </div>
                                <div className="flex flex-col mt-4 gap-3">
                                    <p className="font-poppins font-semibold text-[#2B2D42] text-xl">
                                        Instructions
                                    </p>
                                    <p className="font-poppins font-normal text-[#2B2D42] text-base">
                                        {item.Instructions}
                                    </p>
                                </div>
                                <br />
                                
                                <iframe src="https://trinket.io/embed/python3/81239bcc1f" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                                <br />
                                <div className="flex flex-col mt-4 gap-3">
                                    <p className="font-poppins font-semibold text-[#2B2D42] text-xl">
                                        Learning Outcome:
                                    </p>
                                    <p className="font-poppins font-normal text-[#2B2D42] text-base leading-8">
                                        {item.Outcome}
                                    </p>
                                </div>
                                <div className="flex flex-col mt-4 gap-3">
                                    <label className="font-poppins font-semibold text-[#2B2D42] text-xl" htmlFor="fileUpload">
                                        Upload File:
                                    </label>
                                    <input
                                        type="file"
                                        id="fileUpload"
                                        onChange={handleFileChange}
                                        className="font-poppins font-normal text-[#2B2D42] text-base"
                                    />
                                </div>
                                <div className="flex justify-end mt-10">
                                    <button
                                        onClick={handleSubmit}
                                        className="bg-orange-logo font-poppins font-bold text-base text-[#FFFFFF] rounded-[18px] w-48 justify-center items-center px-2 py-2"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
