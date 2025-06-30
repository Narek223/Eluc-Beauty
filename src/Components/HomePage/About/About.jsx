import React from "react";
import styles from "./about.module.scss";
import img from "../../../assets/HomePage/Button.png";
import { about } from "../../../Services/Date/HomePage/about.js";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutContent}>
          <img src={img} alt="About button" />
        </div>
        <div className={styles.aboutText}>
          <div className={styles.aboutTitle}>
            <h1>{t("aboutPage.titleLine1")}</h1>
            <h1>{t("aboutPage.titleLine2")}</h1>
          </div>
          <h2>{t("aboutPage.subtitle")}</h2>

          <p>{t("aboutPage.description")}</p>

          <NavLink to="/About">
            <button>{t("aboutPage.button")}</button>
          </NavLink>
        </div>
      </div>

      <div className={styles.aboutImages}>
        {about.map((item) => (
          <img key={item.id} src={item.img} alt={`about-${item.id}`} />
        ))}
      </div>
    </div>
  );
}
