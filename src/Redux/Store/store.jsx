import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "../Slices/Header/language";

export const store = configureStore({
  reducer: {
    language: languageSlice,
  },
});
