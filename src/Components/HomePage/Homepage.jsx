import React from "react";
import styles from "./homepage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { images } from "../../Services/Date/HomePage/slider.js";
import Testimonials from "./Testimonials/Testimonials.jsx";
import Book from "./BookPage/Book.jsx";
import Subscribe from "./Subscribe/Subscribe.jsx";
import About from "../HomePage/About/About.jsx";
import Service from "../HomePage/PricingService/Service.jsx";
import ExperienceCounter from "./ExperienceCounter/ExperienceCounter.jsx";
import Services from "./OurServices/Services.jsx";
import Experts from "./Experts/Experts.jsx";
import FastBooking from "./FastBooking/FastBooking.jsx";

export default function Homepage() {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.homepagewrapper}>
        <div className={styles.homepageContent}>
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
            {images.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className={styles.homeSlide}>
                  <img
                    src={slide.img}
                    alt="Home"
                    className={styles.homeImage}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
      <div>
            <FastBooking />
          </div>
        </div>
        <Services />
        <Service />
     <ExperienceCounter />
        <About />

        <Book />
         <Experts />
     <Testimonials />
        <Subscribe />  
      </div>
    </div>
  );
}
