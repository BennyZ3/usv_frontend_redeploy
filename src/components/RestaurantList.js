import axios from "axios";
import QueryString from 'qs';
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import {useLocation} from "react-router-dom";
import Restaurant from "./Restaurant";
import "./RestaurantList.css";

const RestaurantsList = (props) => {
  const API = process.env.REACT_APP_API_URL;
  const [restaurants, setRestaurants] = useState([]);
  const location = useLocation();
  // const { search } = props;
  // const params = useParams();
  // let query = QueryString.stringify(params);
  let query = JSON.parse(localStorage.getItem("query"));
  console.log(query);
  useEffect(() => {
    // console.log(params);
    console.log(query);
    if (location.pathname === '/'){
      query = '' 
      localStorage.removeItem("query")
    }
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
  }, [API, query]);
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
