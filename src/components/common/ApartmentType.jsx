'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import apartmentType from "@/data/apartmentType";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import Link from "next/link";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export const ApartmentType = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".next__active",
          prevEl: ".prev__active",
        }}
        pagination={{
          el: ".pagination__active",
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {apartmentType.map((type, idx) => (
          <SwiperSlide key={idx}>
            <Link href="#">
              <div className="p-8 rounded-xl hover:text-brand-black-100 group bg-brand-black-100 hover:bg-white transition-all duration-500">
                <div className="flex items-center justify-center text-3xl w-[70px] h-[70px] rounded-full bg-white/10 group-hover:bg-black/10 transition-all duration-500 mb-9">
                  {type.icon}
                </div>
                <div className="iconbox-content">
                  <h6 className="text-sm font-semibold mb-1.5">{type.title}</h6>
                  <p className="text-sm leading-6">{`${type.count} Properties`}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8">
        <div className="flex items-center justify-center gap-6">
          <button className="prev__active">
            <FaArrowLeftLong />
          </button>
          {/* End prev */}

          <div className="">
            <div className="pagination swiper--pagination pagination__active" />
          </div>
          {/* End pagination */}

          <button className="next__active">
            <FaArrowRightLong />
          </button>
          {/* End Next */}
        </div>
      </div>
      {/* End .col for navigation and pagination */}
    </>
  );
};
