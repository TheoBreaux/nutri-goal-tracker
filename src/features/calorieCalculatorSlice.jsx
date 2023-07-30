import { createSlice } from "@reduxjs/toolkit";

const calorieCalculatorSlice = createSlice({
  name: "calorieCalculator",
  initialState: {
    weight: 0,
    activity: 0,
    // activityPrevState: 0,
    activityUpdated: false,
    totalCalories: 0,
    adjustedTotalCalories: 0,
    kcalAdjustment: 0,
    goal: "",
  },
  reducers: {
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setActivity: (state, action) => {
      if (!state.activityUpdated) {
        // state.activityPrevState = state.activity;
        state.activity = state.activity + action.payload;
        state.activityUpdated = true;
      } else {
        state.activity = action.payload;
      }
    },
    calculateTotalCalories: (state) => {
      state.totalCalories = state.activity * (state.weight * 10);
    },
    calculateAdjustedTotalCalories: (state, action) => {
      state.adjustedTotalCalories = action.payload;
    },
    setKcalAdjustment: (state, action) => {
      state.kcalAdjustment = action.payload;
    },
    setGoal: (state, action) => {
      state.goal = action.payload;
    },
    deductCaloriesFromTotal: (state, action) => {},
  },
});

export const {
  setWeight,
  setActivity,
  calculateTotalCalories,
  calculateAdjustedTotalCalories,
  setKcalAdjustment,
  setGoal,
  deductCaloriesFromTotal,
} = calorieCalculatorSlice.actions;

export default calorieCalculatorSlice.reducer;
