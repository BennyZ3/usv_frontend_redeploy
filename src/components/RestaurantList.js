import axios from "axios";
import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import "./RestaurantList.css";

const RestaurantsList = (props) => {
  const API = process.env.REACT_APP_API_URL;
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get(API + "/API/restaurants")
      .then((response) => setRestaurants(response.data))
      .catch((error) => console.log(error));
  }, [API]);
  return (
    <div className="restaurantList resList">
      {typeof restaurants.restaurants === "object"
        ? restaurants.restaurants.map((restaurant, index) => {
            return (
              <Restaurant
                restaurantDetails={restaurant}
                key={restaurant.id}
                index={index}
              />
            );
          })
        : ""}
    </div>
  );
};

export default RestaurantsList;
