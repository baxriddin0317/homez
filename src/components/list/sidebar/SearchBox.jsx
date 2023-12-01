
'use client'
import { CiSearch } from "react-icons/ci";
import React from "react";

const SearchBox = ({filterFunctions}) => {
  return (
    <div className="w-full h-[55px] relative">
      <label className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
      <CiSearch className="text-2xl" />
      </label>
      <input
        type="text"
        className="absolute pl-11 w-full rounded-lg flex-1 h-full outline-none text-sm bg-white border border-brand-gray-100 focus:border-brand-black-100 "
        placeholder="What are you looking for?"
        onChange={(e)=>filterFunctions?.setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
