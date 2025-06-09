import React from "react";
import styles from "./about.module.scss";
import img from "../../../assets/HomePage/Button.png";
import { about } from "../../../Services/Date/HomePage/about.js";
import { NavLink } from "react-router-dom";


export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutContent}>
          <img src={img} />
        </div>
        <div className={styles.aboutText}>
          <div className={styles.aboutTitle}>
            <h1>Awesome warm words about ELUX studio</h1>
            <h1>About</h1>
          </div>
          <h2>
            In a laoreet purus. Integer turpis quam, laoreet id orci nec,
            ultrices lacinia nunc. Aliquam erat vo
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <NavLink to="/About">   <button>Explore more</button></NavLink>
     
        </div>
      </div>
      <div className={styles.aboutImages}>

    
        {about.map((item) => (
             
                  <img key={item.id} src={item.img} />
         
              ))}
                </div>
    </div>
  );
}
