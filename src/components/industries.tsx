// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { useRouter } from "next/navigation";

// type SubCompany = {
//   id: number;
//   name: string;
//   image: string;
//   link: string;
//   description: string;
// };

// type Industry = {
//   id: number;
//   name: string;
//   subCompanies: SubCompany[];
// };

// const industries: Industry[] = [
//   {
//     id: 1,
//     name: "Technology",
//     subCompanies: [
//       {
//         id: 1,
//         name: "Auxano",
//         image: "/assets/subcompanies/Auxano.png",
//         link: "/subsidiaries/auxano",
//         description:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia esse cupiditate tempore magnam cumque vero maxime veritatis? Recusandae optio!",
//       },
//       {
//         id: 2,
//         name: "NetworkStore",
//         image: "/assets/subcompanies/Networkstore.png",
//         link: "/subsidiaries/networkstore",
//         description:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia esse cupiditate tempore magnam cumque vero maxime veritatis? Recusandae optio!",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Manufacture",
//     subCompanies: [
//       {
//         id: 3,
//         name: "Eco Lanka",
//         image: "/assets/subcompanies/ECOLANKA.png",
//         link: "/subsidiaries/ecolanka",
//         description:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia esse cupiditate tempore magnam cumque vero maxime veritatis? Recusandae optio!",
//       },
//       {
//         id: 4,
//         name: "Sarodha",
//         image: "/assets/subcompanies/Sarodha.png",
//         link: "/subsidiaries/saroda",
//         description:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia esse cupiditate tempore magnam cumque vero maxime veritatis? Recusandae optio!",
//       },
//     ],
//   },
// ];

// const IndustriesSection: React.FC = () => {
//   const [activeIndustry, setActiveIndustry] = useState<Industry>(industries[0]);
//   const router = useRouter();

//   const handleLearnMore = (companyLink: string) => {
//     router.push(companyLink);
//   };

//   return (
//     <section className="relative bg-zinc-200 dark:bg-neutral-900 py-16">

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl xl:text-6xl font-bold tracking-tight"
//           >
//             <h2 className="bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text">Industries We Serve</h2>
//           </motion.div>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             transition={{ delay: 0.2 }}
//             className="mt-4 h-1 w-20 bg-[#2056aeff] mx-auto"
//           />
//         </div>

//         {/* Navigation and Content Container */}
//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Industry Navigation */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="lg:w-72"
//           >
//             <nav className="sticky top-8 space-y-2">
//               {industries.map((industry) => (
//                 <button
//                   key={industry.id}
//                   onClick={() => setActiveIndustry(industry)}
//                   className={`
//                       w-full group relative px-4 py-4 text-left transition-all duration-200
//                       ${
//                         activeIndustry.id === industry.id
//                           ? "text-[#2056aeff] bg-white dark:bg-indigo-950 shadow-lg rounded-lg border border-blue-100"
//                           : "text-zinc-600 dark:text-white hover:text-[#50ade5ff] dark:hover:text-blue-700"
//                       }
//                     `}
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className="text-lg font-medium">{industry.name}</span>
//                     <motion.div
//                       animate={{
//                         x: activeIndustry.id === industry.id ? 0 : -10,
//                         opacity: activeIndustry.id === industry.id ? 1 : 0,
//                       }}
//                     >
//                       <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-2" />
//                     </motion.div>
//                   </div>
//                   {activeIndustry.id === industry.id && (
//                     <motion.div
//                       layoutId="activeTab"
//                       className="absolute left-0 top-0 w-1 h-full bg-[#2056aeff] rounded-full"
//                     />
//                   )}
//                 </button>
//               ))}
//             </nav>
//           </motion.div>

