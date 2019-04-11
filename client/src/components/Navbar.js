import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav
        style={{ paddingBottom: "20px", backgroundColor: "#11a8c0" }}
        className="navbar navbar-expand-lg "
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <input type="hidden" />
            </li>
            <li className="nav-item">
              <input type="hidden" />
            </li>
            <li className="nav-item">
              <input type="hidden" />
            </li>
          </ul>
          <a
            className="github"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dev-newton"
          >
            Github
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
