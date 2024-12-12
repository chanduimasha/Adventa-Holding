// "use client";

// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { CiMenuFries } from "react-icons/ci";

// // Define the type for links
// type LinkItem = {
//   name: string;
//   path: string;
// };

// const links: LinkItem[] = [
//   {
//     name: "home",
//     path: "/",
//   },
//   {
//     name: "about",
//     path: "/about",
//   },
//   {
//     name: "ESG",
//     path: "/esg",
//   },
//   {
//     name: "contact",
//     path: "/contact",
//   },
//   {
//     name: "careers",
//     path: "/careers",
//   },
//   {
//     name: "subsidiaries",
//     path: "/subsidiaries",
//   },
//   {
//     name: "news",
//     path: "/news",
//   },
//   {
//     name: "blogs",
//     path: "/blogs",
//   },
// ];

// const MobileNav = () => {
//   const pathname = usePathname(); // Type inferred as string | null
//   return (
//     <Sheet>
//       <SheetTrigger className="flex justify-center items-center">
//         <CiMenuFries className="text-[32px] text-fuchsia-500" />
//       </SheetTrigger>
//       <SheetContent className="flex flex-col">
//         <div className="text-white mt-32 mb-20 text-center text-2xl">
//           <Link href="/">
//             <h1 className="text-3xl font-semibold">
//               Aventa Holdings<span className="text-fuchsia-500">.</span>
//             </h1>
//           </Link>
//         </div>
//         <nav className="text-white flex flex-col justify-center items-center gap-6">
//           {links.map((link, index) => {
//             return (
//               <Link
//                 href={link.path}
//                 key={index}
//                 className={`${
//                   link.path === pathname &&
//                   "text-fuchsia-500 border-b-2 border-fuchsia-500"
//                 } text-xl capitalize hover:text-fuchsia-500 transition-all`}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </nav>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default MobileNav;

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

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-white" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-gradient-to-b from-gray-900 to-blue-800">
        <div className="text-black mt-32 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl font-semibold text-white">
              Aventa Holdings<span className="text-indigo-600">.</span>
            </h1>
          </Link>
        </div>
        <nav className="text-white flex flex-col justify-center items-center gap-6">
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
                    text-xl 
                    capitalize 
                    pb-2
                    ${pathname.startsWith(link.path)
                      ? "text-indigo-700 font-semibold"
                      : "hover:text-indigo-600"
                    }
                    transition-colors 
                    duration-300
                    relative
                  `}
                >
                  {link.name}
                  <ChevronDown
                    className={`
                      ml-2 
                      h-5 
                      w-5 
                      transition-transform 
                      duration-300 
                      ${openDropdown === link.name ? "rotate-180" : ""}
                      ${pathname.startsWith(link.path)
                        ? "text-indigo-600"
                        : "text-gray-500"
                      }
                    `}
                    strokeWidth={2.5}
                  />
                  {pathname.startsWith(link.path) && (
                    <motion.div
                      layoutId="underline"
                      {...{
                        className:
                          "absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600",
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              ) : (
                // <Link
                //   href={link.path}
                //   className={`
                //     block 
                //     text-center 
                //     text-xl 
                //     capitalize 
                //     pb-2
                //     relative
                //     ${pathname === link.path
                //       ? "text-indigo-700 font-semibold"
                //       : "hover:text-indigo-600"
                //     }
                //     transition-colors 
                //     duration-300
                //   `}
                // >
                //   {link.name}
                //   {pathname === link.path && (
                //     <motion.div
                //       layoutId="underline"
                //       {...{
                //         className:
                //           "absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600",
                //       }}
                //       initial={{ scaleX: 0 }}
                //       animate={{ scaleX: 1 }}
                //       transition={{ duration: 0.3 }}
                //     />
                //   )}
                // </Link>
                <a
                  href={link.path} // Use the 'path' as the href for the <a> tag
                  target={link.path.startsWith("http") ? "_blank" : undefined} // Open external links in a new tab
                  rel={link.path.startsWith("http") ? "noopener noreferrer" : undefined} // Security for external links
                  className={`
                    block 
                    text-center 
                    text-xl 
                    capitalize 
                    pb-2
                    relative
                    ${pathname === link.path
                      ? "text-indigo-700 font-semibold"
                      : "hover:text-indigo-600"
                    }
                      transition-colors 
                      duration-300
                    `}
                >
                  {link.name}
                  {pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              )}

              <AnimatePresence>
                {link.subLinks && openDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    {...{
                      className:
                        "overflow-hidden",
                    }}
                  >
                    <div className="flex flex-col items-center mt-2 ">
                      {link.subLinks.map((subLink, subIndex) => (
                        // <Link
                        //   key={subIndex}
                        //   href={subLink.path}
                        //   className={`
                        //     block 
                        //     text-center 
                        //     py-2 
                        //     text-[16px]
                        //     w-full
                        //     relative
                        //     ${
                        //       pathname === subLink.path
                        //         ? "bg-indigo-50 text-indigo-700 font-medium"
                        //         : "text-white hover:text-indigo-500"
                        //     }
                        //     transition-colors 
                        //     duration-200
                        //     group
                        //   `}
                        // >
                        //   {subLink.name}
                        // </Link>
                        <a
                          href={subLink.path}
                          key={subIndex}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            block 
                            text-center 
                            py-2 
                            text-[16px]
                            w-full
                            relative
                            ${pathname === subLink.path
                              ? "bg-indigo-50 text-indigo-700 font-medium"
                              : "text-white hover:text-indigo-500"
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