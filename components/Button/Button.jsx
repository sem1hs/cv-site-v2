"use client";
import React from "react";
import styles from "./Button.module.css";
import { openPopup } from "@/redux/appSlice";
import { useDispatch } from "react-redux";

const Button = ({ type, children }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(openPopup());
  };

  return (
    <>
      {type === "footerBtn" && (
        <button
          onClick={handleClick}
          className={`block mx-auto mt-8 rounded-full px-6 py-3 md:px-8 md:py-4 ${styles.buttonPrimary} translate-y-0 hover:-translate-y-2 transition-all`}
        >
          <span className="text-gray-100 mt-8 text-base md:text-xl text-center">
            {children}
          </span>
        </button>
      )}
    </>
  );
};

export default Button;
