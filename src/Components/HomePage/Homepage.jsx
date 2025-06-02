import React from "react";
import styles from "./homepage.module.scss";
import homeimg from "../../assets/HomePage/HeroWallpaper1.png";
import vector from "../../assets/HomePage/Vector.png";
export default function Homepage() {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.homepagewrapper}>
        <div className={styles.homepageContent}>
          <img src={homeimg} alt="Home" className={styles.homeImage} />
        </div>
        <div className={styles.vectors}>
          <img src={vector} />
        </div>
      </div>
    </div>
  );
}
