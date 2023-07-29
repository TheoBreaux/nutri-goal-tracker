import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./foodItemSlice";
import calorieCalculatorReducer from "./calorieCalculatorSlice";

const store = configureStore({
  reducer: {
    food: foodReducer,
    calorieCalculator: calorieCalculatorReducer,
  },
});

export default store;
