import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openPopup: (state, action) => {
      state.isOpen = true;
    },
    closePopup: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openPopup, closePopup } = appSlice.actions;
export default appSlice.reducer;
