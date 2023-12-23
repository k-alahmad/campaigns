import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  primary: "",
  secondary: "",
  third: "",
};
const systemSettingsSlice = createSlice({
  name: "systemSettings",
  initialState,
  reducers: {
    setColors: (state, action) => {
      state.primary = action.payload.primary;
      state.secondary = action.payload.secondary;
      state.third = action.payload.third;
    },
    resetColoes: (state, action) => {
      state = initialState;
    },
  },
});

export const { setColors, resetColoes } = systemSettingsSlice.actions;
export const selectSystemSettings = (state) => state.systemSettings;

export default systemSettingsSlice.reducer;
