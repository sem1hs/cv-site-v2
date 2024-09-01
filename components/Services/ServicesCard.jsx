import React from "react";

const ServicesCard = ({ info }) => {
  return (
    <div className="bg-[#070707] rounded-xl px-8 py-6 shadow-md">
      <div className="w-max mx-auto">{info.icon}</div>
      <h3 className="text-gray-300 text-xl font-semibold my-4 text-center">
        {info.title}
      </h3>
      <p className="text-center text-gray-400 text-base leading-snug">
        {info.content}
      </p>
    </div>
  );
};

export default ServicesCard;
