import React from "react";
import styles from "./services.module.scss";
import image from "../../../assets/HomePage/560781eaa3add70183aaf7b8e34eb7f7d967c7d7.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Не забудь импортировать CSS
export default function Services() {


    AOS.init({
  

    duration: 1000, 
  easing: 'ease', 
  once: false, 
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

    
        <img src={image} />
        <img src={image} />
        <img src={image} />
        <img src={image} />
        <img src={image} />
            </div>
            <div className={styles.button}>
   <button>Explore more</button>
            </div>
     
      </div>
    </div>
  );
}
