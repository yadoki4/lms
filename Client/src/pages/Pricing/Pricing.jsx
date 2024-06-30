import React from "react";
import Pricing from "../../components/Pricing/Pricing";
import Company from "../../components/Pricing/Company";
import FAQS from "../../components/Pricing/FAQS";
import Navbar from "../../components/Landing/NavBar";
import Footer from "../../components/Landing/Footer";
export default function Pricingpage() {
  return (
    <>
      <Navbar />
      <Pricing />
      <Company />
      <FAQS />
      <Footer />
    </>
  );
}
