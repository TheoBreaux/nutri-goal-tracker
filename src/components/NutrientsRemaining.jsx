import { useSelector } from "react-redux";

const NutrientsRemaining = () => {
  const fatRemaining = useSelector((state) => state.nutrition.totalFat);
  const carbsRemaining = useSelector((state) => state.nutrition.totalCarbs);
  const proteinRemaining = useSelector((state) => state.nutrition.totalProtein);
  const totalDailyCaloriesRemaining = useSelector(
    (state) => state.nutrition.adjustedTotalCalories
  );

  const style = {
    fontWeight: "bold",
    fontSize: "30px",
    color: "var(--secondary-color)",
  };

  return (
    <div className="nutrients-remaining">
      <h2 className="title">Nutrients Remaining</h2>
      <p>
        Carbohydrates: <span style={style}>{carbsRemaining} g</span>{" "}
      </p>
      <p>
        Fat: <span style={style}>{fatRemaining} g</span>
      </p>
      <p>
        Protein: <span style={style}>{proteinRemaining} g</span>
      </p>

      <p>
        Calories: <span style={style}>{totalDailyCaloriesRemaining} kcal</span>{" "}
      </p>
    </div>
  );
};

export default NutrientsRemaining;
