import React, { useRef, useEffect } from "react";
import styles from "./confirm.module.scss"; 
import { useDispatch, useSelector } from "react-redux";
import * as verificationActions from "../../Redux/Slices/SignIn/verificationSlice";

export default function CodeInput({styl}) {
  const inputsRef = useRef([]);
  const dispatch = useDispatch();
  const { code } = useSelector((state) => state.verification);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    if (!/^\d$/.test(value)) return;

    dispatch(verificationActions.updateCode({ index, value }));

    if (index < code.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const isFullCodeEntered = code.every((digit) => digit !== "");
  const isError = isFullCodeEntered && code.join("") !== "55555";

  return (
    <div className={styl} >
      {code.map((digit, index) => (

        <input
        style={{border: isError ? '2px solid red' : '1px solid #030303ff'}}
          className={`${styles.input} ${isError ? styles.error : ""}`}
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          value={digit}
          maxLength={1}
        />
      ))}
    </div>
  );
}
