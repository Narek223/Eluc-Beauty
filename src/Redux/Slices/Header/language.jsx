import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../../i18n";

const initialState = {
  language: i18n.language === "de" ? "De" : "Eng",
};



export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    handleLanguageChange: (state, action) => {
      action.payload === "Eng"
        ? i18n.changeLanguage("en")
        : i18n.changeLanguage("de");

        state.language=action.payload
    },
  },
});

export const { setLanguage, handleLanguageChange } = languageSlice.actions;
export default languageSlice.reducer;
