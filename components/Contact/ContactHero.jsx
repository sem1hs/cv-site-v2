import React from "react";

const ContactHero = () => {
  return (
    <section
      className="py-28"
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-delay="100"
    >
      <div className="mx-auto max-w-screen-2xl md:px-6">
        <h1 className="heroTitle text-gray-300 text-4xl md:text-5xl font-bold mb-16 pb-3 text-center md:text-left">
          Beraber Çalışalım
        </h1>
        <p className="text-gray-400 mt-8 text-base md:text-xl max-w-screen-lg md:pl-6 px-6 leading-snug text-center md:text-left">
          İhtiyaçlarınıza uygun, etkileyici ve fonksiyonel web çözümleri üretmek
          için buradayım. Eğer dijital dünyada güçlü bir varlık oluşturmak
          istiyorsanız, birlikte harika projelere imza atabiliriz. Fikirlerinizi
          gerçeğe dönüştürmek ve başarılı projeler geliştirmek için benimle
          iletişime geçin, beraber çalışalım!
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
