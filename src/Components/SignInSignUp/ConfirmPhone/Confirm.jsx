import React, { useRef } from "react";
import styles from "./Confirm.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as verificationActions from "../../../Redux/Slices/SignIn/verificationSlice";

export default function PhoneVerification() {
  const inputsRef = useRef([]);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {code,bool} = useSelector((state) => state.verification);

  const valuefunc = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    if (!/^\d$/.test(value)) return;

    dispatch(verificationActions.updateCode({ index, value }));

    if (index < code.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const resendcode = () => {
    dispatch(verificationActions.resetCode());
    inputsRef.current[0]?.focus();
  };

  const submitfunc = () => {
    navigate("/");
    dispatch(verificationActions.setbool(true));
  };

  return (
    <div className={styles.confirmContainer}>
      <h2>{t("ConfirmPhone.title")}</h2>
      <p>{t("ConfirmPhone.subtitle")}</p>
      <div className={styles.codeinputs}>
        {code.map((digit, index) => (
          <input
            ref={(el) => (inputsRef.current[index] = el)}
            onChange={(e) => valuefunc(e, index)}
            key={index}
            maxLength={1}
            value={digit}
          />
        ))}
      </div>
      <p className={styles.resendtext} onClick={resendcode}>
        {t("ConfirmPhone.codeInput")}{" "}
        <span className={styles.resendlink}>{t("ConfirmPhone.resendCode")}.</span>
      </p>
      <button
        onClick={submitfunc}
        className={styles.confirmbtn}
        disabled={code.includes("")}
      >
        {t("ConfirmPhone.submit")}
      </button>
    </div>
  );
}
