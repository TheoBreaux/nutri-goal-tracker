import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItem } from "../features/nutritionFactsSlice";
import FoodEntry from "./FoodEntry";
import { Link } from "react-router-dom";

const FoodLog = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.nutrition.status);
  const foodItem = useSelector((state) => state.nutrition.foodLog[0]);
  const totalDailyCaloriesRemaining = useSelector(
    (state) => state.nutrition.adjustedTotalCalories
  );
  const fatRemaining = useSelector((state) => state.nutrition.totalFat);
  const carbsRemaining = useSelector((state) => state.nutrition.totalCarbs);
  const proteinRemaining = useSelector((state) => state.nutrition.totalProtein);

  const [searchBegan, setSearchBegan] = useState("false");

  console.log(totalDailyCaloriesRemaining);
  console.log(foodItem);

  useEffect(() => {
    if (status === "idle" && searchBegan) {
      dispatch(fetchFoodItem());
    }
  }, [status, dispatch, searchBegan]);

  if (status === "loading" && searchBegan) {
    return <h1>Loading...</h1>;
  } else if (status === "failed" && !searchBegan) {
    return <h4>Error loading food entry. Please try again.</h4>;
  }

  return (
    <div>
      <h1>FoodLog</h1>
      <FoodEntry />
      <h3>Nutrients Remaining</h3>
      <p>Carbohydrates (g): {carbsRemaining} </p>
      <p>Fat (g): {fatRemaining}</p>
      <p>Protein (g): {proteinRemaining}</p>

      <p>Calories: {totalDailyCaloriesRemaining} </p>
      <Link to="/foodentryform">
        <h2>Go to Food Entry Form</h2>
      </Link>
    </div>
  );
};

export default FoodLog;
