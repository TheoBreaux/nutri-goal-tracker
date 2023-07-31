import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItem } from "../features/nutritionFactsSlice";
import { Link } from "react-router-dom";
import {
  deductCalories,
  deductCarbs,
  deductFat,
  deductProtein,
} from "../features/nutritionFactsSlice";
import NutrientsRemaining from "./NutrientsRemaining";

const FoodEntryForm = () => {
  const calories = useSelector(
    (state) => state.nutrition.adjustedTotalCalories
  );

  const food = useSelector((state) => state.nutrition.foodLog);

  console.log(calories);
  console.log(food);

  const [enteredFoodItem, setEnteredFoodItem] = useState("");
  const dispatch = useDispatch();

  const dispatchActions = async (e) => {
    e.preventDefault();

    if (!enteredFoodItem) {
      return;
    }
    await dispatch(fetchFoodItem(enteredFoodItem));
    dispatch(deductCalories());
    dispatch(deductCarbs());
    dispatch(deductFat());
    dispatch(deductProtein());
    setEnteredFoodItem("");
  };

  console.log(food);

  return (
    <div className="food-entry-container">
      <form className="food-entry-form">
        <label id="food-input-label" htmlFor="enteredfooditem">
          Please Enter Your Food Item:{" "}
        </label>
        <input
          className="input"
          type="text"
          id="enteredfooditem"
          name="enteredfooditem"
          value={enteredFoodItem}
          onChange={(e) => setEnteredFoodItem(e.target.value)}
          placeholder="ex. 1 slice of pepperoni pizza"
          style={{ marginBottom: "10px" }}
          required
        />
        <p>
          Please be as specific as you can with the quantity and measurement of
          your food as possible.{" "}
          <span style={{ fontWeight: "bold" }}>
            For example, 1 cup rice, 10 oz chickpeas, etc.
          </span>{" "}
        </p>
      </form>

      <button className="button" onClick={dispatchActions}>
        Click Here To Add
      </button>
      <NutrientsRemaining />
      <Link to="/foodlog" className="links">
        <button className="button" style={{ marginTop: "20px" }}>
          View Your Food Log
        </button>
      </Link>
    </div>
  );
};

export default FoodEntryForm;
