import React from "react";
import PhoneInput from "react-phone-input-2";
import styles from "../../Components/ContactUs/contact.module.scss";



export default function Phone({ field, form, ...props }) {
  const { touched, errors } = form;
  return (
    <div style={{ margin: "5px 0 24px 0" }}>
      <style>
        {`
   

          .react-tel-input .country-list .country:hover {
            background-color: var(--color-bg-secondary);
            color: var(--color-text-secondary);
          }
            .react-tel-input .country-list .highlight {
    background-color: var(--color-bg-secondary) !important;
         color: var(--color-text-secondary); !important;
}

        
        `}
      </style>
      <PhoneInput
        {...props}
        country={"de"}
        value={field.value}
        onChange={(value) => form.setFieldValue(field.name, value)}
        onBlur={() => form.setFieldTouched(field.name, true)}
        inputClass={`${
          touched.Phonenumber && errors.Phonenumber ? styles.inputError : ""
        }`}
        dropdownStyle={{
          backgroundColor: "var(--color-bg)",
          color: " var(  --color-text-secondary)",
        }}
        specialLabel=""
      />
    </div>
  );
}
