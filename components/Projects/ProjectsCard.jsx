import React from "react";
import Image from "next/image";
import styles from "./ProjectsCard.module.css";

const ProjectsCard = ({ info }) => {
  return (
    <div
      className={`px-4 py-5 md:px-8 md:py-10 rounded-xl ${styles.card} shadow-md max-w-[320px] md:max-w-[450px]`}
    >
      <div className="mb-6">
        {info.img && (
          <Image
            src={info.img}
            alt="Projects Card Photo"
            className="rounded-md"
            width={400}
            height={200}
          />
        )}
      </div>
      <div>
        <h3 className="text-gray-200 text-base md:text-3xl font-semibold text-center md:text-left">
          {info.title}
        </h3>
        <p className="text-gray-400 mt-2 text-xs md:text-sm text-center md:text-left">
          {info.content}
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;
