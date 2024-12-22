import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jane Cooper",
    role: "Chief Financial Officer",
    feedback: "The innovative solutions provided transformed our financial strategy completely. The attention to detail and professional approach made all the difference.",
    image: "/assets/feedbacks/feedback1.jpeg",
    rating: 5
  },
  {
    id: "2",
    name: "Michael Foster",
    role: "Senior Web Designer",
    feedback: "Working with this team has been an absolute game-changer. Their technical expertise and creative solutions exceeded all our expectations.",
    image: "/assets/feedbacks/feedback4.jpeg",
    rating: 5
  },
  {
    id: "3",
    name: "Emily Chen",
    role: "E-commerce Director",
    feedback: "The level of innovation and strategic thinking brought to our project was exceptional. They truly understood our vision and delivered beyond expectations.",
    image: "/assets/feedbacks/feedback2.jpeg",
    rating: 5
  }
];

const FeedbackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

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

  const cardVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.2
      }
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6"
            >
              Client Testimonials
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-xl max-w-2xl mx-auto"
            >
              Discover what our clients say about their experience working with us
            </motion.p>
          </div>

          {/* Testimonial Card */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12"
              >
                <div className="relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-6 -left-6">
                    <Quote size={48} className="text-purple-500/20" />
                  </div>

                  <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
                    {/* Image and Rating */}
                    <div className="text-center md:text-left">
                      <div className="relative inline-block">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="relative"
                        >
                          <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-32 h-32 rounded-full object-cover border-4 border-purple-500/30"
                          />
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-4 py-1">
                            <div className="flex items-center gap-1">
                              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                <Star key={i} size={14} className="text-yellow-300 fill-yellow-300" />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <blockquote className="relative">
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic mb-6">
                          {testimonials[currentIndex].feedback}
                        </p>
                        <footer>
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {testimonials[currentIndex].name}
                          </h3>
                          <p className="text-purple-400">
                            {testimonials[currentIndex].role}
                          </p>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              <button
                onClick={prevSlide}
                className="pointer-events-auto transform -translate-x-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="pointer-events-auto transform translate-x-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 'right' : 'left');
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-gradient-to-r from-purple-600 to-pink-600' 
                    : 'w-2 bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;