import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItem } from "../features/foodItemSlice";
import FoodEntry from "./FoodEntry";
import { Link } from "react-router-dom";

const FoodLog = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.food.status);
  const [searchBegan, setSearchBegan] = useState("false");

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
      <Link to="/foodentryform">
        <h2>Go to Food Entry Form</h2>
      </Link>
    </div>
  );
};

export default FoodLog;
