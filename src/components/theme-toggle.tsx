import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
  onClick={toggleTheme}
  className="flex justify-center items-center p-2 w-8 h-8 rounded-full bg-gray-900 dark:bg-gray-200 text-black dark:text-white"
>
  {theme === "light" ? "🌙" : "☀️"}
</button>
  );
}
