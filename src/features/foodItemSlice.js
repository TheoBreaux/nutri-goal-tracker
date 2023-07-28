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
    console.log(data);
    return [
      {
        Quantity: data.ingredients[0]["parsed"][0].quantity,
        Item: enteredFoodItem[0].toUpperCase() + enteredFoodItem.slice(1),
        Calories: data.calories,
        Carbohydrates: data.totalNutrients.CHOCDF.quantity.toFixed(0),
        Fat: data.totalNutrients.FAT.quantity.toFixed(0),
        Protein: data.totalNutrients.PROCNT.quantity.toFixed(0),
      },
    ];
  }
);

const foodSlice = createSlice({
  name: "food",
  initialState: {
    log: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setEnteredFoodItem: (state, action) => {
      state.log.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFoodItem.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchFoodItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.log = action.payload;
      })
      .addCase(fetchFoodItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setEnteredFoodItem } = foodSlice.actions;
export default foodSlice.reducer;
