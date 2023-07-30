import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MacrosBreakdown = () => {
  const totalDailycalories = useSelector(
    (state) => state.calorieCalculator.adjustedTotalCalories
  );

  const goal = useSelector((state) => state.calorieCalculator.goal);

  const macroPercentages = {
    protein: 25,
    carbs: 50,
    fat: 25,
  };

  const totalPercentage = Object.values(macroPercentages).reduce(
    (acc, currVal) => acc + currVal,
    0
  );

  const totalKcal = function (totalDailycalories, macroPercentages, macro) {
    return totalDailycalories * (macroPercentages[macro] / 100);
  };

  return (
    <div>
      <h1>{goal}</h1>
      <h5>Daily Total Calories: {totalDailycalories} kcal</h5>
      <table border="1">
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
            <td>Protein (grams/day)</td>
            <td>{macroPercentages.protein}%</td>
            <td>
              {(
                totalKcal(totalDailycalories, macroPercentages, "protein") / 4
              ).toFixed(0)}{" "}
              grams
            </td>
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
            <td>Carbohydrates (grams/day)</td>
            <td>{macroPercentages.carbs}%</td>
            <td>
              {(
                totalKcal(totalDailycalories, macroPercentages, "carbs") / 4
              ).toFixed(0)}{" "}
              grams
            </td>
            <td>
              {totalKcal(totalDailycalories, macroPercentages, "carbs").toFixed(
                0
              )}{" "}
              kcal
            </td>
          </tr>
          <tr>
            <td>Fat (grams/day)</td>
            <td>{macroPercentages.fat}%</td>
            <td>
              {(
                totalKcal(totalDailycalories, macroPercentages, "fat") / 9
              ).toFixed(0)}{" "}
              grams
            </td>
            <td>
              {totalKcal(totalDailycalories, macroPercentages, "fat").toFixed(
                0
              )}{" "}
              kcal
            </td>
          </tr>
          <tr>
            <td>Total Percentage</td>
            <td>{totalPercentage}%</td>
            <td></td>
            <td>{totalDailycalories} kcal</td>
          </tr>
        </tbody>
      </table>

      <p>
        Here is a simple example of a balanced macronutrient breakdown for a
        moderately active individual:
      </p>

      <ul>
        <li>Carbohydrates: 50% of total daily calories</li>
        <li>Protein: 25% of total daily calories</li>
        <li>Fats: 25% of total daily calories</li>
      </ul>

      <p>
        Based on your activity level, current weight and goal, this is a
        generally accepted guideline that can serve as a starting point. Keep in
        mind that these recommendations are not one-size-fits-all, and you may
        need to adjust them based on your specific needs and preferences.
      </p>

      <p>
        Again, this is just a general guideline, and you should consider
        consulting with a registered dietitian or healthcare professional to get
        personalized recommendations based on your unique needs, goals, and
        health status.
      </p>
      <Link to="/foodentryform">
        <button>Click Here To Log Your Food!</button>
      </Link>
    </div>
  );
};

export default MacrosBreakdown;
