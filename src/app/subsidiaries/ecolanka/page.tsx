"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Network,
  Users,
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import NavBar from "@/components/nav-bar";
import FooterNew from "@/components/footer";

const EcoLankaPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div>
      <NavBar/>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/assets/blogs/12.jpg"
              alt="Network Background"
              className="w-full h-full object-cover opacity-100"
            />
          </div>

          <motion.div
            className="container mx-auto px-4 text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent text-white">
              Eco Lanka
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Pioneering Sustainable Networking Solutions for a Connected Future
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </section>

        {/* Services Section */}
        <motion.section
          className="py-20 bg-gray-200"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              variants={fadeInUp}
            >
              Our Services
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Network className="w-12 h-12 text-blue-600" />,
                  title: "Network Solutions",
                  description:
                    "Enterprise-grade networking infrastructure designed for reliability and performance",
                },
                {
                  icon: <Users className="w-12 h-12 text-blue-600" />,
                  title: "IT Consulting",
                  description:
                    "Expert guidance to optimize your technology infrastructure",
                },
                {
                  icon: <Globe className="w-12 h-12 text-blue-600" />,
                  title: "Cloud Services",
                  description:
                    "Seamless cloud integration and management solutions",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow shadow-2xl"
                  variants={fadeInUp}
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/assets/blogs/13.jpg"
                  alt="About Eco Lanka"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6">About Us</h2>
                <p className="text-gray-600 mb-6">
                  At Eco Lanka, we are committed to delivering innovative
                  networking solutions while maintaining our commitment to
                  environmental sustainability. Our expertise spans across
                  various industries, providing cutting-edge technology
                  solutions.
                </p>
                <ul className="space-y-4">
                  {[
                    "15+ years of industry experience",
                    "500+ successful projects delivered",
                    "24/7 technical support",
                    "ISO certified solutions",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-200">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                Get in Touch
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">contact@ecolanka.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+94 11 2345678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">
                        123 Main Street, Colombo, Sri Lanka
                      </p>
                    </div>
                  </div>
                </div>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <FooterNew/>
    </div>
  );
};

export default EcoLankaPage;
