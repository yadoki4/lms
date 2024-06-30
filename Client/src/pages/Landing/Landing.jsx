import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from "../../components/Landing/NavBar";
import HeroSection from "../../components/Landing/HeroSection";
import FeatureSection from "../../components/Landing/FeatureSection";
import PythonIDESection from "../../components/Landing/IDEIntro";
import EducationPlatformComponent from "../../components/Landing/EducationPlattform";
import Footer from "../../components/Landing/Footer";
import CoursesSection from "../../components/Landing/CoursesSection";
import Experience from "../../components/Landing/Experience";
import KidsSection from "../../components/Landing/KidsSection";
import RegestrationSection from "../../components/Landing/RegestrationSection";
import Creativity from "../../components/Landing/Creativity";
import { Shared } from "../../shared";

const Landing = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Effect to scroll to registration section if hash is '#registration'
  useEffect(() => {
    if (location.hash === '#registration') {
      const registrationElement = document.getElementById('registration');
      if (registrationElement) {
        registrationElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  // Effect to check authentication on component mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(Shared.apiurl + '/api/auth', {
          method: 'POST',
          credentials: 'include', // Include credentials for cookies
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();
        console.log("Auth Check Response:", result.message);

        if (result.message === 'Authenticated') {
          // Store session information
          sessionStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('userRole', result.userRole);
          sessionStorage.setItem('Name', result.user.Name);
          sessionStorage.setItem('Email', result.user.Email);
          sessionStorage.setItem('Password', result.user.Password);
          
          // Redirect to appropriate dashboard based on role
          if (result.userRole === "student") {
            sessionStorage.setItem('StudentID', result.user.StudentID);
            sessionStorage.setItem('SubscriptionStatus', result.user.SubscriptionStatus);
            sessionStorage.setItem('Phone', result.user.Phone);
            sessionStorage.setItem('Guardian', result.user.Guardian);
            sessionStorage.setItem('ClassID', result.user.ClassID);
            sessionStorage.setItem('TeacherID', result.user.TeacherID);
            navigate('/student/dashboard');
          } else {
            sessionStorage.setItem('ApplicationStatus', result.user.ApplicationStatus);
            sessionStorage.setItem('TeacherID', result.user.TeacherID);
            navigate(`/teacher/dashboard`);
          }
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        navigate('/');
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Creativity />
      <CoursesSection />
      <Experience />
      <FeatureSection />
      <PythonIDESection />
      <EducationPlatformComponent />
      <KidsSection />
      <div id="registration">
        <RegestrationSection />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
