// components/share-button.tsx
"use client";

import { Share2 } from "lucide-react";

export default function ShareButton({ title, content, url }: { 
  title: string;
  content: string;
  url: string;
}) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: content.substring(0, 100) + "...",
        url,
      });
    }
  };

  return (
    <button
      onClick={handleShare}
      className="ml-auto flex items-center gap-2 text-[#2056aeff] hover:text-[#50ade5ff] transition-colors duration-300"
    >
      <Share2 size={20} />
      Share
    </button>
  );
}