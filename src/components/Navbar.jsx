import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <button className="invertButton">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg"
            alt=".NET Logo"
            width="100"
          />
        </button>
      </div>
      <div className="right">
        <ul>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/cv">RESUMÉ</NavLink></li>
          <li><NavLink to="/about">ABOUT ME</NavLink></li>
          <li><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
