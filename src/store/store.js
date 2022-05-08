import { configureStore } from "@reduxjs/toolkit";
import RocketReducer from "../store//RocketSlice";

export const store = configureStore({
  reducer: {
    rocket: RocketReducer,
  },
});
