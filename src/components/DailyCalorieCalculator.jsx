import { useState } from "react";

const DailyCalorieCalculator = () => {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("");

  const totalCalories = activity * (weight * 10);

  return (
    <div>
      <div>
        <h1>Instructions:</h1>
        <ol>
          <li>Please enter your weight in the yellow box above.</li>
          <li>
            Determine your activity factor based on the notes in the section and
            select it from the dropdown menu.
          </li>
        </ol>
      </div>

      <form>
        <label htmlFor="weight">Weight: </label>
        <input
          type="number"
          name="weight"
          min={0}
          max={500}
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <label htmlFor="activity">Activity Factor: </label>
        <select
          id="activity"
          name="activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}>
          <option value={1.2}>Sedentary (little or no exercise)</option>
          <option value={1.375}>
            Lightly active (light exercise/sports 1-3 days/week)
          </option>
          <option value={1.55}>
            Moderatetely active (moderate exercise/sports 3-5 days/week)
          </option>
          <option value={1.725}>
            Very active (hard exercise/sports 6-7 days a week)
          </option>
          <option value={1.9}>
            Extra active (very hard exercise/sports & physical job or 2x
            training)
          </option>
        </select>
      </form>
      <div className="results">
        <p>Weight: {weight}</p>
        <p>Basal Metabolic Rate(BMR): {weight * 10} kcal</p>
        <p>Selected Activity Factor: {activity}</p>
        <p>
          Total Daily Energy Expenditure(TDEE)/Baselie Calories:{" "}
          {totalCalories.toFixed(0)}
        </p>
      </div>
    </div>
  );
};

export default DailyCalorieCalculator;
