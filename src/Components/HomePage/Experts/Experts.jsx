import React from "react";
import styles from "./experts.module.scss";
import { ExpertDetalis } from "../../../Services/Date/Experts/Experts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';

import "swiper/css/autoplay";

export default function Experts() {
  return (
    <div className={styles.expertsConteiner}>
      <div className={styles.ExpertsTitle}>
        <h1>MEET THE BEST TEAM EVER </h1>
        <h1>Team</h1>
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
          loop={true}
          allowTouchMove={true}
        >
          {ExpertDetalis.map((elem) => (
            <SwiperSlide
              className={styles.expertsProfil}
              key={elem.id}
              style={{
                backgroundImage: `url(${elem.profileImage})`,
              }}
            >
              <p>View</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
