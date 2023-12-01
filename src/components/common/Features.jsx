import { FaSackDollar } from "react-icons/fa6";
import { LuShield } from "react-icons/lu";
import { RiKey2Line } from "react-icons/ri";

export const Features = () => {
  // Define an array of feature objects
  const features = [
    {
      icon: <LuShield />,
      title: "Property Management",
      description:
        "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
    },
    {
      icon: <RiKey2Line />,
      title: "Mortgage Services",
      description:
        "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
    },
    {
      icon: <FaSackDollar />,
      title: "Currency Services",
      description:
        "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div className="flex items-start mb-8 gap-5 group" key={index}>
          <div className="flex items-center justify-center text-3xl w-[70px] h-[70px] rounded-full bg-brand-main/20 text-brand-main group-hover:text-white group-hover:bg-brand-main transition-all duration-500">
            {feature.icon}
          </div>
          <div className="flex-1 text-brand-black-100">
            <h6 className="font-semibold text-sm mb-1">{feature.title}</h6>
            <p className="text-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
