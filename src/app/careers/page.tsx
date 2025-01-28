// "use client";

// import React, { useState, useMemo, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   MapPin,
//   Clock,
//   Briefcase,
//   Users,
//   Search,
//   X,
//   Sparkles,
// } from "lucide-react";
// import NavBar from "@/components/nav-bar";
// import Footer from "@/components/footer-section";
// import { toast } from "react-hot-toast";
// import ReCAPTCHA from "react-google-recaptcha";

// interface Job {
//   id: string;
//   topic: string;
//   location: string;
//   type: string;
//   employment: string;
//   experience: string;
//   vacancies: string;
//   description?: string;
//   requirements?: string[];
//   benefits?: string[];
//   salary?: string;
//   department?: string;
//   skills?: string[];
//   deadline?: string;
// }

// interface JobItem {
//   sys: {
//     id: string;
//   };
//   fields: {
//     topic?: string;
//     location?: string;
//     type?: string;
//     employment?: string;
//     experience?: string;
//     vacancies?: string;
//     department?: string;
//     skills?: string[];
//     description?: string;
//     requirements?: string[];
//     benefits?: string[];
//     salary?: string;
//     deadline?: string;
//   };
// }

// const Careers: React.FC = () => {
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [jobs, setJobs] = useState<Job[]>([]);

//   const filters = [
//     { id: "all", label: "All Jobs" },
//     { id: "fulltime", label: "Full Time" },
//     { id: "remote", label: "Remote" },
//     { id: "hybrid", label: "Hybrid" },
//     { id: "onsite", label: "On-site" },
//   ];

//   useEffect(() => {
//     fetch(
//       "https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/entries?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4&content_type=careers"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         const jobs = data.items.map((item: JobItem) => ({
//           id: item.sys.id,
//           topic: item.fields.topic || "",
//           location: item.fields.location || "",
//           type: item.fields.type || "",
//           employment: item.fields.employment || "",
//           experience: item.fields.experience || "",
//           vacancies: item.fields.vacancies || "",
//           department: item.fields.department || "",
//           skills: item.fields.skills || [],
//           description: item.fields.description || "",
//           requirements: item.fields.requirements || [],
//           benefits: item.fields.benefits || [],
//           salary: item.fields.salary || "",
//           deadline: item.fields.deadline || "",
//         }));

//         setJobs(jobs);
//       })
//       .catch((error) => {
//         console.error("Error fetching jobs:", error);
//         toast.error("Failed to fetch jobs. Please try again later.");
//       });
//   }, []);

//   // Filter and search logic using useMemo
//   const filteredJobs = useMemo(() => {
//     return jobs.filter((job) => {
//       const searchMatch =
//         searchTerm === "" ||
//         job.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         (job.department?.toLowerCase().includes(searchTerm.toLowerCase()) ??
//           false) ||
//         job.skills?.some((skill) =>
//           skill.toLowerCase().includes(searchTerm.toLowerCase())
//         );

//       const filterMatch =
//         activeFilter === "all" ||
//         (activeFilter === "fulltime" && job.employment === "Full Time") ||
//         (activeFilter === "remote" && job.type === "Remote") ||
//         (activeFilter === "hybrid" && job.type === "Hybrid") ||
//         (activeFilter === "onsite" && job.type === "On-site");

