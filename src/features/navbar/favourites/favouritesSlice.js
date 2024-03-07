import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    getFavourites: (state, { payload }) => {
      state.favourites = payload;
    },
    addToFavourites: (state, { payload }) => {
      state.favourites = [...state.favourites, { ...payload, favourite: "true" }];
    },
  },
});

export const { } = favouritesSlice.actions;

export default favouritesSlice.reducer;
