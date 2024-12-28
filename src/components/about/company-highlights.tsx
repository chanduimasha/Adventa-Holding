import React from "react";
import { motion } from "framer-motion";
import Stats from "../stats-chart";


const CompanyHighlights = () => {
  return (
    <motion.section className="py-8 pb-16 bg-zinc-200 dark:bg-neutral-900 shadow-2xl">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          {...{
            className: "xl:text-6xl text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text",
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
