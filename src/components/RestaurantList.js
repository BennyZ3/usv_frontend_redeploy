import axios from "axios";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Restaurant from "./Restaurant";
import "./RestaurantList.css";

const RestaurantsList = (props) => {
  const API = process.env.REACT_APP_API_URL;
  const [restaurants, setRestaurants] = useState([]);
  // const { search } = props;
  const params = useParams();
  useEffect(() => {
    console.log(QueryString.stringify(params));
    if (params.searchTerm) {
      axios
        .get(API + "/API/restaurants?" + QueryString.stringify(params))
        .then((response) => setRestaurants(response.data))
        .catch((error) => console.log(error));
    } else {
      axios
        .get(API + "/API/restaurants")
        .then((response) => setRestaurants(response.data))
        .catch((error) => console.log(error));
    }
  }, [API, params]);
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
