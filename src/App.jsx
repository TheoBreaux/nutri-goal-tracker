import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodEntryForm from "./components/FoodEntryForm";
import FoodLog from "./components/FoodLog";
import WelcomeMessage from "./components/WelcomeMessage";
import DailyCalorieCalculator from "./components/DailyCalorieCalculator";
import MacrosBreakdown from "./components/MacrosBreakdown";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeMessage />} />
        <Route
          path="/dailycaloriecalculator"
          element={<DailyCalorieCalculator />}
        />
        <Route path="/macrosbreakdown" element={<MacrosBreakdown />} />
        <Route path="/foodentryform" element={<FoodEntryForm />} />
        <Route path="/foodlog" element={<FoodLog />} />
      </Routes>
    </Router>
  );
};

export default App;
