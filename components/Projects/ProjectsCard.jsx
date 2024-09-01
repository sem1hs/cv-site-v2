import React from "react";
import Image from "next/image";
import styles from "./ProjectsCard.module.css";
import pp from "@/public/pp.jpeg";

const ProjectsCard = ({}) => {
  return (
    <div
      className={`px-4 py-5 md:px-8 md:py-10 rounded-xl ${styles.card} shadow-md`}
    >
      <div>
        <Image
          src={pp}
          alt="Projects Card Photo"
          width={240}
          className="md:w-[240px] md:h-[240px] w-[120px] h-[120px]"
        />
      </div>
      <div>
        <p className="text-gray-400 mt-8 text-base md:text-xl text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          quisquam?
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;
