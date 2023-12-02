"use client";

import Image from "next/image";
import Link from "next/link";
import { FaShower } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { GrNewWindow } from "react-icons/gr";
import { LuBedSingle } from "react-icons/lu";
import { PiArrowSquareIn, PiArrowSquareOut } from "react-icons/pi";
import { RiFlashlightLine } from "react-icons/ri";

const FeaturedListings = ({ data, colstyle }) => {
  return (
    <>
      {data.map((listing,idx) => (
        <div
          className={` ${colstyle ? "md:!col-span-1 lg:col-span-2" : "sm:col-span-2"} h-full `}
          key={idx}
        >
          <div
            className={
              colstyle
                ? "bg-white rounded-xl overflow-hidden"
                : "bg-white rounded-xl overflow-hidden flex gap-2.5"
            }
          >
            <div className="relative group overflow-hidden">
              <Image
                width={382}
                height={248}
                className="w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-2 transition-all duration-500"
                style={{ height: "253px" }}
                src={listing.image}
                alt="listings"
              />
              <div className="absolute top-5 left-5 transition-all duration-500 group-hover:translate-y-10 group-hover:opacity-0">
                {!listing.forRent && (
                  <div className="flex items-center gap-1 py-0.5 px-3 rounded-md bg-brand-main text-white text-xs font-semibold h-[30px]">
                    <RiFlashlightLine />
                    FEATURED
                  </div>
                )}
              </div>

              <div className={`${colstyle ? 'absolute' : 'w-32 translate-x-5 -translate-y-3 '} left-4 bottom-2 z-20 bg-white py-1 px-3 rounded text-brand-black-100 font-semibold`}>
                {listing.price} / <span className="font-normal">mo</span>
              </div>
            </div>
            <div className="p-5 flex-1">
              <h6 className="text-sm text-brand-black-100 font-semibold leading-[45px] hover:underline mb-0.5">
                <Link href={`/single-v4/${listing.id}`}>{listing.title}</Link>
              </h6>
              <p className="text-sm text-brand-black-200 mb-2.5">{listing.location}</p>
              <div className="flex items-center gap-3 text-brand-black-100 text-xs leading-6">
                <a className='flex items-center gap-1 hover:text-brand-main' href="#">
                  <LuBedSingle /> 
                  <span>{listing.bed} bed</span>
                </a>
                <a className='flex items-center gap-1 hover:text-brand-main' href="#">
                  <FaShower className='' style={{transform: "rotateY(180deg)"}} /> 
                  <span>{listing.bath} bath</span>
                </a>
                <a className='flex items-center gap-1 hover:text-brand-main' href="#">
                  <PiArrowSquareIn /> 
                  <span>{listing.sqft} sqft</span>
                </a>
              </div>
              <p className="text-brand-black-100 text-sm mb-4 border-b border-brand-gray-300">
                An exceptional exclusive five bedroom apartment for sale in this
                much sought after development in Knightsbridge.
              </p>
              <hr className="mt-2 mb-2" />
              <div className="flex items-center justify-between">
                <span className="text-brand-black-100 text-sm">For Rent</span>
                <div className="flex items-center">
                  <a className='w-9 h-9 rounded-md flex items-center justify-center text-brand-black-100 hover:bg-brand-gray-300' href="#">
                  <FiHeart />
                  </a>
                  <a className='w-9 h-9 rounded-md flex items-center justify-center text-brand-black-100 hover:bg-brand-gray-300' href="#">
                  <GrNewWindow className='rotate-180' />
                  </a>
                  <a className='w-9 h-9 rounded-md flex items-center justify-center text-brand-black-100 hover:bg-brand-gray-300' href="#">
                  <PiArrowSquareOut />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
