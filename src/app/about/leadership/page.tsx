import React from "react";

const page = () => {
  return (
    <div>
      <h1>Leadership</h1>
    </div>
  );
};

export default page;

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import Social from "@/components/Social";
// import { Button } from "@/components/ui/button";
// import { 
//   FaCode, 
//   FaCloud, 
//   FaMobileAlt, 
//   FaRocket, 
//   FaTrophy, 
//   FaUsers,
//   FaQuoteLeft,
//   FaQuoteRight,
//   FaReact,
//   FaNodeJs,
//   FaDocker,
//   FaAws,
//   FaPython,
//   FaJava
// } from "react-icons/fa";
// import { SiTypescript, SiKubernetes, SiTensorflow } from "react-icons/si";

// // Animation Variants (Keep existing variants from previous implementation)
// const variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut"
//     }
//   },
//   hover: {
//     scale: 1.05,
//     transition: { duration: 0.2 }
//   }
// };

// const HomePage = () => {
//   // Previous sections (Services, Testimonials, etc.) remain the same

//   // Technology Stack
//   const technologyStack = [
//     { icon: <FaReact className="text-4xl text-blue-500" />, name: "React" },
//     { icon: <FaNodeJs className="text-4xl text-green-500" />, name: "Node.js" },
//     { icon: <SiTypescript className="text-4xl text-blue-600" />, name: "TypeScript" },
//     { icon: <FaDocker className="text-4xl text-blue-600" />, name: "Docker" },
//     { icon: <FaAws className="text-4xl text-orange-500" />, name: "AWS" },
//     { icon: <FaPython className="text-4xl text-yellow-500" />, name: "Python" },
//     { icon: <SiKubernetes className="text-4xl text-blue-500" />, name: "Kubernetes" },
//     { icon: <SiTensorflow className="text-4xl text-orange-500" />, name: "TensorFlow" }
//   ];

//   // Recent Projects
//   const recentProjects = [
//     {
//       title: "Enterprise Resource Planning System",
//       description: "Comprehensive ERP solution for a multinational corporation",
//       technologies: ["React", "Node.js", "AWS"],
//       image: "/assets/projects/erp.jpg"
//     },
//     {
//       title: "AI-Powered Customer Support Platform",
//       description: "Machine learning chatbot with natural language processing",
//       technologies: ["Python", "TensorFlow", "React"],
//       image: "/assets/projects/ai-support.jpg"
//     },
//     {
//       title: "IoT Smart Home Management",
//       description: "Connected home solution with real-time monitoring",
//       technologies: ["Node.js", "Kubernetes", "React Native"],
//       image: "/assets/projects/iot.jpg"
//     }
//   ];

//   // Team Members
//   const teamMembers = [
//     {
//       name: "Sarah Thompson",
//       role: "Chief Technology Officer",
//       image: "/assets/team/sarah.jpg",
//       expertise: "Cloud Architecture & AI Solutions"
//     },
//     {
//       name: "Michael Rodriguez",
//       role: "Lead Software Architect",
//       image: "/assets/team/michael.jpg",
//       expertise: "Microservices & Scalable Systems"
//     },
//     {
//       name: "Elena Kovacs",
//       role: "Head of Product Design",
//       image: "/assets/team/elena.jpg",
//       expertise: "UX/UI Innovation"
//     }
//   ];

//   // Client Logos
//   const clientLogos = [
//     "/assets/clients/google.png",
//     "/assets/clients/microsoft.png",
//     "/assets/clients/amazon.png",
//     "/assets/clients/netflix.png",
//     "/assets/clients/apple.png"
//   ];

//   // Workflow Process
//   const workflowSteps = [
//     {
//       title: "Consultation",
//       description: "Deep dive into your business challenges and goals",
//       icon: "🔍"
//     },
//     {
//       title: "Strategy Design",
//       description: "Develop a tailored technological roadmap",
//       icon: "📋"
//     },
//     {
//       title: "Development",
//       description: "Agile implementation with continuous feedback",
//       icon: "💻"
//     },
//     {
//       title: "Deployment & Support",
//       description: "Seamless launch and ongoing technical support",
//       icon: "🚀"
//     }
//   ];

//   return (
//     <div className="bg-gray-50">
//       {/* Previous sections remain the same */}
      
//       {/* Technology Stack Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <motion.h2 
//             initial={{ opacity: 0, y: -50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl font-bold mb-12 text-gray-800"
//           >
//             Our Technology Stack
//           </motion.h2>
//           <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
//             {technologyStack.map((tech, index) => (
//               <motion.div
//                 key={tech.name}
//                 initial={{ opacity: 0, scale: 0.6 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="flex flex-col items-center"
//               >
//                 {tech.icon}
//                 <p className="mt-2 text-sm">{tech.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Recent Projects Section */}
//       <section className="py-20 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <motion.h2 
//             initial={{ opacity: 0, y: -50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl font-bold text-center mb-12 text-gray-800"
//           >
//             Recent Projects
//           </motion.h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {recentProjects.map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="bg-white rounded-xl overflow-hidden shadow-lg"
//               >
//                 <Image 
//                   src={project.image} 
//                   alt={project.title} 
//                   width={500} 
//                   height={300} 
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-gray-600 mb-4">{project.description}</p>
//                   <div className="flex space-x-2">
//                     {project.technologies.map(tech => (
//                       <span 
//                         key={tech} 
//                         className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Members Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.h2 
//             initial={{ opacity: 0, y: -50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl font-bold text-center mb-12 text-gray-800"
//           >
//             Meet Our Experts
//           </motion.h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {teamMembers.map((member, index) => (
//               <motion.div
//                 key={member.name}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="bg-gray-100 rounded-xl overflow-hidden shadow-lg"
//               >
//                 <Image 
//                   src={member.image} 
//                   alt={member.name} 
//                   width={400} 
//                   height={400} 
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-6 text-center">
//                   <h3 className="text-xl font-bold">{member.name}</h3>
//                   <p className="text-gray-600 mb-2">{member.role}</p>
//                   <p className="text-sm text-gray-500 italic">{member.expertise}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Client Logos Section */}
//       <section className="py-20 bg-gray-100">
//         <div className="container mx-auto px-4 text-center">
//           <motion.h2 
//             initial={{ opacity: 0, y: -50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl font-bold mb-12 text-gray-800"
//           >
//             Trusted By Global Leaders
//           </motion.h2>
//           <div className="flex flex-wrap justify-center items-center gap-10">
//             {clientLogos.map((logo, index) => (
//               <motion.div
//                 key={logo}
//                 initial={{ opacity: 0, scale: 0.6 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Image 
//                   src={logo} 
//                   alt={`Client Logo ${index + 1}`} 
//                   width={150} 
//                   height={50} 
//                   className="grayscale hover:grayscale-0 transition-all duration-300"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Workflow Process Section */}
//       <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
//         <div className="container mx-auto px-4">
//           <motion.h2 
//             initial={{ opacity: 0, y: -50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl font-bold text-center mb-12"
//           >
//             Our Workflow Process
//           </motion.h2>
//           <div className="grid md:grid-cols-4 gap-8">
//             {workflowSteps.map((step, index) => (
//               <motion.div
//                 key={step.title}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="bg-white/20 p-6 rounded-xl text-center hover:bg-white/30 transition-all duration-300"
//               >
//                 <div className="text-5xl mb-4">{step.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{step.title}</h3>
//                 <p className="text-white/80">{step.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Existing Contact and Footer Sections */}
//       {/* ... (keep the existing contact and footer sections from the previous implementation) */}
//     </div>
//   );
// };

// export default HomePage;