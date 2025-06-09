import React from "react";
import styles from "./about.module.scss";
import PathTrace from "../../SharedComponents/PathTrace/PathTrace";
import abotimg from "../../assets/About/Image.png";
import { count } from "../../Services/Date/About/counter";
export default function About() {
  return (
    <div className={styles.AboutComponent}>
      <PathTrace
        title={"About us"}
        nextitle={"AwesomeBeauty salon"}
        oldPage={"Home"}
        currentPage={"About"}
      />
      <div className={styles.aboutContent}>
        <div className={styles.aboutWrapper}>
          <div className={styles.img}>
            <img src={abotimg} />
          </div>
          <div className={styles.text}>
            <h1> FULL RANGE OF SERVICES FROM ELUX </h1>
            <p>
              EluX Beauty Salon is a premier beauty destination founded on the
              principles of luxury, innovation, and personalized care. Our team
              of experienced professionals is passionate about helping you look
              and feel your best.
            </p>
            <p>
              At EluX Beauty Salon, our mission is to deliver a premium beauty
              experience that combines high-quality products, exceptional
              service, and a serene atmosphere. We are committed to creating a
              space where you can relax, rejuvenate, and transform your look.
            </p>
            <p>
              EluX Beauty Salon is a premier beauty destination founded on the
              principles of luxury, innovation, and personalized care. Our team
              of experienced professionals is passionate about helping you look
              and feel your best.
            </p>
          </div>
        </div>
        <div className={styles.counterWrapper}>
          {count.map((item) => {
            return (
              <div key={item.id} className={styles.counter}>
                <h1>{item.title}</h1>
                <h2>{item.number}</h2>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
