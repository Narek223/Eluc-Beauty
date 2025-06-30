import React from "react";
import styles from "./service.module.scss";
import { service } from "../../../Services/Date/HomePage/service";
import { useTranslation } from "react-i18next";

export default function Service() {
  
  const { t } = useTranslation()

  return (
    <div className={styles.serviceContainer}>
      <div className={styles.serviceWrapper}>
        <div className={styles.serviceHeader}>
          <h1>
            {t("pricingServices.pricing")}
             <span>  {t("pricingServices.span")}</span>
          </h1>
          <p>
          {t("pricingServices.p")}
          </p>
        </div>
        {service.map((item) => (
          <div className={styles.service} key={item.id}>
            <div className={styles.serviceItem}>
              <span className={styles.name}>{t(item.titleKey)}</span>
              <p>{t(item.descKey)}</p>
            </div>
            <span className={styles.dots}></span>
            {item.newPrice && <span className={styles.newprice}>{item.newPrice}</span>}
            <span className={styles.price}>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
