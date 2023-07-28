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
        calories: data.calories,
        carbohydrates: data.totalNutrients.CHOCDF.quantity.toFixed(0),
        fat: data.totalNutrients.FAT.quantity.toFixed(0),
        protein: data.totalNutrients.PROCNT.quantity.toFixed(0),
      },
    ];
  }
);

const foodSlice = createSlice({
  name: "food",
  initialState: {
    foodLog: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addToFoodLog: (state, action) => {
      state.foodLog.push(action.payload);
    },
    removeFromFoodLog: (state, action) => {
      const index = state.foodLog.findIndex((foodItem) => {
        foodItem.id === action.payload.id;
      });
      if (index !== -1) {
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
        state.foodLog = action.payload;
      })
      .addCase(fetchFoodItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addToFoodLog, removeFromFoodLog } = foodSlice.actions;
export default foodSlice.reducer;
