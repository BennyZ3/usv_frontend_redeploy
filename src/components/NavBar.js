import "./NavBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  // const today = new Date();
  const nav = useNavigate();
  // currently not used, but planning for a search based on availability
  const [search, setSearch] = useState({
    // date:
    //   today.getFullYear() +
    //   "-" +
    //   (today.getMonth() > 8
    //     ? today.getMonth() + 1
    //     : "0" + (today.getMonth() + 1)) +
    //   "-" +
    //   today.getDate(),
    // time:
    //   Number(today.getMinutes()) > 31
    //     ? today.getHours() + 1 + ":00:00"
    //     : today.getHours() + ":30:00",
    // numGuests: 1,
    searchTerm: "",
  });

  const handleChange = (event) => {
    setSearch({ ...search, [event.target.id]: event.target.value });
  };

  const handleHome = () => {
    nav("/");
  };
  const navToNew = () => {
    nav("/restaurants/new");
  };
  const navToRes = () => {
    nav("/reservations");
  };
  const handleSearch = () => {
    console.log(search);
    // nav("/search/" + search.searchQuery);
    localStorage.setItem("query", JSON.stringify(search));
    nav("/search?");
  };
  return (
    <div className="NavBar">
      <div onClick={handleHome} className="NavBar_Logo">
        BZ Eater
      </div>
      <form onSubmit={handleSearch}>
        {/* <input
          type="date"
          id="date"
          defaultValue={search.date}
          min={search.date}
          onChange={handleChange}
        /> */}
        {/* <select
          className="timePicker"
          id="timePicker"
          value={search.time}
          onChange={handleChange}
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
        </select> */}
        {/* <select
          className="partySize"
          defaultValue={{ value: search.numGuests }}
          onChange={handleChange}
        >
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
        </select> */}
        <span>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="M13,15.9291111 L13,21.5 C13,21.7761424 12.7761424,22 12.5,22 L11.5,22 C11.2238576,22 11,21.7761424 11,21.5 L11,15.9291111 C7.60770586,15.4438815 5,12.5264719 5,9 C5,5.13400675 8.13400675,2 12,2 C15.8659932,2 19,5.13400675 19,9 C19,12.5264719 16.3922941,15.4438815 13,15.9291111 Z M12,4 C9.23857625,4 7,6.23857625 7,9 C7,11.7614237 9.23857625,14 12,14 C14.7614237,14 17,11.7614237 17,9 C17,6.23857625 14.7614237,4 12,4 Z"
                fill="#2D333F"
                fill-rule="nonzero"
                transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000)"
              ></path>
            </g>
          </svg>
          <textarea
            placeholder="Location, Restaurant, or Cuisine"
            id="searchTerm"
            className="search"
            onChange={handleChange}
          ></textarea>
        </span>
        <button type="submit">Search</button>
      </form>
      {/* <button>sign up</button>
      <button>sign in</button> */}
      <button className="NavBarReservations" onClick={navToRes}>
        Reservations
      </button>
      <button className="NewRestaurantButton" onClick={navToNew}>
        Add a New Restaurant
      </button>
    </div>
  );
};

export default NavBar;
