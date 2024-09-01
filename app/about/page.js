import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Services from "@/components/Services/Services";
import React from "react";

const page = () => {
  return (
    <div>
      {/* About Me */}
      <About />
      {/* Experiene */}
      <Experience />
      {/* Services */}
      <Services />
    </div>
  );
};

export default page;
