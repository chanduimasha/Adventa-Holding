"use client";

import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/chanduimasha" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/chandurathnayake/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@Uplift_Universe_Story" },
  { icon: <FaTwitter />, path: "https://x.com/ChanduRath5581" },
];

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Social: React.FC<SocialProps> = ({ containerStyles = "", iconStyles = "" }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        // <Link key={index} href={item.path} className={iconStyles}>
        //   {item.icon}
        // </Link>
        <a key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
          {item.icon}
        </a>

      ))}
    </div>
  );
};

export default Social;