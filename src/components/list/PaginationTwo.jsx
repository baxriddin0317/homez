"use client";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const PaginationTwo = ({ pageNumber, setPageNumber, data, pageCapacity }) => {
  const handlePrevious = () => {
    if (pageNumber == 1) {
    } else {
      setPageNumber((pre) => pre - 1);
    }
  };
  const handleNext = () => {
    if (Math.ceil(data.length / pageCapacity) > pageNumber) {
      setPageNumber((pre) => pre + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center text-center">
      <ul className="flex items-center gap-1">
        <li className="cursor-pointer flex items-center justify-center w-10 h-10 bg-white shadow-header rounded-full">
          <span className="page-link pointer" href="#" onClick={handlePrevious}>
            <FaAngleLeft />
          </span>
        </li>

        <li
          onClick={() => setPageNumber(1)}
          className={`flex items-center justify-center text-brand-black-100 w-10 h-10 rounded-full cursor-pointer text-sm ${pageNumber == 1 ? "bg-brand-main !text-white" : "hover:bg-brand-gray-300"}`}
          href="#"
        >
          <span className="">1</span>
        </li>
        {data.length > pageCapacity ? (
          <li
            onClick={() => setPageNumber(2)}
            className={`flex items-center justify-center text-brand-black-100 w-10 h-10 rounded-full cursor-pointer text-sm ${pageNumber == 2 ? "bg-brand-main !text-white" : "hover:bg-brand-gray-500"}`}
            href="#"
          >
            <span className="">2</span>
          </li>
        ) : (
          ""
        )}
        {data.length > pageCapacity * 2 ? (
          <li
            onClick={() => setPageNumber(3)}
            className={`flex items-center justify-center text-brand-black-100 w-10 h-10 rounded-full cursor-pointer text-sm ${pageNumber == 3 ? "bg-brand-main !text-white" : "hover:bg-brand-gray-500"}`}
            href="#"
          >
            <span >3</span>
          </li>
        ) : (
          ""
        )}

        {data.length > pageCapacity * 4 && pageNumber != 4 && <span>...</span>}
        {pageNumber > 3 &&
        Math.ceil(data.length / pageCapacity) != pageNumber ? (
          <li
            className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer text-sm bg-brand-main !text-white`}
            onClick={() => setPageNumber(Math.ceil(data.length / pageCapacity))}
          >
            <span className="">{pageNumber}</span>
          </li>
        ) : (
          ""
        )}
        {data.length > pageCapacity * 4 ? (
          <li
            className={`flex items-center justify-center text-brand-black-100 w-10 h-10 rounded-full cursor-pointer text-sm ${pageNumber == Math.ceil(data.length / pageCapacity) ? "bg-brand-main !text-white" : "hover:bg-brand-gray-500"}`}
            onClick={() => setPageNumber(Math.ceil(data.length / pageCapacity))}
          >
            <span>
              {Math.ceil(data.length / pageCapacity)}
            </span>
          </li>
        ) : (
          ""
        )}

        <li className="cursor-pointer flex items-center justify-center w-10 h-10 bg-white shadow-header rounded-full">
          <span className="page-link" href="#" onClick={handleNext}>
            <FaAngleRight />
          </span>
        </li>
      </ul>
      <p className="text-brand-black-100 leading-5 text-[15px] text-center">
        {(pageNumber - 1) * 8 + 1}-
        {pageNumber * 8 > data.length ? data.length : pageNumber * 8} of{" "}
        {data.length}+ property available
      </p>
    </div>
  );
};

export default PaginationTwo;
