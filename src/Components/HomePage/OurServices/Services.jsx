import React, { useState } from "react";
import styles from "./services.module.scss";
import { serviceImages } from "../../../Services/Date/HomePage/serviceImages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { t } = useTranslation();
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });



  return (
    <div className={styles.servicesContainer}>
      <div className={styles.vectors}></div>

      <div className={styles.servicesWrapper}>
        <h1 data-aos="fade-right">
        {t("services.ourServices")} <span>{t("services.span")}</span>
        </h1>
        <div className={styles.servicesImages}>
          {serviceImages.map((img, index) => (
            <div
              className={styles.imageWrapper}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
              data-aos-delay={index * 150}
            >
              <img
              className={hoveredIndex === index ? styles.hoverimg:styles.img}
                src={hoveredIndex === index ? img.hover : img.default}
                alt={`Service ${index + 1}`}
              />
              {hoveredIndex === index && (
                <button className={styles.hoverButton}> {t("services.header")}</button>
              )}
            </div>
          ))}
        </div>
        <div className={styles.button}>
          <button>  {t("services.btn")}</button>
        </div>
      </div>
    </div>
  );
}
