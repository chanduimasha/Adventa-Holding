import { motion } from "framer-motion";

const CompanySummary = () => {
  return (
    <section className="relative bg-zinc-200 overflow-hidden">
      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-center">
        {/* Header */}
        <motion.h2
          className="xl:text-5xl text-4xl font-bold mb-8 text-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Why Aventa?
        </motion.h2>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <FeatureBox
            value="$345.5M"
            label="Q2 FY25 Revenue"
            topText="Business Performance"
            delay={0.2}
          />
          <FeatureBox
            value="379+"
            label="Clients"
            topText="Global Reach"
            delay={0.4}
          />
          <FeatureBox
            value="23,200+"
            label="Industry & tech experts"
            topText="Talent Pool"
            delay={0.6}
          />
          <FeatureBox
            value="19"
            label="Countries"
            topText="Global Presence"
            delay={0.8}
          />
        </div>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-3xl font-semibold mb-4 text-white">
            See Beyond, Rise Above
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white mb-8 mt-4 text-black font-semibold py-1 px-4 rounded-full shadow-lg hover:bg-transparent hover:text-orange-500 hover:border-orange-700 transition"
          >
            Watch our brand video to learn more
          </motion.button>
        </motion.div>
      </div>

      {/* Background Image with Blur and Zoom */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out transform hover:scale-105"
          style={{ backgroundImage: "url('/assets/back19.jpg')" }}
        ></div>
      </div>
    </section>
  );
};

type FeatureProps = {
  value: string;
  label: string;
  topText: string;
  delay: number;
};

const FeatureBox = ({ value, label, topText, delay }: FeatureProps) => {
  return (
    <motion.div
      className="bg-blue-950 text-white p-6 border-b-4 border-orange-600 shadow-lg text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.6 }}
    >
      {/* Top Text */}
      <p className="text-sm text-gray-300 uppercase tracking-wide mb-2">{topText}</p>

      <h4 className="text-3xl font-extrabold mb-2">{value}</h4>
      <p className="text-sm uppercase tracking-wide">{label}</p>
    </motion.div>
  );
};

export default CompanySummary;