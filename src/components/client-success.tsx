import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const clientLogos = [
  { id: 1, name: "Client 1", url: "/client1", image: "/assets/services/1.png" },
  { id: 2, name: "Client 2", url: "/client2", image: "/assets/services/2.jpg" },
  { id: 3, name: "Client 3", url: "/client3", image: "/assets/services/3.png" },
  { id: 4, name: "Client 4", url: "/client4", image: "/assets/services/4.png" },
  { id: 5, name: "Client 5", url: "/client5", image: "/assets/services/5.jpg" },
  { id: 6, name: "Client 6", url: "/client6", image: "/assets/services/6.jpg" },
  { id: 7, name: "Client 7", url: "/client7", image: "/assets/services/7.jpg" },
];

const ClientSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [inView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clientLogos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clientLogos.length) % clientLogos.length);
  };

  const visibleLogos = [
    ...clientLogos.slice(currentIndex, currentIndex + 5),
    ...clientLogos.slice(0, Math.max(0, 5 - (clientLogos.length - currentIndex))),
  ];

  return (
    <section ref={ref} className="bg-white py-10 relative">
      {/* Text Section with animation */}
      <motion.div
        className="text-center mb-6 mx-10 xl:mx-60"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="xl:text-5xl text-3xl mb-6 font-bold text-gray-800"
          initial={{ y: -50 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Our Mission: Complete Client Success
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-2 mb-12 text-left xl:text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          When it comes to digital transformation, why settle for a vendor when what you need is a partner? Someone who understands your industry and your company and how to execute your strategy efficiently and completely. Someone you can count on to deliver essential solutions and measurable results again and again. Aventa is that partner.
        </motion.p>
      </motion.div>

      {/* Carousel Container with animation */}
      <div className="relative max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Left Arrow with animation */}
          <motion.button
            onClick={prevSlide}
            className="mx-[-20px] text-2xl absolute left-0 top-1/2 -translate-y-1/2 bg-transparent rounded-full p-2 text-black hover:text-orange-500 transition"
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            ←
          </motion.button>

          {/* Logo Row with motion animations */}
          <div className="flex items-center justify-center w-full gap-2">
            {visibleLogos.map((logo, index) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, x: index === 0 ? 50 : 0 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 w-1/5"
              >
                <Link href={logo.url} passHref>
                  <motion.img
                    src={logo.image}
                    alt={logo.name}
                    whileHover={{ scale: 1.1 }}
                    className={`cursor-pointer mx-auto shadow-md w-40 h-28 ${
                      index === 2 ? "border-2 border-orange-500" : ""
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow with animation */}
          <motion.button
            onClick={nextSlide}
            className="mx-[-20px] text-2xl absolute right-0 top-1/2 -translate-y-1/2 text-black p-2 hover:text-orange-500 transition"
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            →
          </motion.button>
        </div>
      </div>

      {/* Call to Action with animation */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Link
          href="/success-stories"
          passHref
          className="text-orange-500 font-semibold hover:underline"
        >
          Browse Client Success Stories →
        </Link>
      </motion.div>
    </section>
  );
};

export default ClientSection;