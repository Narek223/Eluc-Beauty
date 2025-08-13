import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrowIcon: true,
  anchorEl: null,
};

export const Timeslice = createSlice({
  name: "time",
  initialState,
  reducers: {
    handleClose: (state) => {
      state.anchorEl = null;
      state.arrowIcon = true;
    },
    handleClick: (state, action) => {
      action.payload.event.preventDefault();
      state.anchorEl = action.payload.event.currentTarget;
      state.arrowIcon = !state.arrowIcon;
    },
  },
});

export const { handleClose, handleClick } = Timeslice.actions;
export default Timeslice.reducer;