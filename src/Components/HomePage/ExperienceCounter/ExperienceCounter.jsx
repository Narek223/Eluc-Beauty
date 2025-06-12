import React from "react";
import styles from "./ExperienceCounter.module.scss";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

export default function ExperienceCounter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  let num = [
    { id: 1, title: " years of experience ", number: 10, suffix: "+" },
    { id: 2, title: " happy clients< ", number: 2, suffix: "k" },
    { id: 3, title: "we made beauty procedures ", number: 5, suffix: "b" },
  ];

  return (
    <div className={styles.experienceCounterContainer}>
      <div className={styles.experienceCounterWrapper} ref={ref}>
        {num.map((item) => (
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
