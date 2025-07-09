import React, { useState } from "react";
import styles from "./contact.module.scss";
import ContactImg from "../../assets/ContactUs/Image.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../Utils/validation";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { t } = useTranslation(); 

  const initialValues = {
    FullName: "",
    mail: "",
    Phonenumber: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    setSent(true);
    console.log(values);
  };

  return (
    <div className={styles.contactConteiner}>
      <div className={styles.ContactWrapper}>
        <div className={styles.img}>
          <img src={ContactImg} />
        </div>
        <div className={styles.formPart}>
          <div className={styles.formWrapper}>
            <h1>{t("contact.title")}</h1>
            <p>{t("contact.subtitle")}</p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isValid, dirty, isSubmitting, touched, errors }) => (
                <Form className={styles.form}>
                  <Field
                    type="text"
                    name="FullName"
                    id="username"
                    placeholder={t("contact.fullName")}
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
                    type="mail"
                    name="mail"
                    id="password"
                    placeholder={t("contact.email")}
                    className={` ${
                      touched.mail && errors.mail ? styles.inputError : ""
                    }`}
                  />
                  <ErrorMessage
                    name="mail"
                    component="div"
                    className={styles.error}
                  />

                  <Field
                    type="tel"
                    name="Phonenumber"
                    id="password"
                    placeholder={t("contact.phone")}
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
                  <Field
                    as="textarea"
                    name="message"
                    placeholder={t("contact.message")}
                    className={` ${
                      touched.message && errors.message ? styles.inputError : ""
                    }`}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className={styles.error}
                  />
                  <button
                    type="submit"
                    className={
                      !isValid || !dirty || isSubmitting
                        ? styles.submitButtonDisabled
                        : styles.submitButton
                    }
                    disabled={isSubmitting || !(isValid && dirty)}
                  >
                    {t("contact.send")}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}