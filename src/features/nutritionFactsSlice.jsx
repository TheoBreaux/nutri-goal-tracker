import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const appId = "bdf90e30";
const appKey = "ec0ac4e2dba2f6bf5504dbb4a2d5e7fb";

export const fetchFoodItem = createAsyncThunk(
  "food/fetchFoodItem",
  async (enteredFoodItem) => {
    const response = await axios.get(
      `https://api.edamam.com/api/nutrition-data?app_id=${appId}&app_key=${appKey}&nutrition-type=logging&ingr=${enteredFoodItem}`
    );
    const data = response.data;
    return [
      {
        id: data.ingredients[0].parsed[0].foodId,
        item: enteredFoodItem[0].toUpperCase() + enteredFoodItem.slice(1),
        calories: Number(data.calories),
        carbohydrates: Number(data.totalNutrients.CHOCDF.quantity.toFixed(0)),
        fat: Number(data.totalNutrients.FAT.quantity.toFixed(0)),
        protein: Number(data.totalNutrients.PROCNT.quantity.toFixed(0)),
      },
    ];
  }
);

const nutritionSlice = createSlice({
  name: "nutrition",
  initialState: {
    weight: "",
    activity: 0,
    activityUpdated: false,
    totalCalories: 0,
    adjustedTotalCalories: 0,
    totalCarbs: 0,
    totalFat: 0,
    totalProtein: 0,
    kcalAdjustment: 0,
    goal: "",
    foodLog: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setActivity: (state, action) => {
      if (!state.activityUpdated) {
        state.activity = state.activity + action.payload;
        state.activityUpdated = true;
      } else {
        state.activity = action.payload;
      }
    },
    setGoal: (state, action) => {
      state.goal = action.payload;
    },
    setKcalAdjustment: (state, action) => {
      state.kcalAdjustment = action.payload;
    },
    calculateTotalCalories: (state) => {
      state.totalCalories = state.activity * (state.weight * 10);
    },
    calculateAdjustedTotalCalories: (state, action) => {
      state.adjustedTotalCalories = action.payload;
    },
    setProtein: (state, action) => {
      state.totalProtein = action.payload;
    },
    setCarbs: (state, action) => {
      state.totalCarbs = action.payload;
    },
    setFat: (state, action) => {
      state.totalFat = action.payload;
    },
    deductCalories: (state) => {
      if (state.adjustedTotalCalories <= 0 || state.foodLog.length === 0) {
        return;
      }
      const lastFoodItem = state.foodLog[state.foodLog.length - 1];
      state.adjustedTotalCalories -= lastFoodItem.calories;
    },
    deductCarbs: (state) => {
      if (state.totalCarbs <= 0 || state.foodLog.length === 0) {
        return;
      }
      const lastFoodItem = state.foodLog[state.foodLog.length - 1];
      state.totalCarbs -= lastFoodItem.carbohydrates;
    },
    deductFat: (state) => {
      if (state.totalFat <= 0 || state.foodLog.length === 0) {
        return;
      }
      const lastFoodItem = state.foodLog[state.foodLog.length - 1];
      state.totalFat -= lastFoodItem.fat;
    },
    deductProtein: (state) => {
      if (state.totalProtein <= 0 || state.foodLog.length === 0) {
        return;
      }
      const lastFoodItem = state.foodLog[state.foodLog.length - 1];
      state.totalProtein -= lastFoodItem.protein;
    },
    addToFoodLog: (state, action) => {
      state.foodLog.push(action.payload);
    },
    removeFromFoodLog: (state, action) => {
      const index = state.foodLog.findIndex((entry) => {
        return entry.id === action.payload.id;
      });
      if (index !== -1) {
        const removedFoodItem = state.foodLog[index];

        state.adjustedTotalCalories += removedFoodItem.calories;
        state.totalCarbs += removedFoodItem.carbohydrates;
        state.totalFat += removedFoodItem.fat;
        state.totalProtein += removedFoodItem.protein;

        state.foodLog.splice(index, 1);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFoodItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFoodItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.foodLog.push(action.payload[0]);
      })
      .addCase(fetchFoodItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  setWeight,
  setActivity,
  calculateTotalCalories,
  calculateAdjustedTotalCalories,
  setKcalAdjustment,
  setGoal,
  setProtein,
  setCarbs,
  setFat,
  deductCalories,
  deductCarbs,
  deductFat,
  deductProtein,
  addToFoodLog,
  removeFromFoodLog,
} = nutritionSlice.actions;

export default nutritionSlice.reducer;
