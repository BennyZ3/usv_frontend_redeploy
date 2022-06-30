import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddRestaurant.css";
const AddRestaurant = () => {
  const API = process.env.REACT_APP_API_URL;
  const nav = useNavigate();
  const [restaurant, setRestaurant] = useState({
    name: "",
    description: "",
    phoneNumber: "",
    openingTime: "00:00:00",
    closingTime: "00:00:00",
    location: "",
    cuisine: "",
    price: "$",
    // diningRestriction: null,
    // tables: {},
  });
  const handleChange = (event) => {
    setRestaurant({ ...restaurant, [event.target.id]: event.target.value });
  };
  const handleTime = (event) => {
    setRestaurant({
      ...restaurant,
      [event.target.id]: event.target.value + ":00",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // let table = {
    //   twoPersonTables: restaurant.twoPersonTables,
    //   fourPersonTables: restaurant.fourPersonTables,
    //   eightPersonTables: restaurant.eightPersonTables,
    // };
    // setRestaurant({ ...restaurant, tables: table });
    console.log(restaurant);
    axios
      .post(`${API}/api/restaurants`, restaurant)
      .then((res) => nav(`/restaurants/${res.data.id}`));
  };

  return (
    <div className="AddRestaurant">
      <form className="NewRestaurantForm" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          id="name"
          placeholder="Restaurant Name"
        />
        <textarea
          //   type="textarea"
          onChange={handleChange}
          id="description"
          placeholder="Description"
        />
        <input
          type="tel"
          onChange={handleChange}
          id="phoneNumber"
          placeholder="Phone Number ex.1234567890"
          pattern="[0-9]{10}"
          required
        />
        <label htmlFor="openingTime">Opening Time:</label>
        <input
          type="time"
          id="openingTime"
          name="openingTime"
          onChange={handleTime}
        />
        <label htmlFor="closingTime">Closing Time:</label>
        <input
          type="time"
          id="closingTime"
          name="closingTime"
          onChange={handleTime}
        />
        <select id="price" onChange={handleChange}>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>
        <input
          type="text"
          onChange={handleChange}
          id="cuisine"
          placeholder="Cuisine"
        />
        <input
          type="text"
          onChange={handleChange}
          id="location"
          placeholder="Location/City"
        />

        {/* <div>
          <h3>Tables:</h3>
          <label htmlFor="twoPersonTables">Small:</label>
          <input
            type="number"
            min="0"
            id="twoPersonTables"
            className="tableCount"
            onChange={handleChange}
          />
          <label htmlFor="fourPersonTables">Medium:</label>

          <input
            type="number"
            min="0"
            id="fourPersonTables"
            className="tableCount"
            onChange={handleChange}
          />
          <label htmlFor="eightPersonTables">Large:</label>

          <input
            type="number"
            min="0"
            id="eightPersonTables"
            className="tableCount"
            onChange={handleChange}
          />
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddRestaurant;
