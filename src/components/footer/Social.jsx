import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Social = () => {
  const socialIcons = [
    <FaFacebookF />,
    <FaTwitter />,
    <FaInstagram />,
    <FaLinkedinIn />,
  ];

  return (
    <div className="flex items-center">
      {socialIcons.map((iconClass, index) => (
        <a className="flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/10" key={index} href="#">
          {iconClass}
        </a>
      ))}
    </div>
  );
};

export default Social;
