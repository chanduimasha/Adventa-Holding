import { motion } from "framer-motion";

const VisionMissionSection: React.FC = () => {
  return (
    <div className="bg-dark-blue text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#2056aeff]">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            To be the industry leader in Sri Lanka by 2030, for technology innovations, networking and ICT system
            integration, that helps to enhance the living style of our people.
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
          <h2 className="text-3xl font-semibold mb-4 text-[#2056aeff]">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To be at the forefront of Information and Communication Technology, by empowering people, business, and
            society with cutting-edge technology solutions, that are innovative and creative.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
