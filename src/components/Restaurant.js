// const imageSearch = require("image-search-google");

import { useNavigate } from "react-router-dom";

const Restaurant = (props) => {
  let {
    id,
    name,
    cuisine,
    // description,
    // openingTime,
    // closingTime,
    price,
    location,
    // tables,
    // reservations,
  } = props.restaurantDetails;
  let nav = useNavigate();
  // console.log(name, tables, reservations);
  const handleClick = () => {
    nav(`/restaurants/${id}`);
  };
  return (
    <div className="RestaurantCard">
      <div onClick={handleClick}>
        <img src="https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png" />
        <h2>{name}</h2>
        <p>{cuisine}</p>
        <p>{location}</p>
        <p>{price}</p>
      </div>
      {/* <p>{description}</p> */}
      {/* <p>{price}</p>
        <p>{price}</p> */}
    </div>
  );
};

export default Restaurant;
