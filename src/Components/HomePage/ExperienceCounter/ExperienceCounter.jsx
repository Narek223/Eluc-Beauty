import React from "react";
import styles from "./ExperienceCounter.module.scss";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { count } from "../../../Services/Date/HomePage/counter";


export default function ExperienceCounter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });



  return (
    <div className={styles.experienceCounterContainer}>
      <div className={styles.experienceCounterWrapper} ref={ref}>
        {count.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>
              <CountUp
                start={0}
                end={inView ? item.number : 0}
                duration={2}
                deley={2}
              />{" "}
              {item.suffix}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
