import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "../Slices/Header/language";
import headerSlice  from "../Slices/Header/headerSclice";
import  blogSlice  from "../Slices/Blog/blog";
import expertReducer from "../Slices/ExpertDetalis/Expert";
export const store = configureStore({
  reducer: {
    language: languageSlice,
    header:headerSlice,
    blog:blogSlice,
    Expert:expertReducer

  },
});
