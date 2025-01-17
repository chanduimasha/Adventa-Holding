"use client";
import React from "react";
import NavBar from "@/components/nav-bar";
import JourneySection from "@/components/about/journey-section";
import CoValues from "@/components/about/co-values";
import VisionMissionSection from "@/components/about/vision-mission";
import CompanyHighlights from "@/components/about/company-highlights";
import Footer from "@/components/footer-section";

const OurJourney = () => {
  return (
    <div>
      <NavBar/>
      <JourneySection/>
      <CoValues/>
      <CompanyHighlights/>

      <VisionMissionSection/>
      <Footer/>
    </div>
  );
};

export default OurJourney;