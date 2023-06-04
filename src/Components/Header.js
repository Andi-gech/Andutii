import "../App.css";
import logo from "../Assets/logo.png";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
function Header({
  onhome,
  onskill,
  onproject,
  onfeedback,
  oncontact,
  onabout,
}) {
  const [light, setlight] = useState(true);
  return (
    <div className="Header">
      <div className="Logo">
        <img src={logo} />
      </div>
      <div className="buttons">
        <ul>
          <li onClick={onhome}>Home</li>
          <li onClick={onskill}>Skills</li>
          <li onClick={onabout}>About Me</li>
          <li onClick={onproject}>Projects</li>
          <li onClick={onfeedback}>feedbacks</li>
          <li onClick={oncontact}>contact me</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
