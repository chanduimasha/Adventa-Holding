"use client";

import PartnerEcosystem from "@/components/partner-systems";
import TestimonialSection from "@/components/testimonial-section";
import Footer from "@/components/footer-section";
import ContactUs from "@/components/contact-us";
import CompanyHighlights from "@/components/company-highlights";
import SubCompanies from "@/components/sub-companies";
import HeroSection from "@/components/hero-section";
import NavBar from "@/components/nav-bar";
import AchievmentSection from "@/components/achievment-section";
import ServiceSection from "@/components/services-section";

export default function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Sub Companies Section */}
      <SubCompanies />

      {/* Feedback Section */}
      <TestimonialSection />

      {/* Achievment Section */}
      <AchievmentSection/>

      {/* Company Highlights Section */}
      <CompanyHighlights />

      {/* Services Section */}
      <ServiceSection/>

      {/* Partner Systems */}
      <PartnerEcosystem />

      {/* Contact Us Form */}
      <ContactUs />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
