import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  data: null,
  galleryModal: false,
  galleryData: null,
  settingsModal: false,
  settingsData: null,
  registered: JSON.parse(localStorage.getItem("Registered")) ?? false,
  listRegistered: JSON.parse(localStorage.getItem("listRegistered")) ?? [],
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.open = true;
      state.data = action.payload;
    },
    hideModal: (state, action) => {
      state.open = false;
      state.data = null;
    },
    showGalleryModal: (state, action) => {
      state.galleryModal = true;
      state.galleryData = action.payload;
    },
    hideGalleryModal: (state, action) => {
      state.galleryModal = false;
      state.galleryData = null;
    },
    showSettingsModal: (state, action) => {
      state.settingsModal = true;
      state.settingsData = action.payload;
    },
    hideSettingsModal: (state, action) => {
      state.settingsModal = false;
      state.settingsData = null;
    },
    register: (state, action) => {
      let newRegister = {
        email: action.payload.email,
        phoneNo: action.payload.phoneNo,
      };
      state.listRegistered.push(newRegister);
      localStorage.setItem(
        "listRegistered",
        JSON.stringify(state.listRegistered)
      );
      state.registered = true;
      localStorage.setItem("Registered", true);
      state.download = false;
    },
  },
});

export const {
  showModal,
  hideModal,
  showGalleryModal,
  hideGalleryModal,
  showSettingsModal,
  hideSettingsModal,
  register,
} = modalSlice.actions;
export const selectModal = (state) => state.modal;
export const selectState = (state) => state.modal.open;
export const selectGalleryModalState = (state) => state.modal.galleryModal;
export const selectSettingsModalState = (state) => state.modal.settingsModal;
export const selectModalData = (state) => state.modal.data;
export const selectGalleryModalData = (state) => state.modal.galleryData;
export const selectSettingsModalData = (state) => state.modal.settingsData;
export const selectRegisterState = (state) => state.modal.registered;
export const selectListRegisterState = (state) => state.modal.listRegistered;

export default modalSlice.reducer;
