import { Link } from "react-router-dom";

const WelcomeMessage = () => {
  return (
    <div className="welcome-message">
      <h1 className="title">Welcome to NutriGoalTracker</h1>
      <p>
        Welcome to NutriGoalTracker! We are thrilled to have you embark on a
        journey towards a healthier and fitter lifestyle with us. Our mission is
        to empower you to take control of your nutrition by providing
        personalized daily caloric intake and macro recommendations tailored
        specifically to your unique fitness goals. Whether you aim to shed those
        extra pounds, build lean muscle, or maintain a balanced and sustainable
        diet, our cutting-edge platform is designed to guide you every step of
        the way.
      </p>

      <p>
        At NutriGoalTracker, we understand that no two individuals are alike,
        and that's why we believe in the power of personalization. By
        considering factors such as your age, weight, height, activity level,
        and desired outcomes, we generate precise and science-backed nutritional
        targets that will optimize your progress and overall well-being. Our
        user-friendly interface makes it effortless to track your meals, log
        your workouts, and monitor your progress over time. Let's embark on this
        transformative journey together, and unlock the potential of your body
        and mind. Your nutrition goals are within reach, and NutriGoalTracker is
        here to make them a reality. Let's take the first step towards a
        healthier and happier you!
      </p>
      <Link to="/dailycaloriecalculator" className="links">
        <button className="button">Begin Your Fitness Journey!</button>
      </Link>
    </div>
  );
};

export default WelcomeMessage;
