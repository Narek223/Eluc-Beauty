import React, { useRef, useState } from "react";
import styles from "./Confirm.module.scss";

export default function PhoneVerification() {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const inputsRef = useRef([]);

 

  return (
    <div className={styles.confirmContainer}>
      <h2>Confirm Your Phone Number</h2>
      <p>To complete the registration, please enter the 5-digit code sent to your phone number.</p>
      <div className={styles.codeinputs}>
        {code.map((digit, index) => (
          <input
            key={index}
            maxLength={1}
            value={digit}
          />
        ))}
      </div>
      <p className={styles.resendtext}>
        If you haven’t received the code within two minutes, click{" "}
        <span className={styles.resendlink}>“Resend Code”.</span>
      </p>
      <button className={styles.confirmbtn}  disabled={code.includes("")}>
        Confirm
      </button>
    </div>
  );
}
