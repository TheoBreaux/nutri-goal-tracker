import { useSelector } from "react-redux";

const MacrosBreakdown = () => {
  const totalDailycalories = useSelector(
    (state) => state.calorieCalculator.adjustedTotalCalories
  );
  console.log(totalDailycalories);

  return (
    <div>
      <h1>Goal Title</h1>
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
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Carbohydrates (grams/day)</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Fat (grams/day)</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Total Percentage</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MacrosBreakdown;
