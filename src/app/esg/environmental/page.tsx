// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const SlideBar = () => {
//   const [activeSection, setActiveSection] = useState("imagine");
//   const [isVisible, setIsVisible] = useState(false);

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const topicVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1 },
//   };

//   const sections = ["imagine", "engineer", "modernize", "manage"];
//   const backgroundImages = [
//     "/assets/achievements/1.jpeg", // imagine
//     "/assets/achievements/2.jpg", // engineer
//     "/assets/achievements/3.jpeg", // modernize
//     "/assets/achievements/4.png", // manage
//   ];

//   const sectionData = {
//     imagine: [
//       {
//         topic: "Aventa’s Vision for the Future of Tech",
//         description: "Exploring the next frontier of digital transformation.",
//         link: "/vision",
//       },
//       {
//         topic: "Next-Gen AI Solutions",
//         description: "Leveraging AI for innovative business models.",
//         link: "/ai-solutions",
//       },
//       {
//         topic: "Revolutionizing Digital Infrastructure",
//         description: "Building the backbone for the digital world.",
//         link: "/infrastructure",
//       },
//     ],
//     engineer: [
//       {
//         topic: "Aventa’s New Cloud-Native Solutions",
//         description: "Pushing the boundaries of cloud technologies.",
//         link: "/cloud-native",
//       },
//       {
//         topic: "Engineering Excellence with AI",
//         description: "Harnessing AI to deliver precision engineering.",
//         link: "/ai-engineering",
//       },
//       {
//         topic: "Next-Level Cybersecurity Solutions",
//         description:
//           "Safeguarding enterprises with cutting-edge cybersecurity.",
//         link: "/cybersecurity",
//       },
//     ],
//     modernize: [
//       {
//         topic: "Modernizing Legacy Systems",
//         description: "Bringing old systems into the digital age.",
//         link: "/legacy-systems",
//       },
//       {
//         topic: "Digital Transformation at Scale",
//         description: "Achieving business-wide transformation.",
//         link: "/digital-transformation",
//       },
//       {
//         topic: "Building the Future of Data Analytics",
//         description: "Leveraging data to make smarter business decisions.",
//         link: "/data-analytics",
//       },
//     ],
//     manage: [
//       {
//         topic: "Aventa’s Strategic Partnerships",
//         description: "Collaborating for greater business success.",
//         link: "/partnerships",
//       },
//       {
//         topic: "Driving Organizational Change",
//         description: "Effective change management in a digital world.",
//         link: "/change-management",
//       },
//       {
//         topic: "The Future of Business Intelligence",
//         description: "Redefining how businesses use data for growth.",
//         link: "/business-intelligence",
//       },
//     ],
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const sectionElements = sections.map((section) =>
//         document.getElementById(section)
//       );

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             console.log(entry)
//             if (entry.isIntersecting) {
//               setActiveSection(entry.target.id);
//             }
//           });
//         },
//         { threshold: 0.5 } // Trigger when 50% of the section is visible
//       );

//       sectionElements.forEach((element) => {
//         if (element) {
//           observer.observe(element);
//         }
//       });

//       return () => observer.disconnect(); // Cleanup on unmount
//     };

//     handleScroll();
//   }, [sections]);

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       {isVisible && (
//         <div className="fixed top-0 left-0 h-screen w-48 bg-transparent text-white flex flex-col justify-center">
//           {sections.map((section) => (
//             <a
//               key={section}
//               href={`#${section}`}
//               className={`py-4 px-6 ${
//                 activeSection === section ? "text-orange-500" : "text-gray-400"
//               } hover:text-orange-500 transition duration-300`}
//             >
//               {section.charAt(0).toUpperCase() + section.slice(1)}
//             </a>
//           ))}
//         </div>
//       )}

//       {/* Content */}
//       <div className="xl:ml-48 lg:ml-48 md:ml-48 ml-32 w-full">
//         {sections.map((section, index) => (
//           <section
//             id={section}
//             key={section}
//             className="relative text-white min-h-screen flex items-center justify-center py-12 px-6 overflow-hidden"
//           >
//             {/* Background Image with Zoom Animation */}
//             <div
//               className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom"
//               style={{
//                 backgroundImage: `url(${backgroundImages[index]})`,
//               }}
//             ></div>

//             {/* Content */}
//             <div className="relative z-10">
//               {/* Header */}
//               <motion.div
//                 className="text-center mb-8"
//                 initial="hidden"
//                 animate="visible"
//                 variants={topicVariants}
//                 transition={{ duration: 0.8 }}
//               >
//                 <h1 className="text-7xl font-bold mb-20">
//                   {section === "imagine" && "We Imagine"}
//                   {section === "engineer" && "We Engineer"}
//                   {section === "modernize" && "We Modernize"}
//                   {section === "manage" && "We Manage"}
//                 </h1>
//                 <p className="text-xl mt-2 mb-20">
//                   {section === "imagine" &&
//                     "Explore innovative technologies and strategies that will shape tomorrow."}
//                   {section === "engineer" &&
//                     "Harness cutting-edge engineering solutions to power your business."}
//                   {section === "modernize" &&
//                     "Transform legacy systems and processes for greater efficiency."}
//                   {section === "manage" &&
//                     "Lead your business through change and manage successful transformations."}
//                 </p>
//               </motion.div>

//               {/* Cards */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
//                 {sectionData[section as keyof typeof sectionData].map(
//                   (item, index) => (
//                     <motion.div
//                       key={index}
//                       className="bg-white text-black p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-shadow duration-300 border-b-4 border-orange-500"
//                       initial="hidden"
//                       whileInView="visible"
//                       viewport={{ once: true }}
//                       variants={cardVariants}
//                       transition={{ duration: 0.5, delay: index * 0.2 }}
//                     >
//                       <motion.h3
//                         className="text-xl font-semibold mb-2"
//                         variants={topicVariants}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                       >
//                         {item.topic}
//                       </motion.h3>
//                       <Link
//                         href={item.link}
//                         className="text-orange-600 underline hover:text-orange-800"
//                       >
//                         Learn More
//                       </Link>
//                     </motion.div>
//                   )
//                 )}
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default SlideBar;
import ImagineSection from "@/components/imagine-section";
import React from "react";

const page = () => {
  return <ImagineSection/>
};

export default page;
