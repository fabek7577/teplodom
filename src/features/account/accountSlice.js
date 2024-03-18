import { createSlice } from "@reduxjs/toolkit";
import { getAccount, registerAccount } from "../../services/apiProducts";

const initialState = {
  user: {},
};

const accountSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, { payload }) => {
      registerAccount(payload);
      state.user = payload;
    },
    loginUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { loginUser, registerUser } = accountSlice.actions;

export default accountSlice.reducer;
