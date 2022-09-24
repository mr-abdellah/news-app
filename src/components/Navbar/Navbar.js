import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="Navbar">
      <div id="Logo">
        <Link to='/home'>N</Link>
      </div>
      <ul>
        <NavLink to="/home">HOME</NavLink>
        <NavLink to="/sports">SPORTS</NavLink>
        <NavLink to="/science">SCIENCE</NavLink>
        <NavLink to="/technology">TECHNOLOGY</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
