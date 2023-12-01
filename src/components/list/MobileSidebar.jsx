import React from "react";
import ListingSidebar from "./sidebar";
import { FaTimes } from "react-icons/fa";

const MobileSidebar = ({filterFunctions, setmobileBar, isMobileBar}) => {
  return (
    <div className={`hidden md:block fixed w-full h-full ${isMobileBar ? 'left-0 top-0 z-[60]' : '-left-full'}`}>
      <div onClick={() => setmobileBar(false)} className={`absolute ${isMobileBar ? 'w-full h-full' : 'w-0 h-0'} bg-black/50 z-[60] inset-0`}>
      </div>
      <div className={`absolute overflow-y-scroll flex flex-col z-[70] max-w-[399px] w-full h-screen bg-white transition-all duration-500 ${isMobileBar ? 'left-0 ' : '-left-full'}`}>
        <div className="sticky top-0 z-50 bg-white flex items-center justify-between border-b border-brand-gray-100 pt-6 pb-4 pl-7 pr-5">
          <h5 className="text-xl font-semibold text-brand-black-100" >
            Listing Filter
          </h5>
          <button onClick={() => setmobileBar(false)} className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-gray-300 text-brand-black-100 hover:bg-brand-main hover:text-white transition-all duration-500">
            <FaTimes />
          </button>
        </div>
        <div className="p-0">
          <ListingSidebar filterFunctions={filterFunctions} />
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
