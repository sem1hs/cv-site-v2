import React from "react";
import ExperienceCard from "./ExperienceCard";

const experienceTemp = [
  {
    title: "Yazılım Mühendisliği Öğrencisi",
    company: "İstanbul Gelişim Üniversitesi",
    date: "2022 - 2026",
    content:
      "İstanbul Gelişim Üniversitesin’de Yazılım Mühendisliği öğrencisi olarak, modern yazılım geliştirme prensipleri, algoritmalar ve veri yapıları konularında derinlemesine bilgi edindim. Eğitimim süresince, hem teorik bilgimi hem de pratik becerilerimi geliştirdim; çeşitli projeler ve takım çalışmaları sayesinde problem çözme yeteneklerimi pekiştirdim. Teknolojinin hızla değişen dünyasında sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum.",
  },
  {
    title: "Full-Stack Geliştirici Stajyer",
    company: "Ketçap Creative",
    date: "2024 - 2024",
    content:
      "Full-stack developer stajyeri olarak çalıştığım Ketçap Creative'de, hem front-end hem de back-end geliştirme süreçlerine aktif olarak katkı sağladım. Staj süresince, proje gereksinimlerine uygun olarak veritabanı yönetimi, API entegrasyonu ve kullanıcı arayüzü tasarımı gibi çeşitli görevlerde yer aldım. Ekip çalışmasına dayalı bir ortamda, deneyimli geliştiricilerden öğrendiklerimi projelere yansıtarak, uygulama geliştirme konusunda pratik becerilerimi geliştirdim ve profesyonel dünyaya ilk adımımı attım.",
  },
];
const Experience = () => {
  return (
    <section className="py-28 bg-[#070707]">
      <div className="mx-auto max-w-2xl md:max-w-screen-2xl">
        <h1 className="heroTitle text-4xl md:text-5xl font-bold pb-4 mb-12 text-center md:text-left">
          Eğitim & Deneyim
        </h1>
        <div className="grid grid-cols-1 gap-y-6 md:pl-6 px-6">
          {experienceTemp.map((val, i) => (
            <ExperienceCard key={i} info={val} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
