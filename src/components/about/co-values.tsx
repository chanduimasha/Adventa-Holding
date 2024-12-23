"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CoValues = () => {
  return (
    <section className="bg-zinc-200 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          {...{
            className:
              "text-black xl:text-5xl text-3xl font-bold mb-16 text-center",
          }}
        >
          Our <span className="text-[#2056aeff]">Core</span> Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-black cursor-pointer transform transition-transform duration-200 hover:scale-105">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6 }}
              className="bg-white p-6 h-[300px] flex flex-col items-center shadow-xl"
            >
              <Image
                src="/assets/covalues/1.png" // Replace with your image path
                alt="Hero Image"
                width={50} // Adjust size to match your design
                height={50}
                className="rounded-lg pb-2 mt-0"
              />
              <h3 className="text-2xl font-bold mb-6 text-center">
                Innovation
              </h3>
              <p className="text-center">
                We strive to stay ahead of the curve by adopting the latest
                technologies and methods. This commitment to innovation enables
                us to develop creative solutions that propel our progress and
                deliver value to our stakeholders.
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
                className:
                  "bg-white p-6 h-[300px] flex flex-col items-center shadow-xl",
              }}
            >
              <Image
                src="/assets/covalues/2.png" // Replace with your image path
                alt="Hero Image"
                width={45} // Adjust size to match your design
                height={45}
                className="rounded-lg pb-2"
              />
              <h3 className="text-2xl font-bold mb-6 text-center">
                Customer Focus
              </h3>
              <p className="text-center">
                Our customers are at the core of everything we do. We aim to
                exceed expectations by understanding their needs, providing
                exceptional service, and building lasting relationships through
                trust and reliability.
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
                className:
                  "bg-white p-6 h-[300px] flex flex-col items-center shadow-xl",
              }}
            >
              <Image
                src="/assets/covalues/3.png" // Replace with your image path
                alt="Hero Image"
                width={65} // Adjust size to match your design
                height={65}
                className="rounded-lg pb-2"
              />
              <h3 className="text-2xl font-bold mb-6 text-center">
                Sustainability
              </h3>
              <p className="text-center">
                We are dedicated to preserving the environment by implementing
                eco-friendly practices and minimizing our ecological footprint.
                Sustainability guides our decisions to ensure a better future
                for generations to come.
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
                className:
                  "bg-white p-6 h-[300px] flex flex-col items-center shadow-xl",
              }}
            >
              <Image
                src="/assets/covalues/4.png" // Replace with your image path
                alt="Hero Image"
                width={60} // Adjust size to match your design
                height={60}
                className="rounded-lg pb-0"
              />
              <h3 className="text-2xl font-bold mb-6 text-center">Teamwork</h3>
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
  );
};

export default CoValues;
