import { useEffect, useState } from "react";
import NewsCard from "@/components/news-card";
import { News } from "../../types/news";
import { motion } from "framer-motion";
import Link from "next/link";

const NewsSection: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);

  interface Sys {
    id: string;
  }
  
  interface Fields {
    file: {
      url: string;
    };
  }
  
  interface Asset {
    sys: Sys;
    fields: Fields;
  }
  
  interface Item {
    sys: {
      id: string;
    };
    fields: {
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
    };
  }
  

  useEffect(() => {
    fetch("https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/entries?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4&content_type=news")

      .then((res) => res.json())
      .then((data) => {
        // Create a map of asset IDs to their URLs
        const assetMap = new Map();
        if (data.includes?.Asset) {
          data.includes.Asset.forEach((asset: Asset) => {
            assetMap.set(asset.sys.id, asset.fields.file.url);
          });
        }        

        const news = data.items.map((item: Item) => {
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
            image1: imageUrl ? `https:${imageUrl}` : '/placeholder-image.jpg',
          };
        });
        
        setNews(news);
        // console.log("Processed news:", news);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  const latestNews = news.slice(0, 3); // Adjust as needed

  return (
    <div className="min-h-screen bg-blue-50 shadow-2xl dark:bg-neutral-950">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto px-4 py-16"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="xl:text-6xl text-5xl font-bold mb-6 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text">
              Latest News & Updates
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay informed with our curated collection of breaking news,
              insights, and in-depth analysis
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {latestNews.map((item, index) => (
              <NewsCard key={item.id} news={item} index={index} />
            ))}
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center items-center"
        >
          <Link
            href="/news"
            className="text-xl text-[#2056aeff] dark:text-[#2056aeff] font-semibold flex items-center hover:text-[#50ade5ff] dark:hover:text-[#50ade5ff]"
          >
            Read more news
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

export default NewsSection;