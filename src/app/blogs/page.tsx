"use client";

import BlogCard from "@/components/blog-card";
import { Blog } from "../../types/blog";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer-section";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const categories = [...new Set(blogs.map((blog) => blog.category))];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

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
  

  useEffect(() => {
    fetch(
      "https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/entries?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4&content_type=author"
    )
      .then((res) => res.json())
      .then((data) => {
        // Create a map of asset IDs to their URLs
        const assetMap = new Map();
        if (data.includes?.Asset) {
          data.includes.Asset.forEach((asset: Asset) => {
            assetMap.set(asset.sys.id, asset.fields.file.url);
          });
        }

        const blogs = data.items.map((item: BlogItem) => {
          // Get the asset ID from the image reference
          const imageAssetId = item.fields.image?.sys?.id;
          // Get the image URL from the asset map
          const imageUrl = imageAssetId ? assetMap.get(imageAssetId) : null;
        
          return {
            id: item.sys.id,
            title: item.fields.title,
            category: item.fields.category,
            author: item.fields.author,
            date: item.fields.date,
            content: item.fields.content,
            // Construct the full image URL
            image: imageUrl ? `https:${imageUrl}` : "/placeholder-image.jpg",
          };
        });
        

        setBlogs(blogs);
        console.log("Processed blogs:", blogs);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br bg-blue-50 dark:bg-neutral-900">
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
              className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text"
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
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full transition-all 
                  ${
                    !selectedCategory
                      ? "bg-[#2056aeff] text-white shadow-lg shadow-[#50ade5ff]"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-[#50ade5ff] hover:text-white"
                  }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all 
                    ${
                      selectedCategory === category
                        ? "bg-[#2056aeff] text-white shadow-lg shadow-[#50ade5ff]"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-[#50ade5ff] hover:text-white"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
