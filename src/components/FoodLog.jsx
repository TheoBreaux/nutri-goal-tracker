import FoodEntry from "./FoodEntry";
import NutrientsRemaining from "./NutrientsRemaining";

const FoodLog = () => {
  return (
    <div>
      <h1 className="title">Food Log</h1>
      <FoodEntry />
      <NutrientsRemaining />
    </div>
  );
};

export default FoodLog;
