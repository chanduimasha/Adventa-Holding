// import { Blog } from "../types/blog";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Calendar, User, Tag, ArrowRight } from "lucide-react";

// interface BlogCardProps {
//   blog: Blog;
//   index: number;
// }

// const BlogCard = ({ blog, index }: BlogCardProps) => {
//   return (
//     <Link href={`/blogs/${blog.id}`}>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: index * 0.1 }}
//         className="group relative dark:border dark:border-gray-800 bg-white dark:bg-gray-950 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden"
//       >
//         <div className="relative h-64 overflow-hidden">
//           <motion.img
//             src={blog.image}
//             alt={blog.title}
//             className="w-full h-full transition-transform duration-500 group-hover:scale-125 shadow-2xl"
//             initial={{ scale: 1 }}
//             whileHover={{ scale: 1.05 }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
//           <div className="absolute top-4 right-4">
//             <span className="px-3 py-1 text-xs font-semibold text-white bg-[#2056aeff] rounded-full">
//               {blog.category}
//             </span>
//           </div>
//         </div>

//         <div className="relative p-6">
//           <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-[#2056aeff] transition-colors duration-300">
//             {blog.title}
//           </h3>

//           <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
//             <div className="flex items-center gap-1">
//               <User size={16} className="text-[#2056aeff]" />
//               <span>{blog.author}</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <Calendar size={16} className="text-[#2056aeff]" />
//               <span>{blog.date}</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <Tag size={16} className="text-[#2056aeff]" />
//               <span>{blog.category}</span>
//             </div>
//           </div>

//           <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
//             {blog.content}
//           </p>

//           <motion.div
//             className="inline-flex items-center text-[#2056aeff] font-semibold group-hover:text-[#50ade5ff] transition-colors duration-300"
//             whileHover={{ x: 5 }}
//           >
//             Read More
//             <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
//           </motion.div>

//           {/* New hover effects */}
//           <div className="absolute inset-0 ring-1 ring-[#2056aeff] opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
//           <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
//         </div>
//       </motion.div>
//     </Link>
//   );
// };

// export default BlogCard;


import Link from "next/link";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Blog } from "../types/blog";

interface BlogCardProps {
  blog: Blog;
  index: number;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <div className="group relative dark:border dark:border-gray-800 bg-white dark:bg-gray-950 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full transition-transform duration-500 group-hover:scale-125 shadow-2xl"
          />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-semibold text-white bg-[#2056aeff] rounded-full">
              {blog.category}
            </span>
          </div>
        </div>

        <div className="relative p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-[#2056aeff] transition-colors duration-300">
            {blog.title}
          </h3>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <User size={16} className="text-[#2056aeff]" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} className="text-[#2056aeff]" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag size={16} className="text-[#2056aeff]" />
              <span>{blog.category}</span>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {blog.content}
          </p>

          <div className="inline-flex items-center text-[#2056aeff] font-semibold group-hover:text-[#50ade5ff] transition-colors duration-300">
            Read More
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;