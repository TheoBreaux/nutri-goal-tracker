import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProtein, setCarbs, setFat } from "../features/nutritionFactsSlice";

const MacrosBreakdown = () => {
  const dispatch = useDispatch();

  const totalDailycalories = useSelector(
    (state) => state.nutrition.adjustedTotalCalories
  );

  const goal = useSelector((state) => state.nutrition.goal);

  const macroPercentages = {
    protein: 25,
    carbs: 50,
    fat: 25,
  };

  const totalKcal = function (totalDailycalories, macroPercentages, macro) {
    return totalDailycalories * (macroPercentages[macro] / 100);
  };

  const proteinGrams = Math.round(
    totalKcal(totalDailycalories, macroPercentages, "protein") / 4
  );
  const carbGrams = Math.round(
    totalKcal(totalDailycalories, macroPercentages, "carbs") / 4
  );

  const fatGrams = Math.round(
    totalKcal(totalDailycalories, macroPercentages, "fat") / 9
  );

  const sendMacrosHandler = () => {
    dispatch(setProtein(proteinGrams));
    dispatch(setCarbs(carbGrams));
    dispatch(setFat(fatGrams));
  };

  return (
    <div>
      <h1 className="title">{goal}</h1>
      <h4 className="subtitle">
        Daily Total Calories: {totalDailycalories} kcal
      </h4>
      <table className="macros-table" border="1">
        <thead>
          <tr>
            <th>Macronutrients</th>
            <th>%</th>
            <th>grams</th>
            <th>kcal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Protein</td>
            <td>{macroPercentages.protein}%</td>
            <td>{proteinGrams} g</td>
            <td>
              {totalKcal(
                totalDailycalories,
                macroPercentages,
                "protein"
              ).toFixed(0)}{" "}
              kcal
            </td>
          </tr>

          <tr>
            <td>Carbohydrates</td>
            <td>{macroPercentages.carbs}%</td>
            <td>{carbGrams} g</td>
            <td>
              {totalKcal(totalDailycalories, macroPercentages, "carbs").toFixed(
                0
              )}{" "}
              kcal
            </td>
          </tr>

          <tr>
            <td>Fat</td>
            <td>{macroPercentages.fat}%</td>
            <td>{fatGrams} g</td>
            <td>
              {totalKcal(totalDailycalories, macroPercentages, "fat").toFixed(
                0
              )}{" "}
              kcal
            </td>
          </tr>

          <tr>
            <td>Total Percentage</td>
            <td>100%</td>
            <td id="empty"></td>
            <td>{totalDailycalories} kcal</td>
          </tr>
        </tbody>
      </table>

      <p>
        Here is a simple example of a balanced macronutrient breakdown for a
        moderately active individual:
      </p>

      <ul>
        <li>
          <span style={{ fontWeight: "bold" }}>Protein:</span> 25% of total
          daily calories
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Carbohydrates:</span> 50% of
          total daily calories
        </li>

        <li>
          <span style={{ fontWeight: "bold" }}>Fats:</span> 25% of total daily
          calories
        </li>
      </ul>

      <p>
        Based on your activity level, current weight and goal, this is a
        generally accepted guideline that can serve as a starting point. Keep in
        mind that these recommendations are not one-size-fits-all, and you may
        need to adjust them based on your specific needs and preferences.
      </p>

      <p>
        Give <span style={{ fontWeight: "bold" }}>NutriGoalTracker</span> a try!
        Click the button below to start logging your food and tracking your
        macros and calories!
      </p>
      <Link to="/foodentryform" className="links">
        <button className="button" onClick={sendMacrosHandler}>
          Click Here To Log Your Food!
        </button>
      </Link>
    </div>
  );
};

export default MacrosBreakdown;
