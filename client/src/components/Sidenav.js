import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Sidenav extends Component {
  render() {
    return (
      <div className="sidenav">
        <Link className="brand" to="/">
          <p align="center">Address Book</p>
          <hr
            style={{
              backgroundColor: "#fff",
              marginBottom: "80px"
            }}
          />
        </Link>
        <Link className="active" to="/">
          All Contacts
        </Link>
        <Link className="" to="/add">
          New Contact
        </Link>
      </div>
    );
  }
}

export default Sidenav;
