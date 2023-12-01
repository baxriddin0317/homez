'use client'
import React, { useEffect, useState } from 'react'
import listings from "@/data/listings";
import { FeaturedListings } from './common';

export const PropertyByCitiesWrapper = () => {
  const [pageData, setPageData] = useState([])
  const [currentType, setCurrentType] = useState('rent')
  useEffect(() => {
      if (currentType == 'rent') {
          const filtered = listings.filter((elm)=>elm.forRent)
          setPageData(filtered)
          
      } else {
          const filtered = listings.filter((elm)=> !elm.forRent)
          setPageData(filtered)
      }
    
  }, [currentType])
  return (
    <section className='pb-8 md:pb-24'>
      <div className='max-w-7xl mx-auto px-3 sm:px-10 md:px-6'>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-4 md:mb-14 gap-y-8">
          <div className="">
            <h2 className='font-semibold text-brand-black-100 text-xl md:text-3xl md:leading-[45px]'>
            Discover Popular Properties
            </h2>
            <p className='text-sm text-brand-black-100 leading-6'>
            Aliquam lacinia diam quis lacus euismod
            </p>
          </div>
          <div className='flex items-end gap-2.5 mb-6 md:mb-0'>
            <button className={`border border-brand-black-100 text-brand-black-100 text-sm bg-transparent h-10 py-1.5 px-4 rounded-md transition-all duration-500 font-sans font-semibold ${currentType == 'rent' ? '!bg-brand-black-100 text-white':''} `} onClick={()=>setCurrentType('rent')} type="button">
              For Rent
            </button>
            <button className={`border border-brand-black-100 text-brand-black-100 text-sm bg-transparent h-10 py-1.5 px-4 rounded-md transition-all duration-500 font-sans font-semibold ${currentType == 'sale' ? '!bg-brand-black-100 text-white':''} `} onClick={()=>setCurrentType('sale')} type="button">
              For Sale
            </button>
          </div>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-x-6 gap-y-8' data-aos="fade-up" data-aos-delay="300">
          <FeaturedListings cities = {pageData} />
        </div>
      </div>
    </section>
  )
}