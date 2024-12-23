"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

// Define the type for a navigation link
type NavLink = {
  name: string;
  path: string;
  subLinks?: NavLink[]; // Optional sub-links for dropdown
};

const links: NavLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
    subLinks: [
      { name: "Our Journey", path: "/about/ourjourney" },
      { name: "Leadership", path: "/about/leadership" },
    ],
  },
  {
    name: "ESG",
    path: "/esg",
    subLinks: [
      { name: "Environmental", path: "/esg/environmental" },
      { name: "Social", path: "/esg/social" },
      { name: "Governance", path: "/esg/governance" },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Careers",
    path: "/careers",
  },
  {
    name: "Subsidiaries",
    path: "/subsidiaries",
    subLinks: [
      { name: "NetworkStore.lk", path: "/subsidiaries/networkstore" },
      { name: "Auxano", path: "/subsidiaries/auxano" },
      { name: "Eco Lanka", path: "/subsidiaries/ecolanka" },
      { name: "Saroda", path: "/subsidiaries/saroda" },
    ],
  },
  {
    name: "News",
    path: "/news",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false); // State to control sheet open/close

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeSheet = () => {
    setIsOpen(false); // Function to close the sheet
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-black" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-white">
        <div className="text-black mt-16 mb-12 text-center text-2xl">
          <Link href="/" onClick={closeSheet}>
            <h1 className="text-3xl font-bold text-[#2056aeff] text-center">
              ADVENTA
              <br />
              <p className="text-lg font-bold text-gray-700">
                Infinite Possibilities
              </p>
            </h1>
          </Link>
        </div>
        <nav className="text-black flex flex-col justify-center items-center gap-4">
          {links.map((link, index) => (
            <div key={index} className="w-full">
              {link.subLinks ? (
                <div
                  onClick={() => toggleDropdown(link.name)}
                  className={`
                    flex 
                    justify-center 
                    items-center 
                    cursor-pointer 
                    text-lg 
                    capitalize 
                    pb-2
                    ${
                      pathname.startsWith(link.path)
                        ? "text-[#2056aeff] font-semibold"
                        : "hover:text-[#2056aeff]"
                    }
                    transition-colors 
                    duration-300
                    relative
                  `}
                >
                  {link.name}
                  <ChevronDown
                    className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                      openDropdown === link.name ? "rotate-180" : ""
                    } ${
                      pathname.startsWith(link.path)
                        ? "text-[#2056aeff]"
                        : "text-gray-700"
                    }`}
                    strokeWidth={2.5}
                  />
                </div>
              ) : (
                <a
                  href={link.path}
                  onClick={closeSheet} // Close the sheet when clicked
                  className={`
                    block 
                    text-center 
                    text-lg 
                    capitalize 
                    pb-2
                    relative
                    ${
                      pathname === link.path
                        ? "text-[#2056aeff] font-semibold"
                        : "hover:text-[#2056aeff]"
                    }
                    transition-colors 
                    duration-300
                  `}
                >
                  {link.name}
                </a>
              )}

              <AnimatePresence>
                {link.subLinks && openDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col items-center mt-2">
                      {link.subLinks.map((subLink, subIndex) => (
                        <a
                          href={subLink.path}
                          key={subIndex}
                          onClick={closeSheet} // Close the sheet when clicked
                          className={`
                            block 
                            text-center 
                            py-2 
                            text-[16px]
                            w-full
                            relative
                            ${
                              pathname === subLink.path
                                ? "bg-indigo-50 text-[#2056aeff] font-medium"
                                : "text-gray-700 hover:text-[#2056aeff]"
                            }
                            transition-colors 
                            duration-200
                            group
                          `}
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
