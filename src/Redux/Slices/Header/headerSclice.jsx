import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isScrolled: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setIsScrolled: (state, action) => {
      state.isScrolled = action.payload;
    },
  },
});


export const { setIsScrolled } = headerSlice.actions;
export default headerSlice.reducer;