"use client";

import { useHeaderVisibility } from "@/components/header-visibility";
import Header from "@/components/navigation-bar";
import Social from "@/components/social-media";
import Stats from "@/components/stats-chart";
import TestimonialSection from "@/components/testimonial-section";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const isHeaderVisible = useHeaderVisibility();
  const router = useRouter();

  return (
    <div>
      <AnimatePresence>
        {isHeaderVisible && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-50"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <Header />
          </motion.div>
        )}
      </AnimatePresence>

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
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
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
              transition={{ delay: 0.8, duration: 1 }}
            >
              <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 1,
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
                  delay: 1.3,
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
                  delay: 1.6,
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
                  delay: 1.9,
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
                    delay: 2.2,
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

      {/* Sub Companies Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="py-16 pb-20 bg-indigo-950 shadow-md"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Our Sub Companies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                image: "/assets/1.jpg",
                title: "NetworkStore.lk",
                content:
                  "A leading online platform that offers a wide range of electronic products, including computers, smartphones, and accessories, with fast delivery services.",
                link: "/subsidiaries/networkstore",
              },
              {
                image: "/assets/2.jpg",
                title: "Auxano",
                content:
                  "A technology solutions provider specializing in IT consulting, software development, and digital transformation services.",
                link: "/subsidiaries/auxano",
              },
              {
                image: "/assets/3.jpg",
                title: "Eco Lanka",
                content:
                  "A company focused on providing eco-friendly products and sustainable solutions to promote environmental conservation.",
                link: "/subsidiaries/ecolanka",
              },
              {
                image: "/assets/4.jpg",
                title: "Saroda",
                content:
                  "A company specializing in providing a wide range of products and services, focusing on innovation and customer satisfaction.",
                link: "/subsidiaries/saroda",
              },
            ].map((company, index) => (
              <motion.div
                key={company.title}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                {/* Image Section */}
                <Image
                  src={company.image}
                  alt={company.title}
                  width={500}
                  height={300}
                  className="w-full h-60 object-cover"
                />
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-orange-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <h3 className="text-lg font-bold text-white mb-2">
                    {company.title}
                  </h3> */}
                  <p className="text-sm text-white text-center mb-4 px-4">
                    {company.content}
                  </p>
                  {/* Navigation Button */}
                  <button
                    onClick={() => router.push(company.link)} // Dynamically use the company's link
                    className="flex items-center gap-2 bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 hover:text-white transition-all duration-300 shadow-md"
                  >
                    <span>{company.title}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 12H6.75m10.5 0-3.75 3.75M17.25 12l-3.75-3.75"
                      />
                    </svg>
                  </button>
                </div>
                {/* Title Section */}
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-orange-600">
                    {company.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Feedback Section */}
      <motion.section>
      <TestimonialSection />
      </motion.section>

      {/* Company Highlights Section */}
      <motion.section className="py-20 bg-indigo-950">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            {...{
              className: "text-3xl font-bold mb-20 text-center text-white",
            }}
          >
            Company Highlights
          </motion.h2>
          <Stats />
        </div>
      </motion.section>
    </div>
  );
}
