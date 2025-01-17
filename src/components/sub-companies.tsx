import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SubCompanies = () => {
  const router = useRouter();
  return (
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
  );
};

export default SubCompanies;
