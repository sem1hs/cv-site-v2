import React from "react";
import styles from "./Footer.module.css";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer className="pt-20 md:pt-40 pb-16 bg-[#070707]">
      <div
        className={`${styles.footerContainer} max-w-xs md:max-w-screen-xl mx-auto rounded-xl px-6 md:py-12`}
      >
        <div className="py-8 md:px-24">
          <h1 className="text-gray-200 text-center text-xl md:text-5xl font-bold mb-12">
            Benimle Çalışmak İster Misiniz ?
          </h1>
          <p className="text-gray-400 mt-8 text-base md:text-xl text-center">
            Benimle çalışmak, modern web teknolojilerini kullanarak
            hedeflerinizi dijital dünyada gerçeğe dönüştürmek demektir.
            Kullanıcı deneyimini ön planda tutan, işlevsel ve estetik web
            çözümleri sunuyorum. Projelerinize değer katmak ve birlikte başarıya
            ulaşmak için hazırım.
          </p>
          <Button type="footerBtn">Bana Ulaşın</Button>
        </div>
      </div>
      <p className="text-gray-400 mt-16 text-xs text-center px-4 md:px-0">
        © 2024 Semih Şahinoğlu. Tüm hakları saklıdır. Bu web sitesindeki
        içeriklerin izinsiz kullanımı, kopyalanması veya dağıtılması yasaktır.
      </p>
    </footer>
  );
};

export default Footer;
