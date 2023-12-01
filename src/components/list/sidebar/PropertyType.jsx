"use client";

import React from "react";

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
          checked={!filterFunctions?.propertyTypes.length}
          onChange={(e) => {
            filterFunctions?.setPropertyTypes([]);
          }}
        />
        All
        <span className="checkmark" />
      </label>
      {options.map((option, index) => (
        <label className="flex items-center gap-2 text-sm text-brand-black-300 font-sans" key={index}>
          <input
            type="checkbox"
            checked={filterFunctions?.propertyTypes.includes(option.label)}
            onChange={(e) => {
              filterFunctions.handlepropertyTypes(option.label);
            }}
          />
          {option.label}
          <span className="checkmark" />
        </label>
      ))}
    </>
  );
};

export default PropertyType;
