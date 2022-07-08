import axios from "axios";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Restaurant from "./Restaurant";
import "./RestaurantList.css";

const RestaurantsList = (props) => {
  const API = process.env.REACT_APP_API_URL;
  const [restaurants, setRestaurants] = useState([]);
  const location = useLocation();
  let query = "";
  if (location.pathname === "/") {
    query = "";
    localStorage.removeItem("query");
  } else {
    query = JSON.parse(localStorage.getItem("query"));
  }
  useEffect(() => {
    if (query) {
      axios
        .get(API + "/API/restaurants?" + QueryString.stringify(query))
        .then((response) => setRestaurants(response.data))
        .catch((error) => console.log(error));
    } else {
      axios
        .get(API + "/API/restaurants")
        .then((response) => setRestaurants(response.data))
        .catch((error) => console.log(error));
    }
  }, [API, location.pathname]);
  return (
    <div className="restaurantList resList">
      {typeof restaurants.restaurants !== "object"
        ? "No Restaurants found"
        : restaurants.restaurants.length
        ? restaurants.restaurants.map((restaurant, index) => {
            return (
              <Restaurant
                restaurantDetails={restaurant}
                key={restaurant.id}
                index={index}
              />
            );
          })
        : "No Restaurants found"}
    </div>
  );
};

export default RestaurantsList;
