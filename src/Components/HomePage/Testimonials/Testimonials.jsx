import React from "react";
import styles from "./opinions.module.scss";
import img from "../../../assets/HomePage/Card.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,Autoplay } from "swiper/modules";
import { Slider } from "@mui/material";
import {text} from "../../../Services/Date/HomePage/textslider.js";
import { useTranslation } from "react-i18next";

export default function Opinions() {
    const { t } = useTranslation();
  return (
    <div className={styles.conteiner}>
      <div className={styles.textslide}>
        <div className={styles.img}>
          <img src={img} alt="Opinion" className={styles.image} />
        </div>
        <div className={styles.text}>
          <div className={styles.title}>
            <h1> {t("testimonials.sectionTitle")}</h1>
            <h1>{t("testimonials.title")}</h1>
          </div>
          <div className={styles.textSlider}>
            <Swiper
          
            speed={900}
            loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
            >
              {text.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className={styles.textContent}>
                    <p>{slide.text}</p>
                    <h2>{slide.author}</h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
