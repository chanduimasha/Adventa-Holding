"use client";

import { News } from "../types/news";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

interface NewsCardProps {
  news: News;
  index: number;
}

const NewsCard = ({ news, index }: NewsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-lg rounded-3xl overflow-hidden 
                 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] dark:hover:shadow-[0_0_40px_rgba(249,115,22,0.07)]
                 transition-all duration-300 border border-gray-100 dark:border-gray-700 shadow-2xl"
    >
      <div className="relative h-72 overflow-hidden shadow-xl">
        <motion.img
          src={news.image}
          alt={news.title}
          className="w-full h-full transition-transform duration-700 ease-out"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" /> */}
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-4 right-4 flex gap-2"
        >
          <span className="px-4 py-1.5 text-sm font-medium text-white bg-orange-500/90 backdrop-blur-md 
                         rounded-full shadow-lg transform hover:scale-105 transition-transform"
          >
            {news.category}
          </span>
        </motion.div>
      </div>
      
      <div className="p-8">
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <User size={16} className="text-orange-500" />
            <span>{news.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-orange-500" />
            <span>{news.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-orange-500" />
            <span>{news.readTime} min read</span>
          </div>
        </div>

        <Link href={`/news/${news.id}`} className="block group">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 
                       group-hover:text-orange-500 transition-colors duration-300 line-clamp-2"
          >
            {news.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 text-base leading-relaxed">
            {news.excerpt}
          </p>
          
          <motion.div
            className="inline-flex items-center text-orange-500 font-semibold"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Read Full Article
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default NewsCard;