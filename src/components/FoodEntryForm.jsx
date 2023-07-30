import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItem } from "../features/foodItemSlice";
import { Link } from "react-router-dom";
import { deductCaloriesFromTotal } from "../features/calorieCalculatorSlice";

const FoodEntryForm = () => {
  const calories = useSelector(
    (state) => state.calorieCalculator.adjustedTotalCalories
  );

  const food = useSelector((state) => state.food.foodLog[0]);

  console.log(calories);
  console.log(food);

  const [enteredFoodItem, setEnteredFoodItem] = useState("");
  const dispatch = useDispatch();

  const dispatchActions = (e) => {
    e.preventDefault();
    dispatch(fetchFoodItem(enteredFoodItem));
    // dispatch(deductCaloriesFromTotal(food));
    setEnteredFoodItem("");
  };

  return (
    <form>
      <label htmlFor="enteredfooditem">Please Enter Your Food Item: </label>
      <input
        type="text"
        id="enteredfooditem"
        name="enteredfooditem"
        value={enteredFoodItem}
        onChange={(e) => setEnteredFoodItem(e.target.value)}></input>
      <p>ex. 1 slice of pepperoni pizza</p>
      <button onClick={dispatchActions}>Click Here To Add</button>
      <Link to="/foodlog">
        <h2>View Your Food Log</h2>
      </Link>
    </form>
  );
};

export default FoodEntryForm;
