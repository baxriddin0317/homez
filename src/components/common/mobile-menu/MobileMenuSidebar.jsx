import React from 'react'
import { FaTimes } from 'react-icons/fa'
import ProSidebarContent from './ProSidebarContent'
import ContactInfo from '../sidebar-panel/ContactInfo'
import SocialLinks from '../sidebar-panel/SocialLinks'

const MobileMenuSidebar = ({setBarPanel, barPanel}) => {
  return (
    <div className={`hidden md:block fixed w-full h-full ${barPanel ? 'left-0 top-0 z-[60]' : '-left-full'}`}>
      <div onClick={() => setBarPanel(false)} className={`absolute ${barPanel ? 'w-full h-full' : 'w-0 h-0'} bg-black/50 z-[60] inset-0`}>
      </div>
      <div className={`absolute flex flex-col z-[70] max-w-[399px] w-full h-screen bg-white transition-all duration-500 ${barPanel ? 'left-0 ' : '-left-full'}`}>
        <div className="bg-brand-main/20 flex items-center justify-between border-b border-brand-gray-100 pt-6 pb-4 pl-7 pr-5">
          <h5 className="text-xl font-semibold text-brand-black-100" >
          Welcome to Homez
          </h5>
          <button onClick={() => setBarPanel(false)} className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-main text-white">
            <FaTimes />
          </button>
        </div>
        <div className="hsidebar-content ">
          <div className="hiddenbar_navbar_content">
            <ProSidebarContent />
            {/* End .hiddenbar_navbar_menu */}

            <div className="mt-auto">
              <div className="flex flex-wrap gap-4 pt-11 pb-8 pl-7 border-y border-brand-gray-100">
                <ContactInfo />
              </div>
              {/* End .row */}

              <div className="flex py-8 pl-7">
                <div className="flex items-center gap-6">
                  <h6 className="text-sm text-brand-black-100 font-semibold">Follow us</h6>
                  <SocialLinks />
                </div>
              </div>
            </div>
            {/* hiddenbar_footer */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenuSidebar