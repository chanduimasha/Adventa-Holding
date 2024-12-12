// // components/TestimonialSection.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// interface Testimonial {
//   name: string;
//   role: string;
//   feedback: string;
//   image: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     name: "0",
//     role: "CFO",
//     feedback:
//       "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.",
//     image: "/images/jhone-doe.jpg",
//   },
//   {
//     name: "1",
//     role: "Web Designer",
//     feedback:
//       "Accumsan quam, ultricies eget id, aliquam eget nibh et. Maecenas aliquam.",
//     image: "/images/afa-rose.jpg",
//   },
//   {
//     name: "2",
//     role: "Store Owner",
//     feedback:
//       "Sem cure digni ssim donec porttitora entum suscipit rhoncus. Accumsan quam.",
//     image: "/images/keena-lara.jpg",
//   },
//   {
//     name: "3",
//     role: "Marketing Manager",
//     feedback:
//       "Maecenas aliquam, ultricies eget id, aliquam eget nibh et. Proin iaculis purus.",
//     image: "/images/jane-smith.jpg",
//   },
//   {
//     name: "4",
//     role: "Product Manager",
//     feedback:
//       "Donec porttitora entum suscipit rhoncus. Accumsan quam, ultricies eget id.",
//     image: "/images/tom-hardy.jpg",
//   },
// ];

// const TestimonialSection: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleFeedbacks = 3;

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000); // Automatically rotate every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const getVisibleTestimonials = () => {
//     const visible = [];
//     for (let i = 0; i < visibleFeedbacks; i++) {
//       visible.push(testimonials[(currentIndex + i) % testimonials.length]);
//     }
//     return visible;
//   };

//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold text-blue-600">Testimonials</h2>
//         <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet</p>
//         <div className="relative flex items-center justify-center">
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 z-10 bg-blue-600 text-white p-2 rounded-full shadow-lg"
//           >
//             &#8592;
//           </button>
//           <div className="flex overflow-hidden max-w-[1100px]">
//             {getVisibleTestimonials().map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{
//                   opacity: 1,
//                   x: 0,
//                   scale: index === 1 ? 1.1 : 0.9, // Highlight middle card
//                 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.5 }}
//                 className={`flex-shrink-0 w-80 mx-4 p-6 rounded-lg shadow-md bg-white transition-transform transform
//                 ${index === 1 ? "z-10" : "z-0 opacity-80"}`} // Middle card highlighted
//               >
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="mx-auto rounded-full w-24 h-24 object-cover mb-4"
//                 />
//                 <h3 className="text-xl font-semibold text-blue-600">
//                   {testimonial.name}
//                 </h3>
//                 <p className="text-sm text-gray-500">{testimonial.role}</p>
//                 <p className="text-gray-600 mt-4 italic">
//                   {testimonial.feedback}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//           <button
//             onClick={nextSlide}
//             className="absolute right-0 z-10 bg-blue-600 text-white p-2 rounded-full shadow-lg"
//           >
//             &#8594;
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;

"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

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
    feedback: "An exceptional service that transformed our financial strategy with innovative solutions and unparalleled support.",
    image: "/assets/feedbacks/feedback1.jpeg",
  },
  {
    id: "michael-smith",
    name: "Michael Smith", 
    role: "Senior Web Designer",
    feedback: "The creativity and technical expertise exceeded all our expectations. A truly remarkable team to work with.",
    image: "/assets/feedbacks/feedback4.jpeg",
  },
  {
    id: "emily-chen",
    name: "Emily Chen",
    role: "E-commerce Store Owner",
    feedback: "Revolutionized our online presence with cutting-edge design and strategic insights. Couldn't be happier!",
    image: "/assets/feedbacks/feedback2.jpeg",
  },
  {
    id: "alex-johnson",
    name: "Alex Johnson",
    role: "Marketing Director",
    feedback: "Their approach to digital marketing is nothing short of genius. They've truly elevated our brand positioning.",
    image: "/assets/feedbacks/feedback5.jpeg",
  },
  {
    id: "sarah-williams",
    name: "Sarah Williams",
    role: "Product Innovation Lead",
    feedback: "A collaborative partner that brings fresh perspectives and drives meaningful innovation.",
    image: "/assets/feedbacks/feedback3.jpeg",
  }
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'right' | 'left'>('right');

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    // Changed to 5000 milliseconds (5 seconds)
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    initial: (direction: 'left' | 'right') => ({
      opacity: 0,
      x: direction === 'right' ? 100 : -100,
      scale: 0.8
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      }
    },
    exit: (direction: 'left' | 'right') => ({
      opacity: 0,
      x: direction === 'right' ? -100 : 100,
      scale: 0.8,
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-14">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-orange-600 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-black max-w-xl mx-auto">
            Hear directly from our valued clients about their transformative experiences.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <button 
            onClick={prevSlide}
            className="absolute left-0 z-20 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110"
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
                className="bg-white rounded-xl shadow-2xl p-8 text-center relative overflow-hidden"
              >
                <div className="absolute top-4 left-4 text-orange-300">
                  <Star size={32} fill="currentColor" />
                </div>
                <div className="absolute bottom-4 right-4 text-orange-300">
                  <Star size={32} fill="currentColor" />
                </div>

                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="mx-auto mb-6 w-32 h-32 rounded-full object-cover border-4 border-orange-500 shadow-lg"
                />

                <p className="text-black italic mb-6 text-lg">
                  {testimonials[currentIndex].feedback}
                </p>

                <div>
                  <h3 className="text-2xl font-bold text-orange-700">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-500">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 z-20 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110"
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
                index === currentIndex 
                  ? 'bg-orange-600 w-6' 
                  : 'bg-orange-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;