import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MakeReservation from "./MakeReservation";
import "./RestaurantDetails.css";
const RestaurantDetails = () => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    description: "",
    phoneNumber: "",
    openingTime: "00",
    closingTime: "00",
    location: "",
    cuisine: "",
    price: "",
    diningRestriction: null,
    tables: {},
  });
  const today = new Date();
  const [time, setTime] = useState({
    hours: today.getHours(),
    time:
      Number(today.getMinutes()) > 31
        ? today.getHours() + 1 + ":00:00"
        : today.getHours() + ":30:00",
    date:
      today.getFullYear() +
      "-" +
      (today.getMonth() > 8
        ? today.getMonth() + 1
        : "0" + (today.getMonth() + 1)) +
      "-" +
      today.getDate(),
  });
  const params = useParams();
  const API = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get(API + "/API/restaurants/" + params.id)
      .then((response) => setRestaurant(response.data))
      .catch((error) => console.log(error));
  }, [API, params.id]);
  return (
    <div className="RestaurantDetails">
      <img
        src="https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png"
        alt="Misc."
      />
      <h1>{restaurant.name}</h1>
      <p>
        {Number(restaurant.openingTime.slice(0, 2)) <= time.hours &&
        Number(restaurant.closingTime.slice(0, 2)) > time.hours
          ? `Open until ${restaurant.closingTime}`
          : "Closed"}
      </p>
      <p>
        {restaurant.cuisine} · {restaurant.price}
      </p>
      <p>{restaurant.location}</p>
      <h3>About {restaurant.name}</h3>
      <p>{restaurant.description}</p>
      <MakeReservation id={restaurant.id} date={time.date} time={time.time} />
    </div>
  );
};

export default RestaurantDetails;
