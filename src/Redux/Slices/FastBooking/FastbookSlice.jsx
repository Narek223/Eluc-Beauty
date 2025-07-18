import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: "",
  experts: "",
  date:"",
  time:""

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
    setdate: (state, action) => {
      state.date = action.payload;
    },
    settime:(state, action) => {
      state.time = action.payload;
    }
  },
});

export const { setservice, setexperts,setdate,settime } = FastBookingSlice.actions;
export default FastBookingSlice.reducer;
