import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  anchorEl: null,
  changename: false,
  changenumber: false,
  confirm:false,

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
      state.confirm = false;
    },
    ChangeName: (state,action) => {
      state.changename = action.payload;
    },
    changenum: (state,action) => {
      state.changenumber = action.payload;
    },
    isConfirm:(state,action)=>{
 state.confirm = action.payload;
    }
  },
});

export const { handleclick,handleClose, ChangeName,changenum,isConfirm} = profileSlice.actions;
export default profileSlice.reducer;
