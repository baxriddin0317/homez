'use client'
import { PropertyFilteringList } from '@/components';
import MobileSidebar from '@/components/list/mobileSidebar';
import React, { useState } from 'react'
import { GiSettingsKnobs } from "react-icons/gi";

const Listv1 = () => {
  const [mobileBar, setmobileBar] = useState(false);

  return (
    <main className='bg-brand-gray-300'>
      {/* Breadcumb Sections */}
      <section className="py-[70px]">
        <div className="max-w-7xl mx-auto px-3 sm:px-10 md:px-6">
          <div className="flex items-end sm:items-start justify-between">
            <div className='text-brand-black-100'>
              <h2 className="text-xl sm:text-3xl leading-[45px] mb-2 font-semibold">List View</h2>
              <div className="text-sm">
                <a href="#">Home</a>{" "}/{" "}
                <a href="#">For Rent</a>
              </div>
            </div>
            <button onClick={() => setmobileBar(!mobileBar)} className="flex items-center justify-center gap-2 h-10 w-24 text-brand-black-100 bg-white shadow-header rounded-full lg:hidden hover:text-brand-main">
            <GiSettingsKnobs className='rotate-90' /> Filter
            </button>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Property Filtering */}
      <PropertyFilteringList isMobileBar={mobileBar} setmobileBar={setmobileBar} />
    </main>
  )
}

export default Listv1