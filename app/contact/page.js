import Contact from "@/components/Contact/Contact";
import ContactHero from "@/components/Contact/ContactHero";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Contact Hero*/}
      <ContactHero />
      {/* Contact */}
      <Contact />
    </div>
  );
};

export default page;
