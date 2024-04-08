import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modalList: [],
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setModal: (state, { payload }) => {
      const modal = {
        id: Date.now(),
        modal: payload,
      };
      state.modalList = [modal];
    },
    delModals: (state, { payload }) => {
      state.modalList = [];
    },
  },
});

export const { setModal, delModals } = modalSlice.actions;

export default modalSlice.reducer;
