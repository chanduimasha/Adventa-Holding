import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const IndustryGrid = () => {
  const industries = [
    {
      name: "Banking & Financial Services",
      image: "/assets/industries/1.png",
      color: "bg-blue-300",
      link: "/banking",
    },
    {
      name: "Insurance",
      image: "/assets/industries/2.png",
      color: "bg-sky-300",
      link: "/insurance",
    },
    {
      name: "Healthcare",
      image: "/assets/industries/3.png",
      color: "bg-cyan-400",
      link: "/healthcare",
    },
    {
      name: "Life Sciences",
      image: "/assets/industries/4.png",
      color: "bg-sky-500",
      link: "/lifesciences",
    },
    {
      name: "Industrial",
      image: "/assets/industries/5.png",
      color: "bg-yellow-500",
      link: "/industrial",
    },
    {
      name: "Software & Hi-Tech",
      image: "/assets/industries/6.png",
      color: "bg-red-400",
      link: "/software",
    },
    {
      name: "Telecom & Media",
      image: "/assets/industries/7.png",
      color: "bg-lime-500",
      link: "/telecom",
    },
    {
      name: "Consumer Tech",
      image: "/assets/industries/8.png",
      color: "bg-gray-500",
      link: "/consumer",
    },
    {
      name: "Consumer Tech",
      image: "/assets/industries/9.png",
      color: "bg-orange-300",
      link: "/consumer",
    },
  ];

  return (
    <section className="bg-zinc-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <motion.h1
          className="text-4xl font-bold text-center text-black mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Industry Expertise and Solutions
        </motion.h1>

        <motion.p
          className="text-center text-gray-600 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          Creating business value at the intersection of your industry
          transformation and today’s latest technology innovation.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mb-12 mt-6">
          {industries.map((industry, index) => (
            <Link href={industry.link} key={index}>
              <motion.div
                className={`${industry.color} flex justify-between items-center p-5 h-60 cursor-pointer shadow-xl hover:brightness-125 transition duration-300`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }} // Animate only once
              >
                <div className="text-white text-xl font-semibold max-w-[50%]">
                  {industry.name}
                </div>
                <Image
                  src={industry.image}
                  alt={industry.name}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid;
