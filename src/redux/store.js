import { configureStore } from "@reduxjs/toolkit";
import { newsAPI } from "./newsSlice";

const store = configureStore({
  reducer: {
    [newsAPI.reducerPath]: newsAPI.reducer
  },
});

export default store;
