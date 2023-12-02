'use client'

import React from "react";

const ListingStatus = ({filterFunctions}) => {
  const options = [
    { id: "flexRadioDefault3", label: "All" , defaultChecked: true },
    { id: "flexRadioDefault1", label: "Buy" },
    { id: "flexRadioDefault2", label: "Rent", },

  ];

  return (
    <>
      {options.map((option,idx) => (
        <div
          className="flex items-center gap-2 radio-element"
          key={idx}
        >
          <input
            className="hidden peer"
            type="radio"
            id={option.id}
            checked={filterFunctions?.listingStatus == option.label}
            onChange={()=>filterFunctions.handlelistingStatus(option.label)}
          />
          <label className="w-4 h-4 rounded-full border border-brand-black-200 flex items-center justify-center cursor-pointer peer-checked:bg-brand-black-100 before:w-2 before:h-2 before:rounded-full before:bg-white" htmlFor={option.id}></label>
          <span className="text-sm text-brand-black-300 font-sans" >
            {option.label}
          </span>
        </div>
      ))}
    </>
  );
};

export default ListingStatus;
