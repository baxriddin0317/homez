"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {FaArrowRightLong, FaRegCircleUser} from "react-icons/fa6"
import { LoginModal, MainMenu } from "./common";
import SidebarPanel from "./common/sidebar-panel";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [barPanel, setBarPanel] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const pathname = usePathname();

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header
        className={`hidden lg:block bg-transparent border-b border-white/10 py-5 w-full ${pathname == '/' ? 'fixed transition-all duration-1000 shadow-header0' : 'sticky top-0'} z-50 ${
          navbar ? "bg-white shadow-header border-brand-gray-100 z-50 animated" : ""
        }`}
      >
        <nav className="relative">
          <div className="max-w-7xl px-6 mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="w-auto">
                <div className="flex items-center justify-between">
                  <div className="mr-10">
                    <Link className="header-logo logo1" href="/">
                      <Image
                        width={138}
                        height={44}
                        src="/images/header-logo2.svg"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                  {/* End Logo  */}

                  <MainMenu />
                  {/* End Main Menu */}
                </div>
              </div>

              <div className="w-auto px-3">
                <div className="flex items-center gap-6">
                  <button onClick={() => setIsLogin(true)} className="flex items-center gap-1 text-sm font-semibold leading-6 text-brand-black-100" >
                    <FaRegCircleUser className="text-lg" />{" "}
                    <span className="hidden xl:block">Login / Register</span>
                  </button>
                  <Link
                    className="flex btn-dark relative hover:bg-brand-main/80 hover:z-20 overflow-hidden items-center gap-2.5 bg-brand-black-100 text-white rounded-xl font-semibold text-sm px-[30px] py-3.5"
                    href="#"
                  >
                    Add Property
                    <FaArrowRightLong className="-rotate-45" />
                  </Link>
                  <a onClick={() => setBarPanel(true)} href="#">
                    <Image
                      width={25}
                      height={9}
                      src="/images/icon/nav-icon-dark.svg"
                      alt="humberger menu"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

     <SidebarPanel setBarPanel={setBarPanel} barPanel={barPanel} />
     <LoginModal setIsLogin={setIsLogin} isLogin={isLogin} />
    </>
  );
};
