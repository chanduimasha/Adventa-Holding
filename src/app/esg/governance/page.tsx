"use client";
import React from "react";
import { Shield, Scale, FileText, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import NavBar from "@/components/nav-bar";
import FooterNew from "@/components/footer";

const GovernanceVideo = dynamic(() => import("@/components/governance-video"), {
  ssr: false,
});

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const GovernancePage = () => {
  const governancePillars = [
    {
      title: "Corporate Ethics",
      description:
        "Maintaining the highest standards of business ethics and corporate integrity.",
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      metric: "100% compliance",
      videoUrl: "/videos/corporate-ethics.mp4",
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk assessment and management frameworks.",
      icon: <Scale className="w-6 h-6 text-blue-600" />,
      metric: "ISO 27001 certified",
      videoUrl: "/videos/risk-management.mp4",
    },
    {
      title: "Transparency",
      description: "Regular reporting and stakeholder communication.",
      icon: <FileText className="w-6 h-6 text-teal-600" />,
      metric: "Quarterly reports",
      videoUrl: "/videos/transparency.mp4",
    },
  ];

  return (
    <div>
      <NavBar/>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-8 xl:pt-32 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Corporate Governance
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Ensuring transparent, ethical, and responsible business practices.
            </motion.p>
          </motion.div>

          {/* Governance Pillars Section */}
          <motion.div
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {governancePillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      {pillar.icon}
                      <ArrowUpRight className="w-5 h-5 text-gray-400" />
                    </div>
                    <CardTitle className="mt-4 text-lg font-semibold">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{pillar.description}</p>
                    <div className="text-2xl font-bold text-orange-500 mb-4">
                      {pillar.metric}
                    </div>
                    <GovernanceVideo url={pillar.videoUrl} />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Governance Framework Section */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="bg-white rounded-2xl p-8 shadow-xl mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Governance Framework</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeIn} className="space-y-4">
                <h3 className="text-xl font-semibold">Board Structure</h3>
                <p className="text-gray-600">
                  Our board comprises diverse, experienced professionals
                  ensuring effective oversight and strategic guidance. Regular
                  board meetings and committee reviews maintain strong corporate
                  governance.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="space-y-4">
                <h3 className="text-xl font-semibold">Policies & Procedures</h3>
                <p className="text-gray-600">
                  Comprehensive policies covering ethics, risk management, and
                  compliance ensure responsible business practices across all
                  operations.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Commitment Section */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="bg-white text-black rounded-2xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">Our Commitment</h2>
            <p className="text-black">
              We are committed to maintaining the highest standards of corporate
              governance, ensuring sustainable growth while protecting
              stakeholder interests through transparent and ethical business
              practices.
            </p>
            <div className="mt-6">
              <GovernanceVideo url="/videos/governance-commitment.mp4" />
            </div>
          </motion.div>
        </div>
      </div>
      <FooterNew/>
    </div>
  );
};

export default GovernancePage;
