import React from "react";
import styles from "./ExperienceCounter.module.scss";

export default function ExperienceCounter() {
  return (
    <div className={styles.experienceCounterContainer}>
      <div className={styles.experienceCounterWrapper}>
        <div>
          <h1>years of experience</h1>
          <p>1 +</p>
        </div>
        <div>
          <h1>happy clients</h1>
          <p>1 k</p>
        </div>
        <div>
          <h1>we made beauty procedures</h1>
          <p>1 b</p>
        </div>
      </div>
    </div>
  );
}
