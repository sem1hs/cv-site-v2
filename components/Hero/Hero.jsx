"use client";
import React from "react";
import Image from "next/image";
import pp from "@/public/pp.jpeg";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      className="md:py-28 py-20"
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-delay="100"
    >
      <div className="mx-auto max-w-2xl md:max-w-screen-2xl flex flex-col md:flex-row items-center gap-16 md:px-8">
        <div>
          <Image
            src={pp}
            alt="Hero Image"
            className="rounded-xl w-[240px] md:w-[360px]"
          ></Image>
        </div>
        <div className="px-4 md:px-8 py-2 max-w-xl md:max-w-screen-lg">
          <h1
            className={`heroTitle text-[17px] md:text-5xl font-extrabold leading-snug text-center md:text-left pb-3`}
          >
            <span className="flex flex-wrap md:gap-2 mb-1">
              Merhaba Ben,
              <Typewriter
                options={{
                  strings: [
                    "Full-Stack Geliştiriciyim",
                    "Yazılım Mühendisiyim",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            Modern web teknolojileriyle kullanıcı dostu ve etkileyici web
            deneyimleri yaratıyorum. Her projede performans ve işlevselliği bir
            araya getiriyorum.
          </h1>
          <p className="text-gray-400 mt-8 text-base md:text-xl text-center md:text-left">
            Merhaba, ben Semih Şahinoğlu. Modern ve kullanıcı dostu web siteleri
            tasarlayan bir web geliştiricisiyim. Kod ile estetiği buluşturuyor,
            dijital dünyada iz bırakan projeler yaratıyorum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
