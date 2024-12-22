// import { notFound } from "next/navigation";
// import { Blog } from "../../../types/blog";

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

// interface BlogPostProps {
//   params: Promise<{ id: string }>;
// }

// export default async function BlogPost({ params }: BlogPostProps) {
//   const resolvedParams = await params; // Resolve the params promise
//   const blogId = Number(resolvedParams.id); // Convert id to a number
//   const blog = blogs.find((b) => b.id === blogId);

//   if (!blog) {
//     return notFound();
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="container mx-auto p-6">
//         <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
//         <p className="text-gray-500 mb-6">
//           {blog.author} • {blog.date} • {blog.category}
//         </p>
//         <p className="text-gray-700 leading-relaxed">{blog.content}</p>
//       </div>
//     </div>
//   );
// }

"use client";

import { notFound } from "next/navigation";
import { Blog } from "../../../types/blog";
import { use } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Tag } from "lucide-react";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

const blogs: Blog[] = [
  {
    id: 1,
    title: "How to host a website on any hosting provider?",
    category: "Hosting",
    author: "William",
    date: "Feb 1, 2022",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum eius mollitia, vitae iure libero magnam enim aspernatur debitis aut eaque eos. Asperiores voluptatem placeat deleniti nostrum, beatae vitae dolorum perferendis, ad in officiis a minima exercitationem excepturi illum iusto similique quis odio, expedita at fugit neque aperiam cumque voluptatum atque? Veniam repudiandae neque dolor, reprehenderit consequuntur ea alias incidunt! Dolor optio quibusdam nihil. Maxime ratione sit eum recusandae veritatis sapiente atque harum ducimus quas labore iusto doloremque laudantium illo, aliquam unde quaerat nulla expedita quos sed eos! Vel non laudantium rem expedita soluta labore laborum doloremque, tenetur error corporis!",
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
    category: "Domain & Hosting",
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
    author: "Samuel Kite",
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
    category: "Domain & Hosting",
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
    author: "Emily Green",
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

interface BlogPostProps {
  params: Promise<{ id: string }>;
}

export default function BlogPost({ params }: BlogPostProps) {
  const resolvedParams = use(params);
  const blogId = Number(resolvedParams.id);
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return notFound();
  }

  return (
    <div>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br xl:pt-16 pt-8 from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900"
      >
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl mb-8"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full xl:h-[500px] h-[250px]"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" /> */}

            <div className="absolute bottom-0 left-0 right-0 xl:p-8 p-1">
              {/* <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {blog.title}
            </motion.h1> */}

              <div className="flex flex-wrap items-center xl:gap-6 gap-1 text-white/90">
                <div className="flex items-center gap-2">
                  <User size={20} />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={20} />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={20} />
                  <span>{blog.category}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl xl:text-4xl font-bold text-black mb-4"
          >
            {blog.title}
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {blog.content}
            </p>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
