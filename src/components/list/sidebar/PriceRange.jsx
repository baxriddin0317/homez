"use client";
import React, { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const PriceRange = ({filterFunctions}) => {
  const [price, setPrice] = useState({ value: { min: 20, max: 70987 } });

  // price range handler
  const handleOnChange = (value) => {
    setPrice({ value });
 
  filterFunctions?.handlepriceRange([value.min  || 0,value.max])
 };

  return (
    <>
      <div className="range-wrapper">
        <InputRange
          formatLabel={() => ``}
          maxValue={100000}
          minValue={0}
          value={{min:filterFunctions?.priceRange[0],max:filterFunctions?.priceRange[1]}}
          onChange={(value) => handleOnChange(value)}
          id="slider"
        />
        <div className="flex items-center gap-2 mt-6">
          <span className="w-1/2 border border-brand-gray-100 py-2.5 px-4 rounded-md text-brand-black-200 text-sm font-sans" id="slider-range-value1">${price.value.min}</span>
          <FaMinus className="text-brand-black-100" />
          <span className="w-1/2 border border-brand-gray-100 py-2.5 px-4 rounded-md text-brand-black-200 text-sm font-sans" id="slider-range-value2">${price.value.max}</span>
        </div>
      </div>
    </>
  );
};

export default PriceRange;
