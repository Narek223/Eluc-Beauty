import React from "react";
import styles from "./styles.module.scss";

export default function Information({state,set,savefunc,cansel,name,btntext}) {
  return (
    <div className={styles.changeName}>
      <div className={styles.nameWrapper}>
        <p>{name}</p>
        <input
          type="text"
          value={state}
          onChange={(e) => set(e.target.value)}
        />
      </div>
      <div className={styles.buttons}>
        <button onClick={ cansel}>Cansel</button>
        <button onClick={savefunc}>{btntext}</button>
      </div>
    </div>
  );
}