//           {/* Company Cards Grid */}
//           <div className="flex-1">
//             <motion.div
//               key={activeIndustry.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="grid sm:grid-cols-2 gap-8"
//             >
//               {activeIndustry.subCompanies.map((company, index) => (
//                 <motion.div
//                   key={company.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="group relative bg-white dark:bg-gray-950 rounded-2xl border border-zinc-200 dark:border-gray-800 shadow-xl transition-all duration-300"
//                 >
//                   {/* Clickable Card Container */}
//                   <div
//                     onClick={() => handleLearnMore(company.link)}
//                     className="cursor-pointer"
//                   >
//                     {/* Image Container */}
//                     <div className="relative h-64 rounded-t-3xl overflow-hidden">
//                       <Image
//                         src={company.image}
//                         alt={company.name}
//                         width={320}
//                         height={320}
//                         className="object-cover group-hover:scale-105 transition-transform duration-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
//                     </div>

//                     {/* Content */}
//                     <div className="relative p-6 bg-white dark:bg-gray-950 rounded-b-2xl">
//                       <h3 className="text-xl dark:text-gray-200 font-semibold text-zinc-900 mb-3">
//                         {company.name}
//                       </h3>
//                       <p className="text-zinc-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
//                         {company.description}
//                       </p>
//                       <div className="inline-flex items-center text-[#2056aeff] hover:text-[#50ade5ff] font-medium group">
//                         <span className="mr-2 group-hover:underline">
//                           Learn More
//                         </span>
//                         <motion.div
//                           whileHover={{ x: 5 }}
//                           transition={{ type: "spring", stiffness: 300 }}
//                         >
//                           <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-2" />
//                         </motion.div>
//                       </div>

//                       {/* Enhanced Hover Effect */}
//                       <div className="absolute inset-0 ring-1 ring-[#2056aeff] opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
//                     </div>
//                   </div>

//                   {/* Bottom Gradient Line */}
//                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IndustriesSection;

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
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
        name: "Auxano",
        image: "/assets/subcompanies/Auxano.png",
        link: "/subsidiaries/auxano",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia esse cupiditate tempore magnam cumque vero maxime veritatis? Recusandae optio!",
      },
      {
        id: 2,
        name: "NetworkStore",
        image: "/assets/subcompanies/Networkstore.png",
        link: "/subsidiaries/networkstore",
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
        name: "Eco Lanka",
        image: "/assets/subcompanies/ECOLANKA.png",
        link: "/subsidiaries/ecolanka",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia esse cupiditate tempore magnam cumque vero maxime veritatis? Recusandae optio!",
      },
      {
        id: 4,
        name: "Sarodha",
        image: "/assets/subcompanies/Sarodha.png",
        link: "/subsidiaries/saroda",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia esse cupiditate tempore magnam cumque vero maxime veritatis? Recusandae optio!",
      },
    ],
  },
];

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState<Industry>(industries[0]);
  const router = useRouter();

  const handleLearnMore = (companyLink: string) => {
    router.push(companyLink);
  };

  return (
    <section className="relative bg-blue-50 dark:bg-neutral-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="xl:text-6xl text-4xl font-bold mb-4 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text"
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Discover our specialized solutions across different sectors
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry)}
              className={`px-4 py-2 rounded-full transition-all 
                ${
                  activeIndustry.id === industry.id
                    ? "bg-[#2056aeff] text-white shadow-lg shadow-[#50ade5ff]"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-[#50ade5ff] hover:text-white"
                }`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        {/* Centered Two-Card Grid */}
        <div className="max-w-[800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {activeIndustry.subCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full max-w-[450px] group relative dark:border dark:border-gray-800 bg-white dark:bg-gray-950 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => handleLearnMore(company.link)}
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <motion.div
                    className="w-full h-full"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={company.image}
                      alt={company.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 border-b-2"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-[#2056aeff] rounded-full">
                      {activeIndustry.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-[#2056aeff] transition-colors duration-300">
                    {company.name}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <User size={16} className="text-[#2056aeff]" />
                      <span>Admin</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} className="text-[#2056aeff]" />
                      <span>2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={16} className="text-[#2056aeff]" />
                      <span>{activeIndustry.name}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {company.description}
                  </p>

                  <motion.div
                    className="inline-flex items-center text-[#2056aeff] font-semibold group-hover:text-[#50ade5ff] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.div>

                  {/* Hover effects */}
                  <div className="absolute inset-0 ring-1 ring-[#2056aeff] opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;