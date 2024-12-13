import React from "react";
import { motion } from "framer-motion";
import Stats from "./stats-chart";


const CompanyHighlights = () => {
  return (
    <motion.section className="py-20 bg-indigo-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          {...{
            className: "text-3xl font-bold mb-20 text-center text-white",
          }}
        >
          Company Highlights
        </motion.h2>
        <Stats />
      </div>
    </motion.section>
  );
};

export default CompanyHighlights;
