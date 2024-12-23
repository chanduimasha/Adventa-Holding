"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Briefcase,
  Users,
  Search,
  X,
  Sparkles
} from "lucide-react";
import NavBar from "@/components/nav-bar";
import FooterNew from "@/components/footer";

interface Job {
  title: string;
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

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Jobs" },
    { id: "fulltime", label: "Full Time" },
    { id: "remote", label: "Remote" },
    { id: "hybrid", label: "Hybrid" },
    { id: "onsite", label: "On-site" },
  ];

  const jobs = [
    {
      title: "Associate Engineer (L1) IT Support",
      location: "Islandwide",
      type: "On-site",
      employment: "Full Time",
      experience: "2 years",
      vacancies: "02",
      department: "IT Operations",
      skills: [
        "Windows",
        "Linux",
        "Networking",
        "Hardware Support",
        "IT Security",
      ],
      description:
        "We are seeking a skilled IT Support Engineer to join our team. You will be responsible for providing technical support, maintaining systems, and ensuring smooth operation of IT infrastructure.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "2+ years of experience in IT support",
        "Strong knowledge of Windows/Linux systems",
        "Experience with networking concepts and troubleshooting",
        "Excellent problem-solving and communication skills",
      ],
      benefits: [
        "Competitive salary package",
        "Health insurance",
        "Professional development opportunities",
        "Annual performance bonus",
        "Flexible work arrangements",
      ],
      salary: "LKR 100,000 - 150,000",
      deadline: "2024-12-31",
    },
    {
      title: "Software Developer (Frontend)",
      location: "Colombo",
      type: "Hybrid",
      employment: "Full Time",
      experience: "3 years",
      vacancies: "03",
      department: "Engineering",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Git"],
      deadline: "2024-12-15",
      description:
        "Join our dynamic development team to create modern, responsive web applications using cutting-edge technologies.",
      requirements: [
        "Strong experience with React.js and Next.js",
        "Proficiency in TypeScript and modern JavaScript",
        "Experience with responsive design and CSS frameworks",
        "Knowledge of version control systems (Git)",
        "Understanding of web performance optimization",
      ],
      benefits: [
        "Competitive salary package",
        "Remote work options",
        "Learning and development budget",
        "Health insurance",
        "Team building events",
      ],
      salary: "LKR 150,000 - 250,000",
    },
    {
      title: "Network Administrator",
      location: "Islandwide",
      type: "Remote",
      employment: "Part Time",
      experience: "4 years",
      vacancies: "01",
      department: "Infrastructure",
      skills: ["CCNA", "Network Security", "TCP/IP", "Firewall", "VPN"],
      deadline: "2024-12-20",
      description:
        "We're looking for an experienced Network Administrator to maintain and optimize our network infrastructure.",
      requirements: [
        "CCNA certification required, CCNP preferred",
        "Experience with network security and firewall management",
        "Knowledge of TCP/IP, DNS, DHCP, and other network protocols",
        "Familiarity with network monitoring tools",
        "Strong troubleshooting skills",
      ],
      benefits: [
        "Flexible working hours",
        "Performance bonuses",
        "Professional certification support",
        "Health insurance",
        "Remote work options",
      ],
      salary: "LKR 200,000 - 300,000",
    },
  ];

  // Filter and search logic using useMemo
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Search term filter
      const searchMatch =
        searchTerm === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        );

      // Category filter
      const filterMatch =
        activeFilter === "all" ||
        (activeFilter === "fulltime" && job.employment === "Full Time") ||
        (activeFilter === "remote" && job.type === "Remote") ||
        (activeFilter === "hybrid" && job.type === "Hybrid") ||
        (activeFilter === "onsite" && job.type === "On-site");

      return searchMatch && filterMatch;
    });
  }, [searchTerm, activeFilter]);

  // Debounced search handler
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const JobModal = ({ job, onClose }: { job: Job; onClose: () => void }) => (
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
                {job.title}
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
              <p className="text-gray-300 leading-relaxed">{job.description}</p>
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

            <form className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Apply Now
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
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
                  type="tel"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Resume/CV
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Cover Letter
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                  rows={4}
                />
              </div>
              <div className="flex justify-center items-center">
                <motion.button
                  type="submit"
                  className="w-1/2 bg-[#2056aeff] text-white py-2 px-4 rounded-md hover:bg-[#50ade5ff] transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Application
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div>
      <NavBar/>
      <div className="bg-blue-50 min-h-screen py-10 text-black xl:pt-20 pt-12 pb-12">
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
            <p className="text-gray-800 text-lg max-w-2xl mx-auto">
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
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2056aeff] text-black placeholder-gray-400"
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
                        : "bg-white text-black border border-gray-400 hover:bg-[#50ade5ff]"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <div className="text-gray-800 mb-6">
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
                  key={index}
                  className="group relative bg-gradient-to-br shadow-xl from-blue-200 to-white rounded-xl p-6 border border-gray-300 hover:border-indigo-500 transition-all duration-300"
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
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-indigo-700 transition-colors">
                    {job.title}
                  </h2>
                  <p className="text-indigo-700 mb-4">{job.department}</p>

                  {/* Job Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Briefcase size={16} />
                      <span className="text-sm">{job.employment}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
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
                      <span className="text-gray-600 text-xs">
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
                <div className="text-gray-700 text-lg mb-4">No jobs found</div>
                <p className="text-gray-600">
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
      <FooterNew/>
    </div>
  );
};

export default Careers;
