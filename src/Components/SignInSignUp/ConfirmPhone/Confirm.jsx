import React, { useRef } from "react";
import styles from "./Confirm.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as verificationActions from "../../../Redux/Slices/SignIn/verificationSlice";
import ConfirmPhoneNumber from "../../../SharedComponents/Confirm/ConfirmPhoneNumber";

export default function PhoneVerification() {
  const inputsRef = useRef([]);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { code, bool } = useSelector((state) => state.verification);
  const { values } = useSelector((state) => state.signin);

  const resendcode = () => {
    dispatch(verificationActions.resetCode());
    inputsRef.current[0]?.focus();
  };

  const submitfunc = () => {
    navigate("/");
    dispatch(verificationActions.setbool(true));
    dispatch(verificationActions.resetCode());
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("FullName", values.FullName);
    localStorage.setItem("Phonenumber", values.Phonenumber);

  };

  return (
    <div className={styles.confirmContainer}>
      <h2>{t("ConfirmPhone.title")}</h2>
      <p>{t("ConfirmPhone.subtitle")}</p>
      <ConfirmPhoneNumber styl={styles.codeinputs} />
      <p className={styles.resendtext} onClick={resendcode}>
        {t("ConfirmPhone.codeInput")}{" "}
        <span className={styles.resendlink}>{t("ConfirmPhone.resendCode")}.</span>
      </p>
      <button
        onClick={submitfunc}
        className={styles.confirmbtn}
        disabled={code.join("") !== "55555"}
      >
        {t("ConfirmPhone.submit")}
      </button>
    </div>
  );
}
