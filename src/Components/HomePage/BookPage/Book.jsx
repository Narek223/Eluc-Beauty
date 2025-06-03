import React from "react";
import styles from "./book.module.scss";

export default function Book() {
  return (
    <div className={styles.bookContainer}>
      <div className={styles.bookWrapper}>
        <div className={styles.bookContent}>
<h1>Feel better & better with
ELUX studio</h1>
<p>Where elegance meets expertise. Our dedicated team of professionals is here to pamper you with personalized treatments, transforming your look and enhancing your natural beauty.</p>
   <button>Book Now</button>
        </div>

      </div>
    </div>
  );
}
