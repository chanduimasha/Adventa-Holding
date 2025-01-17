import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: "jane-doe",
    name: "Jane Doe",
    role: "Chief Financial Officer",
    feedback:
      "An exceptional service that transformed our financial strategy with innovative solutions and unparalleled support.",
    image: "/assets/feedbacks/feedback1.jpeg",
  },
  {
    id: "michael-smith",
    name: "Michael Smith",
    role: "Senior Web Designer",
    feedback:
      "The creativity and technical expertise exceeded all our expectations. A truly remarkable team to work with.",
    image: "/assets/feedbacks/feedback4.jpeg",
  },
  {
    id: "emily-chen",
    name: "Emily Chen",
    role: "E-commerce Store Owner",
    feedback:
      "Revolutionized our online presence with cutting-edge design and strategic insights. Couldn't be happier!",
    image: "/assets/feedbacks/feedback2.jpeg",
  },
  {
    id: "alex-johnson",
    name: "Alex Johnson",
    role: "Marketing Director",
    feedback:
      "Their approach to digital marketing is nothing short of genius. They've truly elevated our brand positioning.",
    image: "/assets/feedbacks/feedback5.jpeg",
  },
  {
    id: "sarah-williams",
    name: "Sarah Williams",
    role: "Product Innovation Lead",
    feedback:
      "A collaborative partner that brings fresh perspectives and drives meaningful innovation.",
    image: "/assets/feedbacks/feedback3.jpeg",
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"right" | "left">("right");

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const slideVariants = {
    initial: (direction: "left" | "right") => ({
      opacity: 0,
      x: direction === "right" ? 100 : -100, // Slide in from the side
    }),
    animate: {
      opacity: 1,
      x: 0, // Center position
      transition: {
        duration: 0.6,
        ease: "easeInOut", // Smooth transition
      },
    },
    exit: (direction: "left" | "right") => ({
      opacity: 0,
      x: direction === "right" ? -100 : 100, // Slide out to the side
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="bg-blue-50 dark:bg-neutral-900 py-14">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#2056aeff] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-black dark:text-gray-300 max-w-xl mx-auto">
            Hear directly from our valued clients about their transformative
            experiences.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-20 bg-[#2056aeff] hover:bg-[#50ade5ff] text-white p-3 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="w-full max-w-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={testimonials[currentIndex].id}
                custom={direction}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white dark:bg-gray-950 rounded-xl shadow-2xl p-8 text-center relative overflow-hidden"
              >
                <div className="absolute top-4 left-4 text-[#50ade5ff]">
                  <Star size={32} fill="currentColor" />
                </div>
                <div className="absolute bottom-4 right-4 text-[#50ade5ff]">
                  <Star size={32} fill="currentColor" />
                </div>

                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="mx-auto mb-6 w-32 h-32 rounded-full object-cover border-4 border-[#2056aeff] shadow-lg"
                />

                <p className="text-black dark:text-gray-200 italic mb-6 text-lg">
                  {testimonials[currentIndex].feedback}
                </p>

                <div>
                  <h3 className="text-2xl font-bold text-[#2056aeff]">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-20 bg-[#2056aeff] hover:bg-[#50ade5ff] text-white p-3 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#2056aeff] w-6" : "bg-[#50ade5ff]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
