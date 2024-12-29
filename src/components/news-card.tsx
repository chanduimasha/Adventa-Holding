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
    <Link href={`/news/${news.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative bg-white dark:bg-gray-950 backdrop-blur-lg rounded-3xl overflow-hidden 
                 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] dark:hover:shadow-[0_0_40px_rgba(249,115,22,0.07)]
                 transition-all duration-300 border border-gray-100 dark:border-gray-700 shadow-xl"
      >
        <div className="relative h-72 overflow-hidden shadow-xl">
          <motion.img
            src={news.image}
            alt={news.title}
            className="w-full h-full transition-transform duration-700 ease-out shadow-2xl"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute dark:border dark:border-gray-800 inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" /> */}

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-4 right-4 flex gap-2"
          >
            <span
              className="px-3 py-1 text-xs font-medium text-white bg-[#2056aeff] backdrop-blur-md 
                         rounded-full shadow-lg transform hover:scale-105 transition-transform"
            >
              {news.category}
            </span>
          </motion.div>
        </div>

        <div className="p-8">
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <User size={16} className="text-[#2056aeff]" />
              <span>{news.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#2056aeff]" />
              <span>{news.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#2056aeff]" />
              <span>{news.readTime} min read</span>
            </div>
          </div>

          <h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-3 
                       group-hover:text-[#2056aeff] transition-colors duration-300 line-clamp-2"
          >
            {news.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 text-base leading-relaxed">
            {news.excerpt}
          </p>

          <motion.div
            className="inline-flex items-center text-[#2056aeff] font-semibold group-hover:text-[#50ade5ff] transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            Read Full Article
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </motion.div>
          {/* New hover effects */}
          <div className="absolute inset-0 ring-1 ring-[#2056aeff] opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </div>
      </motion.div>
    </Link>
  );
};

export default NewsCard;
