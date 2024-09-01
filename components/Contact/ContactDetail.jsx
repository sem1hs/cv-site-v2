import React from "react";
import styles from "./ContactDetail.module.css";

const ContactDetail = ({ info }) => {
  return (
    <div className={`${styles.card} px-8 py-6 shadow-md rounded-xl`}>
      <div className="mb-8">
        <i className={`block mx-auto w-max ${styles.iconBg} p-4 rounded-full`}>
          {info.icon}
        </i>
      </div>
      <h3 className="text-white text-xl font-semibold my-4 text-center">
        {info.title}
      </h3>
      <span className="block text-center text-gray-400 text-xl w-full">
        {info.value}
      </span>
    </div>
  );
};

export default ContactDetail;
