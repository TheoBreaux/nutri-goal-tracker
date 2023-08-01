import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItem } from "../features/nutritionFactsSlice";
import FoodEntry from "./FoodEntry";
import { Link } from "react-router-dom";
import NutrientsRemaining from "./NutrientsRemaining";

const FoodLog = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.nutrition.status);
  const foodItem = useSelector((state) => state.nutrition.foodLog[0]);
  const [searchBegan, setSearchBegan] = useState("false");

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
      <h1 className="title">Food Log</h1>
      <FoodEntry />
      <NutrientsRemaining />
      
    </div>
  );
};

export default FoodLog;
