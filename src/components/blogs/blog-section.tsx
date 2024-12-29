"use client";

import BlogCard from "@/components/blog-card";
import { Blog } from "../../types/blog";
import { motion } from "framer-motion";
import Link from "next/link";

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
    date: "Jul 7, 2024",
    content:
      "Digital marketing is evolving rapidly. These trends will dominate the industry in the coming years...",
    image: "/assets/blogs/6.png",
  },
  {
    id: 7,
    title: "How to Secure Your Domain Against Cyber Threats",
    category: "Hosting",
    author: "Michael Lee",
    date: "Nov 10, 2022",
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

const BlogSection: React.FC = () => {
  // Sort blogs by date and take the latest 3
  const latestBlogs = blogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-neutral-900">
      <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-16"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl xl:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {latestBlogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center items-center"
        >
          <Link
            href="/blogs"
            className="text-xl text-[#2056aeff] dark:text-[#2056aeff] font-semibold flex items-center hover:text-[#50ade5ff] dark:hover:text-[#50ade5ff]"
          >
            Read more blogs
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
          </Link>
        </motion.div>
      </motion.div>

      </div>
    </div>
  );
};

export default BlogSection;
