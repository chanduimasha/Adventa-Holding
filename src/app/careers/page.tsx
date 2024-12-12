"use client";
import React from "react";
import { motion } from "framer-motion";

interface Job {
  title: string;
  location: string;
  type: string;
  employment: string;
  experience: string;
  vacancies: string;
}

const Careers: React.FC = () => {
  const jobs: Job[] = [
    {
      title: "Associate Engineer (L1) IT Support (Desktop & Systems)",
      location: "Islandwide",
      type: "On-site",
      employment: "Full Time",
      experience: "2 years",
      vacancies: "02",
    },
    {
      title: "Software Developer (Frontend)",
      location: "Colombo",
      type: "Hybrid",
      employment: "Full Time",
      experience: "3 years",
      vacancies: "03",
    },
    {
      title: "Network Administrator",
      location: "Islandwide",
      type: "Remote",
      employment: "Part Time",
      experience: "4 years",
      vacancies: "01",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-800 min-h-screen py-10 text-white">
      <div className="container mx-auto px-4">
        <motion.h1
          {...{
            className: "text-center text-4xl font-bold mb-10 text-white",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Job Vacancies
        </motion.h1>
        <motion.div
          {...{
            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              {...{
                className:
                  "bg-white text-black rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <h2 className="text-lg font-semibold mb-4">{job.title}</h2>
              <ul className="space-y-2">
                <li>
                  <strong>Location:</strong> {job.location}
                </li>
                <li>
                  <strong>Work Mode:</strong> {job.type}
                </li>
                <li>
                  <strong>Employment:</strong> {job.employment}
                </li>
                <li>
                  <strong>Experience:</strong> {job.experience}
                </li>
                <li>
                  <strong>No. of Vacancies:</strong> {job.vacancies}
                </li>
              </ul>
              <motion.button
                {...{
                  className:
                    "mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-800 transition",
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#2f17bd",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
