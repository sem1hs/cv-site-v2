import React from "react";
import ContactDetail from "./ContactDetail";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLocationSharp } from "react-icons/io5";

const contactDetail = [
  {
    icon: <FaPhoneAlt className="text-gray-300" size={36} />,
    title: "Telefon",
    value: "+90 530 946 8761",
  },
  {
    icon: <IoMail className="text-gray-300" size={36} />,
    title: "Mail",
    value: "semihshngl@gmail.com",
  },
  {
    icon: <IoLocationSharp className="text-gray-300" size={36} />,
    title: "Konum",
    value: "İstanbul / Maltepe",
  },
];
const Contact = () => {
  return (
    <section className="pt-28 bg-[#070707]">
      <div className="mx-auto max-w-screen-2xl">
        <h1 className="heroTitle text-gray-300 text-4xl md:text-5xl font-bold mb-16 pb-3 text-center md:text-left">
          Bana Ulaşın
        </h1>
        <div className="px-6 md:pl-6 grid grid-cols-1 md:grid-cols-3 md:gap-x-6 gap-y-6">
          {contactDetail.map((val, i) => (
            <ContactDetail key={i} info={val} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
