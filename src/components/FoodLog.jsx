import FoodEntry from "./FoodEntry";
import NutrientsRemaining from "./NutrientsRemaining";

const FoodLog = () => {
  // const dispatch = useDispatch();
  // const status = useSelector((state) => state.nutrition.status);
  // const [searchBegan, setSearchBegan] = useState("false");

  // useEffect(() => {
  //   if (status === "idle" && searchBegan) {
  //     dispatch(fetchFoodItem());
  //   }
  // }, [status, dispatch, searchBegan]);

  // if (status === "loading" && searchBegan) {
  //   return <h1>Loading...</h1>;
  // } else if (status === "failed" && !searchBegan) {
  //   return <h4>Error loading food entry. Please try again.</h4>;
  // }

  return (
    <div>
      <h1 className="title">Food Log</h1>
      <FoodEntry />
      <NutrientsRemaining />
    </div>
  );
};

export default FoodLog;
