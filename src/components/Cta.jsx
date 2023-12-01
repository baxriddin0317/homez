import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export const Cta = () => {
  return (
    <section
      className=" bg-brand-main/5"
      data-aos="fade"
    >
      <div className="max-w-7xl py-14 md:py-24 mx-auto px-3 sm:px-10 md:px-6 relative">
        <div className="flex items-center justify-between">
          <div className="text-brand-black-100">
            <h2 className="text-xl sm:text-3xl font-semibold mb-2">Become a Real Estate Agent</h2>
            <p className="text-sm mb-6">
              We only work with the best companies around the globe to survey
            </p>
            <Link href="#" className="w-48 h-[55px] flex items-center btn-search relative overflow-hidden justify-center bg-brand-main rounded-xl hover:z-20 text-white gap-2">
              Register Now 
              <FaArrowRightLong className="-rotate-45" />
            </Link>
          </div>
          {/* End .col-lg-7 */}

          <div className="hidden lg:block">
            <div className="absolute bottom-0 right-0">
              <Image
                width={255}
                height={415}
                priority
                className="w-full h-full object-cover"
                src="/images/cta-member-1.png"
                alt="cta memeber"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
