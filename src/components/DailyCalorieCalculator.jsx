import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  calculateTotalCalories,
  calculateAdjustedTotalCalories,
  setActivity,
  setKcalAdjustment,
  setWeight,
  setGoal,
} from "../features/nutritionFactsSlice";

const DailyCalorieCalculator = () => {
  const [validSubmission, setValidSubmission] = useState(false);
  const weight = useSelector((state) => state.nutrition.weight);
  const activity = useSelector((state) => state.nutrition.activity);
  const totalCalories = useSelector((state) => state.nutrition.totalCalories);
  const kcalAdjustment = useSelector((state) => state.nutrition.kcalAdjustment);

  const dispatch = useDispatch();
  const style = { fontWeight: "bold" };

  const getAdjustedCaloricIntake = (totalCalories, kcalAdjustment) => {
    if (kcalAdjustment === 0) {
      return totalCalories.toFixed(0);
    } else if (kcalAdjustment > 0) {
      return (totalCalories + kcalAdjustment).toFixed(0);
    } else {
      return (totalCalories - Math.abs(kcalAdjustment)).toFixed(0);
    }
  };

  const adjustedCaloricIntake = getAdjustedCaloricIntake(
    totalCalories,
    kcalAdjustment
  );

  const onFitnessGoalChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const goalName = selectedOption.dataset.goal;

    if (weight !== "" && activity !== "") {
      setValidSubmission(true);
      dispatch(setKcalAdjustment(Number(e.target.value)));
      dispatch(setGoal(goalName));
    }
  };

  useEffect(() => {
    dispatch(calculateTotalCalories());
    dispatch(calculateAdjustedTotalCalories(Number(adjustedCaloricIntake)));
  }, [dispatch, weight, activity, adjustedCaloricIntake]);

  return (
    <div>
      <div>
        <h1 className="title" style={{ marginBottom: "15px" }}>
          Instructions:
        </h1>
        <ol className="instructions">
          <li>Please enter your current weight in the box below.</li>
          <li>
            Determine your activity factor and select from the dropdown menu.
          </li>
          <li>Please select your fitness goal from the dropdown menu.</li>
          <li>
            Click the button to generate your personal macros plan after your
            selections have been made.
          </li>
        </ol>
      </div>

      <form className="user-input-form">
        <label htmlFor="weight">Weight (in lbs): </label>
        <input
          className="input"
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
          className="input"
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

        <select className="input" id="goal" onChange={onFitnessGoalChange}>
          <option>Select a fitness goal...</option>
          <option value={0} data-goal="Maintain">
            Maintain
          </option>
          <option value={500} data-goal="Bulk">
            Bulk
          </option>
          <option value={-500} data-goal="Shred">
            Shred
          </option>
        </select>
      </form>
      <div className="results">
        <h3 className="title">Please Confirm Your Inputs:</h3>
        <p>
          <span style={style}>Weight:</span> {weight} lbs
        </p>
        <p>
          <span style={style}>Basal Metabolic Rate(BMR):</span> {weight * 10}{" "}
          kcal
        </p>
        <p>
          <span style={style}>Selected Activity Level:</span> {activity}
        </p>
        <p>
          <span style={style}>Adjusted Daily Caloric Intake:</span>{" "}
          {adjustedCaloricIntake} kcal
        </p>
        <Link to="/macrosbreakdown" className="links">
          {validSubmission ? (
            <button className="button">
              Click To Generate Your Tailored Report
            </button>
          ) : (
            <button className="disabled-btn" disabled>
              Click To Generate Your Tailored Report
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default DailyCalorieCalculator;
