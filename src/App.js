import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import RestaurantDetails from "./pages/RestaurantDetails";
import MakeReservation from "./pages/MakeReservation";
import AddRestaurant from "./pages/AddRestaurant";
import AllReservations from "./pages/AllReservations";
import ReservationDetails from "./pages/ReservationDetails";

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        {/* topBar */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/search" element={<LandingPage />} />
          {/* <Route path="/search/:searchTerm" element={<LandingPage />} /> */}
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route
            path="/restaurants/:id/reservations"
            element={<MakeReservation />}
          />
          <Route path="/restaurants/new" element={<AddRestaurant />} />
          <Route path="/reservations" element={<AllReservations />} />
          <Route path="/reservations/:id" element={<ReservationDetails />} />
        </Routes>
        {/* bottom page links */}
      </main>
    </div>
  );
}

export default App;
