// import BlogCard from "@/components/blog-card";
// import { Blog } from "../../types/blog";

// const blogs: Blog[] = [
//   {
//     id: 1,
//     title: "How to host a website on any hosting provider?",
//     category: "Domain & Hosting",
//     author: "William Bla",
//     date: "Feb 1, 2022",
//     content: "In this blog, we will explore step-by-step how you can host your website..."
//   },
//   {
//     id: 2,
//     title: "How to create ads on Google AdWords?",
//     category: "Advertisement",
//     author: "Jobi Ret",
//     date: "Oct 5, 2022",
//     content: "Creating ads on Google AdWords is essential for reaching the right audience..."
//   },
//   {
//     id: 3,
//     title: "What is digital marketing and why is it important?",
//     category: "Marketing",
//     author: "Main Dow",
//     date: "Dec 22, 2022",
//     content: "Digital marketing helps businesses grow by reaching online audiences..."
//   },
// ];

// export default function BlogPage() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="container mx-auto p-6">
//         <h1 className="text-3xl font-bold mb-8 text-center">Our Blogs</h1>
//         <div className="grid md:grid-cols-3 gap-8">
//           {blogs.map((blog) => (
//             <BlogCard key={blog.id} blog={blog} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import BlogCard from "@/components/blog-card";
import { Blog } from "../../types/blog";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const blogs: Blog[] = [
  {
    id: 1,
    title: "How to host a website on any hosting provider?",
    category: "Hosting",
    author: "William Bla",
    date: "Feb 1, 2022",
    content:
      "In this blog, we will explore step-by-step how you can host your website...",
    image: "/assets/blogs/1.jpg",
  },
  {
    id: 2,
    title: "How to create ads on Google AdWords?",
    category: "Advertisement",
    author: "Jobi Ret",
    date: "Oct 5, 2022",
    content:
      "Creating ads on Google AdWords is essential for reaching the right audience...",
    image: "/assets/blogs/2.png",
  },
  {
    id: 3,
    title: "What is digital marketing and why is it important?",
    category: "Marketing",
    author: "Main Dow",
    date: "Dec 22, 2022",
    content:
      "Digital marketing helps businesses grow by reaching online audiences...",
    image: "/assets/blogs/3.jpg",
  },
  {
    id: 4,
    title: "Top 5 Hosting Providers to Consider in 2024",
    category: "Hosting",
    author: "Lisa Ray",
    date: "Jan 15, 2024",
    content:
      "Choosing the right hosting provider is crucial for your website's performance. Here are the top options to consider this year...",
    image: "/assets/blogs/4.jpeg",
  },
  {
    id: 5,
    title: "Tips to Optimize Your Google Ads Campaigns",
    category: "Advertisement",
    author: "Samuel",
    date: "Mar 18, 2023",
    content:
      "Optimizing your Google Ads campaigns can help reduce costs and increase ROI. Here are some expert tips...",
    image: "/assets/blogs/5.png",
  },
  {
    id: 6,
    title: "The Future of Digital Marketing: Trends to Watch",
    category: "Marketing",
    author: "Ella Hart",
    date: "Jul 7, 2023",
    content:
      "Digital marketing is evolving rapidly. These trends will dominate the industry in the coming years...",
    image: "/assets/blogs/6.png",
  },
  {
    id: 7,
    title: "How to Secure Your Domain Against Cyber Threats",
    category: "Hosting",
    author: "Michael Lee",
    date: "Nov 10, 2023",
    content:
      "Your domain is a valuable asset. Learn how to protect it from potential cyber threats...",
    image: "/assets/blogs/7.jpg",
  },
  {
    id: 8,
    title: "The Best Platforms for Social Media Advertising",
    category: "Advertisement",
    author: "Emily",
    date: "Aug 25, 2023",
    content:
      "Social media advertising is a powerful tool. Discover the best platforms to achieve your marketing goals...",
    image: "/assets/blogs/8.jpg",
  },
  {
    id: 9,
    title: "How Content Marketing Drives Business Growth",
    category: "Marketing",
    author: "David Jones",
    date: "Oct 13, 2023",
    content:
      "Content marketing is more than just writing blogs. Here's how it can help grow your business...",
    image: "/assets/blogs/9.png",
  },
];

const categories = [...new Set(blogs.map((blog) => blog.category))];
const ITEMS_PER_PAGE = 3;

const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogSectionRef = useRef<HTMLDivElement>(null);

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to the blog grid section with offset
    if (blogSectionRef.current) {
      const yOffset = -100;
      const element = blogSectionRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <motion.button
          key={i}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 rounded-full transition-all duration-300
            ${currentPage === i 
              ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-orange-300 hover:text-white"
            }`}
        >
          {i}
        </motion.button>
      );
    }
    return buttons;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 shadow-2xl dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto px-4 py-32"
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-200 to-orange-600 text-transparent bg-clip-text"
          >
            Explore Our Blog
          </motion.h1>

          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12"
          >
            Discover insights, tutorials, and industry updates
          </motion.p>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(null)}
              className={`px-6 py-1 rounded-full transition-all duration-300 transform
                ${!selectedCategory
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-orange-300 hover:text-white"
                }`}
            >
              All
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-1 rounded-full transition-all duration-300 transform
                  ${selectedCategory === category
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-orange-300 hover:text-white"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.div
            ref={blogSectionRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {paginatedBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </motion.div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-orange-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              
              {renderPaginationButtons()}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-orange-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogSection;