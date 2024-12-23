"use client";

import Link from "next/link";
import Nav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="py-1 xl:py-2 text-black bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-4">
            <Image
              src="/assets/logo/5.png"
              alt="Company Logo"
              width={50}
              height={50}
              className="rounded-lg transform transition-transform duration-300 group-hover:scale-125"
            />
            <h1 className="text-xl xl:text-3xl font-bold text-[#2056aeff] text-center">
              ADVENTA<br/>
              <p className="text-sm xl:text-sm font-bold text-gray-700">
                Infinite Possibilities
              </p>
            </h1>
          </div>
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
