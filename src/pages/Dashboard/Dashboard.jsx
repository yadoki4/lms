import { useState } from "react";
import MenuBarMobile from "../../components/Dashboard/MenuBarMobile";
import Sidebar from "../../components/Dashboard/SideBar";
import Main from "../../components/Dashboard/Main";

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen">
    <div className="flex">
        <MenuBarMobile setter={setShowSidebar} />
        <Sidebar show={showSidebar} setter={setShowSidebar} />
        <Main/>
    </div>
</div>
  );
}

export default Dashboard;