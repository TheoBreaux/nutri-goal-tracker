import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./foodItemSlice";

const store = configureStore({
  reducer: {
    food: foodReducer,
  },
});

export default store;
