import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";
import ConfirmPhoneNumber from "../Confirm/ConfirmPhoneNumber";
import * as verificationActions from "../../Redux/Slices/SignIn/verificationSlice";
import { useSelector } from "react-redux";


export default function Information({
  state,
  set,
  savefunc,
  cansel,
  name,
  btntext,
  comfirmphone,
  confirm
}) {

    const {code} = useSelector((state) => state.verification);
  return (
    
    <div className={styles.changeName}>
      <div className={styles.nameWrapper}>
        {comfirmphone ? (
          <>
            <p>Confirm Your Phone Number</p>
            <ConfirmPhoneNumber styl={styles.code} />
            <div className={styles.buttons}>
              <button className={styles.confirmbtn} onClick={confirm}    disabled={code.includes("")}>Save</button>
            </div>
          </>
        ) : (
          <>
            <p>{name}</p>
            <input
              type="text"
              value={state}
              onChange={(e) => set(e.target.value)}
              autoFocus
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
