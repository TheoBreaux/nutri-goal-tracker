import { configureStore } from "@reduxjs/toolkit";
import nutritionFactsReducer from "./nutritionFactsSlice";

const store = configureStore({
  reducer: {
    nutrition: nutritionFactsReducer,
  },
});

export default store;
