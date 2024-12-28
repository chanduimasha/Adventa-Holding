"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Globe,
  Shield,
  Users,
  ChevronRight,
  Activity,
  Users2,
  Clock,
  Gauge,
} from "lucide-react";
import TestimonialSection from "@/components/testimonial-section";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer-section";

const stats = [
  {
    value: "500+",
    label: "Clients Served",
    icon: Users2,
    description: "Trusted by businesses across Sri Lanka",
    color: "from-blue-400 to-blue-600 dark:from-blue-700 dark:to-blue-950",
  },
  {
    value: "15+",
    label: "Years Experience",
    icon: Clock,
    description: "Industry expertise since 2009",
    color: "from-indigo-400 to-indigo-600 dark:from-indigo-700 dark:to-indigo-950",
  },
  {
    value: "24/7",
    label: "Support",
    icon: Activity,
    description: "Round-the-clock technical assistance",
    color: "from-purple-400 to-purple-600 dark:from-purple-700 dark:to-purple-950",
  },
  {
    value: "99.9%",
    label: "Uptime",
    icon: Gauge,
    description: "Guaranteed network reliability",
    color: "from-violet-400 to-violet-600 dark:from-violet-700 dark:to-violet-950",
  },
];

const services = [
  {
    title: "Network Infrastructure",
    description:
      "Enterprise-grade networking solutions with cutting-edge technology for optimal performance.",
    icon: Server,
  },
  {
    title: "Security Solutions",
    description:
      "Comprehensive security systems to protect your valuable data and network assets.",
    icon: Shield,
  },
  {
    title: "Global Connectivity",
    description:
      "Seamless connectivity solutions connecting businesses across Sri Lanka and beyond.",
    icon: Globe,
  },
  {
    title: "Managed Services",
    description:
      "24/7 network monitoring and management by our expert team of professionals.",
    icon: Users,
  },
];

// const testimonials = [
//   {
//     name: "John Smith",
//     company: "Tech Solutions Ltd",
//     text: "NetworkStore.lk transformed our infrastructure with their excellent service and expertise.",
//   },
//   {
//     name: "Sarah Chen",
//     company: "Global Systems",
//     text: "Outstanding support and cutting-edge solutions that helped scale our operations.",
//   },
// ];

const NetworkStorePage = () => {
  return (
    <div>
      <NavBar/>
      <div className="min-h-screen bg-blue-50 dark:bg-neutral-900 pt-4">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[80vh] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="/assets/blogs/10.jpg"
              alt="Network infrastructure"
              className="w-full h-full object-cover object-center"
            />
            {/* <div className="absolute inset-0 bg-black/50" /> */}
          </div>

          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              NetworkStore.lk
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
            >
              Empowering Sri Lanka is Digital Infrastructure
            </motion.p>
          </div>
        </motion.section>

        {/* Services Section */}
        <section className="py-20 px-4 md:px-8 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-gray-200"
            >
              Our Services
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-xl hover:shadow-xl transition-shadow dark:border dark:border-gray-800 dark:hover:shadow-blue-lg"
                >
                  <service.icon className="w-12 h-12 text-blue-600 mb-4 transform transition-transform duration-300 hover:scale-105" />
                  <h3 className="text-xl font-semibold mb-3 dark:text-gray-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4 bg-indigo-950 dark:bg-neutral-900 relative overflow-hidden"
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
          </div>

          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
            >
              Our Impact in Numbers
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div
                    className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 h-full transform transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20`}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <stat.icon className="w-12 h-12 text-white/90" />
                    </div>
                    <motion.div
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                        delay: index * 0.2 + 0.3,
                      }}
                      className="text-center"
                    >
                      <h4 className="text-5xl font-bold mb-2 text-white tracking-tight">
                        {stat.value}
                      </h4>
                      <p className="text-xl font-semibold text-white/90 mb-2">
                        {stat.label}
                      </p>
                      <p className="text-sm text-white/80">
                        {stat.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <TestimonialSection />
       
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-blue-950 dark:bg-neutral-900 text-white py-16 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Network?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us today for a free consultation and discover how we can
              enhance your digital infrastructure.
            </p>
            <button className="bg-[#2056aeff] hover:bg-[#50ade5ff] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto transition-colors">
              Get Started
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.section>

      </div>
      <Footer/>
    </div>
  );
};

export default NetworkStorePage;