//       return searchMatch && filterMatch;
//     });
//   }, [jobs, searchTerm, activeFilter]);

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   const JobModal: React.FC<{ job: Job; onClose: () => void }> = ({
//     job,
//     onClose,
//   }) => {
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

//     const handleSubmit = async (formData: FormData) => {
//       if (!recaptchaValue) {
//         toast.error("Please complete the reCAPTCHA verification");
//         return;
//       }

//       setIsSubmitting(true);

//       try {
//         // Append additional data to formData
//         formData.append("jobTitle", job.topic);
//         formData.append("recaptchaToken", recaptchaValue);

//         const response = await fetch("/api/submit-application", {
//           method: "POST",
//           body: formData,
//         });

//         const result = await response.json();

//         if (!response.ok) {
//           throw new Error(result.error || "Failed to submit application");
//         }

//         if (result.success) {
//           toast.success("Application submitted successfully!");
//           onClose();
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         toast.error("Failed to submit application. Please try again.");
//       } finally {
//         setIsSubmitting(false);
//       }
//     };

//     return (
//       <motion.div
//         className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={onClose}
//       >
//         <motion.div
//           className="bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.9, opacity: 0 }}
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="p-8">
//             <div className="flex justify-between items-start mb-6">
//               <div>
//                 <h2 className="text-2xl font-bold text-white mb-2">
//                   {job.topic}
//                 </h2>
//                 <p className="text-indigo-300">{job.department}</p>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//               <div className="bg-white/5 p-4 rounded-lg">
//                 <div className="flex items-center gap-2 text-indigo-300 mb-1">
//                   <MapPin size={16} />
//                   <span className="text-sm">Location</span>
//                 </div>
//                 <span className="text-white">{job.location}</span>
//               </div>
//               <div className="bg-white/5 p-4 rounded-lg">
//                 <div className="flex items-center gap-2 text-indigo-300 mb-1">
//                   <Clock size={16} />
//                   <span className="text-sm">Work Mode</span>
//                 </div>
//                 <span className="text-white">{job.type}</span>
//               </div>
//               <div className="bg-white/5 p-4 rounded-lg">
//                 <div className="flex items-center gap-2 text-indigo-300 mb-1">
//                   <Briefcase size={16} />
//                   <span className="text-sm">Employment</span>
//                 </div>
//                 <span className="text-white">{job.employment}</span>
//               </div>
//               <div className="bg-white/5 p-4 rounded-lg">
//                 <div className="flex items-center gap-2 text-indigo-300 mb-1">
//                   <Users size={16} />
//                   <span className="text-sm">Vacancies</span>
//                 </div>
//                 <span className="text-white">{job.vacancies}</span>
//               </div>
//             </div>

//             <div className="space-y-8">
//               <section>
//                 <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
//                   <Sparkles size={20} className="text-indigo-400" />
//                   Required Skills
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {job.skills?.map((skill, index) => (
//                     <span
//                       key={index}
//                       className="bg-indigo-600/20 text-indigo-300 px-3 py-1 rounded-full text-sm"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </section>

//               <section>
//                 <h3 className="text-xl font-semibold mb-4 text-white">
//                   Job Description
//                 </h3>
//                 <p className="text-gray-300 leading-relaxed">
//                   {job.description}
//                 </p>
//               </section>

//               <section>
//                 <h3 className="text-xl font-semibold mb-4 text-white">
//                   Requirements
//                 </h3>
//                 <ul className="space-y-3">
//                   {job.requirements?.map((req, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <div className="mt-1.5">
//                         <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
//                       </div>
//                       <span className="text-gray-300">{req}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </section>

//               <section>
//                 <h3 className="text-xl font-semibold mb-4 text-white">
//                   Benefits
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {job.benefits?.map((benefit, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"
//                     >
//                       <div className="w-8 h-8 bg-indigo-600/30 rounded-lg flex items-center justify-center">
//                         <Sparkles size={16} className="text-indigo-300" />
//                       </div>
//                       <span className="text-gray-300">{benefit}</span>
//                     </div>
//                   ))}
//                 </div>
//               </section>

//               <form action={handleSubmit}>
//                 <h3 className="text-xl font-semibold mb-4 text-white">
//                   Apply Now
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-2">
//                       Full Name
//                     </label>
//                     <input
//                       name="name"
//                       type="text"
//                       required
//                       className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
//                       placeholder="Enter your full name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-2">
//                       Email
//                     </label>
//                     <input
//                       name="email"
//                       type="email"
//                       required
//                       className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
//                       placeholder="Enter your email"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">
//                     Phone
//                   </label>
//                   <input
//                     name="phone"
//                     type="tel"
//                     required
//                     className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
//                     placeholder="Enter your phone number"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">
//                     Resume/CV
//                   </label>
//                   <input
//                     name="resume"
//                     type="file"
//                     required
//                     accept=".pdf"
//                     className="w-full text-gray-300 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">
//                     Cover Letter
//                   </label>
//                   <textarea
//                     name="coverLetter"
//                     required
//                     className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
//                     rows={4}
//                     placeholder="Tell us why you're interested in this position..."
//                   />
//                 </div>

//                 <div className="flex justify-center mt-6 mb-4">
//                   <ReCAPTCHA
//                     sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
//                     onChange={(value) => setRecaptchaValue(value)}
//                   />
//                 </div>

//                 <div className="flex justify-center items-center">
//                   <motion.button
//                     type="submit"
//                     disabled={isSubmitting || !recaptchaValue}
//                     className="w-1/2 bg-[#2056aeff] text-white py-2 px-4 rounded-md hover:bg-[#50ade5ff] transition disabled:opacity-50 disabled:cursor-not-allowed"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     {isSubmitting ? "Submitting..." : "Submit Application"}
//                   </motion.button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     );
//   };

//   return (
//     <div>
//       <NavBar />
//       <div className="bg-blue-50 dark:bg-neutral-900 min-h-screen py-10 text-black xl:pt-20 pt-12 pb-12">
//         <div className="container mx-auto px-4 py-12">
//           {/* Hero Section */}
//           <motion.div
//             className="text-center mb-12"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="xl:text-5xl text-4xl font-bold mb-4 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text">
//               Find Your Next Career Move
//             </h1>
//             <p className="text-gray-800 dark:text-gray-400 text-lg max-w-2xl mx-auto">
//               Join our team of innovators and help shape the future of
//               technology
//             </p>
//           </motion.div>

//           {/* Search and Filter Section */}
//           <motion.div
//             className="mb-10"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="flex flex-col md:flex-row gap-4 mb-6">
//               <div className="flex-1 relative">
//                 <Search
//                   className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800"
//                   size={20}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Search by job title, department, or skills..."
//                   className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 dark:text-white border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2056aeff] text-black placeholder-gray-400"
//                   value={searchTerm}
//                   onChange={handleSearch}
//                 />
//               </div>
//               <div className="flex items-center gap-2 overflow-x-auto md:overflow-visible py-2 md:py-0">
//                 {filters.map((filter) => (
//                   <button
//                     key={filter.id}
//                     onClick={() => setActiveFilter(filter.id)}
//                     className={`px-4 py-3 rounded-xl whitespace-nowrap transition-all duration-300 ${
//                       activeFilter === filter.id
//                         ? "bg-[#2056aeff] text-white"
//                         : "bg-white dark:bg-gray-700 text-black dark:text-gray-200 border border-gray-400 hover:bg-[#50ade5ff]"
//                     }`}
//                   >
//                     {filter.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Results count */}
//             <div className="text-gray-800 dark:text-gray-200 mb-6">
//               Found {filteredJobs.length}{" "}
//               {filteredJobs.length === 1 ? "job" : "jobs"}
//               {searchTerm && ` matching "${searchTerm}"`}
//               {activeFilter !== "all" &&
//                 ` in ${filters.find((f) => f.id === activeFilter)?.label}`}
//             </div>
//           </motion.div>

//           {/* Job Cards Grid */}
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             {filteredJobs.length > 0 ? (
//               filteredJobs.map((job, index) => (
//                 <motion.div
//                   key={job.id}
//                   className="group relative dark:hover:shadow-blue-lg bg-blue-50 dark:bg-gray-950 rounded-xl p-6 border border-gray-300 dark:border dark:border-gray-700 hover:border-indigo-500 transition-all duration-300"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                 >
//                   {/* Job Type Badge */}
//                   <div className="flex justify-between items-start mb-4">
//                     <span
//                       className={`px-3 py-1 rounded-full text-sm ${
//                         job.type === "Remote"
//                           ? "bg-green-300 text-gray-700"
//                           : job.type === "Hybrid"
//                           ? "bg-purple-300 text-gray-700"
//                           : "bg-blue-300 text-gray-700"
//                       }`}
//                     >
//                       {job.type}
//                     </span>
//                     <span className="text-indigo-700 text-sm">
//                       {job.deadline}
//                     </span>
//                   </div>

//                   {/* Job Title and Department */}
//                   <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-indigo-700 transition-colors">
//                     {job.topic}
//                   </h2>
//                   <p className="text-indigo-700 mb-4">{job.department}</p>

//                   {/* Job Details */}
//                   <div className="space-y-3 mb-6">
//                     <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
//                       <MapPin size={16} />
//                       <span className="text-sm">{job.location}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
//                       <Briefcase size={16} />
//                       <span className="text-sm">{job.employment}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
//                       <Users size={16} />
//                       <span className="text-sm">{job.vacancies} positions</span>
//                     </div>
//                   </div>

//                   {/* Skills Tags */}
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {job.skills?.slice(0, 3).map((skill, idx) => (
//                       <span
//                         key={idx}
//                         className="px-2 py-1 rounded-lg bg-white text-gray-600 text-xs border border-gray-300"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                     {job.skills && job.skills.length > 3 && (
//                       <span className="text-gray-600 dark:text-gray-400 text-xs">
//                         +{job.skills.length - 3} more
//                       </span>
//                     )}
//                   </div>

//                   {/* Apply Button */}
//                   <motion.button
//                     className="w-full bg-[#2056aeff] hover:bg-[#50ade5ff] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => {
//                       setSelectedJob(job);
//                       setIsModalOpen(true);
//                     }}
//                   >
//                     View Details
//                     <svg
//                       className="w-4 h-4 group-hover:translate-x-1 transition-transform"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </motion.button>
//                 </motion.div>
//               ))
//             ) : (
//               // No results state
//               <motion.div
//                 className="col-span-full text-center py-12"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//               >
//                 <div className="text-gray-700 dark:text-gray-300 text-lg mb-4">
//                   No jobs found
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   Try adjusting your search or filter criteria
//                 </p>
//               </motion.div>
//             )}
//           </motion.div>
//         </div>

//         <AnimatePresence>
//           {isModalOpen && selectedJob && (
//             <JobModal
//               job={selectedJob}
//               onClose={() => {
//                 setIsModalOpen(false);
//                 setSelectedJob(null);
//               }}
//             />
//           )}
//         </AnimatePresence>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Careers;

"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Briefcase,
  Users,
  Search,
  X,
  Sparkles,
} from "lucide-react";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer-section";
import { toast } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

interface Job {
  id: string;
  topic: string;
  location: string;
  type: string;
  employment: string;
  experience: string;
  vacancies: string;
  description?: string;
  requirements?: string[];
  benefits?: string[];
  salary?: string;
  department?: string;
  skills?: string[];
  deadline?: string;
}

interface JobItem {
  sys: {
    id: string;
  };
  fields: {
    topic?: string;
    location?: string;
    type?: string;
    employment?: string;
    experience?: string;
    vacancies?: string;
    department?: string;
    skills?: string[];
    description?: string;
    requirements?: string[];
    benefits?: string[];
    salary?: string;
    deadline?: string;
  };
}

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [jobs, setJobs] = useState<Job[]>([]);

  const filters = [
    { id: "all", label: "All Jobs" },
    { id: "fulltime", label: "Full Time" },
    { id: "remote", label: "Remote" },
    { id: "hybrid", label: "Hybrid" },
    { id: "onsite", label: "On-site" },
  ];

  useEffect(() => {
    fetch(
      "https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/entries?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4&content_type=careers"
    )
      .then((res) => res.json())
      .then((data) => {
        const jobs = data.items.map((item: JobItem) => ({
          id: item.sys.id,
          topic: item.fields.topic || "",
          location: item.fields.location || "",
          type: item.fields.type || "",
          employment: item.fields.employment || "",
          experience: item.fields.experience || "",
          vacancies: item.fields.vacancies || "",
          department: item.fields.department || "",
          skills: item.fields.skills || [],
          description: item.fields.description || "",
          requirements: item.fields.requirements || [],
          benefits: item.fields.benefits || [],
          salary: item.fields.salary || "",
          deadline: item.fields.deadline || "",
        }));

        setJobs(jobs);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        toast.error("Failed to fetch jobs. Please try again later.");
      });
  }, []);

  // Filter and search logic using useMemo
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const searchMatch =
        searchTerm === "" ||
        job.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (job.department?.toLowerCase().includes(searchTerm.toLowerCase()) ??
          false) ||
        job.skills?.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const filterMatch =
        activeFilter === "all" ||
        (activeFilter === "fulltime" && job.employment === "Full Time") ||
        (activeFilter === "remote" && job.type === "Remote") ||
        (activeFilter === "hybrid" && job.type === "Hybrid") ||
        (activeFilter === "onsite" && job.type === "On-site");

      return searchMatch && filterMatch;
    });
  }, [jobs, searchTerm, activeFilter]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const JobModal: React.FC<{ job: Job; onClose: () => void }> = ({
    job,
    onClose,
  }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);


    const handleSubmit = async (formData: FormData) => {
      if (!recaptchaValue) {
        toast.error("Please complete the reCAPTCHA verification");
        return;
      }

      setIsSubmitting(true);

      try {
        // Get the PDF file from formData
        const resumeFile = formData.get("resume") as File;

        if (!resumeFile) {
          toast.error("Please select a resume file");
          return;
        }

        // Validate file size (e.g., 5MB limit)
        const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes
        if (resumeFile.size > MAX_FILE_SIZE) {
          toast.error("Resume file size must be less than 5MB");
          return;
        }

        // Convert PDF to base64
        const base64Resume = await convertToBase64(resumeFile);

        // Create submission data
        const submitData = {
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          coverLetter: formData.get("coverLetter"),
          jobTitle: job.topic,
          recaptchaToken: recaptchaValue,
          resume: {
            filename: resumeFile.name,
            content: base64Resume,
            contentType: resumeFile.type,
          },
        };

        // Send the request
        const response = await fetch("/api/submit-application", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        });

        // Always try to parse JSON, but handle cases where it might fail
        let result;
        try {
          result = await response.json();
        } catch (error) {
          console.error("Error parsing JSON response:", error);
          throw new Error("Invalid server response");
        }

        if (!response.ok) {
          throw new Error(result?.error || "Failed to submit application");
        }

        if (result?.success) {
          toast.success("Application submitted successfully!");
          onClose();
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (error) {
        console.error("Error submitting application:", error);
        toast.error(
          error instanceof Error
            ? error.message
            : "Failed to submit application. Please try again."
        );
      } finally {
        setIsSubmitting(false);
      }
    };

    const convertToBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
      });
    };

    return (
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {job.topic}
                </h2>
                <p className="text-indigo-300">{job.department}</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-indigo-300 mb-1">
                  <MapPin size={16} />
                  <span className="text-sm">Location</span>
                </div>
                <span className="text-white">{job.location}</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-indigo-300 mb-1">
                  <Clock size={16} />
                  <span className="text-sm">Work Mode</span>
                </div>
                <span className="text-white">{job.type}</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-indigo-300 mb-1">
                  <Briefcase size={16} />
                  <span className="text-sm">Employment</span>
                </div>
                <span className="text-white">{job.employment}</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-indigo-300 mb-1">
                  <Users size={16} />
                  <span className="text-sm">Vacancies</span>
                </div>
                <span className="text-white">{job.vacancies}</span>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <Sparkles size={20} className="text-indigo-400" />
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-indigo-600/20 text-indigo-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Job Description
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {job.description}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Requirements
                </h3>
                <ul className="space-y-3">
                  {job.requirements?.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1.5">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">{req}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {job.benefits?.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"
                    >
                      <div className="w-8 h-8 bg-indigo-600/30 rounded-lg flex items-center justify-center">
                        <Sparkles size={16} className="text-indigo-300" />
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>

              <form action={handleSubmit}>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Apply Now
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Resume/CV
                  </label>
                  <input
                    name="resume"
                    type="file"
                    required
                    accept=".pdf"
                    className="w-full text-gray-300 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    name="coverLetter"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    rows={4}
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>

                <div className="flex justify-center mt-6 mb-4">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                    onChange={(value) => setRecaptchaValue(value)}
                  />
                </div>

                <div className="flex justify-center items-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !recaptchaValue}
                    className="w-1/2 bg-[#2056aeff] text-white py-2 px-4 rounded-md hover:bg-[#50ade5ff] transition disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div>
      <NavBar />
      <div className="bg-blue-50 dark:bg-neutral-900 min-h-screen py-10 text-black xl:pt-20 pt-12 pb-12">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="xl:text-5xl text-4xl font-bold mb-4 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text">
              Find Your Next Career Move
            </h1>
            <p className="text-gray-800 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Join our team of innovators and help shape the future of
              technology
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search by job title, department, or skills..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 dark:text-white border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2056aeff] text-black placeholder-gray-400"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto md:overflow-visible py-2 md:py-0">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-3 rounded-xl whitespace-nowrap transition-all duration-300 ${
                      activeFilter === filter.id
                        ? "bg-[#2056aeff] text-white"
                        : "bg-white dark:bg-gray-700 text-black dark:text-gray-200 border border-gray-400 hover:bg-[#50ade5ff]"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <div className="text-gray-800 dark:text-gray-200 mb-6">
              Found {filteredJobs.length}{" "}
              {filteredJobs.length === 1 ? "job" : "jobs"}
              {searchTerm && ` matching "${searchTerm}"`}
              {activeFilter !== "all" &&
                ` in ${filters.find((f) => f.id === activeFilter)?.label}`}
            </div>
          </motion.div>

          {/* Job Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="group relative dark:hover:shadow-blue-lg bg-blue-50 dark:bg-gray-950 rounded-xl p-6 border border-gray-300 dark:border dark:border-gray-700 hover:border-indigo-500 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Job Type Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        job.type === "Remote"
                          ? "bg-green-300 text-gray-700"
                          : job.type === "Hybrid"
                          ? "bg-purple-300 text-gray-700"
                          : "bg-blue-300 text-gray-700"
                      }`}
                    >
                      {job.type}
                    </span>
                    <span className="text-indigo-700 text-sm">
                      {job.deadline}
                    </span>
                  </div>

                  {/* Job Title and Department */}
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-indigo-700 transition-colors">
                    {job.topic}
                  </h2>
                  <p className="text-indigo-700 mb-4">{job.department}</p>

                  {/* Job Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin size={16} />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Briefcase size={16} />
                      <span className="text-sm">{job.employment}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Users size={16} />
                      <span className="text-sm">{job.vacancies} positions</span>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.skills?.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-lg bg-white text-gray-600 text-xs border border-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {job.skills && job.skills.length > 3 && (
                      <span className="text-gray-600 dark:text-gray-400 text-xs">
                        +{job.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Apply Button */}
                  <motion.button
                    className="w-full bg-[#2056aeff] hover:bg-[#50ade5ff] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedJob(job);
                      setIsModalOpen(true);
                    }}
                  >
                    View Details
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                </motion.div>
              ))
            ) : (
              // No results state
              <motion.div
                className="col-span-full text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                  No jobs found
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search or filter criteria
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>

        <AnimatePresence>
          {isModalOpen && selectedJob && (
            <JobModal
              job={selectedJob}
              onClose={() => {
                setIsModalOpen(false);
                setSelectedJob(null);
              }}
            />
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
