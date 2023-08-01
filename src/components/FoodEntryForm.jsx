import { useEffect, useState } from "react";
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
  const [enteredFoodItem, setEnteredFoodItem] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [searchBegan, setSearchBegan] = useState(false);
  const status = useSelector((state) => state.nutrition.status);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;
    if (showNotification) {
      timer = setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showNotification]);

  useEffect(() => {
    if (status === "idle" && searchBegan) {
      dispatch(fetchFoodItem());
    }
  }, [status, dispatch, searchBegan]);

  if (status === "loading" && searchBegan) {
    return <h1>Loading...</h1>;
  } else if (status === "failed" && !searchBegan) {
    return (
      <h2 className="title">
        Error loading food entry. Please try again later.
      </h2>
    );
  }

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
    setSearchBegan(true);
    setShowNotification(true);
    setEnteredFoodItem("");
  };

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
          <button className="button" onClick={dispatchActions}>
            Click Here To Add
          </button>
        </p>
      </form>

      {showNotification && <p className="notification">Successfully Added!</p>}
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
