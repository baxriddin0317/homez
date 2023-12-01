"use client";

import React from "react";

const TopFilterBar = ({
  setCurrentSortingOption,
  colstyle,
  setColstyle,
  pageContentTrac,
}) => {
  return (
    <>
      <div className="text-brand-black-100 text-sm text-center sm:text-left">
        <p>
          Showing {pageContentTrac[0]}–
          {pageContentTrac[2] < pageContentTrac[1]
            ? pageContentTrac[2]
            : pageContentTrac[1]}{" "}
          of {pageContentTrac[2]} results
        </p>
      </div>
      {/* End .col-sm-6 */}

      <div className="text-brand-black-100 text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <span className="text-brand-black-200">Sort by</span>
            <select
              className="py-1.5 cursor-pointer px-3 pr-0 outline-none bg-transparent"
              onChange={(e) =>
                setCurrentSortingOption &&
                setCurrentSortingOption(e.target.value)
              }
            >
              <option>Newest</option>
              <option>Best Seller</option>
              <option>Best Match</option>
              <option>Price Low</option>
              <option>Price High</option>
            </select>
          </div>
          <button
            className={`px-4 border-x border-brand-gray-400 hidden md:block text-brand-black-100 hover:text-brand-main  ${
              colstyle ? "text-brand-main" : ""
            } `}
            onClick={() => setColstyle(true)}
          >
            Grid
          </button>
          <button
            className={`hidden md:block text-brand-black-100 hover:text-brand-main ${
              !colstyle ? "text-brand-main" : ""
            }`}
            onClick={() => setColstyle(false)}
          >
            List
          </button>
        </div>
      </div>
      {/* End .col-sm-6 */}
    </>
  );
};

export default TopFilterBar;
