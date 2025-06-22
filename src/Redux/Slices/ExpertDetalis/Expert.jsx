import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedWork: null,
  selectedIndex: null,
  open: false,
};

export const ExpertSlice = createSlice({
  name: "Expert",
  initialState,
  reducers: {
    close: (state) => {
      state.open = false;
    },
    setSelectedWork: (state, action) => {
     state.selectedWork = action.payload;
    },
    prevWork: (state, action) => {
      const worksLength = action.payload;
      state.selectedIndex =
        state.selectedIndex === 0 ? worksLength - 1 : state.selectedIndex - 1;
    },
    nextWork: (state, action) => {
      const worksLength = action.payload;
      state.selectedIndex =
        state.selectedIndex === worksLength - 1 ? 0 : state.selectedIndex + 1;
    },
    setSelectedIndex: (state, action) => {
     state.selectedIndex = action.payload;
    },

    setOpen: (state, action) => {
      state.open = true;
    },
  },
});

export const {
  prevWork,
  close,
  nextWork,
  setSelectedIndex,
  setSelectedWork,
  setOpen
} = ExpertSlice.actions;
export default ExpertSlice.reducer;
