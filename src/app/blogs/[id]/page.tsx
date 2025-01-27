import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer-section";
import { Blog } from "@/types/blog";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function fetchBlogDetails(id: string): Promise<Blog | null> {
  try {
    const response = await fetch(
      `https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/entries/${id}?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const assetResponse = await fetch(
      `https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/assets/${data.fields.image?.sys?.id}?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4`,
      { next: { revalidate: 3600 } }
    );

    const assetData = await assetResponse.json();
    const imageUrl = assetData?.fields?.file?.url || "/placeholder-image.jpg";

    return {
      id: data.sys.id,
      title: data.fields.title,
      category: data.fields.category,
      author: data.fields.author,
      date: data.fields.date,
      content: data.fields.content,
      image: `https:${imageUrl}`,
    };
  } catch (error) {
    console.error("Error fetching blog details:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = await fetchBlogDetails(resolvedParams.id);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${blog.title} | Your Blog Name`,
    description: blog.content.substring(0, 160),
    openGraph: {
      title: blog.title,
      description: blog.content.substring(0, 160),
      images: [blog.image],
    },
  };
}

export default async function BlogDetails({ params }: PageProps) {
  const resolvedParams = await params;
  const blog = await fetchBlogDetails(resolvedParams.id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow bg-gradient-to-br from-blue-50 to-white dark:from-neutral-900 dark:to-neutral-800">
        <div className="container mx-auto px-4 py-28 xl:py-32">
          <Link
            href="/blogs"
            className="inline-flex items-center text-[#2056aeff] hover:text-[#50ade5ff] transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blogs
          </Link>

          <article className="bg-white dark:bg-gray-950 rounded-3xl shadow-xl overflow-hidden">
            <div className="relative h-[400px] overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full"
              />
              <div className="absolute top-6 right-6">
                <span className="px-4 py-2 text-sm font-semibold text-white bg-[#2056aeff] rounded-full">
                  {blog.category}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-[#2056aeff]" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-[#2056aeff]" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={18} className="text-[#2056aeff]" />
                  <span>{blog.category}</span>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                {blog.content.split("\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-700 dark:text-gray-300 mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// "use client";

// import { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import { Blog } from '../../../types/blog';
// import NavBar from "@/components/nav-bar";
// import Footer from "@/components/footer-section";
// import { motion } from 'framer-motion';
// import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
// import Link from 'next/link';

// export default function BlogDetailPage() {
//   const params = useParams();
//   const id = params.id as string;
//   const [blog, setBlog] = useState<Blog | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!id) return;

//     async function fetchBlogDetail() {
//       try {
//         // Fetch specific blog entry from Contentful
//         const res = await fetch(
//           `https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/entries/${id}?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4`
//         );
//         const data = await res.json();

//         // Fetch associated assets
//         const assetRes = await fetch(
//           `https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/assets/${data.fields.image.sys.id}?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4`
//         );
//         const assetData = await assetRes.json();

//         const blogDetail: Blog = {
//           id: data.sys.id,
//           title: data.fields.title,
//           category: data.fields.category,
//           author: data.fields.author,
//           date: data.fields.date,
//           content: data.fields.content,
//           image: `https:${assetData.fields.file.url}`
//         };

//         setBlog(blogDetail);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching blog detail:', err);
//         setError('Failed to load blog details');
//         setLoading(false);
//       }
//     }

//     fetchBlogDetail();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-neutral-900">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#2056aeff]"></div>
//           <p className="mt-4 text-gray-600 dark:text-gray-300">Loading blog details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-neutral-900">
//         <div className="text-center">
//           <p className="text-red-500">{error}</p>
//           <Link href="/blogs">
//             <button className="mt-4 px-4 py-2 bg-[#2056aeff] text-white rounded-full hover:bg-[#50ade5ff] transition-colors">
//               Back to Blogs
//             </button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   if (!blog) return null;

//   return (
//     <div>
//       <NavBar />
//       <div className="min-h-screen bg-gradient-to-br bg-blue-50 dark:bg-neutral-900 py-28 xl:py-32">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="container mx-auto px-4 max-w-4xl"
//         >
//           <Link href="/blogs">
//             <motion.div
//               whileHover={{ x: -5 }}
//               className="inline-flex items-center text-[#2056aeff] font-semibold mb-8 hover:text-[#50ade5ff]"
//             >
//               <ArrowLeft className="w-5 h-5 mr-2" />
//               Back to Blogs
//             </motion.div>
//           </Link>

//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="bg-white dark:bg-gray-950 rounded-3xl shadow-2xl overflow-hidden"
//           >
//             <div className="relative h-[500px] overflow-hidden">
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//               <div className="absolute bottom-8 left-8 right-8 text-white">
//                 <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
//                 <div className="flex items-center gap-4 text-sm">
//                   <div className="flex items-center gap-2">
//                     <User size={16} />
//                     <span>{blog.author}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Calendar size={16} />
//                     <span>{blog.date}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Tag size={16} />
//                     <span>{blog.category}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="p-12">
//               <div
//                 className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200"
//                 dangerouslySetInnerHTML={{ __html: blog.content }}
//               />
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// import { fetchBlogById } from "@/lib/contentful-service";
// import NavBar from "@/components/nav-bar";
// import Footer from "@/components/footer-section";
// import Link from "next/link";
// import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

// export default async function BlogDetailPage({ params }: { params: { id: string } }) {
//   const blog = await fetchBlogById(params.id);

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-neutral-900">
//         <div className="text-center">
//           <p className="text-red-500">Blog not found</p>
//           <Link href="/blogs">
//             <button className="mt-4 px-4 py-2 bg-[#2056aeff] text-white rounded-full hover:bg-[#50ade5ff] transition-colors">
//               Back to Blogs
//             </button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <NavBar />
//       <div className="min-h-screen bg-gradient-to-br bg-blue-50 dark:bg-neutral-900 py-28 xl:py-32">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <Link href="/blogs">
//             <div className="inline-flex items-center text-[#2056aeff] font-semibold mb-8 hover:text-[#50ade5ff]">
//               <ArrowLeft className="w-5 h-5 mr-2" />
//               Back to Blogs
//             </div>
//           </Link>

//           <div className="bg-white dark:bg-gray-950 rounded-3xl shadow-2xl overflow-hidden">
//             <div className="relative h-[500px] overflow-hidden">
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//               <div className="absolute bottom-8 left-8 right-8 text-white">
//                 <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
//                 <div className="flex items-center gap-4 text-sm">
//                   <div className="flex items-center gap-2">
//                     <User size={16} />
//                     <span>{blog.author}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Calendar size={16} />
//                     <span>{blog.date}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Tag size={16} />
//                     <span>{blog.category}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="p-12">
//               <div
//                 className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200"
//                 dangerouslySetInnerHTML={{ __html: blog.content }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
