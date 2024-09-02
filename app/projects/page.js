"use client";

import Projects from "@/components/Projects/Projects";
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
      {/* Projects */}
      <Projects />
    </main>
  );
};

export default Page;
