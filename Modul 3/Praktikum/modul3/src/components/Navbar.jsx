import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import ilabLogo from "../Assets/logo-ilab.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-4">
      <div className="container-fluid">
        <a className="navbar-brand" href>
          <img src={ilabLogo} alt="" className="logo" />
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
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link to="/" className="mx-2 fw-semibold">
              HOME
            </Link>
            <Link to="/about" className="mx-2 fw-semibold">
              ABOUT US
            </Link>
            <Link to="/contact" className="mx-2 fw-semibold">
              CONTACT
            </Link>
          </div>
        </div>
        <button className="btn btn-signin btn-outline-dark me-3">
          SIGN UP
        </button>
        <button className="btn btn-login">LOG IN</button>
      </div>
    </nav>
  );
}

export default Navbar;
