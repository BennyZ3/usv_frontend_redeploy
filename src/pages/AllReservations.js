import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllReservations.css";
const AllReservations = () => {
  const [reservations, setReservations] = useState([]);
  const API = process.env.REACT_APP_API_URL;
  const nav = useNavigate();
  useEffect(() => {
    axios
      .get(`${API}/api/reservations`)
      .then((res) => {
        setReservations(res.data.reservations);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleClick = (event) => {
    nav(`/reservations/${event.target.id}`);
  };
  return (
    <div className="AllReservations">
      <h1>All Reservations</h1>
      {reservations.map((res) => {
        return (
          <div onClick={handleClick} id={res.id}>
            {res.firstName} {res.lastName} {res.time}
          </div>
        );
      })}
    </div>
  );
};

export default AllReservations;
