import React, {useEffect} from "react";
import NotificationCard from "../../customComponents/notificationCard";
import SearchBar from "../../customComponents/SearchBar";
import { useNavigate } from 'react-router-dom';

const Notification = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn || userRole !== 'teacher') {
      navigate('/');
    }
  }, [navigate]);
  const Array = [
    {
      id: 1,
      notificationDiscription:
        "Selena comments on your posts about Algorithm tasks",
      notificationTime: "20 minutes ago",
      notificationType: "Comment",
    },
    {
      id: 2,
      notificationDiscription:
        "Well done! You have submitted your tasks of Introduction to Python",
      notificationTime: "Yesterday",
      notificationType: "Submit",
    },
    {
      id: 3,
      notificationDiscription:
        "Mr.John add new quiz and some tasks on PHP course",
      notificationTime: "20 minutes ago",
      notificationType: "Add",
    },
    {
      id: 4,
      notificationDiscription:
        "Your task is overdue for 13 hours and 25 minutes",
      notificationTime: "22 January 2024",
      notificationType: "OverDue",
    },
    {
      id: 5,
      notificationDiscription:
        "Selena comments on your posts about Algorithm tasks",
      notificationTime: "20 minutes ago",
      notificationType: "Comment",
    },
    {
      id: 6,
      notificationDiscription:
        "Well done! You have submitted your tasks of Introduction to Python",
      notificationTime: "Yesterday",
      notificationType: "Submit",
    },
    {
      id: 7,
      notificationDiscription:
        "Mr.John add new quiz and some tasks on PHP course",
      notificationTime: "20 minutes ago",
      notificationType: "Add",
    },
  ];
  return (
    <div>
      <SearchBar />
      <div className="flex  flex-col gap-4 mx-20 mt-4">
        {Array.map((item) => (
          <NotificationCard
            notificationDiscription={item.notificationDiscription}
            notificationTime={item.notificationTime}
            notificationType={item.notificationType}
          />
        ))}
      </div>
    </div>
  );
};

export default Notification;
