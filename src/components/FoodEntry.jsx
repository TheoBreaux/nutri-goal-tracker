import { useDispatch, useSelector } from "react-redux";
import { removeFromFoodLog } from "../features/nutritionFactsSlice";
import { Link } from "react-router-dom";

const FoodEntry = () => {
  const dispatch = useDispatch();
  const foodEntries = useSelector((state) => state.nutrition.foodLog);

  return (
    <>
      {foodEntries.map((entry) => (
        <div key={entry.id + Math.random()} className="food-entry">
          <div>
            <h4>{entry.item}</h4>
            <p>Calories: {entry.calories} kcal</p>
            <p>Carbohydrates: {entry.carbohydrates} gram(s)</p>
            <p>Fat: {entry.fat} gram(s)</p>
            <p>Protein: {entry.protein} gram(s)</p>
          </div>
          <div>
            <button
              className="button"
              onClick={() => dispatch(removeFromFoodLog(entry))}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <Link to="/foodentryform" className="links">
        <button style={{marginTop: "10px"}}className="button">Return to Food Entry</button>
      </Link>
    </>
  );
};

export default FoodEntry;
