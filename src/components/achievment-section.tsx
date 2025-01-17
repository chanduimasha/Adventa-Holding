import { motion } from "framer-motion";
import Link from "next/link";

const AchievmentSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const topicVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const cards = [
    {
      topic: "Press Release",
      description: "Aventa Wins Coveted 2024 ISG Star of Excellence™ Overall Award for Superior Customer Experience",
      link: "/awards",
    },
    {
      topic: "Press Release",
      description:
        "Aventa Unveils SASVA™ 2.0: Revolutionizing AI-Driven Software Development and Business Acceleration",
      link: "/sasva",
    },
    {
      topic: "Press Release",
      description: "Aventa Achieves $345.5 Million Revenue in Q2 FY25 with 5.3% Q-o-Q, 18.4% Y-o-Y Growth",
      link: "/financials",
    },
  ];

  return (
    <section className="bg-blue-950 text-white py-12 px-6 relative">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial="hidden"
        animate="visible"
        variants={topicVariants}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-8">We are Aventa Holdings</h1>
        <p className="text-lg mt-2">
          A trusted Digital Engineering and Enterprise Modernization partner.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white text-black p-6 border-b-4 rounded-md border-orange-600 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Topic with Animation */}
            <motion.p
              className="text-sm mb-2 text-gray-600"
              variants={topicVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {item.topic}
            </motion.p>

            {/* Link */}
            <Link
              href={item.link}
              passHref
              className="text-black text-sm font-semibold hover:text-orange-500 leading-tight inline-block"
            >
              {item.description}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievmentSection;