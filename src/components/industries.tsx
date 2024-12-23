import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type SubCompany = {
  id: number;
  name: string;
  image: string;
  link: string;
  description: string;
};

type Industry = {
  id: number;
  name: string;
  subCompanies: SubCompany[];
};

const industries: Industry[] = [
  {
    id: 1,
    name: "Technology",
    subCompanies: [
      {
        id: 1,
        name: "TechCorp",
        image: "/assets/subcompanies/1.png",
        link: "/companies/techcorp",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia esse cupiditate tempore magnam cumque vero maxime veritatis? Recusandae optio!",
      },
      {
        id: 2,
        name: "Innovatech",
        image: "/assets/subcompanies/4.png",
        link: "/companies/innovatech",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia esse cupiditate tempore magnam cumque vero maxime veritatis? Recusandae optio!",
      },
    ],
  },
  {
    id: 2,
    name: "Manufacture",
    subCompanies: [
      {
        id: 3,
        name: "BuildIt",
        image: "/assets/subcompanies/3.png",
        link: "/companies/buildit",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia esse cupiditate tempore magnam cumque vero maxime veritatis? Recusandae optio!",
      },
      {
        id: 4,
        name: "Fabricators Inc.",
        image: "/assets/subcompanies/5.png",
        link: "/companies/fabricators",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia esse cupiditate tempore magnam cumque vero maxime veritatis? Recusandae optio!",
      },
    ],
  },
  {
    id: 3,
    name: "Real Estate",
    subCompanies: [
      {
        id: 5,
        name: "Urban Estates",
        image: "/assets/subcompanies/2.png",
        link: "/companies/urban-estates",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia esse cupiditate tempore magnam cumque vero maxime veritatis? Recusandae optio!",
      },
      {
        id: 6,
        name: "Dream Homes",
        image: "/assets/subcompanies/6.png",
        link: "/companies/dream-homes",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia esse cupiditate tempore magnam cumque vero maxime veritatis? Recusandae optio!",
      },
    ],
  },
];

const IndustriesSection: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<Industry>(industries[0]);
  const router = useRouter();

  const handleLearnMore = (companyLink: string) => {
    router.push(companyLink);
  };

  return (
    <section className="relative bg-zinc-200 py-16 shadow-md">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl xl:text-5xl font-bold text-zinc-900 tracking-tight"
          >
            Industries We Serve
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 h-1 w-20 bg-[#2056aeff] mx-auto"
          />
        </div>

        {/* Navigation and Content Container */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Industry Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-72"
          >
            <nav className="sticky top-8 space-y-1">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry)}
                  className={`
                      w-full group relative px-4 py-4 text-left transition-all duration-200
                      ${
                        activeIndustry.id === industry.id
                          ? "text-[#2056aeff] bg-white shadow-lg rounded-lg border border-blue-100"
                          : "text-zinc-600 hover:text-[#50ade5ff]"
                      }
                    `}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">{industry.name}</span>
                    <motion.div
                      animate={{
                        x: activeIndustry.id === industry.id ? 0 : -10,
                        opacity: activeIndustry.id === industry.id ? 1 : 0,
                      }}
                    >
                      <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-2" />
                    </motion.div>
                  </div>
                  {activeIndustry.id === industry.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-0 w-1 h-full bg-[#2056aeff] rounded-full"
                    />
                  )}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Company Cards Grid */}
          <div className="flex-1">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 gap-8"
            >
              {activeIndustry.subCompanies.map((company, index) => (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-lg border border-zinc-200 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {/* Clickable Card Container */}
                  <div
                    onClick={() => handleLearnMore(company.link)}
                    className="cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className="relative h-64 rounded-t-lg overflow-hidden">
                      <Image
                        src={company.image}
                        alt={company.name}
                        width={320}
                        height={320}
                        className="object-cover  group-hover:scale-105 transition-transform duration-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>

                    {/* Content */}
                    <div className="relative p-6 bg-white rounded-b-lg">
                      <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                        {company.name}
                      </h3>
                      <p className="text-zinc-600 text-sm mb-4 line-clamp-2">
                        {company.description}
                      </p>
                      <div className="inline-flex items-center text-[#2056aeff] hover:text-[#50ade5ff] font-medium group">
                        <span className="mr-2 group-hover:underline">
                          Learn More
                        </span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-2" />
                        </motion.div>
                      </div>

                      {/* Enhanced Hover Effect */}
                      <div className="absolute inset-0 ring-1 ring-[#2056aeff] opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
