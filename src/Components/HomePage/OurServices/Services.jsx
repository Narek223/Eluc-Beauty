import React, { useState } from "react";
import styles from "./services.module.scss";
import { serviceImages } from "../../../Services/Date/HomePage/serviceImages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { breakpoints } from "../../../Services/Date/HomePage/breakpoints";

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
          <Swiper
            className={styles.swiper}
            modules={[Pagination]}
            pagination={{
              bulletClass: `swiper-pagination-bullet ${styles["feature-pagination"]}`,
              clickable: true,
            }}
            spaceBetween={20}
            breakpoints={breakpoints}
          >
            {serviceImages.map((img, index) => (
                    <SwiperSlide className={styles.swiperslider} key={index}>
              <div
                className={styles.imageWrapper}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
                data-aos-delay={index * 150}
              >
                <img
                  className={
                    hoveredIndex === index ? styles.hoverimg : styles.img
                  }
                  src={hoveredIndex === index ? img.hover : img.default}
                  alt={`Service ${index + 1}`}
                />
                {hoveredIndex === index && (
                  <button className={styles.hoverButton}>
                    {" "}
                    {t("services.header")}
                  </button>
                )}
              </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.button}>
          <NavLink to="/services">
            <button> {t("services.btn")}</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
