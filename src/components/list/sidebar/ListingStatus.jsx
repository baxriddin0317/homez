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
      {options.map((option) => (
        <div
          className="flex items-center gap-2 radio-element"
          key={option.id}
        >
          <input
            className="form-check-input"
            type="radio"
            checked={filterFunctions?.listingStatus == option.label}
            onChange={()=>filterFunctions.handlelistingStatus(option.label)}
          />
          <label className="text-sm text-brand-black-300 font-sans" htmlFor={option.id}>
            {option.label}
          </label>
        </div>
      ))}
    </>
  );
};

export default ListingStatus;
