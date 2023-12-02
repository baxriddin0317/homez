import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa6";

const AppWidget = () => {
  const appList = [
    {
      icon: <FaApple />,
      text: "Download on the",
      title: "Apple Store",
      link: "#",
    },
    {
      icon: <FaGooglePlay />,
      text: "Get it on",
      title: "Google Play",
      link: "#",
    },
  ];

  return (
    <div className="relative">
      <h5 className="text-lg font-semibold text-white mb-2.5">Apps</h5>
      <div className="flex flex-col gap-2.5 mb-6 lg:mb-12">
        {appList.map((app, index) => (
          <a href={app.link} key={index} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center w-52 rounded-xl gap-5 p-2.5 px-5 bg-white/10 hover:bg-brand-main text-white transition-all duration-500">
              <div className="flex-shrink-0 text-white text-3xl">
                {app.icon}
              </div>
              <div className="flex-grow-1">
                <p className="text-sm text-brand-gray-500">{app.text}</p>
                <h6 className="text-sm font-semibold">{app.title}</h6>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AppWidget;
