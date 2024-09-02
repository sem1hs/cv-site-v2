"use client";

import Contact from "@/components/Contact/Contact";
import ContactHero from "@/components/Contact/ContactHero";
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
      {/* Contact Hero*/}
      <ContactHero />
      {/* Contact */}
      <Contact />
    </main>
  );
};

export default Page;
