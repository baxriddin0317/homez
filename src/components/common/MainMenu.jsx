'use client'
import {
  homeItems,
  blogItems,
  listingItems,
  propertyItems,
  pageItems,
} from "@/data/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export const MainMenu = () => {
  const pathname = usePathname();
  const [topMenu, setTopMenu] = useState("");
  const [submenu, setSubmenu] = useState("");
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    homeItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("home");
      }
    });
    blogItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("blog");
      }
    });
    pageItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("pages");
      }
    });
    propertyItems.forEach((item) =>
      item.subMenuItems.forEach((elm) => {
        if (elm.href.split("/")[1] == pathname.split("/")[1]) {
          setTopMenu("property");
          setSubmenu(item.label);
        }
      })
    );
    listingItems.forEach((item) =>
      item.submenu.forEach((elm) => {
        if (elm.href.split("/")[1] == pathname.split("/")[1]) {
          setTopMenu("listing");
          setSubmenu(item.title);
        }
      })
    );
  }, [pathname]);

  const handleActive = (link) => {
    if (link.split("/")[1] == pathname.split("/")[1]) {
      return "!text-brand-main";
    }
  };

  return (
    <ul className="flex items-center">
      <li className="group relative">
        <Link className="flex items-center gap-1 py-2 px-4" href="#">
          <span className={`font-poppins font-semibold text-sm ${topMenu == "home" ? "text-brand-main" : ""}`}>
            Home
          </span>
          <IoIosArrowDown className="pt-0.5 text-lg" />
        </Link>
        {/* Level Two*/}
        <ul className="h-0 absolute rounded-xl left-2 shadow top-8 group-hover:py-4 group-hover:h-auto overflow-hidden transition-all ease-linear z-50 bg-white ">
          {homeItems.map((item, index) => (
            <li className="px-7 w-[200px] flex items-center cursor-pointer h-10 hover:bg-brand-main/10" key={index}>
              <Link className={`${handleActive(item.href)} text-sm text-brand-black-100 font-semibold font-poppins`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      {/* End homeItems */}
      <li className="group relative">
        <Link className="flex items-center gap-1 py-2 px-4" href="#">
          <span className={`font-poppins font-semibold text-sm ${topMenu == "listing" ? "text-brand-main" : ""}`}>
          Listing
          </span>
          <IoIosArrowDown className="pt-0.5 text-lg" />
        </Link>
        {/* Level Two*/}
        <ul className="h-0 absolute rounded-xl left-2 shadow top-8 group-hover:py-4 group-hover:h-auto overflow-hidden transition-all ease-linear z-50 bg-white flex items-start">
          {listingItems.map((item, index) => (
            <li className="w-[200px] px-7" key={index}>
              <h4 className="font-poppins text-xl text-brand-black-100 mb-2 h-8 font-semibold">{item.title}</h4>
              <ul className="flex flex-col">
                {item.submenu.map((submenuItem, subIndex) => (
                  <li key={subIndex} className="h-10">
                    <Link
                      className={`${handleActive(submenuItem.href)} font-dm_sans text-sm hover:underline text-brand-black-100 font-semibold leading-7 whitespace-nowrap`}
                      href={submenuItem.href}
                    >
                      {submenuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
      {/* End listings */}

      <li className="dropdown relative">
        <Link className="flex items-center gap-1 py-2 px-4" href="#">
          <span className={`font-poppins font-semibold text-sm ${topMenu == "property" ? "text-brand-main" : ""}`}>
          Property
          </span>
          <IoIosArrowDown className="pt-0.5 text-lg" />
        </Link>
        <ul className="dropdown-content hidden py-4 h-0 absolute rounded-xl left-2 shadow top-8 transition-all ease-linear z-50 bg-white">
          {propertyItems.map((item, index) => (
            <li key={index} className="dropdown relative">
              <Link className="px-7 w-[260px] flex items-center justify-between cursor-pointer h-10 hover:bg-brand-main/10" href="#">
                <span
                  className={
                    submenu == item.label ? "title menuActive" : "title"
                  }
                >
                  {item.label}
                </span>
                <IoIosArrowForward className="pt-0.5 text-lg" />
              </Link>
              <ul className="h-0 absolute hidden bg-white rounded-xl left-full top-0 -translate-x-1 shadow dropdown-content overflow-hidden transition-all ease-linear z-[60] py-4">
                {item.subMenuItems.map((subMenuItem, subIndex) => (
                  <li key={subIndex} className="flex items-center px-7 w-[260px] cursor-pointer h-10 hover:bg-brand-main/10">
                    <Link
                      className={`${handleActive(subMenuItem.href)} `}
                      href={subMenuItem.href}
                    >
                      {subMenuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
      {/* End property Items */}

      <li className="group relative">
        <Link className="flex items-center gap-1 py-2 px-4" href="#">
          <span className={`font-poppins font-semibold text-sm ${topMenu == "blog" ? "text-brand-main" : ""}`}>
          Blog
          </span>
          <IoIosArrowDown className="pt-0.5 text-lg" />
        </Link>
        {/* Level Two*/}
        <ul className="h-0 absolute rounded-xl left-2 shadow top-8 group-hover:py-4 group-hover:h-auto overflow-hidden transition-all ease-linear z-50 bg-white">
          {blogItems.map((item, index) => (
            <li className="px-7 w-[200px] flex items-center cursor-pointer h-10 hover:bg-brand-main/10" key={index}>
              <Link className={`${handleActive(item.href)} text-sm text-brand-black-100 font-semibold font-poppins`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End blog Items */}

      <li className="group relative">
        <Link className="flex items-center gap-1 py-2 px-4" href="#">
          <span className={`font-poppins font-semibold text-sm ${topMenu == "pages" ? "text-brand-main" : ""}`}>
          Pages
          </span>
          <IoIosArrowDown className="pt-0.5 text-lg" />
        </Link>
        {/* Level Two*/}
        <ul className="h-0 absolute rounded-xl left-2 shadow top-8 group-hover:py-4 group-hover:h-auto overflow-hidden transition-all ease-linear z-50 bg-white">
          {pageItems.map((item, index) => (
            <li className="px-7 w-[200px] flex items-center cursor-pointer h-10 hover:bg-brand-main/10" key={index}>
              <Link className={`${handleActive(item.href)} text-sm text-brand-black-100 font-semibold font-poppins`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End pages Items */}

    </ul>
  );
};
