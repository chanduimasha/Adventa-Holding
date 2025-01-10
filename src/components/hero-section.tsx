"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  // const [darkMode, setdarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setdarkMode(!darkMode);
  // }
  return (
    <div className="">
      <div className="relative bg-zinc-100 dark:bg-neutral-950 min-h-screen flex items-center justify-center shadow-md">
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left mb-10 md:mb-0 xl:order-none order-2 xl:mt-0 mt-[-10px] xl:ml-20">
            <motion.h1
              className="text-4xl xl:mt-0 mt-12 md:text-5xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-snug"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Sustainability <span className="text-[#2056aeff]"> &</span>
              <span className="xl:text-6xl text-3xl"> Technology</span> <br />
              {/* <p className="text-6xl mt-6 font-normal">Powering Infinite Possibilities</p> */}
            </motion.h1>
            <motion.p
              className="xl:text-3xl text-2xl text-[#2056aeff] mt-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Powering Infinite Possibilities
            </motion.p>
            <motion.a
              href="#"
              className="mt-6 inline-block bg-[#3871c1ff] text-white py-1 px-4 rounded-full font-semibold hover:bg-white hover:text-[#3871c1ff] hover:border-2 hover:border-[#3871c1ff] transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              Learn More
            </motion.a>
          </div>

          {/* Image Section */}
          <div className="relative flex-1">
            <motion.div
              className="group"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image
                src="/assets/logo/logo.webp" // Replace with your image path
                alt="Hero Image"
                width={500}
                height={500}
                className="rounded-lg mt-12 xl:mt-16 order-1 xl:order-none transform transition-transform duration-300 group-hover:scale-125
        w-80 h-80 xl:w-[600px] xl:h-[600px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* <button
        className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
        onClick={toggleDarkMode}
      >
        {darkMode ? "LHT" : "DRK"}
      </button> */}
    </div>
  );
}
