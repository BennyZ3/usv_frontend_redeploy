import "./NavBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const today = new Date();
  const nav = useNavigate();
  const [search, setSearch] = useState({
    date:
      today.getFullYear() +
      "-" +
      (today.getMonth() > 8
        ? today.getMonth() + 1
        : "0" + (today.getMonth() + 1)) +
      "-" +
      today.getDate(),
    time:
      Number(today.getMinutes()) > 31
        ? today.getHours() + 1 + ":00:00"
        : today.getHours() + ":30:00",
    numGuests: 2,
    searchQuery: "",
  });
  console.log(search);

  const handleHome = () => {
    nav("/");
  };
  return (
    <div className="NavBar">
      <div onClick={handleHome}>Logo Placeholder</div>
      <form>
        <input
          type="date"
          defaultValue={search.date}
          value={search.date}
          onChange={""}
        />
        <select
          className="timePicker"
          selected={search.time}
          value={search.time}
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
        <select
          className="partySize"
          defaultValue={{ value: search.numGuests }}
          value={search.numGuests}
          onChange={""}
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
        </select>
        <textarea placeholder="search"></textarea>
        <button type="submit">Search</button>
      </form>
      <button>sign up</button>
      <button>sign in</button>
    </div>
  );
};

export default NavBar;
