import Dashboard from "./pages/Dashboard/Dashboard";
import React from "react";
import Landing from "./pages/Landing/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Classes from "./components/Dashboard/Classes";
import TBoard from "./components/Dashboard/TBoard";
import Curriculm from "./components/Dashboard/Curriculm";
import Signup from "./components/SignUp/Signup";
import SignIn from "./components/SignUp/Singin";
import Attendance from "./components/Dashboard/Attendance";
import Notification from "./components/Dashboard/Notification";
import Setting from "./components/Dashboard/setting";
import StudentDashboard from "./pages/Student/Dashboard";
import StudentsDashboard from "./components/Student/Sboard";
import Students from "./components/Dashboard/Students";
import Pricingpage from "./pages/Pricing/Pricing";

import StudClasses from "./components/Student/Classes";
import Activites from "./components/Student/Activites ";
import StudNotification from "./components/Student/Notification";
import StudSetting from "./components/Student/setting";
import Resources from "./components/Student/Resources";
import Lessons from "./components/Student/Lessons";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/pricing",
      element: <Pricingpage />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "teacher",
          element: <TBoard />,
        },
        {
          path: "classes",
          element: <Classes />,
        },
        {
          path: "curriculum",
          element: <Curriculm />,
        },
        {
          path: "attendence",
          element: <Attendance />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "settings",
          element: <Setting />,
        },
        {
          path: "student",
          element: <Students />,
        },
      ],
    },
    {
      path: "/student",
      element: <StudentDashboard />,
      children: [
        {
          path: "sdashboard",
          element: <StudentsDashboard />,
        },

        {
          path: "activity",
          element: <Activites />,
        },
        {
          path: "resources",
          element: <Resources />,
        },
        {
          path: "classes",
          element: <StudClasses />,
        },

        {
          path: "notification",
          element: <StudNotification />,
        },
        {
          path: "lesson",
          element: <Lessons />,
        },
        {
          path: "settings",
          element: <StudSetting />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
