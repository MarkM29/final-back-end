import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark CustomColor">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          KiosNote
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
            <Link className="nav-link" to="/summary">
              Summary
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
