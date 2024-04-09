import React from "react";
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

const Landing = () => {
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
      <RegestrationSection />
      <Footer />
    </div>
  );
};

export default Landing;
