import "../App.css";
import logo from "../Assets/logo.png";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
function Headermobile({
  onhome,
  onskill,
  onproject,
  onfeedback,
  oncontact,
  onabout,
}) {
  const [visible, setvisible] = useState(false);
  return (
    <div className="Headermobile">
      <img src={logo} />
      <FaBars size={25} onClick={() => setvisible(!visible)} />
      <div className="sidemenu" style={{ display: visible ? "block" : "none" }}>
        <div className="bars">
          <FaBars onClick={() => setvisible(!visible)} type="bars" size={25} />
        </div>
        <div onClick={onhome} className="Mheaderbutton">
          <p>Home</p>
        </div>
        <div onClick={onskill} className="Mheaderbutton">
          <p>Skills</p>
        </div>
        <div onClick={onabout} className="Mheaderbutton">
          <p>About Me</p>
        </div>
        <div onClick={onproject} className="Mheaderbutton">
          <p>Projects</p>
        </div>
        <div onClick={onfeedback} className="Mheaderbutton">
          <p>feedbacks</p>
        </div>
        <div onClick={oncontact} className="Mheaderbutton">
          <p>contact me</p>
        </div>
      </div>
    </div>
  );
}

export default Headermobile;
