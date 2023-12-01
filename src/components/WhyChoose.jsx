import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Features } from "./common";
import { RiHome6Line } from "react-icons/ri";

export const WhyChoose = () => {
  return (
    <>
      <div className="relative">
        <Image
          width={591}
          height={685}
          priority
          className="w-100 h-100 object-cover"
          src="/images/why-chose-1.png"
          alt="why chosse"
        />
        <Link className="absolute right-0 lg:-right-4 bottom-5" href="/single-v1/5">
          <div className="flex items-center gap-2.5 bg-white group hover:bg-brand-main text-brand-black-100 hover:text-white rounded-xl p-5 transition-all duration-500">
            <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-brand-main group-hover:bg-white/20 transition-all duration-500">
            <RiHome6Line className="text-white text-3xl" />
            </div>
            <div className="flex-shrink text-brand-black-100 group-hover:text-white transition-all duration-500">
              <p className="text-sm leading-7">Total Rent</p>
              <h4 className="text-xl leading-8 font-semibold">4,382 Unit</h4>
            </div>
          </div>
        </Link>
      </div>
      {/* End .col-6 */}

      <div className="xl:flex-1" data-aos="fade-right" data-aos-delay="300">
        <div className="mb-16 text-brand-black-100">
          <h2 className="text-xl sm:text-3xl sm:leading-[45px] font-semibold">Why Choose Us</h2>
          <p className="text-sm leading-6">
            As the complexity of buildings to increase, the{" "}
            <br className="hidden lg:block" />
            field of architecture.
          </p>
        </div>
        {/* End main-title2 */}

        <div className="why-chose-list">
          <Features />
        </div>
        {/* End .why-chose-list */}
      </div>
      {/* End .col-6 */}
    </>
  );
};
