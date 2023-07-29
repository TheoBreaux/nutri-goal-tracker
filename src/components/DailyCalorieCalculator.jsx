import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DailyCalorieCalculator = () => {
  const [weight, setWeight] = useState(0);
  const [activity, setActivity] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [kcalAdjustment, setKcalAdjustment] = useState(0);

  useEffect(() => {
    const calories = activity * (weight * 10);
    setTotalCalories(calories);
  }, [weight, activity]);

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
          <li>Please select your fitness goal from the dropdown menu.</li>
          <li>
            Click the button to generate your personal macros plan after your
            selections have been made.
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
        <label htmlFor="goal">Fitness Goal: </label>
        <select
          id="goal"
          name="goal"
          onChange={(e) => setKcalAdjustment(e.target.value)}>
          <option value={0}>Maintain</option>
          <option value={-500}>Bulk</option>
          <option value={500}>Shred</option>
        </select>
      </form>
      <div className="results">
        <p>Weight: {weight}</p>
        <p>Basal Metabolic Rate(BMR): {weight * 10} kcal</p>
        <p>Selected Activity Factor: {activity}</p>
        <p>
          Adjusted Daily Caloric Intake:{" "}
          {(totalCalories - kcalAdjustment).toFixed(0)}
        </p>
        <Link to="/macrosbreakdown">
          <button>Click To Generate Your Tailored Report</button>
        </Link>
      </div>
    </div>
  );
};

export default DailyCalorieCalculator;
