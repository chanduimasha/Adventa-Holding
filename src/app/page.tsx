// "use client";

// import PartnerEcosystem from "@/components/partner-systems";
// import HeroSection from "@/components/hero-section";
// import NavBar from "@/components/nav-bar";
// import AchievmentSection from "@/components/achievment-section";
// import ServiceSection from "@/components/services-section";
// import ClientSection from "@/components/client-success";
// import FooterNew from "@/components/footer";
// import CompanySummary from "@/components/company-summary";
// import IndustrySection from "@/components/industry-solutions";
// import ContactForm from "@/components/contact-form";

// export default function Home() {
//   return (
//     <div>
//       {/* Navigation Bar */}
//       <NavBar />

//       {/* Hero Section */}
//       <HeroSection />

//       {/* Sub Companies Section */}
//       {/* <SubCompanies /> */}

//       {/* Slidebar Section */}
//       {/* <SlideBarSection/> */}

//       {/* Feedback Section */}
//       {/* <TestimonialSection /> */}

//       {/* Achievment Section */}
//       <AchievmentSection />

//       {/* Client Section */}
//       <ClientSection />

//       {/* Industry Section */}
//       <IndustrySection/>

//       {/* Services Section */}
//       <ServiceSection />

//       {/* Partner Systems */}
//       <PartnerEcosystem />

//       {/* Company Highlights Section */}
//       {/* <CompanyHighlights /> */}
//       <CompanySummary />

//       {/* Contact Us Form */}
//       {/* <ContactUs /> */}
//       <ContactForm/>

//       {/* Footer Section */}
//       {/* <Footer /> */}
//       <FooterNew />
//     </div>
//   );
// }

"use client";

// import { useEffect, useState, useRef } from "react";
// import PartnerEcosystem from "@/components/partner-systems";
import HeroSection from "@/components/hero-section";
import NavBar from "@/components/nav-bar";
// import AchievmentSection from "@/components/achievment-section";
// import ServiceSection from "@/components/services-section";
// import ClientSection from "@/components/client-success";
// import CompanySummary from "@/components/company-summary";
// import IndustrySection from "@/components/industry-solutions";
import ContactForm from "@/components/contact-form";
// import ImagineSection from "@/components/imagine-section";
// import EngineerSection from "@/components/engineer-section";
// import ModernizeSection from "@/components/modernize-section";
// import ManageSection from "@/components/manage-section";
// import { useMediaQuery } from "react-responsive";
// import BotChat from "@/components/bot-chat";
import BlogSection from "@/components/blogs/blog-section";
import NewsSection from "@/components/news/news-section";
import IndustriesSection from "@/components/industries";
// import SubCompanies from "@/components/sub-companies";
// import TestimonialSection from "@/components/testimonial-section";
import Footer from "@/components/footer-section";
// import FeedbackSection from "@/components/feedback-section";

export default function Home() {
 
  // const [showSlideBar, setShowSlideBar] = useState(false);
  // const isMobile = useMediaQuery({ maxWidth: 767 }); // Assuming mobile devices have a max width of 767px

  // // Refs for the 4 target sections
  // const imagineRef = useRef<HTMLDivElement | null>(null);
  // const engineerRef = useRef<HTMLDivElement | null>(null);
  // const modernizeRef = useRef<HTMLDivElement | null>(null);
  // const manageRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const observerCallback = (entries: IntersectionObserverEntry[]) => {
  //     const isVisible = entries.some((entry) => entry.isIntersecting); // Check if any section is visible
  //     setShowSlideBar(isVisible);
  //   };

  //   // Create an observer instance
  //   const observer = new IntersectionObserver(observerCallback, {
  //     threshold: 0.5, // 50% of the section is visible
  //   });

  //   // Observe the 4 sections
  //   if (imagineRef.current) observer.observe(imagineRef.current);
  //   if (engineerRef.current) observer.observe(engineerRef.current);
  //   if (modernizeRef.current) observer.observe(modernizeRef.current);
  //   if (manageRef.current) observer.observe(manageRef.current);

  //   // Cleanup observer on unmount
  //   return () => {
  //     if (imagineRef.current) observer.unobserve(imagineRef.current);
  //     if (engineerRef.current) observer.unobserve(engineerRef.current);
  //     if (modernizeRef.current) observer.unobserve(modernizeRef.current);
  //     if (manageRef.current) observer.unobserve(manageRef.current);
  //   };
  // }, []);

  return (
    <div className= "relative">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Achievment Section */}
      {/* <AchievmentSection /> */}

      {/* Slide Bar */}
      {/* {showSlideBar && !isMobile && (
        <div className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-white px-4 py-8 rounded-l-lg shadow-lg z-50">
          <ul className="mt-2 space-y-8">
            <li
              className="cursor-pointer"
              onClick={() => {
                if (imagineRef.current) {
                  imagineRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Imagine
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                if (engineerRef.current) {
                  engineerRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Engineer
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                if (modernizeRef.current) {
                  modernizeRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Modernize
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                if (manageRef.current) {
                  manageRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Manage
            </li>
          </ul>
        </div>
      )} */}

      {/* Mobile Slide Bar */}
      {/* {showSlideBar && isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white px-4 py-4 shadow-lg z-50">
          <ul className="flex justify-around">
            <li
              className="cursor-pointer hover:text-orange-500"
              onClick={() => {
                if (imagineRef.current) {
                  imagineRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Imagine
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                if (engineerRef.current) {
                  engineerRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Engineer
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                if (modernizeRef.current) {
                  modernizeRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Modernize
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                if (manageRef.current) {
                  manageRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Manage
            </li>
          </ul>
        </div>
      )} */}

      {/* Target Sections */}
      {/* <div ref={imagineRef}>
        <ImagineSection />
      </div>
      <div ref={engineerRef}>
        <EngineerSection />
      </div>
      <div ref={modernizeRef}>
        <ModernizeSection />
      </div>
      <div ref={manageRef}>
        <ManageSection />
      </div> */}

      {/* Other Sections */}
      {/* <ClientSection /> */}
      {/* <IndustrySection /> */}
      {/* <ServiceSection /> */}
      {/* <TestimonialSection /> */}
      {/* <FeedbackSection/> */}
      {/* <SubCompanies /> */}
      <IndustriesSection />
      {/* <PartnerEcosystem /> */}
      {/* <CompanySummary /> */}
      <NewsSection />
      <BlogSection />
      <ContactForm />
      <Footer/>
      {/* <FooterNew /> */}
      {/* <BotChat /> */}

      
    </div>
  );
}
