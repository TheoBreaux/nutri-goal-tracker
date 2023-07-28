import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFoodItem, addToFoodLog } from "../features/foodItemSlice";

const FoodEntryForm = () => {
  const [enteredFoodItem, setEnteredFoodItem] = useState("");
  const dispatch = useDispatch();

  const dispatchActions = (e) => {
    e.preventDefault();
    dispatch(fetchFoodItem(enteredFoodItem));
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
      <button onClick={dispatchActions}>Add</button>
    </form>
  );
};

export default FoodEntryForm;
