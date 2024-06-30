import { useState, useEffect } from "react";
import MenuBarMobile from "../../components/Dashboard/MenuBarMobile";
import Sidebar from "../../components/Student/SideBar";
import Main from "../../components/Student/Main";
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn || userRole !== 'student') {
      navigate('/');
    }
  }, [navigate]);

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
