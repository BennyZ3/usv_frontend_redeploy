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
  const handleClick = () => {
    nav(`/restaurants/${id}`);
  };
  const handleClickToRes = () => {
    nav(`/restaurants/${id}`);
  };
  return (
    <div
      className="RestaurantCard"
      style={{ animationDelay: props.index / 96 + "s" }}
    >
      <div onClick={handleClick}>
        <img
          src="https://previews.123rf.com/images/chrisdorney/chrisdorney1509/chrisdorney150900154/45017339-a-generic-restaurant-sign-.jpg"
          alt="placeholder"
        />
        <h2>{name}</h2>
        <p>{cuisine}</p>
        <p>{location}</p>
        <p>{price}</p>
      </div>
      <button className="bookNow" onClick={handleClickToRes}>
        Book Now
      </button>
    </div>
  );
};

export default Restaurant;
