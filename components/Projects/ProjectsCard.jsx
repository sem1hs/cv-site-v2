import React from "react";
import Image from "next/image";
import styles from "./ProjectsCard.module.css";
import pp from "@/public/pp.jpeg";

const ProjectsCard = ({}) => {
  return (
    <div className={`px-8 py-10 rounded-xl ${styles.card} shadow-md`}>
      <div>
        <Image src={pp} alt="Projects Card Photo" width={240} />
      </div>
      <div>
        <p className="text-gray-400 mt-8 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          quisquam?
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;
