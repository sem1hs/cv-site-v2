import React from "react";
import Slider from "../Swiper/Slider";

const Technologies = () => {
  return (
    <section className="py-10 md:my-32 bg-[#070707]">
      <h1 className="text-gray-300 text-2xl md:text-5xl font-bold mb-8 md:mb-16 text-center">
        Kullandığım Teknolojiler
      </h1>
      <div className="mx-auto max-w-screen-2xl">
        <Slider />
      </div>
    </section>
  );
};

export default Technologies;
