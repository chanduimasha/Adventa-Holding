// app/blogs/[id]/blog-post-client.tsx
"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react";
import Link from "next/link";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer-section";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";

interface Asset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
    };
  };
}

interface BlogItemFields {
  title: string;
  category: string;
  author: string;
  date: string;
  content: string;
  image?: {
    sys: {
      id: string;
    };
  };
}

interface BlogItem {
  sys: {
    id: string;
  };
  fields: BlogItemFields;
}

interface BlogPostClientProps {
  blogId: string;
}

export default function BlogPostClient({ blogId }: BlogPostClientProps) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(
          `https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/entries?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4&content_type=author`
        );
        const data = await response.json();

        // Create asset map
        const assetMap = new Map();
        if (data.includes?.Asset) {
          data.includes.Asset.forEach((asset: Asset) => {
            assetMap.set(asset.sys.id, asset.fields.file.url);
          });
        }

        // Find the specific blog post
        const blogItem = data.items.find((item: BlogItem) => item.sys.id === blogId);
        if (blogItem) {
          const imageAssetId = blogItem.fields.image?.sys?.id;
          const imageUrl = imageAssetId ? assetMap.get(imageAssetId) : null;

          const currentBlog = {
            id: blogItem.sys.id,
            title: blogItem.fields.title,
            category: blogItem.fields.category,
            author: blogItem.fields.author,
            date: blogItem.fields.date,
            content: blogItem.fields.content,
            image: imageUrl ? `https:${imageUrl}` : "/placeholder-image.jpg",
          };

          setBlog(currentBlog);

          // Find related posts
          const related = data.items
            .filter(
              (item: BlogItem) =>
                item.sys.id !== blogId &&
                item.fields.category === blogItem.fields.category
            )
            .slice(0, 3)
            .map((item: BlogItem) => {
              const relatedImageAssetId = item.fields.image?.sys?.id;
              const relatedImageUrl = relatedImageAssetId
                ? assetMap.get(relatedImageAssetId)
                : null;

              return {
                id: item.sys.id,
                title: item.fields.title,
                category: item.fields.category,
                author: item.fields.author,
                date: item.fields.date,
                content: item.fields.content,
                image: relatedImageUrl
                  ? `https:${relatedImageUrl}`
                  : "/placeholder-image.jpg",
              };
            });

          setRelatedPosts(related);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setIsLoading(false);
      }
    };

    fetchBlogData();
  }, [blogId]); // Now using blogId from props instead of params.id

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-neutral-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#2056aeff]"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-neutral-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Blog Post Not Found
          </h1>
          <Link
            href="/blogs"
            className="text-[#2056aeff] hover:text-[#50ade5ff] transition-colors duration-300"
          >
            Return to Blog List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 dark:bg-neutral-900 min-h-screen">
      <NavBar />
      
      <main className="container mx-auto px-4 xl:py-32 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blogs"
            className="inline-flex items-center text-[#2056aeff] hover:text-[#50ade5ff] mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Link>

          <div className="bg-white dark:bg-gray-950 rounded-3xl shadow-xl overflow-hidden">
            <div className="relative h-96">
              <motion.img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="p-8 -mt-24 relative">
              <div className="bg-white dark:bg-gray-950 rounded-2xl p-6 shadow-lg">
                <span className="px-4 py-2 bg-[#2056aeff] text-white rounded-full text-sm font-semibold">
                  {blog.category}
                </span>

                <h1 className="text-4xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
                  {blog.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <User size={20} className="text-[#2056aeff]" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className="text-[#2056aeff]" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag size={20} className="text-[#2056aeff]" />
                    <span>{blog.category}</span>
                  </div>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: blog.title,
                          text: blog.content.substring(0, 100) + "...",
                          url: window.location.href,
                        });
                      }
                    }}
                    className="ml-auto flex items-center gap-2 text-[#2056aeff] hover:text-[#50ade5ff] transition-colors duration-300"
                  >
                    <Share2 size={20} />
                    Share
                  </button>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {blog.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Related Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((post, index) => (
                  <Link key={post.id} href={`/blogs/${post.id}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group bg-white dark:bg-gray-950 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-[#2056aeff] transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                          {post.content}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}