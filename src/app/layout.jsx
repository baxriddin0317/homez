"use client";
import Aos from "aos";
// import ScrollToTop from "@/components/common/ScrollTop";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './globals.css'
import ScrollToTop from "@/components/common/ScrollToTop";
import { Footer, Header } from "@/components";
import { MobileMenu } from "@/components/common";

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      // once: true,
    });
  }, []);

  return (
    <html lang="en">
      <body
        className=""
        cz-shortcut-listen="false"
      >
        <Header />
        <MobileMenu />

        <div className="overflow-hidden">{children}</div>

        <footer className="bg-brand-black-100 pt-14">
          <Footer />
        </footer>
        
        <ScrollToTop />
      </body>
    </html>
  )
}
