import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFoodItem } from "../features/foodItemSlice";

const FoodEntryForm = () => {
  const [enteredFoodItem, setEnteredFoodItem] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchFoodItem(enteredFoodItem));
    setEnteredFoodItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="enteredfooditem">Please Enter Your Food Item: </label>
      <input
        type="text"
        id="enteredfooditem"
        name="enteredfooditem"
        value={enteredFoodItem}
        onChange={(e) => setEnteredFoodItem(e.target.value)}></input>
      <button>Submit</button>
    </form>
  );
};

export default FoodEntryForm;
