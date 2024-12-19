// import Link from "next/link";
// import { Blog } from "../types/blog";

// interface BlogCardProps {
//   blog: Blog;
// }

// export default function BlogCard({ blog }: BlogCardProps) {
//   return (
//     <Link href={`/blogs/${blog.id}`}>
//       <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
//         <h3 className="text-sm font-semibold text-blue-600">{blog.category}</h3>
//         <h2 className="text-lg font-bold mt-2">{blog.title}</h2>
//         <p className="text-gray-500 mt-2">{blog.author} • {blog.date}</p>
//       </div>
//     </Link>
//   );
// }

"use client";

import { Blog } from "../types/blog";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, Tag } from "lucide-react";

interface BlogCardProps {
  blog: Blog;
  index: number;
}

const BlogCard = ({ blog, index }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full transition-transform duration-500 group-hover:scale-125"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" /> */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full">
            {blog.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
          {blog.title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <User size={16} />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag size={16} />
            <span>{blog.category}</span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {blog.content}
        </p>
        
        <Link href={`/blogs/${blog.id}`}>
          <motion.span
            className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-500"
            whileHover={{ x: 5 }}
          >
            Read More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;

