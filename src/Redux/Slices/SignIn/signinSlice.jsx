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
    },
       setFullName: (state, action) => {
      state.values.FullName = action.payload;
    },
      setPhoneNumber: (state, action) => {
      state.values.Phonenumber = action.payload;
    },
  },
});


export const {handleSubmit,setFullName,setPhoneNumber  } = signinSlice.actions;
export default signinSlice.reducer;