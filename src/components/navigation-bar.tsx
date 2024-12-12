"use client";

import Link from "next/link";
import Nav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Header: React.FC = () => {
  return (
    <header className="py-5 xl:py-6 text-black bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl xl:text-4xl font-bold animate-pulse">
            Aventa <span className="text-xl xl:text-2xl font-bold animate-pulse">Holdings</span>
            <span className="text-orange-600">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;