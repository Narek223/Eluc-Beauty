import { createSlice } from "@reduxjs/toolkit";
import { useSelector} from "react-redux";

const initialState = {
  anchorEl: null,
  changename: false,
  changenumber: false,

};



export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    handleclick: (state, action) => {
      state.anchorEl = action.payload;
    },
    handleClose:(state) => {
      state.anchorEl = null;
      state.changename = false;
      state.changenumber = false;
    },
    ChangeName: (state) => {
      state.changename = true;
    },
    changenum: (state) => {
      state.changenumber = true;
    },
  },
});

export const { handleclick,handleClose, ChangeName,changenum} = profileSlice.actions;
export default profileSlice.reducer;
