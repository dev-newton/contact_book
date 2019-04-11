import React, { Component } from "react";
import axios from "axios";
import "./Navbar.css";

class ViewContact extends Component {
  state = {
    contact: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await axios.get(`/api/contacts/${id}`);
    const contact = response.data;
    this.setState({ contact: contact });
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="col-xs-12">
            <h2 style={{ color: "#495057" }}>
              {this.state.contact.full_name
                ? this.state.contact.full_name
                : "NOT FOUND"}
            </h2>
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
                  disabled
                  value={this.state.contact.full_name || ""}
                  placeholder="Enter Full Name"
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
                  disabled
                  value={this.state.contact.email || ""}
                  required
                  name="email"
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
                  disabled
                  value={this.state.contact.phone_number || ""}
                  name="phone_number"
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
                  disabled
                  value={this.state.contact.address || ""}
                  placeholder="Enter Residential Address"
                />
              </div>
              <br />
              <button className="btn btn-primary">Go Back</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewContact;
