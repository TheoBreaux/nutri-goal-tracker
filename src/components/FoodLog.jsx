import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItem, removeFromFoodLog } from "../features/foodItemSlice";

const FoodLog = () => {
  const dispatch = useDispatch();
  const foodEntries = useSelector((state) => state.food.foodLog);
  const status = useSelector((state) => state.food.status);
  const [searchBegan, setSearchBegan] = useState("false");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchFoodItem());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  } else if (status === "failed") {
    return <h1>Error loading food entry. Please try again.</h1>;
  }

  console.log(foodEntries);

  return (
    <div>
      <h1>FoodLog</h1>
      <div>
        {foodEntries.map((entry) => (
          <div key={entry.id}>
            <h3>{entry.item}</h3>
            <p>Calories: {entry.calories} kcal</p>
            <p>Carbohydrates: {entry.carbohydrates} gram(s)</p>
            <p>Fat: {entry.fat} gram(s)</p>
            <p>Protein: {entry.protein} gram(s)</p>
            <button onClick={() => dispatch(removeFromFoodLog(entry))}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodLog;
