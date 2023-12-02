'use client'

import React, { useEffect, useRef, useState } from "react";
import SearchBox from "./SearchBox";
import ListingStatus from "./ListingStatus";
import PropertyType from "./PropertyType";
import PriceSlider from "./PriceRange";
import Bedroom from "./Bedroom";
import Bathroom from "./Bathroom";
import Location from "./Location";
import SquareFeet from "./SquareFeet";
import YearBuilt from "./YearBuilt";
import OtherFeatures from "./OtherFeatures";
import { GiSettingsKnobs } from "react-icons/gi";
import { CiSearch, CiStar } from "react-icons/ci";
import {IoArrowUndoCircleOutline} from "react-icons/io5"

const ListingSidebar = ({filterFunction}) => {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(isActive ? ref.current.clientHeight : 0);
    }
  }, [isActive]);

  return (
    <div className="relative bg-white p-7 rounded-xl mb-8">
      <div className="mb-8">
        <h6 className="text-sm font-semibold mb-4 text-brand-black-100">Find your home</h6>
        <SearchBox filterFunctions={filterFunction} />
      </div>
      {/* End .widget-wrapper */}

      <div className="mb-8">
        <h6 className="text-sm font-semibold mb-4 text-brand-black-100">Listing Status</h6>
        <div className="flex flex-col gap-2.5">
          <ListingStatus filterFunctions={filterFunction} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="mb-8">
        <h6 className="text-sm font-semibold mb-4 text-brand-black-100">Property Type</h6>
        <div className="flex flex-col gap-2.5">
          <PropertyType filterFunctions={filterFunction} />
        </div>
      </div>
      
      {/* End .widget-wrapper */}

      <div className="mb-8">
        <h6 className="text-sm font-semibold mb-4 text-brand-black-100">Price Range</h6>
        {/* Range Slider Desktop Version */}
        <div className="max-w-[300px] w-full relative">
          <PriceSlider filterFunctions={filterFunction} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="mb-8">
        <h6 className="text-sm font-semibold mb-4 text-brand-black-100">Bedrooms</h6>
        <div className="flex">
          <Bedroom filterFunctions={filterFunction} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="mb-8">
        <h6 className="text-sm font-semibold mb-4 text-brand-black-100">Bathrooms</h6>
        <div className="flex">
          <Bathroom filterFunctions={filterFunction}  />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="mb-8">
        <h6 className="text-sm font-semibold mb-4 text-brand-black-100">Location</h6>
        <div className="">
          <Location filterFunctions={filterFunction} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="mb-8">
        <h6 className="text-sm font-semibold mb-4 text-brand-black-100">Square Feet</h6>
        <SquareFeet filterFunctions={filterFunction}/>
      </div>
      {/* End .widget-wrapper */}

      <div className="mb-8">
        <h6 className="text-sm font-semibold mb-4 text-brand-black-100">Year Built</h6>
        <YearBuilt filterFunctions={filterFunction}/>
      </div>
      {/* End .widget-wrapper */}

      <div className="mb-8">
        <div>
          <button
            className="flex items-center gap-2 "
            type="button"
            onClick={() => setIsActive(!isActive)}
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-gray-300">
            <GiSettingsKnobs className='rotate-90' />
            </span>
            <span className="text-brand-black-100 font-semibold">Other Features</span>
          </button>
          <div className="relative z-50 overflow-hidden transition-all ease-in-out duration-500 mt-4" style={{ height: `${isActive ? `${height}px` : "0px"}` }} >
            <div className="grid grid-cols-2 gap-2" ref={ref}>
              <OtherFeatures filterFunctions={filterFunction} />
            </div>
          </div>
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="mb-5">
        <button className="w-full h-[55px] flex items-center btn-search relative overflow-hidden justify-center bg-brand-main rounded-xl hover:z-20 text-white gap-2">
          <CiSearch className="text-2xl" />
          Submit 
        </button>
      </div>
      {/* End .widget-wrapper */}

      <div className="flex items-center justify-between">
        <div onClick={()=>filterFunctions.resetFilter()} className="flex items-center gap-1 text-brand-black-100 hover:text-brand-main cursor-pointer" href="#">
          <IoArrowUndoCircleOutline className="text-xl" />
          <u>Reset all filters</u>
        </div>
        <a className="flex items-center gap-1 text-brand-black-100 hover:text-brand-main" href="#">
          <CiStar className="text-xl" />
          <u>Save Search</u>
        </a>
      </div>
    </div>
  );
};

export default ListingSidebar;
