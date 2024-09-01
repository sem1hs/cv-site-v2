"use client";
import React from "react";
import CountUp from "react-countup";

const AboutDetails = ({ info }) => {
  return (
    <li>
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          <CountUp end={info.value} duration={10} />
          {info.operation}
        </h2>
        <span className="text-gray-400 mt-8 text-sm max-w-screen-lg leading-snug">
          {info.title}
        </span>
      </div>
    </li>
  );
};

export default AboutDetails;
