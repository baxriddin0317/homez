"use client";
import testimonialData from "@/data/testimonials";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import { FaArrowLeftLong, FaArrowRightLong, FaQuoteLeft, FaStar } from "react-icons/fa6";

export const Testimonial = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".testimonila_next__active",
          prevEl: ".testimonila_prev__active",
        }}
        pagination={{
          el: ".testimonila_pagination__active",
          clickable: true,
        }}
        slidesPerView={1}
      >
        {testimonialData.map((testimonial,idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-xl text-brand-black-100 p-8 pr-2.5">
              <div className="border-b border-brand-gray-100 pb-5 mb-5">
                <div className="flex items-center justify-between pr-16 mb-6">
                  <h5 className="font-semibold">{testimonial.title}</h5>
                  <FaQuoteLeft className="text-4xl text-brand-main/20" />
                </div>
                <p className="text-sm font-semibold leading-[26px] mb-2">{testimonial.quote}</p>
                <div className="flex items-center justify-start ">
                  {Array.from({ length: testimonial.stars }, (_, index) => (
                    <a className="me-1" href="#" key={index}>
                      <FaStar className="text-brand-yellow-100 text-xs" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="">
                  <Image
                    width={60}
                    height={60}
                    className="wa"
                    src={testimonial.image}
                    alt="avatar"
                  />
                </div>
                <div className="text-brand-black-100 text-sm">
                  <h6 className="font-semibold">{testimonial.name}</h6>
                  <p className="mb-0">{testimonial.company}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-center gap-6 mt-8">
        <button className="testimonila_prev__active swiper_button">
        <FaArrowLeftLong />
        </button>
        {/* End prev */}

        <div>
          <div className="pagination swiper--pagination2 testimonila_pagination__active" />
        </div>
        {/* End pagination */}

        <button className="testimonila_next__active swiper_button">
        <FaArrowRightLong />
        </button>
        {/* End Next */}
      </div>
      {/* End .col for navigation and pagination */}
    </>
  );
};
