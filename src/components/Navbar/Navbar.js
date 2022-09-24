import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  }
  return (
    <nav id="Navbar">
      <div id="Logo">
        <Link to="/home">N</Link>
      </div>
      <ul className={open ? "nav-links-show" : "nav-links"}>
        <NavLink onClick={close} to="/home">HOME</NavLink>
        <NavLink onClick={close} to="/sports">SPORTS</NavLink>
        <NavLink onClick={close} to="/science">SCIENCE</NavLink>
        <NavLink onClick={close} to="/technology">TECHNOLOGY</NavLink>
      </ul>
      <div id="hamburger" onClick={() => setOpen(!open)}>
        {open ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
