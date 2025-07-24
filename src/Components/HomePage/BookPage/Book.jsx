import React from "react";
import styles from "./book.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


export default function Book() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <div className={styles.bookContainer}>
      <div className={styles.bookWrapper}>
        <div className={styles.bookContent}>
        <h1>{t("bookSection.title")}</h1>
          <p>{t("bookSection.description")}</p>
          <button onClick={ ()=>navigate('/services')}>{t("bookSection.button")}</button>
        </div>
      </div>
     
    </div>
  );
}
