"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, GraduationCap, Globe } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import NavBar from "@/components/nav-bar";
import FooterNew from "@/components/footer";

const SocialVideo = dynamic(() => import("@/components/social-video"), {
  ssr: false,
});

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const SocialPage = () => {
  const initiatives = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Workforce Diversity",
      description:
        "Promoting inclusive hiring practices and fostering a diverse workplace culture.",
      progress: 85,
      videoUrl: "/videos/workforce-diversity.mp4",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Community Engagement",
      description:
        "Supporting local communities through technology education and resources.",
      progress: 92,
      videoUrl: "/videos/community-engagement.mp4",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-500" />,
      title: "Educational Programs",
      description:
        "Providing technology training and development opportunities.",
      progress: 78,
      videoUrl: "/videos/educational-programs.mp4",
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-500" />,
      title: "Global Partnerships",
      description:
        "Collaborating with organizations worldwide to drive social impact.",
      progress: 88,
      videoUrl: "/videos/global-partnerships.mp4",
    },
  ];

  return (
    <div>
      <NavBar/>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8 xl:pt-32 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <motion.h1
              variants={fadeInUp}
              className="xl:text-5xl text-4xl font-bold text-gray-900 mb-4"
            >
              Social Responsibility
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Creating positive social impact through inclusive practices,
              community engagement, and sustainable partnerships.
            </motion.p>
          </motion.div>

          {/* Initiatives Section */}
          <motion.div
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
          >
            {initiatives.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Card className="shadow-lg h-full flex flex-col">
                  <CardContent className="p-6 flex-grow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div
                            className="bg-[#2056aeff] h-2 rounded-full"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">
                          Progress: {item.progress}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <div className="p-4">
                    <SocialVideo url={item.videoUrl} />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-8 mb-12"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Impact Statistics
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Employee Satisfaction</span>
                    <span className="text-[#2056aeff] font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#2056aeff] h-2 rounded-full"
                      style={{ width: "92%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Community Programs</span>
                    <span className="text-[#2056aeff] font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#2056aeff] h-2 rounded-full"
                      style={{ width: "85%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Training Hours</span>
                    <span className="text-[#2056aeff] font-medium">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#2056aeff] h-2 rounded-full"
                      style={{ width: "78%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Key Achievements
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">10,000+</h3>
                    <p className="text-gray-600">Employees Trained</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">50+</h3>
                    <p className="text-gray-600">Community Partners</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">25+</h3>
                    <p className="text-gray-600">Educational Programs</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Overview Section */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="relative rounded-xl overflow-hidden shadow-xl"
          >
            <SocialVideo url="/videos/social-impact-overview.mp4" />
          </motion.div>
        </div>
      </div>
      <FooterNew/>
    </div>
  );
};

export default SocialPage;
