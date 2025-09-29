import React from "react";
import styles from "./experts.module.scss";
import { ExpertsObj } from "../../../Services/Date/ExpertsDate/ExpertsObj";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { breakpoints } from "../../../Services/Date/HomePage/breakpoints";


export default function Experts() {
    const { t } = useTranslation();


  return (
    <div className={styles.expertsConteiner}>
      <div className={styles.ExpertsTitle}>
        <h1> {t("Experts.team")}  </h1>
        <h1>{t("Experts.team-two")}</h1>
      </div>
      <div className={styles.experts}>
        <Swiper
          spaceBetween={20}
          modules={[Autoplay]}
          slidesPerView={5}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          loop={false}
          allowTouchMove={true}
          breakpoints={breakpoints}
        >
          {ExpertsObj.map((elem) => (
         
              <SwiperSlide
                className={styles.expertsProfil}
                key={elem.id}
                style={{
                  backgroundImage: `url(${elem.profileImage})`,
                }}
              >
                   <NavLink
              to={`/expert/${elem.id}`}
              key={elem.id}
              className={styles.View}
            >
                <p>{t("Experts.view")}</p>
                </NavLink>
              </SwiperSlide>
          
          ))}
        </Swiper>
      </div>
    </div>
  );
}
