"use client";

import React, { useState } from "react";

const Bedroom = ({ filterFunctions }) => {
  const [checked, setChecked] = useState(0);

  const options = [
    { id: "any", label: "any", value: 0, defaultChecked: true },
    { id: "oneplus", label: "1+", value: 1 },
    { id: "twoplus", label: "2+", value: 2 },
    { id: "threeplus", label: "3+", value: 3 },
    { id: "fourplus", label: "4+", value: 4 },
    { id: "fiveplus", label: "5+", value: 5 },
  ];

  const handleChange = (value) => {
    setChecked(value);
  };
  // console.log(o);
  return (
    <>
      {options.map((option, idx) => (
        <div
          className={`border border-brand-gray-100 h-11 w-10 flex items-center justify-center border-l-0 cursor-pointer ${
            option.value == 0 ? "border-l-2 rounded-l-xl" : ""
          } ${option.value == options.length - 1 ? "border-r-2 rounded-r-xl" : ""} ${
            checked === idx
              ? "!border-brand-black-100 !border-2 !border-l-2"
              : ""
          }`}
          key={idx}
          onClick={() => handleChange(option.value)}
        >
          <input
            id={option.id}
            type="radio"
            className="hidden"
            onChange={() => filterFunctions?.handlebedrooms(option.value)}
            checked={filterFunctions?.bedrooms == option.value}
          />
          <label className="cursor-pointer" htmlFor={option.id}>
            {option.label}
          </label>
        </div>
      ))}
    </>
  );
};

export default Bedroom;
