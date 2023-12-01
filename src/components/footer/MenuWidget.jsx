import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Popular Search",
      links: [
        { label: "Apartment for Rent", href: "#" },
        { label: "Apartment Low to Hide", href: "#" },
        { label: "Offices for Buy", href: "#" },
        { label: "Offices for Rent", href: "#" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Terms of Use", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Pricing Plans", href: "#" },
        { label: "Our Services", href: "#" },
        { label: "Contact Support", href: "#" },
        { label: "Careers", href: "#" },
        { label: "FAQs", href: "#" },
      ],
    },
    {
      title: "Discover",
      links: [
        { label: "Miami", href: "#" },
        { label: "Los Angeles", href: "#" },
        { label: "Chicago", href: "#" },
        { label: "New York", href: "#" },
      ],
    },
  ];

  return (
    <>
      {menuSections.map((section, index) => (
        <div className="w-auto" key={index}>
          <h6 className="text-white font-semibold text-sm mb-6">{section.title}</h6>
          <ul className="ps-0">
            {section.links.map((link, linkIndex) => (
              <li className="h-10" key={linkIndex}>
                <a className="text-brand-gray-500 hover:text-white hover:underline" href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default MenuWidget;
