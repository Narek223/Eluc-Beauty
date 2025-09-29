import React, { useState } from "react";
import styles from "./sign.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validation } from "../Utils/validation";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ConfirmPhone from "./ConfirmPhone/Confirm";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import * as signinActions from "../../Redux/Slices/SignIn/signinSlice";
import Phone from "../../SharedComponents/PhoneComponent/Phone";


export default function SignIn() {
  const dispatch = useDispatch();
  const { isConfirmedStep, values } = useSelector((state) => state.signin);

  const { t } = useTranslation();

  const initialValues = {
    FullName: "",
    Phonenumber: "",
  };

  return (
    <div className={styles.Login}>
      <div className={styles.loginWrapper}>
        <div className={styles.FormConteiner}>
          <div className={styles.formgroup}>
            {isConfirmedStep ? (
              <ConfirmPhone />
            ) : (
              <>
                <h1>{t("signin.title")}</h1>
                <div className={styles.LoginPart}>
                  <p>{t("signin.subtitle")}</p>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validation}
                    onSubmit={(values) =>
                      dispatch(signinActions.handleSubmit(values))
                    }
                  >
                    {({ isValid, dirty, isSubmitting, touched, errors }) => (
                      <Form className={styles.form}>
                        <div className={styles.formWrapper}>
                          <Field
                            type="text"
                            name="FullName"
                            id="username"
                            placeholder={t("signin.fullName")}
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
                    name="Phonenumber"
                    component={Phone}
                    placeholder={t("contact.phone")}
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
                            label={t("signin.keepSignedIn")}
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
                          {t("signin.submit")}
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </>
            )}
          </div>
        </div>

        <div className={styles.imgbox}>
          <div className={styles.img}></div>
        </div>
      </div>
    </div>
  );
}
