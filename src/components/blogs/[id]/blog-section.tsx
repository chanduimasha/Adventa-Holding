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