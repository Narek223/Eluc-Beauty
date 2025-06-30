import React from "react";
import styles from "./book.module.scss";
import { useTranslation } from "react-i18next";



export default function Book() {
  const { t } = useTranslation();
  
  return (
    <div className={styles.bookContainer}>
      <div className={styles.bookWrapper}>
        <div className={styles.bookContent}>
        <h1>{t("bookSection.title")}</h1>
          <p>{t("bookSection.description")}</p>
          <button>{t("bookSection.button")}</button>
        </div>
      </div>
     
    </div>
  );
}
