import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  rockets: [],
  error: null,
};

export const getRockets = createAsyncThunk("rocket/getRockets", async () => {
  return fetch(`https://api.spacexdata.com/v3/launches`).then((res) =>
    res.json()
  );
});

export const rocketSlice = createSlice({
  name: "rocket",
  initialState,
  reducers: {},
  extraReducers: {
    [getRockets.pending]: (state, action) => {
      state.loading = true;
    },
    [getRockets.fulfilled]: (state, action) => {
      state.loading = false;
      state.rockets = action.payload;
    },
    [getRockets.rejected]: (state, action) => {
      state.loading = false;
      state.rockets = action.payload;
    },
  },
});

export default rocketSlice.reducer;
