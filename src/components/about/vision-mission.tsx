import { motion } from "framer-motion";

const VisionMissionSection: React.FC = () => {
  return (
    <div className="bg-dark-blue text-white dark:bg-neutral-900 py-16 px-8 ">
      <div className="max-w-4xl mx-auto rounded-2xl p-16 dark:bg-gray-950 dark:hover:shadow-blue-lg">
        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-center text-3xl xl:text-4xl font-semibold mb-4 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text">
            Our Vision
          </h2>
          <p className="text-xl leading-relaxed">
            To be a transformative force in shaping a sustainable future by
            driving innovation, empowering communities, and creating enduring
            value across diverse industries.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.hr
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t-2 border-gray-500 my-8 mx-auto w-full"
        />

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <h2 className="text-center text-3xl xl:text-4xl font-semibold mb-4 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text">
            Our Mission
          </h2>
          <p className="text-xl leading-relaxed">
            Adventa Capital is committed to empowering its subsidiaries to excel
            as leaders in their respective sectors by fostering innovation,
            integrating sustainable practices, and embracing advanced
            technologies. We strive to deliver impactful solutions that address
            global and local challenges, uphold ethical and socially responsible
            governance, and create opportunities for growth and progress.
            Through collaboration and strategic leadership, we aim to build a
            legacy of excellence, innovation, and sustainability for future
            generations.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
