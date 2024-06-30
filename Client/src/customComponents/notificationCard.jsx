import React from "react";

const NotificationCard = ({
  notificationDiscription,
  notificationTime,
  notificationType,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full bg-white rounded-xl mt-4 px-2 py-4 md:py-7">
      <div className="flex items-center gap-3 md:w-1/5">
        {notificationType === "Comment" && (
          <div className="flex justify-center items-center">
            <img src="/assets/Message.svg" alt="Comment" className="w-12 h-12" />
          </div>
        )}
        {notificationType === "Submit" && (
          <div className="flex justify-center items-center">
            <img src="/assets/Submit.svg" alt="Submit" className="w-12 h-12" />
          </div>
        )}
        {notificationType === "Add" && (
          <div className="flex justify-center items-center">
            <img src="/assets/Add.svg" alt="Add" className="w-12 h-12" />
          </div>
        )}
        {notificationType === "OverDue" && (
          <div className="flex justify-center items-center">
            <img src="/assets/overdue.svg" alt="Overdue" className="w-12 h-12" />
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row flex-grow items-start md:items-center gap-3 md:w-4/5 md:pl-4">
        <p className="font-poppins font-normal text-[#41475E] text-base md:w-3/4">
          {notificationDiscription}
        </p>
        <p className="font-poppins font-normal text-[#2B2D42] text-sm md:w-1/4 text-left md:text-right">
          {notificationTime}
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;
