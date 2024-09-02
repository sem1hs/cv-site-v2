"use client";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Technologies from "@/components/Technologies/Technologies";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function Home() {
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
      {/* Hero Section */}
      <Hero />
      {/* Technologies Section */}
      <Technologies />
      {/* Projects Section */}
      <Projects />
    </main>
  );
}
