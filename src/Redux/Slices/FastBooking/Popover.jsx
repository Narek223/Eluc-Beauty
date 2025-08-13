import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  anchorEl: null,
  arrowIcon: true,
};

export const Popoverslice = createSlice({
  name: "popover",
  initialState,
  reducers: {
    handleClose: (state) => {
      state.anchorEl = null;
      state.arrowIcon = true;
    },
    popover: (state, action) => {
      action.payload.event.preventDefault();
      if (!action.payload.value) return;
      state.arrowIcon = !state.arrowIcon;
      state.anchorEl = action.payload.event.currentTarget;
    },
  },
});

export const { handleClose, popover } = Popoverslice.actions;
export default Popoverslice.reducer;
