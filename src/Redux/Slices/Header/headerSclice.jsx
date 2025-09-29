import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isScrolled: false,
  showNavbar: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setIsScrolled: (state, action) => {
      state.isScrolled = action.payload;
    },
    setShowNavbar: (state, action) => {
      state.showNavbar = action.payload;
    },
  },
});

export const { setIsScrolled, setShowNavbar } = headerSlice.actions;
export default headerSlice.reducer;
