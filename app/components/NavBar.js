import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <div id="navlinks">
          <NavLink to="/campuses" activeClassName="active" className="navlink">
            Home
          </NavLink>
        </div>
        <div id="navlink-students">
          <NavLink to="/students" activeClassName="active" className="navlink">
            Students
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
