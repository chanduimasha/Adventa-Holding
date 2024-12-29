"use client";

import NewsCard from "@/components/news-card";
import { News } from "../../types/news";
import { motion } from "framer-motion";

const news: News[] = [
  {
    id: 1,
    title: "The Evolution of Artificial Intelligence in Modern Healthcare",
    category: "Technology",
    author: "Sarah",
    date: "Mar 15, 2025",
    readTime: 5,
    excerpt:
      "Exploring how AI is revolutionizing healthcare delivery and patient outcomes through innovative applications...",
    image: "/assets/blogs/1.jpg",
  },
  {
    id: 2,
    title: "Web3 Technologies Reshaping the Digital Landscape",
    category: "Technology",
    author: "Michael",
    date: "Mar 18, 2025",
    readTime: 7,
    excerpt:
      "Discover how blockchain, NFTs, and decentralized platforms are transforming online interactions and digital ownership...",
    image: "/assets/blogs/2.png",
  },
  {
    id: 3,
    title: "5G Networks: The Future of Connectivity",
    category: "Technology",
    author: "James",
    date: "Mar 20, 2024",
    readTime: 6,
    excerpt:
      "Exploring the transformative impact of 5G technology on communication, IoT devices, and smart cities...",
    image: "/assets/blogs/3.jpg",
  },
  {
    id: 4,
    title: "Data-Driven Marketing Strategies for 2024",
    category: "Marketing",
    author: "Emma",
    date: "Mar 19, 2024",
    readTime: 8,
    excerpt:
      "Learn how successful companies are leveraging big data and analytics to create personalized marketing campaigns...",
    image: "/assets/blogs/4.jpeg",
  },
  {
    id: 5,
    title: "The Rise of Influencer Marketing in B2B",
    category: "Marketing",
    author: "Sophie",
    date: "Mar 17, 2024",
    readTime: 6,
    excerpt:
      "How B2B companies are successfully incorporating influencer marketing into their strategy...",
    image: "/assets/blogs/5.png",
  },
  {
    id: 6,
    title: "Content Marketing Trends Dominating 2024",
    category: "Marketing",
    author: "David",
    date: "Mar 16, 2024",
    readTime: 7,
    excerpt:
      "Exploring the latest content marketing strategies that are driving engagement and conversions...",
    image: "/assets/blogs/6.png",
  },

  {
    id: 7,
    title: "AI-Powered Advertising: The Next Frontier",
    category: "Advertisement",
    author: "Lisa",
    date: "Mar 20, 2024",
    readTime: 5,
    excerpt:
      "How artificial intelligence is revolutionizing ad targeting and campaign optimization...",
    image: "/assets/blogs/7.jpg",
  },
  {
    id: 8,
    title: "Video Advertising Trends for Social Media",
    category: "Advertisement",
    author: "Mark",
    date: "Mar 18, 2024",
    readTime: 6,
    excerpt:
      "Discover the latest video advertising formats and strategies driving engagement on social platforms...",
    image: "/assets/blogs/8.jpg",
  },
  {
    id: 9,
    title: "Programmatic Advertising in 2024",
    category: "Advertisement",
    author: "Rachel",
    date: "Mar 16, 2024",
    readTime: 7,
    excerpt:
      "Understanding the evolution of programmatic advertising and its impact on digital marketing...",
    image: "/assets/blogs/9.png",
  },
];

const NewsSection: React.FC = () => {
  // Sort news by date and take the latest 3
  const latestNews = news
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-blue-50 shadow-2xl dark:bg-neutral-900">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto px-4 py-16"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="xl:text-6xl text-5xl font-bold mb-6 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text">
              Latest News & Updates
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay informed with our curated collection of breaking news,
              insights, and in-depth analysis
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {latestNews.map((item, index) => (
              <NewsCard key={item.id} news={item} index={index} />
            ))}
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center items-center"
        >
          <a
            href="/news"
            className="text-xl text-[#2056aeff] dark:text-[#2056aeff] font-semibold flex items-center hover:text-[#50ade5ff] dark:hover:text-[#50ade5ff]"
          >
            Read more news
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#2056aeff] dark:text-[#2056aeff] hover:text-[#50ade5ff] dark:hover:text-[#50ade5ff]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.div>
          </a>
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsSection;
