'use client'

import React from "react";
import { FaCheck } from "react-icons/fa";

const OtherFeatures = ({filterFunctions}) => {
  const featuresLeftColumn = [
    { label: "Attic" },
    { label: "Basketball court", defaultChecked: true },
    { label: "Air Conditioning", defaultChecked: true },
    { label: "Lawn", defaultChecked: true },
    { label: "TV Cable" },
    { label: "Dryer" },
  ];

  const featuresRightColumn = [
    { label: "Outdoor Shower" },
    { label: "Washer" },
    { label: "Lake view" },
    { label: "Wine cellar" },
    { label: "Front yard" },
    { label: "Refrigerator" },
  ];



  return (
    <>
      <div className="flex flex-col gap-3">
        {featuresLeftColumn.map((feature, index) => (
          <label className="flex items-center gap-2 text-sm font-sans cursor-pointer" key={index} htmlFor={feature.label}>
            <input 
              className="hidden peer"
              id={feature.label}
              checked={filterFunctions?.categories.includes(feature.label)}
              type="checkbox" 
              onChange={()=>filterFunctions?.handlecategories(feature.label)}  
            />
            <div className="w-4 h-4 rounded border flex items-center justify-center border-brand-black-200 peer-checked:bg-brand-black-100 cursor-pointer" >
              <FaCheck className="text-white text-[10px]" />
            </div>
            {feature.label}
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {featuresRightColumn.map((feature, index) => (
          <label className="flex items-center gap-2 text-sm font-sans cursor-pointer" htmlFor={feature.label} key={index}>
            <input 
              className="hidden peer"
              id={feature.label}
              type="checkbox" 
              checked={filterFunctions?.categories.includes(feature.label)}
              onChange={()=>filterFunctions?.handlecategories(feature.label)}  
              defaultChecked={feature.defaultChecked} 
            />
            <div className="w-4 h-4 rounded border flex items-center justify-center border-brand-black-200 peer-checked:bg-brand-black-100 cursor-pointer">
              <FaCheck className="text-white text-[10px]" />
            </div>
            {feature.label}
          </label>
        ))}
      </div>
    </>
  );
};

export default OtherFeatures;
