"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";

const PropertyType = ({ filterFunctions }) => {
  const options = [
    { label: "Houses" },

    { label: "Apartments", defaultChecked: true },
    { label: "Office" },
    { label: "Villa" },
  ];

  return (
    <>
      <label className="flex items-center gap-2 text-sm text-brand-black-300 font-sans">
        <input
          type="checkbox"
          id="all"
          className="hidden peer"
          checked={!filterFunctions?.propertyTypes.length}
          onChange={(e) => {
            filterFunctions?.setPropertyTypes([]);
          }}
        />
        <label className="w-4 h-4 rounded border flex items-center justify-center border-brand-black-200 peer-checked:bg-brand-black-100 cursor-pointer" htmlFor="all">
          <FaCheck className="text-white text-[10px]" />
        </label>
        All
      </label>
      {options.map((option, index) => (
        <label className="flex items-center gap-2 text-sm text-brand-black-300 font-sans" key={index}>
          <input
            type="checkbox"
            checked={filterFunctions?.propertyTypes.includes(option.label)}
            id={option.label}
            className="hidden peer"
            onChange={(e) => {
              filterFunctions.handlepropertyTypes(option.label);
            }}
          />
          <label className="w-4 h-4 rounded border flex items-center justify-center border-brand-black-200 peer-checked:bg-brand-black-100 cursor-pointer" htmlFor={option.label}>
            <FaCheck className="text-white text-[10px]" />
          </label>
          {option.label}
        </label>
      ))}
    </>
  );
};

export default PropertyType;
