"use client";
import React from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

// Links Data
const generalLinks = [
  { name: "Careers", href: "/careers" },
  { name: "Investors", href: "/investors" },
  { name: "Insights", href: "/insights" },
  { name: "Partners", href: "/partners" },
  { name: "Company Overview", href: "/company-overview" },
  { name: "Client Success", href: "/client-success" },
  { name: "Press Releases", href: "/press-releases" },
  { name: "Glossary", href: "/glossary" },
];

const industriesLinks = [
  { name: "Banking & Financial Services", href: "/industries/banking" },
  { name: "Insurance", href: "/industries/insurance" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Life Sciences", href: "/industries/life-sciences" },
  { name: "Consumer Tech", href: "/industries/consumer-tech" },
  { name: "Industrial", href: "/industries/industrial" },
  { name: "Software & Hi-Tech", href: "/industries/software-hi-tech" },
  { name: "Telecom & Media", href: "/industries/telecom-media" },
];

const servicesLinks = [
  {
    name: "Application Development & Management",
    href: "/services/app-development",
  },
  { name: "Consulting", href: "/services/consulting" },
  { name: "Data & Analytics", href: "/services/data-analytics" },
  { name: "Enterprise IT Security", href: "/services/it-security" },
  { name: "Intelligent Automation", href: "/services/intelligent-automation" },
  { name: "Open Source Hub", href: "/services/open-source" },
  { name: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
  { name: "CX Transformation", href: "/services/cx-transformation" },
];

const bottomLinks = [
  { name: "Sitemap", href: "/sitemap" },
  { name: "Privacy Notice", href: "/privacy-notice" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Terms of Use", href: "/terms-of-use" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      {/* Main Container */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: General Links */}
        <div>
          <h2 className="text-lg font-semibold text-orange-500 mb-4">General</h2>
          <ul className="space-y-2">
            {generalLinks.map((link) => (
              <li
                key={link.name}
                className="hover:text-orange-500 transition-colors"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Industries */}
        <div>
          <h2 className="text-lg font-semibold text-orange-500 mb-4">
            Industries
          </h2>
          <ul className="space-y-2">
            {industriesLinks.map((link) => (
              <li
                key={link.name}
                className="hover:text-orange-500 transition-colors"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h2 className="text-lg font-semibold text-orange-500 mb-4">
            Services
          </h2>
          <ul className="space-y-2">
            {servicesLinks.map((link) => (
              <li
                key={link.name}
                className="hover:text-orange-500 transition-colors"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <hr className="border-t border-orange-600 my-8 mx-auto w-10/12" />

      {/* Footer Bottom: Social Media Icons */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>© 2024 Aventa Holdings</p>
          <ul className="flex flex-wrap justify-center gap-6">
            {bottomLinks.map((link) => (
              <li
                key={link.name}
                className="hover:text-orange-500 transition-colors"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Links */}
    </footer>
  );
};

export default Footer;
