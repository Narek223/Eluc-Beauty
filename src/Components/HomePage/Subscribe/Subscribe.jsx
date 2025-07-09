import React from 'react'
import styles from "./Subscribe.module.scss"
import { useTranslation } from "react-i18next";

export default function Subscribe() {
   const { t } = useTranslation();
  return (
    <div className={styles.subscribeContainer}>
<div className={styles.subscribeWrapper}>
  <div className={styles.subscribeContent}>


  <h1>{t("subscribe.title")} <span>{t("subscribe.span")}</span></h1>
  <p>{t("subscribe.description")}</p>
  <input type="email" placeholder='*Email Address' />
  <button>{t("subscribe.button")}</button>
    </div>
</div>
    </div>
  )
}
