import React from "react";
import "../styles/style.css";
import fbIcon from "../Assets/logo-facebook.png";
import twitterIcon from "../Assets/logo-twitter.png";
import igIcon from "../Assets/logo-instagram.png";
import ilabLogo from "../Assets/logo-ilab.png";

function Footer() {
  return (
    <footer className="d-flex flex-row justify-content-evenly py-4">
      <div className="d-flex flex-column justify-content-center">
        <img src={ilabLogo} alt="" className="footer-logo" />
        <p className="text-grey">Copyright &copy; @ 2022. Infinite Learning</p>
      </div>
      <div className="d-flex flex-column">
        <h5 className="text-grey fw-semibold mb-2">Services</h5>
        <p>Email Marketing</p>
        <p>Campaign</p>
        <p>Branding</p>
        <p>Offline</p>
      </div>
      <div className="d-flex flex-column">
        <h5 className="text-grey fw-semibold mb-2">About</h5>
        <p>Our Story</p>
        <p>Benefits</p>
        <p>Team</p>
        <p>Careers</p>
      </div>
      <div className="d-flex flex-column">
        <h5 className="text-grey fw-semibold mb-2">Follow Us</h5>
        <p>
          <img src={fbIcon} alt="" className="logo-facebook" />
          Facebook
        </p>
        <p>
          <img src={twitterIcon} alt="" className="logo-twitter" />
          Twitter
        </p>
        <p>
          <img src={igIcon} alt="" className="logo-instagram" />
          Instagram
        </p>
      </div>
    </footer>
  );
}

export default Footer;
