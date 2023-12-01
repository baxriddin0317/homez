import React from "react";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const footerMenuItems = [
    {
      label: "Privacy",
      link: "#",
    },
    {
      label: "Terms",
      link: "#",
    },
    {
      label: "Sitemap",
      link: "#",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-10 md:px-6 border-t border-white/10 py-6">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:justify-between text-white px-3">
        <div className="text-center lg:text-left">
          <p className="text-brand-gray-500 text-sm leading-6">
            © Homez {getCurrentYear()}{" "}
            <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              ib-themes
            </a>{" "}
            - All rights reserved
          </p>
        </div>

        <div className="text-center lg:text-end">
          <p className="text-brand-gray-500 text-sm leading-6">
            {footerMenuItems.map((item, index) => (
              <React.Fragment key={index}>
                <a className="hover:text-brand-main transition-colors duration-500" href={item.link}>
                  {item.label}
                </a>
                {index !== footerMenuItems.length - 1 && " · "}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
