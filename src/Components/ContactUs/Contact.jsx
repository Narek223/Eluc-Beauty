import React, { useState } from "react";
import styles from "./contact.module.scss";
import ContactImg from "../../assets/ContactUs/Image.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const validationSchema = Yup.object({
    FullName: Yup.string()
      .required("Please enter your name")
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name must be at most 20 characters"),
    mail: Yup.string()
      .required("Please enter your email")
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "incorrect email"
      ),
    Phonenumber: Yup.string()
      .required("Please enter your phone number")
      .matches(/^\d+$/, "Phone number must contain only digits"),
    message: Yup.string()
      .required("Please enter your message")
      .min(10, "Message must be at least 10 characters"),
  });

  const initialValues = {
    FullName: "",
    mail: "",
    Phonenumber: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    setSent(true);
  };

  return (
    <div className={styles.contactConteiner}>
      <div className={styles.ContactWrapper}>
        <div className={styles.img}>
          <img src={ContactImg} />
        </div>
        <div className={styles.formPart}>
          <div className={styles.formWrapper}>
            <h1>Contact US</h1>
            <p>
              Whether you have questions, feedback, or need assistance, our team
              is ready to support you. 
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isValid, dirty, isSubmitting }) => (
                <Form className={styles.form}>
                  <Field
                    type="text"
                    name="FullName"
                    id="username"
                    placeholder="*FullName "
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
                    placeholder="*Email Address "
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
                    placeholder="*Phone number "
                  />
                  <ErrorMessage
                    name="Phonenumber"
                    component="div"
                    className={styles.error}
                  />
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="*Your Message"
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
                    {sent ? "Message sent" : "Send Message"}
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
