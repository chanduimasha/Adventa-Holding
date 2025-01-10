// "use client";

// import NewsCard from "@/components/news-card";
// import { News } from "../../types/news";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Search } from "lucide-react";
// import NavBar from "@/components/nav-bar";
// import Footer from "@/components/footer-section";

// const news: News[] = [
//   // Technology News
//   {
//     id: 1,
//     title: "The Evolution of Artificial Intelligence in Modern Healthcare",
//     category: "Technology",
//     author: "Sarah",
//     date: "Mar 15, 2024",
//     readTime: 5,
//     excerpt:
//       "Exploring how AI is revolutionizing healthcare delivery and patient outcomes through innovative applications...",
//     image: "/assets/blogs/1.jpg",
//   },
//   {
//     id: 2,
//     title: "Web3 Technologies Reshaping the Digital Landscape",
//     category: "Technology",
//     author: "Michael",
//     date: "Mar 18, 2024",
//     readTime: 7,
//     excerpt:
//       "Discover how blockchain, NFTs, and decentralized platforms are transforming online interactions and digital ownership...",
//     image: "/assets/blogs/2.png",
//   },
//   {
//     id: 3,
//     title: "5G Networks: The Future of Connectivity",
//     category: "Technology",
//     author: "James",
//     date: "Mar 20, 2024",
//     readTime: 6,
//     excerpt:
//       "Exploring the transformative impact of 5G technology on communication, IoT devices, and smart cities...",
//     image: "/assets/blogs/3.jpg",
//   },

//   // Marketing News
//   {
//     id: 4,
//     title: "Data-Driven Marketing Strategies for 2024",
//     category: "Marketing",
//     author: "Emma",
//     date: "Mar 19, 2024",
//     readTime: 8,
//     excerpt:
//       "Learn how successful companies are leveraging big data and analytics to create personalized marketing campaigns...",
//     image: "/assets/blogs/4.jpeg",
//   },
//   {
//     id: 5,
//     title: "The Rise of Influencer Marketing in B2B",
//     category: "Marketing",
//     author: "Sophie",
//     date: "Mar 17, 2024",
//     readTime: 6,
//     excerpt:
//       "How B2B companies are successfully incorporating influencer marketing into their strategy...",
//     image: "/assets/blogs/5.png",
//   },
//   {
//     id: 6,
//     title: "Content Marketing Trends Dominating 2024",
//     category: "Marketing",
//     author: "David",
//     date: "Mar 16, 2024",
//     readTime: 7,
//     excerpt:
//       "Exploring the latest content marketing strategies that are driving engagement and conversions...",
//     image: "/assets/blogs/6.png",
//   },

//   {
//     id: 7,
//     title: "AI-Powered Advertising: The Next Frontier",
//     category: "Advertisement",
//     author: "Lisa",
//     date: "Mar 20, 2024",
//     readTime: 5,
//     excerpt:
//       "How artificial intelligence is revolutionizing ad targeting and campaign optimization...",
//     image: "/assets/blogs/7.jpg",
//   },
//   {
//     id: 8,
//     title: "Video Advertising Trends for Social Media",
//     category: "Advertisement",
//     author: "Mark",
//     date: "Mar 18, 2024",
//     readTime: 6,
//     excerpt:
//       "Discover the latest video advertising formats and strategies driving engagement on social platforms...",
//     image: "/assets/blogs/8.jpg",
//   },
//   {
//     id: 9,
//     title: "Programmatic Advertising in 2024",
//     category: "Advertisement",
//     author: "Rachel",
//     date: "Mar 16, 2024",
//     readTime: 7,
//     excerpt:
//       "Understanding the evolution of programmatic advertising and its impact on digital marketing...",
//     image: "/assets/blogs/9.png",
//   },
// ];

// const categories = [...new Set(news.map((item) => item.category))];

// export default function NewsPage() {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   const filteredNews = news.filter((item) => {
//     const matchesCategory = selectedCategory
//       ? item.category === selectedCategory
//       : true;
//     const matchesSearch =
//       item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   return (
//     <div>
//       <NavBar/>
//       <div
//         className="min-h-screen bg-blue-50 dark:bg-neutral-900"
//       >
//         <div className="relative">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="container mx-auto px-4 py-32"
//           >
//             <motion.div
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               className="text-center mb-16"
//             >
//               <h1
//                 className="xl:text-6xl text-5xl font-bold mb-6 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff]
//                          text-transparent bg-clip-text"
//               >
//                 Latest News & Updates
//               </h1>
//               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//                 Stay informed with our curated collection of breaking news,
//                 insights, and in-depth analysis
//               </p>
//             </motion.div>

//             <div className="mb-12 max-w-2xl mx-auto">
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search news..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-gray-800/50
//                          border border-gray-300 dark:border-gray-700 focus:ring-2
//                          focus:ring-[#2056aeff] focus:border-transparent outline-none
//                          transition-all duration-300"
//                 />
//               </div>
//             </div>

//             <div className="flex justify-center gap-4 mb-16 flex-wrap">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setSelectedCategory(null)}
//                 className={`px-6 py-1 rounded-full transition-all duration-300 transform
//                        ${
//                          !selectedCategory
//                            ? "bg-[#2056aeff] text-white shadow-lg shadow-[#50ade5ff]"
//                            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-[#50ade5ff] hover:text-white"
//                        }`}
//               >
//                 All News
//               </motion.button>
//               {categories.map((category) => (
//                 <motion.button
//                   key={category}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-6 py-1 rounded-full transition-all duration-300 transform
//                          ${
//                            selectedCategory === category
//                              ? "bg-[#2056aeff] text-white shadow-lg shadow-[#50ade5ff]"
//                              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-[#50ade5ff] hover:text-white"
//                          }`}
//                 >
//                   {category}
//                 </motion.button>
//               ))}
//             </div>

//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             >
//               {filteredNews.map((item, index) => (
//                 <NewsCard key={item.id} news={item} index={index} />
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// }

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

  // const filteredNews = news.filter((item) => {
  //   const matchesCategory = selectedCategory
  //     ? item.category1 === selectedCategory
  //     : true;
  //   const matchesSearch =
  //     item.title1.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
  //   return matchesCategory && matchesSearch;
  // });

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

            {/* <div className="mb-12 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-gray-800/50 
                         border border-gray-300 dark:border-gray-700 focus:ring-2 
                         focus:ring-[#2056aeff] focus:border-transparent outline-none
                         transition-all duration-300"
                />
              </div>
            </div> */}

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
