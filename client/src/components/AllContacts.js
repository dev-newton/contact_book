import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";

class AllContacts extends Component {
  state = {
    contacts: [],
    c: "",
    activePage: 5
  };

  componentDidMount() {
    this.getContacts();
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  getContacts = () => {
    axios
      .get("/api/contacts")
      .then(res => this.setState({ contacts: res.data, c: res.data.length }));
  };

  onDelete = id => {
    axios.delete(`/api/contacts/delete/${id}`);
    this.setState({
      contacts: this.state.contacts.filter(contact => contact._id !== id)
    });
  };

  render() {
    var contact = (
      <table
        style={{ alignItems: "left" }}
        width="50%"
        className="table table-bordered table-hover"
      >
        <thead>
          <tr align="left">
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Residential Address</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contacts.map(contact => (
            <tr align="left" key={contact._id}>
              <td>
                <Link key={contact._id} to={`/view/${contact._id}`}>
                  {contact.full_name}
                </Link>
              </td>
              <td width="150">{contact.email}</td>
              <td>{contact.phone_number}</td>
              <td>{contact.address}</td>
              <td className="btn btn-success btn-md">
                <Link style={{ color: "white" }} to={`/update/${contact._id}`}>
                  Update
                </Link>
              </td>
              <td className="btn btn-danger">
                <Link
                  onClick={this.onDelete.bind(this, contact._id)}
                  style={{ color: "white" }}
                  to="/"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    var loading = (
      <div className="">
        <div className="loader" />
      </div>
    );
    return (
      <div className="main">
        <div className="container">
          <h2 style={{ color: "#495057" }}> All Contacts</h2>
          <hr />
          <Link to="/add">
            <div style={{ marginLeft: "980px" }}>
              <button className="btn btn-primary"> New Contact</button>
            </div>
          </Link>
          <br />
          {this.state.contacts.length > 0 && this.componentDidMount
            ? contact
            : loading}
        </div>
      </div>
    );
  }
}

export default AllContacts;
