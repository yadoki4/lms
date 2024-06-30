import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import NotificationCard from "../../customComponents/notificationCard";
import SearchBar from "../../customComponents/SearchBar";

const StudNotification = () => {
  const notificationsArray = [
    {
      id: 1,
      notificationDescription: "Selena comments on your posts about Algorithm tasks",
      notificationTime: "20 minutes ago",
      notificationType: "Comment",
    },
    {
      id: 2,
      notificationDescription: "Well done! You have submitted your tasks of Introduction to Python",
      notificationTime: "Yesterday",
      notificationType: "Submit",
    },
    {
      id: 3,
      notificationDescription: "Mr.John add new quiz and some tasks on PHP course",
      notificationTime: "20 minutes ago",
      notificationType: "Add",
    },
    {
      id: 4,
      notificationDescription: "Your task is overdue for 13 hours and 25 minutes",
      notificationTime: "22 January 2024",
      notificationType: "OverDue",
    },
    {
      id: 5,
      notificationDescription: "Selena comments on your posts about Algorithm tasks",
      notificationTime: "20 minutes ago",
      notificationType: "Comment",
    },
    {
      id: 6,
      notificationDescription: "Well done! You have submitted your tasks of Introduction to Python",
      notificationTime: "Yesterday",
      notificationType: "Submit",
    },
    {
      id: 7,
      notificationDescription: "Mr.John add new quiz and some tasks on PHP course",
      notificationTime: "20 minutes ago",
      notificationType: "Add",
    },
  ];

  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn || userRole !== 'student') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24">
      <SearchBar />
      <div className="flex flex-col gap-4 mt-4">
        {notificationsArray.map((item) => (
          <NotificationCard
            key={item.id}
            notificationDescription={item.notificationDescription}
            notificationTime={item.notificationTime}
            notificationType={item.notificationType}
          />
        ))}
      </div>
    </div>
  );
};

export default StudNotification;
