import * as Yup from "yup";


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
      .matches(/^[1-9][0-9\s\-()]{7,}$/, "Enter a valid phone number"),
    message: Yup.string()
      .required("Please enter your message")
      .min(10, "Message must be at least 10 characters"),
  });

const validation = Yup.object({
    FullName: Yup.string()
      .required("Please enter your name")
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name must be at most 20 characters"),
    Phonenumber: Yup.string()
      .required("Please enter your phone number")
      .matches(/[1-9][0-9\s\-()]{7,}$/, "Enter a valid phone number"),
 
  });

  export { validationSchema, validation };