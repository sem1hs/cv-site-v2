import React from "react";
import ServicesCard from "./ServicesCard";

import { IoCodeSharp, IoBriefcaseOutline } from "react-icons/io5";
import { CiDatabase } from "react-icons/ci";

const servicesTemp = [
  {
    icon: <IoCodeSharp className="text-gray-300" size={48} />,
    title: "Web Tasarımı ve Geliştirme",
    content:
      "Kullanıcı dostu ve estetik açıdan çekici web siteleri tasarlıyoruz. İhtiyacınıza göre özel çözümler sunarak, markanızın dijital varlığını güçlendiriyoruz. Modern teknolojilerle desteklenen tasarımlar, tüm cihazlarda mükemmel bir kullanıcı deneyimi sağlar.",
  },
  {
    icon: <IoBriefcaseOutline className="text-gray-300" size={48} />,
    title: "SEO ve Dijital Pazarlama",
    content:
      "Web sitenizin arama motorlarında üst sıralarda yer almasını sağlayarak daha fazla görünürlük kazanmanıza yardımcı oluyoruz. SEO stratejileri, anahtar kelime optimizasyonu ve içerik yönetimi ile organik trafik artışı hedefliyoruz. Ayrıca, dijital pazarlama kampanyalarıyla markanızı geniş bir kitleye tanıtıyoruz.",
  },
  {
    icon: <CiDatabase className="text-gray-300" size={48} />,
    title: "API Entegrasyonu ve Back-End Geliştirme",
    content:
      "Web uygulamalarınız için güvenilir ve ölçeklenebilir back-end çözümleri sunuyoruz. API entegrasyonları, veri tabanı yönetimi ve sunucu tarafı geliştirme ile uygulamalarınızın performansını artırıyoruz.",
  },
];
const Services = () => {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-2xl md:max-w-screen-2xl">
        <h1 className="heroTitle text-4xl md:text-5xl font-bold pb-4 mb-12 text-center md:text-left">
          Hizmetlerim
        </h1>
        <p className="text-gray-400 mt-8 md:text-xl text-base max-w-screen-lg md:pl-6 px-6 leading-snug text-center md:text-left">
          Web geliştirme alanındaki uzmanlığımı, kullanıcı dostu ve modern web
          siteleri tasarlamak için kullanıyorum. İster sıfırdan bir site
          geliştirmek, ister mevcut bir siteyi yenilemek olsun, projelerimde her
          zaman kullanıcı deneyimini ve performansı ön planda tutuyorum.
          Front-end ve back-end geliştirme, e-ticaret çözümleri, responsive
          tasarım ve API entegrasyonu gibi hizmetlerle dijital projelerinizi
          hayata geçirmeye hazırım.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-8 mt-12 md:pl-6 px-6">
          {servicesTemp.map((val, i) => (
            <ServicesCard key={i} info={val} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
