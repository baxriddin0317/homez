const MenuItems = () => {
  const menuItems = [
    { id: 1, title: "Apartments" },
    { id: 2, title: "Bungalow" },
    { id: 3, title: "Houses" },
    { id: 4, title: "Loft" },
    { id: 5, title: "Office" },
    { id: 6, title: "Townhome" },
    { id: 7, title: "Villa" },
  ];

  return (
    <ul className="pt-16">
      {menuItems.map((item) => (
        <li className="px-7 relative h-[51px] text-brand-black-100  hover:bg-brand-main/20 hover:text-brand-main transition-all duration-500 cursor-pointer flex items-center group" key={item.id}>
          <span className="block absolute h-full w-0.5 bg-transparent group-hover:bg-brand-main left-0 transition-all duration-500"></span>
          <a className="text-sm font-semibold" href="#" role="button">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
