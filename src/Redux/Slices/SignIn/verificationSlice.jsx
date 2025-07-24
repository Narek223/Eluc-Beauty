import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: ["", "", "", "", ""],
  bool:false
};

const verificationSlice = createSlice({
  name: "verification",
  initialState,
  reducers: {
    updateCode(state, action) {
      const { index, value } = action.payload;
      state.code[index] = value;
    },
    resetCode(state) {
      state.code = ["", "", "", "", ""];
    },
    setbool(state, action) {
      state.bool = action.payload;
    }
  },
});

export const { updateCode, resetCode,setbool } = verificationSlice.actions;
export default verificationSlice.reducer;
