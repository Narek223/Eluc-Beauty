import React from "react";
import styles from "./homepage.module.scss";
import homeimg from "../../assets/HomePage/HeroWallpaper1.png";
import vector from "../../assets/HomePage/Vector.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { images } from "../../Services/Date/HomePage/slider.js";
import { Slider } from "@mui/material";
import Testimonials from "./Testimonials/Testimonials.jsx";
import Book from "./BookPage/Book.jsx";


export default function Homepage() {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.homepagewrapper}>
        <div className={styles.homepageContent}>
          <Swiper
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

          {images.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={styles.homeSlide}>
                <img src={slide.img} alt="Home" className={styles.homeImage} />
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
        <div className={styles.vectors}>
          <img src={vector} />
        </div>
<Testimonials/>
<Book/>
      </div>
    </div>
  );
}
