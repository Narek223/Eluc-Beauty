import React from 'react'
import styles from "./Subscribe.module.scss"

export default function Subscribe() {
  return (
    <div className={styles.subscribeContainer}>
<div className={styles.subscribeWrapper}>
  <div className={styles.subscribeContent}>


  <h1>SUBSCRIBE <span>Elux</span></h1>
  <p>Subscribe to our newsletter for expert beauty tips and salon news</p>
  <input type="email" placeholder='*Email Address' />
  <button>Subscribe</button>
    </div>
</div>
    </div>
  )
}
