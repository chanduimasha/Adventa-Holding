import React from "react";
import Social from "@/components/social-media";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <motion.section
      className="min-h-screen bg-no-repeat bg-cover bg-center relative pt-[80px] shadow-md"
      // style={{ backgroundImage: "url('/assets/back4.jpg')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-zinc-300 opacity-50"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-black relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="relative"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <Image
              src="/assets/back14.png"
              alt="Cyborg"
              className="object-cover rounded-full animate-[spin_20s_linear_infinite] xl:mt-12 mt-0"
              width={400}
              height={400}
            />
          </motion.div>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.2,
                type: "spring",
                stiffness: 120,
                damping: 10,
              }}
            >
              Delivering Superior Services
            </motion.h1>
            <motion.p
              className="text-4xl mb-4 text-orange-600 text-semibold"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.4,
                type: "spring",
                stiffness: 200,
              }}
            >
              IT Solutions.
            </motion.p>
            <motion.p
              className="text-lg mb-8"
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
                type: "spring",
                stiffness: 100,
              }}
            >
              You can easily change any design to your own. It is also highly
              customizable SEO friendly template.
            </motion.p>
            <motion.div
              className="mt-12 mb-2 xl:mb-2"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.8,
                type: "spring",
                stiffness: 120,
                damping: 10,
              }}
            >
              <Social
                containerStyles="flex gap-10 mb-10"
                iconStyles="xl:w-[40px] xl:h-[40px] w-9 h-9 border border-orange-500 rounded-full flex justify-center items-center text-orange-500 text-base hover:bg-orange-800 hover:text-primary hover:transition-all duration-500"
              />
            </motion.div>
            <div className="flex space-x-4">
              <motion.a
                href="/contact"
                className="bg-orange-500 hover:bg-orange-800 text-white px-4 py-2 rounded"
                initial={{
                  x: -50,
                  rotate: -15,
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  rotate: 0,
                  scale: 1,
                  opacity: 1,
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
