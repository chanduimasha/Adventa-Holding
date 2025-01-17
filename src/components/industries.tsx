import { useState } from "react";
import { motion } from "framer-motion";
import CompanyCard from "@/components/company-card";
import { industries } from "@/data/industries";

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br bg-blue-50 dark:bg-neutral-950">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto px-4 py-32"
          >
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text"
            >
              Industries We Serve
            </motion.h1>

            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12"
            >
              Discover our specialized solutions across different sectors
            </motion.p>

            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-full transition-all 
                    ${
                      selectedIndustry.id === industry.id
                        ? "bg-[#2056aeff] text-white shadow-lg shadow-[#50ade5ff]"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-[#50ade5ff] hover:text-white"
                    }`}
                >
                  {industry.name}
                </button>
              ))}
            </div>

            <div className="flex justify-center items-center min-h-screen">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                {selectedIndustry.subCompanies.map((company, index) => (
                  <CompanyCard
                    key={company.id}
                    company={company}
                    industryName={selectedIndustry.name}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
