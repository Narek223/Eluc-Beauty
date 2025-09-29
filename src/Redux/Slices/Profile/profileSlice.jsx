import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  anchorEl: null,
  changename: false,
  changenumber: false,
  confirm: false,
  isMobile: null,
  mode: localStorage.getItem("theme") || "light",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    handleclick: (state, action) => {
      state.anchorEl = action.payload;
    },
    handleClose: (state) => {
      state.anchorEl = null;
      state.changename = false;
      state.changenumber = false;
      state.confirm = false;
    },
    ChangeName: (state, action) => {
      state.changename = action.payload;
      state.changenumber = false;
      state.confirm = false;
    },
    changenum: (state, action) => {
      state.changenumber = action.payload;
      state.changename = false;
      state.confirm = false;
    },
    isConfirm: (state, action) => {
      state.confirm = action.payload;
    },
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
      
    },
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.mode);
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const {
  handleclick,
  handleClose,
  ChangeName,
  changenum,
  isConfirm,
  setIsMobile,
  toggleTheme,
  setTheme,
} = profileSlice.actions;
export default profileSlice.reducer;
