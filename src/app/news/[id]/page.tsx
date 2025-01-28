import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer-section";
import { News } from "@/types/news";


interface PageProps {
  params: Promise<{ id: string }>;
}

async function fetchNewsDetails(id: string): Promise<News | null> {
  try {
    const response = await fetch(
      `https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/entries/${id}?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const assetResponse = await fetch(
      `https://cdn.contentful.com/spaces/qpoyn7haps0t/environments/master/assets/${data.fields.image1?.sys?.id}?access_token=_R9BOpOvC4cN_MGJb3ohY6tQowHI7BHQkWFza4N15w4`,
      { next: { revalidate: 3600 } }
    );

    const assetData = await assetResponse.json();
    const imageUrl = assetData?.fields?.file?.url || "/placeholder-image.jpg";

    return {
      id: data.sys.id,
      title1: data.fields.title1,
      category1: data.fields.category1,
      author1: data.fields.author1,
      date1: data.fields.date1,
      content1: data.fields.content1,
      image1: `https:${imageUrl}`,
      readTime: Math.ceil(data.fields.content1.split(" ").length / 200), // Approximate read time
      excerpt: data.fields.content1.substring(0, 160) + "...",
    };
  } catch (error) {
    console.error("Error fetching news details:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const news = await fetchNewsDetails(resolvedParams.id);

  if (!news) {
    return {
      title: "News Article Not Found",
      description: "The requested news article could not be found.",
    };
  }

  return {
    title: `${news.title1} | Latest News`,
    description: news.content1?.substring(0, 160),
    openGraph: {
      title: news.title1,
      description: news.content1?.substring(0, 160),
      images: [news.image1],
    },
  };
}

export default async function NewsDetails({ params }: PageProps) {
  const resolvedParams = await params;
  const news = await fetchNewsDetails(resolvedParams.id);

  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow bg-blue-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 py-28 xl:py-32">
          <Link
            href="/news"
            className="inline-flex items-center text-[#2056aeff] hover:text-[#50ade5ff] transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to News
          </Link>

          <article className="bg-white dark:bg-gray-950 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="relative h-[500px] overflow-hidden">
              <img
                src={news.image1}
                alt={news.title1}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute top-6 right-6">
                <span className="px-4 py-2 text-sm font-semibold text-white bg-[#2056aeff] rounded-full backdrop-blur-md shadow-lg">
                  {news.category1}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {news.title1}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-[#2056aeff]" />
                  <span>{news.author1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-[#2056aeff]" />
                  <span>{news.date1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-[#2056aeff]" />
                  <span>{news.readTime} min read</span>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                {news.content1?.split("\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Social Share Section */}
              <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Share this article
                </h3>
                <div className="flex gap-4">
                  {/* Add your social share buttons here */}
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
