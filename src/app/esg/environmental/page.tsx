"use client"
import { useHeaderVisibility } from '@/components/header-visibility';
import Header from '@/components/navigation-bar';
import Social from '@/components/social-media';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const DeliveringSuperiorServices = () => {
  const isHeaderVisible = useHeaderVisibility();

  return (
    <div>
      <AnimatePresence>
        {isHeaderVisible && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-50"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <Header />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        className="min-h-screen bg-no-repeat bg-cover bg-center relative pt-[80px]"
        style={{ backgroundImage: "url('/assets/back4.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="relative"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <Image
                src="/assets/back12.png"
                alt="Cyborg"
                className="object-cover rounded-full animate-[spin_10s_linear_infinite] mt-12"
                width={380}
                height={380}
              />
            </motion.div>
            <motion.div
            className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 1,
                  type: "spring",
                  stiffness: 120,
                  damping: 10
                }}
              >
                Delivering Superior Services
              </motion.h1>
              <motion.p
                className="text-lg mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 1.3,
                  type: "spring",
                  stiffness: 200
                }}
              >
                IT Solutions.
              </motion.p>
              <motion.p
                className="text-lg mb-8"
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{
                  delay: 1.6,
                  type: "spring",
                  stiffness: 100
                }}
              >
                You can easily change any design to your own. It is also highly customizable SEO friendly template.
              </motion.p>
              <motion.div
                className="mt-12 mb-2 xl:mb-2"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 1.9,
                  type: "spring",
                  stiffness: 120,
                  damping: 10
                }}>
                <Social
                  containerStyles="flex gap-10 mb-10"
                  iconStyles="xl:w-[40px] xl:h-[40px] w-9 h-9 border border-indigo-500 rounded-full flex justify-center items-center text-indigo-500 text-base hover:bg-indigo-800 hover:text-primary hover:transition-all duration-500"
                />
              </motion.div>
              <div className="flex space-x-4">
                <motion.a
                  href="/contact"
                  className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded"
                  initial={{
                    x: -50,
                    rotate: -15,
                    scale: 0.8,
                    opacity: 0
                  }}
                  animate={{
                    x: 0,
                    rotate: 0,
                    scale: 1,
                    opacity: 1
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    delay: 2.2,
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }}
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Repeat for second section with same fixed header approach */}
      <motion.section
        className="min-h-screen bg-no-repeat bg-cover bg-center relative pt-[80px]"
        style={{ backgroundImage: "url('/assets/back4.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Similar content as first section */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white relative z-10">
          {/* Repeat previous section's content */}
        </div>
      </motion.section>

      <motion.section>
        {/* Placeholder for future content */}
      </motion.section>
    </div>
  );
};

export default DeliveringSuperiorServices;