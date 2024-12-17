"use client";

import PartnerEcosystem from "@/components/partner-systems";
import HeroSection from "@/components/hero-section";
import NavBar from "@/components/nav-bar";
import AchievmentSection from "@/components/achievment-section";
import ServiceSection from "@/components/services-section";
import ClientSection from "@/components/client-success";
import FooterNew from "@/components/footer";
import CompanySummary from "@/components/company-summary";
import IndustrySection from "@/components/industry-solutions";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Sub Companies Section */}
      {/* <SubCompanies /> */}

      {/* Slidebar Section */}
      {/* <SlideBarSection/> */}

      {/* Feedback Section */}
      {/* <TestimonialSection /> */}

      {/* Achievment Section */}
      <AchievmentSection />

      {/* Client Section */}
      <ClientSection />

      {/* Industry Section */}
      <IndustrySection/>

      {/* Services Section */}
      <ServiceSection />

      {/* Partner Systems */}
      <PartnerEcosystem />

      {/* Company Highlights Section */}
      {/* <CompanyHighlights /> */}
      <CompanySummary />

      {/* Contact Us Form */}
      {/* <ContactUs /> */}
      <ContactForm/>

      {/* Footer Section */}
      {/* <Footer /> */}
      <FooterNew />
    </div>
  );
}
