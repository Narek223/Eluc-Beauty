import React, { useState } from "react";
import styles from "./sign.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validation } from "../Utils/validation";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ConfirmPhone from "./ConfirmPhone/Confirm";

export default function SignIn() {
  const [isConfirmedStep, setIsConfirmedStep] = useState(false);

  const initialValues = {
    FullName: "",
    Phonenumber: "",
  };
  const handleSubmit = (values) => {
  
    setIsConfirmedStep(true);
  };

  return (
    <div className={styles.Login}>
      <div className={styles.loginWrapper}>
        <div className={styles.FormConteiner}>
          {isConfirmedStep ? (
            <ConfirmPhone />
          ) : (
    <>
             <h1>Sign In / Sign Up</h1>
                <div className={styles.LoginPart}>
               
              <p>Enter your details below to continue !</p>
              <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={handleSubmit}
              >
                {({ isValid, dirty, isSubmitting, touched, errors }) => (
                  <Form className={styles.form}>
                    <div className={styles.formWrapper}>
                      <Field
                        type="text"
                        name="FullName"
                        id="username"
                        placeholder="*Full Name "
                        className={` ${
                          touched.FullName && errors.FullName
                            ? styles.inputError
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        name="FullName"
                        component="div"
                        className={styles.error}
                      />

                      <Field
                        type="tel"
                        name="Phonenumber"
                        id="password"
                        placeholder="*Phone Number "
                        className={` ${
                          touched.Phonenumber && errors.Phonenumber
                            ? styles.inputError
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        name="Phonenumber"
                        component="div"
                        className={styles.error}
                      />
                    </div>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Keep me signed in details"
                        sx={{
                          "& .MuiFormControlLabel-label": {
                            color: "#222",
                            fontSize: "12px",
                            fontFamily: "Manrope, sans-serif",
                            fontWeight: 500,
                            color: "rgba(124, 124, 124, 1)",
                          },
                        }}
                      />
                    </FormGroup>

                    <button
                      type="submit"
                      className={
                        !isValid || !dirty || isSubmitting
                          ? styles.submitButtonDisabled
                          : styles.submitButton
                      }
                  disabled={isSubmitting || !(isValid && dirty)}
                    >
                      Sign In
                    </button>
                  </Form>
                )}
              </Formik>
            </div>

    </>
         
          )}
        
        </div>
        <div className={styles.imgbox}>
          <div className={styles.img}></div>
        </div>
      </div>
    </div>
  );
}
