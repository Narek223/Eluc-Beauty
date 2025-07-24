import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConfirmedStep: false,
  values: {},
};

export const signinSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
   handleSubmit: (state, action) => {
      state.isConfirmedStep = true;
      state.values = action.payload;
    }
  },
});


export const {handleSubmit  } = signinSlice.actions;
export default signinSlice.reducer;