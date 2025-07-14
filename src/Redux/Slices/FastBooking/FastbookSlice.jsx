import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: "",
  experts: "",
};

export const FastBookingSlice = createSlice({
  name: "FastBook",
  initialState,
  reducers: {
    setservice: (state, action) => {
      state.services = action.payload;
    },
    setexperts: (state, action) => {
      state.experts = action.payload;
    },
  },
});

export const { setservice, setexperts } = FastBookingSlice.actions;
export default FastBookingSlice.reducer;
