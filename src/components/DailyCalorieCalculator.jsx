import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  calculateTotalCalories,
  setActivity,
  setKcalAdjustment,
  setWeight,
} from "../features/calorieCalculatorSlice";

const DailyCalorieCalculator = () => {
  const weight = useSelector((state) => state.calorieCalculator.weight);
  const activity = useSelector((state) => state.calorieCalculator.activity);
  const totalCalories = useSelector(
    (state) => state.calorieCalculator.totalCalories
  );
  const kcalAdjustment = useSelector(
    (state) => state.calorieCalculator.kcalAdjustment
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalCalories());
  }, [dispatch, weight, activity]);

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
          onChange={(e) => dispatch(setWeight(Number(e.target.value)))}
        />

        <label htmlFor="activity">Activity Level: </label>
        <select
          id="activity"
          name="activity"
          value={activity}
          onChange={(e) => dispatch(setActivity(Number(e.target.value)))}>
          <option>Select an activity level...</option>
          <option key="sedentary" value={1.2}>
            Sedentary (little or no exercise)
          </option>
          <option key="lightlyActive" value={1.375}>
            Lightly active (light exercise/sports 1-3 days/week)
          </option>
          <option key="moderatelyActive" value={1.55}>
            Moderatetely active (moderate exercise/sports 3-5 days/week)
          </option>
          <option key="veryActive" value={1.725}>
            Very active (hard exercise/sports 6-7 days a week)
          </option>
          <option key="extraActive" value={1.9}>
            Extra active (very hard exercise/sports & physical job or 2x
            training)
          </option>
        </select>
        <label htmlFor="goal">Fitness Goal: </label>
        <select
          id="goal"
          name="goal"
          onChange={(e) => dispatch(setKcalAdjustment(Number(e.target.value)))}>
          <option value={0}>Maintain</option>
          <option value={-500}>Bulk</option>
          <option value={500}>Shred</option>
        </select>
      </form>
      <div className="results">
        <p>Weight: {weight}</p>
        <p>Basal Metabolic Rate(BMR): {weight * 10} kcal</p>
        <p>Selected Activity Level: {activity}</p>
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
