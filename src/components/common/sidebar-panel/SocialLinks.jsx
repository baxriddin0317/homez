import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF />,
      href: "#",
    },
    {
      id: 2,
      icon: <FaTwitter />,
      href: "#",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      href: "#",
    },
    {
      id: 4,
      icon: <FaLinkedinIn />,
      href: "#",
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((link) => (
        <a className="text-brand-black-100 hover:text-brand-main transition-all duration-500" href={link.href} key={link.id}>
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
