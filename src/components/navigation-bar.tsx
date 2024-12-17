"use client";

import Link from "next/link";
import Nav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="py-4 xl:py-4 text-black bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/back14.png" // Replace with your image path
              alt="Hero Image"
              width={30} // Adjust size to match your design
              height={30}
              className="rounded-lg transform transition-transform duration-300 group-hover:scale-125"
            />
            <h1 className="text-2xl xl:text-4xl font-bold">
              Aventa{" "}
              <span className="text-xl xl:text-2xl font-bold text-orange-600">
                Holdings
              </span>
              <span className="text-orange-600">.</span>
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
