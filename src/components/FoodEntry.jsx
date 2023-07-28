import { useDispatch, useSelector } from "react-redux";
import { removeFromFoodLog } from "../features/foodItemSlice";

const FoodEntry = () => {
  const dispatch = useDispatch();
  const foodEntries = useSelector((state) => state.food.foodLog);

  return (
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
  );
};

export default FoodEntry;
