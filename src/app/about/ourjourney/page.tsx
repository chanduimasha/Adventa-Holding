"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Stats from "@/components/stats-chart";

const OurJourney = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white ">
        <div className="min-h-screen p-8">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h1 className="text-4xl font-bold text-indigo-700">
                Our Journey
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              {...{
                className: "mt-6 text-lg text-gray-300 text-justify",
              }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              At Aventa Holdings Pvt Ltd, we are your trusted partner for
              achieving digital success. Our journey is driven by a steadfast
              dedication to delivering cutting-edge technology solutions. We
              specialize in Data Networking, Surveillance, Telephony, Security,
              and much more. As leaders in emerging technologies like Cloud
              Services, IoT, and Robotics, we are committed to helping you
              navigate the path to digital excellence. Join us in shaping a
              seamless and innovative future together.
            </motion.p>

            {/* Timeline */}
            <motion.div
              {...{
                className: "relative mt-12",
              }}
              variants={container}
              initial="hidden"
              animate="show"
            >
              <div className="absolute w-1 bg-indigo-700 left-1/2 transform -translate-x-1/2 h-full"></div>
              <div className="space-y-2">
                {[
                  { date: "JUN 2008", text: "Established as a firm" },
                  { date: "AUG 2009", text: "Partnering with TIPL" },
                  { date: "MAY 2010", text: "Obtained Green IT Certification" },
                  { date: "SEP 2016", text: "Obtained CIDA EM02 grade" },
                  { date: "JUL 2017", text: "Incorporation" },
                  { date: "JUN 2018", text: "10th Anniversary" },
                  { date: "DEC 2018", text: "Appointed new management" },
                  { date: "FEB 2019", text: "Implemented C3 project standard" },
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    {...{
                      className: `flex items-center ${
                        index % 2 === 0 ? "flex-row-reverse" : ""
                      }`,
                    }}
                    variants={item}
                  >
                    {/* Content */}
                    <div className="w-1/2 px-6 cursor-pointer transform transition-transform duration-200 hover:scale-105">
                      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-indigo-700">
                          {event.date}
                        </h3>
                        <p className="mt-2 text-gray-300">{event.text}</p>
                      </div>
                    </div>

                    {/* Connector */}
                    <motion.div
                      {...{
                        className:
                          "relative w-10 h-10 bg-indigo-700 rounded-full flex items-center justify-center shadow-lg",
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="w-6 h-6 bg-gray-900 rounded-full"></div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white/85 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            {...{
              className: "text-black text-3xl font-bold mb-16 text-center",
            }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-black cursor-pointer transform transition-transform duration-200 hover:scale-105">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6 }}
                {...{
                  className: "bg-white p-6 rounded-md h-[300px]",
                }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Innovation
                </h3>
                <p className="text-center">
                  We strive to stay ahead of the curve by adopting the latest
                  technologies and methods. This commitment to innovation
                  enables us to develop creative solutions that propel our
                  progress and deliver value to our stakeholders.
                </p>
              </motion.div>
            </div>
            <div className="text-black cursor-pointer transform transition-transform duration-200 hover:scale-105">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6 }}
                {...{
                  className: "bg-white p-6 rounded-md h-[300px]",
                }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Customer Focus
                </h3>
                <p className="text-center">
                  Our customers are at the core of everything we do. We aim to
                  exceed expectations by understanding their needs, providing
                  exceptional service, and building lasting relationships
                  through trust and reliability.
                </p>
              </motion.div>
            </div>
            <div className="text-black cursor-pointer transform transition-transform duration-200 hover:scale-105">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6 }}
                {...{
                  className: "bg-white p-6 rounded-md h-[300px]",
                }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Sustainability
                </h3>
                <p className="text-center">
                  We are dedicated to preserving the environment by implementing
                  eco-friendly practices and minimizing our ecological
                  footprint. Sustainability guides our decisions to ensure a
                  better future for generations to come.
                </p>
              </motion.div>
            </div>
            <div className="text-black cursor-pointer transform transition-transform duration-200 hover:scale-105">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6 }}
                {...{
                  className: "bg-white p-6 rounded-md h-[300px]",
                }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Teamwork
                </h3>
                <p className="text-center">
                  Our strength lies in our people. By fostering collaboration,
                  mutual respect, and transparent communication, we create an
                  inclusive environment where diverse ideas thrive, driving our
                  success together.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones Section */}
      <section className="py-1">
        <div className="bg-gradient-to-b from-gray-900 to-blue-800 text-white py-16 px-8">
          <div className="max-w-4xl mx-auto">
            {/* Vision Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              {...{
                className: "mb-16",
              }}
            >
              <h2 className="text-3xl font-bold text-orange-500 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 text-justify">
                To be the industry leader in Sri Lanka by 2030, for technology
                innovations, networking, and ICT system integration, that helps
                to enhance the living style of our people.
              </p>
            </motion.div>

            {/* Mission Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-orange-500 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 text-justify">
                To be at the forefront of Information and Communication
                Technology, by empowering people, business, and society with
                cutting-edge technology solutions that are innovative and
                creative.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Highlights Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            {...{
              className: "text-3xl font-bold mb-20 text-center",
            }}
          >
            Company Highlights
          </motion.h2>
          <Stats />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-blue-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            © 2024 Aventa Holdings (Pvt) Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OurJourney;
