import React from "react";
import styles from "./service.module.scss";
import { service } from "../../../Services/Date/HomePage/service";
export default function Service() {

  return (
    <div className={styles.serviceContainer}>
      <div className={styles.serviceWrapper}>
        <div className={styles.serviceHeader}>
          <h1>
            Pricing for service <span>Prices</span>
          </h1>
          <p>
            The best jobs at the best prices only with us, Elux Beauty Salon.{" "}
          </p>
        </div>

        {service.map((item) => (
          <div class={styles.service} key={item.id}>
            <div class={styles.serviceItem}>
              <span class={styles.name}>{item.title}</span>
              <p>{item.description}</p>
            </div>
            <span class={styles.dots}></span>
            {item.newPrice && <span class={styles.newprice}>{item.newPrice}</span>}

            <span class={styles.price}>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
