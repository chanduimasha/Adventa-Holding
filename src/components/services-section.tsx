import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Aventa Consulting",
    image: "/assets/services/1.png",
    details: [
      {
        label: "Innovation Strategy",
        link: "/innovation-strategy",
      },
      {
        label: "Experience Transformation",
        link: "/experience-transformation",
      },
      {
        label: "Next-Gen Business Transformation",
        link: "/business-transformation",
      },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    image: "/assets/services/2.jpg",
    details: [
      {
        label: "Innovation Strategy",
        link: "/innovation-strategy",
      },
      {
        label: "Experience Transformation",
        link: "/experience-transformation",
      },
      {
        label: "Next-Gen Business Transformation",
        link: "/business-transformation",
      },
    ],
  },
  {
    title: "Software Product Engineering",
    image: "/assets/services/3.png",
    details: [
      {
        label: "Innovation Strategy",
        link: "/innovation-strategy",
      },
      {
        label: "Experience Transformation",
        link: "/experience-transformation",
      },
      {
        label: "Next-Gen Business Transformation",
        link: "/business-transformation",
      },
    ],
  },
  {
    title: "CX Transformation",
    image: "/assets/services/4.png",
    details: [
      {
        label: "Innovation Strategy",
        link: "/innovation-strategy",
      },
      {
        label: "Experience Transformation",
        link: "/experience-transformation",
      },
      {
        label: "Next-Gen Business Transformation",
        link: "/business-transformation",
      },
    ],
  },
  {
    title: "Intelligent Automation",
    image: "/assets/services/5.jpg",
    details: [
      {
        label: "Innovation Strategy",
        link: "/innovation-strategy",
      },
      {
        label: "Experience Transformation",
        link: "/experience-transformation",
      },
      {
        label: "Next-Gen Business Transformation",
        link: "/business-transformation",
      },
    ],
  },
  {
    title: "Enterprise IT Security",
    image: "/assets/services/6.jpg",
    details: [
      {
        label: "Innovation Strategy",
        link: "/innovation-strategy",
      },
      {
        label: "Experience Transformation",
        link: "/experience-transformation",
      },
      {
        label: "Next-Gen Business Transformation",
        link: "/business-transformation",
      },
    ],
  },
  {
    title: "Data & Analytics",
    image: "/assets/services/7.jpg",
    details: [
      {
        label: "Innovation Strategy",
        link: "/innovation-strategy",
      },
      {
        label: "Experience Transformation",
        link: "/experience-transformation",
      },
      {
        label: "Next-Gen Business Transformation",
        link: "/business-transformation",
      },
    ],
  },
  {
    title: "Application Development & Management",
    image: "/assets/services/8.png",
    details: [
      {
        label: "Innovation Strategy",
        link: "/innovation-strategy",
      },
      {
        label: "Experience Transformation",
        link: "/experience-transformation",
      },
      {
        label: "Next-Gen Business Transformation",
        link: "/business-transformation",
      },
    ],
  },
  {
    title: "Enterprise Integration",
    image: "/assets/services/9.png",
    details: [
      {
        label: "Innovation Strategy",
        link: "/innovation-strategy",
      },
      {
        label: "Experience Transformation",
        link: "/experience-transformation",
      },
      {
        label: "Next-Gen Business Transformation",
        link: "/business-transformation",
      },
    ],
  },
];

export default function ServiceSection() {
  return (
    <div className="bg-slate-900 text-black py-16 shadow-md relative">
      <div className="max-w-5xl mx-auto">
        {/* Main Title */}
        <motion.h2
          className="text-center text-3xl xl:text-5xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-center max-w-5xl text-lg mx-auto mb-16 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Delivering domain expertise and technology-driven offerings to help
          you turn digital challenges into opportunities.
        </motion.p>

        {/* Cards Section */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10 xl:px-4 px-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group bg-white shadow-lg p-6 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Left: Title */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              </div>

              {/* Right: Image */}
              <div className="w-1/3 h-24 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Hover Card */}
              {service.details && (
                <motion.div
                  className="absolute top-[-20px] left-0 w-full bg-orange-300 p-6 flex flex-col gap-4 items-start opacity-0 group-hover:opacity-100 group-hover:translate-y-[-110%] transition-all duration-300 shadow-lg z-20"
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <h4 className="text-lg font-bold mb-2 text-black">
                    {service.title}
                  </h4>
                  {service.details.map((detail, idx) => (
                    <Link
                      key={idx}
                      href={detail.link}
                      passHref
                      className="text-sm text-black hover:underline hover:text-orange-700"
                    >
                      {detail.label} →
                    </Link>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}