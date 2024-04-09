import React from "react";

const NotificationCard = ({
  notificationDiscription,
  notificationTime,
  notificationType,
}) => {
  return (
    <div className="flex w-full h-20  rounded-xl bg-white mt-4 px-2 py-7">
      <div className=" flex items-center  gap-3  w-full px-2 ">
        {notificationType === "Comment" && (
          <div className=" flex justify-center items-center ">
            <img src="/assets/Message.svg" alt="Search" className="w-12 h-12" />
          </div>
        )}
        {notificationType === "Submit" && (
          <div className=" flex justify-center items-center ">
            <img src="/assets/Submit.svg" alt="Search" className="w-12 h-12" />
          </div>
        )}
        {notificationType === "Add" && (
          <div className=" flex justify-center items-center ">
            <img src="/assets/Add.svg" alt="Search" className="w-12 h-12" />
          </div>
        )}
        {notificationType === "OverDue" && (
          <div className=" flex justify-center items-center ">
            <img src="/assets/overdue.svg" alt="Search" className="w-12 h-12" />
          </div>
        )}

        <div className="flex flex-col gap-3">
          <p className="font-poppins font-normal text-[#41475E] text-base">
            {notificationDiscription}
          </p>
          <p className="font-poppins font-normal text-[#2B2D42] text-sm">
            {notificationTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
