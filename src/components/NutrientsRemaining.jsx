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
        Carbohydrates (g): <span style={style}>{carbsRemaining}</span>{" "}
      </p>
      <p>
        Fat (g): <span style={style}>{fatRemaining}</span>
      </p>
      <p>
        Protein (g): <span style={style}>{proteinRemaining}</span>
      </p>

      <p>
        Calories: <span style={style}>{totalDailyCaloriesRemaining}</span>{" "}
      </p>
    </div>
  );
};

export default NutrientsRemaining;
