"use client";

import HeroSection from "@/components/hero-section";
import NavBar from "@/components/nav-bar";
import ContactForm from "@/components/contact-form";
import BlogSection from "@/components/blogs/blog-section";
import NewsSection from "@/components/news/news-section";
import IndustriesSection from "@/components/industries";
import Footer from "@/components/footer-section";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <HeroSection />
      <IndustriesSection />
      <NewsSection />
      <BlogSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
