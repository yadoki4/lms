import { useState } from "react";
import MenuBarMobile from "../../components/Dashboard/MenuBarMobile";
import Sidebar from "../../components/Student/SideBar";
import Main from "../../components/Student/Main";

function StudentDashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="flex">
        <MenuBarMobile setter={setShowSidebar} />
        <Sidebar show={showSidebar} setter={setShowSidebar} />
        <Main />
      </div>
    </div>
  );
}

export default StudentDashboard;
