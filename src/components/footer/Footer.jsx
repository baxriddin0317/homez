import Image from "next/image";
import Link from "next/link";
import ContactMeta from "./ContactMeta";
import AppWidget from "./AppWidget";
import Social from "./Social";
import Subscribe from "./Subscribe";
import MenuWidget from "./MenuWidget";
import Copyright from "./Copyright";

export const Footer = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-3 sm:px-10 md:px-6">
        <div className="flex items-start justify-between border-b border-white/10 pb-8 mb-16">
          <Link className="footer-logo" href="/">
            <Image
              width={138}
              height={44}
              className="mb-10"
              src="/images/header-logo.svg"
              alt=""
            />
          </Link>

          <Social />
        </div>
        {/* End .row */}

        <div className="grid grid-cols-12 gap-3 justify-between">
          <div className="w-full flex flex-wrap gap-6 items-start justify-between col-span-12 md:col-span-6">
            <MenuWidget />
          </div>
          {/* End .col */}

          <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-end-13 mb-12 text-white">
            <ContactMeta />
            <div className="mb-6 lg:mb-12">
              <h6 className="font-semibold text-sm text-white mb-5">
                Keep Yourself Up to Date
              </h6>
              <Subscribe />
            </div>

            <AppWidget />
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>

      <Copyright />
      {/* End copyright */}
    </>
  );
};
