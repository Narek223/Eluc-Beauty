import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 0,
  itemsPerPage:6,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
     handlePageChange: (state, action) => {
      state.currentPage = action.payload;
    },
    handleItemsPerPageChange: (state, action) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 0;
    },
  },
});

export const { handlePageChange,handleItemsPerPageChange } = blogSlice.actions;
export default blogSlice.reducer;
