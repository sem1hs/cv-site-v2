"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PopupForm from "./PopupForm";
import { FaMinus } from "react-icons/fa6";
import { closePopup } from "@/redux/appSlice";

const Popup = () => {
  const isOpen = useSelector((state) => state.app.isOpen);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(closePopup());
  };

  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={handleClick}
          ></div>
          <div
            className="max-w-xs md:max-w-lg max-h-max my-auto mx-auto bg-[#070707] px-9 pt-20 pb-10 fixed inset-0 z-50 rounded-xl"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="100"
          >
            <button
              className="inline-block absolute text-white top-4 right-4"
              onClick={handleClick}
            >
              <FaMinus size={24} />
            </button>
            <h1 className="heroTitle text-gray-300 text-2xl md:text-5xl text-center font-bold mb-8 md:mb-16 pb-3">
              Bilgilerinizi Bırakın
            </h1>
            <PopupForm />
          </div>
        </>
      )}
    </>
  );
};

export default Popup;
