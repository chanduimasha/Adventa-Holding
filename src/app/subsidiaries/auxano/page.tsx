"use client";
"use client";
import {
  ArrowRight,
  Server,
  Globe,
  Shield,
  Activity,
  Users,
  CheckCircle,
  HeadphonesIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";
import FeedbackSection from "@/components/feedback-section";
import ContactUsForm from "@/components/contact-us-form";
import NavBar from "@/components/nav-bar";
import FooterNew from "@/components/footer";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Server className="w-8 h-8" />,
    title: "Network Infrastructure",
    description:
      "Enterprise-grade networking solutions built for maximum reliability and performance.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Connectivity",
    description:
      "Seamless worldwide network integration with cutting-edge technology.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Network Security",
    description:
      "Advanced security protocols and monitoring to protect your digital assets.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "24/7 Support",
    description:
      "Round-the-clock expert technical support and network maintenance.",
  },
];

// const testimonials = [
//   {
//     name: "Sarah Chen",
//     position: "CTO, TechCorp",
//     content:
//       "Auxano transformed our network infrastructure, delivering unprecedented performance and reliability.",
//   },
//   {
//     name: "Michael Perera",
//     position: "IT Director, Global Solutions",
//     content:
//       "Their expertise in network security and support has been invaluable to our operations.",
//   },
// ];

interface StatProps {
  endValue: number;
  suffix?: string;
  label: string;
  icon: JSX.Element;
}

const StatCounter = ({ endValue, suffix = "", label, icon }: StatProps) => {
  const [count, setCount] = useState(0);
  // const controls = useAnimation();

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep += 1;
      const progress = currentStep / steps;
      const currentCount = Math.floor(progress * endValue);

      setCount(currentCount);

      if (currentStep === steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [endValue]);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-blue-500/20 rounded-2xl"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ opacity: 0.1 }}
      />

      <div className="flex flex-col items-center space-y-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-blue-200 mb-2"
        >
          {icon}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl font-bold text-white tracking-tight"
        >
          {count}
          {suffix}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-blue-100 font-medium text-lg"
        >
          {label}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function AuxanoPage() {
  const stats = [
    { value: 500, suffix: "+", label: "Clients", icon: <Users size={32} /> },
    {
      value: 1000,
      suffix: "+",
      label: "Projects",
      icon: <Activity size={32} />,
    },
    {
      value: 99.9,
      suffix: "%",
      label: "Uptime",
      icon: <CheckCircle size={32} />,
    },
    {
      value: 24,
      suffix: "/7",
      label: "Support",
      icon: <HeadphonesIcon size={32} />,
    },
  ];
  return (
    <div>
      <NavBar/>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="/assets/blogs/11.jpg"
              alt="Network Infrastructure"
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              Auxano Networks
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 mb-8"
            >
              Empowering Sri Lanka is Digital Future
            </motion.p>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-[#2056aeff] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center mx-auto"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </motion.section>

        {/* Services Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive networking solutions for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="relative bg-gradient-to-br from-[#2056aeff] to-blue-500 py-24 overflow-hidden">
          {/* Background animated circles */}
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ filter: "blur(100px)", opacity: 0.2 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ filter: "blur(100px)", opacity: 0.2 }}
          />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatCounter
                  key={index}
                  endValue={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  icon={stat.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <FeedbackSection />

        {/* Contact Section */}
        <ContactUsForm />
      </div>
      <FooterNew/>
    </div>
  );
}
