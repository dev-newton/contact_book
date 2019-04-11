import React, { Component } from "react";
import axios from "axios";
import "./Navbar.css";

class AddContact extends Component {
  state = {
    full_name: "",
    email: "",
    phone_number: "",
    address: "",
    error: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    const newContact = {
      full_name: this.state.full_name,
      email: this.state.email,
      phone_number: this.state.phone_number,
      address: this.state.address
    };
    axios.post("/api/contacts/add", newContact).then(res => {
      if (res.data.success) {
        this.props.history.push("/");
      } else {
        this.setState({ error: res.data.message });
        console.log(this.state.error);
      }
    });
  };

  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="col-xs-12">
            <h2 style={{ color: "#495057" }}> New Contact</h2>
            <hr />
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label style={{ fontSize: "18px" }} htmlFor="fullname">
                  Full Name
                </label>
                <input
                  style={{ borderColor: "#11a8c0" }}
                  className="form-control"
                  type="text"
                  id="fullname"
                  name="full_name"
                  placeholder="Enter Full Name"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label style={{ fontSize: "18px" }} htmlFor="email">
                  Email Address
                </label>
                <input
                  style={{ borderColor: "#11a8c0" }}
                  className="form-control"
                  type="email"
                  placeholder="Enter Email Address"
                  id="email"
                  required
                  name="email"
                  onChange={this.onChange}
                />
                <p style={{ color: "red" }}>{this.state.error}</p>
              </div>
              <div className="form-group">
                <label style={{ fontSize: "18px" }} htmlFor="fullname">
                  Phone Number
                </label>
                <input
                  style={{ borderColor: "#11a8c0" }}
                  className="form-control"
                  type="text"
                  placeholder="Enter Phone Number"
                  id="phone"
                  name="phone_number"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <p style={{ fontSize: "18px" }} htmlFor="fullname">
                  Residential Address
                </p>
                <input
                  style={{ borderColor: "#11a8c0" }}
                  className="form-control"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter Residential Address"
                  onChange={this.onChange}
                />
              </div>
              <br />
              <button className="btn btn-primary">Add new contact</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
