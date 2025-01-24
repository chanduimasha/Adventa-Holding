export interface Blog {
  id: string | number;  // Allow both string and number
  title: string;
  category: string;
  author: string;
  date: string;
  content: string;
  image: string;
}