"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Users2,
  Target,
  Award,
  ArrowUpRight,
} from "lucide-react";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer-section";

const SarodaPage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div>
      <NavBar/>
      <div className="bg-white dark:bg-neutral-900">
        {/* Hero Section with Header Image */}
        <section className="relative min-h-screen">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/blogs/14.jpeg"
              alt="Saroda Company Header"
              className="w-full h-full object-cover "
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60"></div> */}
          </div>

          {/* Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="text-blue-400 font-medium tracking-wider text-sm">
                ESTABLISHED 2010
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8"
            >
              Saroda
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed"
            >
              Saroda empowers businesses through innovative technology
              solutions, delivering excellence in software development and
              digital transformation.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex items-center space-x-6"
            >
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-colors backdrop-blur-sm">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          >
            <ArrowRight className="text-white w-6 h-6 rotate-90" />
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="relative py-32 bg-blue-200 dark:bg-neutral-900 overflow-hidden">
          {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]"></div> */}
          {/* Decorative Elements */}
          {/* <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div> */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "12+",
                  label: "Years Experience",
                  icon: Building2,
                  description: "Leading innovation",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  number: "200+",
                  label: "Team Members",
                  icon: Users2,
                  description: "Talented professionals",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  number: "500+",
                  label: "Projects Completed",
                  icon: Target,
                  description: "Delivering excellence globally",
                  color: "from-pink-500 to-pink-600",
                },
                {
                  number: "98%",
                  label: "Client Satisfaction",
                  icon: Award,
                  description: "Committed to quality service",
                  color: "from-indigo-500 to-indigo-600",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.1,
                      },
                    },
                  }}
                  className="relative group"
                >
                  <div className="bg-white dark:bg-gray-950 dark:border dark:border-gray-800 dark:hover:shadow-blue-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl p-[2px]">
                      <div className="bg-white dark:bg-gray-900 w-full h-full rounded-2xl"></div>
                    </div>

                    <div className="relative">
                      {/* Icon with gradient background */}
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${stat.color}`}
                      >
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Counter Animation */}
                      <motion.h3
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-5xl font-bold bg-clip-text text-transparent bg-gray-900 dark:bg-gray-200"
                      >
                        {stat.number}
                      </motion.h3>

                      <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-400 mb-2">
                        {stat.label}
                      </h4>

                      <p className="text-gray-600 dark:text-gray-500 leading-relaxed">
                        {stat.description}
                      </p>

                      {/* Decorative line */}
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Add keyframes for blob animation */}
          <style jsx>{`
            @keyframes blob {
              0% {
                transform: translate(0px, 0px) scale(1);
              }
              33% {
                transform: translate(30px, -50px) scale(1.1);
              }
              66% {
                transform: translate(-20px, 20px) scale(0.9);
              }
              100% {
                transform: translate(0px, 0px) scale(1);
              }
            }
            .animate-blob {
              animation: blob 7s infinite;
            }
            .animation-delay-2000 {
              animation-delay: 2s;
            }
            .animation-delay-4000 {
              animation-delay: 4s;
            }
          `}</style>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-gray-50 dark:bg-neutral-900">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200 mb-4">
                Our Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Comprehensive solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Software Development",
                  description:
                    "Custom software solutions built with cutting-edge technologies to drive your business forward.",
                  imagePath: "/assets/saroda/1.jpg",
                  imageAlt:
                    "Modern software development workspace with multiple screens showing code",
                },
                {
                  title: "Cloud Solutions",
                  description:
                    "Scalable cloud infrastructure and services to optimize your business operations.",
                  imagePath: "/assets/saroda/2.jpg",
                  imageAlt: "Cloud computing infrastructure visualization",
                },
                {
                  title: "Digital Transformation",
                  description:
                    "End-to-end digital transformation strategies to revolutionize your business processes.",
                  imagePath: "/assets/saroda/3.jpeg",
                  imageAlt:
                    "Digital transformation concept with connected devices",
                },
                {
                  title: "AI & Machine Learning",
                  description:
                    "Advanced AI solutions to automate processes and gain valuable insights from your data.",
                  imagePath: "/assets/saroda/4.jpg",
                  imageAlt:
                    "AI and machine learning visualization with neural networks",
                },
                {
                  title: "Mobile Applications",
                  description:
                    "Native and cross-platform mobile applications that deliver exceptional user experiences.",
                  imagePath: "/assets/saroda/5.jpg",
                  imageAlt:
                    "Mobile app development showcase on multiple devices",
                },
                {
                  title: "IT Consulting",
                  description:
                    "Strategic IT consulting to align technology with your business objectives.",
                  imagePath: "/assets/saroda/6.jpg",
                  imageAlt:
                    "IT consultants in a modern meeting room discussing strategy",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={scaleUp}
                  className="bg-white dark:bg-gray-950 dark:hover:shadow-blue-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.imagePath}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Featured Work */}
        <section className="py-24 bg-white dark:bg-neutral-900">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200 mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Showcasing our best work and innovations
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {[1, 2].map((project) => (
                <div
                  key={project}
                  className="relative group overflow-hidden rounded-2xl dark:hover:shadow-blue-lg"
                >
                  <img
                    src={`/assets/blogs/11.jpg`}
                    alt={`Project ${project}`}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Project Title {project}
                    </h3>
                    <p className="text-gray-200 mb-4">
                      Brief project description showcasing the key achievements
                      and technologies used.
                    </p>
                    <button className="flex items-center text-white font-medium">
                      View Case Study
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-blue-950 dark:bg-neutral-900 text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Let us discuss how we can help you achieve your digital
              transformation goals.
            </motion.p>
            <motion.button
              variants={fadeInUp}
              className="bg-[#2056aeff] text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors inline-flex items-center group"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default SarodaPage;
