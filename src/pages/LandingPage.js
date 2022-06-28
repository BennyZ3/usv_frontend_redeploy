import RestaurantsList from "../components/RestaurantList.js";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="LandingPage">
      <h2 className="BookTonight">Book Tonight</h2>
      <RestaurantsList />
    </div>
  );
};

export default LandingPage;
