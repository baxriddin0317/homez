'use client'

import React from "react";

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
          <label className="flex items-center gap-2 text-sm font-sans cursor-pointer" key={index}>
            <input checked={filterFunctions?.categories.includes(feature.label)}
            type="checkbox" onChange={()=>filterFunctions?.handlecategories(feature.label)}  />
            <span className="checkmark" />
            {feature.label}
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {featuresRightColumn.map((feature, index) => (
          <label className="flex items-center gap-2 text-sm font-sans cursor-pointer" key={index}>
            <input type="checkbox" onChange={()=>filterFunctions?.handlecategories(feature.label)}  defaultChecked={feature.defaultChecked} />
            <span className="checkmark" />
            {feature.label}
          </label>
        ))}
      </div>
    </>
  );
};

export default OtherFeatures;
