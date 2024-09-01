"use client";
import React, { useState } from "react";
import styles from "./ExperienceCard.module.css";
import clsx from "clsx";
import { FaPlus, FaMinus } from "react-icons/fa6";

const ExperienceCard = ({ info }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen((open) => !open);
  };
  return (
    <div
      className={`${styles.card} flex flex-col py-6 px-8 rounded-xl relative max-h-full overflow-hidden transition-all cursor-pointer`}
      onClick={handleClick}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-purple-500 border border-white px-4 py-2 rounded-full text-sm">
          {info.date}
        </span>
        <button className="block text-white" onClick={handleClick}>
          {!isOpen && <FaPlus size={24} />}
          {isOpen && <FaMinus size={24} />}
        </button>
      </div>
      <h3 className="text-gray-300 text-xl font-semibold mb-1">
        {info.company}
      </h3>
      <span className="text-gray-400 text-base mb-4">{info.title}</span>
      <p
        className={clsx("text-gray-400 text-base leading-snug transition-all", {
          "hidden ": !isOpen,
          "block ": isOpen,
        })}
      >
        {info.content}
      </p>
    </div>
  );
};

export default ExperienceCard;
