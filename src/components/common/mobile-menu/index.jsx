'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import MobileMenuSidebar from './MobileMenuSidebar'

export const MobileMenu = () => {
  const [barPanel, setBarPanel] = useState(false);

  return (
    <div className='relative'>
      <div className='lg:hidden'>
        <div className='px-5 bg-white w-full shadow-header'>
          <div className='flex items-center justify-between gap-1 h-16'>
            <a href="#" onClick={() => setBarPanel(true)} className='rotate-180' style={{transform: 'rotateY(180deg)'}}>
              <Image
                width={25}
                height={9}
                src="/images/icon/nav-icon-dark.svg"
                alt="humberger menu"
              />
            </a>
            <Link className="header-logo logo1" href="/">
              <Image
                width={138}
                height={44}
                src="/images/header-logo2.svg"
                alt="Header Logo"
              />
            </Link>
            <button className="flex items-center gap-1 text-sm font-semibold leading-6 text-brand-black-100" >
              <FaRegCircleUser className="text-lg" />
            </button>
          </div>
        </div>

        <MobileMenuSidebar barPanel={barPanel} setBarPanel={setBarPanel} />
      </div>
    </div>
  )
}