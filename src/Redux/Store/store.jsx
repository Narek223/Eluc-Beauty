import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "../Slices/Header/language";
import headerSlice  from "../Slices/Header/headerSclice";
export const store = configureStore({
  reducer: {
    language: languageSlice,
    header:headerSlice
  },
});
