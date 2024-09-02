"use client";
import React from "react";
import ProjectsCard from "./ProjectsCard";
import { usePathname } from "next/navigation";

import photoOne from "@/public/Ata-Medya-Landing-Page.png";

const projectsCardTemp = [
  {
    title: "Ata Medya Landing Page",
    content:
      "Ata Medya için geliştirdiğim bu landing page, modern tasarımı ve kullanıcı dostu arayüzüyle öne çıkıyor. Responsive yapısı ve hızlı yüklenme süreleri sayesinde her cihazda mükemmel bir kullanıcı deneyimi sunuyor. ",
    img: photoOne,
  },
  {
    title: "",
    content: "",
    img: "",
  },
  {
    title: "",
    content: "",
    img: "",
  },
  {
    title: "",
    content: "",
    img: "",
  },
];
const Projects = () => {
  const path = usePathname();
  const isProjectPage = path === "/projects";

  return (
    <section
      className="py-28"
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-delay="100"
    >
      <div className="mx-auto max-w-screen-2xl md:px-6">
        <h1 className="heroTitle text-gray-300 text-3xl md:text-5xl font-bold mb-8 md:mb-16 pb-3 text-center md:text-left">
          Projelerim
        </h1>
        {isProjectPage && (
          <p className="text-gray-400 mt-8 text-base md:text-xl max-w-screen-lg md:pl-6 px-6 leading-snug mb-16 text-center md:text-left">
            Bu bölümde, farklı sektörlerdeki müşteriler için geliştirdiğim
            projelere göz atabilirsiniz. Her projede, modern web teknolojilerini
            kullanarak estetik ve işlevselliği bir araya getirdim. İster
            kullanıcı dostu bir web sitesi, ister karmaşık bir web uygulaması
            olsun, her bir proje, detaylara verilen önemin ve kaliteye olan
            bağlılığın bir yansımasıdır
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {projectsCardTemp.map((val, i) => (
            <ProjectsCard key={i} info={val} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
