import React, { useEffect } from "react";
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
import { useLocation } from 'react-router-dom';

const Landing = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#registration') {
      const registrationElement = document.getElementById('registration');
      if (registrationElement) {
        registrationElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);
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
