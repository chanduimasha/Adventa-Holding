"use client";

import { notFound } from "next/navigation";
import { News } from "../../../types/news";
import { use } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

// Sample news data - replace with your actual data source
const news: News[] = [
  {
    id: 1,
    title1: "The Evolution of Artificial Intelligence in Modern Healthcare",
    category1: "Technology",
    author1: "Sarah",
    date1: "Mar 15, 2025",
    readTime: 5,
    excerpt:
      "Exploring how AI is revolutionizing healthcare delivery and patient outcomes through innovative applications...",
    image1: "/assets/blogs/1.jpg",
    content1: `
      <h2>The Revolutionary Impact of AI in Healthcare</h2>
      <p>Artificial Intelligence is fundamentally transforming the healthcare industry, bringing unprecedented changes to how medical professionals diagnose, treat, and monitor patients. This technological revolution is not just about automation; it's about enhancing human capabilities and improving patient outcomes.</p>
      
      <h2>Key Applications in Modern Healthcare</h2>
      <p>From diagnostic assistance to personalized treatment plans, AI is being deployed across various healthcare domains. Machine learning algorithms are now capable of detecting diseases from medical images with accuracy that rivals, and sometimes exceeds, human experts.</p>
      
      <h2>The Future of AI in Healthcare</h2>
      <p>As we look to the future, the potential applications of AI in healthcare continue to expand. Predictive analytics, robot-assisted surgery, and automated administrative tasks are just the beginning. The integration of AI promises to make healthcare more efficient, accurate, and accessible to all.</p>
      
      <h2>Challenges and Considerations</h2>
      <p>While the benefits are clear, the implementation of AI in healthcare faces several challenges. Data privacy, algorithmic bias, and the need for human oversight remain crucial considerations as we advance in this field.</p>
    `,
  },
];

// interface NewsArticleProps {
//   params: Promise<{ id: string }>;
// }

export default function NewsArticle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const newsId = Number(resolvedParams.id);
  const article = news.find((n) => n.id === newsId);

  if (!article) {
    return notFound();
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = (platform: string) => {
    const shareText = encodeURIComponent(
      `Check out this article: ${article.title1}`
    );
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    };

    if (platform in shareUrls) {
      window.open(shareUrls[platform as keyof typeof shareUrls], "_blank");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <div>
        <NavBar/>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br xl:pt-32 pt-20 from-orange-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-16"
      >
        {/* Hero Section */}
        <div className="relative">
          {/* Image Container */}
          <div className="h-[60vh] w-full overflow-hidden">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
              className="h-full"
            >
              <img
                src={article.image1}
                alt={article.title1}
                className="w-full xl:h-full h-60 py-4 object-cover xl:px-40 px-4 shadow-xl"
              />
            </motion.div>
          </div>

          {/* Article Info Section - Moved below the image */}
          <div className="container mx-auto rounded-md px-4 xl:py-8 xl:mt-2 mt-[-150px]  bg-white dark:bg-gray-800/95 shadow-2xl">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-2xl pt-4 xl:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {article.title1}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-300 pb-4">
                <div className="flex items-center gap-2">
                  <User size={20} />
                  <span>{article.author1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={20} />
                  <span>{article.date1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-2 max-w-4xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 bg-white dark:bg-gray-800/50 rounded-3xl p-8 md:p-12 
                   shadow-xl backdrop-blur-lg border border-gray-100 dark:border-gray-700"
          >
            {/* Share buttons */}
            <div
              className="flex justify-between items-center mb-8 pb-8 
                       border-b border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Share this article
              </h2>
              <div className="flex gap-4">
                <button
                  onClick={() => handleShare("facebook")}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 
                         hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 
                         hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button
                  onClick={() => handleShare("linkedin")}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 
                         hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 
                         hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <LinkIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* Article text */}
            <div
              className="prose prose-lg dark:prose-invert max-w-none
                     prose-headings:text-gray-900 dark:prose-headings:text-white
                     prose-p:text-gray-700 dark:prose-p:text-gray-300
                     prose-a:text-orange-500 hover:prose-a:text-orange-600
                     prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: article.content1 || "" }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-3">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Related Topics:
                </span>
                {["AI", "Healthcare", "Technology", "Innovation"].map((tag) => (
                  <Link
                    key={tag}
                    href={`/news/tag/${tag.toLowerCase()}`}
                    className="px-4 py-1.5 rounded-full text-sm font-medium
                           bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300
                           hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Author bio */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 bg-white dark:bg-gray-800/50 rounded-3xl p-8
                   shadow-xl backdrop-blur-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-6">
              <img
                src="/assets/feedbacks/feedback2.jpeg"
                alt={article.author1}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {article.author1}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Technology writer and researcher specializing in AI and
                  healthcare innovation. Former lead researcher at HealthTech
                  Institute.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer/>
    </div>
  );
}
