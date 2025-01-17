"use client";

import NewsCard from "@/components/news-card";
import { News } from "../../types/news";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer-section";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [news, setNews] = useState<News[]>([]);

  const categories = [...new Set(news.map((item) => item.category1))];
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
  
  interface NewsItemFields {
    title1: string;
    category1: string;
    author1: string;
    date1: string;
    content1: string;
    image1?: {
      sys: {
        id: string;
      };
    };
  }
  
  interface NewsItem {
    sys: {
      id: string;
    };
    fields: NewsItemFields;
  }

  useEffect(() => {
    fetch(
      "https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/entries?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4&content_type=news"
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
        

        const news = data.items.map((item: NewsItem) => {
          // Get the asset ID from the image reference
          const imageAssetId = item.fields.image1?.sys?.id;
          // Get the image URL from the asset map
          const imageUrl = imageAssetId ? assetMap.get(imageAssetId) : null;
        
          return {
            id: item.sys.id,
            title1: item.fields.title1,
            category1: item.fields.category1,
            author1: item.fields.author1,
            date1: item.fields.date1,
            content1: item.fields.content1,
            // Construct the full image URL
            image1: imageUrl ? `https:${imageUrl}` : "/placeholder-image.jpg",
          };
        });

        setNews(news);
        console.log("Processed news:", news);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);


  const filteredNews = selectedCategory
    ? news.filter((news) => news.category1 === selectedCategory)
    : news;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-blue-50 dark:bg-neutral-900">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto px-4 py-32"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1
                className="xl:text-6xl text-5xl font-bold mb-6 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] 
                         text-transparent bg-clip-text"
              >
                Latest News & Updates
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Stay informed with our curated collection of breaking news,
                insights, and in-depth analysis
              </p>
            </motion.div>

            <div className="flex justify-center gap-4 mb-16 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-1 rounded-full transition-all duration-300 transform
                       ${
                         !selectedCategory
                           ? "bg-[#2056aeff] text-white shadow-lg shadow-[#50ade5ff]"
                           : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-[#50ade5ff] hover:text-white"
                       }`}
              >
                All News
              </motion.button>
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-1 rounded-full transition-all duration-300 transform
                         ${
                           selectedCategory === category
                             ? "bg-[#2056aeff] text-white shadow-lg shadow-[#50ade5ff]"
                             : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-[#50ade5ff] hover:text-white"
                         }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredNews.map((item, index) => (
                <NewsCard key={item.id} news={item} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
