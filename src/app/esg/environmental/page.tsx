"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Droplets, Wind, Sun, Trees, Recycle } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer-section";

const EnvironmentalVideo = dynamic(
  () => import("@/components/environmental-video"),
  { ssr: false }
);

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const EnvironmentalPage = () => {
  const initiatives = [
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Carbon Footprint Reduction",
      description:
        "Our commitment to reduce carbon emissions through innovative technology solutions and sustainable practices.",
      stats: "30% reduction in 2024",
      videoUrl: "/videos/carbon-reduction.mp4",
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      title: "Water Conservation",
      description:
        "Implementation of water-saving technologies and responsible consumption practices.",
      stats: "2M gallons saved annually",
      videoUrl: "/videos/water-conservation.mp4",
    },
    {
      icon: <Wind className="w-8 h-8 text-teal-500" />,
      title: "Clean Energy Transition",
      description:
        "Investing in renewable energy sources and promoting sustainable power solutions.",
      stats: "50% renewable energy usage",
      videoUrl: "/videos/clean-energy.mp4",
    },
    {
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      title: "Solar Infrastructure",
      description:
        "Deployment of solar panels and sustainable energy infrastructure.",
      stats: "1.5MW generated daily",
      videoUrl: "/videos/solar-infrastructure.mp4",
    },
    {
      icon: <Recycle className="w-8 h-8 text-green-700" />,
      title: "Recycling Programs",
      description:
        "Innovative recycling programs to reduce waste and promote circular economies.",
      stats: "5K tons recycled annually",
      videoUrl: "/videos/recycling-programs.mp4",
    },
    {
      icon: <Trees className="w-8 h-8 text-emerald-500" />,
      title: "Afforestation Efforts",
      description:
        "Large-scale tree-planting initiatives to restore ecosystems and combat climate change.",
      stats: "100K trees planted annually",
      videoUrl: "/videos/afforestation.mp4",
    },
  ];

  return (
    <div>
      <NavBar/>
      <div className="min-h-screen bg-blue-50 dark:bg-neutral-900 p-8 xl:pt-32 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <motion.h1
              variants={fadeInUp}
              className="xl:text-6xl text-4xl font-bold bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text mb-4"
            >
              Environmental Initiatives
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Our commitment to environmental sustainability through innovative
              technology solutions and responsible business practices.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {initiatives.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="shadow-lg h-full flex flex-col dark:hover:shadow-blue-lg">
                  <CardContent className="p-6 flex-grow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-white dark:bg-gray-950 p-3 rounded-lg shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                        <div className="inline-block bg-blue-100 px-4 py-2 rounded-full">
                          <span className="text-[#2056aeff] font-medium">
                            {item.stats}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <div className="p-4">
                    <EnvironmentalVideo url={item.videoUrl} />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-8 mb-12 dark:border dark:border-gray-800 dark:hover:shadow-blue-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-400 mb-6">
              Environmental Impact Overview
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#2056aeff] mb-2">
                  75%
                </div>
                <p className="text-gray-600">Waste Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#2056aeff] mb-2">
                  100%
                </div>
                <p className="text-gray-600">Renewable Energy</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#2056aeff] mb-2">
                  50K
                </div>
                <p className="text-gray-600">Trees Planted</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="relative rounded-xl overflow-hidden shadow-xl dark:hover:shadow-blue-lg"
          >
            <EnvironmentalVideo url="/videos/environmental-overview.mp4" />
          </motion.div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EnvironmentalPage;
