import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  rockets: [],
};

export const counterSlice = createSlice({
  name: "rocket",
  initialState,
  reducers: {},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
