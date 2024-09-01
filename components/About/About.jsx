import React from "react";
import AboutDetails from "./AboutDetails";

const aboutItems = [
  {
    value: "2",
    title: "Yıllık Deneyim",
    operation: "+",
  },
  {
    value: "100",
    title: "Tamamlanmış Proje",
    operation: "+",
  },
  {
    value: "100",
    title: "Müşteri Memnuniyeti",
    operation: "%",
  },
];
const About = () => {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-2xl md:max-w-screen-2xl">
        <h1 className="heroTitle text-4xl md:text-5xl font-bold text-center md:text-left">
          Hakkımda
        </h1>
        <p className="text-gray-400 mt-8 text-base md:text-xl max-w-screen-lg px-6 md:pl-6 leading-snug text-center md:text-left">
          Merhaba! Ben Semih Şahinoğlu, yaratıcı fikirleri kodla buluşturan bir
          web geliştiricisiyim. Dijital dünyada, kullanıcı deneyimini ön planda
          tutarak modern, etkileyici ve fonksiyonel web çözümleri oluşturuyorum.
          HTML, CSS, JavaScript ve çeşitli web teknolojileriyle tasarımları
          hayata geçirirken, her projenin bir hikaye anlatmasını ve
          kullanıcıların bu hikayede kaybolmasını hedefliyorum.
        </p>
        <div className="mt-12 px-6 max-w-screen-lg">
          <ul className="flex items-center gap-12 justify-between">
            {aboutItems.map((val, i) => (
              <AboutDetails key={i} info={val} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
