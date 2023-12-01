"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from "react";

export const Partners = () => {
  const partnerImages = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "4.png"];
  const [showSlider, setShowSlider] = useState(false)
  useEffect(() => {
    setShowSlider(true)
  }, [])
  return (
    <>
     {showSlider && <Swiper
        spaceBetween={10}
        slidesPerView={6}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {partnerImages.map((imageName, index) => (
          <SwiperSlide key={index}>
            <div className="h-8 w-[122px] relative">
              <Image
                className="m-auto w-auto absolute left-0 top-0 object-contain"
                fill
                src={`/partners/${imageName}`}
                alt={imageName}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>} 
    </>
  )
}