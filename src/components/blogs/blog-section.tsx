import { useEffect, useState } from "react";
import BlogCard from "@/components/blog-card";
import { Blog } from "../../types/blog";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogSection: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

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

  interface BlogItem {
    sys: {
      id: string;
    };
    fields: {
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
    };
  }
  
  useEffect(() => {
    fetch("https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/entries?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4&content_type=author")
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
          const imageAssetId = item.fields.image?.sys?.id;
          const imageUrl = imageAssetId ? assetMap.get(imageAssetId) : null;
        
          return {
            id: item.sys.id,
            title: item.fields.title,
            category: item.fields.category,
            author: item.fields.author,
            date: item.fields.date,
            content: item.fields.content,
            image: imageUrl ? `https:${imageUrl}` : '/placeholder-image.jpg',
          };
        });
        
        setBlogs(blogs);
        // console.log("Processed blogs:", blogs);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  const latestBlogs = blogs.slice(0, 3); // Adjust as needed

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-neutral-950">
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
