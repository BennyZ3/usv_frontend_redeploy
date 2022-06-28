import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import RestaurantDetails from "./pages/RestaurantDetails";

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <h1>Placeholder</h1>
        {/* topBar */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
        </Routes>
        {/* bottom page links */}
      </main>
    </div>
  );
}

export default App;
