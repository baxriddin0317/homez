import Link from 'next/link'
import React from 'react'
import cities from "@/data/propertyByCities";
import { FaArrowRightLong } from 'react-icons/fa6'
import Image from 'next/image';

export const Properties = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-4 md:mb-14 gap-y-8">
        <div className="">
          <h2 className='font-semibold text-brand-black-100 text-xl md:text-3xl md:leading-[45px]'>
          Properties by Cities
          </h2>
          <p className='text-sm text-brand-black-100 leading-6'>
          Aliquam lacinia diam quis lacus euismod
          </p>
        </div>
        <Link href={'#'} className='flex items-center gap-1 text-sm font-semibold text-brand-black-100 hover:text-brand-main transition-colors duration-500'>
          <span>See All Properties</span>
          <FaArrowRightLong className="-rotate-45" />
        </Link>
      </div> 

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5 lg:gap-y-12' data-aos="fade-up" data-aos-delay="300">
        {cities.slice(6, 14).map((city, index) => (
          <div className="" key={index}>
            <Link href="#">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 relative overflow-hidden rounded-md">
                  <Image className='absolute w-full h-full object-cover' fill src={city.image} alt="listing" />
                </div>
                <div className="flex-shrink text-brand-black-100" >
                  <h6 className="mb-1 font-semibold text-sm">{city.name}</h6>
                  <p className="mb-0 font-sans text-sm">{city.propertyCount} property</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}