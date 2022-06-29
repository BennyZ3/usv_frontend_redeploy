import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import RestaurantDetails from "./pages/RestaurantDetails";
import MakeReservation from "./pages/MakeReservation";

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        {/* topBar */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route
            path="/restaurants/:id/reservations"
            element={<MakeReservation />}
          />
        </Routes>
        {/* bottom page links */}
      </main>
    </div>
  );
}

export default App;
