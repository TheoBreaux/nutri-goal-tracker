import { createSlice } from "@reduxjs/toolkit";

const calorieCalculatorSlice = createSlice({
  name: "calorieCalculator",
  initialState: {
    weight: 0,
    activity: 0,
    totalCalories: 0,
    kcalAdjustment: 0,
  },
  reducers: {
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setActivity: (state, action) => (state.activity = action.payload),
    calculateTotalCalories: (state) => {
      state.totalCalories = state.activity * (state.weight * 10);
    },
    setKcalAdjustment: (state, action) => {
      state.kcalAdjustment = action.payload;
    },
  },
});

export const {
  setWeight,
  setActivity,
  calculateTotalCalories,
  setKcalAdjustment,
} = calorieCalculatorSlice.actions;

export default calorieCalculatorSlice.reducer;
