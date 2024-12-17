import Link from "next/link";
import { Blog } from "../types/blog";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
        <h3 className="text-sm font-semibold text-blue-600">{blog.category}</h3>
        <h2 className="text-lg font-bold mt-2">{blog.title}</h2>
        <p className="text-gray-500 mt-2">{blog.author} • {blog.date}</p>
      </div>
    </Link>
  );
}