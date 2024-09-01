"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper/modules";

import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const sliderItems = [
  {
    icon: (
      <FaHtml5
        fill="white"
        className="w-[24px] h-[24px] md:w-[48px] md:h-[48px]"
      />
    ),
  },
  {
    icon: (
      <FaCss3
        fill="white"
        className="w-[24px] h-[24px] md:w-[48px] md:h-[48px]"
      />
    ),
  },
  {
    icon: (
      <FaJs
        fill="white"
        className="w-[24px] h-[24px] md:w-[48px] md:h-[48px]"
      />
    ),
  },
  {
    icon: (
      <FaNodeJs
        fill="white"
        className="w-[24px] h-[24px] md:w-[48px] md:h-[48px]"
      />
    ),
  },
  {
    icon: (
      <FaReact
        fill="white"
        className="w-[24px] h-[24px] md:w-[48px] md:h-[48px]"
      />
    ),
  },
  {
    icon: (
      <RiNextjsFill
        fill="white"
        className="w-[24px] h-[24px] md:w-[48px] md:h-[48px]"
      />
    ),
  },
];
const Slider = () => {
  return (
    <div className="px-16 md:py-8">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        modules={[Autoplay, FreeMode]}
        autoplay={{
          delay: 3500,
          reverseDirection: true,
        }}
      >
        {sliderItems.map((val, i) => (
          <SwiperSlide key={i}>{val.icon}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
