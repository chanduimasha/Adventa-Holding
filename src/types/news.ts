export interface News {
    id: number;
    title: string;
    category: string;
    author: string;
    date: string;
    readTime: number;
    excerpt: string;
    image: string;
    content?: string;
  }