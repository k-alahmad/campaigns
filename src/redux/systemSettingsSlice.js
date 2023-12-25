import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: {},
  project: {},
};
const systemSettingsSlice = createSlice({
  name: "systemSettings",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.page = action.payload.page;
    },
    setCurrentProject: (state, action) => {
      state.project = action.payload.project;
    },
    resetState: (state, action) => {
      state = initialState;
    },
  },
});

export const { setCurrentPage, setCurrentProject, resetState } =
  systemSettingsSlice.actions;
export const selectSystemSettings = (state) => state.systemSettings;
export const selectProject = (state) => state.systemSettings.project;
export const selectPage = (state) => state.systemSettings.page;

export default systemSettingsSlice.reducer;
