import React, { Component } from "react";
import axios from "axios";
import "./Navbar.css";

class UpdateContact extends Component {
  state = {
    contact: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await axios.get(`/api/contacts/${id}`);
    const contact = response.data;
    this.setState({ contact: contact });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const updatedContact = {
      full_name: this.state.full_name,
      email: this.state.email,
      phone_number: this.state.phone_number,
      address: this.state.address
    };
    axios.put(`/api/contacts/update/${id}`, updatedContact).then(res => {
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
                  defaultValue={this.state.contact.full_name || ""}
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
                  defaultValue={this.state.contact.email || ""}
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
                  defaultValue={this.state.contact.phone_number || ""}
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
                  defaultValue={this.state.contact.address || ""}
                  placeholder="Enter Residential Address"
                  onChange={this.onChange}
                />
              </div>
              <br />
              <button className="btn btn-primary">Update contact</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateContact;
