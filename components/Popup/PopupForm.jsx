import React from "react";
import styles from "./PopupForm.module.css";

const PopupForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <input
        className="bg-transparent border border-white px-3 py-2 text-white rounded-md focus-visible:outline-none"
        type="text"
        placeholder="Adınız"
      />
      <input
        className="bg-transparent border border-white px-3 py-2 text-white rounded-md focus-visible:outline-none"
        type="email"
        placeholder="Email Adresiniz"
      />
      <input
        className="bg-transparent border border-white px-3 py-2 text-white rounded-md focus-visible:outline-none"
        type="tel"
        placeholder="Telefon Numaranız"
      />
      <button
        className={`block mx-auto rounded-full px-12 py-2.5 mt-4 ${styles.buttonPrimary} translate-y-0 hover:-translate-y-2 transition-all`}
      >
        <span className="text-gray-100 mt-8 text-base md:text-xl text-center">
          Gönder
        </span>
      </button>
    </form>
  );
};

export default PopupForm;
