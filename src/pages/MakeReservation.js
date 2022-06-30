import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MakeReservation = () => {
  const params = useParams();
  const API = process.env.REACT_APP_API_URL;
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
  const [reservation, setReservation] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    time: `${time.date}T${time.hours}:${time.minutes}:00`,
    numOfGuests: "2",
    restaurantId: params.id,
  });
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    axios
      .get(API + `/API/restaurants/` + params.id)
      .then((response) => setRestaurant(response.data))
      .catch((error) => console.log(error));
  }, [API]);

  const handleChange = (event) => {
    setReservation({
      ...reservation,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <div>
      <h3>Make a reservation at</h3>
      <h3>{restaurant.name}</h3>
      {/* {console.log(restaurant)} */}
      <form className="MakeReservation">
        <input id="firstName" type="text" placeholder="First Name" />
        <input id="lastName" type="text" placeholder="Last Name" />
        <input id="phoneNumber" type="tel" placeholder="Phone Number" />
        <input id="email" type="email" placeholder="Email" />
        <label htmlFor="numOfGuests">Party Size</label>
        <select id="numOfGuests" name="numOfGuests" onChange={""}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">Larger</option>
        </select>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          defaultValue={time.date}
          value={time.date}
          onChange={""}
        />
        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          selected={time.hours + ":00:00"}
          value={time.hours + ":00:00"}
          onChange={""}
        >
          <option value="08:00:00">8:00 AM</option>
          <option value="08:30:00">8:30 AM</option>
          <option value="09:00:00">9:00 AM</option>
          <option value="09:30:00">9:30 AM</option>
          <option value="10:00:00">10:00 AM</option>
          <option value="10:30:00">10:30 AM</option>
          <option value="11:00:00">11:00 AM</option>
          <option value="11:30:00">11:30 AM</option>
          <option value="12:00:00">12:00 PM</option>
          <option value="12:30:00">12:30 PM</option>
          <option value="13:00:00">1:00 PM</option>
          <option value="13:30:00">1:30 PM</option>
          <option value="14:00:00">2:00 PM</option>
          <option value="14:30:00">2:30 PM</option>
          <option value="15:00:00">3:00 PM</option>
          <option value="15:30:00">3:30 PM</option>
          <option value="16:00:00">4:00 PM</option>
          <option value="16:30:00">4:30 PM</option>
          <option value="17:00:00">5:00 PM</option>
          <option value="17:30:00">5:30 PM</option>
          <option value="18:00:00">6:00 PM</option>
          <option value="18:30:00">6:30 PM</option>
          <option value="19:00:00">7:00 PM</option>
          <option value="19:30:00">7:30 PM</option>
          <option value="20:00:00">8:00 PM</option>
          <option value="20:30:00">8:30 PM</option>
          <option value="21:00:00">9:00 PM</option>
          <option value="21:30:00">9:30 PM</option>
          <option value="22:00:00">10:00 PM</option>
          <option value="22:30:00">10:30 PM</option>
          <option value="23:00:00">11:00 PM</option>
          <option value="23:30:00">11:30 PM</option>
        </select>
        <button type="submit" onClick={""}>
          Find a time
        </button>
      </form>
    </div>
  );
};

export default MakeReservation;
