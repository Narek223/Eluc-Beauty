import React from 'react'
import styles from "./services.module.scss";
import PathTrace from "../../SharedComponents/PathTrace/PathTrace";

export default function Services() {
  return (
    <div className={styles.container}>
          <PathTrace
                  title="SERVICES"
                  nextitle="Awesome services"
         
         breadcrumbs={[{ name: "Home", to: "/" }, { name: "Services" }]}
                />
    </div>
  )
}
