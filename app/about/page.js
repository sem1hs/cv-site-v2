"use client";

import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Services from "@/components/Services/Services";
import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <main>
      {/* About Me */}
      <About />
      {/* Experiene */}
      <Experience />
      {/* Services */}
      <Services />
    </main>
  );
};

export default Page;
