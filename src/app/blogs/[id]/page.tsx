// "use client";

// import { notFound } from "next/navigation";
// import { Blog } from "../../../types/blog";
// import { use } from "react";
// import { motion } from "framer-motion";
// import { Calendar, User, Tag } from "lucide-react";
// import NavBar from "@/components/nav-bar";
// import Footer from "@/components/footer-section";

// const blogs: Blog[] = [
//   {
//     id: 1,
//     title: "How to host a website on any hosting provider?",
//     category: "Hosting",
//     author: "William",
//     date: "Feb 1, 2022",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum eius mollitia, vitae iure libero magnam enim aspernatur debitis aut eaque eos. Asperiores voluptatem placeat deleniti nostrum, beatae vitae dolorum perferendis, ad in officiis a minima exercitationem excepturi illum iusto similique quis odio, expedita at fugit neque aperiam cumque voluptatum atque? Veniam repudiandae neque dolor, reprehenderit consequuntur ea alias incidunt! Dolor optio quibusdam nihil. Maxime ratione sit eum recusandae veritatis sapiente atque harum ducimus quas labore iusto doloremque laudantium illo, aliquam unde quaerat nulla expedita quos sed eos! Vel non laudantium rem expedita soluta labore laborum doloremque, tenetur error corporis!",
//     image: "/assets/blogs/1.jpg",
//   },
//   {
//     id: 2,
//     title: "How to create ads on Google AdWords?",
//     category: "Advertisement",
//     author: "Jobi Ret",
//     date: "Oct 5, 2022",
//     content:
//       "Creating ads on Google AdWords is essential for reaching the right audience...",
//     image: "/assets/blogs/2.png",
//   },
//   {
//     id: 3,
//     title: "What is digital marketing and why is it important?",
//     category: "Marketing",
//     author: "Main Dow",
//     date: "Dec 22, 2022",
//     content:
//       "Digital marketing helps businesses grow by reaching online audiences...",
//     image: "/assets/blogs/3.jpg",
//   },
//   {
//     id: 4,
//     title: "Top 5 Hosting Providers to Consider in 2024",
//     category: "Domain & Hosting",
//     author: "Lisa Ray",
//     date: "Jan 15, 2024",
//     content:
//       "Choosing the right hosting provider is crucial for your website's performance. Here are the top options to consider this year...",
//     image: "/assets/blogs/4.jpeg",
//   },
//   {
//     id: 5,
//     title: "Tips to Optimize Your Google Ads Campaigns",
//     category: "Advertisement",
//     author: "Samuel Kite",
//     date: "Mar 18, 2023",
//     content:
//       "Optimizing your Google Ads campaigns can help reduce costs and increase ROI. Here are some expert tips...",
//     image: "/assets/blogs/5.png",
//   },
//   {
//     id: 6,
//     title: "The Future of Digital Marketing: Trends to Watch",
//     category: "Marketing",
//     author: "Ella Hart",
//     date: "Jul 7, 2023",
//     content:
//       "Digital marketing is evolving rapidly. These trends will dominate the industry in the coming years...",
//     image: "/assets/blogs/6.png",
//   },
//   {
//     id: 7,
//     title: "How to Secure Your Domain Against Cyber Threats",
//     category: "Domain & Hosting",
//     author: "Michael Lee",
//     date: "Nov 10, 2023",
//     content:
//       "Your domain is a valuable asset. Learn how to protect it from potential cyber threats...",
//     image: "/assets/blogs/7.jpg",
//   },
//   {
//     id: 8,
//     title: "The Best Platforms for Social Media Advertising",
//     category: "Advertisement",
//     author: "Emily Green",
//     date: "Aug 25, 2023",
//     content:
//       "Social media advertising is a powerful tool. Discover the best platforms to achieve your marketing goals...",
//     image: "/assets/blogs/8.jpg",
//   },
//   {
//     id: 9,
//     title: "How Content Marketing Drives Business Growth",
//     category: "Marketing",
//     author: "David Jones",
//     date: "Oct 13, 2023",
//     content:
//       "Content marketing is more than just writing blogs. Here's how it can help grow your business...",
//     image: "/assets/blogs/9.png",
//   },
// ];

// interface BlogPostProps {
//   params: Promise<{ id: string }>;
// }

// export default function BlogPost({ params }: BlogPostProps) {
//   const resolvedParams = use(params);
//   const blogId = Number(resolvedParams.id);
//   const blog = blogs.find((b) => b.id === blogId);

//   if (!blog) {
//     return notFound();
//   }

//   return (
//     <div>
//       <NavBar />
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="min-h-screen xl:pt-16 pt-8 bg-blue-50 dark:bg-neutral-900"
//       >
//         <div className="container mx-auto px-4 py-16 max-w-5xl">
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="relative rounded-2xl overflow-hidden shadow-2xl mb-8"
//           >
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="w-full xl:h-[500px] h-[250px]"
//             />

//             <div className="absolute bottom-0 left-0 right-0 xl:p-8 p-1">
              

//               <div className="flex flex-wrap items-center xl:gap-6 gap-1 text-white/90">
//                 <div className="flex items-center gap-2">
//                   <User size={20} />
//                   <span>{blog.author}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Calendar size={20} />
//                   <span>{blog.date}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Tag size={20} />
//                   <span>{blog.category}</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.h1
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-2xl xl:text-4xl font-bold text-black dark:text-gray-200 mb-4"
//           >
//             {blog.title}
//           </motion.h1>

//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="prose prose-lg dark:prose-invert max-w-none"
//           >
//             <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//               {blog.content}
//             </p>
//           </motion.div>
//         </div>
//       </motion.div>
//       <Footer />
//     </div>
//   );
// }


// import BlogPostClient from './blog-post-client';
// import { use } from 'react';

// export default function BlogPost({ params }: { params: { id: string } }) {
//   const id = use(Promise.resolve(params.id));
  
//   return <BlogPostClient blogId={id} />;
// }


"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Blog } from '../../../types/blog';
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer-section";
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';

export default function BlogDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchBlogDetail() {
      try {
        // Fetch specific blog entry from Contentful
        const res = await fetch(
          `https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/entries/${id}?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4`
        );
        const data = await res.json();

        // Fetch associated assets
        const assetRes = await fetch(
          `https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/assets/${data.fields.image.sys.id}?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4`
        );
        const assetData = await assetRes.json();

        const blogDetail: Blog = {
          id: data.sys.id,
          title: data.fields.title,
          category: data.fields.category,
          author: data.fields.author,
          date: data.fields.date,
          content: data.fields.content,
          image: `https:${assetData.fields.file.url}`
        };

        setBlog(blogDetail);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blog detail:', err);
        setError('Failed to load blog details');
        setLoading(false);
      }
    }

    fetchBlogDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-neutral-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#2056aeff]"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Loading blog details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-neutral-900">
        <div className="text-center">
          <p className="text-red-500">{error}</p>
          <Link href="/blogs">
            <button className="mt-4 px-4 py-2 bg-[#2056aeff] text-white rounded-full hover:bg-[#50ade5ff] transition-colors">
              Back to Blogs
            </button>
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br bg-blue-50 dark:bg-neutral-900 py-28 xl:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto px-4 max-w-4xl"
        >
          <Link href="/blogs">
            <motion.div
              whileHover={{ x: -5 }}
              className="inline-flex items-center text-[#2056aeff] font-semibold mb-8 hover:text-[#50ade5ff]"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blogs
            </motion.div>
          </Link>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white dark:bg-gray-950 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="relative h-[500px] overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag size={16} />
                    <span>{blog.category}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12">
              <div 
                className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}