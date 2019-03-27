import React, { Component } from "react";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = props => {
    return (
      <nav>
        <div className="welcome">Welcome!</div>
        <div className="nav-bar-buttons">
          <Router>
            <Link to="/campuses">
              <div>Campuses</div>
            </Link>
          </Router>
          <Router>
            <Link to="/students">
              <div>Students</div>
            </Link>
          </Router>
        </div>
      </nav>
    );
  }
  return (
    <nav>
      <div className="welcome">Welcome!</div>
      <div className="nav-bar-buttons">
        <Link to="/campuses">
          <div>Campuses</div>
        </Link>
        <Link to="/students">
          <div>Students</div>
        </Link>
      </div>
    </nav>
  );
};

  export default Header;
export default Header;