import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";
import ConfirmPhoneNumber from "../Confirm/ConfirmPhoneNumber";
export default function Information({
  state,
  set,
  savefunc,
  cansel,
  name,
  btntext,
  comfirmphone,
}) {
  return (
    <div className={styles.changeName}>
      <div className={styles.nameWrapper}>
        {comfirmphone ? (
          <>
            <p>Confirm Your Phone Number</p>
            <ConfirmPhoneNumber styl={styles.code} />
            <div className={styles.buttons}>
              <button className={styles.confirmbtn}>Save</button>
            </div>
          </>
        ) : (
          <>
            <p>{name}</p>
            <input
              type="text"
              value={state}
              onChange={(e) => set(e.target.value)}
            />
            <div className={styles.buttons}>
              <button onClick={cansel}>Cancel</button>
              <button onClick={savefunc}>{btntext}</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
