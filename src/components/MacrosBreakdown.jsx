import { Link } from "react-router-dom";




const MacrosBreakdown = () => {
  return (
    <div>
      <h1>Bulking</h1>
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
