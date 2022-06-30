import { useState } from "react";

const AddRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    description: "",
    phoneNumber: "",
    openingTime: "00:00:00",
    closingTime: "00:00:00",
    location: "",
    cuisine: "",
    price: "",
    diningRestriction: null,
    tables: {},
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
  const handleTables = (event) => {
    setRestaurant(
      ...restaurant,
      (tables[event.target.id] = event.target.value)
    );
    console.log(restaurant);
  };

  return (
    <div className="AddRestaurant">
      <form className="NewRestaurantForm">
        <input
          type="text"
          onChange={handleChange}
          id="name"
          placeholder="Restaurant Name"
        />
        <input
          type="textbox"
          onChange={handleChange}
          id="description"
          placeholder="Description"
        />
        <input
          type="tel"
          onChange={handleChange}
          id="phoneNumber"
          placeholder="Phone Number"
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
        <input
          type="text"
          onChange={handleChange}
          id="location"
          placeholder="Location"
        />
        <input
          type="text"
          onChange={handleChange}
          id="cuisine"
          placeholder="Cuisine"
        />
        <h3>Tables:</h3>
        <label htmlFor="twoPersonTables">Small:</label>
        <input
          type="number"
          min="0"
          id="twoPersonTables"
          onChange={handleTables}
        />
        <label htmlFor="fourPersonTables">Medium:</label>

        <input
          type="number"
          min="0"
          id="fourPersonTables"
          onChange={handleTables}
        />
        <label htmlFor="eightPersonTables">Large:</label>

        <input
          type="number"
          min="0"
          id="eightPersonTables"
          onChange={handleTables}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddRestaurant;
