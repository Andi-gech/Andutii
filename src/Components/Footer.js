import "../App.css";
import logo from "../Assets/logo.png";
import { FaFacebook, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
function Footer() {
  const [light, setlight] = useState(true);
  return (
    <div className="footer">
      <div className="copyright">
        <span style={{ marginRight: 5 }}>&copy;</span> copyright Ristricted
      </div>
    </div>
  );
}

export default Footer;
