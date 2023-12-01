import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { PiArrowSquareIn, PiArrowSquareOut } from "react-icons/pi";
import { GrNewWindow } from "react-icons/gr";
import { FiHeart } from "react-icons/fi";
import { RiFlashlightLine } from 'react-icons/ri';
import { LuBedSingle } from "react-icons/lu";
import { FaShower } from 'react-icons/fa6';

export const FeaturedListings = ({cities}) => {
  return (
    <>
     {cities.slice(0, 8).map((listing) => (
      <div className="" key={listing.id}>
          <div className="relative max-h-[248px] overflow-hidden rounded-md group">
            <Image
              width={382}
              height={248}
              className="w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-2 transition-all duration-500"
              src={listing.image}
              alt="listings"
            />
            <div className="absolute top-5 left-5 transition-all duration-500 group-hover:translate-y-10 group-hover:opacity-0">
              {listing.featured && (
                <div className="flex items-center gap-1 py-0.5 px-3 rounded-md bg-brand-main text-white text-xs font-semibold h-[30px]">
                  <RiFlashlightLine />
                  FEATURED
                </div>
              )}
            </div>
            <div className="absolute flex items-center gap-1.5 -bottom-16 right-7 transition-all duration-500 group-hover:bottom-3">
              <a className='w-9 h-9 rounded-md flex items-center justify-center bg-brand-black-100 text-white hover:bg-brand-main transition-all duration-500' href="#">
              <FiHeart />
              </a>
              <a className='w-9 h-9 rounded-md flex items-center justify-center bg-brand-black-100 text-white hover:bg-brand-main transition-all duration-500' href="#">
              <GrNewWindow className='rotate-180' />
              </a>
              <a className='w-9 h-9 rounded-md flex items-center justify-center bg-brand-black-100 text-white hover:bg-brand-main transition-all duration-500' href="#">
              <PiArrowSquareOut />
              </a>
            </div>
          </div>
          <div className="pt-5">
            <div className="text-brand-black-100 font-semibold text-sm mb-2">
              {listing.price} / <span className='font-normal'>mo</span>
            </div>
            <h6 className="font-semibold text-sm text-brand-black-100 mb-1.5">
              <Link href={`#`}>{listing.title}</Link>
            </h6>
            <p className="text-brand-black-200 text-sm leading-7">{listing.location}</p>
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
          </div>
      </div>
     ))} 
    </>
  )
}