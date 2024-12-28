"use client";
import React from "react";
import Link from "next/link";
import Social from "./social-media";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt, FaBell } from "react-icons/fa";
import { Input } from "./ui/input";
import Image from "next/image";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 711 122 833",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "adventa@example.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "262 Kaduwela Rd, Battaramulla 10120",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative overflow-hidden shadow-2xl">
      {/* Background Animation */}
      {/* <div className="absolute inset-0 opacity-20">
        <div className="bg-gradient-to-r from-blue-800 via-purple-500 to-blue-200 animate-pulse h-full w-full"></div>
      </div> */}

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
        {/* Logo and About Section */}
        <div>
          <div className="flex items-center space-x-4">
            <Image
              src="/assets/logo/4.png"
              alt="Company Logo"
              width={220}
              height={220}
              className="rounded-lg transform transition-transform duration-300 group-hover:scale-125"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <Social
              containerStyles="flex gap-8 justify-left pt-10"
              iconStyles="xl:w-[30px] xl:h-[30px] w-9 h-9 border border-blue-100 rounded-full flex justify-center items-center bg-[#2056aeff] text-blue-100 text-base hover:bg-[#50ade5ff] hover:text-primary hover:transition-all duration-500"
            />
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-lg font-semibold text-[#2056aeff]">Services</h2>
          <ul className="mt-4 space-y-2">
            <li className="hover:text-[#2056aeff] transition-colors">
              <Link href="/">Web Design</Link>
            </li>
            <li className="hover:text-[#2056aeff] transition-colors">
              <Link href="/">App Development</Link>
            </li>
            <li className="hover:text-[#2056aeff] transition-colors">
              <Link href="/">Cloud Services</Link>
            </li>
            <li className="hover:text-[#2056aeff] transition-colors">
              <Link href="/">Domain and Hosting</Link>
            </li>
            <li className="hover:text-[#2056aeff] transition-colors">
              <Link href="/">SEO Optimization</Link>
            </li>
            <li className="hover:text-[#2056aeff] transition-colors">
              <Link href="/">Social Media</Link>
            </li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h2 className="text-lg font-semibold text-[#2056aeff]">Information</h2>
          <ul className="mt-4 space-y-2">
            <li className="hover:text-[#2056aeff] transition-colors">
              <Link href="/">About</Link>
            </li>
            <li className="hover:text-[#2056aeff] transition-colors">
              <Link href="/">Pricing</Link>
            </li>
            <li className="hover:text-[#2056aeff] transition-colors">
              <Link href="/">Team</Link>
            </li>
            <li className="hover:text-[#2056aeff] transition-colors">
              <Link href="/">FAQs</Link>
            </li>
            <li className="hover:text-[#2056aeff] transition-colors">
              <Link href="/">Blog</Link>
            </li>
            <li className="hover:text-[#2056aeff] transition-colors">
              <Link href="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold text-[#2056aeff]">Contacts</h2>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 mt-5">
            <ul className="flex flex-col gap-5">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-[32px] h-[32px] xl:w-[38px] xl:h-[38px] bg-[#27272c] text-[#2056aeff] rounded-md flex items-center justify-center">
                    <div className="text-[18px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    {/* <p className="text-white/60">{item.title}</p> */}
                    <h3 className="text-white">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="mt-6 text-lg font-semibold text-[#2056aeff]">
            Newsletter
          </h2>
          <p className="text-sm mt-2">
            Don not miss to subscribe to our new feeds.
          </p>
          <div className="mt-4 flex items-center gap-1">
            <Input type="email" name="email" placeholder="Email Address" />
            <button className="flex items-center gap-2 px-[14px] py-[14px] bg-[#2056aeff] text-white text-base font-semibold rounded-md hover:bg-[#50ade5ff] transition-all duration-300">
              <FaBell className="text-lg " />
            </button>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-[#2056aeff] my-6 mx-auto w-4/5" />

      <div className="container mx-auto px-4 text-center pt-2">
        <p className="text-lg">
          © 2024 Adventa Infinite Possibilities. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
