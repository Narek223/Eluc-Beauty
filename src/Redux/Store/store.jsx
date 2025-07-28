import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "../Slices/Header/language";
import headerSlice  from "../Slices/Header/headerSclice";
import  blogSlice  from "../Slices/Blog/blog";
import expertReducer from "../Slices/ExpertDetalis/Expert";
import FastBooking from "../Slices/FastBooking/FastbookSlice";
import  signinSlice  from "../Slices/SignIn/signinSlice";
import verificationSlice from "../Slices/SignIn/verificationSlice";
import profileSlice from "../Slices/Profile/profileSlice";

export const store = configureStore({
  reducer: {
    language: languageSlice,
    header:headerSlice,
    blog:blogSlice,
    Expert:expertReducer,
    FastBook:FastBooking,
    signin:signinSlice,    
    verification: verificationSlice,
    profile: profileSlice,

  },
});
