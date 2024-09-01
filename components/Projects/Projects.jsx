"use client";
import React from "react";
import ProjectsCard from "./ProjectsCard";
import { usePathname } from "next/navigation";

const Projects = () => {
  const path = usePathname();
  const isProjectPage = path === "/projects";

  return (
    <section className="py-28">
      <div className="mx-auto max-w-screen-2xl">
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
          {Array.from({ length: 4 }, (val, i) => (
            <ProjectsCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
