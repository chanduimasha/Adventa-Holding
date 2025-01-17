import Link from "next/link";
import Nav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";

const Header: React.FC = () => {
  return (
    <header className="py-1 xl:py-2 text-black bg-white dark:bg-neutral-950 dark:text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-4">
            <Image
              src="/assets/logo/6.png"
              alt="Company Logo"
              width={180}
              height={180}
              className="rounded-lg transform transition-transform duration-300 group-hover:scale-125"
            />
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav /> <ThemeToggle />
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
