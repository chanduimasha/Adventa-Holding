// import React from "react";
// import Social from "@/components/social-media";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <motion.section
//       className="min-h-screen bg-no-repeat bg-cover bg-center relative pt-[80px] shadow-md"
//       // style={{ backgroundImage: "url('/assets/back4.jpg')" }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="absolute inset-0 bg-zinc-300 opacity-50"></div>
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-black relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <motion.div
//             className="relative"
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
//           >
//             <Image
//               src="/assets/back14.png"
//               alt="Cyborg"
//               className="object-cover rounded-full animate-[spin_20s_linear_infinite] xl:mt-12 mt-0"
//               width={400}
//               height={400}
//             />
//           </motion.div>
//           <motion.div
//             className="mt-12"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 1 }}
//           >
//             <motion.h1
//               className="text-4xl font-bold mb-4"
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{
//                 duration: 1.5,
//                 delay: 0.2,
//                 type: "spring",
//                 stiffness: 120,
//                 damping: 10,
//               }}
//             >
//               Delivering Superior Services
//             </motion.h1>
//             <motion.p
//               className="text-4xl mb-4 text-orange-600 text-semibold"
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{
//                 delay: 0.4,
//                 type: "spring",
//                 stiffness: 200,
//               }}
//             >
//               IT Solutions.
//             </motion.p>
//             <motion.p
//               className="text-lg mb-8"
//               initial={{ rotate: -10, opacity: 0 }}
//               animate={{ rotate: 0, opacity: 1 }}
//               transition={{
//                 delay: 0.6,
//                 type: "spring",
//                 stiffness: 100,
//               }}
//             >
//               You can easily change any design to your own. It is also highly
//               customizable SEO friendly template.
//             </motion.p>
//             <motion.div
//               className="mt-12 mb-2 xl:mb-2"
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{
//                 duration: 1.5,
//                 delay: 0.8,
//                 type: "spring",
//                 stiffness: 120,
//                 damping: 10,
//               }}
//             >
//               <Social
//                 containerStyles="flex gap-10 mb-10"
//                 iconStyles="xl:w-[40px] xl:h-[40px] w-9 h-9 border border-orange-500 rounded-full flex justify-center items-center text-orange-500 text-base hover:bg-orange-800 hover:text-primary hover:transition-all duration-500"
//               />
//             </motion.div>
//             <div className="flex space-x-4">
//               <motion.a
//                 href="/contact"
//                 className="bg-orange-500 hover:bg-orange-800 text-white px-4 py-2 rounded"
//                 initial={{
//                   x: -50,
//                   rotate: -15,
//                   scale: 0.8,
//                   opacity: 0,
//                 }}
//                 animate={{
//                   x: 0,
//                   rotate: 0,
//                   scale: 1,
//                   opacity: 1,
//                 }}
//                 whileHover={{
//                   scale: 1.1,
//                   boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{
//                   delay: 1,
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 10,
//                 }}
//               >
//                 Contact Us
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default HeroSection;


import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative bg-zinc-100 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0 xl:order-none order-2 xl:mt-0 mt-[-80px]">
          <motion.h1
            className="text-4xl xl:mt-0 mt-28 md:text-5xl xl:text-7xl font-bold text-gray-900 leading-snug"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Re<span className="text-orange-500">(AI)</span>magining™ <br />
            <p className="text-6xl mt-6 font-normal">the World</p>
          </motion.h1>
          <motion.p
            className="text-lg text-orange-500 mt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Let’s reimagine your AI journey together.
          </motion.p>
          <motion.a
            href="#"
            className="mt-6 inline-block bg-orange-500 text-white py-1 px-4 rounded-full font-semibold hover:bg-orange-700 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Learn More
          </motion.a>
        </div>

        {/* Image Section */}
        <div className="relative flex-1">
          <motion.div
            className="group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/assets/hero.png" // Replace with your image path
              alt="Hero Image"
              width={600}
              height={600}
              className="rounded-lg mt-20 xl:mt-28 order-1 xl:order-none transform transition-transform duration-300 group-hover:scale-125"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}