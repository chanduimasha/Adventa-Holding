"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const ModernizeSection = () => {
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
      description:
        "Aventa Wins Coveted 2024 ISG Star of Excellence™ Overall Award for Superior Customer Experience",
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
      description:
        "Aventa Achieves $345.5 Million Revenue in Q2 FY25 with 5.3% Q-o-Q, 18.4% Y-o-Y Growth",
      link: "/financials",
    },
  ];

  return (
    <section className="relative text-white py-28 px-6 overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom"
        style={{ backgroundImage: "url('/assets/achievements/3.jpeg')" }}
      ></div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-indigo-900 bg-opacity-70"></div> */}

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 "
          initial="hidden"
          animate="visible"
          variants={topicVariants}
          transition={{ duration: 0.8 }}
        >
          <h1 className="xl:text-8xl text-4xl font-bold mb-16">We Modernize</h1>
          <p className="xl:text-xl text-lg mt-2 px-2 xl:px-48 text-center pb-20">
            Reinvent your applications, infrastructure and processes for greater
            agility by taking full advantage of automation, AI and cloud.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pb-12">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white text-black p-6 border-b-4 border-orange-600 shadow-lg hover:shadow-2xl transition-shadow duration-300"
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
      </div>
    </section>
  );
};

export default ModernizeSection;
