'use client'

import React, { useState } from "react";

const Bathroom = ({filterFunctions}) => {
  const [checked, setChecked] = useState(0);

  const options = [
    { id: "bathany", label: "any", defaultChecked: true ,value:0},
    { id: "bathoneplus", label: "1+",value:1 },
    { id: "bathtwoplus", label: "2+" ,value:2},
    { id: "baththreeplus", label: "3+",value:3 },
    { id: "bathfourplus", label: "4+",value:4 },
    { id: "bathfiveplus", label: "5+",value:5 },
  ];

  const handleChange = (value) => {
    filterFunctions?.handlebathroms(value)
    setChecked(value)
  }

  return (
    <>
      {options.map((option) => (
        <div className={`border border-brand-gray-100 h-11 w-10 flex items-center justify-center border-l-0 cursor-pointer ${option.value == 0 ? 'border-l rounded-l-xl' : ''} ${option.value == options.length -1 ? 'rounded-r-xl' : ''} ${checked == option.value ? '!border-brand-black-100 border-2 border-l-2' : ''}`} key={option.id}>
          <input
            id={option.id}
            className="hidden"
            type="radio"
            checked={filterFunctions?.bathroms == option.value}
            onChange={() => handleChange(option.value)}
          />
          <label className="cursor-pointer font-semibold text-xs text-brand-black-100" htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </>
  );
};

export default Bathroom;
