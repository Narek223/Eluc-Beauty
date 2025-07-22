import React, { useRef, useState } from "react";
import styles from "./Confirm.module.scss";
import { useTranslation } from "react-i18next";


export default function PhoneVerification() {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const inputsRef = useRef([]);

  const { t } = useTranslation();

 

  return (
    <div className={styles.confirmContainer}>
      <h2>{t("ConfirmPhone.title")}</h2>
      <p>{t("ConfirmPhone.subtitle")}  </p>
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
       {t("ConfirmPhone.codeInput")} {" "}
        <span className={styles.resendlink}> {t("ConfirmPhone.resendCode")}.</span>
      </p>
      <button className={styles.confirmbtn}  disabled={code.includes("")}>
        {t("ConfirmPhone.submit")}
      </button>
    </div>
  );
}
