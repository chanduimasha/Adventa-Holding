"use client";
import React from "react";
import { motion } from "framer-motion";


const JourneySection = () => {

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
  
  return (
    <section className="bg-gray-900 text-white pt-20">
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-4xl font-bold text-orange-500">Our Journey</h1>
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
            <div className="absolute w-1 bg-orange-500 left-1/2 transform -translate-x-1/2 h-full"></div>
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
                    <div className="bg-white p-6 shadow-lg border-b-2 border-orange-500">
                      <h3 className="text-xl font-semibold text-orange-500">
                        {event.date}
                      </h3>
                      <p className="mt-2 text-black">{event.text}</p>
                    </div>
                  </div>

                  {/* Connector */}
                  <motion.div
                    {...{
                      className:
                        "relative w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg",
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
  );
};

export default JourneySection;
