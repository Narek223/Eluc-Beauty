import React, { useState } from "react";
import styles from "./services.module.scss";
import { serviceImages } from "../../../Services/Date/HomePage/serviceImages";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
          Our Services <span>Awesome Services</span>
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
                <button className={styles.hoverButton}>Header</button>
              )}
            </div>
          ))}
        </div>
        <div className={styles.button}>
          <button>Explore more</button>
        </div>
      </div>
    </div>
  );
}
