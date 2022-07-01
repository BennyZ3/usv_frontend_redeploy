import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ReservationDetails.css";
const ReservationDetails = () => {
  const [reservation, setReservation] = useState({
    createdAt: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    time: "",
    numGuests: "",
    restaurantId: "",
  });
  const { id } = useParams();
  const API = process.env.REACT_APP_API_URL;
  const nav = useNavigate();
  useEffect(() => {
    axios
      .get(`${API}/api/reservations/${id}`)
      .then((res) => setReservation(res.data))
      .catch((err) => console.warn(err));
  }, [API, id]);
  const handleDelete = () => {
    axios
      .delete(`${API}/api/reservations/${id}`)
      .then(() => {
        nav("/reservations");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="ReservationDetails">
      <h2>Reservation Details</h2>
      <h3>
        {reservation.lastName}, {reservation.firstName}
      </h3>
      <h4>Phone Number: </h4>
      <p>{reservation.phoneNumber}</p>
      <h4>Email: </h4>
      <p>{reservation.email}</p>
      <h4>Time: </h4>
      <p>{reservation.time}</p>
      <h4>Party Size: </h4>
      <p>{reservation.numGuests}</p>
      <h4>Restaurant ID: </h4>
      <p>{reservation.restaurantId}</p>
      <button onClick={handleDelete}>Delete</button>
      <button>Edit</button>
    </div>
  );
};

export default ReservationDetails;
